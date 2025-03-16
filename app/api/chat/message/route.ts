import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { getProducts } from 'lib/shopify';
import { NextResponse } from 'next/server';

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY no está configurada');
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

export async function POST(request: Request) {
  try {
    const { message, sessionId, userEmail } = await request.json();

    // Obtener productos de Shopify
    const products = await getProducts({});
    
    // Convertir productos a formato simplificado para el chatbot
    const productList = products.map(product => ({
      name: product.title,
      description: product.description,
      price: parseFloat(product.priceRange.maxVariantPrice.amount),
      handle: product.handle,
      imageUrl: product.featuredImage?.url || '/default-product.png'
    }));

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      safetySettings
    });

    const prompt = `Como experto en piscinas, ayuda al cliente con su consulta. Si mencionas algún producto, usa solo los de esta lista:
    ${productList.map(p => `${p.name}: ${p.description} - $${p.price}`).join('\n')}

    Pregunta del cliente: ${message}

    Responde de manera amigable y concisa. Si la consulta está relacionada con algún problema que se pueda resolver con alguno de los productos listados, recomiéndalo.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const botMessage = response.text();

    // Buscar si se mencionó algún producto en la respuesta
    let recommendedProduct = null;
    for (const product of productList) {
      if (botMessage.toLowerCase().includes(product.name.toLowerCase())) {
        recommendedProduct = product;
        break;
      }
    }

    return NextResponse.json({
      message: botMessage,
      recommendedProduct
    });

  } catch (error) {
    console.error('Error en el procesamiento del mensaje:', error);
    return NextResponse.json(
      { error: 'Error procesando el mensaje' },
      { status: 500 }
    );
  }
} 