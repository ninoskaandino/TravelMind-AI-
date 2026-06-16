# TravelMind AI

TravelMind AI es un prototipo web de planificador de viajes personalizado basado en IA generativa.

La aplicacion permite ingresar destino, duracion, presupuesto, tipo de viajero, intereses y restricciones. Con esos datos genera un itinerario dia por dia con actividades para manana, tarde y noche.

## Funcionalidades

- Formulario de preferencias de viaje.
- Generacion de itinerarios personalizados.
- Base RAG local con circuitos de ciudades espanolas.
- Prompt estructurado visible para auditoria.
- Fine-tuning simulado mediante plantillas de itinerarios.
- Control de calidad para presupuesto, duracion, actividades repetidas y lugares repetidos.
- Edicion manual de actividades.
- Feedback del usuario y variantes de viaje.

## Ciudades con circuitos cargados

- Madrid
- Barcelona
- Sevilla
- Valencia
- Granada
- Bilbao

## Tecnologia

El prototipo esta construido con HTML, CSS y JavaScript. No requiere instalacion de dependencias.

## Uso

Abrir `outputs/travelmind-ai/index.html` en el navegador o servir la carpeta con un servidor estatico.

Ejemplo:

```bash
python -m http.server 4173 --directory outputs/travelmind-ai
```

Luego abrir:

```text
http://127.0.0.1:4173/
```

## Nota academica

Este prototipo no esta conectado a un LLM real. Simula el comportamiento de una aplicacion con IA generativa mediante prompting estructurado, recuperacion RAG local, plantillas de itinerarios y filtros de calidad. En una version productiva, el prompt y el contexto recuperado se enviarian a un modelo real mediante API.
