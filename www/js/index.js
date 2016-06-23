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
	
	
	$(document).bind("mobileinit", function(){
		$.mobile.defaultDialogTransition = "none";
		$.mobile.defaultPageTransition = "none";
	});
	
	
	window.plugins.insomnia.keepAwake();
	
	//navigator.geolocation.getCurrentPosition(gpsonSuccess, gpsonError, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
	//ANDROID -------------------------------------------------------
	
	document.addEventListener('backbutton', function(e) {
	 if(localStorage.getItem("pagina")=="mappa"){
		
		localStorage.setItem("dovesono", "0")
							  
		window.location.href = "index.html";
	  
	  }
							  
	  if(localStorage.getItem("pagina")=="1"){
	
			navigator.notification.confirm(
			'Vuoi chiudere purple miles?',  // message
			 onConfirm2,              // callback to invoke with index of button pressed
			'Spegni',            // title
			'Spegni,Annulla'      // buttonLabels
		    );
							  
	   }
							  
	   if(localStorage.getItem("pagina")=="magia"){
			var connectionStatus = false;
			connectionStatus = navigator.onLine ? 'online' : 'offline';
							  
			if(connectionStatus=='online'){
							  
				$("#magia").hide();
							  
				resetta1(1);
			}
			else
			{
				window.location.href = "index.html";
			}
							  
		}
							  
		if(localStorage.getItem("pagina")=="chat"){
			$("#tblchat").hide()
			$.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
							  
			for(i=0; i<10000; i++)
			{
				window.clearInterval(i);
			}
							  
			setTimeout(function() {
				//resetta1(1);
					   
				window.location.href = "index.html?id=2";
				
			}, 500);
							  
			

		}
							  
							  
		e.stopImmediatePropagation();
							  
		e.preventDefault();
							  
		return false;
							  
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	 
	 
	}, false);
	
	
	
	//----------------------------------------------------------------
	
	localStorage.setItem("pagina","1");
	
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
		//controllachat(1)
		
		
		localStorage.setItem("chatpass", "")
			
		playAudioA('successSound');
		
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
	
		$(document).on("tap", "#esciapp", function(e){
				   
		  playAudio('successSound');
				   
	   	  e.stopImmediatePropagation();
				   
		  e.preventDefault();
				   
		  return false;
				   
		   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});

	function playAudioA(id) {
		var audioElement = document.getElementById(id);
		var url = audioElement.getAttribute('src');
		var my_media = new Media(url,
				// success callback
				 function () { console.log("playAudio():Audio Success"); },
				// error callback
				 function (err) { console.log("playAudio():Audio Error: " + err); }
		);
			   // Play audio
		my_media.play();
		
		setTimeout(function() {
		   my_media.stop();
		}, 3000);
	}
	
	//localStorage.setItem("lat", "41.889191")
	//localStorage.setItem("lng", "12.492475")
	
	
	var altezzatbl = getRealContentHeight()-80;
	var height = getRealContentHeight()-80;
	$("#tblhome").attr("height",height);
	$("#tblhome3").attr("height",height);
	
	
	var email = localStorage.getItem("email");
	
	
	if (localStorage.getItem("email") === null || localStorage.getItem("email")=="null" || typeof(localStorage.getItem("email")) == 'undefined' || localStorage.getItem("email")==0 || localStorage.getItem("email")=="") {
		
		window.location.href = "Login.html";
		
	}
	
	if (localStorage.getItem("veicolo") === null || localStorage.getItem("veicolo")=="null" || typeof(localStorage.getItem("veicolo")) == 'undefined' || localStorage.getItem("veicolo")==0 || localStorage.getItem("veicolo")=="") {
		
		localStorage.setItem("veicolo", "6");
		
	}
	
	var IDPage;
	var ODPage;
	
	
	IDPage = getParameterByName('id');
	ODPage = getParameterByName('od');
	
	
	localStorage.setItem("palla1", "0")
	localStorage.setItem("palla2", "0")
	localStorage.setItem("palla3", "0")

	//alert(localStorage.getItem("palla1"))
	
	/*if(IDPage!=1){
	  localStorage.setItem("exit", "0")
	}*/
	
	$("#tblhome").html('<table id="tblhome" width="90%" height="'+ altezzatbl +'" border="0" valign="center" align="center" class="tabella"><tr height="48%"><td width="100%" align="center"><a id="mappa6" href="#" rel="external" class="hvr-wobble-vertical"><img src="img/Volante.png" width="120px"></a><p class="testo_sottotitolo">voglio essere AUTISTA</p><table><tr><td><table id="profiloperc" class="tabella1"><tr><td><font color="#FFF" size="4" class="testo_bianco">Profilo '+ localStorage.getItem("perc_autista") +'%</font></td></tr></table></td><td><div id="stelleautista"></div></td></tr></table></td></tr><tr height="2%"><td width="70%" align="center"><table width="70%"><tr><td><hr></td></tr></table></td></tr><tr height="48%"> <td width="100%" align="center"><a id="mappa7" href="#" rel="external" class="hvr-wobble-vertical"><img src="img/Valigia.png" width="120px"></a><p class="testo_sottotitolo">voglio essere PASSEGGERO</p><table><tr><td><table id="profiloperc2" class="tabella1"><tr><td><font color="#FFF" size="4" class="testo_bianco">Profilo '+ localStorage.getItem("perc_pass") +'%</font></td></tr></table></td><td><div id="stellepass"></div></td></tr></table></td> </tr><tr height="10%"> <td width="100%" align="center"></td></tr></table>')
	
	$("#nickhome").html(localStorage.getItem("nick"));
	$("#nickhome3").html(localStorage.getItem("nick"));
	
	
	setTimeout(function() {
	  $("#tblhome").fadeIn(1500)
	}, 500);
	
	
	//$("body").css("display", "none");
	
	//$("body").fadeIn(1500);

	
	//STELLE
	if(parseFloat(localStorage.getItem("stelleautista"))==0){
		$("#stelleautista").html("<img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	
	else if(parseFloat(localStorage.getItem("stelleautista"))>0 && parseFloat(localStorage.getItem("stelleautista"))<=0.9){
		$("#stelleautista").html("<img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}

	else if(parseFloat(localStorage.getItem("stelleautista"))>=1 && parseFloat(localStorage.getItem("stelleautista"))<=1.4){
		$("#stelleautista").html("<img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if(parseFloat(localStorage.getItem("stelleautista"))>1.4 && parseFloat(localStorage.getItem("stelleautista"))<=1.9){
		$("#stelleautista").html("<img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	
	else if (parseFloat(localStorage.getItem("stelleautista"))>=2 && parseFloat(localStorage.getItem("stelleautista"))<=2.4) {
		$("#stelleautista").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stelleautista"))>2.4 && parseFloat(localStorage.getItem("stelleautista"))<=2.9) {
		$("#stelleautista").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stelleautista"))>=3 && parseFloat(localStorage.getItem("stelleautista"))<=3.4) {
		$("#stelleautista").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stelleautista"))>3.4 && parseFloat(localStorage.getItem("stelleautista"))<=3.9) {
		$("#stelleautista").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stelleautista"))>=4 && parseFloat(localStorage.getItem("stelleautista"))<=4.4) {
		$("#stelleautista").html(ratio = "<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stelleautista"))>4.4 && parseFloat(localStorage.getItem("stelleautista"))<=4.9) {
		$("#stelleautista").html(ratio = "<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stelleautista"))>=5) {
		$("#stelleautista").html(ratio = "<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'>")
	}
	
	
	$(document).on("tap", "#stelleautista", function(e){
				   
		var ref = cordova.InAppBrowser.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
	});
	
	if(parseFloat(localStorage.getItem("stellepass"))==0){
		$("#stellepass").html("<img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	
	else if(parseFloat(localStorage.getItem("stellepass"))>0 && parseFloat(localStorage.getItem("stellepass"))<=0.9){
		$("#stellepass").html("<img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	
	else if(parseFloat(localStorage.getItem("stellepass"))>=1 && parseFloat(localStorage.getItem("stellepass"))<=1.4){
		$("#stellepass").html("<img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if(parseFloat(localStorage.getItem("stellepass"))>1.4 && parseFloat(localStorage.getItem("stellepass"))<=1.9){
		$("#stellepass").html("<img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	
	else if (parseFloat(localStorage.getItem("stellepass"))>=2 && parseFloat(localStorage.getItem("stellepass"))<=2.4) {
		$("#stellepass").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stellepass"))>2.4 && parseFloat(localStorage.getItem("stellepass"))<=2.9) {
		$("#stellepass").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stellepass"))>=3 && parseFloat(localStorage.getItem("stellepass"))<=3.4) {
		$("#stellepass").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stellepass"))>3.4 && parseFloat(localStorage.getItem("stellepass"))<=3.9) {
		$("#stellepass").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stellepass"))>=4 && parseFloat(localStorage.getItem("stellepass"))<=4.4) {
		$("#stellepass").html(ratio = "<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stellepass"))>4.4 && parseFloat(localStorage.getItem("stellepass"))<=4.9) {
		$("#stellepass").html(ratio = "<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'>")
	}
	else if (parseFloat(localStorage.getItem("stellepass"))>=5) {
		$("#stellepass").html(ratio = "<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'>")
	}
	
	
	$(document).on("tap", "#stellepass", function(e){
				   
		var ref = cordova.InAppBrowser.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
	});
	
	//_system
	
	
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
	var tempo;
	
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
	var passeggeri1;
	var animali1;
	var fumatori1;
	var meno181;
	var disabili1;
	var bambini1;
	var wifi1;
	var portapacchi1;
	var rimorchio1;
	var bluetooth1;
	var id_utente_pass1;
	var note1;
	var percentuale1;
	var rating1;
	var cell1;
	
	
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
	var passeggeri2;
	var animali2;
	var fumatori2;
	var meno182;
	var disabili2;
	var bambini2;
	var wifi2;
	var portapacchi2;
	var rimorchio2;
	var bluetooth2;
	var id_utente_pass2;
	var note2;
	var percentuale2;
	var rating2;
	var cell2;
	
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
	var passeggeri3;
	var animali3;
	var fumatori3;
	var meno183;
	var disabili3;
	var bambini3;
	var wifi3;
	var portapacchi3;
	var rimorchio3;
	var bluetooth3;
	var id_utente_pass3;
	var note3;
	var percentuale3;
	var rating3;
	var cell3;
	
	var muoviti;
	var setGPS;
	localStorage.setItem("setGPS","0")
	localStorage.setItem("muoviti","1")
	
	var watchID = null;
	var watchID2 = null;
	var watchID5 = null;
	
	$(document).on("tap", "#exitapp", function(e){
		
		for(i=0; i<10000; i++)
		{
			window.clearInterval(i);
		}
				   
				   navigator.notification.confirm(
							'Confermi di voler chiudere',  // message
							onConfirm2,              // callback to invoke with index of button pressed
							'Exit',            // title
							'Si,No'      // buttonLabels
					);
				   
		e.stopImmediatePropagation();
				   
		e.preventDefault();
		
	});
	
	function onConfirm2(button) {
		if(button==1){    //If User selected No, then we just do nothing
			
			for(i=0; i<10000; i++)
			{
				window.clearInterval(i);
		    }
			
			
			navigator.app.exitApp();
			
			//navigator.device.exitApp();
			
			e.stopImmediatePropagation();
			
			e.preventDefault();
			
			return;
		}
		
	}
	
	$(document).on("tap", "#prova", function(e){
				   if(localStorage.getItem("pagina")=="1"){
				   
				   navigator.notification.confirm(
												  'Vuoi chiudere purple miles?',  // message
												  onConfirm2,              // callback to invoke with index of button pressed
												  'Spegni',            // title
												  'Spegni,Annulla'      // buttonLabels
												  );
				   
				   }
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
				   });
	
	
	$(document).on("touchstart tap", "#profiloperc", function(e){
				   
		  //alert(localStorage.getItem("lingua"))
				   
		  var ref = cordova.InAppBrowser.open('http://www.purplemiles.com/www/profile.php?lang='+ localStorage.getItem("lingua") +'&id='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
	   	  e.stopImmediatePropagation();
				   
		  e.preventDefault();
				   
		  return false;
				   
		   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart tap", "#profiloperc2", function(e){
				   
		  var ref = cordova.InAppBrowser.open('http://www.purplemiles.com/www/profile.php?lang='+ localStorage.getItem("lingua") +'&id='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
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
	
	
	$(document).on("touchstart tap", "#pass1", function(e){
				   richiesta1()
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#pass2", function(e){
				   richiesta2()
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	$(document).on("touchstart tap", "#pass3", function(e){
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
                   localStorage.setItem("tastiera","0")
				   localStorage.setItem("pagemodifica","1")
				   
				   
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
		localStorage.setItem("ritornaweb","0")
				   
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
	
	$(document).on("touchstart tap", "#indietro6", function(e){
		$("#tblchat").hide()
		$.mobile.changePage( "#home4", { transition: "slide", changeHash: false, reverse: true });
				   
				   
		/*for(i=0; i<10000; i++)
		{
			window.clearInterval(i);
		}
				   
		window.location.href = "index.html?id=2";*/

				   
	});
	
    
	$(document).on("touchstart", "#resetta", function(e){
		window.location.href = "index.html";
	});
	
	$(document).on("touchstart tap", "#mappa7", function(e){
		localStorage.setItem("dovesono", "3");
		window.location.href = "mappass.html";
		
		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#mappa6", function(e){
      localStorage.setItem("tastiera","0")
				   
	  localStorage.setItem("pagina","mappa")
		
	  var connectionStatus = false;
	  connectionStatus = navigator.onLine ? 'online' : 'offline';
				   
	  if(connectionStatus=='online'){
		setTimeout(function() {
			resetta1();
		}, 300);
	  }
	  else
	  {

	  }
				   
	  e.stopImmediatePropagation();
				   
	  e.preventDefault();
				   
	 return false;
				   
	 if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
				   
	});
	
	$(document).on("touchstart tap", "#tornareset", function(e){
				   
				   var connectionStatus = false;
				   connectionStatus = navigator.onLine ? 'online' : 'offline';
				   
				   if(connectionStatus=='online'){
				   
				   $("#magia").hide();
				   
				   resetta1(1);
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
	
	$(document).on("touchstart tap", "#ChiudiXX2", function(e){
				   
				   $("#blobstart").hide();
				   
				   /*navigator.notification.confirm(
					'Vuoi disconnetterti come utente '+ localStorage.getItem("nick") +'',  // message
					onConfirm,              // callback to invoke with index of button pressed
					'Logout',            // title
					'Conferma,Annulla'      // buttonLabels
					);*/
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
				   });
	
	
	$(document).on("touchstart tap", "#ChiudiXXblob", function(e){
				   
				   $("#blob").hide();
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	
	$(document).on("touchstart tap", "#ChiudiXX", function(e){
				   
				   $("#blobstart").show();
				   
				   /*navigator.notification.confirm(
								'Vuoi disconnetterti come utente '+ localStorage.getItem("nick") +'',  // message
								onConfirm,              // callback to invoke with index of button pressed
								'Logout',            // title
								'Conferma,Annulla'      // buttonLabels
								);*/
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart tap", "#logout", function(e){
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
            localStorage.setItem("email2", "");
            localStorage.setItem("emailpass", "");
            localStorage.setItem("id_autista", "");
            localStorage.setItem("nick", "");
            localStorage.setItem("id_pass", "");
            localStorage.setItem("nickpass", "");
            
            localStorage.setItem("stelleautista", "");
            localStorage.setItem("stellepass", "");
            localStorage.setItem("md5", "");
            localStorage.setItem("perc_autista", "");
            localStorage.setItem("perc_pass", "");
            localStorage.setItem("id_utente", "");
            
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
	
	$(document).on("touchstart tap", "#XXX", function(e){
				   
		localStorage.setItem("dovesono", "0")
				   
		window.location.href = "index.html";
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#XX3", function(e){
		$.mobile.changePage ($("#win2"));
	    resetta1(1);
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#inizia", function(e){
					$('#modificastart').blur()
				    $('#inizia').blur()
				   
				   if(localStorage.getItem("setGPS") == 1){
				   
				     if (document.getElementById("modificastart").value == "") {
				         navigator.notification.alert(
												'Inserire un indirizzo valido o utilizzare la posizione GPS',  // message
												alertDismissed,         // callback
												'Indirizzo',            // title
												'OK'                  // buttonName
												);
				   
				         return;
				       }
				   }
				   

				   localStorage.setItem("pagina","inizia")
				   
				   setTimeout(function() {
						start();
				   }, 500);
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#back3", function(e){
		inviopasseggero(3);
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	

	
	$(document).on("touchstart tap", "#back4", function(e){
		inviopasseggero(3);
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#back6", function(e){
				   $("#spinner6").show();
				   
				   inviachat()
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart tap", "#xchiudi", function(e){
		chiudix();
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	$(document).on("touchstart tap", "#gratis", function(e){
		          inviopasseggero(1);
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#offerta", function(e){
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
	
	$(document).on("touchstart", "#ricarica1", function(e){
				   centragps();
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	

	if(IDPage==1){
		resetta1(1);
	}
	
	//alert(IDPage)
	
	if(IDPage==2){
		$("#mappa6").tap();
	}
	
	$(document).keydown(function (eventObj){
		getKey(eventObj);
    });
	

	
	/*if(IDPage==2){
		window.location.href = "#win2";
		resetta2();
	}*/
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
	controlText.innerHTML = '<table width="100%" border="0" class="tblmappa6"><td align="right" valign="center">&nbsp;<br><br></td></tr><tr><td align="center" width="100%"><br><a id="btnGPS" href="#" data-role="button" data-theme="b" class="custom-btnGPS"><font color="#fff"><b>GPS</b></font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="Modifica" href="#" data-role="button" data-theme="b" class="custom-btn3"><font color="#fff"><b>Modifica<b></font></a></td></tr></table><table border="0" width="100%" align="right" valign="top" class="bannertbl3"><tr><td align="right" valign="top">&nbsp;&nbsp;<a id="XXX" href="#" rel="external"><img src="img/ico_close1.png" width="45px"></a></td></tr></table><table border="0" width="100%" align="center" valign="center" class="bannertbl4"><tr><td align="center" valign="center">&nbsp;<br></td></tr></table><table border="0" width="100%" align="center" valign="center" class="bannertbl5"><tr><td align="center" valign="center">&nbsp;<font size="4" color="#fff"><div id="#" valign="center"><b>Posizione dell\'autista</b><br></div></font><br></td></tr></table>';
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
	controlText.innerHTML = '<table width="100%" border="0" class="xalto"><tr><td align="right">&nbsp;<br><br></td></tr></table><table border="0" width="100%" align="right" valign="top" class="bannertbl3"><tr><td align="right" valign="top">&nbsp;&nbsp;<a id="XXX" href="#" rel="external"><img src="img/ico_close1.png" width="45px"></a></td></tr></table>';
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
	
 if(localStorage.getItem("pagemodifica")=="1"){
	 if ( key == null ) {
		 keycode = event.keyCode;
		 
	 } else {
		 keycode = key.keyCode;
	 }
	 
	 if (keycode ==13){
		 
		 
		setTimeout(function() {
		   $("#inizia").tap();
		}, 200);

	 }

 }
	
	
 if(localStorage.getItem("tastiera")=="1"){
	if ( key == null ) {
		keycode = event.keyCode;
		
	} else {
		keycode = key.keyCode;
	}
	
	if (keycode ==13){
 
		if(localStorage.getItem("tastiera")=="1"){
          setTimeout(function() {
		    inviopasseggero(3);
	      }, 200);
		}
	}
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


function codeLatLng2(lati,lngi) {
	var geocoder;
	geocoder = new google.maps.Geocoder();

	var lat = parseFloat(lati);
	var lng = parseFloat(lngi);
	
	
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
					 
					 localStorage.setItem("tuaposizione", indirizzo)
					 
					 //alert(indirizzo)
					 
					 
					 }
					 
					 } else {
						
					 
					 
					 }
					 
					 if(results[1]){
					 
						var cittaa = results[1].formatted_address;
						var mySplitResult1 = cittaa.split(",");
					 
						localStorage.setItem("Citta", mySplitResult1[1].replace(/[0-9]/g, ''))

						
						citta = mySplitResult1[1].replace(/[0-9]/g, '')

						
					 }
					 

				   //localStorage.setItem("tuaposizione", indirizzo)

		 });
	
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
			'Inserire un indirizzo valido o utilizzare la posizione GPS',  // message
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
	//app.initialize();
	$("#blob5").hide();
	$("#blob4").hide();
	$("#blob3").hide();
	
	if(localStorage.setItem("ritornaweb")!="1"){
	
	for(i=0; i<10000; i++)
	{
		window.clearInterval(i);
	}
	
	if(localStorage.getItem("dovesono")=="1"){
	
	  setTimeout(function() {
	   resetta1(1);
	  }, 700);
	
    }

	}
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
	localStorage.setItem("pagemodifica","0")
	localStorage.setItem("ritornaweb","0")
	localStorage.setItem("fatto","0")
	localStorage.setItem("dovesono", "1")
	
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
	  }, 1000);

	
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
		
    //codeLatLng2(lat,lng)
		
		var geocoder;
		geocoder = new google.maps.Geocoder();
		
		var lat = parseFloat(lat);
		var lng = parseFloat(lng);
		
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
						 
						 localStorage.setItem("tuaposizione", indirizzo)
						 
						 //alert(indirizzo)
						 
						 
						 }
						 
				}
						 
						 
	  });
		
		
	
	
	beaches.push(['Tua Posizione',lat,lng,1,0,0])
	
	//alert("http://purplemiles.com/www2/check_richiesta_autista.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"");
		
		var myLatLng = new google.maps.LatLng(lat, lng, 1);
		
		var gradi = localStorage.getItem("gradi");
		
		var icon = new google.maps.MarkerImage("img/autista.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50,50));
		
		//alert(localStorage.getItem("tuaposizione"))
		
		
		marker2 = new google.maps.Marker ({
										  map : map,
										  icon: icon,
										  optimized: false,
										  position : myLatLng,
										  content:'<div class="popup">'+ localStorage.getItem("tuaposizione") +'</div>',
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
		
		marker5 = new google.maps.Marker ({
										  map : map,
										  icon: iconnn,
										  optimized: false,
										  position : myLatLng,
										  content:'<div class="popup">Posizione di arrivo</div>',
										  title: '',
										  //label: ''+ beach[1] +','+ beach[2] +'',
										  zIndex: -12
										  });
		
		google.maps.event.addListener(marker5, 'click', function() {
									  
									  infowindow.setContent(this.content);
									  infowindow.open(map, this);
									  
									  });
		
		
		
		
			/*INSERT TAP PROLUNGATO*/
			
			google.maps.event.addListener(map, 'click', function(e) {
			   placeMarker(e.latLng, map);
										  
				//codeLatLng2(e.latLng)
										  
			});
			
			
			function placeMarker(position, map) {
				
				//if(localStorage.getItem("tappato")=="0"){
				  if(localStorage.getItem("setGPS") == 1){
					//if (isTabHolded){
						var icon = new google.maps.MarkerImage("img/autista.png", null, null, new google.maps.Point(30, 30), new google.maps.Size(60,60));
						
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
					//}
				 }
			   //}
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
		$("#lista").hide();
        
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;//January is 0, so always add + 1
        
        var ora = today.getHours()
        if(ora<10){ora="0"+ora}
        
        var minuti = today.getMinutes();
        if(minuti<10){minuti="0"+minuti}
        
        var secondi = today.getSeconds();
        if(secondi<10){secondi="0"+secondi}
        
        
        var yyyy = today.getFullYear();
        if(dd<10){dd="0"+dd}
        if(mm<10){mm="0"+mm}
        today = dd+'/'+mm+'/'+yyyy;
        
        $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
        var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
        
        localStorage.setItem("ora_cell", ora_cell);
		
		
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
		
		$("#loading").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autistaV4.php?email="+ localStorage.getItem("email") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"&fuso="+ localStorage.getItem("citta") +"&ora_cell="+ localStorage.getItem("ora_cell") +"",
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
				  
				  
				  $("#pass0").show();
				  //$("#pass1").show();
				  //$("#esci").show();
				  if(item.posticipata==1){
					$("#lista").show();
				  }
				  
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
				  
				  if(item.posticipata==1){
				    $("#lista").show();
				  }
				  
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
				  
				  if(item.posticipata==1){
				    $("#lista").show();
				  }
				  
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
		
		tempo = 0;
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
            
			//window.location.href = "index.html";
        }
		
		
function posizionegps(){

	refreshPos = setInterval(function() {

		var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });

	}, 3000);
}
	
	
function timer(){
	
	refreshIntervalId = setInterval(function() {
	
									
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
									
	if(connectionStatus=='online'){
									
									setTimeout(function() {
										controllachat(2);
									}, 3000);
									
									
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
									localStorage.setItem("ritornaweb","0")
									
									beaches1.push([document.getElementById("modificastart").value,lat,lng,1,0,0,0])
									
									var centromap = new google.maps.LatLng(lat, lng, posizione);
									
									$.ajax({
										   type:"GET",
										   url:"http://purplemiles.com/www2/check_richiesta_autistaV4.php?email="+ localStorage.getItem("email") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"&fuso="+ localStorage.getItem("citta") +"&ora_cell="+ localStorage.getItem("ora_cell") +"",
										   contentType: "application/json",
										   //data: {ID: "Lazio"}, LIMIT 10
										   timeout: 7000,
										   jsonp: 'callback',
										   crossDomain: true,
										   success:function(result){
                                           
                                           if(localStorage.getItem("tutteleofferte")===JSON.stringify(result)){
                                           
                                           }
                                           else{
											  if (localStorage.getItem("tutteleofferte")!="null" || typeof(localStorage.getItem("tutteleofferte")) != 'undefined' || localStorage.getItem("tutteleofferte")!=0 || localStorage.getItem("tutteleofferte")!="") {
										   
                                                   playAudio('successArrivo');
										   
										      }

                                           }
											   
											marker1.setIcon(iconn);
											marker3.setIcon(iconn);
											marker4.setIcon(iconn);
                                           
                                            localStorage.setItem("tutteleofferte", JSON.stringify(result))

										   
										   $.each(result, function(i,item){
												  
												  
												  if(item.Token==3){
												  $("#pass1").hide();
												  $("#pass2").hide();
												  $("#pass3").hide();
												  $("#pass0").show();
												  }
												  
												  
												  if(item.Token==4){
												  $("#pass1").hide();
												  $("#pass2").hide();
												  $("#pass3").hide();
												  $("#esci").hide();
												  $("#pass0").show();
												  
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
												  
												  if(item.Token==11){
													 $("#lista").show();
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
												  
												  passeggeri1 = item.passeggeri;
												  animali1 = item.animali;
												  fumatori1 = item.fumatori;
												  meno181 = item.meno18;
												  disabili1 = item.disabili;
												  bambini1 = item.bambini;
												  wifi1 = item.wifi;
												  portapacchi1 = item.portapacchi;
												  rimorchio1 = item.rimorchio;
												  bluetooth1 = item.bluetooth;
												  id_utente_pass1 = item.id_utente_pass;
												  note1 = item.note;
												  percentuale1 = item.percentuale;
												  rating1 = item.rating;
												  cell1 = item.cell;
												  
												  if(localStorage.getItem("palla1")!="1"){
												  
											   
												     palla1()
												     //playAudio('successArrivo');
												     //SUONO RICEZIONE
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
												  
												  if(item.posticipata==1){
												    $("#lista").show();
												  }
												  
												  marker1.setMap(null);
												 
												  var icon3 = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,40));
												  if(item.stato==3){

												  }
												  
												  if(item.stato==1){
													 var icon3 = new google.maps.MarkerImage("img/marker_arancione_1.png", null, null, null, new google.maps.Size(40,40));
													 marker1 = new google.maps.Marker ({
																					   map : map,
																					   icon: icon3,
																					   optimized: false,
																					   position : myLatLng,
																					   content:'<div class="popup"><b>'+ item.nick +'</b><br>Partenza: '+ item.partenza +'<br>Distanza dal passeggero (l.a.): '+ item.distanza +' km</a></div>',
																					   title: item.nick,
																					   //label: ''+ beach[1] +','+ beach[2] +'',
																					   zIndex: posizione
																					   });

												  }
												  if(item.stato==0){
													var icon3 = new google.maps.MarkerImage("img/marker_fucsia_1.png", null, null, null, new google.maps.Size(40,40));
													
												     marker1 = new google.maps.Marker ({
																					map : map,
																					icon: icon3,
																					optimized: false,
																					position : myLatLng,
																					content:'<div class="popup"><b>'+ item.nick +'</b><br>Partenza: '+ item.partenza +'<br>Distanza dal passeggero (l.a.): '+ item.distanza +' km<br><a id="rispmarker1" href="#home3">RISPONDI</a></div>',
																					title: item.nick,
																					//label: ''+ beach[1] +','+ beach[2] +'',
																					zIndex: posizione
																					});
												  }
												  if(item.stato==2){
													 var icon3 = new google.maps.MarkerImage("img/marker_verde_1.png", null, null, null, new google.maps.Size(40,40));
												     marker1 = new google.maps.Marker ({
																					map : map,
																					icon: icon3,
																					optimized: false,
																					position : myLatLng,
																					content:'<div class="popup"><b>'+ item.nick +'</b><br>Partenza: '+ item.partenza +'<br>Distanza dal passeggero (l.a.): '+ item.distanza +' km</a></div>',
																					title: item.nick,
																					//label: ''+ beach[1] +','+ beach[2] +'',
																					zIndex: posizione
																					});
												  
												  }
												  
												  

												  
												  
												  google.maps.event.addListener(marker1, 'click', function() {
																				
																				infowindow.setContent(this.content);
																				infowindow.open(map, this);
																				
																				});
												  
												  
												  $(document).on("tap", "#rispmarker1", function(e){
														richiesta1()
																 
													    e.stopImmediatePropagation();
																 
														e.preventDefault();
																 
														return false;
																 
														if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
												 });
	
												  
												  $("#pass0").hide();
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
												    $("#adaccetta3").html(item.arrivo);
												  
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
												  playAudio1('successArrivo');

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
												  
												  passeggeri2 = item.passeggeri;
												  animali2 = item.animali;
												  fumatori2 = item.fumatori;
												  meno182 = item.meno18;
												  disabili2 = item.disabili;
												  bambini2 = item.bambini;
												  wifi2 = item.wifi;
												  portapacchi2 = item.portapacchi;
												  rimorchio2 = item.rimorchio;
												  bluetooth2 = item.bluetooth;
												  id_utente_pass2 = item.id_utente_pass;
												  note2 = item.note;
												  percentuale2 = item.percentuale;
												  rating2 = item.rating;
												  cell2 = item.cell;
												  
												  if(localStorage.getItem("palla2")!=1){
												  
												    //playAudio2('successArrivo');
												  
												  }
												  
												  /*$(document).on("tap", "#pass2", function(e){
																 //window.location.href = "#index3";
																 
																 //localStorage.setItem("geostory", "NO")
																 
																 for(i=0; i<10000; i++)
																 {
																 window.clearInterval(i);
																 }
																 
																 richiesta2(item.id_richiesta);
																 
																 
																 });*/
												  
												  if(item.posticipata==1){
												    $("#lista").show();
												  }
												  
												  marker3.setMap(null);
												  
												  var icon3 = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,40));
												  if(item.stato==3){
												  
												  }
												  
												  if(item.stato==1){
													 var icon3 = new google.maps.MarkerImage("img/marker_arancione_2.png", null, null, null, new google.maps.Size(40,40));
												     marker3 = new google.maps.Marker ({
																					map : map,
																					icon: icon3,
																					optimized: false,
																					position : myLatLng,
																					content:'<div class="popup"><b>'+ item.nick +'</b><br>Partenza: '+ item.partenza +'<br>Distanza dal passeggero (l.a.): '+ item.distanza +' km</a></div>',
																					title: item.nick,
																					//label: ''+ beach[1] +','+ beach[2] +'',
																					zIndex: posizione
																					});
												  }
												  if(item.stato==0){
													var icon3 = new google.maps.MarkerImage("img/marker_fucsia_2.png", null, null, null, new google.maps.Size(40,40));
													 marker3 = new google.maps.Marker ({
																					   map : map,
																					   icon: icon3,
																					   optimized: false,
																					   position : myLatLng,
																					   content:'<div class="popup"><b>'+ item.nick +'</b><br>Partenza: '+ item.partenza +'<br>Distanza dal passeggero (l.a.): '+ item.distanza +' km<br><a id="rispmarker1" href="#home3">RISPONDI</a></div>',
																					   title: item.nick,
																					   //label: ''+ beach[1] +','+ beach[2] +'',
																					   zIndex: posizione
																					   });
												  }
												  if(item.stato==2){
													 var icon3 = new google.maps.MarkerImage("img/marker_verde_2.png", null, null, null, new google.maps.Size(40,40));
													 marker3 = new google.maps.Marker ({
																					   map : map,
																					   icon: icon3,
																					   optimized: false,
																					   position : myLatLng,
																					   content:'<div class="popup"><b>'+ item.nick +'</b><br>Partenza: '+ item.partenza +'<br>Distanza dal passeggero (l.a.): '+ item.distanza +' km</a></div>',
																					   title: item.nick,
																					   //label: ''+ beach[1] +','+ beach[2] +'',
																					   zIndex: posizione
																					   });

												  }
												 
												  
												  google.maps.event.addListener(marker3, 'click', function() {
																				
														infowindow.setContent(this.content);
														infowindow.open(map, this);
																				
													});
												  
												  $(document).on("tap", "#rispmarker2", function(e){
													   richiesta2()
																 
													    e.stopImmediatePropagation();
																 
														e.preventDefault();
																 
														return false;
																 
														if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
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
												   $("#adaccetta2").html(item.arrivo);
												  
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
												  playAudio2('successArrivo');
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
												  
												  passeggeri3 = item.passeggeri;
												  animali3 = item.animali;
												  fumatori3 = item.fumatori;
												  meno183 = item.meno18;
												  disabili3 = item.disabili;
												  bambini3 = item.bambini;
												  wifi3 = item.wifi;
												  portapacchi3 = item.portapacchi;
												  rimorchio3 = item.rimorchio;
												  bluetooth3 = item.bluetooth;
												  id_utente_pass3 = item.id_utente_pass;
												  note3 = item.note;
												  percentuale3 = item.percentuale;
												  rating3 = item.rating;
												  cell3 = item.cell;
												  
												  if(localStorage.getItem("palla3")!=1){
												  
												     //playAudio3('successArrivo');
												  
												  }
												  
												  item3 = item.id_richiesta;
												  
												  var icon3 = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,40));
												  if(item.stato==3){
												  
												  }
												  
												  var isVisible4 = marker4.getVisible();
												  if(isVisible4){
												  marker4.setMap(null);
												  }
												  
												  if(item.stato==1){
													 var icon3 = new google.maps.MarkerImage("img/marker_arancione_3.png", null, null, null, new google.maps.Size(40,40));
													 marker4 = new google.maps.Marker ({
																					   map : map,
																					   icon: icon3,
																					   optimized: false,
																					   position : myLatLng,
																					   content:'<div class="popup"><b>'+ item.nick +'</b><br>Partenza: '+ item.partenza +'<br>Distanza dal passeggero (l.a.): '+ item.distanza +' km</a></div>',
																					   title: item.nick,
																					   //label: ''+ beach[1] +','+ beach[2] +'',
																					   zIndex: posizione
																					   });
												  }
												  if(item.stato==0){
													var icon3 = new google.maps.MarkerImage("img/marker_fucsia_3.png", null, null, null, new google.maps.Size(40,40));
												    marker4 = new google.maps.Marker ({
																					map : map,
																					icon: icon3,
																					optimized: false,
																					position : myLatLng,
																					content:'<div class="popup"><b>'+ item.nick +'</b><br>Partenza: '+ item.partenza +'<br>Distanza dal passeggero (l.a.): '+ item.distanza +' km<br><a id="rispmarker1" href="#home3">RISPONDI</a></div>',
																					title: item.nick,
																					//label: ''+ beach[1] +','+ beach[2] +'',
																					zIndex: posizione
																					});
												  }
												  if(item.stato==2){
													 var icon3 = new google.maps.MarkerImage("img/marker_verde_3.png", null, null, null, new google.maps.Size(40,40));
													 marker4 = new google.maps.Marker ({
																					   map : map,
																					   icon: icon3,
																					   optimized: false,
																					   position : myLatLng,
																					   content:'<div class="popup"><b>'+ item.nick +'</b><br>Partenza: '+ item.partenza +'<br>Distanza dal passeggero (l.a.): '+ item.distanza +' km</a></div>',
																					   title: item.nick,
																					   //label: ''+ beach[1] +','+ beach[2] +'',
																					   zIndex: posizione
																					   });
												  }
												  
												  
												  
												  google.maps.event.addListener(marker4, 'click', function() {
																				
																				infowindow.setContent(this.content);
																				infowindow.open(map, this);
																				
																				});
												  
												  $(document).on("tap", "#rispmarker3", function(e){
																 richiesta3()
																 
													    e.stopImmediatePropagation();
																 
														e.preventDefault();
																 
														return false;
																 
														if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
												});
												  
												  
												  if(item.posticipata==1){
												    $("#lista").show();
												  }
												  
												  
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
												   $("#adaccetta5").html(item.arrivo);
												  
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
												  playAudio3('successArrivo');
												  
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
									
									
									
									
									function playAudio(id) {
									var audioElement = document.getElementById(id);
									var url = audioElement.getAttribute('src');
									var my_media = new Media(url,
															 // success callback
															 function () { console.log("playAudio():Audio Success"); },
															 // error callback
															 function (err) { console.log("playAudio():Audio Error: " + err); }
															 );
									// Play audio
									my_media.play();
									
									setTimeout(function() {
										my_media.stop();
									}, 3000);
									}
									
									function playAudio1(id) {
									var audioElement = document.getElementById(id);
									var url = audioElement.getAttribute('src');
									var my_media = new Media(url,
															 // success callback
															 function () { console.log("playAudio():Audio Success"); },
															 // error callback
															 function (err) { console.log("playAudio():Audio Error: " + err); }
															 );
									// Play audio
									my_media.play();
									
									setTimeout(function() {
											   my_media.stop();
									}, 3000);
									}
									
									
									function playAudio2(id) {
									var audioElement = document.getElementById(id);
									var url = audioElement.getAttribute('src');
									var my_media = new Media(url,
															 // success callback
															 function () { console.log("playAudio():Audio Success"); },
															 // error callback
															 function (err) { console.log("playAudio():Audio Error: " + err); }
															 );
									// Play audio
									my_media.play();
									localStorage.setItem("palla2", "1")
									
									setTimeout(function() {
										my_media.stop();
									}, 3000);
									}
									
									
									function playAudio3(id) {
									var audioElement = document.getElementById(id);
									var url = audioElement.getAttribute('src');
									var my_media = new Media(url,
															 // success callback
															 function () { console.log("playAudio():Audio Success"); },
															 // error callback
															 function (err) { console.log("playAudio():Audio Error: " + err); }
															 );
									// Play audio
									my_media.play();
									localStorage.setItem("palla3", "1")
									
									setTimeout(function() {
										my_media.stop();
									}, 3000);
									}
									
									
									
									
									//setTimeout(function() {

										//map.setCenter(centromap);

								    //}, 1000);
			}
	else{
		for(i=0; i<10000; i++)
		{
		 window.clearInterval(i);
		}
									
		setTimeout(function() {
		  timer();
		}, 5000);
									
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
	
	
	$("#magia").show();
	$("#btninizia").hide();
	//$("#btnpass").hide();
	$("#pass1").hide();
	$("#pass2").hide();
	$("#pass3").hide();
	
	localStorage.setItem("pagina","magia")
	
	
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
				  var icon2a = new google.maps.MarkerImage("img/marker_rosso_1.png", null, null, null, new google.maps.Size(40,40));
				  
				  if(utente==1){
				  var icon2 = new google.maps.MarkerImage("img/marker_rosso_1.png", null, null, null, new google.maps.Size(40,40));
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
				  
				  if(item.stato==1){
				  var icon11 = new google.maps.MarkerImage("img/marker_arancione_1.png", null, null, null, new google.maps.Size(40,40));
				  }
				  if(item.stato==0){
				  var icon11 = new google.maps.MarkerImage("img/marker_fucsia_1.png", null, null, null, new google.maps.Size(40,40));
				  }
				  if(item.stato==2){
				  var icon11 = new google.maps.MarkerImage("img/marker_verde_1.png", null, null, null, new google.maps.Size(40,40));
				  }

				  
				  
				  //ZOOM JAVASCRIPT
				  var dist1 = Math.round(item.distanza1)
				  var dist2 = Math.round(14-Math.log(dist1)/Math.LN2)
				  dist2 = dist2 +1;
				  //alert(dist2);
				  
				  //dist2 = item.zoom;
				  
				  map.setZoom(dist2)
				  
				  marker1.setVisible(true);
				  marker1.setIcon(icon11);
				  
				  //alert(dist2);

				  //marker rosso
				  var latlng5 = new google.maps.LatLng(item.lat1, item.lng1);
				  marker5.setVisible(true);
				  //marker5.setIcon(icon2a);
				  //marker5.setPosition(latlng5);
				  
				  marker5 = new google.maps.Marker ({
													map : map,
													icon: icon2a,
													optimized: false,
													position : latlng5,
													content:'<div class="popup">Arrivo</div>',
													//title: item.nick,
													zIndex: -12
													});
				  
				  google.maps.event.addListener(marker5, 'click', function() {
												
												infowindow.setContent(this.content);
												infowindow.open(map, this);
												
				  });
				  
				  
				  $("#bannermagia").html("<font size='3' color='#fff'>Arrivo: "+ item.arrivo +"<br>Distanza dalla partenza(l.a.): "+ item.distanza1 +"</font>");
				  
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
				  var icon3a = new google.maps.MarkerImage("img/marker_rosso_2.png", null, null, null, new google.maps.Size(40,40));
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
				  
				  if(item.stato==1){
				  var icon22 = new google.maps.MarkerImage("img/marker_arancione_2.png", null, null, null, new google.maps.Size(40,40));
				  }
				  if(item.stato==0){
				  var icon22 = new google.maps.MarkerImage("img/marker_fucsia_2.png", null, null, null, new google.maps.Size(40,40));
				  }
				  if(item.stato==2){
				  var icon22 = new google.maps.MarkerImage("img/marker_verde_2.png", null, null, null, new google.maps.Size(40,40));
				  }
				  
				  
				  
				  //ZOOM JAVASCRIPT
				  var dist1 = Math.round(item.distanza1)
				  var dist2 = Math.round(14-Math.log(dist1)/Math.LN2)
				  dist2 = dist2 +1;
				  //alert(dist2);
				  
				  //dist2 = item.zoom;
				  
				  map.setZoom(dist2)
				  
				  $("#bannermagia").html("<font size='3' color='#fff'>Arrivo: "+ item.arrivo +"<br>Distanza dalla partenza(l.a.): "+ item.distanza1 +"</font>");
				  
				  marker1.setVisible(false);
				  marker3.setVisible(true);
				  marker3.setIcon(icon22);
				  
				  //alert(dist2);
				  
				  //marker rosso
				  var latlng5 = new google.maps.LatLng(item.lat1, item.lng1);
				  marker5.setVisible(true);
				  //marker5.setIcon(icon2a);
				  //marker5.setPosition(latlng5);
				  
				  marker5 = new google.maps.Marker ({
													map : map,
													icon: icon3a,
													optimized: false,
													position : latlng5,
													content:'<div class="popup">Arrivo<br>Km</div>',
													title: item.nick,
													zIndex: -19
													});
				  
				  google.maps.event.addListener(marker5, 'click', function() {
												
												infowindow.setContent(this.content);
												infowindow.open(map, this);
												
												});
				  
				  
				  var isVisible4 = marker4.getVisible();
				  if(isVisible4){
				  marker4.setVisible(false);
				  }
				  
				  
				  }
				  
				  if(utente==3){
				  var icon4a = new google.maps.MarkerImage("img/marker_rosso_3.png", null, null, null, new google.maps.Size(40,40));
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
				  
				  if(item.stato==1){
				  var icon44 = new google.maps.MarkerImage("img/marker_arancione_3.png", null, null, null, new google.maps.Size(40,40));
				  }
				  if(item.stato==0){
				  var icon44 = new google.maps.MarkerImage("img/marker_fucsia_3.png", null, null, null, new google.maps.Size(40,40));
				  }
				  if(item.stato==2){
				  var icon44 = new google.maps.MarkerImage("img/marker_verde_3.png", null, null, null, new google.maps.Size(40,40));
				  }
				  
				  
				  
				  //ZOOM JAVASCRIPT
				  var dist1 = Math.round(item.distanza1)
				  var dist2 = Math.round(14-Math.log(dist1)/Math.LN2)
				  dist2 = dist2 +1;
				  //alert(dist2);
				  
				  //dist2 = item.zoom;
				  
				  map.setZoom(dist2)
				  
				  $("#bannermagia").html("<font size='3' color='#fff'>Arrivo: "+ item.arrivo +"<br>Distanza dalla partenza (l.a.): "+ item.distanza1 +" km</font>");
				  
				  marker1.setVisible(false);
				  marker3.setVisible(false);
				  
				  marker4.setVisible(true);
				  marker4.setIcon(icon44);
				  
				  //alert(dist2);
				  
				  //marker rosso
				  var latlng5 = new google.maps.LatLng(item.lat1, item.lng1);
				  marker5.setVisible(true);
				  //marker5.setIcon(icon2a);
				  //marker5.setPosition(latlng5);
				  
				  marker5 = new google.maps.Marker ({
													map : map,
													icon: icon4a,
													optimized: false,
													position : latlng5,
													content:'<div class="popup">Arrivo<br>Km</div>',
													title: item.nick,
													zIndex: -19
													});
				  
				  google.maps.event.addListener(marker5, 'click', function() {
												
												infowindow.setContent(this.content);
												infowindow.open(map, this);
												
												});
				  
				  
				  

				  
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
	
	
	/*refreshIntervalId33 = setInterval(function() {
									  
									  
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

													}
													
													});
											 
											 
											 },
											 error: function(){
											 

											 
											 },
											 dataType:"jsonp"});
									  
									  
									  
									  localStorage.setItem("fatto","1")
									  
									  
									  
								}, 10000);*/
	
	
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

	$("#blob").show();

	$("#btninizia").hide();
	
	$("#btnpass").show();
	
	localStorage.setItem("palla1", "1")
	localStorage.setItem("exit", "1")
	
	setTimeout(function() {
		$("#blob").hide();
	}, 10000);
	
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
	
	$("#xchiudi2").hide();
	$("#xchiudi3").hide();
	$("#xchiudi1").show();
	
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
	
	localStorage.setItem("ritornaweb","1")
	localStorage.setItem("tastiera","1")


	$("#nickhome4").html("<a id='linknick1' href='#' class='noblu'><font color='#fff'>"+ nick1 +" "+ percentuale1 +"%</font></a>");
	
	
	if(parseFloat(rating1)==0){
		$("#stelle4").html("<a id='linkstelle1' href='#'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if(parseFloat(rating1)>0 && parseFloat(rating1)<=0.9){
		$("#stelle4").html("<a id='linkstelle1' href='#'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if(parseFloat(rating1)>=1 && parseFloat(rating1)<=1.4){
		$("#stelle4").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if(parseFloat(rating1)>1.4 && parseFloat(rating1)<=1.9){
		$("#stelle4").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if (parseFloat(rating1)>=2 && parseFloat(rating1)<=2.4) {
		$("#stelle4").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>2.4 && parseFloat(rating1)<=2.9) {
		$("#stelle4").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>=3 && parseFloat(rating1)<=3.4) {
		$("#stelle4").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>3.4 && parseFloat(rating1)<=3.9) {
		$("#stelle4").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>=4 && parseFloat(rating1)<=4.4) {
		$("#stelle4").html(ratio = "<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>4.4 && parseFloat(rating1)<=4.9) {
		$("#stelle4").html(ratio = "<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>=5) {
		$("#stelle4").html(ratio = "<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'></a>")
	}



	localStorage.setItem("id_nick", nick1)
	localStorage.setItem("id_utente_pass1", id_utente_pass1)
	
	$("#nickhome3").html("<font color='#fff'>"+ nick1 +" "+ percentuale1 +"%</font>");
	$("#nickhome6").html("<font color='#fff'>"+ nick1 +" "+ percentuale1 +"%</font>");
				  
	$("#quando").html("&nbsp;&nbsp;<b>Data: </b><font color='#cc33cc'>"+ quando1 +"</font>, <b>Ora: </b><font color='#cc33cc'>"+ ora1 +"</font>");
				  
	$("#Da").html("&nbsp;&nbsp;<b>Da: </b><font color='#cc33cc'>"+ partenza1 +"</font>");
				  
	$("#Ad").html("&nbsp;&nbsp;<b>A: </b><font color='#cc33cc'>"+ arrivo1 +"</font>");
				  
	$("#distanza").html("&nbsp;&nbsp;<b>Distanza (linea d'aria): </b><font color='#cc33cc'>"+ distanza1 +" Km</font>");
	
	$("#passeggeri").html("&nbsp;&nbsp;<b>N. passeggeri: </b><font color='#cc33cc'>"+ passeggeri1 +"</font>");
	
	$("#animali").html("&nbsp;&nbsp;<b>Animali a seguito: </b><font color='#cc33cc'>"+ animali1 +"</font>");
	
	$("#fumatori").html("&nbsp;&nbsp;<b>Fumatori: </b><font color='#cc33cc'>"+ fumatori1 +"</font>");
	
	$("#meno18").html("&nbsp;&nbsp;<b>Minori non accompagnati: </b><font color='#cc33cc'>"+ meno181 +"</font>");
	
	$("#disabili").html("&nbsp;&nbsp;<b>Diversamenti abili: </b><font color='#cc33cc'>"+ disabili1 +"</font>");
	
	$("#bambini").html("&nbsp;&nbsp;<b>Seggiolino per bambini: </b><font color='#cc33cc'>"+ bambini1 +"</font>");
	
	$("#wifi").html("&nbsp;&nbsp;<b>WiFi: </b><font color='#cc33cc'>"+ wifi1 +"</font>");
	
	$("#portapacchi").html("&nbsp;&nbsp;<b>Portapacchi: </b><font color='#cc33cc'>"+ portapacchi1 +"</font>");
	
	$("#rimorchio").html("&nbsp;&nbsp;<b>Gancio rimorchio: </b><font color='#cc33cc'>"+ rimorchio1 +"</font>");
	
	$("#bluetooth").html("&nbsp;&nbsp;<b>Bluetooth: </b><font color='#cc33cc'>"+ bluetooth1 +"</font>");
	
	$("#note").html("&nbsp;&nbsp;<b>Note: </b><font color='#cc33cc'>"+ note1 +"</font>");
	
	
	
	              if(stato1==0){
		            $("#4img").html("<img src='img/1_viola.png' width='30'>");
					  
					  $("#close1").html("<img src='img/ico_trash.png' width='45'>");
					  
					  
					  $(document).on("touchstart", "#close1", function(e){
							$("#pass1").hide();
									 
							$("#blob2").hide();
									 
									 
									 
							cancella(id)
									 
							e.stopImmediatePropagation();
									 
							e.preventDefault();
									 
							return false;
									 
						});
					  
	              }
	
				  if(stato1!=0){
					$("#risp1").hide();
				  }
	
				  if(stato1==1){
					  $("#4img").html("<img src='img/1_giallo.png' width='30'>");
					  
					  $("#close1").html("<img src='img/ico_trash.png' width='45'>");
					  
					  $(document).on("touchstart", "#close1", function(e){
									 $("#pass1").hide();
									 
									 $("#blob2").hide();
									 cancella(id)
									 
									 e.stopImmediatePropagation();
									 
									 e.preventDefault();
									 
									 return false;
									 
									 });
					  
				  }

				  if(stato1==2){
					  
				   $("#gps1").show();
				   $("#close1").html("<img src='img/ico_feedback.png' width='45'>");
					  
				   
					//alert("tel:+39" + cell1 + "")
					  
				   if(cell1!=""){
				   $("#cell1").show();
				   
					  
					$(document).on("touchstart", "#cell1", function(e){
								  
						window.location.href = "tel:+39" + cell1 + "";
									 
						e.stopImmediatePropagation();
									 
						e.preventDefault();
									 
						return false;
									 
					});
				   }
				   
					  
				   $(document).on("touchstart", "#close1", function(e){
						$("#pass1").hide();
						$("#blob2").hide();
								  
						var ref = cordova.InAppBrowser.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								  
						cancella(id)
								  
						e.stopImmediatePropagation();
									 
						e.preventDefault();
									 
						return false;
									 
					});
					  
					  
				   $("#code1").show();
				   $("#code1").html("<b>Codice Commento : " + cod1 + "</b>");
					  
				   $("#chat1").show();
					  
				   $("#risp1").hide();
					  
					  $("#close3").hide();
					  $("#close2").hide();
					  $("#close1").show();
					  
				   $("#4img").html("<img src='img/1_verde.png' width='30'>");
				  
				   $(document).on("tap", "#gps1", function(e){
						
						var addressLongLat = lat1+","+lng1;
	
						window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
						
						$("#blob2").hide();
								 
						e.stopImmediatePropagation();
								 
						e.preventDefault();
								 
						return false;
								 
				   });
					  
					  $(document).on("touchstart", "#chat1", function(e){
							
							localStorage.setItem("pagechat", "1")
									 
							chatting(1,id)
									 
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
					  
					  
					$("#close1").html("<img src='img/ico_trash.png' width='45'>");
					  
					
					
				  }
	
	
	$("#xchiudi1").show();
	$("#xchiudi2").hide();
	$("#xchiudi3").hide();
	
	$("#xchiudi11").show();
	$("#xchiudi22").hide();
	$("#xchiudi33").hide();
	
	$(document).on("tap", "#linknick1", function(e){
				   
				   //http://www.purplemiles.com/www/profilo_passeggero.php?idp=19&ida="+localStorage.getItem("id_autista")+"&pm="+localStorage.getItem("md5")+"
				   
				   var ref = window.open('http://www.purplemiles.com/www/profilo_passeggero.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente_pass1")+'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   });
	
	$(document).on("tap", "#linkstelle1", function(e){
				   
				   //http://www.purplemiles.com/www/profilo_passeggero.php?idp=19&ida="+localStorage.getItem("id_autista")+"&pm="+localStorage.getItem("md5")+"
				   
				   //alert('http://www.purplemiles.com/www/feedback_passeggero.php?idp='+localStorage.getItem("id_utente_pass1")+'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'')
				   
				  var ref = cordova.InAppBrowser.open('http://www.purplemiles.com/www/feedback_passeggero.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente_pass1")+'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   });
	
	
	$(document).on("touchstart", "#xchiudi1", function(e){
				   $.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
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

	
	
	$(document).on("tap", "#risp1", function(e){
				   
				   $.mobile.changePage ($("#home3"));
				   
				   	setTimeout(function() {
						$("#tblrispondi").fadeIn(1500)
					}, 500);
				   
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
	
	$("#xchiudi1").hide();
	$("#xchiudi3").hide();
	$("#xchiudi2").show();
	
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	
	localStorage.setItem("ritornaweb","1")
	localStorage.setItem("tastiera","1")
				  
	$("#nickhome4").html("<font color='#fff'><a id='linknick2' href='#' class='noblu'><font color='#fff'>"+ nick2 +" "+ percentuale2 +"%</font></a></font>");
	$("#nickhome3").html("<font color='#fff'>"+ nick2 +" "+ percentuale2 +"%</font>");
	$("#nickhome6").html("<font color='#fff'>"+ nick2 +" "+ percentuale1 +"%</font>");
	
	localStorage.setItem("id_utente_pass2", id_utente_pass2)
	
	
			if(parseFloat(rating2)==0){
			$("#stelle4").html("<a id='linkstelle2' href='#'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
			}
			
			else if(parseFloat(rating2)>0 && parseFloat(rating2)<=0.9){
					$("#stelle4").html("<a id='linkstelle2' href='#'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
					}
					
					else if(parseFloat(rating2)>=1 && parseFloat(rating2)<=1.4){
							$("#stelle4").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
							}
							else if(parseFloat(rating2)>1.4 && parseFloat(rating2)<=1.9){
							$("#stelle4").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
							}
							
							else if (parseFloat(rating2)>=2 && parseFloat(rating2)<=2.4) {
							$("#stelle4").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
							}
							else if (parseFloat(rating2)>2.4 && parseFloat(rating2)<=2.9) {
							$("#stelle4").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
							}
							else if (parseFloat(rating2)>=3 && parseFloat(rating2)<=3.4) {
							$("#stelle4").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
							}
							else if (parseFloat(rating2)>3.4 && parseFloat(rating2)<=3.9) {
							$("#stelle4").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'></a>")
							}
							else if (parseFloat(rating2)>=4 && parseFloat(rating2)<=4.4) {
							$("#stelle4").html(ratio = "<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
							}
							else if (parseFloat(rating2)>4.4 && parseFloat(rating2)<=4.9) {
							$("#stelle4").html(ratio = "<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'></a>")
							}
							else if (parseFloat(rating2)>=5) {
							$("#stelle4").html(ratio = "<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'></a>")
		   }

	
				  
	$("#quando").html("<b>Data: </b><font color='#cc33cc'>"+ quando2 +"</font>, <b>Ora: </b><font color='#cc33cc'>"+ ora2 +"</font>");
				  
	$("#Da").html("<b>Da: </b><font color='#cc33cc'>"+ partenza2 +"</font>");
				  
	$("#Ad").html("<b>A: </b><font color='#cc33cc'>"+ arrivo2 +"</font>");
				  
	$("#distanza").html("<b>Distanza (linea d'aria) :</b><font color='#cc33cc'>"+ distanza2 +" Km</font>");
	
	$("#passeggeri").html("<b>N. passeggeri: </b><font color='#cc33cc'>"+ passeggeri2 +"</font>");
	
	$("#animali").html("<b>Animali a seguito: </b><font color='#cc33cc'>"+ animali2 +"</font>");
	
	$("#fumatori").html("<b>Fumatori: </b><font color='#cc33cc'>"+ fumatori2 +"</font>");
	
	$("#meno18").html("<b>Minori non accompagnati: </b><font color='#cc33cc'>"+ meno182 +"</font>");
	
	$("#disabili").html("<b>Diversamenti abili: </b><font color='#cc33cc'>"+ disabili2 +"</font>");
	
	$("#bambini").html("<b>Seggiolino per bambini: </b><font color='#cc33cc'>"+ bambini2 +"</font>");
	
	$("#wifi").html("<b>WiFi: </b><font color='#cc33cc'>"+ wifi2 +"</font>");
	
	$("#portapacchi").html("<b>Portapacchi: </b><font color='#cc33cc'>"+ portapacchi2 +"</font>");
	
	$("#rimorchio").html("<b>Gancio rimorchio: </b><font color='#cc33cc'>"+ rimorchio2 +"</font>");
	
	$("#bluetooth").html("<b>Bluetooth: </b><font color='#cc33cc'>"+ bluetooth2 +"</font>");
	
	$("#note").html("<b>Note: </b><font color='#cc33cc'>"+ note2 +"</font>");
	
	
	
	
				  if(stato2==0){
					 $("#4img").html("<img src='img/2_viola.png' width='30'>");
					  
					  $("#close2").html("<img src='img/ico_trash.png' width='45'>");
					  
					  $(document).on("touchstart", "#close2", function(e){
									 $("#pass2").hide();
									 $("#blob2").hide();
									 cancella(id)
									 
									 
									 e.stopImmediatePropagation();
									 
									 e.preventDefault();
									 
									 return false;
					  });
				  }
	
				  if(stato2!=0){
					$("#risp2").hide();
				  }
	
				  if(stato2==1){
					 $("#4img").html("<img src='img/2_giallo.png' width='30'>");
					  
					  $("#close2").html("<img src='img/ico_trash.png' width='45'>");
					  
					  
					  
					  $(document).on("touchstart", "#close2", function(e){
									 $("#pass2").hide();
									 $("#blob2").hide();
									 cancella(id)
									 
									 
									 e.stopImmediatePropagation();
									 
									 e.preventDefault();
									 
									 return false;
					  });
				  }
	
				  if(stato2==2){
					  
				   $("#gps22").show();
				   $("#risp2").hide();
					  
					  if(cell2!=""){
						  $("#cell2").show();
						  
						  
						  $(document).on("touchstart", "#cell2", function(e){
										 
										 window.location.href = "tel:+39"+cell2+"";
										 
										 e.stopImmediatePropagation();
										 
										 e.preventDefault();
										 
										 return false;
										 
										 });
				   }

					  
					  $("#close2").html("<img src='img/ico_feedback.png' width='45'>");
					  
					  $(document).on("touchstart", "#close2", function(e){
							$("#pass2").hide();
							$("#blob2").hide();
									 
							var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
									 
							cancella(id)
		 
							e.stopImmediatePropagation();
									 
							e.preventDefault();
									 
							return false;
					});


					  
				   $("#code2").show();
				   $("#code2").html("<b>Codice Commento : " + cod2 + "</b>");
					  
				   $("#4img").html("<img src='img/2_verde.png' width='30'>");
					  
				   $("#chat2").show();
					  
					  $("#close3").hide();
					  $("#close2").show();
					  $("#close1").hide();
				  
					  $(document).on("tap", "#gps22", function(e){

								 var addressLongLat = lat2+","+lng2;

	                            window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
	
								 $("#blob2").hide();
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
						});
					  
					  $(document).on("tap", "#chat2", function(e){
									 
									 localStorage.setItem("pagechat", "2")
									 
									 chatting(2,id)
									 
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
					  
					  $("#close2").html("<img src='img/ico_trash.png' width='45'>");
					  
				  }



	
	$("#xchiudi2").show();
	$("#xchiudi1").hide();
	$("#xchiudi3").hide();
	
	$("#xchiudi22").show();
	$("#xchiudi11").hide();
	$("#xchiudi33").hide();
	
	$(document).on("tap", "#linknick2", function(e){
				   
				   //http://www.purplemiles.com/www/profilo_passeggero.php?idp=19&ida="+localStorage.getItem("id_autista")+"&pm="+localStorage.getItem("md5")+"
				   
				   
				   var ref = window.open('http://www.purplemiles.com/www/profilo_passeggero.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente_pass2")+'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   });
	
	$(document).on("tap", "#linkstelle2", function(e){
				   
				   //http://www.purplemiles.com/www/profilo_passeggero.php?idp=19&ida="+localStorage.getItem("id_autista")+"&pm="+localStorage.getItem("md5")+"
				   
				   var ref = window.open('http://www.purplemiles.com/www/feedback_passeggero.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente_pass2")+'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   });
	

	
	$(document).on("touchstart", "#xchiudi2", function(e){
				   $.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
				   $("#blob2").hide();
				   magia2C(2,id)
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   });
	
	$(document).on("touchstart", "#xchiudi22", function(e){
				   
				   $("#blob2").hide();
				   
	});

	
	
	$(document).on("touchstart", "#risp2", function(e){
				   $("#blob2").hide();
				    $.mobile.changePage ($("#home3"));
					
					setTimeout(function() {
						$("#tblrispondi").fadeIn(1500)
					}, 500);
				   
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
	
	$("#xchiudi2").hide();
	$("#xchiudi1").hide();
	$("#xchiudi3").show();
	
	//alert(2)
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	
	localStorage.setItem("ritornaweb","1")
	localStorage.setItem("tastiera","1")
	

				  $("#nickhome4").html("<font color='#fff'><a id='linknick3' href='#' class='noblu'><font color='#fff'>"+ nick3 +" "+ percentuale3 +"%</font></a></font>");
				  $("#nickhome3").html("<font color='#fff'>"+ nick3 +" "+ percentuale3 +"%</font>");
	              $("#nickhome6").html("<font color='#fff'>"+ nick1 +" "+ percentuale1 +"%</font>");
	
	              localStorage.setItem("id_utente_pass3", id_utente_pass3)
	
							if(parseFloat(rating3)==0){
							$("#stelle4").html("<a id='linkstelle3' href='#'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
							}
							
							else if(parseFloat(rating3)>0 && parseFloat(rating3)<=0.9){
									$("#stelle4").html("<a id='linkstelle3' href='#'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
									}
									
									else if(parseFloat(rating3)>=1 && parseFloat(rating3)<=1.4){
											$("#stelle4").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
											}
											else if(parseFloat(rating3)>1.4 && parseFloat(rating3)<=1.9){
											$("#stelle4").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
											}
											
											else if (parseFloat(rating3)>=2 && parseFloat(rating3)<=2.4) {
											$("#stelle4").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
											}
											else if (parseFloat(rating3)>2.4 && parseFloat(rating3)<=2.9) {
											$("#stelle4").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
											}
											else if (parseFloat(rating3)>=3 && parseFloat(rating3)<=3.4) {
											$("#stelle4").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
											}
											else if (parseFloat(rating3)>3.4 && parseFloat(rating3)<=3.9) {
											$("#stelle4").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'></a>")
											}
											else if (parseFloat(rating3)>=4 && parseFloat(rating3)<=4.4) {
											$("#stelle4").html(ratio = "<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
											}
											else if (parseFloat(rating3)>4.4 && parseFloat(rating3)<=4.9) {
											$("#stelle4").html(ratio = "<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'></a>")
											}
											else if (parseFloat(rating3)>=5) {
											$("#stelle4").html(ratio = "<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'></a>")
											}
	
				  
	
	$("#quando").html("<b>Data: </b><font color='#cc33cc'>"+ quando3 +"</font>, <b>Ora: </b><font color='#cc33cc'>"+ ora3 +"</font>");
				  
	
	$("#Da").html("<b>Da: </b><font color='#cc33cc'>"+ partenza3 +"</font>");
				  
	
	$("#Ad").html("<b>A: </b><font color='#cc33cc'>"+ arrivo3 +"</font>");
				  
	
	$("#distanza").html("<b>Distanza (linea d'aria): </b><font color='#cc33cc'>"+ distanza3 +" Km</font>");
	
	$("#passeggeri").html("<b>N. passeggeri: </b><font color='#cc33cc'>"+ passeggeri3 +"</font>");
	
	$("#animali").html("<b>Animali a seguito: </b><font color='#cc33cc'>"+ animali3 +"</font>");
	
	$("#fumatori").html("<b>Fumatori: </b><font color='#cc33cc'>"+ fumatori3 +"</font>");
	
	$("#meno18").html("<b>Minori non accompagnati: </b><font color='#cc33cc'>"+ meno183 +"</font>");
	
	$("#disabili").html("<b>Diversamenti abili: </b><font color='#cc33cc'>"+ disabili3 +"</font>");
	
	$("#bambini").html("<b>Seggiolino per bambini: </b><font color='#cc33cc'>"+ bambini3 +"</font>");
	
	$("#wifi").html("<b>WiFi: </b><font color='#cc33cc'>"+ wifi3 +"</font>");
	
	$("#portapacchi").html("<b>Portapacchi: </b><font color='#cc33cc'>"+ portapacchi3 +"</font>");
	
	$("#rimorchio").html("<b>Gancio rimorchio: </b><font color='#cc33cc'>"+ rimorchio3 +"</font>");
	
	$("#bluetooth").html("<b>Bluetooth: </b><font color='#cc33cc'>"+ bluetooth3 +"</font>");
	
	$("#note").html("<b>Note: </b><font color='#cc33cc'>"+ note3 +"</font>");
	
	
	if(stato3==0){
		$("#4img").html("<img src='img/3_viola.png' width='30'>");
		
		 $("#close3").html("<img src='img/ico_trash.png' width='45'>");
		
		$(document).on("tap", "#close3", function(e){
					   $("#pass3").hide();
					   $("#blob2").hide();
					   
					   cancella(id)
					   
					   e.stopImmediatePropagation();
					   
					   e.preventDefault();
					   
					   return false;
					   
		});
	}
	
				  if(stato3!=0){
				    $("#risp3").hide();
				  }
	
	if(stato3==1){
		$("#4img").html("<img src='img/3_giallo.png' width='30'>");
		
		 $("#close3").html("<img src='img/ico_trash.png' width='45'>");
		
		$(document).on("tap", "#close3", function(e){
					   $("#pass3").hide();
					   $("#blob2").hide();
					   
					   cancella(id)
					   
					   e.stopImmediatePropagation();
					   
					   e.preventDefault();
					   
					   return false;
					   
		});
	}
	
	
				  if(stato3==2){
				  $("#gps3").show();
				  $("#risp3").hide();
				  $("#code3").show();
					  
				   $("#close3").html("<img src='img/ico_feedback.png' width='45'>");
					  
					$(document).on("tap", "#close3", function(e){
						$("#pass3").hide();
						$("#blob2").hide();
									 
						var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
									 
						cancella(id)
									 
						e.stopImmediatePropagation();
									 
						e.preventDefault();
									 
						return false;
									 
					});
					  
					  
					  
					  if(cell3!=""){
						  $("#cell3").show();
						  
						  
						  $(document).on("touchstart", "#cell3", function(e){
										 
										 window.location.href = "tel:+39"+cell3+"";
										 
										 e.stopImmediatePropagation();
										 
										 e.preventDefault();
										 
										 return false;
										 
										 });
				   }

				  
				  $("#code3").html("<b>Codice Commento : " + cod3 + "</b>");
				  $("#chat3").show();
					  
				  $("#4img").html("<img src='img/3_verde.png' width='30'>");
				  
				  $("#close3").show();
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
					  
					  $(document).on("tap", "#chat3", function(e){
									 
									 localStorage.setItem("pagechat", "1")
									 
									 chatting(3,id)
									 
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
	
	
	$(document).on("tap", "#linknick3", function(e){
				   
				   //http://www.purplemiles.com/www/profilo_passeggero.php?idp=19&ida="+localStorage.getItem("id_autista")+"&pm="+localStorage.getItem("md5")+"
				   
				   var ref = window.open('http://www.purplemiles.com/www/profilo_passeggero.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente_pass3")+'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   });
	
	$(document).on("tap", "#linkstelle3", function(e){
				   
				   //http://www.purplemiles.com/www/profilo_passeggero.php?idp=19&ida="+localStorage.getItem("id_autista")+"&pm="+localStorage.getItem("md5")+"
				   
				   var ref = window.open('http://www.purplemiles.com/www/feedback_passeggero.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente_pass3")+'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   });

	
	
	$(document).on("touchstart", "#xchiudi3", function(e){
				   $.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
				   $("#blob2").hide();
				   magia2C(3,id)
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   });
	
	$(document).on("tap", "#xchiudi33", function(e){
			$("#blob2").hide();
				   
		});
	

	
	$(document).on("tap", "#risp3", function(e){
				   $("#blob2").hide();
				   $.mobile.changePage ($("#home3"));
				   
				     setTimeout(function() {
						$("#tblrispondi").fadeIn(1500)
					}, 500);

				   });
	
}

function lista5() {
	
	$.mobile.changePage( "#home5", { transition: "slide", changeHash: false });

	$("#nickhome5").html(localStorage.getItem("nick"));
	
	//alert("http://purplemiles.com/www2/check_stato2.php?id_autista="+ localStorage.getItem("id_autista") +"")
	
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
				  
				  $("#offerte5").html("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><div class='custom-pass22'><font color='#fff' size='4'>"+ item.nick +"</font></div></tr><tr><td align='left'><font color='#cc33cc' size='5'><b><div id='timer2'></div></b></font><br>&nbsp;&nbsp;<b>Prezzo: </b>"+ item.importo +"<br><b>Quando: </b>"+ item.quando +"&nbsp;<b>Ora: </b>"+ item.ora +"<br>&nbsp;&nbsp;<b>Partenza: </b>"+ item.partenza +"<br>&nbsp;&nbsp;<b>Arrivo: </b>"+ item.arrivo +"</td></tr></table>");
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

function chatting(pass,id) {
	
	
	//$("#spinner6").show();
	localStorage.setItem("tastiera","0")
	
	for(i=0; i<10000; i++)
	{
		window.clearInterval(i);
	}
	
	
	
	localStorage.setItem("pagina","chat")
	
	setTimeout(function() {
		$("#tblchat").fadeIn(1500)
	}, 500);
	
	
	//alert("http://purplemiles.com/www2/check_stato2.php?id_autista="+ localStorage.getItem("id_autista") +"")
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/leggi_chat.php?id_richiesta="+ localStorage.getItem("id_richiesta") +"&last_id=0",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   if(localStorage.getItem("chatpass")==JSON.stringify(result)){
		   //alert("Uguali")
		   $("#spinner6").hide();
		   }
		   else{
		   $("#offerta6").html("");
		   $("#spinner6").hide();
		   
		   $.each(result, function(i,item){
				  
			   localStorage.setItem("chatpass", JSON.stringify(result))
				  
			   //var ref = window.open('mappass.html', '_blank', 'location=no');
				  
			   $.mobile.changePage( "#home6", { transition: "slide", changeHash: false });
				  
			   if(item.Token==1){
				
				  if(item.nick==localStorage.getItem("nick")){
				    //$("#offerta6").append("<br><br><table width='70%' border='0' valign='center' align='left' class='tabella'><tr><td align='center'><div class='custom-pass33'><font color='#fff' size='4'>"+ item.nick +"</font></div></tr><tr><td align='left'><br><b>Mesaggio: </b>"+ item.messaggio +"<br><b>Data: </b>"+ item.data +"</td></tr></table>");
				       $("#offerta6").append("<div class='bubbledLeft'>"+ item.messaggio +"</div>")
				    }
				  else{
					   //$("#offerta6").append("<br><br><table width='70%' border='0' valign='center' align='right' class='tabella'><tr><td align='center'><div class='custom-pass22'><font color='#fff' size='4'>"+ item.nick +"</font></div></tr><tr><td align='left'><br><b>Mesaggio: </b>"+ item.messaggio +"<br><b>Data: </b>"+ item.data +"</td></tr></table>");
				        $("#offerta6").append("<div class='bubbledRight'>"+ item.messaggio +"</div>")
				    }
				  
				   //playChat2('successChat2');
				  
				}
				  
			});
		   
		   }
		   
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
	
	
	refreshPos = setInterval(function() {
		chatting(pass,id)
	}, 5000);
	
	
	
}

function playChat2(id) {
	var audioElement = document.getElementById(id);
	var url = audioElement.getAttribute('src');
	var my_media = new Media(url,
							 // success callback
							 function () { console.log("playAudio():Audio Success"); },
							 // error callback
							 function (err) { console.log("playAudio():Audio Error: " + err); }
							 );
	// Play audio
	my_media.play();
	
	setTimeout(function() {
		my_media.stop();
	}, 3000);
}


function inviachat() {
	var indirizzo = document.getElementById("chattext").value.replace("'", "")
	
	if (indirizzo == "") {
		navigator.notification.alert(
									 'Devi inserire un messaggio',  // message
									 alertDismissed,         // callback
									 'Chat',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	indirizzo = indirizzo.replace(/[0-9]/g, '').replace('€', 'Euro');
	
	$("#spinner6").show();
	
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/pubblica_chat_autista.php?id_messaggio="+ localStorage.getItem("id_richiesta") +"&nick="+ localStorage.getItem("nick") +"&messaggio="+ indirizzo +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				    playChat1('successChat1');
				    document.getElementById("chattext").value="";
				  
				     controllachat2()
					
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
	
	function playChat1(id) {
		var audioElement = document.getElementById(id);
		var url = audioElement.getAttribute('src');
		var my_media = new Media(url,
								 // success callback
								 function () { console.log("playAudio():Audio Success"); },
								 // error callback
								 function (err) { console.log("playAudio():Audio Error: " + err); }
								 );
		// Play audio
		my_media.play();
	}

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
	  var coming = "GRATIS"
	}
	
	if(come==3){
		if (self.document.formia.soldini.value == "") {
			navigator.notification.alert(
										 'Inserire un importo',  // message
										 alertDismissed,         // callback
										 'Pin',            // title
										 'OK'                  // buttonName
										 );
			return;
		}

		
		var coming = self.document.formia.soldini.value;
	}
	
	if(come==2){
		var coming = "OFFERTA LIBERA";
	}
	
	coming = coming.replace('€', 'Euro');
	coming = coming.replace("'", " ");
	
	
	$("#spinner3").show();
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_inviopasseggero.php?id="+ localStorage.getItem("id_richiesta") +"&note="+ document.getElementById("noteautista").value.replace("'", " ") +"&importo="+ coming +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
			  if(item.Token==1){
				  $("#spinner3").hide();
				  localStorage.setItem("tastiera","0")
				  

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
				  
				  $.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
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

function controllachat(uman) {
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/controlla_chat.php?nick="+ localStorage.getItem("nick") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   if(localStorage.getItem("chatcontroll")==JSON.stringify(result)){
		   
		   }
		   else{
		   
		   localStorage.setItem("chatcontroll", JSON.stringify(result))
		   
		   if(uman==2){
		   
		   $.each(result, function(i,item){
				  
				if(item.Token==1){
				  localStorage.setItem("id_richiesta",item.canale)
				  
				  chatting(0,item.canale);
				  //playChat('successChat');
				  
				}
				  
		    });
		   }
		   
		   }
		   
		   },
		   error: function(){
		   
		  /* navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);*/
		   
		   
		   },
		   dataType:"jsonp"});
	
	
}

function controllachat2() {
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/controlla_chat.php?nick="+ localStorage.getItem("nick") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   if(localStorage.getItem("chatcontroll")==JSON.stringify(result)){
		   
		   }
		   else{
		   
		   localStorage.setItem("chatcontroll", JSON.stringify(result))
		   
		   
		   
		   }
		   
		   },
		   error: function(){
		   
		   /* navigator.notification.alert(
			'Possibile errore di rete, riprova tra qualche minuto.',  // message
			alertDismissed,         // callback
			'Attenzione',           // title
			'Done'                  // buttonName
			);*/
		   
		   
		   },
		   dataType:"jsonp"});
	
	
}


function playChat(id) {
	var audioElement = document.getElementById(id);
	var url = audioElement.getAttribute('src');
	var my_media = new Media(url,
							 // success callback
							 function () { console.log("playAudio():Audio Success"); },
							 // error callback
							 function (err) { console.log("playAudio():Audio Error: " + err); }
							 );
	// Play audio
	my_media.play();
	
	setTimeout(function() {
		my_media.stop();
	}, 3000);
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