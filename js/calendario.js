window.onload = function(){
	var mesNombre= ['enero','febrero','marzo','abril', 'mayo', 'junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
	var calendario = document.getElementById('calendar');
	var dia = document.getElementById('dia');
	var mes = document.getElementById('mes');
	var year = document.getElementById('year');
	var despues = document.getElementById('despues');
	var antes = document.getElementById('antes');

	var fecha = new Date();
	var diaFecha = fecha.getDate();
	var mesFecha = fecha.getMonth();
	var mesYear = fecha.getFullYear();
	

	//
	mes.innerHTML = mesNombre[mesFecha];
	year.innerHTML = mesYear.toString();

	antes.addEventListener('click',()=>mesAnterior());
	despues.addEventListener('click',()=>mesSigiente());

	escribirMes(mesFecha);



	function escribirMes(mes){
		let fecha2 = new Date();
		var mesFecha2 = fecha2.getMonth();
		var year2 = fecha2.getFullYear();

		for(let i = startDia(); i>0; i--){
			dia.innerHTML+=`<span class="gcell gcell-unable">${totalDias(mesFecha-1)-(i-1)}</span>`;
		}

		for(let i = 1; i<=totalDias(mes); i++ ){
			if(i === diaFecha && mes === mesFecha2 && mesYear === year2){
				dia.innerHTML+=`<span class="gcell gcell-Hoy">${i}</span>`;
			}else if(i == 15 && mes === mesFecha2 && mesYear === year2){
				dia.innerHTML+=`<span class="gcell gcell-select" title="Evento posible">${i}</span>`;

			}else{
				dia.innerHTML+=`<span class="gcell">${i}</span>`;
			}
			
		}		

	}

	function totalDias(mes){
		if(mes === -1) mes = 11;
		if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11) {
			return 31;
		}else if(mes == 3 || mes == 5 || mes == 8 || mes == 10){
			return 30;
		}else{
			return bisiesto() ? 29:28;
		}

	}

	function bisiesto(){
		return ((mesYear % 100 !==0) && (mesYear % 4 === 0) || (mesYear % 400 === 0));

	}

	function startDia(){
		let start = new Date(mesYear, mesFecha, 1);
		return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;

	}

	function mesAnterior(){
		if(mesFecha !== 0){
			mesFecha--;
		}else{
			mesFecha = 11;
			mesYear --;
		}

		setNewDate();

	}

	function mesSigiente(){
		if(mesFecha !== 11){
			mesFecha++;
		}else{
			mesFecha = 0;
			mesYear ++;
		}

		setNewDate();

	}

	function setNewDate(){
		fecha.setFullYear(mesYear,mesFecha,diaFecha);
		mes.innerHTML = mesNombre[mesFecha];
		year.innerHTML = mesYear.toString();
		dia.innerHTML=``;

		escribirMes(mesFecha);

	}


}


