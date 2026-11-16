// =========================================================================
// 1. CONFIGURACIÓN PRINCIPAL
// =========================================================================
// Cambia esto a "false" cuando termines de editar tus fotos y textos para
// que él solo pueda abrir los días reales del 1 al 24 de diciembre.
const MODO_PRUEBA = true;

// Si tus tapitas son .png en vez de .jpg, cambia esto a ".png"
const EXTENSION_TAPITAS = ".jpg";

// =========================================================================
// 2. CONTENIDO DE LOS 24 DÍAS (EDITA AQUÍ TUS MENSAJES, FOTOS Y ENLACES)
// =========================================================================
// Propiedades disponibles por día:
// - dia: Número del 1 al 24
// - titulo: Título que aparece dentro de la tarjeta
// - mensaje: Tu dedicatoria (puedes usar saltos de línea normales)
// - imagenSorpresa: (Opcional) Ruta a una foto o dibujo interior, ej. "img/sorpresa-3.jpg"
// - vale: (Opcional) Si lo llenas, crea un cupón oficial canjeable con borde punteado
// - textoBoton: (Opcional) Texto del botón de enlace
// - urlBoton: (Opcional) Link a Spotify, YouTube, Google Drive o WhatsApp

const sorpresas = [
  {
    dia: 1,
    titulo: "Bienvenida + Nuestra Playlist 🎶",
    mensaje: "¡Feliz inicio de diciembre, mi amor! Hice este calendario especialmente para ti. Cada día hasta Nochebuena podrás abrir una tapita.\n\nPara empezar, armé esta playlist con canciones que me recuerdan a ti y a nuestros momentos juntos.",
    textoBoton: "Escuchar nuestra playlist 🎧",
    urlBoton: "https://open.spotify.com/" // <-- Pega aquí el link de tu playlist
  },
  {
    dia: 2,
    titulo: "Vale por un postre casero 🍓",
    mensaje: "Porque barriga llena, corazón contento... Hoy te ganaste tu postre favorito hecho desde cero por mí con todo el amor del mundo.",
    vale: "1 Postre casero a elección (cheesecake, galletas o lo que más se te antoje) hecho por mí."
  },
  {
    dia: 3,
    titulo: "Viaje en el tiempo 📸",
    mensaje: "Esta fue una de nuestras primeras fotos juntos. Si supieras lo nerviosa y feliz que estaba ese día... No tenía idea de todo lo bonito que íbamos a construir.",
    imagenSorpresa: "img/sorpresa-3.jpg" // <-- Pon aquí tu primera foto juntos
  },
  {
    dia: 4,
    titulo: "5 cosas que amo de ti ❤️",
    mensaje: "1. Tu forma de hacerme reír incluso en días pesados.\n2. Cómo me escuchas y me apoyas en mis metas.\n3. Tus abrazos que reinician todo lo malo.\n4. Tu inteligencia y dedicación.\n5. La paz que siento cuando estoy contigo."
  },
  {
    dia: 5,
    titulo: "Reto exprés del día 😜",
    mensaje: "¡Alerta de misión! Mándame ahora mismo una selfie haciendo tu mejor cara chistosa para desbloquear un abrazo extra y muchos besos la próxima vez que nos veamos.",
    textoBoton: "Enviar mi foto por WhatsApp 📲",
    urlBoton: "https://wa.me/" // <-- Opcional: pon https://wa.me/593TUNUMERO
  },
  {
    dia: 6,
    titulo: "Noche de videojuegos 🎮",
    mensaje: "Hoy tú tienes el control total. Jugamos lo que tú elijas, el tiempo que quieras, y yo me encargo de llevar los snacks y las bebidas.",
    vale: "Pase libre para una sesión gamer juntos + snacks incluidos."
  },
  {
    dia: 7,
    titulo: "Un dibujito de nosotros 🎨",
    mensaje: "Intenté retratarnos a mi manera porque eres mi persona favorita en este mundo. Espero que te guste tanto como a mí me gustó hacerlo para ti.",
    imagenSorpresa: "img/sorpresa-7.jpg" // <-- Pon aquí tu dibujo digital de ustedes
  },
  {
    dia: 8,
    titulo: "Una canción con dedicatoria 💌",
    mensaje: "Cada vez que escucho esta canción pienso inmediatamente en ti, especialmente en la parte que dice:\n\n\"...\" (escribe aquí tu frase favorita de la canción).",
    textoBoton: "Escuchar la canción 🎵",
    urlBoton: "https://www.youtube.com/" // <-- Pega aquí el link de la canción
  },
  {
    dia: 9,
    titulo: "Lo que más admiro de ti 🌟",
    mensaje: "A veces en la rutina se nos olvida decirlo, pero quiero que sepas lo mucho que admiro tu esfuerzo, tu forma de salir adelante y el gran hombre y compañero que eres. Estoy muy orgullosa de ti."
  },
  {
    dia: 10,
    titulo: "Vale por un masaje relajante 💆‍♂️",
    mensaje: "Para cuando salgas cansado del día o tengas tensión acumulada: este cupón nunca caduca y se puede reclamar en cualquier momento.",
    vale: "15 minutos de masaje en la espalda, cuello o cabeza (sin fecha de vencimiento)."
  },
  {
    dia: 11,
    titulo: "Recuerdo de un paseo especial 🌅",
    mensaje: "Este día es uno de mis recuerdos favoritos contigo. Me encanta salir a conocer lugares nuevos a tu lado, porque contigo cualquier destino se vuelve inolvidable.",
    imagenSorpresa: "img/sorpresa-11.jpg" // <-- Foto de un viaje o salida juntos
  },
  {
    dia: 12,
    titulo: "Maratón de películas 🍿",
    mensaje: "Tú eliges la cartelera (ya sean navideñas, de terror o de acción), nos acomodamos bien abrigados y yo llevo el canguil y los dulces.",
    vale: "1 Tarde/Noche de maratón de películas elegidas 100% por ti."
  },
  {
    dia: 13,
    titulo: "El momento exacto ✨",
    mensaje: "¿Sabes cuándo me di cuenta de que me gustabas de verdad? Fue cuando... (cuenta aquí ese momento o anécdota exacta en la que hiciste clic con él)."
  },
  {
    dia: 14,
    titulo: "Galería de fotos prohibidas 🤫",
    mensaje: "Las fotos que jamás subiríamos a Instagram, pero que son las que más me hacen reír y las que más guardo con cariño.",
    imagenSorpresa: "img/sorpresa-14.jpg" // <-- Collage o foto chistosa espontánea
  },
  {
    dia: 15,
    titulo: "Vale por un antojo 🍔🍦",
    mensaje: "Hoy se cumple un capricho. Vamos juntos por tu comida rápida, helado, café o dulce favorito.",
    vale: "1 Salida exprés a comer tu antojo favorito."
  },
  {
    dia: 16,
    titulo: "Trivia de pareja 🧠❤️",
    mensaje: "Responde estas 3 preguntas por chat (sin hacer trampa):\n\n1. ¿Dónde fue nuestra primera cita?\n2. ¿Cuál es mi comida o postre favorito?\n3. ¿Qué canción dirías que es la nuestra?\n\nSi aciertas las 3, te ganas tu dulce favorito."
  },
  {
    dia: 17,
    titulo: "Un mensaje secreto para ti 🎥",
    mensaje: "Grabé algo cortito especialmente para hoy porque quería recordarte cuánto te quiero de una forma diferente.",
    textoBoton: "Ver video / audio secreto 🎬",
    urlBoton: "https://drive.google.com/" // <-- Sube un video/audio a Drive o YouTube oculto
  },
  {
    dia: 18,
    titulo: "Plan tranquilo sin celulares 📵",
    mensaje: "A veces el mejor regalo es desconectarnos del mundo un rato. Solo tú, yo, caminar, ver el atardecer o conversar escuchando música.",
    vale: "1 Tarde tranquila sin celulares, solo para nosotros dos."
  },
  {
    dia: 19,
    titulo: "Un meme para alegrarte el día 🐱",
    mensaje: "Porque no todo tiene que ser cursilería... este literalmente somos nosotros.",
    imagenSorpresa: "img/sorpresa-19.jpg" // <-- Pon aquí un meme o foto graciosa de gatitos
  },
  {
    dia: 20,
    titulo: "Nuestros planes para el próximo año 🗺️",
    mensaje: "3 cosas que quiero hacer contigo el año que viene:\n\n1. Hacer un viaje juntos a un lugar nuevo.\n2. Seguir cumpliendo nuestras metas y celebrarnos cada logro.\n3. Tener muchas más tardes de risas y comida rica."
  },
  {
    dia: 21,
    titulo: "Hoy yo invito 💳✨",
    mensaje: "Guarda tu billetera hoy. Este vale cubre una salida sencilla o ese detallito que llevas días viendo con ganas.",
    vale: "1 Salida o detallito invitado completamente por mí."
  },
  {
    dia: 22,
    titulo: "Pregunta para recordar 💭",
    mensaje: "Antes de que termine el año, quiero saber algo:\n\nRespóndeme por chat: ¿Cuál fue tu momento favorito de nosotros en todo este año?"
  },
  {
    dia: 23,
    titulo: "Carta de agradecimiento ✉️",
    mensaje: "Falta solo un día para Navidad y quería darte las gracias por haber estado conmigo en los días buenos, en los días ocupados y en los difíciles. Gracias por tu paciencia, tu cariño y por hacer este año mucho más bonito."
  },
  {
    dia: 24,
    titulo: "¡Feliz Nochebuena, mi amor! 🎄🎁",
    mensaje: "¡Llegamos al día 24! Gracias por abrir cada puertita conmigo. Eres el mejor regalo que me pudo dar este año.\n\nPista de tu regalo físico: (Escribe aquí una pista divertida de dónde está escondido su regalo o cuándo se lo darás)."
  }
];

