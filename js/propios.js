function scale(btn){
	var btnAc = document.getElementById(btn.id);
	btnAc.style.setProperty('transform','scale(1.1)'); 
}
function scalenot(btn){
	var btnAc = document.getElementById(btn.id);
	btnAc.style.setProperty('transform','scale(1)');
}

$(document).ready(function(){
	var nbar = document.getElementById('nbar');
	var nbarjs = new XMLHttpRequest();
	nbarjs.open('GET','./vistas/navbar.html',false);
	nbarjs.send();
	nbar.innerHTML =nbarjs.responseText;
	var fter = document.getElementById('fter');
	var fterjs = new XMLHttpRequest();
	fterjs.open('GET','./vistas/footer.html',false);
	fterjs.send();
	fter.innerHTML = fterjs.responseText;
	var sitio = document.getElementById('SITIO');
	var titulo = document.getElementById('titulo').innerText; 

if (titulo == 'Home'){
	sitio.innerText = 'Inicio';
	var PopUp1 = document.getElementById('PopUp');
	var nPopUp = new XMLHttpRequest();
	nPopUp.open('GET','./modulos/popup.html', false);
	nPopUp.send();
	PopUp1.innerHTML=nPopUp.responseText;
	var registropop = document.getElementById('registropop');
	var nregistropop = new XMLHttpRequest();
	nregistropop.open('GET','./vistas/registronews.html',false);
	nregistropop.send();
	registropop.innerHTML=nregistropop.responseText;

}else if(titulo == 'Nosotros'){

	sitio.innerText = 'Nosotros';
	$('#link1').attr('href','.');
	$('#link2').attr('href','nosotros.html');
	$('#link4').attr('href','educacion.html');
	$('#link5').attr('href','agenda.html');
	/*SECCION 2*/
	var sec2 = document.getElementById('secc2');
	var nsec2 = new XMLHttpRequest();
	nsec2.open('GET','./vistas/categorias.html',false);
	nsec2.send();
	sec2.innerHTML=nsec2.responseText;
	/*SECCION 3*/
	var sec3 = document.getElementById('secc3');
	var nsec3 = new XMLHttpRequest();
	nsec3.open('GET','./vistas/jumbtronNosotros.html', false);
	nsec3.send();
	sec3.innerHTML = nsec3.responseText;
	/*SECCION 4*/
	var sec4 = document.getElementById('secc4');
	var nsec4 = new XMLHttpRequest();
	nsec4.open('GET','./vistas/nequipo.html', false);
	nsec4.send();
	sec4.innerHTML = nsec4.responseText;
	/*SECCION 5*/
	var sec5 = document.getElementById('secc5');
	var nsec5 = new XMLHttpRequest();
	nsec5.open('GET','./vistas/redprofesional.html', false);
	nsec5.send();
	sec5.innerHTML = nsec5.responseText;

}else if(titulo == 'Educación'){

	sitio.innerText='Educación';
	$('#link1').attr('href','.');
	$('#link2').attr('href','nosotros.html');
	$('#link3').attr('href','nosotros.html#secc2');
	$('#link4').attr('href','educacion.html');
	$('#link5').attr('href','agenda.html');

	/*SECCION 2*/
	var sec2 = document.getElementById('secc2');
	var nsec2 = new XMLHttpRequest();
	nsec2.open('GET','./vistas/introduccion.html', false);
	nsec2.send();
	sec2.innerHTML = nsec2.responseText;

	/*SECCION 3*/
	var sec3 = document.getElementById('secc3');
	var nsec3 = new XMLHttpRequest();
	nsec3.open('GET','./vistas/cursos.html', false);
	nsec3.send();
	sec3.innerHTML = nsec3.responseText;
	/*Seccion 3 modulo 1*/
	var cursosDes = document.getElementById('cursosDes');
	ncursosDes = new XMLHttpRequest();
	ncursosDes.open('GET','./modulos/cursosdes.html', false);
	ncursosDes.send();
	cursosDes.innerHTML = ncursosDes.responseText;
	/*Seccion 3 modulo 2*/
	var cursosHor = document.getElementById('cursosHor');
	ncursosHor = new XMLHttpRequest();
	ncursosHor.open('GET','./modulos/cursosHor.html', false);
	ncursosHor.send();
	cursosHor.innerHTML = ncursosHor.responseText;

	/*SECCION 4*/
	var sec4 = document.getElementById('secc4');
	var nsec4 = new XMLHttpRequest();
	nsec4.open('GET','./vistas/redprofesional.html', false);
	nsec4.send();
	sec4.innerHTML = nsec4.responseText;
	var text = document.getElementById('texto');
	text.innerHTML = '<h5 class="text-muted">Aca es para que los usuarios dejen sus datos para contactar para las inscripciones</h5>';

}else if(titulo == 'Agenda'){
	sitio.innerText='Educación';
	$('#link1').attr('href','.');
	$('#link2').attr('href','nosotros.html');
	$('#link3').attr('href','nosotros.html#secc2');
	$('#link4').attr('href','educacion.html');
	$('#link5').attr('href','#');

	var PopUp1 = document.getElementById('PopUp');
	var nPopUp = new XMLHttpRequest();
	nPopUp.open('GET','./modulos/popup.html', false);
	nPopUp.send();
	PopUp1.innerHTML=nPopUp.responseText;

	var registropop = document.getElementById('registropop');
	var nregistropop = new XMLHttpRequest();
	nregistropop.open('GET','./vistas/registronews.html',false);
	nregistropop.send();
	registropop.innerHTML=nregistropop.responseText;

}else{
	console.log('no igual');
	console.log(titulo);
	}
});

function registro(){
	
	$.ajax({
		url : './php/datos.php',
		type : 'POST',
		data: $('#registro').serialize(),
		success: function(res){
			alert(res);
		}
	});
	

}
function registroNews(){
	
	$.ajax({
		url : './php/datosNews.php',
		type : 'POST',
		data: $('#registro').serialize(),
		success: function(res){
			alert(res);
		}
	});
	

}