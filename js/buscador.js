const buscador = document.createElement("input");
buscador.type = "search";
buscador.id = "buscador";
buscador.placeholder = "Buscar palabras...";
buscador.setAttribute("aria-label", "Buscar palabras");
document.getElementById("controles").appendChild(buscador);

buscador.addEventListener("input", () => {
  filtros.texto = buscador.value;
  aplicarFiltros();
});
