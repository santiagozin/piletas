# Guía de Variables de Tamaño en Tailwind

## Variables CSS Disponibles

### Espaciado (Spacing)
- `--spacing-xs` (4px) → `p-var-xs`, `m-var-xs`, `gap-var-xs`
- `--spacing-sm` (8px) → `p-var-sm`, `m-var-sm`, `gap-var-sm`
- `--spacing-md` (16px) → `p-var-md`, `m-var-md`, `gap-var-md`
- `--spacing-lg` (24px) → `p-var-lg`, `m-var-lg`, `gap-var-lg`
- `--spacing-xl` (32px) → `p-var-xl`, `m-var-xl`, `gap-var-xl`
- `--spacing-2xl` (48px) → `p-var-2xl`, `m-var-2xl`, `gap-var-2xl`
- `--spacing-3xl` (64px) → `p-var-3xl`, `m-var-3xl`, `gap-var-3xl`
- `--spacing-4xl` (96px) → `p-var-4xl`, `m-var-4xl`, `gap-var-4xl`
- `--spacing-5xl` (128px) → `p-var-5xl`, `m-var-5xl`, `gap-var-5xl`

### Ancho (Width)
- `--width-xs` (320px) → `w-var-xs`
- `--width-sm` (384px) → `w-var-sm`
- `--width-md` (448px) → `w-var-md`
- `--width-lg` (512px) → `w-var-lg`
- `--width-xl` (576px) → `w-var-xl`
- `--width-2xl` (672px) → `w-var-2xl`
- `--width-3xl` (768px) → `w-var-3xl`
- `--width-4xl` (896px) → `w-var-4xl`
- `--width-5xl` (1024px) → `w-var-5xl`
- `--width-6xl` (1152px) → `w-var-6xl`
- `--width-7xl` (1280px) → `w-var-7xl`

### Altura (Height)
- `--height-xs` (320px) → `h-var-xs`
- `--height-sm` (384px) → `h-var-sm`
- `--height-md` (448px) → `h-var-md`
- `--height-lg` (512px) → `h-var-lg`
- `--height-xl` (576px) → `h-var-xl`
- `--height-2xl` (672px) → `h-var-2xl`
- `--height-3xl` (768px) → `h-var-3xl`
- `--height-4xl` (896px) → `h-var-4xl`
- `--height-5xl` (1024px) → `h-var-5xl`

### Tamaño (Size - ancho y altura)
- `--size-xs` (16px) → `size-var-xs`
- `--size-sm` (24px) → `size-var-sm`
- `--size-md` (32px) → `size-var-md`
- `--size-lg` (48px) → `size-var-lg`
- `--size-xl` (64px) → `size-var-xl`
- `--size-2xl` (96px) → `size-var-2xl`
- `--size-3xl` (128px) → `size-var-3xl`
- `--size-4xl` (192px) → `size-var-4xl`
- `--size-5xl` (256px) → `size-var-5xl`

### Radio de Borde (Border Radius)
- `--radius-xs` (2px) → `rounded-var-xs`
- `--radius-sm` (4px) → `rounded-var-sm`
- `--radius-md` (6px) → `rounded-var-md`
- `--radius-lg` (8px) → `rounded-var-lg`
- `--radius-xl` (12px) → `rounded-var-xl`
- `--radius-2xl` (16px) → `rounded-var-2xl`
- `--radius-3xl` (24px) → `rounded-var-3xl`
- `--radius-full` (9999px) → `rounded-var-full`

### Tamaño de Fuente (Font Size)
- `--font-xs` (12px) → `text-var-xs`
- `--font-sm` (14px) → `text-var-sm`
- `--font-base` (16px) → `text-var-base`
- `--font-lg` (18px) → `text-var-lg`
- `--font-xl` (20px) → `text-var-xl`
- `--font-2xl` (24px) → `text-var-2xl`
- `--font-3xl` (30px) → `text-var-3xl`
- `--font-4xl` (36px) → `text-var-4xl`
- `--font-5xl` (48px) → `text-var-5xl`
- `--font-6xl` (60px) → `text-var-6xl`
- `--font-7xl` (72px) → `text-var-7xl`
- `--font-8xl` (96px) → `text-var-8xl`
- `--font-9xl` (128px) → `text-var-9xl`

## Ejemplos de Uso

```jsx
// Ejemplo de componente usando las variables
function MiComponente() {
  return (
    <div className="w-var-lg h-var-md p-var-xl m-var-lg rounded-var-lg">
      <h1 className="text-var-3xl mb-var-md">Título</h1>
      <p className="text-var-base">Contenido con tamaño variable</p>
      <button className="px-var-lg py-var-sm rounded-var-md">
        Botón
      </button>
    </div>
  );
}
```

## Ventajas

1. **Consistencia**: Todos los tamaños están centralizados
2. **Mantenibilidad**: Cambiar un valor en CSS afecta toda la aplicación
3. **Responsive**: Puedes cambiar las variables en media queries
4. **Flexibilidad**: Fácil personalización por tema o contexto

## Personalización

Para cambiar los valores, simplemente modifica las variables CSS en `app/globals.css`:

```css
:root {
  --spacing-md: 1.25rem; /* Cambiar de 1rem a 1.25rem */
  --width-lg: 40rem;     /* Cambiar de 32rem a 40rem */
}
```

## Uso Directo de Variables CSS

También puedes usar las variables directamente en CSS:

```css
.mi-clase {
  width: var(--width-lg);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
}
```
