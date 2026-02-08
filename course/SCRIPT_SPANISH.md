# Guion de Grabacion - "Tu Primer Asistente IA"

> **Duracion total:** ~30 minutos
> **Formato:** Lectura para grabacion (voiceover + screen recording)
> **Estilo:** Casual, directo, como un amigo que te explica
> **Nota:** [Pantalla] = partes con screen recording. [Camara] = cara a camara.

---

## Leccion 1: "Por que necesitas un asistente IA" (4 minutos)

### [Camara - cara a camara]

Okey, antes de empezar - quiero mostrarte algo.

Hoy por la manana, me levante, me prepare un cafe, y mientras mis hijos desayunaban - recibi un podcast de noticias hecho a mi medida. No fui a ningun sitio web. No abri ninguna app. Un asistente IA que yo mismo construi me lo preparo solo. Cada manana. Automatico.

Ese mismo asistente? Tambien me dijo cual era mi entrenamiento de hoy, que comprar en el super para la cena, y cuales eran las tareas mas urgentes que me esperaban en el negocio.

Todo eso? Sin tocar nada.

Y no soy programador. Soy una persona que construyo un negocio de energia solar, sirvio en una unidad especial del ejercito israeli, y ahora vive con su familia en Koh Phangan, Tailandia.

Si yo pude - tu tambien puedes. Y en la proxima media hora, vas a construir tu primer asistente.

### [Camara]

Entonces, que es exactamente un "asistente IA"?

Piensalo asi: tienes un empleado. Esta disponible 24 horas. No se queja. No se olvida de nada. No necesita vacaciones. Y es bueno en... basicamente casi todo lo que tenga que ver con una computadora.

Escritura? Excelente. Investigacion? Excelente. Analisis de datos? Excelente. Organizacion? Excelente. Planificacion de comidas, entrenamientos, agendas, resumenes de reuniones? Ex-ce-len-te.

Y lo mas importante - no necesita que sepas nada de tecnologia. Le hablas. En espanol. Con palabras normales. Y el hace.

### [Camara]

Ahora, hay muchas herramientas de IA alla afuera. ChatGPT, Gemini, Copilot... Yo elegi trabajar con Claude, de la empresa Anthropic. Y hay una razon.

Claude entiende el contexto mejor. Cuando le das informacion sobre quien eres, cual es tu negocio, cuales son tus metas - el se acuerda y trabaja contigo a largo plazo. No solo responde preguntas. Realmente te ayuda.

Y en los proximos 30 minutos, te voy a ensenar:
1. Como instalar Claude en tu computadora
2. Como hablarle correctamente para que te de respuestas precisas
3. Y como construir tu primer asistente - uno que te va a ahorrar por lo menos una hora al dia

Empecemos.

---

## Leccion 2: "Instalar Claude en tu computadora" (7 minutos)

### [Camara]

Okey, leccion 2 - la instalacion. Esto toma 5 minutos. No hay nada que temer.

Hay dos formas de usar Claude:
1. Por la web - claude.ai - en el navegador, sin instalar nada
2. Por Claude Code - directamente en tu computadora, a traves de la terminal

Vamos a instalar las dos. Porque la web es buena para conversaciones rapidas, y Claude Code? Ahi es donde pasa la magia de verdad.

### Parte A: La web (2 minutos)

### [Pantalla - mostrando navegador]

Primero, la web. Entramos a claude.ai.

Le das click en "Sign Up". Puedes registrarte con Google, con tu email - lo que te sea mas comodo. Hazlo ahora, yo espero.

Perfecto. Una vez que entraste - ves el chat. Este es Claude. Puedes hablarle. Escribe "Hola, como estas?" y vas a ver que responde. En espanol. Excelente.

La version gratuita funciona muy bien para empezar. Si quieres mas mensajes por dia y un modelo mas potente, hay Pro por 20 dolares al mes. Pero por ahora? Gratis es suficiente.

### Parte B: Claude Code (5 minutos)

### [Camara]

