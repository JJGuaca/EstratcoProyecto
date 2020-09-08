window.onload  = function(){
	var mes = document.getElementById('nombre-mes').innerText;
	var año = document.getElementById('year').innerText;
	var diasmes = document.getElementById("dias-mes");
	var tabla   = document.createElement("table");
	var tblBody = document.createElement("tbody");
	for (var i = 0; i < 1; i++) {
		var tr = document.createElement("tr"); 
		for (var j = 1; j < 8; j++) {
			var th = document.createElement("th");     
			if (j == 1) {
				var textoth = document.createTextNode('Dom');
			}else if(j == 2){
				var textoth = document.createTextNode('Lun');
			}else if(j == 3){
				var textoth = document.createTextNode('Mar');
			}else if(j == 4){
				var textoth = document.createTextNode('Mie');
			}else if(j == 5){
				var textoth = document.createTextNode('Jue');
			}else if(j == 6){
				var textoth = document.createTextNode('Vie');
			}else if (j == 7) {
				var textoth = document.createTextNode('Sab');
			}
			th.appendChild(textoth);
			tr.appendChild(th);
		}
		tblBody.appendChild(tr);
	}
	var tr = document.createElement("tr");
	for(var k = 1; k<=31; k++){
		var td = document.createElement('td');
		var txto2 = document.createTextNode(k);
		td.appendChild(txto2);
		tr.appendChild(td);
	}

	tblBody.appendChild(tr);
	tabla.appendChild(tblBody);
	diasmes.appendChild(tabla);
	$(tabla).attr('class','table');
}