// =========================================================================
// 3. LÓGICA DEL CALENDARIO, FECHAS Y EFECTOS (NO NECESITAS EDITAR ESTO)
// =========================================================================

// Orden desordenado fijo para que parezca un calendario de adviento real
const ORDEN_PUERTAS = [
  14, 3, 21, 8, 19, 1,
  12, 24, 5, 16, 9, 22,
  2, 17, 11, 6, 23, 15,
  4, 20, 7, 13, 18, 10
];

const STORAGE_KEY = "adviento_novio_abiertos_v1";
let puertasAbiertas = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let sonidoActivo = true;

// Referencias al DOM
const gridEl = document.getElementById("calendar-grid");
const progressEl = document.getElementById("progress-count");
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const toastEl = document.getElementById("toast");
const soundToggleBtn = document.getElementById("sound-toggle");
const testBanner = document.getElementById("test-mode-banner");
const resetBtn = document.getElementById("reset-btn");

// Mostrar herramientas de prueba si MODO_PRUEBA = true
if (MODO_PRUEBA) {
  testBanner.classList.remove("hidden");
  resetBtn.classList.remove("hidden");
}

// Verificar si un día ya se puede abrir según la fecha real
function estaDesbloqueado(dia) {
  if (MODO_PRUEBA) return true;

  const hoy = new Date();
  const mes = hoy.getMonth(); // 11 = Diciembre (en JS enero es 0)
  const diaMes = hoy.getDate();

  // Si ya es diciembre, permite abrir hasta el día actual (o todos si ya pasó el 24)
  if (mes === 11) {
    return dia <= diaMes;
  }
  return false;
}

