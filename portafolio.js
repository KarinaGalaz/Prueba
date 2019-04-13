// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Bisutería en cerámica en frío",
    about: "Trabajo en conjunto con emprendedores",
}, {
    figure: "media/foto-2.jpg",
    title: "Batidos de frutas deshidratadas",
    about: "Trabajo para Maggi, marca y packaging",
}, {
    figure: "media/foto3.jpg",
    title: "Maqueta espacio compacto",
    about: "Estudio de diseño ideal",
}, {
    figure: "media/fotos2.jpg",
    title: "Silla eMe",
    about: "Piso de carácter escultórico y minimalista",
}, {
    figure: "media/foto-6.jpg",
    title: "Escritorio",
    about: "Render de producto personal hecho en placa de terciado",
}, {
    figure: "media/fotoo.jpg",
    title: "Lámpara con botella",
    about: "Reutilización y aplicación de corte láser",
}, {
    figure: "media/foto-07.jpg",
    title: "Silllón",
    about: "Proyecto sillón escencialmente de madera",
}, {
    figure: "media/foto-08.jpg",
    title: "Repisa",
    about: "Proyecto personal repisa",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
