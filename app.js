const knowledgeBase = [
  {
    destination: "madrid",
    title: "Circuito Madrid esencial",
    interests: ["cultura", "historia", "gastronomia"],
    summary: "Museo del Prado, Parque del Retiro, Palacio Real, Plaza Mayor, Puerta del Sol y Mercado de San Miguel.",
    tips: ["Reserva museos con antelación", "Usa metro para reducir costos", "Agrupa Centro, Sol y Palacio Real el mismo día"],
  },
  {
    destination: "madrid",
    title: "Circuito arte y barrios de Madrid",
    interests: ["cultura", "historia", "compras", "vida nocturna"],
    summary: "Triángulo del Arte, Gran Vía, Malasaña, Chueca, Barrio de las Letras y experiencias nocturnas seguras.",
    tips: ["Visita museos temprano", "Camina el Barrio de las Letras sin prisa", "Elige zonas concurridas para la noche"],
  },
  {
    destination: "madrid",
    title: "Circuito gastronómico madrileño",
    interests: ["gastronomia", "cultura", "descanso"],
    summary: "Chocolate con churros, tapas en La Latina, mercados gastronómicos, cocido madrileño y terrazas tranquilas.",
    tips: ["Evita horas pico en mercados", "Combina tapas con caminatas cortas", "Reserva restaurantes populares"],
  },
  {
    destination: "barcelona",
    title: "Circuito Barcelona modernista",
    interests: ["cultura", "historia", "gastronomia"],
    summary: "Sagrada Familia, Passeig de Gracia, Barrio Gotico, La Boqueria, Barceloneta y Montjuic.",
    tips: ["Compra entradas con antelación", "Agrupa Eixample y Passeig de Gracia", "Evita horas pico en La Rambla"],
  },
  {
    destination: "sevilla",
    title: "Circuito Sevilla historica",
    interests: ["cultura", "historia", "gastronomia"],
    summary: "Catedral, Giralda, Real Alcazar, Santa Cruz, Plaza de Espana, Triana y tapas sevillanas.",
    tips: ["Reserva Alcazar con antelación", "Evita caminar al sol en horas fuertes", "Cruza a Triana para cenar"],
  },
  {
    destination: "valencia",
    title: "Circuito Valencia mediterranea",
    interests: ["cultura", "gastronomia", "naturaleza", "descanso"],
    summary: "Ciudad de las Artes, casco historico, Mercado Central, Jardin del Turia, playa y paella.",
    tips: ["Reserva paella a mediodía", "Recorre el Turia en bicicleta", "Combina centro historico y mercado"],
  },
  {
    destination: "granada",
    title: "Circuito Granada nazari",
    interests: ["cultura", "historia", "gastronomia"],
    summary: "Alhambra, Generalife, Albaicin, Mirador de San Nicolas, Sacromonte y tapas granadinas.",
    tips: ["Compra la Alhambra con mucha antelación", "Usa calzado cómodo", "Sube al mirador antes del atardecer"],
  },
  {
    destination: "bilbao",
    title: "Circuito Bilbao arte y pintxos",
    interests: ["cultura", "gastronomia", "historia"],
    summary: "Museo Guggenheim, Casco Viejo, Mercado de la Ribera, ria de Bilbao y rutas de pintxos.",
    tips: ["Combina Guggenheim con paseo por la ria", "Pide pintxos variados", "Usa tranvia para ahorrar traslados"],
  },
  {
    destination: "general",
    title: "Dataset de itinerarios premium",
    interests: ["cultura", "gastronomia", "naturaleza", "aventura", "descanso", "historia", "compras"],
    summary: "Patrones de viajes bien valorados: ritmo equilibrado, pausas, alternativas y costos realistas.",
    tips: ["Agrupa actividades por zona", "Deja margen entre traslados", "Incluye una opción flexible por día"],
  },
];

