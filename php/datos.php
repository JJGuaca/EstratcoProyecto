<?php 

$Nombre = $_POST['Nombre'];
$Apellido = $_POST['Apellido'];
$Correo = $_POST['Correo'];
$Profesion = $_POST['Profesion'];
$Area = $_POST['Area'];

if ($Nombre == '' || $Apellido == '' || $Correo == '' || $Profesion == '' || $Area == '') {
	echo "Datos estan vacios";
}else{
	echo "Datos: ".$Nombre." --- ".$Apellido." --- ".$Correo." --- ".$Profesion." --- ".$Area;
}



 ?>