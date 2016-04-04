document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
		
		document.body.style.height = screen.availHeight + 'px';
		
		$('#valore').focus(function(){
			myScroll2.scrollToElement("#valore", "1s");
		});
			$('#materiale').focus(function(){
			myScroll2.scrollToElement("#materiale", "1s");
		});
			$('#descrizioneF').focus(function(){
			myScroll2.scrollToElement("#descrizioneF", "1s");
		});
			$('#descrizioneR').focus(function(){
			myScroll2.scrollToElement("#descrizioneR", "1s");
		});
			$('#descrizioneB').focus(function(){
			myScroll2.scrollToElement("#descrizioneB", "1s");
		});
			$('#rarita').focus(function(){
			myScroll2.scrollToElement("#rarita", "1s");
		});
			$('#posseduta').focus(function(){
			myScroll2.scrollToElement("#posseduta", "1s");
		});
			$('#dimensione').focus(function(){
			myScroll2.scrollToElement("#dimensione", "1s");
		});
			$('#statoconservazione').focus(function(){
			myScroll2.scrollToElement("#statoconservazione", "1s");
		});
			$('#valore2').focus(function(){
			myScroll2.scrollToElement("#valore2", "1s");
		});
			$('#anno').focus(function(){
			myScroll2.scrollToElement("#anno", "1s");
		});
		
		$('#tiratura').focus(function(){
			myScroll2.scrollToElement("#tiratura", "1s");
		});
		
		var provenienza = getParameterByName('id');
		
		//ipad
		var isMobileScreenWidth = (screen.width / window.devicePixelRatio)
			
		if(isMobileScreenWidth < 768){
			
			
		}
		else
		{
			
			
			$("#logo00").removeClass("circolare").addClass("circolare1");
			$("#logo1").removeClass("circolare").addClass("circolare1");
			$("#logo2").removeClass("circolare").addClass("circolare1");
			$("#logo5").removeClass("circolare").addClass("circolare1");
			//$("#stampante").attr("width", "240");
			//$("#logo").attr("width", "300");
			$("#imgmail").attr("width", "100");
			$("#logostampa2").attr("width", "70");
			$("#tbl00").show();
			$("#tbl0").show();
			
			$("#myImageVol").attr("height", "120");
			$("#myImageVol2").attr("height", "120");
			$("#myImageVol3").attr("height", "120");
			
			$("#myImageVol4").attr("height", "120");
			$("#myImageVol5").attr("height", "120");
			$("#myImageVol6").attr("height", "120");
			
			$("#myImageVol7").attr("height", "120");
			$("#myImageVol8").attr("height", "120");
			$("#myImageVol9").attr("height", "120");
			
			$("#myImageVol10").attr("height", "120");
			$("#myImageVol11").attr("height", "120");
			$("#myImageVol12").attr("height", "120");
			
			$("#ImageVol").attr("height", "120");
			$("#ImageVol2").attr("height", "120");
			$("#ImageVol3").attr("height", "120");
			
			$("#ImageVol4").attr("height", "120");
			$("#ImageVol5").attr("height", "120");
			$("#ImageVol6").attr("height", "120");
			
			$("#ImageVol7").attr("height", "120");
			$("#ImageVol8").attr("height", "120");
			$("#ImageVol9").attr("height", "120");
			
			$("#ImageVol10").attr("height", "120");
			$("#ImageVol11").attr("height", "120");
			$("#ImageVol12").attr("height", "120");

			
		}

		last_click_time = new Date().getTime();
		
		document.addEventListener('click', function (e) {
								  
		  click_time = e['timeStamp'];
		  
		  if (click_time && (click_time - last_click_time) < 1000) { e.stopImmediatePropagation();
		  
		  e.preventDefault();
		  
		  return false;
		  
		  }
		  
		  last_click_time = click_time;
		  
		 }, true);
		
		
		// Workaround for buggy header/footer fixed position when virtual keyboard is on/off
		$('input, select')
		.on('focus', function (e) {
			$('header, footer').css('position', 'absolute');
			})
		.on('blur', function (e) {
			$('header, footer').css('position', 'fixed');
			//force page redraw to fix incorrectly positioned fixed elements
			setTimeout( function() {
        window.scrollTo( $.mobile.window.scrollLeft(), $.mobile.window.scrollTop() );
					   }, 20 );
			});
		
		
		var email = localStorage.getItem("email");
		
		var ciao = "";
		var ciao1 = "";
		var distanza = "";
		var Categoria="";
		var Provincia="";
		localStorage.setItem("unico", "0");
		var db;
		var dbCreated = false;
		
		
		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
			
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;//January is 0, so always add + 1
			
			var ora = today.getHours()
			if(ora<10){ora="0"+ora}
			
			var minuti = today.getMinutes();
			if(minuti<10){minuti="0"+minuti}
			
			var secondi = today.getSeconds();
			if(secondi<10){secondi="0"+secondi}
			
			//self.document.formia.ora.value = ora + ":" + minuti
			
			var yyyy = today.getFullYear();
			if(dd<10){dd="0"+dd}
			if(mm<10){mm="0"+mm}
			today = dd+'/'+mm+'/'+yyyy;
			

			
			//mostrapunti()
			$(".spinner").hide();
			

		}
		else{
			
			$("#noconn").show();
			
			
			$("#footer").show();
		}
    }
	