const madridCircuits = [
  {
    name: "Madrid monumental",
    interests: ["cultura", "historia", "gastronomia"],
    dayTheme: "Centro histórico y Madrid de los Austrias",
    activities: {
      morning: {
        title: "Puerta del Sol, Plaza Mayor y Madrid de los Austrias",
        place: "Puerta del Sol, Plaza Mayor y calles históricas cercanas",
        tip: "Empieza temprano para caminar con menos gente y mejores fotos.",
        alternative: "Si prefieres un ritmo suave, reduce la ruta a Sol, Plaza Mayor y calle Mayor.",
        reason: "Conecta historia, cultura urbana y orientación básica para entender Madrid desde el primer día.",
        cost: 0,
      },
      afternoon: {
        title: "Palacio Real, Catedral de la Almudena y Jardines de Sabatini",
        place: "Zona Palacio Real - Opera",
        tip: "Compra entrada con antelación si quieres visitar el interior del palacio.",
        alternative: "Si el presupuesto es ajustado, visita exteriores, jardines y miradores.",
        reason: "Es uno de los conjuntos históricos más representativos de la ciudad.",
        cost: 18,
      },
      night: {
        title: "Tapas en Mercado de San Miguel y paseo por la Plaza Mayor iluminada",
        place: "Mercado de San Miguel y Plaza Mayor",
        tip: "Prueba varias porciones pequeñas en lugar de una cena pesada.",
        alternative: "La Latina ofrece bares tradicionales si buscas algo menos turístico.",
        reason: "Integra gastronomía local con un cierre nocturno céntrico y fácil de recorrer.",
        cost: 32,
      },
    },
  },
  {
    name: "Arte, Retiro y letras",
    interests: ["cultura", "historia", "descanso"],
    dayTheme: "Museos, parque y Barrio de las Letras",
    activities: {
      morning: {
        title: "Museo del Prado",
        place: "Paseo del Prado",
        tip: "Prioriza Velázquez, Goya y El Bosco para no saturarte.",
        alternative: "Si prefieres arte moderno, cambia por el Museo Reina Sofía.",
        reason: "Responde directamente a intereses culturales con una visita imprescindible de Madrid.",
        cost: 18,
      },
      afternoon: {
        title: "Parque del Retiro, Palacio de Cristal y Estanque Grande",
        place: "Parque del Retiro",
        tip: "Deja tiempo libre para descansar después del museo.",
        alternative: "Puedes sumar el Real Jardín Botánico si quieres una tarde más tranquila.",
        reason: "Equilibra cultura y descanso, evitando un día demasiado cargado.",
        cost: 0,
      },
      night: {
        title: "Cena y paseo literario por el Barrio de las Letras",
        place: "Barrio de las Letras",
        tip: "Busca una taberna cerca de Huertas o Santa Ana.",
        alternative: "Para una noche más relajada, elige una terraza tranquila en la zona.",
        reason: "Mantiene el hilo cultural del día con una experiencia gastronómica de barrio.",
        cost: 30,
      },
    },
  },
  {
    name: "Madrid local",
    interests: ["gastronomia", "compras", "vida nocturna"],
    dayTheme: "Mercados, Gran Vía y barrios vivos",
    activities: {
      morning: {
        title: "Desayuno con churros y paseo por Gran Vía",
        place: "Gran Vía y zona Callao",
        tip: "Haz esta ruta caminando para ver fachadas, teatros y tiendas.",
        alternative: "Si no quieres dulce, cambia por café y tostada en una cafetería local.",
        reason: "Combina gastronomía sencilla, arquitectura urbana y compras.",
        cost: 12,
      },
      afternoon: {
        title: "Compras y cafés entre Malasaña y Chueca",
        place: "Malasaña, Fuencarral y Chueca",
        tip: "Busca tiendas independientes y deja margen para parar en cafés.",
        alternative: "Si prefieres algo clásico, cambia por El Corte Inglés de Preciados.",
        reason: "Muestra un Madrid más cotidiano, creativo y caminable.",
        cost: 25,
      },
      night: {
        title: "Cena informal y música en vivo en zona Malasaña",
        place: "Malasaña",
        tip: "Elige locales concurridos y vuelve en metro o taxi si es tarde.",
        alternative: "Para menos ruido, cena en Chueca o Chamberí.",
        reason: "Aporta vida nocturna con una recomendación prudente y segura.",
        cost: 35,
      },
    },
  },
  {
    name: "Madrid castizo",
    interests: ["gastronomia", "historia", "cultura"],
    dayTheme: "Rastro, La Latina y tradición madrileña",
    activities: {
      morning: {
        title: "El Rastro y calles tradicionales de La Latina",
        place: "La Latina y Ribera de Curtidores",
        tip: "Funciona mejor en domingo; si no coincide, cambia por Cava Baja y alrededores.",
        alternative: "Visita el Mercado de la Cebada si buscas una opción cubierta.",
        reason: "Introduce comercio local, historia popular y ambiente madrileño.",
        cost: 10,
      },
      afternoon: {
        title: "Cava Baja y tapas tradicionales",
        place: "Cava Baja, La Latina",
        tip: "Pide raciones para compartir y controla el gasto por parada.",
        alternative: "Para algo más formal, busca menú del día en la zona.",
        reason: "Es una experiencia gastronómica muy asociada a Madrid.",
        cost: 28,
      },
      night: {
        title: "Atardecer en Templo de Debod y cena tranquila",
        place: "Templo de Debod y Plaza de España",
        tip: "Llega antes del atardecer para encontrar buen lugar.",
        alternative: "Si hay mucha gente, cambia por miradores cercanos a Palacio Real.",
        reason: "Cierra el día con una vista reconocible y un ritmo más relajado.",
        cost: 24,
      },
    },
  },
];