Ahora - Claude Code. Y esta es la parte que quizas suena intimidante. "Terminal"? "Linea de comandos"?

Tranquilo. Te voy a mostrar exactamente que hacer. Paso a paso.

### [Pantalla - Mac]

**Para usuarios de Mac:**

Paso 1: Abre la Terminal. Donde esta? Presiona Command + Espacio, escribe "Terminal", presiona Enter. Listo, se abrio una ventana oscura. No te asustes, esta todo bien.

Paso 2: Instalamos Node.js. Es un programa que Claude Code necesita para funcionar. Copia este comando y pegalo en la terminal:

```
curl -fsSL https://fnm.vercel.app/install | bash && fnm install --lts
```

Presiona Enter. Espera a que termine. Toma medio minuto.

Paso 3: Instalamos Claude Code:

```
npm install -g @anthropic-ai/claude-code
```

Enter. Esperamos. Otro medio minuto.

Paso 4: Lo ejecutamos:

```
claude
```

Boom. Claude Code esta corriendo en tu computadora. Te va a pedir que te conectes - le das click al link, autorizas, y listo.

### [Pantalla - Windows]

**Para usuarios de Windows:**

Paso 1: Abre PowerShell. Dale click al boton de Inicio, escribe "PowerShell", presiona Enter.

Paso 2: Instalamos Node.js. Entra a la pagina nodejs.org, descarga la version para Windows, instala como cualquier programa - Siguiente, Siguiente, Finalizar.

Paso 3: Cierra PowerShell y abrelo de nuevo. Y luego:

```
npm install -g @anthropic-ai/claude-code
```

Enter. Esperamos.

Paso 4:

```
claude
```

Y te conectas.

### [Camara]

Perfecto. Si llegaste hasta aca - ya tienes Claude en tu computadora. Y ahora viene la parte divertida.

---

## Leccion 3: "Como hablar con Claude (y obtener respuestas precisas)" (6 minutos)

### [Camara]

La mayoria de la gente usa la IA como Google. Hacen una pregunta, reciben una respuesta, se van. Y eso es desperdiciar el 90% del potencial.

Claude no es un motor de busqueda. Es un asistente. Y como cualquier buen asistente - mientras mas te conoce, mejor te ayuda.

Entonces vamos a aprender dos cosas:
1. Como preguntar bien (prompting)
2. Como dejar que Claude te conozca (CLAUDE.md)

### Parte A: Preguntar bien (3 minutos)

### [Pantalla - claude.ai abierto]

Aca va la regla mas importante: **Dale contexto.**

Ejemplo malo:
> "Escribeme un email"

Ejemplo bueno:
> "Soy dueno de un negocio pequeno de importacion. Necesito escribirle un email a un proveedor en China que se atraso con un envio. El tono tiene que ser profesional pero firme. El envio lleva 3 semanas de retraso."

Ves la diferencia? En el primer ejemplo Claude esta adivinando. En el segundo - sabe exactamente lo que necesitas.

### [Pantalla]

Aca esta la formula. Cada vez que le pidas algo a Claude, dale:

1. **Quien eres** - "Soy dueno de un negocio de..." / "Soy lider de un equipo de..." / "Soy freelancer en..."
2. **Que necesitas** - "Necesito..." / "Ayudame con..." / "Preparame..."
3. **Como lo quieres** - "En tono profesional" / "En espanol simple" / "En formato de lista"
4. **Contexto adicional** - "Mi cliente es..." / "El presupuesto es..." / "La fecha limite es..."

Mientras mas contexto des - mas precisa la respuesta. Siempre.

### [Pantalla - mostrando ejemplo en vivo]

Vamos a probar. Le escribo a Claude:

> "Soy dueno de un negocio pequeno con 3 empleados. Pierdo una hora al dia respondiendo emails de clientes. La mayoria pregunta las mismas 10 cosas. Ayudame a crear un documento de FAQ que pueda enviarles en vez de responder cada vez desde cero. Mi negocio se dedica a [tu rubro]."

