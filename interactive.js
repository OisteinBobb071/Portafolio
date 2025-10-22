
// ======= CAMBIAR COLOR DE FONDO SEGÚN LA SECCIÓN =======

// Seleccionamos todos los enlaces del menú
const enlacesMenu = document.querySelectorAll(".menu nav ul li a");

// Función que cambia el fondo según la sección
function cambiarFondo(seccionId) {
  const body = document.body;

  // Reiniciamos a color base
  body.style.backgroundColor = "#f9f9f9";

  // Cambiamos según la sección
  if (seccionId === "#inicio") {
    body.style.backgroundColor = "#f9f9f9";
  } else if (seccionId === "#Servicios") {
    body.style.backgroundColor = "#e8f0ff";
  } else if (seccionId === "#proyectos") {
    body.style.backgroundColor = "#fef3e6";
  } else if (seccionId === "#contactame") {
    body.style.backgroundColor = "#e6f9ef";
  }
}

// Recorremos los enlaces para escuchar el clic
enlacesMenu.forEach(enlace => {
  enlace.addEventListener("click", e => {
    const destino = enlace.getAttribute("href"); // Ej: "#Servicios"
    cambiarFondo(destino);
  });
});

// Animar banner al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner h2");
  banner.style.opacity = "0";
  banner.style.transform = "translateY(-30px)";
  setTimeout(() => {
    banner.style.transition = "all 1s ease";
    banner.style.opacity = "1";
    banner.style.transform = "translateY(0)";
  }, 300);
});

const servicios = document.querySelectorAll("#Servicios li");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + window.innerHeight;
  
  servicios.forEach(serv => {
    if (scrollY > serv.offsetTop + 100) {
      serv.style.opacity = "1";
      serv.style.transform = "translateY(0)";
         serv.style.transition = "all 0.7s ease";
    }
  });
});

const listaServicios = document.querySelectorAll("#Servicios li");

listaServicios.forEach(servicio => {
  servicio.addEventListener("mouseover", () => {
    servicio.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    servicio.style.transform = "scale(1.05)";
    
    servicio.style.transition = "all 0.3s ease";
  });
  servicio.addEventListener("mouseout", () => {
    servicio.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    servicio.style.transform = "scale(1)";
  });
});

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.opacity = "1";
  } else {
    btnTop.style.opacity = "0";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