const cityCircuits = {
  madrid: madridCircuits,
  barcelona: [
    makeCircuit("Barcelona modernista", ["cultura", "historia"], "Sagrada Familia, Eixample y Passeig de Gracia", [
      ["Sagrada Familia", "Sagrada Familia", "Reserva entrada con horario fijo.", "Si no hay entradas, visita Hospital de Sant Pau.", "Introduce el icono arquitectonico principal de Barcelona.", 26],
      ["Passeig de Gracia, Casa Batllo y La Pedrera", "Eixample", "Haz el recorrido a pie para ver fachadas modernistas.", "Puedes entrar solo a una casa para controlar presupuesto.", "Conecta modernismo, historia urbana y arquitectura.", 30],
      ["Cena en zona Eixample o Gracia", "Eixample o Gracia", "Elige una zona bien conectada para volver facil.", "Gracia ofrece un ambiente mas local.", "Cierra el dia con gastronomia catalana sin alejarse demasiado.", 32],
    ]),
    makeCircuit("Barcelona historica", ["cultura", "gastronomia"], "Barrio Gotico, Boqueria y frente maritimo", [
      ["Barrio Gotico y Catedral de Barcelona", "Barrio Gotico", "Empieza temprano para evitar aglomeraciones.", "Suma El Born si quieres una ruta mas amplia.", "Da contexto historico y cultural al viaje.", 0],
      ["Mercado de La Boqueria y tarde de compras en Portal de l'Angel", "La Rambla y Portal de l'Angel", "Mantén tus pertenencias visibles en zonas concurridas.", "Cambia por tiendas del Born si buscas diseño local.", "Coloca compras en la tarde y suma gastronomia local.", 28],
      ["Paseo por Barceloneta y cena marinera", "Barceloneta", "Reserva si quieres comer cerca del mar.", "Para menos ruido, cena en Poblenou.", "Aporta costa y cocina mediterranea.", 35],
    ]),
    makeCircuit("Barcelona Montjuic", ["cultura", "naturaleza", "descanso"], "Montjuic, jardines y vistas de la ciudad", [
      ["Castillo de Montjuic y miradores", "Montjuic", "Sube temprano para evitar calor y grupos grandes.", "Puedes usar el funicular para reducir esfuerzo.", "Aporta vistas, historia y aire libre sin repetir el centro.", 12],
      ["Fundacio Joan Miro y jardines de Montjuic", "Parc de Montjuic", "Combina museo y jardines para equilibrar el ritmo.", "Si prefieres bajo costo, recorre solo los jardines.", "Suma arte y descanso en una zona distinta.", 15],
      ["Cena tranquila en Poble-sec", "Poble-sec", "Busca restaurantes cerca de Blai si quieres algo informal.", "Sant Antoni es alternativa cercana y bien conectada.", "Cierra con gastronomia local fuera del circuito mas turistico.", 30],
    ]),
    makeCircuit("Barcelona local", ["compras", "gastronomia", "descanso"], "Gracia, mercados y vida de barrio", [
      ["Plazas de Gracia y desayuno local", "Vila de Gracia", "Empieza por plazas pequeñas para sentir el barrio.", "Si quieres mas arquitectura, baja hacia Casa Vicens.", "Muestra una Barcelona mas cotidiana y caminable.", 12],
      ["Tiendas independientes en Gracia", "Carrer de Verdi y alrededores", "Deja las compras para la tarde y evita cargar bolsas todo el dia.", "Cambia por Galvany si buscas comercio mas tranquilo.", "Coloca compras en horario logico y sin repetir Portal de l'Angel.", 25],
      ["Cena en Gracia", "Vila de Gracia", "Reserva si viajas fin de semana.", "El Clot es alternativa menos turistica.", "Mantiene el cierre gastronomico en barrio local.", 28],
    ]),
  ],
  sevilla: [
    makeCircuit("Sevilla monumental", ["cultura", "historia"], "Catedral, Giralda, Alcazar y Santa Cruz", [
      ["Catedral de Sevilla y Giralda", "Centro historico", "Compra entrada combinada si esta disponible.", "Si quieres algo gratis, recorre exteriores y Archivo de Indias.", "Presenta los hitos historicos mas importantes de Sevilla.", 16],
      ["Real Alcazar y compras artesanales en Santa Cruz", "Real Alcazar y Barrio Santa Cruz", "Reserva Alcazar con antelacion.", "Cambia compras por una pausa en patio sevillano si hace calor.", "Une patrimonio, paseo urbano y compras en horario de tarde.", 22],
      ["Tapas en Triana", "Triana", "Cruza el puente al atardecer para mejores vistas.", "La Alameda es alternativa si buscas ambiente joven.", "Cierra con gastronomia local y barrio tradicional.", 28],
    ]),
    makeCircuit("Sevilla abierta", ["gastronomia", "descanso"], "Plaza de Espana, Parque Maria Luisa y Triana", [
      ["Plaza de Espana y Parque Maria Luisa", "Parque Maria Luisa", "Ve temprano para evitar calor y grupos grandes.", "Haz solo Plaza de Espana si quieres ritmo relajado.", "Equilibra monumento, descanso y espacio abierto.", 0],
      ["Ceramica y tiendas locales en Triana", "Triana", "Busca talleres y pequenas tiendas del barrio.", "Mercado de Triana es alternativa gastronomica.", "Mantiene compras en la tarde con identidad local.", 20],
      ["Cena con tapas sevillanas", "Triana o Santa Cruz", "Pide medias raciones para probar mas variedad.", "El Arenal es opcion centrica.", "Refuerza la gastronomia tipica sin plan nocturno excesivo.", 30],
    ]),
    makeCircuit("Sevilla ribera", ["historia", "descanso"], "Archivo de Indias, Arenal y Guadalquivir", [
      ["Archivo de Indias y entorno de la Catedral", "Archivo de Indias", "Es una visita breve que funciona bien por la mañana.", "Suma Hospital de los Venerables si quieres mas historia.", "Amplia el contexto historico sin repetir Alcazar.", 0],
      ["Paseo por el Arenal y compras de recuerdos", "El Arenal", "Elige productos locales en lugar de recuerdos genericos.", "Cambia por tiendas del centro si prefieres mas variedad.", "Deja compras en la tarde y en una zona distinta.", 18],
      ["Paseo junto al Guadalquivir", "Ribera del Guadalquivir", "Hazlo al atardecer para evitar calor.", "Toma una cena ligera cerca del rio si quieres cerrar ahi.", "Añade descanso y vistas sin repetir Triana como eje principal.", 18],
    ]),
    makeCircuit("Sevilla palacios", ["cultura", "gastronomia"], "Casa de Pilatos, Setas y centro contemporaneo", [
      ["Casa de Pilatos", "Santa Catalina", "Ve temprano para disfrutar patios con calma.", "Palacio de las Dueñas es alternativa similar.", "Incluye patrimonio sevillano menos obvio.", 12],
      ["Setas de Sevilla y compras en Encarnacion", "La Encarnacion", "Sube al mirador si el clima acompaña.", "Si prefieres bajo costo, recorre solo la plaza.", "Combina arquitectura contemporanea y compras por la tarde.", 18],
      ["Cena en Alameda de Hercules", "Alameda de Hercules", "Elige una terraza concurrida y bien ubicada.", "Santa Catalina es alternativa mas tranquila.", "Cierra en una zona diferente con ambiente local.", 28],
    ]),
  ],
  valencia: [
    makeCircuit("Valencia futurista y verde", ["cultura", "naturaleza"], "Ciudad de las Artes y Jardin del Turia", [
      ["Ciudad de las Artes y las Ciencias", "Quatre Carreres", "Elige uno o dos recintos para no saturar la manana.", "Recorre exteriores si el presupuesto es bajo.", "Aporta arquitectura contemporanea y cultura visual.", 20],
      ["Jardin del Turia en bici y compras en Colon", "Turia y zona Colon", "Alquila bici solo si el clima acompaña.", "Puedes caminar un tramo corto del Turia.", "Combina naturaleza urbana y compras por la tarde.", 22],
      ["Cena mediterranea en Ruzafa", "Ruzafa", "Reserva en locales populares.", "El Carmen es alternativa mas historica.", "Cierra con gastronomia local en barrio vivo.", 32],
    ]),
    makeCircuit("Valencia historica", ["historia", "gastronomia"], "Centro historico, Mercado Central y paella", [
      ["Lonja de la Seda, Catedral y Miguelete", "Centro historico", "Agrupa todo caminando para ahorrar traslados.", "Suma Torres de Serranos si tienes energia.", "Concentra historia y patrimonio UNESCO.", 8],
      ["Mercado Central y compras de productos locales", "Mercado Central", "Ve antes del cierre para verlo con actividad.", "Cambia por tiendas del centro si el mercado esta cerrado.", "Ubica gastronomia y compras en una franja logica.", 18],
      ["Paella valenciana", "Zona playa o restaurante tradicional", "La paella suele funcionar mejor a mediodia; si es noche, reserva arroceria confiable.", "Cambia por tapas valencianas si prefieres algo ligero.", "Conecta el viaje con el plato mas reconocido de la ciudad.", 35],
    ]),
    makeCircuit("Valencia marinera", ["descanso", "gastronomia", "naturaleza"], "Cabanyal, playa y frente maritimo", [
      ["Paseo por El Cabanyal", "El Cabanyal", "Observa fachadas y calles tradicionales con calma.", "Si quieres playa directa, empieza en Las Arenas.", "Muestra identidad local fuera del centro historico.", 0],
      ["Playa de la Malvarrosa y paseo maritimo", "Malvarrosa", "Lleva proteccion solar y evita horas fuertes.", "Cambia por Marina de Valencia si prefieres caminar.", "Aporta descanso mediterraneo sin repetir el Turia.", 8],
      ["Cena cerca de la Marina", "Marina de Valencia", "Reserva terraza si el clima esta bien.", "Ruzafa es alternativa si quieres ambiente urbano.", "Cierra con costa y gastronomia mediterranea.", 32],
    ]),
    makeCircuit("Valencia creativa", ["compras", "cultura"], "Ruzafa, diseño local y tarde urbana", [
      ["Ruzafa y desayuno en cafeterias locales", "Ruzafa", "Empieza con una ruta corta por calles principales.", "Ensanche es alternativa mas tranquila.", "Introduce barrio creativo sin repetir el centro.", 12],
      ["Tiendas de diseño y mercado de Ruzafa", "Ruzafa", "Deja compras para la tarde y revisa horarios.", "Cambia por Colon si buscas marcas conocidas.", "Refuerza compras de forma ordenada y local.", 24],
      ["Cena informal en Ruzafa", "Ruzafa", "Elige un local bien valorado y cercano al alojamiento.", "El Carmen es opcion si buscas mas historia.", "Cierra con gastronomia actual en barrio vivo.", 30],
    ]),
  ],
  granada: [
    makeCircuit("Granada nazari", ["cultura", "historia"], "Alhambra, Generalife y Albaicin", [
      ["Alhambra y Palacios Nazaries", "Alhambra", "Compra entradas con mucha antelacion.", "Si no hay cupo, visita Carmen de los Martires y exteriores.", "Es el eje historico y cultural de Granada.", 20],
      ["Albaicin y compras artesanales", "Albaicin", "Usa calzado comodo por las cuestas.", "Baja el ritmo con una teteria si hace calor.", "Coloca artesania y paseo urbano en la tarde.", 18],
      ["Mirador de San Nicolas y tapas", "Albaicin", "Llega antes del atardecer.", "Mirador de San Miguel Alto es alternativa mas activa.", "Cierra con vistas de la Alhambra y gastronomia local.", 24],
    ]),
    makeCircuit("Granada local", ["gastronomia", "descanso"], "Centro, Realejo y Sacromonte", [
      ["Catedral, Capilla Real y centro", "Centro de Granada", "Haz la ruta caminando por calles cercanas.", "Reduce a Catedral y plazas si quieres descanso.", "Aporta historia sin alejarse del centro.", 12],
      ["Realejo y tiendas pequenas", "Realejo", "Busca talleres, librerias y comercios locales.", "Cambia por una pausa en cafe si prefieres ritmo lento.", "Mantiene compras en la tarde con escala humana.", 16],
      ["Sacromonte o cena con vistas", "Sacromonte", "Elige tablaos reconocidos y reserva.", "Cena en Albaicin si prefieres menos desplazamiento.", "Introduce cultura local con una noche planificada.", 35],
    ]),
    makeCircuit("Granada jardines", ["descanso", "naturaleza"], "Carmen de los Martires y paseos tranquilos", [
      ["Carmen de los Martires", "Colina de la Alhambra", "Ve por la mañana para disfrutar jardines sin prisa.", "Si esta cerrado, pasea por bosques de la Alhambra.", "Aporta descanso y naturaleza sin repetir Palacios Nazaries.", 0],
      ["Paseo de los Tristes y compras artesanales", "Paseo de los Tristes", "Compra por la tarde y evita subir cargado al mirador.", "Cambia por Caldereria Nueva si buscas teterias.", "Combina paseo, compras y ambiente granadino.", 18],
      ["Cena junto al Darro", "Carrera del Darro", "Reserva mesa con vistas si es temporada alta.", "Centro historico es alternativa si buscas mejor precio.", "Cierra con una zona escenica distinta.", 28],
    ]),
    makeCircuit("Granada ciencia y centro", ["cultura", "compras"], "Parque de las Ciencias y centro comercial", [
      ["Parque de las Ciencias", "Parque de las Ciencias", "Ideal si viajas en familia o quieres plan bajo techo.", "Cambia por Museo de Bellas Artes si prefieres arte.", "Diversifica el itinerario con cultura interactiva.", 12],
      ["Compras en Recogidas y Puerta Real", "Recogidas y Puerta Real", "Haz compras por la tarde para terminar cerca del centro.", "Realejo ofrece tiendas mas pequenas.", "Evita repetir Albaicin y concentra comercio centrico.", 22],
      ["Tapas por el centro", "Puerta Real y alrededores", "Compara zonas antes de sentarte para controlar presupuesto.", "Plaza Nueva es alternativa con mas movimiento.", "Cierra con gastronomia local sin repetir Sacromonte.", 24],
    ]),
  ],
  bilbao: [
    makeCircuit("Bilbao arte y ria", ["cultura", "gastronomia"], "Guggenheim, ria y Casco Viejo", [
      ["Museo Guggenheim Bilbao", "Abandoibarra", "Compra entrada online si viajas en temporada alta.", "Si no entras, recorre exteriores y esculturas.", "Es el icono cultural contemporaneo de Bilbao.", 18],
      ["Paseo por la ria y compras en Gran Via", "Ria de Bilbao y Gran Via", "Combina tranvia y caminata para ahorrar energia.", "Cambia por Azkuna Zentroa si llueve.", "Ubica compras y ciudad moderna en horario de tarde.", 20],
      ["Pintxos en Casco Viejo", "Casco Viejo", "Pide pocos pintxos por local y rota con calma.", "Indautxu es alternativa menos turistica.", "Cierra con gastronomia vasca reconocible.", 34],
    ]),
    makeCircuit("Bilbao historico", ["historia", "gastronomia"], "Siete Calles, Mercado de la Ribera y miradores", [
      ["Casco Viejo y Catedral de Santiago", "Siete Calles", "Empieza temprano para ver comercios abriendo.", "Suma Plaza Nueva si quieres mas ambiente.", "Da contexto historico y urbano.", 0],
      ["Mercado de la Ribera y productos locales", "Mercado de la Ribera", "Revisa horarios antes de ir.", "Cambia por tiendas gourmet del Casco Viejo.", "Conecta gastronomia y compras en la tarde.", 22],
      ["Mirador de Artxanda y cena", "Artxanda", "Sube en funicular si el clima esta despejado.", "Si llueve, cena bajo cubierta en Casco Viejo.", "Aporta vista panoramica y cierre tranquilo.", 28],
    ]),
    makeCircuit("Bilbao moderno", ["cultura", "compras"], "Azkuna Zentroa, Ensanche y diseño urbano", [
      ["Azkuna Zentroa", "Indautxu", "Observa la arquitectura interior y programa cultural.", "Si prefieres exterior, pasea por Doña Casilda.", "Añade cultura contemporanea sin repetir Guggenheim.", 0],
      ["Compras en el Ensanche", "Gran Via y Ensanche", "Ubica compras en la tarde y combina con cafe.", "Cambia por tiendas del Casco Viejo si buscas producto local.", "Ordena compras en una zona urbana clara.", 25],
      ["Cena en Indautxu", "Indautxu", "Elige pintxos o restaurante segun presupuesto.", "Abando es alternativa bien conectada.", "Cierra en una zona distinta del Casco Viejo.", 30],
    ]),
    makeCircuit("Bilbao verde", ["naturaleza", "descanso"], "Doña Casilda, ria y Portugalete opcional", [
      ["Parque Doña Casilda", "Parque Doña Casilda", "Empieza con un paseo suave si necesitas descanso.", "Suma Museo de Bellas Artes si quieres cultura.", "Equilibra ciudad y naturaleza urbana.", 0],
      ["Paseo por Abandoibarra hacia Zorrotzaurre", "Abandoibarra", "Hazlo por la tarde con luz agradable.", "Si llueve, cambia por una visita cubierta.", "Aporta una ruta diferente junto a la ria.", 8],
      ["Cena tranquila junto a la ria", "Abandoibarra", "Busca una zona bien comunicada para volver.", "Casco Viejo queda como alternativa mas animada.", "Cierra con vista urbana sin repetir Artxanda.", 30],
    ]),
  ],
};