// Actualizar contador de progreso
function actualizarProgreso() {
  progressEl.textContent = `${puertasAbiertas.length} / 24`;
}

// Mostrar notificación flotante
let toastTimeout;
function mostrarToast(mensaje) {
  toastEl.textContent = mensaje;
  toastEl.classList.remove("hidden");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.add("hidden");
  }, 3200);
}

// Efectos de sonido sintetizados (no requieren archivos MP3 externos)
function reproducirSonido(tipo) {
  if (!sonidoActivo) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;

    if (tipo === "abrir") {
      // Acorde mágico navideño suave
      const notas = [523.25, 659.25, 783.99, 1046.5];
      notas.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.08, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.65);
      });
    } else if (tipo === "bloqueado") {
      // Toque grave suave
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.linearRampToValueAtTime(120, now + 0.18);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    }
  } catch (e) {
    // Ignorar si el navegador bloquea audio automático
  }
}

// Abrir ventana modal con el contenido del día
function abrirModal(info) {
  document.getElementById("modal-day-badge").textContent = `Día ${info.dia} de Diciembre`;
  document.getElementById("modal-title").textContent = info.titulo;
  document.getElementById("modal-message").textContent = info.mensaje;

  // Imagen interior opcional
  const imgWrapper = document.getElementById("modal-img-wrapper");
  const imgEl = document.getElementById("modal-img");
  if (info.imagenSorpresa) {
    imgEl.src = info.imagenSorpresa;
    imgWrapper.classList.remove("hidden");
    // Si aún no has subido esa foto interior, oculta el marco automáticamente
    imgEl.onerror = () => imgWrapper.classList.add("hidden");
  } else {
    imgWrapper.classList.add("hidden");
  }

  // Cupón / Vale opcional
  const voucherBox = document.getElementById("modal-voucher");
  const voucherText = document.getElementById("voucher-text");
  if (info.vale) {
    voucherText.textContent = info.vale;
    voucherBox.classList.remove("hidden");
  } else {
    voucherBox.classList.add("hidden");
  }

  // Botón de enlace opcional
  const actionWrapper = document.getElementById("modal-action-wrapper");
  const actionBtn = document.getElementById("modal-btn");
  if (info.textoBoton && info.urlBoton) {
    actionBtn.textContent = info.textoBoton;
    actionBtn.href = info.urlBoton;
    actionWrapper.classList.remove("hidden");
  } else {
    actionWrapper.classList.add("hidden");
  }

  modalOverlay.classList.remove("hidden");
}