Mira lo que devolvio... Increible, no? Un FAQ ordenado, profesional, adaptado a tu negocio. Ahora haces copy-paste, ajustas un poco, y tienes un documento que te habria tomado dos horas escribir. Listo en 30 segundos.

### Parte B: CLAUDE.md - La memoria de Claude (3 minutos)

### [Camara]

Ahora - el truco que nadie te ensena.

CLAUDE.md. Es un archivo de texto simple que pones en tu computadora. Y cada vez que Claude Code arranca - lo lee. Es como tu CV para el. Sabe quien eres, cual es tu negocio, cuales son tus metas, que te gusta y que no.

### [Pantalla - abriendo editor de texto]

Vamos a crear uno ahora.

Abre cualquier editor de texto. Notas, Bloc de Notas, lo que tengas. Y guarda un archivo con el nombre CLAUDE.md en tu carpeta principal.

Adentro escribes:

```markdown
# Quien soy
- Nombre: [tu nombre]
- Ocupacion: [a que te dedicas]
- Negocio: [descripcion corta de tu negocio]

# Que es importante para mi
- [Cosa 1]
- [Cosa 2]
- [Cosa 3]

# Como me gusta recibir respuestas
- En espanol simple
- Con ejemplos practicos
- En formato de lista cuando sea posible

# Mis metas
- [Meta 1]
- [Meta 2]
```

### [Camara]

Eso es todo. Asi de simple. Lo llenaste? Perfecto.

A partir de ahora, cada vez que abras Claude Code en esa carpeta - el ya sabe quien eres. No necesitas explicar todo de nuevo. El ya te "conoce".

Y esa es la diferencia entre usar IA y tener un **asistente personal** que te conoce.

---

## Leccion 4: "Construye tu primer asistente" (10 minutos)

### [Camara]

Okey, llegamos a la mejor parte. Ahora vamos a construir.

Te voy a mostrar 3 tipos de asistentes. Elige uno - el que sea mas relevante para ti ahora mismo - y lo construimos juntos. Al final de esta leccion, vas a tener un asistente IA funcionando.

Las tres opciones:
- **Asistente de manana** - te prepara un resumen de noticias + agenda del dia + tareas
- **Asistente fitness** - planificacion de entrenamientos + nutricion + seguimiento
- **Asistente de negocios** - gestion de tareas + emails + organizacion

Elige. Elegiste? Genial. Yo te muestro los tres, y tu sigues el que hayas elegido.

### Opcion A: Asistente de manana (3 minutos)

### [Pantalla - Claude Code abierto]

Abrimos Claude Code. Escribimos:

```
claude
```

Y ahora, le hablamos. Asi:

> "Quiero que seas mi asistente de manana. Cada manana quiero que me prepares:
>
> 1. Un resumen de las 5 noticias mas importantes de [tu pais] y del mundo
> 2. El clima en [tu ciudad]
> 3. Una lista de las 3 tareas mas importantes para hoy
> 4. Un recordatorio de algo que dije que queria hacer esta semana
>
> Presentalo todo en un formato limpio y corto. En espanol."

### [Pantalla - mostrando la respuesta]

Mira lo que hizo. Boom. Resumen de noticias, clima, tareas - todo ordenado, todo en espanol.

Ahora, aca viene el truco: puedes guardar esta instruccion. Cada manana simplemente abres Claude Code y dices: "Buenos dias, preparame el resumen diario" - y el ya sabe que hacer, porque tu CLAUDE.md lo define.

Vamos a agregarlo al CLAUDE.md:

```markdown
# Rutina de manana
Cada manana cuando digo "buenos dias" o "resumen de manana":
- 5 titulares de noticias de [pais] y del mundo
- Clima en [ciudad]
- 3 tareas principales para hoy
- Recordatorio semanal
```

Lo guardaste? A partir de ahora tienes un asistente de manana.

### Opcion B: Asistente fitness (3 minutos)

### [Pantalla - Claude Code abierto]