const activityBank = {
  cultura: {
    morning: ["Visita guiada por el centro histórico", "Museo principal con entrada temprana", "Recorrido por arquitectura emblemática"],
    afternoon: ["Galería o centro cultural local", "Ruta por barrios creativos", "Taller cultural breve"],
    night: ["Espectáculo local o teatro", "Paseo cultural iluminado", "Concierto o actividad artística"],
  },
  gastronomia: {
    morning: ["Desayuno típico y visita a mercado local", "Café tradicional con degustación regional", "Ruta de panaderías o productos locales"],
    afternoon: ["Clase breve de cocina o degustación regional", "Almuerzo en restaurante típico recomendado", "Tour gastronómico por zona céntrica"],
    night: ["Cena en restaurante típico recomendado", "Ruta de tapas o platos locales", "Cena con menú regional"],
  },
  naturaleza: {
    morning: ["Paseo por parque, mirador o reserva natural", "Excursión suave al aire libre", "Ruta escénica de baja dificultad"],
    afternoon: ["Jardín, costa o zona verde cercana", "Paseo panorámico con descanso", "Actividad al aire libre de ritmo medio"],
    night: ["Atardecer en zona panorámica", "Paseo nocturno seguro en área abierta", "Observación de vistas desde un mirador"],
  },
  aventura: {
    morning: ["Actividad de aventura controlada con operador local", "Ruta activa por zonas seguras", "Experiencia deportiva de baja fricción"],
    afternoon: ["Tour activo por rutas menos convencionales", "Experiencia acuática o urbana guiada", "Actividad de aventura con descanso posterior"],
    night: ["Actividad ligera con guía local", "Ruta urbana dinámica y segura", "Experiencia nocturna activa sin riesgo alto"],
  },
  descanso: {
    morning: ["Mañana libre en zona tranquila", "Desayuno pausado y paseo corto", "Spa o playa con horario relajado"],
    afternoon: ["Café con ritmo pausado", "Tiempo libre cerca del alojamiento", "Paseo relajado sin horarios estrictos"],
    night: ["Cena tranquila cerca del alojamiento", "Paseo breve antes de descansar", "Plan suave sin traslados largos"],
  },
  "vida nocturna": {
    morning: ["Desayuno tranquilo en zona céntrica", "Paseo suave por un barrio seguro", "Mañana libre con descanso y planificación"],
    afternoon: ["Exploración de zona con bares y restaurantes", "Reserva para show local", "Paseo por barrio con ambiente urbano"],
    night: ["Noche en barrio con bares seguros y bien valorados", "Show local o música en vivo", "Cena tardía con ambiente urbano"],
  },
  historia: {
    morning: ["Ruta por monumentos y memoria local", "Visita a casco antiguo o sitio patrimonial", "Tour histórico con guía"],
    afternoon: ["Museo histórico o archivo visitable", "Recorrido por plazas y edificios patrimoniales", "Ruta temática sobre memoria local"],
    night: ["Paseo histórico iluminado", "Cena cerca de una zona patrimonial", "Actividad narrativa sobre leyendas locales"],
  },
  compras: {
    morning: ["Mercado artesanal o zona comercial representativa", "Tiendas locales con menor afluencia", "Compra de recuerdos con productos del destino"],
    afternoon: ["Exploración de tiendas locales y diseño independiente", "Centro comercial o calle de compras", "Ruta de marcas locales"],
    night: ["Mercado nocturno o tiendas con horario extendido", "Paseo por zona comercial iluminada", "Compra ligera antes de cenar"],
  },
};