function vai(){
	var modello = self.document.formia.mySelect.value;
	
	
	
	if (modello=="01"){
		navigator.notification.alert(
									 'Inserire un Modello della Collezione',  // message
									 alertDismissed,         // callback
									 'Nome',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	if (self.document.formia.Nome.value==""){
		navigator.notification.alert(
									 'Inserire un Nome alla Collezione',  // message
									 alertDismissed,         // callback
									 'Nome',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	if(modello=="Monete"){
		/*if (self.document.formia.Nome.value == "") {
		 
		 self.document.formia.mySelect.value = "01"
		 
		 navigator.notification.alert(
		 'inserire un Nome Collezione',  // message
		 alertDismissed,         // callback
		 'Nome',            // title
		 'OK'                  // buttonName
		 );
		 
		 return;
		 }*/
		
		localStorage.setItem("NomeCollezione", self.document.formia.Nome.value);
		localStorage.setItem("Modello", modello);
		
		//window.location.href = "#page2";
		$.mobile.changePage( "#page2", { transition: "slide", changeHash: false });
		carica2();
	}
	else if(modello=="Orologi"){
		localStorage.setItem("NomeCollezione", self.document.formia.Nome.value);
		localStorage.setItem("Modello", modello);
		
		$.mobile.changePage( "#page3", { transition: "slide", changeHash: false });
		carica3();
	}
	else if(modello=="Quadri"){
		localStorage.setItem("NomeCollezione", self.document.formia.Nome.value);
		localStorage.setItem("Modello", modello);
		
		$.mobile.changePage( "#page4", { transition: "slide", changeHash: false });
		carica4();
	}
	else if(modello=="Altro"){
		localStorage.setItem("NomeCollezione", self.document.formia.Nome.value);
		localStorage.setItem("Modello", modello);
		
		$.mobile.changePage( "#page9", { transition: "slide", changeHash: false });
		carica9();
	}
	else{}
	
	return;

}

function vaimodello(modello){
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/Check_Home2.asp",
		   contentType: "application/json",
		   data: {email:localStorage.getItem("email"),id:modello},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				if (item.ID != 0){
				  
				  if(item.Modello=="Monete"){
				  
				  localStorage.setItem("NomeCollezione", item.Nome);
				  localStorage.setItem("Modello", item.Modello);
				  
				  $.mobile.changePage( "#page2", { transition: "slide", changeHash: false });
				  carica2();
				  }
				  else if(item.Modello=="Orologi"){
				  localStorage.setItem("NomeCollezione", item.Nome);
				  localStorage.setItem("Modello", item.Modello);
				  
				  $.mobile.changePage( "#page3", { transition: "slide", changeHash: false });
				  carica3();
				  }
				  else if(item.Modello=="Quadri"){
				  localStorage.setItem("NomeCollezione", item.Nome);
				  localStorage.setItem("Modello", item.Modello);
				  
				  $.mobile.changePage( "#page4", { transition: "slide", changeHash: false });
				  carica4();
				  }
				  else if(item.Modello=="Altro"){
				  localStorage.setItem("NomeCollezione", item.Nome);
				  localStorage.setItem("Modello", item.Modello);
				  
				  $.mobile.changePage( "#page9", { transition: "slide", changeHash: false });
				  carica9();
				  }
				  else{}
				  
				  
				}
				else{
				navigator.notification.alert(
											   'Credenziali non corrette',  // message
											   alertDismissed,             // callback
											   item.Token,                // title
											   'Done'                    // buttonName@
											   );
				  }
				  });
		   
		   $(".spinner").hide();
		   
		   $("#listacollezione").html(scrivo);
		   
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	

}


function nuovamonete(){
	//window.location.href = "#page2";
	carica2();
	self.document.formia2.nomecollezione.value = ""
	
	self.document.formia2.valore.value= ""
	self.document.formia2.materiale.value= ""
	self.document.formia2.descrizioneF.value= ""
	self.document.formia2.descrizioneR.value= ""
	self.document.formia2.descrizioneB.value= ""
	self.document.formia2.rarita.value= ""
	self.document.formia2.posseduta.value= ""
	self.document.formia2.dimensione.value= ""
	self.document.formia2.statoconservazione.value= ""
	self.document.formia2.valore2.value= ""
	self.document.formia2.anno.value= ""
	self.document.formia2.tiratura.value= ""
	
	 $("#myImageVol").attr("src", "img/vol1.png");
	 $("#myImageVol2").attr("src", "img/vol1.png");
	 $("#myImageVol3").attr("src", "img/vol1.png");
}

function nuovaorologi(){
	//window.location.href = "#page3";
	carica3();
	self.document.formia3.nomecollezione.value = ""
	
	self.document.formia3.marca.value= ""
	self.document.formia3.meccanismo.value= ""
	self.document.formia3.materialecassa.value= ""
	self.document.formia3.materialevetro.value= ""
	self.document.formia3.materialecinturino.value= ""
	self.document.formia3.prezzo.value= ""
	self.document.formia3.tiraturaqp.value= ""
	
	 $("#myImageVol4").attr("src", "img/vol1.png");
	 $("#myImageVol5").attr("src", "img/vol1.png");
	 $("#myImageVol6").attr("src", "img/vol1.png");
}

function nuovaquadri(){
	//window.location.href = "#page4";
	carica4();
	self.document.formia4.nomecollezione.value = ""
	
	self.document.formia4.quadro.value= ""
	self.document.formia4.autore.value= ""
	self.document.formia4.quotazione.value= ""
	self.document.formia4.provenienza.value= ""
	self.document.formia4.iscrizione.value= ""
	self.document.formia4.firme.value= ""
	self.document.formia4.esposto.value= ""
	self.document.formia4.dove.value= ""
	self.document.formia4.linkautore.value= ""
	self.document.formia4.linkpubblicazine.value= ""
	self.document.formia4.dimensioni.value= ""
	self.document.formia4.titolo.value= ""
	
	 $("#myImageVol7").attr("src", "img/vol1.png");
	 $("#myImageVol8").attr("src", "img/vol1.png");
	 $("#myImageVol9").attr("src", "img/vol1.png");
}

function nuovaaltro(){
	//window.location.href = "#page11";
	carica11();
	self.document.formia11.nomecollezioneAA.value = ""
	
	self.document.formia11.valoreAA.value= ""
	self.document.formia11.materialeAA.value= ""
	self.document.formia11.descrizioneFAA.value= ""
	self.document.formia11.descrizioneRAA.value= ""
	self.document.formia11.descrizioneBAA.value= ""
	self.document.formia11.raritaAA.value= ""
	self.document.formia11.possedutaAA.value= ""
	self.document.formia11.dimensioneAA.value= ""
	self.document.formia11.statoconservazioneAA.value= ""
	self.document.formia11.valore2AA.value= ""
	self.document.formia11.annoAA.value= ""
	self.document.formia11.tiraturaAA.value= ""
	self.document.formia11.provenienzaAA.value= ""
	
	$("#myImageVol10").attr("src", "img/vol1.png");
	$("#myImageVol11").attr("src", "img/vol1.png");
	$("#myImageVol12").attr("src", "img/vol1.png");
}

function carica(){
 //$("#mySelect").html("<option value='01' selected>Modelli</option><option value='Monete'>Monete</option><option value='Orologi'>Orologi</option><option value='Quadri'>Quadri</option>");
	
var myScroll;

	myScroll = new IScroll('#wrapper', { click: true, bounce: true });
	setTimeout (function(){
		myScroll.refresh();
	}, 1000);
	
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);

	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica2(){
	$("#NomeCollez").html("<font size='3'><b>" + localStorage.getItem("NomeCollezione") + "</b></font>");
	
	self.document.formia2.nome.value = localStorage.getItem("NomeCollezione")
	localStorage.setItem("Foto1", "");
	localStorage.setItem("Foto2", "");
	localStorage.setItem("Foto3", "");
	
	var myScroll2;
	
		myScroll2 = new IScroll('#wrapper2', { click: true, bounce: true });
		setTimeout (function(){
			myScroll2.refresh();
				setTimeout (function(){
					$("#footer2").fadeIn();
			}, 500);
		}, 700);

	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
}

function carica3(){
	$("#NomeCollez2").html("<font size='3'><b>" + localStorage.getItem("NomeCollezione") + "</b></font>");
	
	self.document.formia3.nome.value = localStorage.getItem("NomeCollezione")
	
	localStorage.setItem("Foto4", "");
	localStorage.setItem("Foto5", "");
	localStorage.setItem("Foto6", "");
	
	
	var myScroll3;
	
	myScroll3 = new IScroll('#wrapper3', { click: true, bounce: true });
	setTimeout (function(){
		myScroll3.refresh();
				setTimeout (function(){
					$("#footer3").fadeIn();
				}, 500);
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica4(){
	$("#NomeCollez3").html("<font size='3'><b>" + localStorage.getItem("NomeCollezione") + "</b></font>");
	
	self.document.formia4.nome.value = localStorage.getItem("NomeCollezione")
	
	localStorage.setItem("Foto7", "");
	localStorage.setItem("Foto8", "");
	localStorage.setItem("Foto9", "");
	
	
	var myScroll4;
	
	myScroll4 = new IScroll('#wrapper4', { click: true, bounce: true });
	setTimeout (function(){
				myScroll4.refresh();
				setTimeout (function(){
					$("#footer4").fadeIn();
				}, 500);
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica5(){
	
	var myScroll5;
	
	myScroll5 = new IScroll('#wrapper5', { click: true, bounce: true });
	setTimeout (function(){
				myScroll5.refresh();
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica6(){
	localStorage.setItem("controllo", 0);
	
	var myScroll6;
	
	myScroll6 = new IScroll('#wrapper6', { click: true, bounce: true });
	setTimeout (function(){
		myScroll6.refresh();
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica7(){
	localStorage.setItem("controllo", 0);
	
	var myScroll7;
	
	myScroll7 = new IScroll('#wrapper7', { click: true, bounce: true });
	setTimeout (function(){
				myScroll7.refresh();
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica8(){
	localStorage.setItem("controllo", 0);
	
	var myScroll8;
	
	myScroll8 = new IScroll('#wrapper8', { click: true, bounce: true });
	setTimeout (function(){
				myScroll8.refresh();
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica9(){
	$("#NomeCollez9").html("<font size='3'><b>" + localStorage.getItem("NomeCollezione") + "</b></font>");
	self.document.formia9.nome.value = localStorage.getItem("NomeCollezione")
	
	var myScroll9;
	
	myScroll9 = new IScroll('#wrapper9', { click: true, bounce: true });
	setTimeout (function(){
				myScroll9.refresh();
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica10(){
	
	var myScroll10;
	
	myScroll10 = new IScroll('#wrapper10', { click: true, bounce: true });
	setTimeout (function(){
		myScroll10.refresh();
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica11(){
	$("#NomeCollezAA").html("<font size='3'><b>" + localStorage.getItem("NomeCollezione") + "</b></font>");
	self.document.formia11.nomeAA.value = localStorage.getItem("NomeCollezione")
	
	var myScroll11;
	
	myScroll11 = new IScroll('#wrapper11', { click: true, bounce: true });
	setTimeout (function(){
		myScroll11.refresh();
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica12(){
	
	var myScroll12;
	
	myScroll12 = new IScroll('#wrapper12', { click: true, bounce: true });
	setTimeout (function(){
		myScroll12.refresh();
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica0(){
	
	var myScroll0;
	
	myScroll0 = new IScroll('#wrapper0', { click: true, bounce: true });
	setTimeout (function(){
		myScroll0.refresh();
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function carica00(){
	
	var myScroll00;
	
	myScroll00 = new IScroll('#wrapper00', { click: true, bounce: true });
	setTimeout (function(){
				myScroll00.refresh();
	}, 700);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function agg(){
	db = window.openDatabase('mydb', '1.0', 'TestDB', 1000000);
	
	db.transaction(function (tx) {
       tx.executeSql('CREATE TABLE IF NOT EXISTS Ordine (Email, Via, Data, Ora, Civico, Longitudine, Latitudine, Volantini, Foto)');
	});
	
	//agg3();
	
	seleziona()
	
}

function agg3(){
	db2 = window.openDatabase('mydb2', '1.0', 'Coord', 1000000);
	
	db2.transaction(function (tx2) {
       tx2.executeSql('CREATE TABLE IF NOT EXISTS Coordinate (Data, Ora, Civico, Latitudine, Longitudine)');
	});
	
	
	seleziona()
	
}


function seleziona() {
	//alert("1")
	var lend = "<br><table border='0' align='center' width='100%'><tr><td align='center' width='33%'><b>Via</b></td><td align='center'  width='33%'><b>Civico</b></td><td align='center'  width='33%'><b>N.Volantini</b></td></tr>"
	
	
	db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Ordine', [], function (tx, results) {
					 var len = results.rows.length, i;
					 
					 for (i = 0; i < len; i++){

					 
					 lend = lend + "<tr><td align='center' width='33%'>"+ results.rows.item(i).Via +"</td><td align='center'  width='33%'>"+ results.rows.item(i).Civico +"</td><td align='center'  width='33%'>"+ results.rows.item(i).Volantini +"</td></tr>";
					 
					 }
					 
					  $("#contenuto").html(lend + "</table>");
					 
					 
					 }, null);
				   
				   
				   initscroll()
				   
		});
	
	
	
	/*db2.transaction(function (tx2) {
	 tx2.executeSql('SELECT * FROM Coordinate', [], function (tx2, results2) {
	 var len = results2.rows.length, i;
	 
	 for (i = 0; i < len; i++){
	 
		lend = lend + "<tr><td align='center' width='33%'>"+ results2.rows.item(i).Latitudine +"</td><td align='center'  width='33%'>"+ results2.rows.item(i).Longitudine +"</td><td align='center'  width='33%'>"+ results2.rows.item(i).Civico +"</td></tr>";
	 
	 }
	 
	 $("#contenuto").html(lend + "</table>");
	 
	 
	 }, null);
	 
	 
	 initscroll()
	 
	});*/

	
}

function dlt(){
	
	db.transaction(function (tx) {
		tx.executeSql('DELETE FROM Ordine', [], function (tx, results) {
	}, null);
	});
	
	/*db2.transaction(function (tx2) {
		tx2.executeSql('DELETE FROM Coordinate', [], function (tx2, results2) {
		}, null);
	});*/
	
	
	$("#btncancella").hide();
	$("#btnsalva").show();
	
	localStorage.setItem("imgvolantino", "");
	localStorage.setItem("imgvolantino2", "");
	localStorage.setItem("imgvolantino3", "");
	localStorage.setItem("imgvolantino4", "");
	localStorage.setItem("imgvolantino5", "");
	localStorage.setItem("imgvolantino6", "");
	
	var image001 = document.getElementById('myImageVol');
	image001.src = "img/vol1.png";
	var image002 = document.getElementById('myImageVol2');
	image002.src = "img/vol1.png";
	var image003 = document.getElementById('myImageVol3');
	image003.src = "img/vol1.png";
	var image004 = document.getElementById('myImageVol4');
	image004.src = "img/vol1.png";
	var image005 = document.getElementById('myImageVol5');
	image005.src = "img/vol1.png";
	var image006 = document.getElementById('myImageVol6');
	image006.src = "img/vol1.png";
	
	seleziona();
	
}

function onConfirm(button) {
	
	if (button==1){
		localStorage.setItem("email3", 1);
		dlt()
	}
	else{
		localStorage.setItem("email2", localStorage.getItem("emailStory"));
		
		localStorage.setItem("loginvera", "")
		localStorage.setItem("email", "")
		
		window.location.href = "Login.html";
	}
}


function verificawifi(){
	$("#verifica").click();
}


function onResume() {
	app.initialize();
}

function checkPos() {
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
	function onSuccess(position) {
		ciao = position.coords.latitude;
		ciao1 = position.coords.longitude;
		
		localStorage.setItem("lat", ciao)
		localStorage.setItem("lng", ciao1)
		
		self.document.formia.Lati.value = ciao;
		self.document.formia.Longi.value = ciao1;


		codeLatLng(ciao,ciao1)

	}
	
	
	function onError(error) {
		
		localStorage.setItem("geostory", "NO")
		
		/*$("#radio").attr("maps:q=Via di Acilia, 17,Roma");
		$("#radio2").attr("maps:q=Via di Acilia, 17,Roma");
		$("#radio9").attr("maps:q=Via di Acilia, 17,Roma");*/

	}
	
}

function codeLatLng(lati,lngi) {

	
	var geocoder;
	geocoder = new google.maps.Geocoder();
	//var input = "41.875094, 12.478151";
	//var latlngStr = input.split(',', 2);
	var lat = parseFloat(lati);
	var lng = parseFloat(lngi);
	var latlng = new google.maps.LatLng(lat, lng);
	
	geocoder.geocode({'latLng': latlng}, function(results, status) {
					 if (status == google.maps.GeocoderStatus.OK) {
					 
					 
					 if (results[0]) {
					 
					 var viadotto = results[0].formatted_address;
					 
					 var mySplitResult = viadotto.split(",");
					 
					 localStorage.setItem("Via", mySplitResult[0].replace(/[0-9]/g, '').replace('-', ''))

					 self.document.formia.via.value = mySplitResult[0].replace(/[0-9]/g, '').replace('-', '');
					 
					 
					 $(".spinner").hide();

					 
					 }

					 } else {
					 navigator.notification.alert(
												  'Non riesco a rilevare la tua posizione',  // message
												  alertDismissed,         // callback
												  'Attenzione',            // title
												  'OK'                  // buttonName
												  );
					 
					 $(".spinner").hide();


					 }
					 
					 if(results[1]){
					 
						var cittaa = results[1].formatted_address;
						var mySplitResult1 = cittaa.split(",");
					 
						localStorage.setItem("Citta", mySplitResult1[1].replace(/[0-9]/g, ''))
					 
						//alert(mySplitResult1[1].replace(/[0-9]/g, ''))
					 
						return;
						
					 }
			});

	
	myScroll.refresh();

}

function gomappa(){
	var addressLongLat = '41.862321,12.692804';
	
	window.open("http://maps.apple.com/?q="+addressLongLat, '_blank');

	
}

function getDistance(lat1,lon1,lat2,lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2-lat1);  // deg2rad below
	var dLon = deg2rad(lon2-lon1);
	var a =
	Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
	Math.sin(dLon/2) * Math.sin(dLon/2)
	;
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c; // Distance in km
	return d;
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}



function apri() {
	var pagina = "donazione";
	var ref = window.open('http://www.pokeranswer.it/live/'+ pagina +'.asp', '_blank', 'location=no');
	//www.pokeranswer.it/live/aams.html
}

function GoBack() {
	$(window).scroll(function() {
					 if($(window).scrollTop() + $(window).height() > $(document).height() - 40) {
					 buildprodotto(localStorage.getItem("Categoria"),localStorage.getItem("Provincia"),2,1);
					 }
					 });
	  history.go(-1);
	
	}




function compraEmail() {
	window.plugin.email.open({
		to:      ['info@mistertod.it'],
		subject: 'Contatti',
		body:    '',
		isHtml:  true
	});
}

function EmailDimenticata() {
	navigator.notification.prompt(
								  'Inserisci il tuo indirizzo email',  // message
								  onPrompt,                  // callback to invoke
								  'Recupera la Password',            // title
								  ['Invia','Annulla'],             // buttonLabels
								  'Email'                 // defaultText
								  );
}

function onPrompt(results) {
	if(results.buttonIndex==1){
		if (results.input1 == "") {
			navigator.notification.alert(
										 'inserire indirizzo email',  // message
										 alertDismissed,         // callback
										 'Email',            // title
										 'OK'                  // buttonName
										 );
			return;
		}
		
		EmailAddr = results.input1;
		Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
		if (Filtro.test(EmailAddr)) {
			
		}
		else {
			navigator.notification.alert(
										 'Caratteri email non consentiti',  // message
										 alertDismissed,         // callback
										 'Email',            // title
										 'OK'                  // buttonName
										 );
			return;
		}

		
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://www.mistertod.it/www/Check_RecPassword.asp",
			   contentType: "application/json",
			   data: {email:results.input1},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $.each(result, function(i,item){
					if(item.Token==1024){
					  navigator.notification.alert(
												   'Invio eseguito correttamente',  // message
												   alertDismissed,         // callback
												   'Recupero Password',            // title
												   'OK'                  // buttonName
												   );
					}
					else{
						navigator.notification.alert(
												   'Recupero fallito, riprova in seguito',  // message
												   alertDismissed,         // callback
												   'Errore Recupero',            // title
												   'OK'                  // buttonName
												   );
					}

			   
					  
				});
			   
			   $(".spinner").hide();
			   
			   },
			   error: function(){
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Possibile errore di rete, riprova tra qualche minuto',  // message
											alertDismissed,         // callback
											'Attenzione',            // title
											'Done'                  // buttonName@
											);
			   
			   },
		dataType:"jsonp"});

		
	}
		
}

function errorHandler(error) {
	navigator.notification.alert(
								 'Possibile errore di rete, riprova tra qualche minuto',  // message
								 alertDismissed,         // callback
								 'Attenzione',            // title
								 'Done'                  // buttonName
								 );
}

function getKey(key){
	if ( key == null ) {
		keycode = event.keyCode;
		
	} else {
		keycode = key.keyCode;
	}
	
	if (keycode ==13){
		
		document.activeElement.blur();
		$("input").blur()
		return false;
		
	}
	
}

function alertDismissed() {
	
}

function initscroll() {
	
	myScroll = new IScroll('#wrapper', { click: true });
	
	setTimeout (function(){
		myScroll.refresh();
				
		myScroll.scrollToElement("#segna", "1s");
	}, 500);
				   
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
				   
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

}

function initscroll2() {
	
	myScroll = new IScroll('#wrapper', { click: true });
	
	setTimeout (function(){
				myScroll.refresh();
				
				myScroll.scrollToElement("#segna", "1s");
				$("#btnVia").click();
				
				}, 1000);
	
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
}

function uscire(){
localStorage.setItem("loginvera", "")
localStorage.setItem("email", "")
	
window.location.href = "index.html";
}

function goprofilo(){
	var loggato = localStorage.getItem("loginvera")
	var tblProfile;
	
	if((loggato=="")||(!loggato)){
		window.location.href = "Login.html";
	}else{
		
		window.location.href = "Profilo.html";
	}
}

function exitapp(){
	navigator.app.exitApp();
}

function riparti(){
	
	window.location.href = "index.html";
	
}

function vedivia(){
	checkPos()
	
	$("#viale").show();
	$("#civiccia1").show();
	
}

function vedicivico(){
	$("#civiccia").show()
	self.document.formia.nvolantini.value = ""
	self.document.formia.civico.value = ""
	
	//initscroll()
	myScroll.refresh();
	
	 $(window).scrollTop(200);
	
	//myScroll.scrollTo(0, myScroll.maxScrollY, 0);
}

// FOTO VOLANTINO

function prendi(){

	navigator.camera.getPicture(Successo, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 150,
								targetHeight: 150
								});
}


function Successo(imageData) {
	var angle = 0
	angle = (angle+90)%360;
	
	localStorage.setItem("Foto1", "data:image/png;base64," + imageData);
	
	var image000 = document.getElementById('myImageVol');
	image000.src = localStorage.getItem("Foto1");
	
    image000.className = "rotate"+angle;

}

function prendi2(){
	
	navigator.camera.getPicture(Successo2, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 150,
								targetHeight: 150
								});
}


function Successo2(imageData) {
	var angle = 0
	angle = (angle+90)%360;
	
	localStorage.setItem("Foto2", "data:image/png;base64," + imageData);
	
	var image002 = document.getElementById('myImageVol2');
	image002.src = localStorage.getItem("Foto2");
	
	image002.className = "rotate"+angle;
}

function prendi3(){
	
	navigator.camera.getPicture(Successo3, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 150,
								targetHeight: 150
								});
}


function Successo3(imageData) {
	var angle = 0
	angle = (angle+90)%360;

	localStorage.setItem("Foto3", "data:image/png;base64," + imageData);
	
	var image003 = document.getElementById('myImageVol3');
	image003.src = localStorage.getItem("Foto3");
	
	image003.className = "rotate"+angle;
}

function prendi4(){
	
	navigator.camera.getPicture(Successo4, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 200,
								targetHeight: 200
								});
}


function Successo4(imageData) {
	
	localStorage.setItem("Foto4", "data:image/png;base64," + imageData);
	
	var image004 = document.getElementById('myImageVol4');
	image004.src = localStorage.getItem("Foto4");
	
}

function prendi5(){
	
	navigator.camera.getPicture(Successo5, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 200,
								targetHeight: 200
								});
}

function Successo5(imageData) {
	
	localStorage.setItem("Foto5", "data:image/png;base64," + imageData);
	
	var image005 = document.getElementById('myImageVol5');
	image005.src = localStorage.getItem("Foto5");
	
}

function prendi6(){
	
	navigator.camera.getPicture(Successo6, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 200,
								targetHeight: 200
								});
}

function Successo6(imageData) {
	
	localStorage.setItem("Foto6", "data:image/png;base64," + imageData);
	
	var image006 = document.getElementById('myImageVol6');
	image006.src = localStorage.getItem("Foto6");
	
}

function prendi7(){
	
	navigator.camera.getPicture(Successo7, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 200,
								targetHeight: 200
								});
}

function Successo7(imageData) {
	
	localStorage.setItem("Foto7", "data:image/png;base64," + imageData);
	
	var image007 = document.getElementById('myImageVol7');
	image007.src = localStorage.getItem("Foto7");
	
}

function prendi8(){
	
	navigator.camera.getPicture(Successo8, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 200,
								targetHeight: 200
								});
}

function Successo8(imageData) {
	
	localStorage.setItem("Foto8", "data:image/png;base64," + imageData);
	
	var image008 = document.getElementById('myImageVol8');
	image008.src = localStorage.getItem("Foto8");
	
}

function prendi9(){
	
	navigator.camera.getPicture(Successo9, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 200,
								targetHeight: 200
								});
}

function Successo9(imageData) {
	
	localStorage.setItem("Foto9", "data:image/png;base64," + imageData);
	
	var image009 = document.getElementById('myImageVol9');
	image009.src = localStorage.getItem("Foto9");
	
}

function prendi10(){
	
	navigator.camera.getPicture(Successo10, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 200,
								targetHeight: 200
								});
}

function Successo10(imageData) {
	
	localStorage.setItem("Foto10", "data:image/png;base64," + imageData);
	
	var image0010 = document.getElementById('myImageVol10');
	image0010.src = localStorage.getItem("Foto10");
	
}

function prendi11(){
	
	navigator.camera.getPicture(Successo11, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 200,
								targetHeight: 200
								});
}

function Successo11(imageData) {
	
	localStorage.setItem("Foto11", "data:image/png;base64," + imageData);
	
	var image0011 = document.getElementById('myImageVol11');
	image0011.src = localStorage.getItem("Foto11");
	
}

function prendi12(){
	
	navigator.camera.getPicture(Successo12, onFail, { quality: 30,
								destinationType: Camera.DestinationType.DATA_URL,
								encodingType: Camera.EncodingType.PNG,
								targetWidth: 200,
								targetHeight: 200
								});
}

function Successo12(imageData) {
	
	localStorage.setItem("Foto12", "data:image/png;base64," + imageData);
	
	var image0012 = document.getElementById('myImageVol12');
	image0012.src = localStorage.getItem("Foto12");
	
}


// FOTO E ARCHIVIO

function scatta(){
	//localStorage.setItem("imgcivico", "");
	
	if (self.document.formia.nvolantini.value == "") {
		navigator.notification.alert(
									 'inserire il numero dei volantini',  // message
									 alertDismissed,         // callback
									 'N. Volantini',            // title
									 'OK'                  // buttonName
									 );
		return;
	}

	
	if (self.document.formia.civico.value == "") {
		navigator.notification.alert(
									 'inserire un numero civico',  // message
									 alertDismissed,         // callback
									 'Civico',            // title
									 'OK'                  // buttonName
									 );
		return;
	}

	
	//agg2()
	
	navigator.camera.getPicture(onSuccess, onFail, { quality: 30,
		destinationType: Camera.DestinationType.DATA_URL,
		encodingType: Camera.EncodingType.PNG,
		targetWidth: 200,
		targetHeight: 200
	});
}



function onSuccess(imageData) {
	var today = new Date();

	var ora = today.getHours()
	if(ora<10){ora="0"+ora}
	
	var minuti = today.getMinutes();
	if(minuti<10){minuti="0"+minuti}

	var nuovoOrario = ora + ":" + minuti
	

	var image00 = document.getElementById('myImage');
	
	sogno = "data:image/png;base64," + imageData;
	
	
	var ciccioL = parseFloat(self.document.formia.Lati.value)
	
	var ciccioP = parseFloat(self.document.formia.Longi.value)
	
	setTimeout (function(){
				
	db.transaction(function (tx) {

       tx.executeSql('INSERT INTO Ordine (Email, Via, Data, Ora, Civico, Volantini, Longitudine, Latitudine, Foto) VALUES ("'+ localStorage.getItem("email") +'", "'+ self.document.formia.via.value +'", "'+ self.document.formia.data.value +'", "'+ nuovoOrario +'", "'+ self.document.formia.civico.value +'", "'+ self.document.formia.nvolantini.value +'", "'+ ciccioP +'", "'+ ciccioL +'", "'+ sogno +'")');
	});
				
	}, 300);
	
	var conteggio = (parseInt(self.document.formia.volantini.value) + parseInt(self.document.formia.nvolantini.value))
	localStorage.setItem("conteggio", conteggio);
	
	self.document.formia.volantini.value = conteggio
	
				
	image00.src = sogno;
	
	
	setTimeout (function(){
	
		$("#ufoto").show();
	
		seleziona();
				
	}, 500);
	
	//controllo internet
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
	
	if(connectionStatus=='online'){
	
	/*$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/prolution/Check_Coordinate.asp",
		   contentType: "application/json",
		   data: {Data:self.document.formia.data.value, Ora:nuovoOrario, Civico:self.document.formia.civico.value, Longitudine:ciccioP, Latitudine:ciccioL},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.Token == 1024){

				  
				  }
			});
		   
		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   

		   },
	dataType:"jsonp"});*/
		
		/*setTimeout (function(){
		
		var nuovadata = self.document.formia.data.value.replace("/","&#47;")
		nuovadata = nuovadata.replace("/","&#47;")
					
		$.ajax({
			type: "POST",
			url: "http://www.gtechplay.com/prolution/Check_Coordinate.asp",
			data: {Data:nuovadata, Ora:nuovoOrario, Civico:self.document.formia.civico.value, Longitudine:ciccioP, Latitudine:ciccioL, Nome:sogno},
			cache: false,
			contentType: "application/x-www-form-urlencoded",
			success: function (result) {
			   $.each(result, function(i,item){
					//$("#codice").html(item.Token);
			   });
			   
			},
			error: function(){
			   
			   navigator.notification.alert(
											'NOOO',  // message
											alertDismissed,         // callback
											'Connessione Internet',            // title
											'OK'                  // buttonName
											);
			   
			}
			   
		});
					
		seleziona();
					
		}, 1200);*/
	}
	
	
}


function onFail(message) {
	navigator.notification.alert(
								 'Nessuna foto archiviata',  // message
								 alertDismissed,         // callback
								 'Foto',            // title
								 'OK'                  // buttonName
								 );
}

function start() {
	
	document.getElementById("email").value = "F10620"
	
	localStorage.setItem("idoperatore", result.idoperatore);
	
}


// AGGIORNAMENTO E SALVATAGGIO SCHEDE -------------------------------------


function salvamonete() {
	if (self.document.formia2.nome.value == "") {
		navigator.notification.alert(
									 'inserire un Nome alla collezione',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	if (self.document.formia2.nomecollezione.value == "") {
		navigator.notification.alert(
									 'inserire un Nome alla collezione',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	//alert(localStorage.getItem("NomeCollezione") + localStorage.getItem("Modello") + localStorage.getItem("email"))
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_Nuova.asp",
		   contentType: "application/json",
		   data: {nome:self.document.formia2.nome.value,nomecollezione:self.document.formia2.nomecollezione.value,modello:localStorage.getItem("Modello"),email:localStorage.getItem("email"),Valore:self.document.formia2.valore.value,Materiale:self.document.formia2.materiale.value,DescrizioneFronte:self.document.formia2.descrizioneF.value,DescrizioneRetro:self.document.formia2.descrizioneR.value,DescrizioneBordo:self.document.formia2.descrizioneB.value,Rarita:self.document.formia2.rarita.value,Posseduta:self.document.formia2.posseduta.value,Dimensione:self.document.formia2.dimensione.value,StatoConservazione:self.document.formia2.statoconservazione.value,Valore2:self.document.formia2.valore2.value,Anno:self.document.formia2.anno.value,Tiratura:self.document.formia2.tiratura.value},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  //alert(item.Token);
				  
				  if (item.Token == 1024){
					setTimeout (function(){
						salvafoto(1,item.NomeFoto1)
								
								setTimeout (function(){
									salvafoto(2,item.NomeFoto2)
											
										setTimeout (function(){
											salvafoto(3,item.NomeFoto3)
													navigator.notification.alert(
																				 'Scheda Salvata Correttamente',  // message
																				 alertDismissed,         // callback
																				 'OK',            // title
																				 'Done'                  // buttonName
																				 );
													
										}, 1000);
											
								}, 1000);
								
					  }, 1000);
				  
					//alert(item.NomeFoto1 + " - " + item.NomeFoto2 + " - " + item.NomeFoto3)
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Collezione gia esistente',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName@
											   );
				  }
			});
		   
		   setTimeout (function(){
			 $(".spinner").hide();
		   }, 4000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	

}

function stampamonete() {
	//alert(self.document.formia7.idB.value)
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/Check_Stampa.asp",
		   contentType: "application/json",
		   data: {id:self.document.formia7.idB.value,Categoria:"Monete",email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.ID != 0){
					navigator.notification.alert(
							'Stampa inviata via email',  // message
							 alertDismissed,         // callback
							 'STAMPA',            // title
							 'Done'                  // buttonName
					);
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Credenziali non corrette',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName@
											   );
				  }
			});
		   
			    setTimeout (function(){
				   $(".spinner").hide();
				}, 2000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
}

function aggiornamonete() {
	if (self.document.formia7.nomeB.value == "") {
		navigator.notification.alert(
									 'inserire un Nome alla collezione',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	//alert(localStorage.getItem("NomeCollezione") + localStorage.getItem("Modello") + localStorage.getItem("email"))
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_Aggiorna.asp",
		   contentType: "application/json",
		   data: {id:self.document.formia7.idB.value,nome:self.document.formia7.nomeB.value,modello:"Monete",email:localStorage.getItem("email"),Valore:self.document.formia7.valoreB.value,Materiale:self.document.formia7.materialeB.value,DescrizioneFronte:self.document.formia7.descrizioneFB.value,DescrizioneRetro:self.document.formia7.descrizioneRB.value,DescrizioneBordo:self.document.formia7.descrizioneBB.value,Rarita:self.document.formia7.raritaB.value,Posseduta:self.document.formia7.possedutaB.value,Dimensione:self.document.formia7.dimensioneB.value,StatoConservazione:self.document.formia7.statoconservazioneB.value,Valore2:self.document.formia7.valore2B.value,Anno:self.document.formia7.annoB.value,Tiratura:self.document.formia7.tiraturaB.value},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  //alert(item.Token);
				  
				  if (item.Token == 1024){
				   /*setTimeout (function(){
							  salvafoto(1,item.NomeFoto1)
							  
							  setTimeout (function(){
										  salvafoto(2,item.NomeFoto2)
										  
										  setTimeout (function(){
													  salvafoto(3,item.NomeFoto3)
													  navigator.notification.alert(
																				   'Scheda Salvata Correttamente',  // message
																				   alertDismissed,         // callback
																				   'OK',            // title
																				   'Done'                  // buttonName
																				   );
													  
													  }, 1000);
										  
										  }, 1000);
							  
							  }, 1000);*/
					
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Credenziali non corrette',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName@
											   );
				  }
				  });
		   
		   setTimeout (function(){
					   $(".spinner").hide();
					   }, 4000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
	
}


function salvaorologi() {
	if (self.document.formia3.nome.value == "") {
		navigator.notification.alert(
									 'inserire un Nome alla collezione',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	if (self.document.formia3.nomecollezione.value == "") {
		navigator.notification.alert(
									 'inserire un Nome alla collezione',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
		
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_Nuova.asp",
		   contentType: "application/json",
		   data: {nome:self.document.formia3.nome.value,nomecollezione:self.document.formia3.nomecollezione.value,modello:localStorage.getItem("Modello"),email:localStorage.getItem("email"),marca:self.document.formia3.marca.value,meccanismo:self.document.formia3.meccanismo.value,materialecassa:self.document.formia3.materialecassa.value,materialevetro:self.document.formia3.materialevetro.value,materialecinturino:self.document.formia3.materialecinturino.value,prezzo:self.document.formia3.prezzo.value,tiraturaQP:self.document.formia3.tiraturaqp.value},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.Token == 1){
				  
				  setTimeout (function(){
							  salvafoto(4,item.NomeFoto1)
							  
							  setTimeout (function(){
										  salvafoto(5,item.NomeFoto2)
										  
										  setTimeout (function(){
													  salvafoto(6,item.NomeFoto3)
													  
													  navigator.notification.alert(
															'Scheda Salvata Correttamente',  // message
															alertDismissed,         // callback
															'OK',            // title
															'Done'                  // buttonName
													  );
										  }, 1000);
										  
								}, 1000);
							  
					}, 1000);
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Collezione gia esistente',  // message
											   alertDismissed,         // callback
											   item.Token,            // title
											   'Done'                  // buttonName@
											   );
				  }
			});
		   
		   setTimeout (function(){
					   $(".spinner").hide();
					   }, 4000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}

function stampaorologi() {
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/Check_Stampa.asp",
		   contentType: "application/json",
		   data: {id:self.document.formia6.idC.value,Categoria:"Orologi",email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.ID != 0){
				  navigator.notification.alert(
											   'Stampa inviata via email',  // message
											   alertDismissed,         // callback
											   'STAMPA',            // title
											   'Done'                  // buttonName
											   );
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Credenziali non corrette',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName@
											   );
				  }
				  });
		   
		   setTimeout (function(){
					   $(".spinner").hide();
					   }, 2000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
}

function aggiornaorologi() {
	if (self.document.formia6.nomeC.value == "") {
		navigator.notification.alert(
									 'inserire un Nome alla collezione',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_Aggiorna.asp",
		   contentType: "application/json",
		   data: {id:self.document.formia6.idC.value,nome:self.document.formia6.nomeC.value,modello:"Orologi",email:localStorage.getItem("email"),marca:self.document.formia6.marcaC.value,meccanismo:self.document.formia6.meccanismoC.value,materialecassa:self.document.formia6.materialecassaC.value,materialevetro:self.document.formia6.materialevetroC.value,materialecinturino:self.document.formia6.materialecinturinoC.value,prezzo:self.document.formia6.prezzoC.value,tiraturaQP:self.document.formia6.tiraturaqpC.value},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.Token == 1){
				  
					/*setTimeout (function(){
							  salvafoto(4,item.NomeFoto1)
							  
							  setTimeout (function(){
										  salvafoto(5,item.NomeFoto2)
										  
										  setTimeout (function(){
													  salvafoto(6,item.NomeFoto3)
													  
													  navigator.notification.alert(
																				   'Scheda Salvata Correttamente',  // message
																				   alertDismissed,         // callback
																				   'OK',            // title
																				   'Done'                  // buttonName
																				   );
													  }, 1000);
										  
										  }, 1000);
							  
							  }, 1000);*/
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Credenziali non corrette',  // message
											   alertDismissed,         // callback
											   item.Token,            // title
											   'Done'                  // buttonName@
											   );
				  }
				  });
		   
		   setTimeout (function(){
					   $(".spinner").hide();
					   }, 4000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}


function salvaquadri() {
	if (self.document.formia4.nome.value == "") {
		navigator.notification.alert(
									 'inserire un Nome alla collezione',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	if (self.document.formia4.nomecollezione.value == "") {
		navigator.notification.alert(
									 'inserire un Nome alla collezione',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_Nuova.asp",
		   contentType: "application/json",
		   data: {nome:self.document.formia4.nome.value,nomecollezione:self.document.formia4.nomecollezione.value,modello:localStorage.getItem("Modello"),email:localStorage.getItem("email"),quadro:self.document.formia4.quadro.value,autore:self.document.formia4.autore.value,quotazione:self.document.formia4.quotazione.value,provenienza:self.document.formia4.provenienza.value,iscrizione:self.document.formia4.iscrizione.value,firme:self.document.formia4.firme.value,esposto:self.document.formia4.esposto.value,dove:self.document.formia4.dove.value,linkautore:self.document.formia4.linkautore.value,linkpubblicazine:self.document.formia4.linkpubblicazine.value,dimensioni:self.document.formia4.dimensioni.value,titolo:self.document.formia4.titolo.value},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.Token == 1){
				  setTimeout (function(){
							  salvafoto(7,item.NomeFoto1)
							  
							  setTimeout (function(){
										  salvafoto(8,item.NomeFoto2)
										  
										  setTimeout (function(){
													  salvafoto(9,item.NomeFoto3)
													  navigator.notification.alert(
																				   'Scheda Salvata Correttamente',  // message
																				   alertDismissed,         // callback
																				   'OK',            // title
																				   'Done'                  // buttonName
																				   );
													  
										  }, 1000);
										  
										  }, 1000);
							  
							  }, 1000);
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Collezione gia esistente',  // message
											   alertDismissed,         // callback
											   item.Token,            // title
											   'Done'                  // buttonName@
											   );
				  }
				  });
		   
		   setTimeout (function(){
					   $(".spinner").hide();
					   }, 4000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}

function stampaquadri() {
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/Check_Stampa.asp",
		   contentType: "application/json",
		   data: {id:self.document.formia8.idD.value,Categoria:"Quadri",email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.ID != 0){
				  navigator.notification.alert(
											   'Stampa inviata via email',  // message
											   alertDismissed,         // callback
											   'STAMPA',            // title
											   'Done'                  // buttonName
											   );
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Credenziali non corrette',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName@
											   );
				  }
				  });
		   
		   setTimeout (function(){
					   $(".spinner").hide();
					   }, 2000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
}

function aggiornaquadri() {
	

	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_Aggiorna.asp",
		   contentType: "application/json",
		   data: {id:self.document.formia8.idD.value,nome:self.document.formia8.nomeD.value,modello:"Quadri",email:localStorage.getItem("email"),quadro:self.document.formia8.quadroD.value,autore:self.document.formia8.autoreD.value,quotazione:self.document.formia8.quotazioneD.value,provenienza:self.document.formia8.provenienzaD.value,iscrizione:self.document.formia8.iscrizioneD.value,firme:self.document.formia8.firmeD.value,esposto:self.document.formia8.espostoD.value,dove:self.document.formia8.doveD.value,linkautore:self.document.formia8.linkautoreD.value,linkpubblicazine:self.document.formia8.linkpubblicazineD.value,dimensioni:self.document.formia8.dimensioneD.value,titolo:self.document.formia8.titoloD.value},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.Token == 1){

				  
				  }
				  else{
				  navigator.notification.alert(
											   'Credenziali non corrette',  // message
											   alertDismissed,         // callback
											   item.Token,            // title
											   'Done'                  // buttonName@
											   );
				  }
			});
		   
		    setTimeout (function(){
					   $(".spinner").hide();
			}, 2000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}


function salvafoto(n,nome) {
	
	if (localStorage.getItem("Foto"+ n +"") === null || localStorage.getItem("Foto"+ n +"")=="null" || typeof(localStorage.getItem("Foto"+ n +"")) == 'undefined' || localStorage.getItem("Foto"+ n +"")==0 || localStorage.getItem("Foto"+ n +"")=="") {
		
		
	}
	else {
	
	$.ajax({
	 type: "POST",
	 url: "http://www.gtechplay.com/mycollection/Check_CoordinateV2.asp",
	 data: {NomeFoto:nome, Foto:localStorage.getItem("Foto"+ n +"")},
	 cache: false,
	 contentType: "application/x-www-form-urlencoded",
	 success: function (result) {
		   /*navigator.notification.alert(
				'Scheda salvata correttamente',  // message
				alertDismissed,         // callback
				'OK',            // title
				'Done'                  // buttonName
			);*/
	 },
	 error: function(){
	 $("#opzioni").show();
	 
	 navigator.notification.alert(
	 'Errore imprevisto nel caricamento dei dati',  // message
	 alertDismissed,         // callback
	 'Connessione Internet',            // title
	 'OK'                  // buttonName
	 );
	 
	 $(".spinner").hide();
	 
	 }
	 
	 });
		
	}
}


function salvaaltro() {
	//var termini = document.getElementById('Valore');
	
	if (document.getElementById('CValore').checked) {
		$("#valoreAA").show();

	}
	else {
		$("#valoreAA").hide();
		//return;
	}
	
	if (document.getElementById('CProvenienza').checked) {
		$("#provenienzaAA").show();
		
	}
	else {
		$("#provenienzaAA").hide();
		//return;
	}
	
	if (document.getElementById('CMateriale').checked) {
		$("#materialeAA").show();
		
	}
	else {
		$("#materialeAA").hide();
		//return;
	}
	if (document.getElementById('CDescrizioneFronte').checked) {
		$("#descrizioneFAA").show();
		
	}
	else {
		$("#descrizioneFAA").hide();
		//return;
	}
	if (document.getElementById('CDescrizioneRetro').checked) {
		$("#descrizioneRAA").show();
		
	}
	else {
		$("#descrizioneRAA").hide();
		//return;
	}
	if (document.getElementById('CTiratura').checked) {
		$("#tiraturaAA").show();
		
	}
	else {
		$("#tiraturaAA").hide();
		//return;
	}
	if (document.getElementById('CRarita').checked) {
		$("#raritaAA").show();
		
	}
	else {
		$("#raritaAA").hide();
		//return;
	}
	if (document.getElementById('CPosseduta').checked) {
		$("#possedutaAA").show();
		
	}
	else {
		$("#possedutaAA").hide();
		//return;
	}
	if (document.getElementById('CDimensione').checked) {
		$("#dimensioneAA").show();
		
	}
	else {
		$("#dimensioneAA").hide();
		//return;
	}
	if (document.getElementById('CAnno').checked) {
		$("#annoAA").show();
		
	}
	else {
		$("#annoAA").hide();
		//return;
	}
	
	
	/*$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_Nuova.asp",
		   contentType: "application/json",
		   data: {nome:self.document.formia2.nome.value,modello:localStorage.getItem("Modello"),email:localStorage.getItem("email"),Valore:self.document.formia2.valore.value,Materiale:self.document.formia2.materiale.value,DescrizioneFronte:self.document.formia2.descrizioneF.value,DescrizioneRetro:self.document.formia2.descrizioneR.value,DescrizioneBordo:self.document.formia2.descrizioneB.value,Rarita:self.document.formia2.rarita.value,Posseduta:self.document.formia2.posseduta.value,Dimensione:self.document.formia2.dimensione.value,StatoConservazione:self.document.formia2.statoconservazione.value,Valore2:self.document.formia2.valore2.value,Anno:self.document.formia2.anno.value,Tiratura:self.document.formia2.tiratura.value},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  //alert(item.Token);
				  
				  if (item.Token == 1024){
				  setTimeout (function(){
							  salvafoto(1,item.NomeFoto1)
							  
							  setTimeout (function(){
										  salvafoto(2,item.NomeFoto2)
										  
										  setTimeout (function(){
													  salvafoto(3,item.NomeFoto3)
													  navigator.notification.alert(
																				   'Scheda Salvata Correttamente',  // message
																				   alertDismissed,         // callback
																				   'OK',            // title
																				   'Done'                  // buttonName
																				   );
													  
													  }, 1000);
										  
										  }, 1000);
							  
							  }, 1000);
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Collezione gia esistente',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName@
											   );
				  }
				  });
		   
		   setTimeout (function(){
				$(".spinner").hide();
			}, 4000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});*/
	
	window.location.href = "#page11";
	carica11();
	
}

function salvaaltro2() {

	
	if (self.document.formia11.nomeAA.value == "") {
		navigator.notification.alert(
									 'inserire un Nome alla collezione',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	if (self.document.formia11.nomecollezioneAA.value == "") {
		navigator.notification.alert(
									 'inserire un Nome alla collezione',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	//alert(localStorage.getItem("NomeCollezione") + localStorage.getItem("Modello") + localStorage.getItem("email"))
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_Nuova.asp",
		   contentType: "application/json",
		   data: {nome:self.document.formia11.nomeAA.value,nomecollezione:self.document.formia11.nomecollezioneAA.value,modello:localStorage.getItem("Modello"),email:localStorage.getItem("email"),Valore:self.document.formia11.valoreAA.value,Materiale:self.document.formia11.materialeAA.value,DescrizioneFronte:self.document.formia11.descrizioneFAA.value,DescrizioneRetro:self.document.formia11.descrizioneRAA.value,DescrizioneBordo:self.document.formia11.descrizioneBAA.value,Rarita:self.document.formia11.raritaAA.value,Posseduta:self.document.formia11.possedutaAA.value,Dimensione:self.document.formia11.dimensioneAA.value,StatoConservazione:self.document.formia11.statoconservazioneAA.value,Valore2:self.document.formia11.valore2AA.value,Anno:self.document.formia11.annoAA.value,Tiratura:self.document.formia11.tiraturaAA.value,Provenienza:self.document.formia11.provenienzaAA.value},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  //alert(item.Token);
				  
				  if (item.Token == 1024){
				  setTimeout (function(){
							  salvafoto(10,item.NomeFoto1)
							  
							  setTimeout (function(){
										  salvafoto(11,item.NomeFoto2)
										  
										  setTimeout (function(){
													  salvafoto(12,item.NomeFoto3)
													  navigator.notification.alert(
																				   'Scheda Salvata Correttamente',  // message
																				    alertDismissed,         // callback
																				   'OK',            // title
																				   'Done'                  // buttonName
																				   );
													  
													  }, 1000);
										  
										  }, 1000);
							  
							  }, 1000);
				  
				  //alert(item.NomeFoto1 + " - " + item.NomeFoto2 + " - " + item.NomeFoto3)
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Collezione gia esistente',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName@
											   );
				  }
				  });
		   
		   setTimeout (function(){
					   $(".spinner").hide();
					   }, 4000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}

function aggiornaaltro() {
	if (self.document.formia12.nomeBA.value == "") {
		navigator.notification.alert(
									 'inserire un Nome alla collezione',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_Aggiorna.asp",
		   contentType: "application/json",
		   data: {id:self.document.formia12.idBA.value,nome:self.document.formia12.nomeBA.value,modello:"Altro",email:localStorage.getItem("email"),Valore:self.document.formia12.valoreBA.value,Materiale:self.document.formia12.materialeBA.value,DescrizioneFronte:self.document.formia12.descrizioneFBA.value,DescrizioneRetro:self.document.formia12.descrizioneRBA.value,DescrizioneBordo:self.document.formia12.descrizioneBBA.value,Rarita:self.document.formia12.raritaBA.value,Posseduta:self.document.formia12.possedutaBA.value,Dimensione:self.document.formia12.dimensioneBA.value,StatoConservazione:self.document.formia12.statoconservazioneBA.value,Valore2:self.document.formia12.valore2BA.value,Anno:self.document.formia12.annoBA.value,Tiratura:self.document.formia12.tiraturaBA.value,Provenienza:self.document.formia12.provenienzaBA.value},
		   //
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.Token == 1024){
					navigator.notification.alert(
											   'Scheda Aggiornata',  // message
											   alertDismissed,         // callback
											   'OK',            // title
											   'Done'                  // buttonName
											   );
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Credenziali non corrette',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName@
											   );
				  }
				  });
		   
		   setTimeout (function(){
					   $(".spinner").hide();
					   }, 4000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
	
}

//------------------------------------------------------------------------


function listmonete() {
	//var scrivo = "<b>LISTA MONETE</b>"
	$("#risu").html("");
	var nomeold = "";
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_schede.asp",
		   contentType: "application/json",
		   data: {categoria:"Monete",email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.ID != 0){
					//scrivo = scrivo + "<a href='#page7' onclick='javascript:loadmodello(2,"+ item.ID +") rel='external'><font size='1' color='#000'>" + item.Valore + "-" + item.NomeMonete + "</font><font color='#488354' size='1'>" + item.Nome + "</font></a> <br> "
				  if (nomeold != item.Nome){
					$('#risu').append('<br><b>COLLEZIONE <font color="orange">'+ item.Nome +'</font></b>')
				  }
				  var cosa = 2
				  $('#risu').append('<br><a href="#page10" onclick="javascript:mieschede('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella111"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="20" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeMonete +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Valore +')</font></td></tr></table></a>');
				  
				   //<br><a href="#page7" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella11"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="20" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeMonete +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Valore +')</font></td></tr></table></a>
				  
				  //<br><a href="#page7" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide">-<font size="2" color="#000">' + item.NomeMonete + ',' + item.Valore + ' </font></a>
				  
				 //<br><a href="#page10" onclick="javascript:mieschede(2,'+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella12"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.Nome +'</h3></td><td align="center" width="15%"><font class="arancio">' + item.Modello + '</font></td></tr></table></a>
				  
				  }
				  else{
				  scrivo ="Nessuna scheda inserita";
				  /*navigator.notification.alert(
											   'Credenziali non corrette',  // message
											   alertDismissed,         // callback
											   item.Token,            // title
											   'Done'                  // buttonName@
											   );*/
				  }
				  nomeold = item.Nome;
				  });
		   

				$(".spinner").hide();
		   
		        $("#listamonete").html(scrivo);
		   
			    localStorage.setItem("controllo", 0);

		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}

function listquadri() {
	var scrivo = "<b>LISTA QUADRI</b> "
	$("#risu2").html("");
	var nomeold = "";
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_schede.asp",
		   contentType: "application/json",
		   data: {categoria:"Quadri",email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.ID != 0){
				  //scrivo = scrivo = scrivo + item.NomeQuadri + "<font color='#488354' size='1'>" + item.Nome + "</font> | "
				  if (nomeold != item.Nome){
					$('#risu2').append('<br><b>COLLEZIONE <font color="orange">'+ item.Nome +'</font></b>')
				  }
				  
				  //<br><a href="#page8" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide">&#8226;<font size="2" color="#000">' + item.NomeQuadri + ',' + item.Quotazione + ' </font></a>
				  
				  var cosa = 3
				  $('#risu2').append('<br><a href="#page8" onclick="javascript:mieschede('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella111"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="20" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeQuadri +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Quotazione +')</font></td></tr></table></a>');
				  
				  //<br><a href="#page10" onclick="javascript:mieschede('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella111"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="20" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeMonete +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Valore +')</font></td></tr></table></a>
				  
				  }
				  else{
				  scrivo ="Nessuna scheda inserita";
				  /*navigator.notification.alert(
											   'Credenziali non corrette',  // message
											   alertDismissed,         // callback
											   item.Token,            // title
											   'Done'                  // buttonName@
											   );*/
				  }
				  nomeold = item.Nome;
				  });
		   
		   
		   $(".spinner").hide();
		   
		   $("#listaquadri").html(scrivo);
		   
		   localStorage.setItem("controllo", 0);
		   
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}

function listorologi() {
	var scrivo = "<b>LISTA OROLOGI</b> "
	$("#risu3").html("");
	var nomeold = "";
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_schede.asp",
		   contentType: "application/json",
		   data: {categoria:"Orologi",email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.ID != 0){
				  //scrivo = scrivo = scrivo + item.NomeOrologi + "<font color='#488354' size='1'>" + item.Prezzo + "</font> | "
				  if (nomeold != item.Nome){
					$('#risu3').append('<br><b>COLLEZIONE <font color="orange">'+ item.Nome +'</font></b>')
				  }
				  
				  //<br><a href="#page6" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide">&#8226;<font size="2" color="#000">' + item.NomeOrologi + ',' + item.Prezzo + ' </font></a>
				  
				  var cosa = 1
				  $('#risu3').append('<br><a href="#page6" onclick="javascript:mieschede('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella111"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="20" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeOrologi +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Prezzo +')</font></td></tr></table></a>');
				  
				  //<br><a href="#page8" onclick="javascript:mieschede('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella111"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="20" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeQuadri +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Quotazione +')</font></td></tr></table></a>
				  
				  }
				  else{
				   scrivo ="Nessuna scheda inserita";
				   /*navigator.notification.alert(
											   'Credenziali non corrette',  // message
											   alertDismissed,         // callback
											   item.Token,            // title
											   'Done'                  // buttonName@
											   );*/
				  }
				  nomeold = item.Nome;
				  });
		   
		   
		   $(".spinner").hide();
		   
		   $("#listaorologi").html(scrivo);
		   
		   localStorage.setItem("controllo", 0);
		   
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}

function listaltro() {
	var scrivo = "<b>Nomi Collezionmi Inserite:</b> "
	$("#risua").html("");
	var nomeold = "";
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_schede.asp",
		   contentType: "application/json",
		   data: {categoria:"Altro",email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.ID != 0){
				  //scrivo = scrivo + "<a href='#page7' onclick='javascript:loadmodello(2,"+ item.ID +") rel='external'><font size='1' color='#000'>" + item.Valore + "-" + item.NomeMonete + "</font><font color='#488354' size='1'>" + item.Nome + "</font></a> <br> "
				  if (nomeold != item.Nome){
					$('#risua').append('<br><b>COLLEZIONE <font color="orange">'+ item.Nome +'</font></b>')
				  }
				  
				  //<br><a href="#page12" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide">-<font size="2" color="#000">' + item.NomeAltro + ',' + item.Valore + ' </font></a>
				  
				  var cosa = 4
				  $('#risua').append('<br><a href="#page12" onclick="javascript:mieschede('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella111"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="20" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeAltro +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Valore +')</font></td></tr></table></a>');
				  
				  //<br><a href="#page6" onclick="javascript:mieschede('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella111"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="20" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeOrologi +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Prezzo +')</font></td></tr></table></a>
				  
				  }
				  else{
				  scrivo ="Nessuna scheda inserita";
				  /*navigator.notification.alert(
				   'Credenziali non corrette',  // message
				   alertDismissed,         // callback
				   item.Token,            // title
				   'Done'                  // buttonName@
				   );*/
				  }
				  nomeold = item.Nome;
				  });
		   
		   
		   $(".spinner").hide();
		   
		   $("#listaaltro").html(scrivo);
		   
		   localStorage.setItem("controllo", 0);
		   
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}

function listaltroBB() {
	var scrivo = "<b>Nomi Collezionmi Inserite:</b> "
	$("#risub").html("");
	var nomeold = "";
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_schede.asp",
		   contentType: "application/json",
		   data: {categoria:"Altro",email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.ID != 0){
				  //scrivo = scrivo + "<a href='#page7' onclick='javascript:loadmodello(2,"+ item.ID +") rel='external'><font size='1' color='#000'>" + item.Valore + "-" + item.NomeMonete + "</font><font color='#488354' size='1'>" + item.Nome + "</font></a> <br> "
				  if (nomeold != item.Nome){
					$('#risub').append('<br><b>COLLEZIONE <font color="orange">'+ item.Nome +'</font></b>')
				  }

				  
				  var cosa = 4
				  $('#risub').append('<br><a href="#page12" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide">-<font size="2" color="#000">' + item.NomeAltro + ',' + item.Valore + ' </font></a>');
				  
				  }
				  else{
				  scrivo ="Nessuna scheda inserita";

				  }
				  nomeold = item.Nome;
				  });
		   
		   
		   $(".spinner").hide();
		   
		   $("#listaaltroBB").html(scrivo);
		   
		   localStorage.setItem("controllo", 0);
		   
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}

function listacollection2(ido) {
	var scrivo = "";
	var scrivo2 = "";
	
	$("#listacollezione").html("");
	//$("#listacollezione").html("<center><font size='3' color='#000'><b>Aggiungi Scheda</b></font><br><br></center><table align='center'>");
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/Check_Home.asp",
		   contentType: "application/json",
		   data: {email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  
				  if (item.ID != 0){
				  
				  //$('#listacollezione').append('<br><a href="javascript:vaimodello('+ item.ID +')"><table bgcolor="#fff" width="100%" class="tabella12"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/plusW.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.Nome +'</h3></td><td align="center" width="15%"><font class="arancio">' + item.Modello + '</font></td></tr></table></a>')
				  
				  if (ido==2){
				  //Monete
				  listaschede(2,item.ID)
				  }
				  else if (ido==1){
				  //Orologio
				  listaschede(1,item.ID)
				  }
				  else if (ido==3){
				  //Quadri
				  listaschede(3,item.ID)
				  }
				  else{
				  //altro
				  listaschede(4,item.ID)
				  }
				  
				  
				  }
				  else{
					$("#risultato2").html("Nessuna Collezione Presente");
				  }
				  });
		   
		   carica0()
		   
		   $(".spinner").hide();
		   
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}


function listacollection() {
	var scrivo = "";
	var scrivo2 = "";
	
	$("#listacollezione").html("<center><font size='3' color='#000'><b>Aggiungi Scheda</b></font><br><br></center><table align='center'>");
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/Check_Home.asp",
		   contentType: "application/json",
		   data: {email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				
				  
				if (item.ID != 0){
				  
				  //scrivo = scrivo + "<tr><td align='left'><a href='javascript:vaimodello("+ item.ID +")'><img src='img/plus.png' width='28px'></a></td><td valign='mid'><a href='javascript:vaimodello("+ item.ID +")'><font size='3' color='#488354'>" + item.Nome + "</font></a><font color'#000' size='1'> - "+ item.Modello +"</font></td></tr>"

				  if (item.Modello=="Monete"){
					$('#listacollezione').append('<br><a href="javascript:vaimodello('+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella12"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/plusW.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.Nome +'</h3></td><td align="center" width="15%"><font class="visioneN">&nbsp;'+ item.ContaMonete +'&nbsp;</font><font class="arancio">' + item.Modello + '</font></td></tr></table></a>')
				  
					listaschede(2,item.ID)
				  }
				  else if (item.Modello=="Orologi"){
					$('#listacollezione').append('<br><a href="javascript:vaimodello('+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella12"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/plusW.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.Nome +'</h3></td><td align="center" width="15%"><font class="visioneN">&nbsp;'+ item.ContaOrologi +'&nbsp;</font><font class="arancio">' + item.Modello + '</font></td></tr></table></a>')
				  
					listaschede(1,item.ID)
				  }
				  else if (item.Modello=="Quadri"){
					$('#listacollezione').append('<br><a href="javascript:vaimodello('+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella12"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/plusW.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.Nome +'</h3></td><td align="center" width="15%"><font class="visioneN">&nbsp;'+ item.ContaQuadri +'&nbsp;</font><font class="arancio">' + item.Modello + '</font></td></tr></table></a>')
				  
				    listaschede(3,item.ID)
				  }
				  else{
					$('#listacollezione').append('<br><a href="javascript:vaimodello('+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella12"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/plusW.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.Nome +'</h3></td><td align="center" width="15%"><font class="visioneN">&nbsp;'+ item.ContaAltro +'&nbsp;</font><font class="arancio">' + item.Modello + '</font></td></tr></table></a>')
				  
					listaschede(4,item.ID)
				  }
				  
				  
				}
				else{
				  $("#risultato2").html("Nessuna Collezione Presente");
					/*navigator.notification.alert(
					'Credenziali non corrette',  // message
					alertDismissed,             // callback
					item.Token,                // title
					'Done'                    // buttonName@
					);*/
				}
			});
		   
		   carica0()
		   
		   $(".spinner").hide();
		   
		   //$("#listacollezione").html(scrivo + "</table>");
		   
		   //$("#risultato2").html(scrivo2);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}

function listaschede(modello,idmodello){
	$("#risultato2").html("")
	
	if(modello==1){
		modello="Orologi"
	}
	else if(modello==2){
		modello="Monete"
	}
	else if(modello==3){
		modello="Quadri"
	}
	else{
		modello="Altro"
	}
	
	$("#risultato22").html("<center><font size='3' color='#000'><b>Lista delle schede inserite</b></font></center>");
	var cosa;
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/Read_Schede.asp",
		   contentType: "application/json",
		   data: {email:localStorage.getItem("email"),modello:modello,idmodello:idmodello},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				if(item.ID!=0){
				  
				  
				  if(item.Modello=="Orologi"){
				  cosa=1
				  $('#risultato2').append('<br><a href="#page6" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella11"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeCollezione +'</h3></td><td align="center" width="15%"><font class="arancio">' + item.Nome + '('+ item.Valore +')</font></td></tr></table></a>');
				  //$("#NomeCollez10").html("<font size='3'><b>" + item.Nome + "</b></font>"); <a href="#page6" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide"><img src="img/plus.png" width="28px"><font size="3" color="#000">- ' + item.NomeCollezione + ' </font><font size="1" color="orange">' + item.Nome + '('+ item.Valore +')</font></a>
				  }
				  else if(item.Modello=="Monete"){
				  cosa=2
				  $('#risultato2').append('<br><a href="#page7" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella11"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeCollezione +'</h3></td><td align="center" width="15%"><font class="arancio">' + item.Nome + '('+ item.Valore +')</font></td></tr></table></a>');
				  //$("#NomeCollez10").html("<font size='3'><b>" + item.Nome + "</b></font>");
				  }
				  else if(item.Modello=="Quadri"){
				  cosa=3
				  $('#risultato2').append('<br><a href="#page8" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella11"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="45%"><h3 class="visioneN">&nbsp;'+ item.NomeCollezione +'</h3></td><td align="center" width="25%"><font class="arancio">' + item.Nome + '('+ item.Valore +')</font></td></tr></table></a>');
				  //$("#NomeCollez10").html("<font size='3'><b>" + item.Nome + "</b></font>");
				  }
				  else{
				  cosa=4
				  $('#risultato2').append('<br><a href="#page12" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella11"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeCollezione +'</h3></td><td align="center" width="15%"><font class="arancio">' + item.Nome + '('+ item.Valore +')</font></td></tr></table></a>');
				  //$("#NomeCollez10").html("<font size='3'><b>" + item.Nome + "</b></font>");
				  }
				  
				  
				  }
				else{
				   /*navigator.notification.alert(
											   'Recupero fallito, riprova in seguito',  // message
											   alertDismissed,         // callback
											   'Errore Recupero',      // title
											   'OK'                  // buttonName
											   );*/
				}
				  
				  });
		   
		   
		   //carica10()
		   
		   $(".spinner").hide();
		   
		   //$('#movie-list2').listview('refresh');
		   
		   localStorage.setItem("controllo", 0);
		   
		   e.stopImmediatePropagation();
		   e.preventDefault();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName@
										);
		   
		   },
		   dataType:"jsonp"});
	
}


function salva() {
	var imgvolantino = "";
	var imgvolantino2 = "";
	var imgvolantino3 = "";
	var imgvolantino4 = "";
	var imgvolantino5 = "";
	var imgvolantino6 = "";
	//$("#opzioni").hide();
	
	if (self.document.formia.ora_fine.value == "") {
		navigator.notification.alert(
									 'inserire un orario di fine lavoro',  // message
									 alertDismissed,         // callback
									 'Orario',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	if (self.document.formia.NomeAzienda.value == "") {
		navigator.notification.alert(
									 'inserire un Nome Azienda',  // message
									 alertDismissed,         // callback
									 'Nome Azienda',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	if (self.document.formia.TelAzienda.value == "") {
		navigator.notification.alert(
									 'inserire un Telefono',  // message
									 alertDismissed,         // callback
									 'Tel. Azienda',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	if (self.document.formia.Settore.value == "") {
		navigator.notification.alert(
									 'inserire un Settore Azienda',  // message
									 alertDismissed,         // callback
									 'Settore',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	

	localStorage.setItem("servizio", document.getElementById("id").value);
	
	localStorage.setItem("data", document.getElementById("data").value);
	localStorage.setItem("inizio", document.getElementById("ora").value);
	localStorage.setItem("fine", document.getElementById("ora_fine").value);
	
	/*
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"https://app.prolution.it/api/volantinaggio/lista",
		   data: {operatore:localStorage.getItem("idoperatore"),data:"09/11/2015"},
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){
		   
		   if (result.result==1){
			//OK
			alert(result.result);
		   

		   }
		   else{
		    //alert("Non sei autorizzato");
		    //window.location.href = "Froala/basic.html";
		   
		   }
		   
		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'possible network error',  // message
										alertDismissed,         // callback
										'Error',            // title
										'OK'                  // buttonName
										);
		   
		   
		   },
		   dataType:"json"});
	 */
	
	
	/*
	$(".spinner").show();
	$.ajax({
		   type:"POST",
		   url:"https://app.prolution.it/api/volantinaggio/dettagli",
		   data: {servizio:localStorage.getItem("servizio"),operatore:localStorage.getItem("idoperatore"), data:localStorage.getItem("data"), inizio:localStorage.getItem("inizio"), fine:localStorage.getItem("fine"),volantino:""},
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){
		   //alert(result.result);
		   
		   if (result.result==1){
			alert(result.result);

		   
		   }
		   else{
			alert(result.result);
			//window.location.href = "Froala/basic.html";
		   
		   }
		   
		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'possible network error',  // message
										alertDismissed,         // callback
										'Error',            // title
										'OK'                  // buttonName
										);
		   
		   
		   },
		   dataType:"json"});
	
	*/
	
	if (localStorage.getItem("imgvolantino") === null || localStorage.getItem("imgvolantino")=="null" || typeof(localStorage.getItem("imgvolantino")) == 'undefined' || localStorage.getItem("imgvolantino")==0 || localStorage.getItem("imgvolantino")=="") {
		
		navigator.notification.alert(
									 'inserire una foto del Volantino',  // message
									 alertDismissed,         // callback
									 'Volantino',            // title
									 'OK'                  // buttonName
									 );
		return;

		imgvolantino = "";
		
	}
	else
	{
	
		imgvolantino = localStorage.getItem("imgvolantino");
		imgvolantino2 = localStorage.getItem("imgvolantino2");
		imgvolantino3 = localStorage.getItem("imgvolantino3");
		imgvolantino4 = localStorage.getItem("imgvolantino4");
		imgvolantino5 = localStorage.getItem("imgvolantino5");
		imgvolantino6 = localStorage.getItem("imgvolantino6");
		
		
	}

	
	$(".spinner").show();
	$.ajax({
		   type: "POST",
		   url: "https://app.prolution.it/api/volantinaggio/dettagli",
		   data: {servizio:localStorage.getItem("servizio"),operatore:localStorage.getItem("idoperatore"), data:localStorage.getItem("data"), inizio:localStorage.getItem("inizio"), fine:localStorage.getItem("fine"),volantino:imgvolantino,volantino2:imgvolantino2,volantino3:imgvolantino3,volantino4:imgvolantino4,volantino5:imgvolantino5,volantino6:imgvolantino6,nomeazienda:self.document.formia.NomeAzienda.value,telefonoazienda:self.document.formia.TelAzienda.value,settoreazienda:self.document.formia.Settore.value},
		   cache: false,
		   contentType: "application/x-www-form-urlencoded",
		   success: function (result) {
		    //alert("Rapporto: " + result.idrapporto);
			localStorage.setItem("rapporto", result.idrapporto);
		    //alert(result.result);
		   
			setTimeout (function(){
				salvatutto()
			}, 500);
	 
		   
		   },
		   error: function(){
		   $("#opzioni").show();
		   
		   navigator.notification.alert(
									 'Errore Imprevisto, contatta il fornitore',  // message
									 alertDismissed,         // callback
									 'Errore',            // title
									 'OK'                  // buttonName
									 );
	 
		   }
		   
		   });
	


	/*
	db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Ordine', [], function (tx, results) {
					 var len = results.rows.length, i;
					 
					 for (i = 0; i < len; i++){

					  
					  $.ajax({
					  type: "POST",
					  url: "http://www.gtechplay.com/coiros/www/Check_TakePhoto.asp",
					  data: { nome:results.rows.item(i).Foto, img_id:1, name:localStorage.getItem("email") },
					  cache: false,
					  contentType: "application/x-www-form-urlencoded",
					  success: function (result) {
					  $.each(result, function(i,item){
					  
					  //initscroll()
					  $("#ufoto").show()
					  
					  });
					  
					  
					  },
					  error: function(){
					  
					  navigator.notification.alert(
					  'NOOO',  // message
					  alertDismissed,         // callback
					  'Connessione Internet',            // title
					  'OK'                  // buttonName
					  );
					  
					  }
					  
					  });
					 
					 
					 }
					 
					 
		}, null);
				   

	});
	

	setTimeout (function(){
		dlt()
	}, 2000);
	*/
	
}

function lista() {
	
	var test="";
	
	db.transaction(function (tx) {
	tx.executeSql('SELECT * FROM Ordine', [], function (tx, results) {
		var len = results.rows.length, i;
								 
			for (i = 0; i < len; i++){

				  test = test + "<br>Foto: <br>" +  results.rows.item(0).Foto + "<br>Foto: <br>" +  results.rows.item(1).Foto
				  
			}
				  
				$("#contenuto").html("<div width='320px'><br>Foto: <br>" +  results.rows.item(0).Foto + "<br>Foto: <br>" +  results.rows.item(1).Foto +"<div>");
				  
		});
								 

		});
	
	initscroll()
	

}


function salvatutto() {
	var times;
	 db.transaction(function (tx) {
	 tx.executeSql('SELECT * FROM Ordine', [], function (tx, results) {
	 var len = results.rows.length, i;
	 times = parseInt(len)*2000;
	 
	 for (i = 0; i < len; i++){
				   
				   //Pausa di 2 secondi tra un inserimento ed un altro.
				   (function(i){
					
					setTimeout (function(){
									  
									  $.ajax({
											 type: "POST",
											 url: "https://app.prolution.it/api/volantinaggio/civico",
											 data: { rapporto:localStorage.getItem("rapporto"), data:results.rows.item(i).Data, ora:results.rows.item(i).Ora, via:results.rows.item(i).Via, civico:results.rows.item(i).Civico, citta:localStorage.getItem("Citta"), volantini:results.rows.item(i).Volantini, longitudine:results.rows.item(i).Longitudine, latitudine:results.rows.item(i).Latitudine, foto:results.rows.item(i).Foto },
											 //url: "http://www.gtechplay.com/prolution/Check_CoordinateV2.asp",
											 //data: {Data:results.rows.item(i).Data, Ora:results.rows.item(i).Ora, Civico:results.rows.item(i).Civico, Nome:results.rows.item(i).Foto},
											 cache: false,
											 contentType: "application/x-www-form-urlencoded",
											 success: function (result) {
											 //alert(result.idrapportocivico)
											 
											 },
											 error: function(){
											 $("#opzioni").show();
											 
											 navigator.notification.alert(
																		  'Errore imprevisto nel caricamento dei dati',  // message
																		  alertDismissed,         // callback
																		  'Connessione Internet',            // title
																		  'OK'                  // buttonName
																		  );
											 
											 $(".spinner").hide();
											 
											 }
											 
											 });
					}, i * 2000);
					
					}(i));
				   
				   /*$.ajax({
						  type: "POST",
						  url: "http://www.gtechplay.com/prolution/Check_Coordinate.asp",
						  data: {Data:results.rows.item(i).Data, Ora:results.rows.item(i).Ora, Civico:results.rows.item(i).Civico, Nome:results.rows.item(i).Foto},
						  cache: false,
						  contentType: "application/x-www-form-urlencoded",
						  success: function (result) {
						  $.each(result, function(i,item){
								 //$("#codice").html(item.Token);
								 });
						  
						  },
						  error: function(){
						  
						  navigator.notification.alert(
													   'NOOO',  // message
													   alertDismissed,         // callback
													   'Connessione Internet',            // title
													   'OK'                  // buttonName
													   );
						  
						  }
						  
						  });*/

	 }
	
	 //aggiornatutto()
	setTimeout (function(){
				$(".spinner").hide();
				
				$("#btnsalva").hide();
				$("#btncancella").show();
				
				$("#opzioni").show();
	}, times);
				   
				   
	 }, null);
	 
	 });

}

function aggiornatutto() {
	//longitudine:parseFloat(11.1111), latitudine:parseFloat(41.343434),
	
	db.transaction(function (tx) {
				   tx.executeSql('SELECT * FROM Ordine', [], function (tx, results) {
								 var len = results.rows.length, i;
								 
								 for (i = 0; i < len; i++){
								 
								 var nuovadata2 = results.rows.item(i).Data.replace("/","&#47;")
								 nuovadata2 = nuovadata2.replace("/","&#47;")
								 
								 $.ajax({
										type:"GET",
										url:"http://www.gtechplay.com/prolution/Leggi_Coordinate.asp",
										contentType: "application/json",
										data: {Data:nuovadata2, Ora:results.rows.item(i).Ora, Civico:results.rows.item(i).Civico},
										timeout: 7000,
										jsonp: 'callback',
										crossDomain: true,
										success:function(result){
										
										$.each(result, function(i,item){
											   
											   if (item.ID == 1024){
												alert("insert" + item.Longitudine + " -- " + item.Latitudine)
											   
											   /*$.ajax({
													  
													  type:"GET",
													  
													  url:"https://app.prolution.it/api/volantinaggio/coordinate",
													  
													  data: {rapportocivico:item.IdRapporto,longitudine:item.Longitudine,latitudine:item.Latitudine},
													  
													  contentType: "application/json; charset=utf-8",
													  
													  json: 'callback',
													  
													  timeout: 7000,
													  
													  crossDomain: true,
													  
													  success:function(result){
													  
													  
													  
													  
													  
													  },
													  
													  error: function(){
													  
													  
													  
													  navigator.notification.alert(
																				   
																				   'possible network error',  // message
																				   
																				   alertDismissed,         // callback
																				   
																				   'Error',            // title
																				   
																				   'OK'                  // buttonName
																				   
																				   );
													  
													  
													  
													  
													  
													  },
													  
													  dataType:"json"});*/

											   
											   }
											   else
											   {
												//Niente
											   }
										});
										
										$(".spinner").hide();
										
										},
										error: function(){
										$(".spinner").hide();
										
										
										},
									dataType:"jsonp"});
								 
								 
									/*$.ajax({
										type: "POST",
										url: "https://app.prolution.it/api/volantinaggio/civico",
										data: { rapporto:localStorage.getItem("rapporto"), data:results.rows.item(i).Data, ora:results.rows.item(i).Ora, via:results.rows.item(i).Via, civico:results.rows.item(i).Civico, citta:"Roma", longitudine:parseFloat(11.1111), latitudine:parseFloat(41.343434), volantini:results.rows.item(i).Volantini, foto:results.rows.item(i).Foto },
										cache: false,
										contentType: "application/x-www-form-urlencoded",
										success: function (result) {
										
										},
										error: function(){
										
										navigator.notification.alert(
																	 'Errore imprevisto nel caricamento dei dati',  // message
																	 alertDismissed,         // callback
																	 'Connessione Internet',            // title
																	 'OK'                  // buttonName
																	 );
										
										$(".spinner").hide();
										
										}
										
										});*/
								 
								 }
								 
								 $(".spinner").hide();
								 
								 $("#btnsalva").hide();
								 $("#btncancella").show();
								 
								 }, null);
				   });
}

function menu(){
	
	$("#movie-list").html("");
	var cosa;

	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/check_home.asp",
		   contentType: "application/json",
		   data: {email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				if(item.ID!=0){
				  $("#risultato").html("");
				  
				  if(item.Modello=="Orologi"){
					cosa=1
				  
				    $('#movie-list').append('<br><a href="#page10" onclick="javascript:mieschede('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella12"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.Nome +'</h3></td><td align="center" width="15%"><font class="arancio">' + item.Modello + '</font></td></tr></table></a>');
				  
					
				  }
				  else if(item.Modello=="Monete"){
				    cosa=2
					$('#movie-list').append('<br><a href="#page10" onclick="javascript:mieschede('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella12"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.Nome +'</h3></td><td align="center" width="15%"><font class="arancio">' + item.Modello + '</font></td></tr></table></a>');
				  }
				  else if(item.Modello=="Quadri"){
					cosa=3
					$('#movie-list').append('<br><a href="#page10" onclick="javascript:mieschede('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella12"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.Nome +'</h3></td><td align="center" width="15%"><font class="arancio">' + item.Modello + '</font></td></tr></table></a>');
				  }
				  else{
				  cosa=4
				  $('#movie-list').append('<br><a href="#page10" onclick="javascript:mieschede('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella12"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.Nome +'</h3></td><td align="center" width="15%"><font class="arancio">' + item.Modello + '</font></td></tr></table></a>');
				  }
				  
					
				  }
				  else{
					$("#risultato").html("Nessuna Collezione Creata");
				  
					/*navigator.notification.alert(
								'Recupero fallito, riprova in seguito',  // message
								alertDismissed,         // callback
								'Errore Recupero',      // title
								'OK'                  // buttonName
						);*/
				  }
				  
			});
		   
		   
		   carica5()
		   
		   $(".spinner").hide();
		   
		   $('#movie-list').listview('refresh');
		   
		   localStorage.setItem("controllo", 0);
		   
		   e.stopImmediatePropagation();
		   e.preventDefault();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName@
										);
		   
		   },
		   dataType:"jsonp"});
	
}

//Manca il menu in nero nella lista

function mieschede(modello,idmodello){
	
	if(modello==1){
		modello="Orologi"
	}
	else if(modello==2){
		modello="Monete"
	}
	else if(modello==3){
		modello="Quadri"
	}
	else{
		modello="Altro"
	}
	
	//$("#movie-list2").html("<center><font size='3' color='#000'><b>Lista delle schede inserite</b></font></center>");
	$("#movie-list2").html("");
	var cosa;
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/Read_Schede.asp",
		   contentType: "application/json",
		   data: {email:localStorage.getItem("email"),modello:modello,idmodello:idmodello},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  if(item.ID!=0){
				  
				  if(item.Modello=="Orologi"){
				  //<br><a href="#page6" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella11"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="55%"><h3 class="visioneN">&nbsp;'+ item.NomeCollezione +'</h3></td><td align="center" width="15%"><font class="arancio">' + item.Nome + '('+ item.Valore +')</font></td></tr></table></a>
				  
				  //<li><a href="#page6" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide">' + item.NomeCollezione + ' <font size="1" color="orange">' + item.Modello + '</font></a></li>
				  
				  /*$.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto1 +".png")
				  .done(function() {
						foto = "http://gtechplay.com/public/mycollection/"+ item.NomeFoto1 +".png";
						
					}).fail(function() {
						foto = "img/vol1.png";
				   })*/
				  
				  cosa=1
				  $('#movie-list2').append('<br><a href="#page6" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella11"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="40%"><h3 class="visioneN">&nbsp;'+ item.NomeCollezione +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Valore +')</font></td><td align="center" width="15%"><img src="http://gtechplay.com/public/mycollection/'+ item.NomeFoto1 +'.png" width="20" class="circolare22"></td></tr></table></a>');
				  
				  $("#NomeCollez10").html("<font size='4'><b>" + item.Nome + "</b></font><br><a href='javascript:eliminacollezione("+ cosa +","+ idmodello +")' rel='external'><img src='img/minus.png' width='12px'>&nbsp;<font size='1' color='#9f1e24'>Elimina</font></a>");
				  }
				  else if(item.Modello=="Monete"){
				  cosa=2
				  $('#movie-list2').append('<br><a href="#page7" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella11"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="40%"><h3 class="visioneN">&nbsp;'+ item.NomeCollezione +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Valore +')</font></td><td align="center" width="15%"><img src="http://gtechplay.com/public/mycollection/'+ item.NomeFoto1 +'.png" width="20" class="circolare22"></td></tr></table></a>');
				  
				  $("#NomeCollez10").html("<font size='4'><b>" + item.Nome + "</b></font><br><a href='javascript:eliminacollezione("+ cosa +","+ idmodello +")' rel='external'><img src='img/minus.png' width='12px'>&nbsp;<font size='1' color='#9f1e24'>Elimina</font></a>");
				  }
				   else if(item.Modello=="Quadri"){
				  cosa=3
				  $('#movie-list2').append('<br><a href="#page8" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella11"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="40%"><h3 class="visioneN">&nbsp;'+ item.NomeCollezione +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Valore +')</font></td><td align="center" width="15%"><img src="http://gtechplay.com/public/mycollection/'+ item.NomeFoto1 +'.png" width="20" class="circolare22"></td></tr></table></a>');
				  
				  $("#NomeCollez10").html("<font size='4'><b>" + item.Nome + "</b></font><br><a href='javascript:eliminacollezione("+ cosa +","+ idmodello +")' rel='external'><img src='img/minus.png' width='12px'>&nbsp;<font size='1' color='#9f1e24'>Elimina</font></a>");
				  }
				  else{
				  cosa=4
				  $('#movie-list2').append('<br><a href="#page12" onclick="javascript:loadmodello('+ cosa +','+ item.ID +')" data-transition="slide"><table bgcolor="#fff" width="100%" class="tabella11"><tr><td width="30%">&nbsp;&nbsp;&nbsp;<img src="img/Best.png" height="30" rel="external"></td><td width="40%"><h3 class="visioneN">&nbsp;'+ item.NomeCollezione +'</h3></td><td align="center" width="15%"><font class="arancio">('+ item.Valore +')</font></td><td align="center" width="15%"><img src="http://gtechplay.com/public/mycollection/'+ item.NomeFoto1 +'.png" width="20" class="circolare22"></td></tr></table></a>');
				  
				  $("#NomeCollez10").html("<font size='4'><b>" + item.Nome + "</b></font><br><a href='javascript:eliminacollezione("+ cosa +","+ idmodello +")' rel='external'><img src='img/minus.png' width='12px'>&nbsp;<font size='1' color='#9f1e24'>Elimina</font></a>");
				  }
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Recupero fallito, riprova in seguito',  // message
											   alertDismissed,         // callback
											   'Errore Recupero',      // title
											   'OK'                  // buttonName
											   );
				  }
				  
				  });
		   
		   
		   carica10()
		   
		   $(".spinner").hide();
		   
		   //$('#movie-list2').listview('refresh');
		   
		   localStorage.setItem("controllo", 0);
		   
		   e.stopImmediatePropagation();
		   e.preventDefault();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName@
										);
		   
		   },
		   dataType:"jsonp"});
	
}

function eliminacollezione(modello,idmodello){
localStorage.setItem("modelloCanc", modello);
localStorage.setItem("idmodelloCanc", idmodello);


navigator.notification.confirm(
							   'You want delete all colleciton?',  // message
							   eliminacollezione2,              // callback to invoke with index of button pressed
							   'Confirm',            // title
							   'Accept,No'      // buttonLabels
							   );
}

function eliminacollezione2(){
var modello = localStorage.getItem("modelloCanc")
var idmodello = localStorage.getItem("idmodelloCanc")
	
	if(modello==1){
		modello="Orologi"
	}
	else if(modello==2){
		modello="Monete"
	}
	else if(modello==3){
		modello="Quadri"
	}
	else{
		modello="Altro"
	}
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.gtechplay.com/mycollection/www/delCollezione.asp",
		   contentType: "application/json",
		   data: {email:localStorage.getItem("email"),ID:idmodello,Modello:modello},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'All Collection Deleted',  // message
										alertDismissed,         // callback
										'Delete',            // title
										'Done'                  // buttonName@
										);
		   
		   window.location.href = "index.html";
		   
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});

}


function logout(){
	localStorage.setItem("loginvera", "NO")
	localStorage.setItem("Nome", "");
	localStorage.setItem("Cognome", "");
	
	localStorage.setItem("email", "");
	localStorage.setItem("idoperatore", "");
	
	
	window.location.href = "index.html";
}

//PRENDI COORDINATE GPS
function prendicoordinate(){
	
var geocoder = new google.maps.Geocoder();
	geocoder.geocode({
	"address": "Via Emilio Malerba,16A, 00125, Roma"
	}, function(results) {
	
	alert(results[0].geometry.location); //LatLng
});
}

//CARICA SCHEDE ------------------------------

function loadmodello(modello,id){
	localStorage.setItem("swippe", "0")

	if (parseInt(localStorage.getItem("controllo"))==0){
		
	localStorage.setItem("controllo", 1);
		//alert("modello" + modello)
		//alert("id" + id)
	
	if(parseInt(modello)==1){
	  $("#PageOrologi").html("<h2>Orologi</h2>");
		
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://www.gtechplay.com/mycollection/www/check_scheda.asp",
			   contentType: "application/json",
			   data: {email:localStorage.getItem("email"),categoria:"Orologi",id:id},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   
			   $.each(result, function(i,item){
					  $("#PageOrologi").html("<h2>" + item.Nome + "</h2>");
					  document.getElementById("nomeC").value = item.NomeOrologi
					  document.getElementById("idC").value = item.ID
					  document.getElementById("marcaC").value = item.Marca
					  document.getElementById("meccanismoC").value = item.Meccanismo
					  document.getElementById("materialecassaC").value = item.MaterialeCassa
					  document.getElementById("materialevetroC").value = item.MaterialeVetro
					  document.getElementById("materialecinturinoC").value = item.MaterialeCinturino
					  document.getElementById("prezzoC").value = item.Prezzo
					  document.getElementById("tiraturaqpC").value = item.TiraturaQP

					  
					  $.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto1 +".png")
					  .done(function() {
							$("#ImageVol4").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto1 +".png");
							
					  }).fail(function() {
							  $("#ImageVol4").attr("src", "img/vol1.png");
							  })
					  
					  $("#deleteOrologio").attr("href", "javascript:confirmDeleteOrologi("+ item.ID +")");
					  
					  setTimeout (function(){
								  $.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto2 +".png")
								  .done(function() {
										$("#ImageVol5").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto2 +".png");
										
										}).fail(function() {
												$("#ImageVol5").attr("src", "img/vol1.png");
												})
								  }, 500);
					  
					  setTimeout (function(){
								  $.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto3 +".png")
								  .done(function() {
										$("#ImageVol6").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto3 +".png");
										
										}).fail(function() {
												$("#ImageVol6").attr("src", "img/vol1.png");
												})
								  }, 1000);

				});
			   
			   carica6()
			   
			   $(".spinner").hide();
			   
			   e.stopImmediatePropagation();
			   e.preventDefault();
			   
			   
			   },
			   error: function(){
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Possibile errore di rete, riprova tra qualche minuto',  // message
											alertDismissed,         // callback
											'Attenzione',            // title
											'Done'                  // buttonName@
											);
			   
			   },
			   dataType:"jsonp"});
		
	}
	else if(parseInt(modello)==2){
			localStorage.setItem("swippe", "0")
		
			/*$("div").on("swipeleft",function(){
				if (localStorage.getItem("swippe")!="1"){
				  id = id+1
				  localStorage.setItem("swippe", "1")
				  //$.mobile.changePage( "#page7", { transition: "slide", changeHash: false });
				  loadmodello(modello,id)
						
				}
			 
			});
			 
			 next record:
			 
			 SELECT * FROM foo WHERE id > 4 ORDER BY id LIMIT 1;
			 previous record:
			 
			 SELECT * FROM foo WHERE id < 4 ORDER BY id DESC LIMIT 1;
			 
			 */
		
		
	  $("#PageMonete").html("<h2>Monete</h2>");
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://www.gtechplay.com/mycollection/www/check_scheda.asp",
			   contentType: "application/json",
			   data: {email:localStorage.getItem("email"),categoria:"Monete",id:id},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $.each(result, function(i,item){
				 if(item.ID != 0){
					  $("#PageMonete").html("<h2>" + item.Nome + "</h2>");
					  document.getElementById("nomeB").value = item.NomeMonete
					  document.getElementById("idB").value = item.ID
					  document.getElementById("valoreB").value = item.Valore
					  document.getElementById("materialeB").value = item.Materiale
					  document.getElementById("descrizioneFB").value = item.DescrizioneFronte
					  document.getElementById("descrizioneRB").value = item.DescrizioneRetro
					  document.getElementById("descrizioneBB").value = item.DescrizioneBordo
					  document.getElementById("raritaB").value = item.Rarita
					  document.getElementById("possedutaB").value = item.posseduta
					  document.getElementById("dimensioneB").value = item.Dimensione
					  //document.getElementById("pesoB").value = item.Peso
					  document.getElementById("statoconservazioneB").value = item.StatoConservazione
					  document.getElementById("valore2B").value = item.Valore2
					  document.getElementById("annoB").value = item.Anno
					  document.getElementById("tiraturaB").value = item.Tiratura
					  
					  $.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto1 +".png")
					  .done(function() {
						$("#ImageVol").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto1 +".png");
							
					  }).fail(function() {
						$("#ImageVol").attr("src", "img/vol1.png");
					  })
					  
					  $("#deleteMonete").attr("href", "javascript:confirmDeleteMonete("+ item.ID +")");
					  
					  setTimeout (function(){
						$.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto2 +".png")
							.done(function() {
							$("#ImageVol2").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto2 +".png");
										
						}).fail(function() {
							$("#ImageVol2").attr("src", "img/vol1.png");
						})
					  }, 500);
					  
					  setTimeout (function(){
							$.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto3 +".png")
								.done(function() {
							    $("#ImageVol3").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto3 +".png");
										
							}).fail(function() {
								$("#ImageVol3").attr("src", "img/vol1.png");
							})
					  }, 1000);
					}
					else
					{
					  alert()
					}

				});
			   
			   carica7()
			   
			   $(".spinner").hide();
			   
			   
			   },
			   error: function(){
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Possibile errore di rete, riprova tra qualche minuto',  // message
											alertDismissed,         // callback
											'Attenzione',            // title
											'Done'                  // buttonName@
											);
			   
			   },
			   dataType:"jsonp"});

		
	}
	else if(parseInt(modello)==3){
		$("#PageQuadri").html("<h2>Quadri</h2>");
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://www.gtechplay.com/mycollection/www/check_scheda.asp",
			   contentType: "application/json",
			   data: {email:localStorage.getItem("email"),categoria:"Quadri",id:id},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   
			   $.each(result, function(i,item){
					  $("#PageQuadri").html("<h2>" + item.Nome + "</h2>");
					  document.getElementById("nomeD").value = item.NomeQuadri
					  document.getElementById("titoloD").value = item.Titolo
					  document.getElementById("quadroD").value = item.Quadro
					  document.getElementById("idD").value = item.ID
					  document.getElementById("quadroD").value = item.Quadro
					  document.getElementById("autoreD").value = item.Autore
					  document.getElementById("quotazioneD").value = item.Quotazione
					  document.getElementById("provenienzaD").value = item.Provenienza
					  document.getElementById("iscrizioneD").value = item.Iscrizione
					  document.getElementById("firmeD").value = item.Firme
					  document.getElementById("espostoD").value = item.Esposto
					  document.getElementById("doveD").value = item.Dove
					  document.getElementById("linkautoreD").value = item.LinkAutore
					  document.getElementById("linkpubblicazineD").value = item.LinkPubblicazione
					  document.getElementById("dimensioneD").value = item.Dimensioni
					  
					  $.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto1 +".png")
					  .done(function() {
							$("#ImageVol7").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto1 +".png");
							
					  }).fail(function() {
							$("#ImageVol7").attr("src", "img/vol1.png");
						})
					  
					  $("#deleteQuadri").attr("href", "javascript:confirmDeleteQuadri("+ item.ID +")");
					  
					  setTimeout (function(){
								  $.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto2 +".png")
								  .done(function() {
										$("#ImageVol8").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto2 +".png");
										
										}).fail(function() {
												$("#ImageVol8").attr("src", "img/vol1.png");
										})
								  }, 500);
					  
					  setTimeout (function(){
								  $.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto3 +".png")
								  .done(function() {
										$("#ImageVol9").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto3 +".png");
										
										}).fail(function() {
										$("#ImageVol9").attr("src", "img/vol1.png");
										})
								  }, 1000);
					  
					  
					  });
			   
			   carica8()
			   
			   $(".spinner").hide();
			   
			   
			   },
			   error: function(){
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Possibile errore di rete, riprova tra qualche minuto',  // message
											alertDismissed,         // callback
											'Attenzione',            // title
											'Done'                  // buttonName@
											);
			   
			   },
			   dataType:"jsonp"});
		
	}
	else{
		$("#PageAltro").html("<h2>Personali</h2>");
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://www.gtechplay.com/mycollection/www/check_scheda.asp",
			   contentType: "application/json",
			   data: {email:localStorage.getItem("email"),categoria:"Altro",id:id},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   
			   $.each(result, function(i,item){
					  $("#PageAltro").html("<h2>" + item.Nome + "</h2>");
					  document.getElementById("nomeBA").value = item.NomeAltro
					  document.getElementById("idBA").value = item.ID
					  
					  if(item.Valore != ""){
						document.getElementById("valoreBA").value = item.Valore
					  }
					  else
					  {
						$("#valoreBA").hide();
						$("#valA").hide();
					  }
					  if(item.Materiale != ""){
						document.getElementById("materialeBA").value = item.Materiale
					  }
					  else
					  {
						$("#materialeBA").hide();
						$("#matA").hide();
					  }
					  if(item.DescrizioneFronte != ""){
						document.getElementById("descrizioneFBA").value = item.DescrizioneFronte
					  }
					  else
					  {
						$("#descrizioneFBA").hide();
						$("#DescrfroA").hide();
					  }
					  if(item.DescrizioneRetro != ""){
						document.getElementById("descrizioneRBA").value = item.DescrizioneRetro
					  }
					  else
					  {
						$("#descrizioneRBA").hide();
					    $("#descrRetA").hide();
					  }
					  if(item.DescrizioneBordo != ""){
						document.getElementById("descrizioneBBA").value = item.DescrizioneBordo
					  }
					  else
					  {
						$("#descrizioneBBA").hide();
						$("#DescrBorA").hide();
					  }
					  if(item.Rarita != ""){
						document.getElementById("raritaBA").value = item.Rarita
					  }
					  else
					  {
						$("#raritaBA").hide();
						$("#RarA").hide();
					  }

					  if(item.Posseduta != ""){
						document.getElementById("possedutaBA").value = item.Posseduta
					  }
					  else
					  {
						$("#possedutaBA").hide();
					  }
					  if(item.Dimensione != ""){
						document.getElementById("dimensioneBA").value = item.Dimensione
					  }
					  else
					  {
						$("#dimensioneBA").hide();
						$("#DimA").hide();
					  }
					  if(item.Anno != ""){
						document.getElementById("annoBA").value = item.Anno
					  }
					  else
					  {
						$("#annoBA").hide();
						$("#AnnA").hide();
					  }
					  if(item.Tiratura != ""){
						document.getElementById("tiraturaBA").value = item.Tiratura
					  }
					  else
					  {
						$("#tiraturaBA").hide();
						$("#TirA").hide();
					  }
					  if(item.Provenienza != ""){
					  document.getElementById("provenienzaBA").value = item.Provenienza
					  }
					  else
					  {
					  $("#provenienzaBA").hide();
					  $("#ProvA").hide();
					  }
					  
					  $.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto1 +".png")
					  .done(function() {
						$("#ImageVol10").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto1 +".png");
							
					  }).fail(function() {
						$("#ImageVol10").attr("src", "img/vol1.png");
					  })
					  
					  $("#deleteAltro").attr("href", "javascript:confirmDeleteAltro("+ item.ID +")");
					  
					  setTimeout (function(){
						$.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto2 +".png")
						.done(function() {
							$("#ImageVol11").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto2 +".png");
										
							}).fail(function() {
								$("#ImageVol11").attr("src", "img/vol1.png");
							})
						}, 500);
					  
					  setTimeout (function(){
							$.get("http://gtechplay.com/public/mycollection/"+ item.NomeFoto3 +".png")
								.done(function() {
							$("#ImageVol12").attr("src", "http://gtechplay.com/public/mycollection/"+ item.NomeFoto3 +".png");
										
								}).fail(function() {
									$("#ImageVol12").attr("src", "img/vol1.png");
								})
							}, 1000);
					  });
			   
			   carica12()
			   
			   $(".spinner").hide();
			   
			   
			   },
			   error: function(){
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Possibile errore di rete, riprova tra qualche minuto',  // message
											alertDismissed,         // callback
											'Attenzione',            // title
											'Done'                  // buttonName@
											);
			   
			   },
			   dataType:"jsonp"});

	}
		
	}

	//carica6()
}



