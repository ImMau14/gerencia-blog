# Gerencia Blog · [![Vercel CI](https://img.shields.io/github/deployments/ImMau14/tscrapingbot-website/production?label=vercel&logo=vercel&logoColor=white)](https://gerencia-blog.vercel.app)

Un blog informativo sobre temas de la materia Gerencia de la Informática de la UNEFA.

---

## Índice

- [Tecnologías](#tecnologías)
- [Construcción](#construcción)
- [Despliegue](#despliegue)
- [Comandos](#comandos)
- [Calidad del código](#calidad-del-código)
- [Licencia](#licencia)

---

## Tecnologías

Este proyecto está principalmente construido con:

- **[Astro](https://astro.build/)** - "Astro es una herramienta de creación de sitios web para la web moderna".
- **[TailwindCSS](https://tailwindcss.com/)** - "Un framework CSS de utilidad-primero para crear rápidamente interfaces de usuario personalizadas.".

> [!NOTE]
> Para hacer cada post del blog, utiliza archivos **markdown** que gracias a Astro, son convertidos a código HTML.

---

## Construcción

Para desarrollo local:

```bash
pnpm install
pnpm dev
```

> [!NOTE]
> El servidor de desarrollo se levantará en `http://localhost:4321` por defecto.

---

## Despliegue

> [!IMPORTANT]
> **Requisitos recomendados**
> - **Node.js** 24 LTS o mayor.
> - **pnpm** 10 o mayor.

1. **Clona el repositorio y entra en él:**

   ```bash
   git clone https://github.com/ImMau14/gerencia-blog.git
   cd gerencia-blog
   ```

2. **Genera el HTML estático (compilado):**

   ```bash
   pnpm build
   ```

3. **Empieza a servir los archivos:**

   ```bash
   pnpm preview # Puedes usar --host para exponer localmente
   ```

> [!NOTE]
> El servidor de producción se levantará en `http://localhost:4321` por defecto.

---

## Comandos

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo con recarga en vivo. |
| `pnpm build` | Compila el sitio a HTML estático en la carpeta `dist/`. |
| `pnpm preview` | Sirve localmente la versión compilada para previsualización. |
| `pnpm astro` | Acceso directo a la CLI de Astro. |
| `pnpm check` | Verifica tipos y errores en los componentes de Astro. |
| `pnpm lint` | Analiza el código con Oxlint para encontrar problemas. |
| `pnpm format` | Verifica el formato del código usando Prettier. |
| `pnpm fix` | Corrige automáticamente errores de linting y formatea el código. |

> [!NOTE]
> Estos comandos son los comandos que están definidos en el archivo `package.json` del proyecto.

---

## Calidad del código

Este proyecto incluye herramientas de calidad de código:

- **[TypeScript](https://www.typescriptlang.org/)** – "Superset tipado de JavaScript que se compila a JavaScript plano".
- **[Oxlint](https://oxc.rs/docs/guide/usage/linter.html)** – "Linter de alto rendimiento para JavaScript y TypeScript".
- **[Prettier](https://prettier.io/)** – "Formateador de código opinado, compatible con múltiples lenguajes".

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