// Construir las 24 puertas en pantalla
function renderizarCalendario() {
  gridEl.innerHTML = "";

  ORDEN_PUERTAS.forEach((numeroDia) => {
    const info = sorpresas.find((item) => item.dia === numeroDia);
    const desbloqueado = estaDesbloqueado(numeroDia);
    const yaAbierto = puertasAbiertas.includes(numeroDia);

    const doorWrapper = document.createElement("div");
    doorWrapper.className = `door-wrapper ${yaAbierto ? "is-open" : ""}`;

    // Interior de la puerta
    const interior = document.createElement("div");
    interior.className = "door-interior";
    interior.innerHTML = `
      <span class="open-icon">✨</span>
      <span class="open-label">Día ${numeroDia}<br>Ver sorpresa</span>
    `;

    // Tapita exterior con foto/dibujo
    const cover = document.createElement("div");
    cover.className = "door-cover";

    const img = document.createElement("img");
    img.src = `img/tapa-${numeroDia}${EXTENSION_TAPITAS}`;
    img.alt = `Día ${numeroDia}`;
    // Si aún no existe la imagen de esta tapa, la oculta para mostrar el diseño navideño de fondo
    img.onerror = function () {
      this.style.display = "none";
    };

    const badge = document.createElement("span");
    badge.className = "day-number";
    badge.textContent = numeroDia;

    cover.appendChild(img);
    cover.appendChild(badge);

    if (!desbloqueado) {
      const lock = document.createElement("span");
      lock.className = "lock-badge";
      lock.textContent = "🔒";
      cover.appendChild(lock);
    }

    doorWrapper.appendChild(interior);
    doorWrapper.appendChild(cover);

    // Evento al hacer clic en el cuadro
    doorWrapper.addEventListener("click", () => {
      if (!estaDesbloqueado(numeroDia)) {
        reproducirSonido("bloqueado");
        doorWrapper.classList.remove("shake");
        void doorWrapper.offsetWidth; // Reinicia animación
        doorWrapper.classList.add("shake");
        mostrarToast(`🤫 ¡Aún no! Esta sorpresa se desbloquea el ${numeroDia} de diciembre 🎄`);
        return;
      }

      if (!puertasAbiertas.includes(numeroDia)) {
        puertasAbiertas.push(numeroDia);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(puertasAbiertas));
        doorWrapper.classList.add("is-open");
        actualizarProgreso();
        reproducirSonido("abrir");
        // Pequeña pausa para que alcance a ver la puerta abrirse antes del modal
        setTimeout(() => abrirModal(info), 450);
      } else {
        // Si ya estaba abierta, abre la sorpresa directamente
        abrirModal(info);
      }
    });

    gridEl.appendChild(doorWrapper);
  });

  actualizarProgreso();
}

// Eventos de cierre del modal y controles
modalClose.addEventListener("click", () => modalOverlay.classList.add("hidden"));
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.add("hidden");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modalOverlay.classList.add("hidden");
});

soundToggleBtn.addEventListener("click", () => {
  sonidoActivo = !sonidoActivo;
  soundToggleBtn.textContent = sonidoActivo ? "🔊 Sonido: ON" : "🔇 Sonido: OFF";
});

resetBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  puertasAbiertas = [];
  renderizarCalendario();
  mostrarToast("✨ Todas las puertas se han vuelto a cerrar");
});

// =========================================================================
// 4. ANIMACIÓN SUAVE DE NIEVE EN CANVAS
// =========================================================================
function iniciarNieve() {
  const canvas = document.getElementById("snow-canvas");
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const copos = Array.from({ length: 65 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 2.8 + 1,
    speedY: Math.random() * 0.9 + 0.35,
    speedX: Math.random() * 0.5 - 0.25,
    opacity: Math.random() * 0.6 + 0.25
  }));

  function animar() {
    ctx.clearRect(0, 0, width, height);
    copos.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${c.opacity})`;
      ctx.fill();

      c.y += c.speedY;
      c.x += c.speedX;

      if (c.y > height) {
        c.y = -5;
        c.x = Math.random() * width;
      }
      if (c.x > width) c.x = 0;
      if (c.x < 0) c.x = width;
    });
    requestAnimationFrame(animar);
  }
  animar();
}

// Inicializar todo
renderizarCalendario();
iniciarNieve();