const templates = {
  familia: "ritmo cómodo, traslados cortos y espacios seguros",
  pareja: "experiencias memorables, detalles especiales y momentos tranquilos",
  solo: "rutas prácticas, socialización opcional y seguridad",
  amigos: "planes dinámicos, experiencias compartidas y vida local",
  negocios: "agenda eficiente, actividades cercanas y encuentros profesionales",
};

const genericDayThemes = [
  "Llegada, orientación y primeras zonas clave",
  "Cultura local y gastronomía representativa",
  "Barrios, mercados y vida cotidiana",
  "Naturaleza cercana, miradores o descanso",
  "Historia, compras y experiencias flexibles",
  "Ruta activa con alternativas de bajo costo",
  "Cierre del viaje y favoritos del destino",
];

const form = document.querySelector("#travel-form");
const itineraryEl = document.querySelector("#itinerary");
const dayTemplate = document.querySelector("#day-template");
const loading = document.querySelector("#loading");
const notice = document.querySelector("#notice");
const resultTitle = document.querySelector("#result-title");
const qualityScore = document.querySelector("#quality-score");
const sourcesEl = document.querySelector("#rag-sources");
const promptEl = document.querySelector("#prompt-output");
const qualityList = document.querySelector("#quality-list");
const quickActions = document.querySelector(".quick-actions");

