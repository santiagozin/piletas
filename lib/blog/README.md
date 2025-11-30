# Sistema de Blog

Este directorio contiene el sistema de blog para la aplicación.

## Estructura

- `types.ts`: Tipos TypeScript para los posts del blog
- `posts.json`: Archivo JSON que contiene todos los posts del blog
- `images.ts`: Mapeo de imágenes para los posts
- `index.ts`: Funciones para obtener y filtrar posts

## Agregar un Nuevo Post

Para agregar un nuevo post, edita el archivo `posts.json` y agrega un nuevo objeto con la siguiente estructura:

```json
{
  "id": "5",
  "slug": "url-amigable-del-post",
  "title": "Título del Post",
  "excerpt": "Breve descripción que aparecerá en la lista de posts",
  "content": "<h2>Contenido HTML</h2><p>El contenido completo del post en formato HTML</p>",
  "image": "/app/assets/ruta-de-la-imagen.jpg",
  "author": "Nombre del Autor",
  "date": "2024-01-20",
  "category": "Categoría",
  "tags": ["tag1", "tag2"],
  "featured": false
}
```

### Campos Requeridos

- `id`: Identificador único (string)
- `slug`: URL amigable única (string, sin espacios, usar guiones)
- `title`: Título del post
- `excerpt`: Descripción breve (aparece en la lista)
- `content`: Contenido completo en HTML
- `image`: Ruta de la imagen (debe estar en `app/assets/`)
- `author`: Nombre del autor
- `date`: Fecha en formato YYYY-MM-DD

### Campos Opcionales

- `category`: Categoría del post
- `tags`: Array de etiquetas
- `featured`: Boolean, si es true aparecerá marcado como destacado

### Agregar una Nueva Imagen

1. Coloca la imagen en la carpeta `app/assets/` (o subcarpetas)
2. Importa la imagen en `images.ts`:
   ```typescript
   import nuevaImagen from '../../app/assets/nueva-imagen.jpg';
   ```
3. Agrega la entrada en el objeto `blogImages`:
   ```typescript
   export const blogImages: Record<string, any> = {
     // ... otras imágenes
     '/app/assets/nueva-imagen.jpg': nuevaImagen
   };
   ```
4. Usa la ruta en el campo `image` del post JSON

## Funciones Disponibles

- `getAllPosts()`: Obtiene todos los posts
- `getPostBySlug(slug)`: Obtiene un post por su slug
- `getFeaturedPosts()`: Obtiene solo los posts destacados
- `getPostsByCategory(category)`: Filtra posts por categoría
- `getPostsByTag(tag)`: Filtra posts por etiqueta

