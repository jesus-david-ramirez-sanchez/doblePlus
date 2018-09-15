<?php
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $asunto = "contacto desde la web doblePlus";

    #destino
    
    $destino = "cmosquera@malltopic.com";

    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $email . "\nMensaje: " . $mensaje;

    mail($destino, $asunto, $contenido);

    header("Location:./index.html");

?>