Para el asistente fitness, escribimos:

> "Quiero que seas mi entrenador personal. Aca va mi informacion:
> - Altura: [X] cm
> - Peso: [X] kilos
> - Meta: [bajar de peso / ganar masa / fitness general / fortalecerme]
> - Experiencia: [principiante / intermedio / avanzado]
> - Equipo disponible: [gimnasio / casa / pesas / nada]
> - Tiempo para entrenar: [X] minutos, [X] veces por semana
>
> Armame un plan de entrenamiento para la semana, y decime que comer hoy."

### [Pantalla - mostrando respuesta]

Mira - un plan de entrenamiento completo. Personalizado. Con series, repeticiones, tiempos de descanso. Y un menu de nutricion para el dia.

Lo agregamos al CLAUDE.md:

```markdown
# Fitness y nutricion
- Altura: [X], Peso: [X], Meta: [X]
- Entreno [X] veces por semana, [X] minutos
- Equipo: [lo que tengas]
- Alergias/preferencias de comida: [X]
Cuando digo "entrenamiento" - dame el entrenamiento de hoy
Cuando digo "que comer" - dame un menu personalizado
```

### Opcion C: Asistente de negocios (4 minutos)

### [Pantalla - Claude Code abierto]

El asistente de negocios - este es el que mas tiempo te ahorra. Escribimos:

> "Quiero que seas mi asistente de negocios. Aca va la informacion de mi negocio:
> - Rubro: [a que se dedica]
> - Tamano: [cuantos empleados / independiente]
> - Clientes: [quienes son tus clientes]
> - Desafio principal: [que es lo que mas te molesta en el negocio]
>
> Ahora, ayudame con lo siguiente:
> [elige uno]
> - Escribime un email profesional para [quien]
> - Resumime la reunion a partir de estas notas: [pegar resumen]
> - Organizame una lista de tareas para la semana por prioridad
> - Analizame las ventas del ultimo mes
> - Preparame una cotizacion para [proyecto]"

### [Pantalla - mostrando respuesta]

Ves? Un email profesional. Adaptado. En tu tono. En 10 segundos.

Ahora agrega al CLAUDE.md:

```markdown
# Mi negocio
- Rubro: [X]
- Clientes: [X]
- Servicios: [X]
- Tono de comunicacion: [profesional / amigable / formal]

Cuando digo "email" - ayudame a escribir un email de negocios
Cuando digo "tareas" - organizame las prioridades
Cuando digo "cotizacion" - ayudame a armar una
```

### [Camara]

Escuchaste? Tres asistentes. Elegiste uno. Lo construiste. Funciona.

Y ahora el punto mas importante: **usalo manana por la manana.** No la proxima semana. Manana. Abre Claude, di "buenos dias" o "cual es mi entrenamiento" o "escribime un email" - y mira como se siente.

Porque el momento en que sientes que te ahorraste 20 minutos en algo que te habria tomado una hora? Quedas enganchado. En el buen sentido.

---

## Leccion 5: "De aca en adelante - El mapa completo" (3 minutos)

### [Camara]

Ultima leccion. Y tal vez la mas importante.

Construiste un asistente. Excelente. Pero esto es solo el comienzo.

Lo que hicimos recien? Es como si hubieras instalado tu primer celular y abierto una sola app. Ahora imaginate que pasa cuando agregas mas.

### [Pantalla - mostrando lista visual]

Aca va lo que puedes construir:

**Asistentes personales:**
- Asistente de noticias - un podcast personalizado cada manana
- Asistente fitness - entrenamientos + nutricion + seguimiento
- Asistente de nutricion - menu semanal + lista de compras
- Asistente de aprendizaje - resume libros, articulos, podcasts
- Asistente de viajes - planifica vacaciones a tu medida

**Asistentes de negocios:**
- Asistente de emails - escribe, resume, organiza
- Asistente de gestion - tareas, prioridades, seguimiento
- Asistente de ventas - cotizaciones, follow-ups, CRM
- Asistente de contenido - posts, stories, ideas
- Asistente de clientes - FAQ, respuestas, atencion

