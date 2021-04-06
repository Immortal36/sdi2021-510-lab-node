module.exports = function(app, swig, gestorBD) {
    app.post('/comentarios/:id', function (req, res) {
        if ( req.session.usuario == null){
            res.send("No ha iniciado sesion");
            return;
        }

        let comentario = {
            autor: req.session.usuario,
            cancion : gestorBD.mongo.ObjectID(req.params.id),
            texto : req.body.texto
        }

        // Conectarse
        gestorBD.insertarComentario(comentario, function(id){
            if (id == null) {
                res.send("Error al insertar el comentario");
            } else {
                res.send("Comentario creado");
            }
        });
    });
}