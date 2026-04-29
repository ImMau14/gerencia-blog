---
title: "Diseño responsivo moderno sin frameworks CSS"
description: "Aprovecha las herramientas nativas de CSS para crear layouts adaptables."
pubDate: 2026-04-01
author: "Lucía Fernández"
tags:
  - css
  - diseño-responsivo
  - desarrollo-web
---

Muchos proyectos aún dependen de Bootstrap o Tailwind, pero CSS moderno tiene superpoderes que reducen la necesidad de frameworks.

## Container queries

En lugar de depender solo del viewport, podemos ajustar componentes según el tamaño de su contenedor:

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

## Grid y subgrid

Con `subgrid` podemos alinear elementos anidados a la cuadrícula principal, manteniendo la consistencia visual sin cálculos manuales.

## Conclusión

El ecosistema CSS ha madurado enormemente. Antes de añadir una dependencia externa, explora las posibilidades nativas. Mantendrás tu proyecto más ligero y fácil de mantener.
