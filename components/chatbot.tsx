'use client';

import { Button } from '@headlessui/react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { AuroraText } from './magicui/aurora-text';

// Definir interfaces para tipado
interface Message {
  text: string;
  isBot: boolean;
  recommendedProduct?: RecommendedProduct | null; // <-- Nuevo campo
}

interface RecommendedProduct {
  name: string;
  description: string;
  price: number;
  handle: string;
  imageUrl: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: '¡Hola! 👋 Soy tu asistente experto en piscinas. Puedo ayudarte con problemas de mantenimiento, recomendarte productos y responder tus dudas sobre el cuidado de tu pileta. ¿En qué puedo ayudarte?',
      isBot: true
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedProduct, setRecommendedProduct] = useState<RecommendedProduct | null>(null);

  const productImages: { [key: string]: string } = {
    'Cloro Granulado': '/cloro-granulado.png',
    Alguicida: '/alguicida.png',
    Clarificador: '/clarificador.png',
    'Regulador pH': '/regulador-ph.png',
    'Kit Medidor': '/kit-medidor.png',
    Barrefondo: '/barrefondo.png',
    'Red de Limpieza': '/red-limpieza.png'
    // Agregar más productos según sea necesario
  };

  const obtenerRespuestaIA = async (mensajeUsuario: string) => {
    try {
      const response = await fetch('/api/chat/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sessionId: crypto.randomUUID(), // Genera un ID único para la sesión
          message: mensajeUsuario,
          userEmail: 'usuario@ejemplo.com' // Aquí deberías obtener el email del usuario autenticado
        })
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta de la IA');
      }

      const data = await response.json();
      return {
        message: data.message,
        recommendedProduct: data.recommendedProduct
      };
    } catch (error) {
      console.error('Error al obtener respuesta de la IA:', error);
      return {
        message: 'Lo siento, hubo un error al procesar tu mensaje. ¿Podrías intentarlo de nuevo?',
        recommendedProduct: null
      };
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    const userMessage = input;
    setInput('');

    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);

    const respuesta = await obtenerRespuestaIA(userMessage);

    // 2. Guardar el producto recomendado junto al mensaje del bot
    setMessages((prev) => [
      ...prev,
      {
        text: respuesta.message,
        isBot: true,
        recommendedProduct: respuesta.recommendedProduct // <-- Aquí
      }
    ]);
    setIsLoading(false);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt); // Establece el texto del prompt en el input
  };

  return (
    <div className="relative mt-12 bg-gradient-to-t from-primary to-secondary pt-10" id="ayuda">
      <h2 className="text-center text-4xl font-bold tracking-tighter md:text-4xl lg:text-5xl px-2">
        Te ayudamos <AuroraText>a elegir</AuroraText>
      </h2>
      <p className="text-center text-lg text-gray-500 mt-2">Consulta con a IA para encontrar el producto ideal para vos</p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 border-t border-white mt-4 pt-4 ">
        <div
          className="flex flex-col gap-2 rounded-full bg-zinc-200 hover:bg-opacity-50 border border-white p-1 px-4 text-center text-sm font-medium text-blue-900 cursor-pointer"
          onClick={() => handlePromptClick("Tengo la pileta verde, que puedo hacer?")}
        >
          <p>Tengo la pileta verde, que puedo hacer?</p>
        </div>
        <div
          className="flex max-w-xs flex-col gap-2 rounded-full bg-zinc-200 hover:bg-opacity-50 border border-white p-1 px-4 text-center text-sm font-medium text-blue-900 cursor-pointer"
          onClick={() => handlePromptClick("Cuantos KG de cloro necesito para una pileta de 30m3?")}
        >
          <p>Cuantos KG de cloro necesito para una pileta de 30m3?</p>
        </div>
        <div
          className="flex max-w-xs flex-col gap-2 rounded-full bg-zinc-200 hover:bg-opacity-50 border border-white p-1 px-4 text-center text-sm font-medium text-blue-900 cursor-pointer"
          onClick={() => handlePromptClick("Tengo una pileta pintada, que tipo de producto puedo usar?")}
        >
          <p>Tengo una pileta pintada, que tipo de producto puedo usar?</p>
        </div>
      </div>

      <div className="z-[99999999] mx-auto mt-10 max-w-4xl rounded-lg p-4">
        <div className="mb-4">
          <div className="p-0 md:p-4">
            <div className="mb-4 h-96 overflow-y-auto">
              {/* 3. Renderizar el producto recomendado junto a cada mensaje del bot */}
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.isBot ? 'text-left' : 'text-right'}`}>
                  <span
                    className={`inline-block rounded-lg p-2 ${
                      message.isBot ? 'bg-gray-100 text-blue-900' : 'bg-green-100 text-green-900'
                    }`}
                  >
                    {message.text}
                  </span>
                  {/* Mostrar producto recomendado si existe */}
                  {message.isBot && message.recommendedProduct && (
                    <div className="mt-2 rounded-lg bg-white p-4 shadow-xl">
                      <h3 className="mb-2 font-medium">Producto Recomendado:</h3>
                      <div className="rounded-lg p-2 hover:bg-gray-50">
                        <img
                          src={message.recommendedProduct.imageUrl}
                          alt={message.recommendedProduct.name}
                          width={80}
                          height={80}
                          className="mb-2 h-auto w-full max-w-[250px] rounded-lg"
                        />
                        <h4 className="font-bold text-primary">{message.recommendedProduct.name}</h4>
                        <p className="text-sm text-gray-600">{message.recommendedProduct.description}</p>
                        <p className="mt-2 font-bold text-green-600">${message.recommendedProduct.price}</p>
                        <Button
                          className="mt-2 w-full bg-primary text-white hover:bg-primary/90 py-4 rounded-full"
                          onClick={() => alert(`Producto agregado: ${message.recommendedProduct?.name}`)}
                        >
                          Agregar al carrito
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="">
                  <span className="inline-block rounded-full bg-gray-100 p-2">Pensando...</span>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu pregunta.."
                className="flex-1 rounded-full border p-4 w-full"
                disabled={isLoading}
              />
              <button
                className="rounded-lg bg-pensok px-4 py-2 text-white md:min-w-28"
                onClick={handleSend}
                disabled={isLoading}
              >
                <span className="hidden md:block">Preguntar</span>
                <span className="block md:hidden"><FaArrowRight /></span>
              </button>
            </div>
          </div>
        </div>
        {/* 4. Eliminar el card flotante global de producto recomendado */}
      </div>
    </div>
  );
}
