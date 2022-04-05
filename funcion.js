let url = window.location.href;

/// Elementos de li
const tabs = ["index", "conocenos", "obras", "galeria", "premios", "contacto"];

tabs.forEach(e => {
    /// Agregar .php y ver si lo contiene en la url
    if (url.indexOf(e + ".html") !== -1) {
        /// Agregar tab- para hacer que coincida la Id
        setActive("tab-" + e);
    }

});

/// Funcion que asigna la clase active
function setActive(id) {
    document.getElementById(id).setAttribute("class", "nav-item active");
}