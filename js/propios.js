function scale(btn){
	var btnAc = document.getElementById(btn.id);
	btnAc.style.setProperty('transform','scale(1.1)'); 
}
function scalenot(btn){
	var btnAc = document.getElementById(btn.id);
	btnAc.style.setProperty('transform','scale(1)');
}

$(document).ready(function(){
	var sitio = document.getElementById('SITIO');
	var titulo = document.getElementById('titulo').innerText; 

if(titulo == 'Nosotros'){
	sitio.innerText='Nosotros';
	$('#link1').attr('href','.');
	$('#link2').attr('href','nosotros.php');
	$('#link4').attr('href','educacion.php');
}else if(titulo == 'Educación'){
	sitio.innerText='Educación';
	$('#link1').attr('href','.');
	$('#link2').attr('href','nosotros.php');
	$('#link4').attr('href','educacion.php');

}else{
	console.log('no igual');
	console.log(titulo);
}
//console.log(sitio);
//console.log(titulo);
});