let lastPreferences = null;
let lastVariant = "equilibrada";

function getInterests() {
  return [...document.querySelectorAll("#interests input:checked")].map((input) => input.value);
}

function normalize(text) {
  return text.trim().toLowerCase();
}

function validate(preferences) {
  const errors = {};
  if (!preferences.destination) errors.destination = "Indica un destino.";
  if (!preferences.days || preferences.days < 1 || preferences.days > 14) errors.days = "Usa entre 1 y 14 días.";
  if (!preferences.budget || preferences.budget < 100) errors.budget = "Indica un presupuesto realista.";
  if (preferences.interests.length === 0) errors.interests = "Selecciona al menos un interés.";
  return errors;
}

function showErrors(errors) {
  document.querySelectorAll(".error").forEach((el) => {
    el.textContent = "";
  });
  Object.entries(errors).forEach(([key, value]) => {
    const target = document.querySelector(`[data-error-for="${key}"]`);
    if (target) target.textContent = value;
  });
  if (errors.interests) {
    notice.textContent = errors.interests;
    notice.style.color = "#b94b3a";
  }
}

function collectPreferences() {
  return {
    destination: document.querySelector("#destination").value.trim(),
    days: Number(document.querySelector("#days").value),
    budget: Number(document.querySelector("#budget").value),
    travelerType: document.querySelector("#travelerType").value,
    interests: getInterests(),
    restrictions: document.querySelector("#restrictions").value.trim(),
  };
}

function retrieveSources(preferences) {
  const destination = normalize(preferences.destination);
  const exact = knowledgeBase.filter((source) => source.destination !== "general" && destination.includes(source.destination));
  const general = knowledgeBase.find((source) => source.destination === "general");
  const byInterest = knowledgeBase.filter((source) =>
    source.destination === "general" && source.interests.some((interest) => preferences.interests.includes(interest))
  );
  return [...new Map([...exact, ...byInterest, general].filter(Boolean).map((source) => [source.title, source])).values()].slice(0, 3);
}

function buildPrompt(preferences, sources, variant) {
  return `Rol: Actúa como un asesor experto en planificación de viajes personalizados.

Contexto: Debes generar un itinerario atractivo, realista y coherente usando preferencias del usuario y conocimiento recuperado por RAG.

Preferencias del usuario:
- Destino: ${preferences.destination}
- Duración: ${preferences.days} días
- Presupuesto total: ${formatCurrency(preferences.budget)}
- Tipo de viajero: ${preferences.travelerType}
- Intereses: ${preferences.interests.join(", ")}
- Restricciones: ${preferences.restrictions || "Sin restricciones declaradas"}
- Variante solicitada: ${variant}

Fuentes RAG:
${sources.map((source) => `- ${source.title}: ${source.summary}`).join("\n")}

Formato de salida:
Genera un plan día por día con mañana, tarde y noche. Cada bloque debe incluir actividad, lugar recomendado, costo estimado, consejo local, alternativa y justificación.

Criterios de calidad:
Evita repeticiones, respeta restricciones, mantén costos dentro del presupuesto, usa actividades relevantes y no recomiendes planes peligrosos, sesgados o incoherentes.`;
}

