const selectorCategorias = document.createElement("select");
selectorCategorias.id = "selector-categorias";
selectorCategorias.setAttribute("aria-label", "Filtrar por categoría");

const opcionTodas = document.createElement("option");
opcionTodas.value = "todas";
opcionTodas.textContent = "Todas las categorías";
selectorCategorias.appendChild(opcionTodas);

const categorias = [...new Set(PALABRAS.map((item) => item.categoria))];
categorias.forEach((categoria) => {
  const opcion = document.createElement("option");
  opcion.value = categoria;
  opcion.textContent = categoria.charAt(0).toLocaleUpperCase() + categoria.slice(1);
  selectorCategorias.appendChild(opcion);
});

document.getElementById("controles").appendChild(selectorCategorias);

selectorCategorias.addEventListener("change", () => {
  filtros.categoria = selectorCategorias.value;
  aplicarFiltros();
});
