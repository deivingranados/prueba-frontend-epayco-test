# prueba-frontend-epayco-test

Este proyecto es una prueba de frontend desarrollada usando Next.js y TypeScript. A continuación, se explican las decisiones técnicas tomadas durante el desarrollo del proyecto y las razones detrás de ellas.

# Decisiones Técnicas 
# 1. Uso de Next.js en lugar de Vite
Elegí Next.js sobre Vite por varias razones.

Renderizado del lado del servidor (SSR): Next.js proporciona una funcionalidad integrada para el renderizado del lado del servidor (SSR), lo que mejora el SEO y el rendimiento general de la aplicación. Esto es especialmente importante para aplicaciones que requieren tiempos de carga rápidos y una buena indexación en motores de búsqueda.

Routing simplificado: Next.js maneja el sistema de rutas basado en el sistema de archivos, lo que permite una estructura de carpetas clara y sencilla para manejar las páginas. No es necesario configurar un enrutador manual como en React o Vite.

Optimización automática: Next.js incluye una serie de optimizaciones automáticas, como la generación de páginas estáticas y el prerenderizado, lo que reduce el esfuerzo manual para optimizar la aplicación.

En resumen, Next.js proporciona una solución más robusta para aplicaciones de producción, con una mejor gestión de SEO, optimización automática y manejo de rutas, mientras que Vite es excelente para proyectos más pequeños o con menos requisitos de SSR.

# 2. Uso de TypeScript y creación de interfaces
El uso de TypeScript mejora la robustez del código al añadir tipado estático. Esto ofrece varias ventajas:

Prevención de errores: TypeScript detecta errores durante el desarrollo, lo que mejora la calidad del código y reduce el número de bugs en producción.

Mejor documentación: El uso de interfaces en TypeScript actúa como una forma de documentación viva. Es fácil ver qué tipos de datos espera una función o componente sin tener que buscar en todo el código.

Facilidad para colaborar: En equipos más grandes, el tipado estricto facilita el trabajo colaborativo, ya que otros desarrolladores pueden entender rápidamente qué datos se manejan y cómo interactúan entre componentes.
# 3. Uso de useState en lugar de react-query
Decidí usar useState y useEffect para la gestión del estado local en lugar de react-query por las siguientes razones.

Simplicidad: Para esta prueba, useState es una solución sencilla y eficiente. Dado que la aplicación no depende de una API externa con muchas operaciones de datos, useState cubre perfectamente las necesidades sin agregar complejidad adicional.

Control directo sobre los datos: Al usar useState, tengo un control más directo sobre el manejo de los datos, como la creación, actualización y eliminación de elementos en el estado de la aplicación, sin la sobrecarga de abstraerlo a través de una librería como react-query.

Si se tratara de una aplicación con interacciones más complejas con una API (caching, sincronización de datos, etc.), react-query sería una mejor opción. Sin embargo, en este caso, useState cumple bien con los requisitos.
