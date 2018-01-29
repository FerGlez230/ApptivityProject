<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require 'class.phpmailer.php';

function sendMail($datos){
    
    if($datos['tipo']=="reserva"){
        $nombre = strip_tags($datos['nombre']);
        $apellido = strip_tags($datos['apellido']);
        $email = strip_tags($datos['email']);
        $rooms = strip_tags($datos['rooms']);
        $adults = strip_tags($datos['adults']);
        $children = strip_tags($datos['children']);
        $hotel = $listaHoteles[$datos['hotel']]['nombre'];
        $fecha_ent = strip_tags($datos['fecha_entrada']);
        $fecha_sal = strip_tags($datos['fecha_salida']);
        $header = "The Union 2017 - Reserva\n";
        $mensaje = "
        First Name : $nombre\n
        Last Name : $apellido\n
        Hotel : $hotel\n
        Check in : $fecha_ent\n
        Check out : $fecha_sal\n
        Rooms : $rooms\n
        Adults : $adults\n
        Children : $children\n
        Email : $email\n";
        $mail = new PHPMailer();
        $mail->CharSet = "UTF-8";
        $mail->SetFrom($email, $nombre);
        //$mail->AddAddress("tours@livetalent.com.mx");
        //$mail->AddAddress("joe@braigo.mx");
        $mail->AddAddress("mariel@sinfindeservicios.com");
        $mail->AddBCC("jose.marron3@gmail.com");
        $mail->AddBCC("jose.marron@live.com");
        $mail->Subject = "Contacto Reserva The Union 2017";
        $mail->Body    = $header.$mensaje;
        if(!$mail->Send())
            return "Error: " . $mail->ErrorInfo;
        return 'true';
    }
    else if($datos['tipo']=="contacto"){
        $name = strip_tags($datos['name']);
        $email = strip_tags($datos['email']);
        $message = strip_tags($datos['message']);
        //$telefono = ($datos['fTelefono']!=''?$datos['fTelefono']:'No fue proporcionado');
        $header = "The Union 2017 - Contacto\n";
        $mensaje = "Name : $name\n
        Email : $email\n
        Message : $message\n";
        $mail = new PHPMailer();
        $mail->CharSet = "UTF-8";
        $mail->SetFrom($email, $name);
        //$mail->AddAddress("prensa@livetalent.com.mx");
        $mail->AddAddress("mariel@sinfindeservicios.com");
        $mail->AddBCC("jose.marron3@gmail.com");
        $mail->AddBCC("jose.marron@live.com");
        $mail->Subject = "Contacto The Union 2017";
        $mail->Body    = $header.$mensaje;
        if(!$mail->Send())
            return "Error: " . $mail->ErrorInfo;
        return 'true';
    }
}
?>
