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
	var sec2 = document.getElementById('secc2');
	var nsec2 = new XMLHttpRequest();
	nsec2.open('GET','./vistas/categorias.html',false);
	nsec2.send();
	sec2.innerHTML=nsec2.responseText;
	var sec3 = document.getElementById('secc3');
	var nsec3 = new XMLHttpRequest();
	nsec3.open('GET','./vistas/jumbtronNosotros.html', false);
	nsec3.send();
	sec3.innerHTML = nsec3.responseText;

}else if(titulo == 'Educación'){

	sitio.innerText='Educación';
	$('#link1').attr('href','.');
	$('#link2').attr('href','nosotros.html');
	$('#link4').attr('href','educacion.html');

}else{
	console.log('no igual');
	console.log(titulo);
}
//console.log(sitio);
//console.log(titulo);
});