**Asistentes familiares:**
- Asistente de calendario - organiza la semana para la familia
- Asistente de eventos - planifica cumpleanos, reuniones
- Asistente del hogar - administracion de la casa, mantenimiento

### [Camara]

Cada asistente que agregas? De 30 a 60 minutos que te ahorras al dia. Tres asistentes? Recuperas 2 horas. Cinco? Tienes medio dia libre.

Y no estas trabajando mas duro. Estas trabajando mas inteligente. Porque hay alguien haciendo las cosas que no necesitas hacer tu mismo.

### [Camara - cierre]

Mira, yo se lo que estas pensando ahora.

"Wow, esto funciona. Por que no empece antes?"

Y tienes razon. La mayoria de la gente va a seguir sentada en la cerca un ano mas. Tu? Ya empezaste. Ya construiste. Ya ahorraste tiempo.

Soy Kaniel. Reconstrui toda mi vida alrededor de asistentes IA. Desde Koh Phangan, con mi esposa y mis tres hijos. Y si yo - despues de mas de 400 dias de servicio militar de reserva, despues de perder a mi hermano en el ataque del 7 de octubre, despues de que mi negocio estaba en modo supervivencia - si yo pude construir esto? Tu seguro puedes.

El siguiente paso? Usa el asistente que construiste. Manana por la manana. Y mira que pasa.

Y si quieres ir un paso mas alla - tengo un bootcamp de 4 semanas donde te acompano personalmente para construir un sistema completo de asistentes IA. El link esta abajo.

Gracias por estar aca. Ahora ve y construye.

---

## Resumen tecnico

| Leccion | Tema | Duracion | Formato |
|---------|------|----------|---------|
| 1 | Por que necesitas un asistente IA | 4 min | Camara |
| 2 | Instalar Claude | 7 min | Camara + Pantalla |
| 3 | Como hablar con Claude | 6 min | Camara + Pantalla |
| 4 | Construye tu primer asistente | 10 min | Camara + Pantalla |
| 5 | De aca en adelante | 3 min | Camara + Pantalla |
| **Total** | | **30 min** | |

## Instrucciones de grabacion

### Equipo:
- iPhone 16/17 (camara)
- Computadora con screen recording (QuickTime / OBS)
- Microfono (incluso el del iPhone es suficiente)

### Como grabar:
1. **Partes de camara:** Graba hablandole a la camara. Fondo limpio o Koh Phangan. Luz natural.
2. **Partes de pantalla:** Graba la pantalla con QuickTime (Mac) o OBS (Windows). Lee el texto mientras haces las acciones.
3. **Edicion:** Combina ambas partes en CapCut o Remotion.

### Tono:
- Casual. Como si le estuvieras explicando a un amigo.
- No leas - **habla**. Si necesitas, lee una vez y despues habla de memoria.
- Si te trabas - arranca la oracion de nuevo. Se edita despues.
- Sonrei. Se energetico. Estas en Koh Phangan, la vida es buena.

### Tips de Screen Recording:
- Agranda la fuente al 150% para que se vea en el celular
- Limpia el escritorio antes de grabar
- Usa una ventana de Claude limpia (sin otras pestanas)
- Cuando escribas - escribi despacio para que se vea lo que pones

### Notas de adaptacion para la version en espanol:
- Se usa espanol neutro (compatible con LATAM y Espana)
- Se usa "tu" (no "usted") para mantener el tono cercano
- Se usa "asistente IA" en vez de "agente IA" (mayor volumen de busqueda)
- La historia personal de Kaniel se mantiene intacta (Israel, ejercito, 7 de octubre, reconstruccion, Koh Phangan)
- Los pasos tecnicos son identicos (Claude es universal)
- Algunas expresiones coloquiales usan voseo ligero ("escribime", "decime") para sonar natural sin alienar a ningun publico - ajustar segun preferencia
