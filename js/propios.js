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

}else if(titulo == 'Nosotros'){

	sitio.innerText = 'Nosotros';
	$('#link1').attr('href','.');
	$('#link2').attr('href','nosotros.html');
	$('#link4').attr('href','educacion.html');
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
	$('#link4').attr('href','educacion.html');

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