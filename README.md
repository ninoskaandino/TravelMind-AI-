# TravelMind AI

TravelMind AI es un planificador inteligente de viajes que diseña itinerarios personalizados según tus preferencias. 

El proyecto combina una base de datos curada local para las principales ciudades españolas con un motor dinámico de búsqueda geográfica global. Esto permite generar itinerarios realistas con información precisa, fotografías reales de monumentos y enlaces a tours mundiales para **cualquier ciudad del mundo**.

---

## ✦ Nuevas Funcionalidades Globales

- **Soporte de Destinos Mundiales:** Escribe cualquier ciudad de cualquier país y la aplicación buscará automáticamente su ubicación geográfica real en tiempo real.
- **RAG Dinámico Global (Wikipedia API):** Consultas en vivo a la API de Wikipedia utilizando geosearch para ubicar atracciones, museos, monumentos históricos y parques en un radio de 10 km de la ciudad consultada.
- **Tarjetas Enriquecidas con Fotografías:** Los itinerarios muestran fotos reales de las atracciones recuperadas y proveen un enlace directo para leer más sobre su historia en Wikipedia.
- **Enlaces a Tours Mundiales:** Integra accesos directos dinámicos y autogenerados a plataformas líderes de tours mundiales (**Viator**, **GetYourGuide** y **TripAdvisor**) para reservar visitas guiadas y actividades del destino buscado.
- **Base RAG Local de España (Curada):** Mantiene circuitos detallados y optimizados manualmente para:
  - Madrid
  - Barcelona
  - Sevilla
  - Valencia
  - Granada
  - Bilbao
- **Formulario Inteligente de Viaje:** Configuración de duración (1 a 14 días), presupuesto total, tipo de viajero (pareja, familia, amigos, solo, negocios) y filtros de intereses específicos.
- **Control de Calidad en Tiempo Real:** Validación del presupuesto estimado, duración, actividades repetidas y avisos sobre restricciones de viaje.
- **Variantes de Ritmo y Enfoque:** Botones de acceso rápido para recalcular el itinerario y priorizar variantes (más económica, más cultural, más relajada o más aventurera).
- **Edición Manual de Itinerarios:** Cada actividad en el itinerario cuenta con un área de edición directa.

---

## 🛠️ Tecnologías Utilizadas

- **Estructura e Interfaz:** HTML5 Semántico y CSS3 con diseño adaptativo (Mobile-Friendly).
- **Lógica de Cliente:** JavaScript moderno (ES6+) estructurado de manera modular.
- **Geocodificación y Mapas:** API pública de **Nominatim (OpenStreetMap)** para geocodificar nombres de ciudades.
- **Base de Conocimiento (RAG):** API de **MediaWiki (Wikipedia)** para la obtención en tiempo real de atracciones turísticas locales, resúmenes breves y thumbnails fotográficos (sin requerir API Keys).

---

## 🚀 Uso y Despliegue Local

### Ejecución Local

Para visualizar el proyecto localmente, sirve los archivos usando cualquier servidor web estático.

**Ejemplo en Python:**
```bash
python -m http.server 4173
```

Luego abre la dirección [http://127.0.0.1:4173/](http://127.0.0.1:4173/) en tu navegador.

### Despliegue en Vercel

Dado que es un proyecto estático puro, puedes subirlo a Vercel con **Zero Configuration**:
1. Conecta tu repositorio Git a la plataforma de Vercel.
2. Selecciona **Other** como Framework Preset.
3. Haz clic en **Deploy**. ¡Listo!