function generateItinerary(preferences, sources, variant) {
  const cityKey = getCircuitCityKey(preferences.destination);
  if (cityKey) {
    return generateCityItinerary(preferences, variant, cityKey);
  }

  const perDayBudget = Math.max(30, Math.floor(preferences.budget / preferences.days));
  const selectedInterests = preferences.interests.length ? preferences.interests : ["cultura", "gastronomia"];
  const usedActivities = new Set();
  const variantBias = {
    economica: { multiplier: 0.72, extra: "opción gratuita o de bajo costo" },
    cultural: { multiplier: 0.92, extra: "contexto cultural adicional" },
    relajada: { multiplier: 0.86, extra: "pausa amplia y traslado corto" },
    aventurera: { multiplier: 1.05, extra: "experiencia activa con proveedor responsable" },
    equilibrada: { multiplier: 0.95, extra: "alternativa flexible" },
  }[variant];

  return Array.from({ length: preferences.days }, (_, index) => {
    const interestA = pickInterestForMoment(selectedInterests, index, "morning");
    const interestB = pickInterestForMoment(selectedInterests, index + 1, "afternoon");
    const interestC = pickInterestForMoment(selectedInterests, index + 2, "night");
    const dailyCost = Math.round(perDayBudget * variantBias.multiplier);
    const sourceTip = sources[index % sources.length]?.tips[index % 3] || "Agrupa actividades cercanas para ahorrar tiempo.";

    return {
      day: index + 1,
      theme: buildGenericTheme(index, selectedInterests),
      cost: dailyCost,
      activities: [
        makeActivity("Mañana", "morning", interestA, preferences, Math.round(dailyCost * 0.35), sourceTip, variantBias.extra, usedActivities),
        makeActivity("Tarde", "afternoon", interestB, preferences, Math.round(dailyCost * 0.4), sourceTip, variantBias.extra, usedActivities),
        makeActivity("Noche", "night", interestC, preferences, Math.round(dailyCost * 0.25), sourceTip, variantBias.extra, usedActivities),
      ],
    };
  });
}

function buildGenericTheme(index, interests) {
  const base = genericDayThemes[index % genericDayThemes.length];
  const focus = interests[index % interests.length] || "cultura";
  return `${base} con enfoque en ${focus}`;
}

function pickInterestForMoment(interests, index, momentKey) {
  const blockedByMoment = {
    morning: ["vida nocturna", "compras"],
    afternoon: [],
    night: ["compras"],
  };
  const allowed = interests.filter((interest) => !blockedByMoment[momentKey].includes(interest));
  return (allowed.length ? allowed : ["cultura", "gastronomia", "naturaleza"])[index % (allowed.length || 3)];
}

function generateCityItinerary(preferences, variant, cityKey) {
  const selected = rankCityCircuits(cityKey, preferences.interests);
  const variantAdjustments = {
    economica: { multiplier: 0.72, note: "Se priorizan exteriores, caminatas y alternativas de bajo costo." },
    cultural: { multiplier: 1, note: "Se refuerza el contexto histórico y artístico de cada parada." },
    relajada: { multiplier: 0.85, note: "Se reducen traslados y se dejan pausas entre actividades." },
    aventurera: { multiplier: 1.08, note: "Se suman recorridos caminables más activos y barrios con más movimiento." },
    equilibrada: { multiplier: 0.95, note: "Se mantiene un balance entre iconos, barrios, comida y descanso." },
  }[variant];

  return Array.from({ length: preferences.days }, (_, index) => {
    const circuit = selected[index % selected.length];
    const activities = ["morning", "afternoon", "night"].map((momentKey) => {
      const base = circuit.activities[momentKey];
      const cost = Math.round(base.cost * variantAdjustments.multiplier);
      return {
        moment: momentKey === "morning" ? "Mañana" : momentKey === "afternoon" ? "Tarde" : "Noche",
        title: base.title,
        place: base.place,
        cost,
        tip: base.tip,
        alternative: adjustMadridAlternative(base.alternative, variant),
        reason: `${base.reason} ${variantAdjustments.note}`,
      };
    });
    return {
      day: index + 1,
      theme: circuit.dayTheme,
      cost: activities.reduce((sum, activity) => sum + activity.cost, 0),
      activities,
    };
  });
}

function rankCityCircuits(cityKey, interests) {
  const normalizedInterests = interests.includes("vida nocturna")
    ? [...interests.filter((interest) => interest !== "vida nocturna"), "gastronomia", "cultura"]
    : interests;
  return [...cityCircuits[cityKey]]
    .sort((a, b) => scoreCircuit(b, normalizedInterests) - scoreCircuit(a, normalizedInterests))
    .concat(cityCircuits[cityKey])
    .filter((circuit, index, list) => list.findIndex((item) => item.name === circuit.name) === index);
}

function scoreCircuit(circuit, interests) {
  return circuit.interests.reduce((score, interest) => score + (interests.includes(interest) ? 1 : 0), 0);
}

function adjustMadridAlternative(alternative, variant) {
  const additions = {
    economica: " Opción económica: prioriza exteriores y transporte público.",
    cultural: " Opción cultural: añade guía o audioguía si el presupuesto lo permite.",
    relajada: " Opción relajada: elimina una parada y deja más tiempo libre.",
    aventurera: " Opción activa: haz el tramo caminando si el clima acompaña.",
    equilibrada: "",
  };
  return `${alternative}${additions[variant]}`;
}

function getCircuitCityKey(destination) {
  const normalized = normalize(destination);
  return Object.keys(cityCircuits).find((city) => normalized.includes(city));
}

function makeCircuit(name, interests, dayTheme, entries) {
  const [morning, afternoon, night] = entries;
  return {
    name,
    interests,
    dayTheme,
    activities: {
      morning: makeCircuitActivity(morning),
      afternoon: makeCircuitActivity(afternoon),
      night: makeCircuitActivity(night),
    },
  };
}

function makeCircuitActivity(entry) {
  const [title, place, tip, alternative, reason, cost] = entry;
  return { title, place, tip, alternative, reason, cost };
}

function makeActivity(moment, momentKey, interest, preferences, cost, tip, extra, usedActivities) {
  const options = activityBank[interest]?.[momentKey] || activityBank.cultura[momentKey];
  const title = pickActivityTitle(options, usedActivities);
  const travelerNote = templates[preferences.travelerType];
  const place = buildGenericPlace(preferences.destination, interest, momentKey, usedActivities.size);
  return {
    moment,
    title,
    place,
    cost,
    tip,
    alternative: `${extra} cerca de ${place}`,
    reason: `Encaja con ${interest} y con un viaje de tipo ${preferences.travelerType}: ${travelerNote}.`,
  };
}

function buildGenericPlace(destination, interest, momentKey, seed) {
  const zones = {
    morning: ["centro histórico", "zona de mercados", "área cultural principal", "barrio tradicional"],
    afternoon: ["zona caminable", "distrito cultural", "parque o mirador cercano", "barrio local"],
    night: ["zona gastronómica segura", "área céntrica iluminada", "barrio con restaurantes", "avenida principal"],
  };
  const zone = zones[momentKey][seed % zones[momentKey].length];
  return `${destination} - ${zone} para ${interest}`;
}

