module.exports = function(app, swig) {
    app.get('/autores/agregar', function(req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {});
        res.send(respuesta);
    });

    app.post('/autores/agregar', function(req, res) {
        var nombre = req.body.nombre;
        var grupo = req.body.grupo;
        var rol = req.body.rol;

        if(req.body.nombre == null || req.body.grupo.length <= 0) nombre = "No enviado en la petición.";
        if(req.body.grupo == null || req.body.grupo.length <= 0) grupo = "No enviado en la petición.";
        if(req.body.rol == null || req.body.grupo.length <= 0) rol = "No enviado en la petición.";

        res.send("Nombre: " + nombre + "<br>"
            + " Grupo: " + grupo + "<br>"
            + " Rol: " + rol);
    });

    app.get('/autores/*', function(req, res) {
        res.redirect('/autores');
    });
};