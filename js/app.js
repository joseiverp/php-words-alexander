let filtros = { texto: "", categoria: "todas" };

function aplicarFiltros() {
  const texto = filtros.texto.trim().toLocaleLowerCase();
  const palabrasFiltradas = PALABRAS.filter((item) => {
    const coincideTexto = `${item.palabra} ${item.categoria} ${item.descripcion}`
      .toLocaleLowerCase()
      .includes(texto);
    const coincideCategoria = filtros.categoria === "todas" || item.categoria === filtros.categoria;

    return coincideTexto && coincideCategoria;
  });

  const lista = document.getElementById("lista");
  lista.replaceChildren();

  if (palabrasFiltradas.length === 0) {
    const mensaje = document.createElement("li");
    mensaje.className = "sin-resultados";
    mensaje.textContent = "No se encontraron palabras.";
    lista.appendChild(mensaje);
  } else {
    palabrasFiltradas.forEach((item) => {
      const tarjeta = document.createElement("li");
      tarjeta.className = "tarjeta";

      const encabezado = document.createElement("div");
      encabezado.className = "tarjeta-cabecera";

      const palabra = document.createElement("strong");
      palabra.textContent = item.palabra;

      const categoria = document.createElement("span");
      categoria.className = "categoria";
      categoria.textContent = item.categoria;

      const descripcion = document.createElement("p");
      descripcion.textContent = item.descripcion;

      encabezado.append(palabra, categoria);
      tarjeta.append(encabezado, descripcion);
      lista.appendChild(tarjeta);
    });
  }

  document.getElementById("contador").textContent =
    `Mostrando ${palabrasFiltradas.length} de ${PALABRAS.length} palabras`;
}

document.getElementById("titulo").textContent = APP_TITULO;
document.getElementById("subtitulo").textContent = APP_SUBTITULO;
document.getElementById("version").textContent = `Versión ${APP_VERSION}`;
aplicarFiltros();
