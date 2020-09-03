<?php 

$Nombre = $_POST['Nombre'];
$Apellido = $_POST['Apellido'];
$Correo = $_POST['Correo'];

if ($Nombre == '' || $Apellido == '' || $Correo == '' ) {
	echo "Datos estan vacios";
}else{
	echo "Datos: ".$Nombre." --- ".$Apellido." --- ".$Correo;
}



 ?>