function pickActivityTitle(options, usedActivities) {
  const available = options.find((option) => !usedActivities.has(option));
  if (available) {
    usedActivities.add(available);
    return available;
  }
  const base = options[usedActivities.size % options.length];
  const adjusted = `${base} con enfoque alternativo`;
  usedActivities.add(adjusted);
  return adjusted;
}

function qualityChecks(preferences, itinerary) {
  const total = itinerary.reduce((sum, day) => sum + day.cost, 0);
  const allTitles = itinerary.flatMap((day) => day.activities.map((activity) => activity.title));
  const allPlaces = itinerary.flatMap((day) => day.activities.map((activity) => normalize(activity.place)));
  const repeated = allTitles.length - new Set(allTitles).size;
  const repeatedPlaces = allPlaces.length - new Set(allPlaces).size;
  const warnings = [];

  if (itinerary.length === preferences.days) warnings.push("La duración del itinerario coincide con los días solicitados.");
  if (total <= preferences.budget) warnings.push(`El costo estimado (${formatCurrency(total)}) respeta el presupuesto.`);
  else warnings.push(`El costo estimado (${formatCurrency(total)}) supera el presupuesto.`);
  if (repeated === 0) warnings.push("No se detectan actividades repetidas.");
  else warnings.push(`Se detectaron ${repeated} actividades repetidas que conviene revisar.`);
  if (repeatedPlaces === 0) warnings.push("No se detectan lugares repetidos.");
  else warnings.push(`Se detectaron ${repeatedPlaces} lugares repetidos que conviene revisar.`);
  if (preferences.restrictions) warnings.push("Las restricciones se incorporan como criterio de selección y advertencia.");
  else warnings.push("No se indicaron restricciones especiales; se recomienda confirmarlas antes de reservar.");
  warnings.push("Se excluyen recomendaciones peligrosas, discriminatorias o incoherentes con los intereses.");

  return { warnings, score: Math.max(70, 98 - repeated * 6 - repeatedPlaces * 4 - (total > preferences.budget ? 12 : 0)) };
}

function renderItinerary(preferences, itinerary) {
  itineraryEl.innerHTML = "";
  itinerary.forEach((day) => {
    const node = dayTemplate.content.cloneNode(true);
    node.querySelector("h3").textContent = `Día ${day.day}`;
    node.querySelector(".day-header span").textContent = formatCurrency(day.cost);
    node.querySelector(".day-theme").textContent = day.theme || "Ruta personalizada según tus intereses";
    const list = node.querySelector(".activity-list");

    day.activities.forEach((activity) => {
      const item = document.createElement("div");
      item.className = "activity";
      item.innerHTML = `
        <strong>${activity.moment}: ${activity.title}</strong>
        <p><b>Lugar:</b> ${activity.place}</p>
        <p><b>Consejo local:</b> ${activity.tip}</p>
        <p><b>Alternativa:</b> ${activity.alternative}</p>
        <p><b>Justificación:</b> ${activity.reason}</p>
        <div class="meta-row">
          <span class="tag">${formatCurrency(activity.cost)}</span>
          <span class="tag">Editable</span>
        </div>
        <textarea aria-label="Editar actividad">${activity.title}. ${activity.place}. ${activity.reason}</textarea>
      `;
      list.appendChild(item);
    });

    itineraryEl.appendChild(node);
  });

  document.querySelectorAll(".feedback").forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.querySelectorAll(".feedback").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      notice.textContent = button.dataset.feedback === "like"
        ? "Feedback guardado: esta versión se considera útil para futuras mejoras."
        : "Feedback guardado: puedes pedir una versión ajustada con los botones rápidos.";
      notice.style.color = "#66746f";
    });
  });
}

function renderSources(sources) {
  sourcesEl.innerHTML = "";
  sources.forEach((source) => {
    const item = document.createElement("div");
    item.className = "source-item";
    item.innerHTML = `<strong>${source.title}</strong><span>${source.summary}</span>`;
    sourcesEl.appendChild(item);
  });
}

function renderQuality(checks) {
  qualityList.innerHTML = "";
  checks.warnings.forEach((warning) => {
    const item = document.createElement("li");
    item.textContent = warning;
    qualityList.appendChild(item);
  });
  qualityScore.textContent = `Calidad: ${checks.score}/100`;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function runGeneration(preferences, variant = "equilibrada") {
  const sources = retrieveSources(preferences);
  const prompt = buildPrompt(preferences, sources, variant);
  const itinerary = generateItinerary(preferences, sources, variant);
  const checks = qualityChecks(preferences, itinerary);

  lastPreferences = preferences;
  lastVariant = variant;
  resultTitle.textContent = `${preferences.destination}: ${preferences.days} días para ${preferences.travelerType}`;
  promptEl.textContent = prompt;
  renderSources(sources);
  renderItinerary(preferences, itinerary);
  renderQuality(checks);
  notice.textContent = `Itinerario generado con variante ${variant}. Puedes editar actividades o solicitar una versión ajustada.`;
  notice.style.color = "#66746f";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const preferences = collectPreferences();
  const errors = validate(preferences);
  showErrors(errors);
  if (Object.keys(errors).length) return;

  loading.hidden = false;
  itineraryEl.innerHTML = "";
  window.setTimeout(() => {
    loading.hidden = true;
    runGeneration(preferences, lastVariant);
  }, 650);
});

quickActions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-variant]");
  if (!button) return;
  lastVariant = button.dataset.variant;
  if (lastPreferences) {
    loading.hidden = false;
    window.setTimeout(() => {
      loading.hidden = true;
      runGeneration(lastPreferences, lastVariant);
    }, 420);
  } else {
    notice.textContent = "Primero genera un itinerario base para aplicar esta variante.";
    notice.style.color = "#b96b14";
  }
});

document.querySelector("#destination").value = "Madrid";
