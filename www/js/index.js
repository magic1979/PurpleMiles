var app = {
	// Application Constructor
initialize: function() {
	this.bindEvents();
},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
bindEvents: function() {
	document.addEventListener('deviceready', this.onDeviceReady, false);
},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
onDeviceReady: function() {
	app.receivedEvent('deviceready');
},
	// Update DOM on a Received Event
receivedEvent: function(id) {
    document.addEventListener("resume", onResume, false);
	
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
	
	
	window.plugins.insomnia.keepAwake();
	
	//navigator.geolocation.getCurrentPosition(gpsonSuccess, gpsonError, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
	//ANDROID -------------------------------------------------------
	
	/*document.addEventListener('backbutton', function(e) {
							  navigator.notification.confirm(
															 'Confermi di voler chiudere',  // message
															 onConfirm2,              // callback to invoke with index of button pressed
															 'Logout',            // title
															 'Si,No'      // buttonLabels
															 );
							  }, false);
	
	
	function onConfirm2(button) {
		if(button==1){    //If User selected No, then we just do nothing
			localStorage.setItem("email", "");
			localStorage.setItem("emailpass", "");
			
			navigator.app.exitApp();
			
			e.stopImmediatePropagation();
	 
			e.preventDefault();
	 
			return false;
		}
	}
	
	
	*/
	
	//----------------------------------------------------------------
	
	//var lat = "41.889191";
	//var lng = "12.492475";
	
	//localStorage.setItem("lat", lat)
	//localStorage.setItem("lng", lng)
	
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	
	
	$(".spinner").show();
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
	
	if(connectionStatus=='online'){
		$('#noconn').hide();
		
		
		startgps();
		
		//var lat = localStorage.getItem("lat");
		//var lng = localStorage.getItem("lng");
		
		//var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
		//var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
		
		//localStorage.setItem("lat", lat)
		//localStorage.setItem("lng", lng)
		
		
		//codeLatLng(lat,lng);
		
		$(".spinner").hide();
		
	}
	
	else{
		navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		
		
		//window.location.href = "index.html";
		
		
	}

	
	
	//localStorage.setItem("lat", "41.889191")
	//localStorage.setItem("lng", "12.492475")
	
	
	var altezzatbl = getRealContentHeight()-60;
	var height = getRealContentHeight()-60;
	$("#tblhome").attr("height",height);
	$("#tblhome3").attr("height",height);
	
	
	var email = localStorage.getItem("email");
	
	
	if (localStorage.getItem("email") === null || localStorage.getItem("email")=="null" || typeof(localStorage.getItem("email")) == 'undefined' || localStorage.getItem("email")==0 || localStorage.getItem("email")=="") {
		
		window.location.href = "Login.html";
		
	}
	
	IDPage = getParameterByName('id');
	ODPage = getParameterByName('od');
	
	
	localStorage.setItem("palla1", "0")
	localStorage.setItem("palla2", "0")
	
	if(IDPage!=1){
	  localStorage.setItem("exit", "0")
	}
	
	$("#tblhome").html('<table id="tblhome" width="90%" height="'+ altezzatbl +'" border="0" valign="center" align="center" class="tabella"><tr height="48%"><td width="100%" align="center"><a id="mappa6" href="#" rel="external"><img src="img/Volante.png" width="120px"></a><br><b>Voglio essere autista</b><br><table><tr><td><table id="profiloperc" class="tabella1"><tr><td><font color="#FFF" size="4">Profilo '+ localStorage.getItem("perc_autista") +'%</font></td></tr></table></td><td><div id="stelleautista"></div></td></tr></table></td></tr><tr height="2%"><td width="100%" align="center"> </td></tr><tr height="48%"> <td width="100%" align="center"><a id="mappa7" href="#" rel="external"><img src="img/Valigia.png" width="120px"></a><br><b>Voglio essere passeggero</b><br><table><tr><td><table id="profiloperc2" class="tabella1"><tr><td><font color="#FFF" size="4">Profilo '+ localStorage.getItem("perc_pass") +'%</font></td></tr></table></td><td><div id="stellepass"></div></td></tr></table></td> </tr><tr height="10%"> <td width="100%" align="center"></td></tr></table>')
	
	$("#nickhome").html(localStorage.getItem("nick"));
	$("#nickhome3").html(localStorage.getItem("nick"));
	
	$("#tblhome").fadeIn("slow")
	
	
	//STELLE
	

	if(parseInt(localStorage.getItem("stelleautista"))==0){
		$("#stelleautista").html("<img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if(parseInt(localStorage.getItem("stelleautista"))==1){
		$("#stelleautista").html("<img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseInt(localStorage.getItem("stelleautista"))==2) {
		$("#stelleautista").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseInt(localStorage.getItem("stelleautista"))==3) {
		$("#stelleautista").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseInt(localStorage.getItem("stelleautista"))==4) {
		$("#stelleautista").html(ratio = "<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseInt(localStorage.getItem("stelleautista"))==5) {
		$("#stelleautista").html(ratio = "<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'>")
	}
	
	
	
	if(parseInt(localStorage.getItem("stellepass"))==0){
		$("#stellepass").html("<img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if(parseInt(localStorage.getItem("stellepass"))==1){
		$("#stellepass").html("<img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseInt(localStorage.getItem("stellepass"))==2) {
		$("#stellepass").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseInt(localStorage.getItem("stellepass"))==3) {
		$("#stellepass").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseInt(localStorage.getItem("stellepass"))==4) {
		$("#stellepass").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseInt(localStorage.getItem("stellepass"))==5) {
		$("#stellepass").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'>")
	}
	
	
	
	isTabHolded=false;
	

	var map;
	var refreshIntervalId;
	var refreshIntervalId33;
	var refreshPos;
	var prefi2000;
	var item1;
	var item2;
	var item3;
	var variabile;
	
	var nick1;
	var quando1;
	var ora1;
	var partenza1;
	var arrivo1;
	var distanza1;
	var stato1;
	var lat1;
	var lng1;
	var cod1;
	
	var nick2;
	var quando2;
	var ora2;
	var partenza2;
	var arrivo2;
	var distanza2;
	var stato2;
	var lat2;
	var lng2;
	var cod2;
	
	var nick3;
	var quando3;
	var ora3;
	var partenza3;
	var arrivo3;
	var distanza3;
	var stato3;
	var lat3;
	var lng3;
	var cod3;
	
	var muoviti;
	var setGPS;
	localStorage.setItem("setGPS","0")
	localStorage.setItem("muoviti","1")
	
	var watchID = null;
	var watchID2 = null;
	var watchID5 = null;
	
	$(document).on("tap", "#profiloperc", function(e){
				   
		  var ref = window.open('http://www.purplemiles.com/www/profile.php?id=19&pm=96e79218965eb72c92a549dd5a330112', '_system', 'location=no');
				   
	   	  e.stopImmediatePropagation();
				   
		  e.preventDefault();
				   
		  return false;
				   
		   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("tap", "#profiloperc2", function(e){
				   
		  var ref = window.open('http://www.purplemiles.com/www/profile.php?id=19&pm=96e79218965eb72c92a549dd5a330112', '_system', 'location=no');
				   
	   	  e.stopImmediatePropagation();
				   
		  e.preventDefault();
				   
		  return false;
				   
		  if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart", "#lista", function(e){
				   lista5();
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	$(document).on("touchstart", "#pass1", function(e){
				   richiesta1()
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	$(document).on("touchstart", "#pass2", function(e){
				   richiesta2()
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	$(document).on("touchstart", "#pass3", function(e){
				   richiesta3()
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#accettatime", function(e){ accetta11() });
	$(document).on("touchstart", "#rifiuta1", function(e){ rifiuta1() });
	
	$(document).on("touchstart", "#accettatime2", function(e){ accetta22() });
	$(document).on("touchstart", "#rifiuta2", function(e){ rifiuta2() });
	
	$(document).on("touchstart", "#accettatime3", function(e){ accetta33() });
	$(document).on("touchstart", "#rifiuta3", function(e){ rifiuta3() });

	
	$(document).on("tap", "#ric1", function(e){
		magia3()
				   
		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});

	
	$(document).on("touchstart", "#esci", function(e){

				   $("#pass1").hide();
				   $("#pass2").hide();
				   $("#pass3").hide();
				   $("#esci").hide();
				   
				   $("#blob2").hide();
				   
				   for(i=0; i<10000; i++)
				   {
				     window.clearInterval(i);
				   }
				   
				   resetta1(1);

   });
	
	$(document).on("touchstart", "#btnGPS", function(e){
				   //localStorage.setItem("btnGPS", "1")
				   setGPS = 0;
				   localStorage.setItem("setGPS","0")
				   
				   $("#modificastart").hide();
				   $("#modificastart2").hide();
				   
				   $("#btnGPS").removeClass("custom-btn3").addClass("custom-btnGPS");
				   $("#Modifica").removeClass("custom-btnModifica").addClass("custom-btn3");
				   
				   
				   buttongps();
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#Modifica", function(e){
				   //localStorage.setItem("btnGPS", "1")
				   setGPS = 1;
				   localStorage.setItem("setGPS","1")
				   
				   
				   document.getElementById("modificastart").value = "";
				   $("#modificastart").show();
				   $("#modificastart2").show();
				   
				   $("#btnGPS").removeClass("custom-btnGPS").addClass("custom-btn3");
				   $("#Modifica").removeClass("custom-btn3").addClass("custom-btnModifica");
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	
	$(document).on("touchstart", "#ritorna", function(e){
		$.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
		
		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart", "#ritorna5", function(e){
				   $.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
    
	$(document).on("touchstart", "#resetta", function(e){
		window.location.href = "index.html";
	});
	
	$(document).on("touchstart", "#mappa7", function(e){
		window.location.href = "mappass.html";
		
		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#mappa6", function(e){
				   
	  var connectionStatus = false;
	  connectionStatus = navigator.onLine ? 'online' : 'offline';
				   
	  if(connectionStatus=='online'){
				   
		resetta1();
	  }
	  else
	  {
		window.location.href = "index.html";
	  }
				   
	  e.stopImmediatePropagation();
				   
	  e.preventDefault();
				   
	 return false;
				   
	 if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
				   
	});
	
	$(document).on("tap", "#ChiudiXX", function(e){
				   navigator.notification.confirm(
								'Vuoi disconnetterti come utente '+ localStorage.getItem("nick") +'',  // message
								onConfirm,              // callback to invoke with index of button pressed
								'Logout',            // title
								'Conferma,Annulla'      // buttonLabels
								);
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	function onConfirm(button) {
		if(button==1){    //If User selected No, then we just do nothing
			localStorage.setItem("email", "");
			localStorage.setItem("emailpass", "");
			window.location.href = "Login.html";
			
			return;
		}
		/*}else{
			e.preventDefault();
			navigator.app.exitApp();
			
			localStorage.setItem("email", "");
			localStorage.setItem("emailpass", "");
			window.location.href = "Login.html";
			alert(1)
			if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
		}*/
	}
	
	$(document).on("tap", "#XXX", function(e){
		window.location.href = "index.html";
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#XX3", function(e){
		$.mobile.changePage ($("#win2"));
	    resetta1(1);
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#inizia", function(e){
				   
				   if(localStorage.getItem("setGPS") == 1){
				   
				     if (document.getElementById("modificastart").value == "") {
				         navigator.notification.alert(
												'inserire Indirizzo Valido o usare il GPS',  // message
												alertDismissed,         // callback
												'Indirizzo',            // title
												'OK'                  // buttonName
												);
				   
				         return;
				       }
				   }
				   
				   start();
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#back3", function(e){
		inviopasseggero(3);
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#back4", function(e){
		inviopasseggero(3);
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#xchiudi", function(e){
		chiudix();
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	$(document).on("tap", "#gratis", function(e){
		          inviopasseggero(1);
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#offerta", function(e){
		           inviopasseggero(2);
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#ricarica", function(e){
		centragps();
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	

	if(IDPage==1){
		resetta1(1);
	}
	
	$(document).keydown(function (eventObj){
		getKey(eventObj);
    });
	

	
	if(IDPage==2){
		window.location.href = "#win2";
		resetta2();
	}
}
	
}

function gpsonSuccess(position){
	
	
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;

	localStorage.setItem("lat", lat)
	localStorage.setItem("lng", lng)

	
	//alert()
	
	/*alert('Latitude: '          + position.coords.latitude          + '\n' +
	 'Longitude: '         + position.coords.longitude         + '\n' +
	 'Altitude: '          + position.coords.altitude          + '\n' +
	 'Accuracy: '          + position.coords.accuracy          + '\n' +
	 'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
	 'Heading: '           + position.coords.heading           + '\n' +
	 'Speed: '             + position.coords.speed             + '\n' +
	 'Timestamp: '         + position.timestamp                + '\n');*/
	
	
	//$("#distanza").html("<span style = 'font-size: 18px;'>"+ position.coords.speed +","+ position.coords.heading  +"</span>");
	
	//var lat = "41.889191";
	//var lng = "12.492475";
	
	
}

function gpsonError(){
	
	navigator.notification.alert(
								 'Possibile errore GPS, assicurati di avere il gps del telefono attivato.',  // message
								 alertDismissed,         // callback
								 'Attenzione',           // title
								 'Done'                  // buttonName
								 );
	
	var lat = "41.889191";
	var lng = "12.492475";
	
	localStorage.setItem("lat", lat)
	localStorage.setItem("lng", lng)
	
}

function chiama(km) {
	alert(km)
}

function CenterControl(controlDiv, map) {
	
	// Set CSS for the control border.
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = 'transparent';
	controlUI.style.border = '0px solid #fff';
	controlUI.style.borderRadius = '3px';
	controlUI.style.boxShadow = '0 0px 0px rgba(0,0,0,.3)';
	controlUI.style.cursor = 'pointer';
	controlUI.style.marginBottom = '22px';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Click to recenter the map';
	controlUI.style.height = '60px';
	controlUI.style.width = '320px';
	//controlUI.style.display = 'none';
	controlDiv.appendChild(controlUI);
	
	// Set CSS for the control interior.
	var controlText = document.createElement('div');
	controlText.style.color = 'rgb(25,25,25)';
	controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
	controlText.style.fontSize = '12px';
	controlText.style.lineHeight = '30px';
	controlText.style.paddingLeft = '5px';
	controlText.style.paddingRight = '5px';
	controlText.innerHTML = '<br><table width="100%" border="0"><tr><td align="right" colspan="2"><a id="XXX" href="#" rel="external"><img src="img/xx.png" width="35px"></a></td></tr><tr><td align="center" width="25%"><a id="btnGPS" href="#" data-role="button" data-theme="b" class="custom-btnGPS"><font color="#fff"><b>GPS</b></font></a></td><td align="left" width="75%"><a id="Modifica" href="#" data-role="button" data-theme="b" class="custom-btn3"><font color="#fff"><b>Modifica<b></font></a></td></tr></table>';
	controlUI.appendChild(controlText);
	
	//<input id="viale" name="viale" type="text" value="'+ localStorage.getItem("Via") +'">
	//var g = document.createElement('div');
	//g.id ='sopra':
	//controlUI.appendChild(g);
	// Setup the click event listeners: simply set the map to Chicago.
	//controlUI.addEventListener('click', function() {
		//alert();
		//map.setCenter(chicago);
	//});
	
}

function CenterControl2(controlDiv, map) {
	
	// Set CSS for the control border.
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = 'transparent';
	controlUI.style.border = '0px solid #fff';
	controlUI.style.borderRadius = '3px';
	controlUI.style.boxShadow = '0 0px 0px rgba(0,0,0,.3)';
	controlUI.style.cursor = 'pointer';
	controlUI.style.marginBottom = '22px';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Click to recenter the map';
	controlUI.style.height = '60px';
	controlUI.style.width = '320px';
	//controlUI.style.display = 'none';
	controlDiv.appendChild(controlUI);
	
	// Set CSS for the control interior.
	var controlText = document.createElement('div');
	controlText.style.color = 'rgb(25,25,25)';
	controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
	controlText.style.fontSize = '12px';
	controlText.style.lineHeight = '30px';
	controlText.style.paddingLeft = '5px';
	controlText.style.paddingRight = '5px';
	controlText.innerHTML = '<br><table width="100%" border="0"><tr><td align="right"><a id="XXX" href="index.html" rel="external"><img src="img/xx.png" width="35px"></a></td></tr></table>';
	controlUI.appendChild(controlText);
	
	//<input id="viale" name="viale" type="text" value="'+ localStorage.getItem("Via") +'">
	//var g = document.createElement('div');
	//g.id ='sopra':
	//controlUI.appendChild(g);
	// Setup the click event listeners: simply set the map to Chicago.
	//controlUI.addEventListener('click', function() {
	//alert();
	//map.setCenter(chicago);
	//});
	
}



function onSuccess555(position) {
	
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	
	localStorage.setItem("lat", lat)
	localStorage.setItem("lng", lng)
	
	var latlng = new google.maps.LatLng(lat, lng);
	
	marker2.setPosition(latlng);
	
	map.panTo(latlng);
	
}


function onError555(error) {
	//var watchID = navigator.geolocation.watchPosition(onSuccess2, onError3, { timeout: 80000 });
	//navigator.geolocation.watchPosition(onSuccess555, onError565, {timeout: 50000, enableHighAccuracy: false, maximumAge: 0 });
}

function onError565(error) {
	
	//window.location.href = "index.html";
}


function buttongps(){
	
	var watchID15 = navigator.geolocation.getCurrentPosition(onSuccess555, onError555, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
}



// START GPS

function onSuccess55(position) {
	
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	
	localStorage.setItem("lat", lat)
	localStorage.setItem("lng", lng)
	
}


function onError55(error) {
	//var watchID = navigator.geolocation.watchPosition(onSuccess2, onError3, { timeout: 80000 });
	navigator.geolocation.watchPosition(onSuccess55, onError56, {timeout: 50000, enableHighAccuracy: false, maximumAge: 0 });
}

function onError56(error) {
	
	//window.location.href = "index.html";
}


function startgps(){
	
	var watchID1 = navigator.geolocation.getCurrentPosition(onSuccess55, onError55, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
}


// CENTRA MAP ------------------------------

function onSuccess5(position) {
	
	var icon = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
	marker2.setIcon(icon);
	
	var posizione = Math.round(position.coords.heading);
	
	if((posizione > 0)&&(posizione <= 10)){
		var icon = new google.maps.MarkerImage("img_autista/car_010.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 10)&&(posizione <= 20)){
		var icon = new google.maps.MarkerImage("img_autista/car_020.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 20)&&(posizione <= 30)){
		//$("#rispondi").html("<img src='img_autista/car_030.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_030.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 30)&&(posizione <= 40)){
		//$("#rispondi").html("<img src='img_autista/car_040.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_040.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 40)&&(posizione <= 50)){
		//$("#rispondi").html("<img src='img_autista/car_050.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_050.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 50)&&(posizione <= 60)){
		//$("#rispondi").html("<img src='img_autista/car_060.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_060.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 60)&&(posizione <= 70)){
		//$("#rispondi").html("<img src='img_autista/car_070.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_070.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 70)&&(posizione <= 80)){
		//$("#rispondi").html("<img src='img_autista/car_080.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_080.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 80)&&(posizione <= 90)){
		//$("#rispondi").html("<img src='img_autista/car_090.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_090.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 90)&&(posizione <= 100)){
		//$("#rispondi").html("<img src='img_autista/car_100.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_100.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 100)&&(posizione <= 110)){
		//$("#rispondi").html("<img src='img_autista/car_110.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_110.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 110)&&(posizione <= 120)){
		//$("#rispondi").html("<img src='img_autista/car_120.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_120.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 120)&&(posizione <= 130)){
		//$("#rispondi").html("<img src='img_autista/car_130.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_130.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 130)&&(posizione <= 140)){
		//$("#rispondi").html("<img src='img_autista/car_140.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_140.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 140)&&(posizione <= 150)){
		//$("#rispondi").html("<img src='img_autista/car_150.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_150.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 150)&&(posizione <= 160)){
		//$("#rispondi").html("<img src='img_autista/car_160.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_160.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 160)&&(posizione <= 170)){
		//$("#rispondi").html("<img src='img_autista/car_170.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_170.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 170)&&(posizione <= 180)){
		//$("#rispondi").html("<img src='img_autista/car_180.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_180.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 180)&&(posizione <= 190)){
		//$("#rispondi").html("<img src='img_autista/car_190.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_190.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 190)&&(posizione <= 200)){
		//$("#rispondi").html("<img src='img_autista/car_200.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_200.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 200)&&(posizione <= 210)){
		//$("#rispondi").html("<img src='img_autista/car_210.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_210.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 210)&&(posizione <= 220)){
		//$("#rispondi").html("<img src='img_autista/car_220.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_220.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 220)&&(posizione <= 230)){
		//$("#rispondi").html("<img src='img_autista/car_230.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_230.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 230)&&(posizione <= 240)){
		//$("#rispondi").html("<img src='img_autista/car_240.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_240.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 240)&&(posizione <= 250)){
		//$("#rispondi").html("<img src='img_autista/car_250.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_250.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 250)&&(posizione <= 260)){
		//$("#rispondi").html("<img src='img_autista/car_260.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_260.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 260)&&(posizione <= 270)){
		//$("#rispondi").html("<img src='img_autista/car_270.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_270.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 270)&&(posizione <= 280)){
		//$("#rispondi").html("<img src='img_autista/car_280.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_280.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 280)&&(posizione <= 290)){
		//$("#rispondi").html("<img src='img_autista/car_290.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_290.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 290)&&(posizione <= 300)){
		//$("#rispondi").html("<img src='img_autista/car_300.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_300.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 300)&&(posizione <= 310)){
		//$("#rispondi").html("<img src='img_autista/car_310.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_310.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 310)&&(posizione <= 320)){
		//$("#rispondi").html("<img src='img_autista/car_320.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_320.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 320)&&(posizione <= 330)){
		//$("#rispondi").html("<img src='img_autista/car_330.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_330.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 330)&&(posizione <= 340)){
		//$("#rispondi").html("<img src='img_autista/car_340.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_340.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else if((posizione > 340)&&(posizione <= 350)){
		//$("#rispondi").html("<img src='img_autista/car_350.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_350.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	else{
		//$("#rispondi").html("<img src='img_autista/car_000.png'>")
		var icon = new google.maps.MarkerImage("img_autista/car_000.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
	}
	
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	
	localStorage.setItem("lat", lat)
	localStorage.setItem("lng", lng)
	
	//var lat = localStorage.getItem("lat");
	//var lng = localStorage.getItem("lng");
	var latlng = new google.maps.LatLng(lat, lng);
	
	marker2.setIcon(icon);
	marker2.setPosition(latlng);
	

	//map.setCenter(latlng);
	map.panTo(latlng);
	
	//alert("seguo")

	
}


function onError5(error) {
	//var watchID = navigator.geolocation.watchPosition(onSuccess2, onError3, { timeout: 80000 });
	navigator.geolocation.watchPosition(onSuccess55, onError5, {timeout: 50000, enableHighAccuracy: false, maximumAge: 0 });
}



function test5(position) {
	
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	
	localStorage.setItem("lat", lat)
	localStorage.setItem("lng", lng)
	
	//alert("Arrivo")
	muoviti = 1;
	muoviti = 1;
	muoviti = 1;
	muoviti = 1;
	muoviti = 1;
	
	//var latlng = new google.maps.LatLng(lat, lng);
	
	//map.panTo(latlng);
}


function centragps(){
	muoviti = 1;
	muoviti = 1;
	muoviti = 1;
	muoviti = 1;
	muoviti = 1;
	muoviti = 1;
	muoviti = 1;
	muoviti = 1;
	muoviti = 1;
	muoviti = 1;
	
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	
	var latlng = new google.maps.LatLng(lat, lng);
	
	map.panTo(latlng);
	
	if (watchID != null) {
		navigator.geolocation.clearWatch(watchID);
		watchID = null;
	}
	
	setTimeout(function() {
	  muoviti = 1;
	  var watchID = navigator.geolocation.watchPosition(onSuccess2, onError2, {maximumAge:600000, timeout:80000, enableHighAccuracy: true});
	}, 2000);
	
	//CLEAR POSITION

	//var watchID = navigator.geolocation.watchPosition(test5, onError5, {maximumAge:600000, timeout:80000, enableHighAccuracy: true});


}

//--------------------------------------------

function getKey(key){
	if ( key == null ) {
		keycode = event.keyCode;
		
	} else {
		keycode = key.keyCode;
	}
	
	if (keycode ==13){
 
     setTimeout(function() {
		inviopasseggero(3);
	 }, 200);
	
	}
	
}

function cambiap() {
    $('#footer').show();
    $.mobile.changePage ($("#home"));
}

function cambiah() {

    window.location.href = "index.html";
    
}

function nodiv() {
	 alert(22);
	 $("#sopra").hide();
	
}

function sidiv() {

	map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
	
}


function alertDismissed() {
    $(".spinner").hide();
}


function codeLatLng(lati,lngi) {
	var geocoder;
	geocoder = new google.maps.Geocoder();
	//var input = "41.875094, 12.478151";
	//var latlngStr = input.split(',', 2);
	var lat = parseFloat(lati);
	var lng = parseFloat(lngi);
	
	localStorage.setItem("lat", lat)
	localStorage.setItem("lng", lng)
	
	
	var latlng = new google.maps.LatLng(lat, lng);
	var indirizzo;
	var Citta;
	
	geocoder.geocode({'latLng': latlng}, function(results, status) {
					 if (status == google.maps.GeocoderStatus.OK) {
					 
					 
					 if (results[0]) {
					 
					 var viadotto = results[0].formatted_address;
					 
					 var mySplitResult = viadotto.split(",");
					 
					 localStorage.setItem("Via", mySplitResult[0].replace(/[0-9]/g, '').replace('-', ''))
					 
					 indirizzo = results[0].formatted_address
					 
					 //self.document.formia.via.value = mySplitResult[0].replace(/[0-9]/g, '').replace('-', '');
					 
					 
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
						
						//self.document.formia.citta.value = mySplitResult1[1].replace(/[0-9]/g, '').trim();
						
						citta = mySplitResult1[1].replace(/[0-9]/g, '')
					 
						//return;
						
					 }
					 
					 
					  document.getElementById("modificastart").value = indirizzo;
					  localStorage.setItem("modificastart", indirizzo)
					  localStorage.setItem("modificastartLAT", latlng)
					 
					 
					 });
	
}

function prendivia() {
	
	if (document.getElementById("modificastart").value == "") {
		navigator.notification.alert(
			'inserire Indirizzo Valido o usare il GPS',  // message
			 alertDismissed,         // callback
			 'Indirizzo',            // title
			 'OK'                  // buttonName
		);
		
	  return;
	}
	
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({
	"address": document.getElementById("modificastart").value
	}, function(results) {
		//alert(results[0].geometry.location.lat()); //LatLng
		//alert(results[0].geometry.location.lng());
					 
		localStorage.setItem("lat", results[0].geometry.location.lat())
		localStorage.setItem("lng", results[0].geometry.location.lng())
					 
		resetta1(1);
			 
	});
	
}


function funzioneradar() {
$(function() {
  
  var $rad = $('#rad'),
  $obj = $('.obj'),
  deg = 0,
  rad = 75; //   = 321/2
  
  $obj.each(function(){
            var data = $(this).data(),
            pos = {X:data.x, Y:data.y},
            getAtan = Math.atan2(pos.X-rad, pos.Y-rad),
            getDeg = ~~(-getAtan/(Math.PI/180) + 180);
            $(this).css({left:pos.X, top:pos.Y}).attr('data-atDeg', getDeg);
            });
  
  (function rotate() {
   $rad.css({transform: 'rotate('+ deg +'deg)'});
   $('[data-atDeg='+deg+']').stop().fadeTo(0,1).fadeTo(1700,0.2);
   
   // LOOP
   setTimeout(function() {
              deg = ++deg%360;
              rotate();
              }, 25);
   })();
  });
}

function getRealContentHeight() {
	var header = $.mobile.activePage.find("div[data-role='header']:visible");
	var footer = $.mobile.activePage.find("div[data-role='footer']:visible");
	var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
	var viewport_height = $(window).height();
    
	var content_height = viewport_height - header.outerHeight() ;//footer.outerHeight(); -48
	if((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
		content_height -= (content.outerHeight() - content.height());
	}
	
	return content_height;
}

function mappatura() {
    $('#footer').hide();
    
    $("#btn").click();
}

function gps() {
    $("#gps2").click();
}

function verificawifi(){
    $("#verifica").click();
}

function onResume() {
	app.initialize();
	
	/*var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
	
	if(connectionStatus=='online'){
	
	setTimeout(function() {
		
		for(i=0; i<10000; i++)
		{
		window.clearInterval(i);
		}
			   
	   resetta1(1);
	}, 200);
		
	}
	else{

	}*/
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


function resetta1(focus) {
	muoviti = 1;
	
	localStorage.setItem("fatto","0")
	
	//PRESS TO MARKER
	$(function(){
   $(document).bind( "taphold", tapholdHandler );
	  //$( "div.box" ).bind( "taphold", tapholdHandler );
	  localStorage.setItem("tappato", "0")
	  
	  
	  function tapholdHandler( event ){
	  $( event.target ).addClass( "taphold" );
	  isTabHolded=true;
	  localStorage.setItem("tappato", "0")
	  }
	});	//----------------
	
	
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
	
	if(connectionStatus=='online'){

	 if(localStorage.getItem("setGPS") == 0){
	   var watchID11 = navigator.geolocation.getCurrentPosition(onSuccess55, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
		 
		//var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
		//var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
		 
		//localStorage.setItem("lat", lat)
		//localStorage.setItem("lng", lng)
	 }
	
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	
	
	var latlng = new google.maps.LatLng(lat, lng, 1);
	
	var $content = $("#win2 div:jqmData(role=content)");
    $content.height (getRealContentHeight());
                                                              
	  var options = {
	  zoom : 13,
	  center : latlng,
	  mapTypeId : google.maps.MapTypeId.ROADMAP,
	  scrollwheel	: false,
	  zoomControl: true
  
	  };
		
	  map = new google.maps.Map($content[0], options);
	
	  $.mobile.changePage ($("#win2"));
	  setTimeout(function() {
		 google.maps.event.trigger(map, "resize");
		 map.setCenter(latlng);
	  }, 600);

	
	var contentString1 =
	
	'<div class="popup">'+
	'<h2> My Pub</h2>'+
	'<p>Example Strasse n.1</b>'+
	'</div>';
	
	var infowindow = new google.maps.InfoWindow({
												content: contentString1,
												maxWidth: 200,
												maxHeight: 150,
												});
		

		
	$(document).on("touchmove", map, function(e){
		muoviti=0;
	    muoviti=0;
	    muoviti=0;
		muoviti=0;
		muoviti=0;
		muoviti=0;
		muoviti=0;
		muoviti=0;
		muoviti=0;
		muoviti=0;
				   
		// CLEAR WATCH 5
		//navigator.geolocation.clearWatch(watchID5);

	});
		
		
	var beaches = [];
	var markers = [];//some array
	var posizione = 1;
	var distanza = "";
	var numero = "";
	
	beaches.push(['Tua Posizione',lat,lng,1,0,0])
	
	//alert("http://purplemiles.com/www2/check_richiesta_autista.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"");
		
		var myLatLng = new google.maps.LatLng(lat, lng, 1);
		
		var gradi = localStorage.getItem("gradi");
		
		//alert(gradi);
		
		var icon = new google.maps.MarkerImage("img/autista.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		//alert(myLatLng + beach[0])
		
		
		marker2 = new google.maps.Marker ({
										  map : map,
										  icon: icon,
										  optimized: false,
										  position : myLatLng,
										  content:'<div class="popup">Tua Posizione</div>',
										  title: '1',
										  //label: ''+ beach[1] +','+ beach[2] +'',
										  zIndex: 100
										  });
		
		google.maps.event.addListener(marker2, 'click', function() {
									  
									  infowindow.setContent(this.content);
									  infowindow.open(map, this);
									  
									  });
		
		var iconn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
		var iconnn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
		
		// marker1.setMap(null);
		
		
		marker1 = new google.maps.Marker ({
										  map : map,
										  icon: iconn,
										  optimized: false,
										  position : myLatLng,
										  //content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="#home3">Cliccami</a></div>',
										  title: '',
										  //label: ''+ beach[1] +','+ beach[2] +'',
										  zIndex: -10
										  });
		
		marker3 = new google.maps.Marker ({
										  map : map,
										  icon: iconn,
										  optimized: false,
										  position : myLatLng,
										  //content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="#home3">Cliccami</a></div>',
										  title: '',
										  //label: ''+ beach[1] +','+ beach[2] +'',
										  zIndex: -11
										  });
		
		marker4 = new google.maps.Marker ({
										  map : map,
										  icon: iconnn,
										  optimized: false,
										  position : myLatLng,
										  //content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="#home3">Cliccami</a></div>',
										  title: '',
										  //label: ''+ beach[1] +','+ beach[2] +'',
										  zIndex: -12
										  });
		
		
		
			
			/*INSERT TAP PROLUNGATO*/
			
			google.maps.event.addListener(map, 'click', function(e) {
			   placeMarker(e.latLng, map);
										  
				//codeLatLng2(e.latLng)
										  
			});
			
			
			function placeMarker(position, map) {
				
				if(localStorage.getItem("tappato")=="0"){
				  if(localStorage.getItem("setGPS") == 1){
					if (isTabHolded){
						var icon = new google.maps.MarkerImage("img/autista.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
						
						marker2.setMap(null);
						
						marker2 = new google.maps.Marker({
								position: position,
								map: map,
								icon: icon,
								content:'<div class="popup">ORA</div>',
								optimized: false
						});
						
						var myLatLng = position;
						var lat = myLatLng.lat();
						var lng = myLatLng.lng();
						
						codeLatLng(lat,lng);
						
						
						isTabHolded=false
						localStorage.setItem("tappato", "1")
					}
				 }
			   }
			}
			
			//---------------------------
		
	if(focus!=1){
		var centerControlDiv = document.createElement('div');
		centerControlDiv.setAttribute('id', 'sopra');
		var centerControl = new CenterControl(centerControlDiv, map);
		
		centerControlDiv.index = 1;
		map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
	}

		
	if(focus==1){
		$("#btninizia").hide();
		$("#setGPS").hide();
		$("#Modifica").hide();
		
		var centerControlDiv2 = document.createElement('div');
		centerControlDiv2.setAttribute('id', 'sopra');
		var centerControl2 = new CenterControl2(centerControlDiv2, map);
		
		centerControlDiv2.index = 1;
		map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv2);
		
		
		$("#pass1").hide();
		$("#pass2").hide();
		$("#pass3").hide();
		$("#esci").hide();
		$("#blob2").hide();
		
		//$("#loading").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autistaV2.php?email="+ localStorage.getItem("email") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==3){
				  $("#pass1").hide();
				  $("#pass2").hide();
				  $("#pass3").hide();
				  }
				  
				  
				  if(item.Token==4){
				  $("#pass1").hide();
				  $("#pass2").hide();
				  $("#pass3").hide();
				  //$("#esci").hide();
				  
				  //resetta1(1);
				  
				  
				  marker1.setMap(null);
				  
				  var isVisible3 = marker3.getVisible();
				  if(isVisible3){
				  marker3.setMap(null);
				  }
				  
				  
				  var isVisible4 = marker4.getVisible();
				  if(isVisible4){
				  marker4.setMap(null);
				  }
				  
				  
				  
				  }
				  
				  
				  distanza = getDistance(lat,lng,item.lat,item.lng).toFixed(1);
				  
				  beaches.push(["<h2>"+item.nick+"</h2><br>"+item.partenza,item.lat,item.lng,posizione,item.rating,item.distanza,item.id_pass])
				  
				  
				if(posizione==1){
				  item1 = item.id_richiesta;
				  
				  nick1 = item.nick
				  quando1 = item.quando
				  ora1 = item.ora
				  partenza1 = item.partenza
				  arrivo1 = item.arrivo
				  distanza1 = item.distanza
				  stato1 = item.stato
				  lng1 = item.lng
				  lat1 = item.lat
				  
				  
				  //$("#pass1").show();
				  //$("#esci").show();
				  
				  if(item.stato==3){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  if(item.stato==1){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  
				  if(item.accettata==1){
				   $("#pass1").removeClass("custom-pass").addClass("custom-pass2");
				   $("#pass1").removeClass("custom-pass1").addClass("custom-pass2");
				   $("#pass1").removeClass("custom-pass3").addClass("custom-pass2");
				  }
				  else{
				   $("#pass1").removeClass("custom-pass").addClass("custom-pass1");
				   $("#pass1").removeClass("custom-pass2").addClass("custom-pass1");
				   $("#pass1").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  
				  }

				  
				  var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
				  var iconn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
				  var iconnn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
				  
						// marker1.setMap(null);
				  var myLatLng1 = new google.maps.LatLng(item.lat,item.lng, 1);
				  
				  marker1 = new google.maps.Marker ({
													map : map,
													icon: iconn,
													optimized: false,
													position : myLatLng1,
													content:'<div class="popup">'+item.nick +'<br>Km'+ item.distanza +'</div>',
													title: '1',
													//label: ''+ beach[1] +','+ beach[2] +'',
													zIndex: -1
													});
				  
				}
				  
				if(posizione==2){
				  item2 = item.id_richiesta;
				  
				  nick2 = item.nick
				  quando2 = item.quando
				  ora2 = item.ora
				  partenza2 = item.partenza
				  arrivo2 = item.arrivo
				  distanza2 = item.distanza
				  stato2 = item.stato
				  lng2 = item.lng
				  lat2 = item.lat
				  
				  //$("#pass2").show();
				  
				  if(item.stato==3){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  if(item.stato==1){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  
				  if(item.accettata==1){
				   $("#pass2").removeClass("custom-pass").addClass("custom-pass2");
				   $("#pass2").removeClass("custom-pass1").addClass("custom-pass2");
				   $("#pass2").removeClass("custom-pass3").addClass("custom-pass2");
				  }
				  else{
				   $("#pass2").removeClass("custom-pass").addClass("custom-pass1");
				   $("#pass2").removeClass("custom-pass2").addClass("custom-pass1");
				   $("#pass2").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  
				  }

				  
				  var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
				  var iconn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
				  //alert(myLatLng + beach[0] + beach[5])
				  
				  var myLatLng2 = new google.maps.LatLng(item.lat,item.lng, 1);
				  
				  //marker3.setMap(null);
				  
						marker3 = new google.maps.Marker ({
														  map : map,
														  icon: iconn,
														  optimized: false,
														  position : myLatLng2,
														  content:'<div class="popup">'+item.nick +'<br>Km'+ item.distanza +'</div>',
														  title: '2',
														  //label: ''+ beach[1] +','+ beach[2] +'',
														  zIndex: -10
														  });

				  
				}
				  if(posizione==3){
				  item3 = item.id_richiesta;
				  
				  nick3 = item.nick
				  quando3 = item.quando
				  ora3 = item.ora
				  partenza3 = item.partenza
				  arrivo3 = item.arrivo
				  distanza3 = item.distanza
				  stato3 = item.stato
				  lng3 = item.lng
				  lat3 = item.lat
				  
				  //$("#pass3").show();
				  
				  if(item.stato==3){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  if(item.stato==1){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  
				  if(item.accettata==1){
				   $("#pass3").removeClass("custom-pass").addClass("custom-pass2");
				   $("#pass3").removeClass("custom-pass1").addClass("custom-pass2");
				   $("#pass3").removeClass("custom-pass3").addClass("custom-pass2");
				  }
				  else{
				   $("#pass3").removeClass("custom-pass").addClass("custom-pass1");
				   $("#pass3").removeClass("custom-pass2").addClass("custom-pass1");
				   $("#pass3").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  
				  }
				  
				  var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
				  var iconn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
				  //alert(myLatLng + beach[0] + beach[5])
				  
				  var myLatLng3 = new google.maps.LatLng(item.lat,item.lng, 1);
				  
				  //marker4.setMap(null);
				  marker4 = new google.maps.Marker ({
													map : map,
													icon: iconn,
													optimized: false,
													position : myLatLng3,
													content:'<div class="popup">'+item.nick +'<br>Km'+ item.distanza +'</div>',
													title: '4',
													//label: ''+ beach[1] +','+ beach[2] +'',
													zIndex: -100
													});
				  
				  }

				posizione = (posizione+1);
				  
			});
		   
		   
		   },
		   error: function(){
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);*/
		   
		   },
		   dataType:"jsonp"});

	
		//$("#blob1").attr("href", "javascript:alert()");

	   /*var centerControlDiv = document.createElement('div');
	   centerControlDiv.setAttribute('id', 'sopra');
	   var centerControl = new CenterControl(centerControlDiv, map);
	  
	   centerControlDiv.index = 1;
	   map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);*/
		
	  //alert(localStorage.getItem("setGPS"))
		
		
	  if(localStorage.getItem("setGPS") == 0){

	   var watchID = navigator.geolocation.watchPosition(onSuccess2, onError2, {maximumAge:600000, timeout:80000, enableHighAccuracy: true});
		  
	   var lat = localStorage.getItem("lat");
	   var lng = localStorage.getItem("lng");
		  
		var latlng = new google.maps.LatLng(lat, lng);
		map.panTo(latlng);
		  
		//test5()
		  
	  }
	  else{
		  
		  var icon = new google.maps.MarkerImage("img/autista.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		  
		  var lat = localStorage.getItem("lat");
	      var lng = localStorage.getItem("lng");
		  
		  var latlng = new google.maps.LatLng(lat, lng);
		  
		  marker2.setIcon(icon);
		  marker2.setPosition(latlng);
		  
		  map.panTo(latlng);
			
	     //var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
	     //var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
			
	     //localStorage.setItem("lat", lat)
	     //localStorage.setItem("lng", lng)
			
	  }
		
		
		timer()

	}
	
	
	/*INSERT TAP PROLUNGATO*/
	
	//google.maps.event.addListener(map, 'click', function(e) {
		//placeMarker(e.latLng, map);
								  
		//alert(e.latLng);
								  
	//});

	
	/*function placeMarker(position, map) {
		
		if (isTabHolded){
			var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
			marker4 = new google.maps.Marker({
											position: position,
											map: map,
											icon: icon,
											content:'<div class="popup">ORA</div>',
											optimized: false
											});
			
			setTimeout(function() {

					   google.maps.event.addListener(marker4, "tap", function (event) {
										  var latitude2 = this.position.lat();
										  var longitude2 = this.position.lng();
													 
										  infowindow.setContent(this.position);
										  infowindow.open(map, this);
										  //alert(this.position);
										  }); //end addListener
			
					   map.panTo(position);
					   isTabHolded=false;

			}, 300);
		}
	}*/
	
	//---------------------------
		
		
		function onSuccess2(position) {
			
			var icon = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
			marker2.setIcon(icon);
			
			var posizione = Math.round(position.coords.heading);
			
			if((posizione > 0)&&(posizione <= 10)){
				var icon = new google.maps.MarkerImage("img_autista/car_010.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 10)&&(posizione <= 20)){
				var icon = new google.maps.MarkerImage("img_autista/car_020.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 20)&&(posizione <= 30)){
				//$("#rispondi").html("<img src='img_autista/car_030.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_030.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 30)&&(posizione <= 40)){
				//$("#rispondi").html("<img src='img_autista/car_040.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_040.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 40)&&(posizione <= 50)){
				//$("#rispondi").html("<img src='img_autista/car_050.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_050.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 50)&&(posizione <= 60)){
				//$("#rispondi").html("<img src='img_autista/car_060.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_060.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 60)&&(posizione <= 70)){
				//$("#rispondi").html("<img src='img_autista/car_070.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_070.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 70)&&(posizione <= 80)){
				//$("#rispondi").html("<img src='img_autista/car_080.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_080.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 80)&&(posizione <= 90)){
				//$("#rispondi").html("<img src='img_autista/car_090.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_090.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 90)&&(posizione <= 100)){
				//$("#rispondi").html("<img src='img_autista/car_100.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_100.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 100)&&(posizione <= 110)){
				//$("#rispondi").html("<img src='img_autista/car_110.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_110.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 110)&&(posizione <= 120)){
				//$("#rispondi").html("<img src='img_autista/car_120.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_120.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 120)&&(posizione <= 130)){
				//$("#rispondi").html("<img src='img_autista/car_130.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_130.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 130)&&(posizione <= 140)){
				//$("#rispondi").html("<img src='img_autista/car_140.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_140.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 140)&&(posizione <= 150)){
				//$("#rispondi").html("<img src='img_autista/car_150.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_150.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 150)&&(posizione <= 160)){
				//$("#rispondi").html("<img src='img_autista/car_160.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_160.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 160)&&(posizione <= 170)){
				//$("#rispondi").html("<img src='img_autista/car_170.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_170.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 170)&&(posizione <= 180)){
				//$("#rispondi").html("<img src='img_autista/car_180.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_180.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 180)&&(posizione <= 190)){
				//$("#rispondi").html("<img src='img_autista/car_190.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_190.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 190)&&(posizione <= 200)){
				//$("#rispondi").html("<img src='img_autista/car_200.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_200.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 200)&&(posizione <= 210)){
				//$("#rispondi").html("<img src='img_autista/car_210.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_210.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 210)&&(posizione <= 220)){
				//$("#rispondi").html("<img src='img_autista/car_220.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_220.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 220)&&(posizione <= 230)){
				//$("#rispondi").html("<img src='img_autista/car_230.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_230.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 230)&&(posizione <= 240)){
				//$("#rispondi").html("<img src='img_autista/car_240.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_240.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 240)&&(posizione <= 250)){
				//$("#rispondi").html("<img src='img_autista/car_250.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_250.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 250)&&(posizione <= 260)){
				//$("#rispondi").html("<img src='img_autista/car_260.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_260.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 260)&&(posizione <= 270)){
				//$("#rispondi").html("<img src='img_autista/car_270.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_270.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 270)&&(posizione <= 280)){
				//$("#rispondi").html("<img src='img_autista/car_280.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_280.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 280)&&(posizione <= 290)){
				//$("#rispondi").html("<img src='img_autista/car_290.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_290.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 290)&&(posizione <= 300)){
				//$("#rispondi").html("<img src='img_autista/car_300.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_300.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 300)&&(posizione <= 310)){
				//$("#rispondi").html("<img src='img_autista/car_310.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_310.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 310)&&(posizione <= 320)){
				//$("#rispondi").html("<img src='img_autista/car_320.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_320.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 320)&&(posizione <= 330)){
				//$("#rispondi").html("<img src='img_autista/car_330.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_330.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 330)&&(posizione <= 340)){
				//$("#rispondi").html("<img src='img_autista/car_340.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_340.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else if((posizione > 340)&&(posizione <= 350)){
				//$("#rispondi").html("<img src='img_autista/car_350.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_350.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			else{
				//$("#rispondi").html("<img src='img_autista/car_000.png'>")
				var icon = new google.maps.MarkerImage("img_autista/car_000.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			}
			
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
			
			localStorage.setItem("lat", lat)
			localStorage.setItem("lng", lng)
			
			//var lat = localStorage.getItem("lat");
			//var lng = localStorage.getItem("lng");
			var latlng = new google.maps.LatLng(lat, lng);
			
			marker2.setIcon(icon);
			marker2.setPosition(latlng);
			
			if(muoviti==1){
				//map.setCenter(latlng);
				map.panTo(latlng);
			}
			

			//alert(muoviti)
			
	}
        
        function onError2(error) {
            //var watchID = navigator.geolocation.watchPosition(onSuccess2, onError3, { timeout: 80000 });
			navigator.geolocation.watchPosition(onSuccess2, onError3, {timeout: 50000, enableHighAccuracy: false, maximumAge: 0 });
        }
	
        function onError3(error) {
            localStorage.setItem("geostory", "NO")
            
			window.location.href = "index.html";
        }
		
		
function posizionegps(){

	refreshPos = setInterval(function() {

		var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });

	}, 3000);
}
	
	
function timer(){
	
	refreshIntervalId = setInterval(function() {

									
		//var watchID = navigator.geolocation.getCurrentPosition(onSuccess22, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
									
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
									
	if(connectionStatus=='online'){
									var iconn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
									var lat = localStorage.getItem("lat");
									var lng = localStorage.getItem("lng");
		
									//var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
									//var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
									
									var beaches1 = [];
									var posizione = 1;
									var distanza = "";
									
									$("#loading").hide();
									$("#btnpass").show();

									$("#esci").hide();
									
									beaches1.push(['Tua Posizione',lat,lng,1,0,0,0])
									
									var centromap = new google.maps.LatLng(lat, lng, posizione);
									
									$.ajax({
										   type:"GET",
										   url:"http://purplemiles.com/www2/check_richiesta_autistaV2.php?email="+ localStorage.getItem("email") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"",
										   contentType: "application/json",
										   //data: {ID: "Lazio"}, LIMIT 10
										   timeout: 7000,
										   jsonp: 'callback',
										   crossDomain: true,
										   success:function(result){
											   
											marker1.setIcon(iconn);
											marker3.setIcon(iconn);
											marker4.setIcon(iconn);
										   
										   $.each(result, function(i,item){
												  
												  if(item.Token==3){
												  $("#pass1").hide();
												  $("#pass2").hide();
												  $("#pass3").hide();
												  }
												  
												  
												  if(item.Token==4){
												  $("#pass1").hide();
												  $("#pass2").hide();
												  $("#pass3").hide();
												  $("#esci").hide();
												  
												  //resetta1(1);
												  

												  marker1.setMap(null);
												  
												  var isVisible3 = marker3.getVisible();
												  if(isVisible3){
												  marker3.setMap(null);
												  }
												  
												  
												  var isVisible4 = marker4.getVisible();
												  if(isVisible4){
												  marker4.setMap(null);
												  }
												  
												  
												  
												  }
												  
												  
												  if(item.Token==1){
												  
												  var myLatLng = new google.maps.LatLng(item.lat, item.lng, posizione);
												  
												  distanza = getDistance(lat,lng,item.lat,item.lng).toFixed(1);
												  
												  beaches1.push(["<h2>"+item.nick+"</h2><br>"+item.partenza,item.lat,item.lng,posizione,item.rating,item.distanza,item.id_richiesta])
												  
												  
												  
												  if(posizione==1){
												  item1 = item.id_richiesta;
												  
												  nick1 = item.nick
												  quando1 = item.quando
												  ora1 = item.ora
												  partenza1 = item.partenza
												  arrivo1 = item.arrivo
												  distanza1 = item.distanza
												  stato1 = item.stato
												  lng1 = item.lng
												  lat1 = item.lat
												  cod1 = item.cod_autista
												  
												  if(localStorage.getItem("palla1")!=1){
											   
												     palla1()
												  
											       }
												  
												  
												  /*$(document).on("tap", "#pass1", function(e){
																 //window.location.href = "#index3";
																 
																 
																 //localStorage.setItem("geostory", "NO")
																 for(i=0; i<10000; i++)
																 {
																 window.clearInterval(i);
																 }
																 
																 richiesta1(item.id_richiesta);
																 
																 });*/
												  
												  
												  var icon3 = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
												  
												  marker1.setMap(null);

												  marker1 = new google.maps.Marker ({
																					map : map,
																					icon: icon3,
																					optimized: false,
																					position : myLatLng,
																					content:'<div class="popup">'+ item.nick +'<br>Km'+ item.distanza +'<br><a href="#home3">GPS</a></div>',
																					title: item.nick,
																					//label: ''+ beach[1] +','+ beach[2] +'',
																					zIndex: posizione
																					});
												  
												  google.maps.event.addListener(marker1, 'click', function() {
																				
																				infowindow.setContent(this.content);
																				infowindow.open(map, this);
																				
																				});
	
												  
												  
												  $("#pass1").show();
												  $("#pass2").hide();
												  $("#pass3").hide();
												  
												  if(item.stato==3){
												  $("#pass1").removeClass("custom-pass").addClass("custom-pass3");
												  $("#pass1").removeClass("custom-pass1").addClass("custom-pass3");
												  $("#pass1").removeClass("custom-pass2").addClass("custom-pass3");
												  }
												  
												  if(item.stato==1){
												  $("#pass1").removeClass("custom-pass").addClass("custom-pass1");
												  $("#pass1").removeClass("custom-pass2").addClass("custom-pass1");
												  $("#pass1").removeClass("custom-pass3").addClass("custom-pass1");
												  }
												  if(item.stato==0){
												  $("#pass1").removeClass("custom-pass1").addClass("custom-pass");
												  $("#pass1").removeClass("custom-pass2").addClass("custom-pass");
												  $("#pass1").removeClass("custom-pass3").addClass("custom-pass");
												  }
												  if(item.stato==2){
												  
												  if(item.accettata==1){
												   $("#pass1").removeClass("custom-pass").addClass("custom-pass2");
												   $("#pass1").removeClass("custom-pass1").addClass("custom-pass2");
												   $("#pass1").removeClass("custom-pass3").addClass("custom-pass2");
												  }
												  else{
												   $("#pass1").removeClass("custom-pass").addClass("custom-pass1");
												   $("#pass1").removeClass("custom-pass2").addClass("custom-pass1");
												   $("#pass1").removeClass("custom-pass3").addClass("custom-pass1");
												  }
												  
												  
												   if(item.accettata==0){
												    $("#blob3").show();
												    for(i=0; i<10000; i++)
												    {
												     window.clearInterval(i);
												    }
												  
												    $("#viaaccetta3").html(item.partenza);
												  
												  function countdown1(minutes) {
												  var seconds = 30;
												  var mins = minutes
												  function tick() {
												  var counter = document.getElementById("timer1");
												  var current_minutes = 0;
												  seconds--;
												  counter.innerHTML =
												  "<font size='5'>"+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+"</font>";
												  if( seconds > 0 ) {
												  setTimeout(tick, 1000);
												  } else {
												  $("#blob3").hide();
												  
												  scadutaofferta(0,item.id_richiesta,item.id_autista)
												  
												  //resetta1(1)
												  //rifiuta1()
												  //alert("finito");
												  //if(mins > 1){
												  
												  // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
												  //setTimeout(function () { countdown(mins - 1); }, 1000);
												  
												  //}
												  }
												  }
												  tick();
												  }
												  
												  countdown1(0);

												  }
												   else{
													$("#blob3").hide();
												   }
												  }
												  
												  
												  
												  }
												  
												  if(posizione==2){
												  item2 = item.id_richiesta;
												  
												  nick2 = item.nick
												  quando2 = item.quando
												  ora2 = item.ora
												  partenza2 = item.partenza
												  arrivo2 = item.arrivo
												  distanza2 = item.distanza
												  stato2 = item.stato
												  lng2 = item.lng
												  lat2 = item.lat
												  cod2 = item.cod_autista
												  
												  /*$(document).on("tap", "#pass2", function(e){
																 //window.location.href = "#index3";
																 
																 //localStorage.setItem("geostory", "NO")
																 
																 for(i=0; i<10000; i++)
																 {
																 window.clearInterval(i);
																 }
																 
																 richiesta2(item.id_richiesta);
																 
																 
																 });*/
												  
												  var icon3 = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
												  
												  marker3.setMap(null);
												  
												  marker3 = new google.maps.Marker ({
																					map : map,
																					icon: icon3,
																					optimized: false,
																					position : myLatLng,
																					content:'<div class="popup">'+ item.nick +'<br>Km'+ item.distanza +'<br><a href="#home3">GPS</a></div>',
																					title: item.nick,
																					//label: ''+ beach[1] +','+ beach[2] +'',
																					zIndex: posizione
																					});
												  
												  google.maps.event.addListener(marker3, 'click', function() {
																				
																				infowindow.setContent(this.content);
																				infowindow.open(map, this);
																				
																				});
												  
												  $("#pass2").show();
												  $("#pass3").hide();
												  
												  if(item.stato==3){
												  $("#pass2").removeClass("custom-pass").addClass("custom-pass3");
												  $("#pass2").removeClass("custom-pass1").addClass("custom-pass3");
												  $("#pass2").removeClass("custom-pass2").addClass("custom-pass3");
												  }
												  
												  if(item.stato==1){
												  $("#pass2").removeClass("custom-pass").addClass("custom-pass1");
												  $("#pass2").removeClass("custom-pass2").addClass("custom-pass1");
												  $("#pass2").removeClass("custom-pass3").addClass("custom-pass1");
												  }
												  if(item.stato==0){
												  $("#pass2").removeClass("custom-pass1").addClass("custom-pass");
												  $("#pass2").removeClass("custom-pass2").addClass("custom-pass");
												  $("#pass2").removeClass("custom-pass3").addClass("custom-pass");
												  }
												  if(item.stato==2){
												  
												  if(item.accettata==1){
												   $("#pass2").removeClass("custom-pass").addClass("custom-pass2");
												   $("#pass2").removeClass("custom-pass1").addClass("custom-pass2");
												   $("#pass2").removeClass("custom-pass3").addClass("custom-pass2");
												  }
												  else{
												   $("#pass2").removeClass("custom-pass").addClass("custom-pass1");
												   $("#pass2").removeClass("custom-pass2").addClass("custom-pass1");
												   $("#pass2").removeClass("custom-pass3").addClass("custom-pass1");
												  }
												  
												  if(item.accettata==0){
												   $("#blob4").show();
												   for(i=0; i<10000; i++)
												   {
												    window.clearInterval(i);
												   }
												  
												  $("#viaaccetta2").html(item.partenza);
												  
												  function countdown2(minutes) {
												  var seconds = 30;
												  var mins = minutes
												  function tick() {
												  var counter = document.getElementById("timer2");
												  var current_minutes = 0;
												  seconds--;
												  counter.innerHTML =
												  current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
												  if( seconds > 0 ) {
												  setTimeout(tick, 1000);
												  } else {
												  scadutaofferta(0,item.id_richiesta,item.id_autista)
												  $("#blob4").hide();
												  //rifiuta2()
												  //alert("finito");
												  //if(mins > 1){
												  
												  // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
												  //setTimeout(function () { countdown(mins - 1); }, 1000);
												  
												  //}
												  }
												  }
												  tick();
												  }
												  
												  countdown2(0);
												  }
												  else{
												    $("#blob4").hide();
												  }

												     }
												  
												  }
												  
												  if(posizione==3){
												  
												  nick3 = item.nick
												  quando3 = item.quando
												  ora3 = item.ora
												  partenza3 = item.partenza
												  arrivo3 = item.arrivo
												  distanza3 = item.distanza
												  stato3 = item.stato
												  lng3 = item.lng
												  lat3 = item.lat
												  cod3 = item.cod_autista
												  
												  item3 = item.id_richiesta;
												  
												  var icon3 = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
												  
												  
												  var isVisible4 = marker4.getVisible();
												  if(isVisible4){
												  marker4.setMap(null);
												  }
												  
												  
												  marker4 = new google.maps.Marker ({
																					map : map,
																					icon: icon3,
																					optimized: false,
																					position : myLatLng,
																					content:'<div class="popup">'+ item.nick +'<br>Km'+ item.distanza +'<br><a href="#home3">GPS</a></div>',
																					title: item.nick,
																					//label: ''+ beach[1] +','+ beach[2] +'',
																					zIndex: posizione
																					});
												  
												  google.maps.event.addListener(marker4, 'click', function() {
																				
																				infowindow.setContent(this.content);
																				infowindow.open(map, this);
																				
																				});
												  
												  $("#pass3").show();
												  
												  if(item.stato==3){
												  $("#pass3").removeClass("custom-pass").addClass("custom-pass3");
												  $("#pass3").removeClass("custom-pass1").addClass("custom-pass3");
												  $("#pass3").removeClass("custom-pass2").addClass("custom-pass3");
												  }
												  
												  if(item.stato==1){
												  $("#pass3").removeClass("custom-pass").addClass("custom-pass1");
												  $("#pass3").removeClass("custom-pass2").addClass("custom-pass1");
												  $("#pass3").removeClass("custom-pass3").addClass("custom-pass1");
												  }
												  if(item.stato==0){
												  $("#pass3").removeClass("custom-pass1").addClass("custom-pass");
												  $("#pass3").removeClass("custom-pass2").addClass("custom-pass");
												  $("#pass3").removeClass("custom-pass3").addClass("custom-pass");
												  }
												  if(item.stato==2){
												  
												  if(item.accettata==1){
												   $("#pass3").removeClass("custom-pass").addClass("custom-pass2");
												   $("#pass3").removeClass("custom-pass1").addClass("custom-pass2");
												   $("#pass3").removeClass("custom-pass3").addClass("custom-pass2");
												  }
												  else{
												   $("#pass3").removeClass("custom-pass").addClass("custom-pass1");
												   $("#pass3").removeClass("custom-pass2").addClass("custom-pass1");
												   $("#pass3").removeClass("custom-pass3").addClass("custom-pass1");
												  }
												  
												  if(item.accettata==0){
												  $("#blob5").show();
												  for(i=0; i<10000; i++)
												  {
												  window.clearInterval(i);
												  }
												  
												  $("#viaaccetta5").html(item.partenza);
												  
												  function countdown3(minutes) {
												  var seconds = 30;
												  var mins = minutes
												  function tick() {
												  var counter = document.getElementById("timer3");
												  var current_minutes = 0;
												  seconds--;
												  counter.innerHTML =
												  current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
												  if( seconds > 0 ) {
												  setTimeout(tick, 1000);
												  } else {
												  scadutaofferta(0,item.id_richiesta,item.id_autista)
												  $("#blob5").hide();
												  //rifiuta3()
												  //alert("finito");
												  //if(mins > 1){
												  
												  // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
												  //setTimeout(function () { countdown(mins - 1); }, 1000);
												  
												  //}
												  }
												  }
												  tick();
												  }
												  
												  countdown3(0);
												  }
												  else{
												    $("#blob5").hide();
												  }
												  
										
												  
												  }
												  
												  
												  }
												  
												  posizione = (posizione+1);
												  
												  }
												  
												  });

										   },
										   error: function(){
										   
										   
										   },
										   dataType:"jsonp"});
									
									//setTimeout(function() {

										//map.setCenter(centromap);

								    //}, 1000);
			}
																		
			}, 8000);
	
	}
		

 }
	
}


function scadutaofferta(id,id_richiesta,id_autista){
	
	//alert("Scaduta")
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_confermapasseggeroS1.php?conferma="+ id +"&id_richiesta="+ id_richiesta +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
  
				    resetta1(1)
				  }
				  
			});
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   onResume();
		   
		   },
		   dataType:"jsonp"});
}


function magia2C(utente,pass) {
	
	for(i=0; i<10000; i++)
	{
		window.clearInterval(i);
	}
	
	//posizionegps2();
	
	//var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	
	var posizione = 1;
	var distanza = "";
	
	
	var centromap = new google.maps.LatLng(lat, lng, posizione);
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ pass +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  //cambiare icona
				  var icon2 = new google.maps.MarkerImage("img/pin.png", null, null, null, new google.maps.Size(30,40));
				  
				  if(utente==1){
				  stato1 = item.stato
				  localStorage.setItem("id_richietaP1",item.id_richiesta)
				  
				  $("#pass2").hide();
				  $("#pass3").hide();
				  
				  if(item.stato==1){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass2");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass2");
				  }
				  if(item.stato==3){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  marker1.setVisible(true);
				  marker1.setIcon(icon2);
				  
				  var isVisible3 = marker3.getVisible();
				  if(isVisible3){
				  marker3.setVisible(false);
				  }
				  
				  
				  var isVisible4 = marker4.getVisible();
				  if(isVisible4){
				  marker4.setVisible(false);
				  

				  }
				  
				  
				  
				  }
				  
				  if(utente==2){
				  stato2 = item.stato
				  localStorage.setItem("id_richietaP2",item.id_richiesta)
				  $("#pass1").hide();
				  $("#pass3").hide();
				  $("#pass2").show();
				  
				  if(item.stato==1){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass2");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass2");
				  }
				  if(item.stato==3){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  marker1.setVisible(false);
				  
				  marker3.setVisible(true);
				  marker3.setIcon(icon2);
				  
				  var isVisible4 = marker4.getVisible();
				  if(isVisible4){
				  marker4.setVisible(false);
				  }
				  
				  
				  }
				  
				  if(utente==3){
				  stato3 = item.stato
				  localStorage.setItem("id_richietaP3",item.id_richiesta)
				  $("#pass1").hide();
				  $("#pass2").hide();
				  $("#pass3").show();
				  
				  if(item.stato==1){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass2");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass2");
				  }
				  if(item.stato==3){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  marker1.setVisible(false);
				  marker3.setVisible(false);
				  
				  marker4.setVisible(true);
				  marker4.setIcon(icon2);
				  
				  }
				  
				  
				  posizione = (posizione+1);
				  
				  }
				  else{
				  //marker1.setMap(null);
				  }
				  
				  });
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
	
	
	localStorage.setItem("fatto","1")
	
	
	refreshIntervalId33 = setInterval(function() {
									  
									  //var watchID = navigator.geolocation.getCurrentPosition(onSuccess22, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
									  
									  //onSuccess22();
									  
									  var lat = localStorage.getItem("lat");
									  var lng = localStorage.getItem("lng");
									  
									  var posizione = 1;
									  var distanza = "";
									  
									  
									  var centromap = new google.maps.LatLng(lat, lng, posizione);
									  
									  $.ajax({
											 type:"GET",
											 url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ pass +"&id_autista="+ localStorage.getItem("id_autista") +"",
											 //url:"http://purplemiles.com/www2/check_richiesta_autista.php?email="+ localStorage.getItem("email") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"",
											 contentType: "application/json",
											 //data: {ID: "Lazio"}, LIMIT 10
											 timeout: 7000,
											 jsonp: 'callback',
											 crossDomain: true,
											 success:function(result){
											 
											 $.each(result, function(i,item){
													
													if(item.Token==1){
													
													
													if(utente==1){
													stato1 = item.stato
													localStorage.setItem("id_richietaP1",item.id_richiesta)
													
													$("#pass2").hide();
													$("#pass3").hide();
													
													if(item.stato==1){
													$("#pass1").removeClass("custom-pass").addClass("custom-pass1");
													$("#pass1").removeClass("custom-pass2").addClass("custom-pass1");
													$("#pass1").removeClass("custom-pass3").addClass("custom-pass1");
													}
													if(item.stato==0){
													$("#pass1").removeClass("custom-pass1").addClass("custom-pass");
													$("#pass1").removeClass("custom-pass2").addClass("custom-pass");
													$("#pass1").removeClass("custom-pass3").addClass("custom-pass");
													}
													if(item.stato==2){
													$("#pass1").removeClass("custom-pass").addClass("custom-pass2");
													$("#pass1").removeClass("custom-pass1").addClass("custom-pass2");
													$("#pass1").removeClass("custom-pass3").addClass("custom-pass2");
													}
													if(item.stato==3){
													$("#pass1").removeClass("custom-pass").addClass("custom-pass3");
													$("#pass1").removeClass("custom-pass1").addClass("custom-pass3");
													$("#pass1").removeClass("custom-pass2").addClass("custom-pass3");
													}
													}
													
													if(utente==2){
													stato2 = item.stato
													localStorage.setItem("id_richietaP2",item.id_richiesta)
													$("#pass1").hide();
													$("#pass3").hide();
													$("#pass2").show();
													
													if(item.stato==1){
													$("#pass2").removeClass("custom-pass").addClass("custom-pass1");
													$("#pass2").removeClass("custom-pass2").addClass("custom-pass1");
													$("#pass2").removeClass("custom-pass3").addClass("custom-pass1");
													}
													if(item.stato==0){
													$("#pass2").removeClass("custom-pass1").addClass("custom-pass");
													$("#pass2").removeClass("custom-pass2").addClass("custom-pass");
													$("#pass2").removeClass("custom-pass3").addClass("custom-pass");
													}
													if(item.stato==2){
													$("#pass2").removeClass("custom-pass").addClass("custom-pass2");
													$("#pass2").removeClass("custom-pass1").addClass("custom-pass2");
													$("#pass2").removeClass("custom-pass3").addClass("custom-pass2");
													}
													if(item.stato==3){
													$("#pass2").removeClass("custom-pass").addClass("custom-pass3");
													$("#pass2").removeClass("custom-pass1").addClass("custom-pass3");
													$("#pass2").removeClass("custom-pass2").addClass("custom-pass3");
													}
													}
													
													if(utente==3){
													stato3 = item.stato
													localStorage.setItem("id_richietaP3",item.id_richiesta)
													$("#pass1").hide();
													$("#pass2").hide();
													$("#pass3").show();
													
													if(item.stato==1){
													$("#pass3").removeClass("custom-pass").addClass("custom-pass1");
													$("#pass3").removeClass("custom-pass2").addClass("custom-pass1");
													$("#pass3").removeClass("custom-pass3").addClass("custom-pass1");
													}
													if(item.stato==0){
													$("#pass3").removeClass("custom-pass1").addClass("custom-pass");
													$("#pass3").removeClass("custom-pass2").addClass("custom-pass");
													$("#pass3").removeClass("custom-pass3").addClass("custom-pass");
													}
													if(item.stato==2){
													$("#pass3").removeClass("custom-pass").addClass("custom-pass2");
													$("#pass3").removeClass("custom-pass1").addClass("custom-pass2");
													$("#pass3").removeClass("custom-pass3").addClass("custom-pass2");
													}
													if(item.stato==3){
													$("#pass3").removeClass("custom-pass").addClass("custom-pass3");
													$("#pass3").removeClass("custom-pass1").addClass("custom-pass3");
													$("#pass3").removeClass("custom-pass2").addClass("custom-pass3");
													}
													}
													
													
													
													
													posizione = (posizione+1);
													
													}
													else{
													//marker1.setMap(null);
													}
													
													});
											 
											 
											 },
											 error: function(){
											 
											 /*navigator.notification.alert(
											  'Possibile errore di rete, riprova tra qualche minuto.',  // message
											  alertDismissed,         // callback
											  'Attenzione',           // title
											  'Done'                  // buttonName
											  );*/
											 
											 },
											 dataType:"jsonp"});
									  
									  
									  //var lat = localStorage.getItem("lat");
									  //var lng = localStorage.getItem("lng");
									  
									  //var lat = parseFloat("41.8337871");
									  //var lng = parseFloat("12.4757278" );
									  
									  //map.setCenter(centromap);
									  
									  localStorage.setItem("fatto","1")
									  
									  
									  
									  }, 10000);
	
	
	
	//---------------------------
	
	function posizionegps2(){
		
		refreshPos = setInterval(function() {
			var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
			//onSuccess2();
		}, 3000);
	}
	
	function onSuccess22(position) {
			var iconn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
			var icon = new google.maps.MarkerImage("img/autista.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
			
			marker2.setIcon(iconn);
			
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
			
			localStorage.setItem("lat", lat)
			localStorage.setItem("lng", lng)
			
			//var lat = localStorage.getItem("lat");
			//var lng = localStorage.getItem("lng");
			var latlng = new google.maps.LatLng(lat, lng);
			
			marker2.setIcon(icon);
			marker2.setPosition(latlng);
		
		    if(muoviti==1){
			  map.setCenter(latlng);
			  //alert(muoviti);
		    }
			//map.setCenter(latlng);
			
			//localStorage.setItem("lat", ciao)
            //localStorage.setItem("lng", ciao1)
	}
	
	function onSuccess222(position) {
		
		var iconn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
		//marker2.setIcon(iconn);
		
		var posizione = Math.round(position.coords.heading);
		
		if((posizione > 0)&&(posizione <= 10)){
			var icon = new google.maps.MarkerImage("img_autista/car_010.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 10)&&(posizione <= 20)){
			var icon = new google.maps.MarkerImage("img_autista/car_020.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 20)&&(posizione <= 30)){
			//$("#rispondi").html("<img src='img_autista/car_030.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_030.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 30)&&(posizione <= 40)){
			//$("#rispondi").html("<img src='img_autista/car_040.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_040.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 40)&&(posizione <= 50)){
			//$("#rispondi").html("<img src='img_autista/car_050.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_050.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 50)&&(posizione <= 60)){
			//$("#rispondi").html("<img src='img_autista/car_060.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_060.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 60)&&(posizione <= 70)){
			//$("#rispondi").html("<img src='img_autista/car_070.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_070.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 70)&&(posizione <= 80)){
			//$("#rispondi").html("<img src='img_autista/car_080.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_080.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 80)&&(posizione <= 90)){
			//$("#rispondi").html("<img src='img_autista/car_090.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_090.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 90)&&(posizione <= 100)){
			//$("#rispondi").html("<img src='img_autista/car_100.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_100.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 100)&&(posizione <= 110)){
			//$("#rispondi").html("<img src='img_autista/car_110.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_110.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 110)&&(posizione <= 120)){
			//$("#rispondi").html("<img src='img_autista/car_120.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_120.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 120)&&(posizione <= 130)){
			//$("#rispondi").html("<img src='img_autista/car_130.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_130.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 130)&&(posizione <= 140)){
			//$("#rispondi").html("<img src='img_autista/car_140.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_140.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 140)&&(posizione <= 150)){
			//$("#rispondi").html("<img src='img_autista/car_150.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_150.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 150)&&(posizione <= 160)){
			//$("#rispondi").html("<img src='img_autista/car_160.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_160.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 160)&&(posizione <= 170)){
			//$("#rispondi").html("<img src='img_autista/car_170.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_170.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 170)&&(posizione <= 180)){
			//$("#rispondi").html("<img src='img_autista/car_180.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_180.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 180)&&(posizione <= 190)){
			//$("#rispondi").html("<img src='img_autista/car_190.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_190.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 190)&&(posizione <= 200)){
			//$("#rispondi").html("<img src='img_autista/car_200.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_200.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 200)&&(posizione <= 210)){
			//$("#rispondi").html("<img src='img_autista/car_210.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_210.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 210)&&(posizione <= 220)){
			//$("#rispondi").html("<img src='img_autista/car_220.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_220.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 220)&&(posizione <= 230)){
			//$("#rispondi").html("<img src='img_autista/car_230.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_230.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 230)&&(posizione <= 240)){
			//$("#rispondi").html("<img src='img_autista/car_240.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_240.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 240)&&(posizione <= 250)){
			//$("#rispondi").html("<img src='img_autista/car_250.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_250.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 250)&&(posizione <= 260)){
			//$("#rispondi").html("<img src='img_autista/car_260.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_260.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 260)&&(posizione <= 270)){
			//$("#rispondi").html("<img src='img_autista/car_270.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_270.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 270)&&(posizione <= 280)){
			//$("#rispondi").html("<img src='img_autista/car_280.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_280.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 280)&&(posizione <= 290)){
			//$("#rispondi").html("<img src='img_autista/car_290.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_290.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 290)&&(posizione <= 300)){
			//$("#rispondi").html("<img src='img_autista/car_300.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_300.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 300)&&(posizione <= 310)){
			//$("#rispondi").html("<img src='img_autista/car_310.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_310.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 310)&&(posizione <= 320)){
			//$("#rispondi").html("<img src='img_autista/car_320.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_320.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 320)&&(posizione <= 330)){
			//$("#rispondi").html("<img src='img_autista/car_330.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_330.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 330)&&(posizione <= 340)){
			//$("#rispondi").html("<img src='img_autista/car_340.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_340.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else if((posizione > 340)&&(posizione <= 350)){
			//$("#rispondi").html("<img src='img_autista/car_350.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_350.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		else{
			//$("#rispondi").html("<img src='img_autista/car_000.png'>")
			var icon = new google.maps.MarkerImage("img_autista/car_000.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		}
		
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		
		localStorage.setItem("lat", lat)
		localStorage.setItem("lng", lng)
		
		//var lat = localStorage.getItem("lat");
		//var lng = localStorage.getItem("lng");
		var latlng = new google.maps.LatLng(lat, lng);
		
		marker2.setIcon(icon);
		marker2.setPosition(latlng);
		
		if(muoviti==1){
			map.setCenter(latlng);
			//alert(muoviti);
		}
		

	}
	
	
	function onError2(error) {
		//var watchID = navigator.geolocation.watchPosition(onSuccess2, onError3, { timeout: 80000 });
		navigator.geolocation.watchPosition(onSuccess2, onError3, {timeout: 50000, enableHighAccuracy: false, maximumAge: 0 });
	}
	
	function onError3(error) {
		localStorage.setItem("geostory", "NO")
		
		window.location.href = "index.html";
	}
	
	
}


function magia3() {
	var pass = item1;
	$("#blob").hide();
	//magia(1,pass)
}



function cancella(id){
	
	 $.ajax({
	 type:"GET",
	 url:"http://purplemiles.com/www2/check_cancella.php?id="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
	 contentType: "application/json",
	 //data: {ID: "Lazio"}, LIMIT 10
	 timeout: 7000,
	 jsonp: 'callback',
	 crossDomain: true,
	 success:function(result){
	 
	 $.each(result, function(i,item){
		
			if(item.Token==1){
			   // window.location.href = "index.html?id=1";
			
			   /*$("#pass1").hide();
			   $("#pass2").hide();
			   $("#pass3").hide();
			   $("#esci").hide();

			
			$("#btninizia").show();*/
			
			//localStorage.setItem("exitto", "1")
			
			
			for(i=0; i<10000; i++)
			{
			window.clearInterval(i);
			}
			
			//setTimeout(function() {
			//localStorage.setItem("geostory", "NO")
			//clearInterval(refreshIntervalId33);
			//window.location.href = "index.html?id=1";
			//onResume();
			//}, 200);
			
			//window.location.href = "#win2";
			//onDeviceReady();
			
			resetta1(1);
			//window.location.href = "map2.html?id=1";
			
			}
			else{
			 navigator.notification.alert(
										 'Impossibile cancellare la richiesta.',  // message
										  alertDismissed,         // callback
										 'Attenzione',           // title
										 'Done'                  // buttonName
										 );

			}
	 });
	 
	 
	 },
	 error: function(){
	 
	 navigator.notification.alert(
	 'Possibile errore di rete, riprova tra qualche minuto.',  // message
	 alertDismissed,         // callback
	 'Attenzione',           // title
	 'Done'                  // buttonName
	 );
	 
	 },
	 dataType:"jsonp"});
	 
}

function casa(){
	window.location.href = "index.html";
	
	}

function start() {
	//chiamo e setto a 1 lo stato dell'autista (ok lavoro)
	
	$("#setGPS").hide();
	$("#Modifica").hide();
	$("#esci").hide();
	
	$("#btninizia").hide();
	$("#loading").show();
	
	if(localStorage.getItem("setGPS") == 1){
	//resetta1(1);
	 prendivia()
	}
	else
	{
	  resetta1(1);
	}
}


function palla1() {
	//chiamo e leggo=1
	if(localStorage.getItem("exit")=="0"){
	  $("#blob").show();
    }
	$("#btninizia").hide();
	
	
	$("#btnpass").show();
	
	localStorage.setItem("palla1", "1")
	localStorage.setItem("exit", "1")
	
}

function palla2() {

	$("#blob3").show();
	$("#btninizia").hide();
	$("#pass2").show();
	
	localStorage.setItem("palla2", "1")
}

function resetta22() {
	//chiamo e leggo=1
	$("#blob").show();
	$("#btninizia").hide();
	$("#btnpass").show();
	
}

function richiesta1() {
	
	$.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
	
	id = item1
	
	$("#risp1").show();
	$("#risp2").hide();
	$("#gps22").hide();
	$("#risp3").hide();
	$("#gps3").hide();
	
	$("#close3").hide();
	$("#close2").hide();
	$("#close1").show();
	
	$("#code1").hide();
	$("#code1").html("");
	$("#code2").hide();
	$("#code2").html("");
	$("#code3").hide();
	$("#code3").html("");
	
	$("#chat1").hide();
	$("#chat2").hide();
	$("#chat3").hide();
	
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	
				  
				  $("#nickhome4").html("<font color='#fff'>"+ nick1 +"</font>");
				  localStorage.setItem("id_nick", nick1)
				  $("#nickhome3").html("<font color='#fff'>"+ nick1 +"</font>");
				  
				  $("#quando").html("<b>Data: </b><font color='#cc33cc'>"+ quando1 +"</font>, <b>Ora: </b><font color='#cc33cc'>"+ ora1 +"</font>");
				  
				  $("#Da").html("<b>Da: </b><font color='#cc33cc'>"+ partenza1 +"</font>");
				  
				  $("#Ad").html("<b>A: </b><font color='#cc33cc'>"+ arrivo1 +"</font>");
				  
				  $("#distanza").html("<b>Distanza: </b><font color='#cc33cc'>"+ distanza1 +"</font>");
	
	
	              if(stato1==0){
		            $("#4img").html("<img src='img/1_viola.png' width='30'>");
	              }
	
				  if(stato1!=0){
					$("#risp1").hide();
				  }
	
				  if(stato1==1){
					  $("#4img").html("<img src='img/1_giallo.png' width='30'>");
				  }

				  if(stato1==2){
					  
				   $("#gps1").show();
					  
				   $("#code1").show();
				   $("#code1").html("<b>Codice Commento : " + cod1 + "</b>");
					  
				   $("#chat1").show();
					  
				   $("#risp1").hide();
					  
					  $("#close3").hide();
					  $("#close2").hide();
					  $("#close1").hide();
					  
				   $("#4img").html("<img src='img/1_verde.png' width='30'>");
				  
				   $(document).on("tap", "#gps1", function(e){
						
						var addressLongLat = lat1+","+lng1;
	
						window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
						
						$("#blob2").hide();
								 
						e.stopImmediatePropagation();
								 
						e.preventDefault();
								 
						return false;
								 
				   });
				  
				  }
				  else{
					  if(stato1==3){
						  //conteggio dei 30 secondi
					  }
					 
					$("#gps1").hide();
					  
					$("#close1").show();
					$("#close2").hide();
					$("#close3").hide();
					
				  }
	
	
	$("#xchiudi1").show();
	$("#xchiudi2").hide();
	$("#xchiudi3").hide();
	
	$("#xchiudi11").show();
	$("#xchiudi22").hide();
	$("#xchiudi33").hide();
	
	
	$(document).on("touchstart", "#xchiudi1", function(e){
		
		$("#blob2").hide();
		magia2C(1,id)
		
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;

	});
	
	$(document).on("touchstart", "#xchiudi11", function(e){
				   
				   $("#blob2").hide();
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
	});

	$(document).on("touchstart", "#close1", function(e){
		$("#pass1").hide();
				   
		$("#blob2").hide();
		cancella(id)
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;

	});
	
	$(document).on("tap", "#risp1", function(e){
				   
				   $.mobile.changePage ($("#home3"));
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
	});
	
}

function richiesta2() {
	
	$.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
	
	id = item2
	$("#risp1").hide();
	$("#gps1").hide();
	$("#risp2").show();
	$("#risp3").hide();
	$("#gps3").hide();
	
	$("#code1").hide();
	$("#code1").html("");
	$("#code2").hide();
	$("#code2").html("");
	$("#code3").hide();
	$("#code3").html("");
	
	$("#close3").hide();
	$("#close2").show();
	$("#close1").hide();
	
	$("#chat1").hide();
	$("#chat2").hide();
	$("#chat3").hide();
	
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	
				  
				  $("#nickhome4").html("<font color='#fff'>"+ nick2 +"</font>");
				  $("#nickhome3").html("<font color='#fff'>"+ nick2 +"</font>");
				  
				   $("#quando").html("<b>Data: </b><font color='#cc33cc'>"+ quando2 +"</font>, <b>Ora: </b><font color='#cc33cc'>"+ ora2 +"</font>");
				  
				  $("#Da").html("<b>Da: </b><font color='#cc33cc'>"+ partenza2 +"</font>");
				  
				  $("#Ad").html("<b>A: </b><font color='#cc33cc'>"+ arrivo2 +"</font>");
				  
				  $("#distanza").html("<b>Distanza: </b><font color='#cc33cc'>"+ distanza2 +"</font>");
	
	
				  if(stato2==0){
					 $("#4img").html("<img src='img/2_viola.png' width='30'>");
				  }
	
				  if(stato2!=0){
					$("#risp2").hide();
				  }
	
				  if(stato2==1){
					 $("#4img").html("<img src='img/2_giallo.png' width='30'>");
				  }
	
				  if(stato2==2){
					  
				   $("#gps22").show();
				   $("#risp2").hide();
					  
				   $("#code2").show();
				   $("#code2").html("<b>Codice Commento : " + cod2 + "</b>");
					  
				   $("#4img").html("<img src='img/2_verde.png' width='30'>");
					  
				   $("#chat2").show();
					  
					  $("#close3").hide();
					  $("#close2").hide();
					  $("#close1").hide();
				  
					  $(document).on("tap", "#gps22", function(e){

								 var addressLongLat = lat2+","+lng2;

	                            window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
	
								 $("#blob2").hide();
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
						});
				  
				  }
				  else{
					$("#rif2").html("Rifiuta");
					  
					  $("#close2").show();
					  $("#close1").hide();
					  $("#close3").hide();
				  }



	
	$("#xchiudi2").show();
	$("#xchiudi1").hide();
	$("#xchiudi3").hide();
	
	$("#xchiudi22").show();
	$("#xchiudi11").hide();
	$("#xchiudi33").hide();
	
	$(document).on("touchstart", "#xchiudi2", function(e){

				   $("#blob2").hide();
				   magia2C(2,id)
				   
				   });
	
	$(document).on("touchstart", "#xchiudi22", function(e){
				   
				   $("#blob2").hide();
				   
	});

	$(document).on("touchstart", "#close2", function(e){
	$("#pass2").hide();
	$("#blob2").hide();
	cancella(id)
	
		
	e.stopImmediatePropagation();
		
	e.preventDefault();
		
	return false;
	});
	
	$(document).on("touchstart", "#risp2", function(e){
				   $("#blob2").hide();
				    $.mobile.changePage ($("#home3"));
				   
				   });
	
}

function richiesta3() {
	
	$.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
	
	
	id = item3
	$("#risp3").show();
	$("#risp2").hide();
	$("#gps22").hide();
	$("#risp1").hide();
	$("#gps1").hide();
	
	$("#close3").show();
	$("#close2").hide();
	$("#close1").hide();
	
	$("#code1").hide();
	$("#code1").html("");
	$("#code2").hide();
	$("#code2").html("");
	$("#code3").hide();
	$("#code3").html("");
	
	$("#chat1").hide();
	$("#chat2").hide();
	$("#chat3").hide();
	
	//alert(2)
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	

				  $("#nickhome4").html("<font color='#fff'>"+ nick3 +"</font>");
				  $("#nickhome3").html("<font color='#fff'>"+ nick3 +"</font>");
				  
				   $("#quando").html("<b>Data: </b><font color='#cc33cc'>"+ quando3 +"</font>, <b>Ora: </b><font color='#cc33cc'>"+ ora3 +"</font>");
				  
				  $("#Da").html("<b>Da: </b><font color='#cc33cc'>"+ partenza3 +"</font>");
				  
				  $("#Ad").html("<b>A: </b><font color='#cc33cc'>"+ arrivo3 +"</font>");
				  
				  $("#distanza").html("<b>Distanza: </b><font color='#cc33cc'>"+ distanza3 +"</font>");
	
	if(stato3==0){
		$("#4img").html("<img src='img/3_viola.png' width='30'>");
	}
	
				  if(stato3!=0){
				    $("#risp3").hide();
				  }
	
	if(stato3==1){
		$("#4img").html("<img src='img/3_giallo.png' width='30'>");
	}
	
	
				  if(stato3==2){
				  $("#gps3").show();
				  $("#risp3").hide();
				  $("#code3").show();
					  
				  $("#code3").html("<b>Codice Commento : " + cod3 + "</b>");
				  $("#chat3").show();
					  
				  $("#4img").html("<img src='img/3_verde.png' width='30'>");
				  
				  $("#close3").hide();
				  $("#close2").hide();
				  $("#close1").hide();
				  
				  $(document).on("tap", "#gps3", function(e){

						var addressLongLat = lat3+","+lng3;
	
	
	                             window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
	
								 $("#blob2").hide();
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
						 });
				  
				  }
				  else{
				    $("#rif3").html("Rifiuta");
					  
				  }
				  
				 
	
	
	$("#xchiudi3").show();
	$("#xchiudi2").hide();
	$("#xchiudi1").hide();
	
	$("#xchiudi33").show();
	$("#xchiudi22").hide();
	$("#xchiudi11").hide();
	
	
	$(document).on("tap", "#xchiudi3", function(e){
		$("#blob2").hide();
		magia2C(3,id)

	});
	
	$(document).on("tap", "#xchiudi33", function(e){
			$("#blob2").hide();
				   
		});
	
	$(document).on("tap", "#close3", function(e){
				   $("#pass3").hide();
				   $("#blob2").hide();
				   
				   cancella(id)

				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;

				   });
	
	$(document).on("tap", "#risp3", function(e){
				   $("#blob2").hide();
				   $.mobile.changePage ($("#home3"));

				   });
	
}

function lista5() {
	
	$.mobile.changePage( "#home5", { transition: "slide", changeHash: false });

	$("#nickhome5").html(localStorage.getItem("nick"));
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_stato2.php?id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  $("#offerte5").html("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><div class='custom-pass22'><font color='#fff' size='4'>"+ item.nick +"</font></div></tr><tr><td align='left'><font color='#cc33cc' size='5'><b><div id='timer2'></div></b></font><br><b>Prezzo: </b>"+ item.importo +"<br><b>Quando: </b>"+ item.quando +"<br><b>Ora: </b>"+ item.ora +"<br><br><b>Partenza: </b>"+ item.partenza +"<br><b>Arrivo: </b>"+ item.arrivo +"</td></tr></table>");
				  }
				  else{
					 $("#offerte5").html("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><img src='img/Logo.png' width='160px'><br></td></tr><tr><td align='center'>Nessuna Richiesta Posticipata<br></td></tr></table>")
				  }
			});
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   onResume();
		   
		   },
		   dataType:"jsonp"});
	
	
	
	

}

// ACCETTA - RIFIUTA


function accetta11() {
	id = item1
	$("#blob3").hide();
	$("#loading").show();
	$("#esci").hide();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_accettaautista.php?id="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				   //alert(item.Token)
				  
				    resetta1(1);
				  
				  }
				  else{
				    navigator.notification.alert(
											   'Richiesta elaborata da altro utente.',  // message
											   alertDismissed,         // callback
											   'Attenzione',           // title
											   'Done'                  // buttonName
											   );
				  
				  }
			});
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	}


function rifiuta1() {
	id = item1
	
	
	$("#blob3").hide();
	cancella(id)
	
}

function accetta22() {
	id = item2
	
	$("#blob4").hide();
	$("#loading").show();
	$("#esci").hide();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_accettaautista.php?id="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  //alert(item.Token)
				  
				  resetta1(1);
				  
				  }
				  else{
				    navigator.notification.alert(
											   'Richiesta elaborata da altro utente.',  // message
											   alertDismissed,         // callback
											   'Attenzione',           // title
											   'Done'                  // buttonName
											   );
				  
				  }
				  });
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
	
}

function accetta33() {
	id = item3
	
	$("#blob5").hide();
	$("#loading").show();
	$("#esci").hide();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_accettaautista.php?id="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  //alert(item.Token)
				  
				  resetta1(1);
				  
				  }
				  else{
				    navigator.notification.alert(
											   'Richiesta elaborata da altro utente.',  // message
											   alertDismissed,         // callback
											   'Attenzione',           // title
											   'Done'                  // buttonName
											   );
				  
				  }
				  });
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
	
}



function rifiuta2() {
	id = item2
	
	
	$("#blob4").hide();
	cancella(id)
	
}

function rifiuta3() {
	id = item3
	
	
	$("#blob5").hide();
	cancella(id)
	
}





function inviopasseggero(come){
	
	if(come==1){
	  var coming = "gratis"
	}
	
	if(come==3){
		if (self.document.formia.soldini.value == "") {
			navigator.notification.alert(
										 'inserire un importo',  // message
										 alertDismissed,         // callback
										 'Pin',            // title
										 'OK'                  // buttonName
										 );
			return;
		}

		
		var coming = self.document.formia.soldini.value;
	}
	
	if(come==2){
		var coming = "offerta";
	}
	
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_inviopasseggero.php?id="+ localStorage.getItem("id_richiesta") +"&note=note&importo="+ coming +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){

				  //for(i=0; i<10000; i++)
				  //{
				  //window.clearInterval(i);
				  //}
				  
				  //setTimeout(function() {
				  //localStorage.setItem("geostory", "NO")
				  //clearInterval(refreshIntervalId33);
				  //window.location.href = "index.html?id=1";
				  //onResume();
				  //}, 200);
				  
				  //window.location.href = "#win2";
				  //onDeviceReady();
				  
				  $.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
				  
				  e.stopImmediatePropagation();
				  
				  e.preventDefault();
				  
				  alert("ok");
				  
				  
				  
				  //window.location.href = "map2.html?id=1";
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Impossibile elaborare la richiesta.',  // message
											   alertDismissed,         // callback
											   'Attenzione',           // title
											   'Done'                  // buttonName
											   );
				  
				  }
				  });
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}


function chiudix() {
	
	$("#blob2").hide();
}


function chiudi22(id) {
	
		$("#blob").hide();
}



function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
						  }