import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Países permitidos (ISO 3166-1 alpha-2). Por ahora, solo Argentina
const ALLOWED_COUNTRIES = new Set<string>(['AR']);

// Rutas que deben quedar siempre accesibles (estáticos, prerender, etc.)
const ALWAYS_ALLOWED_PATHS: RegExp[] = [
  /^\/_next\//,
  /^\/assets\//,
  /^\/public\//, // por si hay static en public servidos como ruta
  /^\/favicon\.ico$/,
  /^\/robots\.txt$/,
  /^\/sitemap\.xml$/,
  /^\/api\/revalidate\/?.*/,
];

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;

  // Permitir rutas críticas sin chequeo de país
  if (ALWAYS_ALLOWED_PATHS.some((re) => re.test(pathname))) {
    return NextResponse.next();
  }

  // Obtener país desde la geolocalización del edge (Vercel) o header de fallback
  const detectedCountry = request.geo?.country || request.headers.get('x-vercel-ip-country') || 'XX';

  if (!ALLOWED_COUNTRIES.has(detectedCountry)) {
    // Podés cambiar a redirect hacia una página informativa si preferís
    return new NextResponse('Contenido disponible solo en Argentina', { status: 451 });
  }

  return NextResponse.next();
}

// Aplicar a todas las rutas; filtramos internamente con ALWAYS_ALLOWED_PATHS
export const config = {
  matcher: ['/((?!.*).*)'],
};


