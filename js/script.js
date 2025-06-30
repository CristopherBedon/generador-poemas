const poemas = [
  "Te amo mucho mi princesita hermosa.",
  "Siempre estaré contigo, siempre de los siempres.",
  "Estaré siempre para ti, cuando necesites algo, búscame, amo escucharte.",
  "Eres una niña muy fuerte, confío mucho en ti y sé que podrás lograr todos los objetivos que te traces.",
  "Tienes un gran corazón mi amor, eres una persona buena, bondadosa y sincera.",
  "Tu carácter no es tu punto fuerte pero son cositas que podemos mejorar, siempre querré que seas la mejor versión de ti misma.",
  "Te amo más que a nada, de aquí a la luna, ida y vuelta.",
  "Mi amor, no estés triste por las cosas que estás pasando, todos tenemos problemas, tú podrás con todo lo que te propongas hacer.",
  "Estoy orgulloso de ti mi amor.",
  "Mi ingeniera ambiental favorita, sigue creciendo y aprendiendo para que seas una capa de capas.",
  "Eres mi voleybolista número uno. Siempre amo verte jugar.",
  "Mi princesita, cada día me haces sentir que todo vale la pena.",
  "Cuando tengas miedo, acuérdate que siempre estoy aquí para ti.",
  "Me encanta cuando sonríes, porque sé que algo bueno estoy haciendo.",
  "Eres tan única que no me canso de repetírtelo: estoy orgulloso de ti.",
  "Si pudiera quitarte cada problema, lo haría sin pensarlo.",
  "Nunca dudes de ti, porque yo jamás dudo de lo capaz que eres.",
  "Mi amor, contigo quiero todos mis planes, hasta los más locos.",
  "Gracias por dejarme estar para ti, me encanta escucharte aunque no digas nada.",
  "A veces no digo mucho, pero siempre estoy pensando en ti.",
  "Verte cumplir tus metas me hace sentir el novio más feliz del mundo.",
  "Mi ingeniera favorita, la más fuerte, la más valiente, la más tú.",
  "No importa cuántas veces te caigas, yo siempre voy a estar para levantarte.",
  "Me encanta ver cómo luchas por lo que quieres, eres mi ejemplo.",
  "Mi campeona de voley y de todo lo que te propongas.",
  "Te amo sin pausas ni puntos finales, solo contigo quiero escribir mi historia.",
  "Salud! Por los viajes que hemos hecho juntos y los que haremos."
];

// Elementos
const inicio = document.getElementById("inicio");
const poemaSection = document.getElementById("poemaSection");
const poemaDiv = document.getElementById("poema");
const buscarBtn = document.getElementById("buscarPoema");
const nuevoBtn = document.getElementById("nuevoPoema");
const volverBtn = document.getElementById("volver");

// Buscar poema con una sola palabra clave
buscarBtn.addEventListener("click", () => {
  const palabra = document.getElementById("palabra").value.toLowerCase();

  // Filtrar poemas que contengan la palabra
  const coincidencias = poemas.filter(poema =>
    palabra && poema.toLowerCase().includes(palabra)
  );

  let poemaElegido = "";

  if (coincidencias.length > 0) {
    poemaElegido = coincidencias[Math.floor(Math.random() * coincidencias.length)];
  } else {
    poemaElegido = poemas[Math.floor(Math.random() * poemas.length)];
  }

  poemaDiv.textContent = poemaElegido;

  // Animación
  inicio.classList.add("fade-out");
  setTimeout(() => {
    inicio.classList.add("hidden");
    inicio.classList.remove("fade-out");

    poemaSection.classList.remove("hidden");
    poemaSection.classList.add("fade-in");
    setTimeout(() => {
      poemaSection.classList.add("show");
    }, 50);
  }, 800);
});

// Ver otro poema aleatorio
nuevoBtn.addEventListener("click", () => {
  const poemaAleatorio = poemas[Math.floor(Math.random() * poemas.length)];
  poemaDiv.textContent = poemaAleatorio;
});

// Volver a intentar
volverBtn.addEventListener("click", () => {
  poemaSection.classList.remove("show");
  poemaSection.classList.remove("fade-in");
  poemaSection.classList.add("fade-out");

  setTimeout(() => {
    poemaSection.classList.add("hidden");
    poemaSection.classList.remove("fade-out");

    inicio.classList.remove("hidden");
    inicio.classList.remove("fade-out");
    inicio.classList.add("fade-in");

    // 👇 Limpia el input
    document.getElementById("palabra").value = "";

    setTimeout(() => {
      inicio.classList.add("show");
    }, 50);
  }, 800);
});
