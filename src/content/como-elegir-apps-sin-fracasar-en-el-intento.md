---
title: "Cómo elegir 'Productos de Aplicación Específicos' sin morir en el intento"
description: "Guía gerencial para decidir entre desarrollo a medida, software empaquetado (COTS) y SaaS, evaluando funcionalidad, dependencia del proveedor y costos reales."
pubDate: 2026-05-09
author: "Mauricio Rodríguez"
tags:
  - aplicaciones
  - productos-de-aplicacion
  - seleccion-software
  - estrategia-ti
banner: "/banners/post_3.webp"
---

Elegir el sistema operativo fue solo el principio. Ahora toca lo que realmente impacta los procesos diarios: las aplicaciones específicas que manejan la nómina, la contabilidad, los proyectos o el ERP universitario. Un gerente de informática no elige software por moda o por lo que "sabe hacer" el equipo técnico, sino por el valor y el riesgo que cada opción aporta al negocio.

## Los tres modelos de adquisición que todo gerente debe dominar

Antes de evaluar funcionalidades, hay que decidir _cómo_ se va a obtener el software. Existen tres grandes caminos:

1. **Desarrollo a medida**  
   Construido desde cero por un equipo interno o externo. Ofrece un ajuste funcional máximo, pero exige una alta inversión inicial, tiempo y una dependencia total del equipo desarrollador.

2. **Software empaquetado (COTS – Commercial Off-The-Shelf)**  
   Producto estándar que se adquiere bajo licencia y se instala en servidores propios (ej. un ERP on-premise). Tiene funcionalidades predefinidas y requiere adaptación a los procesos de la organización, pero suele ser más rápido de desplegar que un desarrollo a medida.

3. **Software como Servicio (SaaS)**  
   Se consume a través de internet, pagando una suscripción periódica. La infraestructura, el mantenimiento y las actualizaciones las gestiona el proveedor. Minimiza la carga operativa, pero genera una fuerte dependencia del roadmap y la estabilidad del fabricante.

## Criterios gerenciales para no fallar en la selección

Más allá de la lista de funcionalidades, un gerente debe evaluar estos aspectos con visión estratégica:

- **Ajuste funcional (fit)**  
  ¿Cubre el software los procesos reales sin obligar a la organización a cambiar su esencia? Hacer un levantamiento de requisitos con los dueños del proceso evita comprar un ERP que solo se usa al 30 %.

- **Dependencia del proveedor (vendor lock-in)**  
  ¿Qué tan fácil es migrar los datos si el proveedor sube los precios o desaparece? Los estándares abiertos, las API bien documentadas y la portabilidad de los datos reducen este riesgo.

- **Costo Total de Propiedad (TCO) completo**  
  No es solo el precio de la licencia o suscripción. Incluye implementación, personalización, integración con otros sistemas, capacitación, soporte, actualizaciones y el coste de una eventual migración.

- **Integración con el ecosistema existente**  
  Una aplicación de nómina que no se comunica con el ERP contable duplica el trabajo y genera errores. Validar la compatibilidad con el sistema operativo, la base de datos y los protocolos de seguridad actuales es tan importante como las funciones del producto.

- **Escalabilidad**  
  ¿Soportará el doble de usuarios o transacciones sin degradarse? La promesa de "escalar en la nube" debe contrastarse con los costos de los planes superiores.

- **Soporte y comunidad**  
  Un software con una comunidad activa y partners locales (o regionales) permite resolver problemas sin depender exclusivamente del fabricante.

Para ayudar a visualizar cómo se comporta cada modelo frente a estos criterios, la siguiente tabla resume las diferencias clave:

| Criterio                   | Desarrollo a medida           | COTS (empaquetado)                   | SaaS                                      |
| -------------------------- | ----------------------------- | ------------------------------------ | ----------------------------------------- |
| Ajuste funcional           | Máximo                        | Medio – requiere personalización     | Predeterminado, configurable              |
| Dependencia del equipo     | Alta (equipo propio)          | Media (consultores)                  | Baja en operación, alta del proveedor     |
| Tiempo de puesta en marcha | Largo                         | Medio                                | Corto                                     |
| Inversión inicial          | Alta                          | Alta (licencias)                     | Baja (suscripción)                        |
| TCO típico a 5 años        | Variable, difícil de predecir | Predecible si hay control de cambios | Más fácil de presupuestar por suscripción |
| Escalabilidad              | Depende de la arquitectura    | Limitada al hardware                 | Generalmente alta                         |

## Un marco mental para decidir sin paralizarse

![Matriz de decisión: ajuste funcional vs. dependencia del proveedor. Eje vertical: ajuste funcional (bajo-alto); eje horizontal: dependencia del proveedor (baja-alta). Cuadrantes con recomendaciones: desarrollo a medida cuando el ajuste es alto y la dependencia baja; COTS cuando ambos son medios; SaaS cuando el ajuste es alto pero la dependencia es alta; reevaluar opciones si ambos son bajos.](/posts/post_3_1.webp)

La imagen anterior propone un esquema simple: si tu necesidad es altamente diferenciadora y puedes gestionar el desarrollo internamente, un desarrollo a medida es la opción correcta. Si los procesos son estándar (como una nómina que cumple legislación local), un SaaS maduro o un COTS configurable suelen ser más seguros y económicos.

En la práctica, un gerente de informática muchas veces termina combinando modelos. Por ejemplo:

- ERP administrativo de la universidad: COTS on-premise (por control de datos) o SaaS sectorial especializado.
- Software de nómina: SaaS con actualización fiscal automática.
- Sistemas contables específicos: COTS adaptado a la normativa local.
- Herramientas de gestión de proyectos de TI: SaaS colaborativo, por la facilidad de acceso remoto.

## Conclusión

Elegir una aplicación específica es un acto de equilibrio permanente entre el control y la conveniencia, entre la personalización y la dependencia. La clave está en evaluar cada escenario con los criterios gerenciales descritos, sin enamorarse de la tecnología, sino midiendo el costo, el riesgo y el retorno operativo que aporta. En el siguiente post hablaremos de cómo blindar esas decisiones mediante una correcta gestión de licencias y contratos.

**Fuentes consultadas:**

- [Evaluando ERP – Software a medida vs. empaquetado: ¿cuál te conviene?](https://www.evaluandoerp.com/software-a-medida-vs-empaquetado/)
- [TIC Portal – SaaS, PaaS, IaaS: diferencias y cuándo usarlos](https://www.ticportal.es/temas/cloud-computing/saas-paas-iaas-diferencias)
- [SAP Insights – ¿Qué es un sistema ERP?](https://www.sap.com/spain/insights/what-is-erp.html)
- [ITM Platform – Cómo elegir un software de gestión de proyectos](https://www.itmplatform.com/es/blog/como-elegir-software-gestion-proyectos/)