//---------------------------------------------

function imgError(image) {
	image.onerror = "";
	image.src = "img/vol1.png";
	return true;
}

function confirmDeleteMonete(id) {
	localStorage.setItem("idScheda", id);
	
	navigator.notification.confirm(
								   'You want delete your colleciton?',  // message
								    onConfirm,              // callback to invoke with index of button pressed
								   'Confirm',            // title
								   'Yes,No'      // buttonLabels
								   );
	
	
}

function onConfirm(button) {
	
	if (button==1){
		
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://www.gtechplay.com/mycollection/www/delMonete.asp",
			   contentType: "application/json",
			   data: {email:localStorage.getItem("email"),id:localStorage.getItem("idScheda")},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Collection Deleted',  // message
											alertDismissed,         // callback
											'Delete',            // title
											'Done'                  // buttonName@
											);
			   
			   window.location.href = "index.html";
			   
			   
			   },
			   error: function(){
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Possibile errore di rete, riprova tra qualche minuto',  // message
											alertDismissed,         // callback
											'Attenzione',            // title
											'Done'                  // buttonName
											);
			   
			   },
			   dataType:"jsonp"});
		

		
	}
}

function confirmDeleteOrologi(id) {
	localStorage.setItem("idScheda", id);
	
	navigator.notification.confirm(
								   'You want delete your colleciton?',  // message
								   onConfirm2,              // callback to invoke with index of button pressed
								   'Confirm',            // title
								   'Accept,No'      // buttonLabels
								   );
	
	
}

