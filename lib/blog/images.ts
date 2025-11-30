// Mapeo de imágenes para los posts del blog
import bannerPileta from '../../app/assets/banner-pileta.jpg';
import productosQuimicos from '../../app/assets/productosQuimicos.png';
import dolphins from '../../app/assets/productos/dolphins.png';
import limpieza from '../../app/assets/limpieza.png';
import post1 from '../../app/assets/posts/post-1.jpg';
import post2 from '../../app/assets/posts/post-2.jpg';
import post3 from '../../app/assets/posts/post-3.jpg';

export const blogImages: Record<string, any> = {
  '/app/assets/banner-pileta.jpg': bannerPileta,
  '/app/assets/productosQuimicos.png': productosQuimicos,
  '/app/assets/productos/dolphins.png': dolphins,
  '/app/assets/limpieza.png': limpieza,
  '/app/assets/posts/post-1.jpg': post1,
  '/app/assets/posts/post-2.jpg': post2,
  '/app/assets/posts/post-3.jpg': post3
};

export function getBlogImage(imagePath: string) {
  return blogImages[imagePath] || bannerPileta; // Fallback a una imagen por defecto
}