function onConfirm2(button) {
	
	if (button==1){
		
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://www.gtechplay.com/mycollection/www/delOrologi.asp",
			   contentType: "application/json",
			   data: {email:localStorage.getItem("email"),id:localStorage.getItem("idScheda")},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Collection Deleted',  // message
											alertDismissed,         // callback
											'Delete',            // title
											'Done'                  // buttonName@
											);
			   
			   window.location.href = "index.html";
			   
			   
			   },
			   error: function(){
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Possibile errore di rete, riprova tra qualche minuto',  // message
											alertDismissed,         // callback
											'Attenzione',            // title
											'Done'                  // buttonName
											);
			   
			   },
			   dataType:"jsonp"});
		
		
		
	}
}

function confirmDeleteQuadri(id) {
	localStorage.setItem("idScheda", id);
	
	navigator.notification.confirm(
								   'You want delete your colleciton?',  // message
								   onConfirm3,              // callback to invoke with index of button pressed
								   'Confirm',            // title
								   'Accept,No'      // buttonLabels
								   );
	
	
}

function onConfirm3(button) {
	
	if (button==1){
		
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://www.gtechplay.com/mycollection/www/delQuadri.asp",
			   contentType: "application/json",
			   data: {email:localStorage.getItem("email"),id:localStorage.getItem("idScheda")},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Collection Deleted',  // message
											alertDismissed,         // callback
											'Delete',            // title
											'Done'                  // buttonName@
											);
			   
			   window.location.href = "index.html";
			   
			   
			   },
			   error: function(){
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Possibile errore di rete, riprova tra qualche minuto',  // message
											alertDismissed,         // callback
											'Attenzione',            // title
											'Done'                  // buttonName
											);
			   
			   },
			   dataType:"jsonp"});
		
		
		
	}
}

function confirmDeleteAltro(id) {
	localStorage.setItem("idScheda", id);
	
	navigator.notification.confirm(
								   'You want delete your colleciton?',  // message
								   onConfirm4,              // callback to invoke with index of button pressed
								   'Confirm',            // title
								   'Accept,No'      // buttonLabels
								   );
	
	
}

function onConfirm4(button) {
	
	if (button==1){
		
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://www.gtechplay.com/mycollection/www/delAltro.asp",
			   contentType: "application/json",
			   data: {email:localStorage.getItem("email"),id:localStorage.getItem("idScheda")},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Collection Deleted',  // message
											alertDismissed,         // callback
											'Delete',            // title
											'Done'                  // buttonName@
											);
			   
			   window.location.href = "index.html";
			   
			   
			   },
			   error: function(){
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Possibile errore di rete, riprova tra qualche minuto',  // message
											alertDismissed,         // callback
											'Attenzione',            // title
											'Done'                  // buttonName
											);
			   
			   },
			   dataType:"jsonp"});
		
		
		
	}
}

function infomail() {
	
	window.plugin.email.open({
		to:      "appmycollection@gmail.com",
		subject: "Contattaci",
		body:    "Richiedi informazioni",
		isHtml:  true
	});
	
}


function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
						  }





