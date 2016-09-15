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
	document.addEventListener("pause", onPause, false);
	
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
	
	
	$(document).bind("mobileinit", function(){
		$.mobile.defaultDialogTransition = "none";
		$.mobile.defaultPageTransition = "none";
	});
	
	
	window.plugins.insomnia.keepAwake();
	
	document.ontouchmove = function(e){
		e.preventDefault();
	}
	
	
	StatusBar.hide();
	
	
	/*$("#modificastart").blur(function() {
		$("#btninizia").removeClass("divAA").addClass("div55");
	});
	
	
	$("#modificastart").focus(function() {
		$("#btninizia").removeClass("div55").addClass("divAA");
	});*/
	
	
	////////// TASTIERA ///////////
	
	
		window.addEventListener('native.keyboardhide', keyboardHideHandler);
  
		function keyboardHideHandler(e){
		  $("#btninizia").removeClass("divAA").addClass("div55");
		}
	  
	  window.addEventListener('native.keyboardshow', keyboardShowHandler);
  
		function keyboardShowHandler(e){
			$("#btninizia").removeClass("div55").addClass("divAA");
		}
	
	///////// FINE TASTIERA ///////////
	
	
	if(localStorage.getItem("lingua")=="it"){
		
		var alertattenzione = "Attenzione"
		var chiudereA = "Vuoi chiudere purple miles?"
		var spegniA = "Spegni"
		var annullaA = "Spegni,Annulla"
		var profiloA = "Profilo"
		
	}
	else if(localStorage.getItem("lingua")=="en"){
		
		var alertattenzione = "Attention"
		var chiudereA = "do you want close purple miles?"
		var spegniA = "Shut Down"
		var annullaA = "Shut Down,Cancel"
		var profiloA = "Profile"
		
	}
	else if(localStorage.getItem("lingua")=="fr"){
		
		var alertattenzione = "Attention"
		var chiudereA = "Voulez-vous fermer purple miles?"
		var spegniA = "fermer"
		var annullaA = "fermer,annuler"
		var profiloA = "Profil"
		
	}
	else if(localStorage.getItem("lingua")=="es"){
		
		var alertattenzione = "Attenciòn"
		var chiudereA = "querer cerrar purple miles?"
		var spegniA = "Cerca"
		var annullaA = "Cerca,Cancela"
		var profiloA = "Perfil"
		
	}
	else{
		var alertattenzione = "Attention"
		var chiudereA = "do you want close purple miles?"
		var spegniA = "Shut Down"
		var annullaA = "Shut Down,Cancel"
		var profiloA = "Profilo"
	}
	
	
	//navigator.geolocation.getCurrentPosition(gpsonSuccess, gpsonError, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
	//ANDROID -------------------------------------------------------
	
	document.addEventListener('backbutton', function(e) {
							  
	 /*if(localStorage.getItem("pagina")=="mappa"){
		
		localStorage.setItem("dovesono", "0")
							  
		window.location.href = "index.html";
	  
	  }*/
							  
	  //if(localStorage.getItem("pagina")=="1"){
	
			navigator.notification.confirm(
			 chiudereA,  // message
			 onConfirm2,              // callback to invoke with index of button pressed
			spegniA,            // title
			annullaA      // buttonLabels
		    );
							  
	   //}
							  
	   /*if(localStorage.getItem("pagina")=="magia"){
			var connectionStatus = false;
			connectionStatus = navigator.onLine ? 'online' : 'offline';
							  
			if(connectionStatus=='online'){
							  
				$("#magia").hide();
				$("#puntina").hide();
							  
				resetta1(1);
			}
			else
			{
				window.location.href = "index.html";
			}
							  
		}*/
							  
		/*if(localStorage.getItem("pagina")=="chat"){
			$("#tblchat").hide()
							  
			$("#chiudichat").click();
							  

		}*/
							  
							  
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
	
	LoginVera()
	
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	
	
	$(".spinner").show();
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
	
	if(connectionStatus=='online'){
		$('#noconn').hide();
		//controllachat(1)
		
		localStorage.setItem("aspetta","0")
		localStorage.setItem("chatpass", "")
		localStorage.setItem("notap","0")
			
		playAudioA('successSound');
		
		
		startgps();
		
		
		/////// GEO TRAKER IOS //////
		
		/*window.navigator.geolocation.getCurrentPosition(function(location) {
			console.log('Location from Phonegap');
		});
		
		var bgGeo = window.plugins.backgroundGeoLocation;
		
		var yourAjaxCallback = function(response) {

			bgGeo.finish();
		};
		

		var callbackFn = function(location) {
			
			$.ajax({
				   type:"GET",
				   url:"http://purplemiles.com/www2/check_richiesta_autistaV4.php?email="+ localStorage.getItem("email") +"&latitudine="+ location.latitude +"&longitudine="+ location.longitude +"&id_autista="+ localStorage.getItem("id_autista") +"&fuso="+ localStorage.getItem("citta") +"&ora_cell="+ localStorage.getItem("ora_cell") +"",
				   contentType: "application/json",
				   contentType: "application/json",
				   //data: {ID: "Lazio"}, LIMIT 10
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   
				   },
				   error: function(){
				   
				   
				   },
				   dataType:"jsonp"});
			
			
			yourAjaxCallback.call(this);
			
		};
		
		
		var failureFn = function(error) {
			console.log('BackgroundGeoLocation error');
		}
		
		
		bgGeo.configure(callbackFn, failureFn, {
						desiredAccuracy: 3,
						stationaryRadius: 10,
						distanceFilter: 20,
						activityType: 'AutomotiveNavigation'*/
						//debug: true
						//stopOnTerminate: false
		//});

		/////// FINE GEO TRAKER IOS//////
		
		
		
		/////// GEO TRAKER ANDROID //////
		
		window.navigator.geolocation.getCurrentPosition(function(location) {
			console.log('Location from Phonegap');
		});
		
		
		var callbackFn = function(location) {
			
			$.ajax({
				   type:"GET",
				   url:"http://purplemiles.com/www2/check_richiesta_autistaV4.php?email="+ localStorage.getItem("email") +"&latitudine="+ location.latitude +"&longitudine="+ location.longitude +"&id_autista="+ localStorage.getItem("id_autista") +"&fuso="+ localStorage.getItem("citta") +"&ora_cell="+ localStorage.getItem("ora_cell") +"",
				   contentType: "application/json",
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				     backgroundGeolocation.finish();
				   },
				   error: function(){
				     backgroundGeolocation.finish();
				   },
				   dataType:"jsonp"});
				   
			
		};
		
		
		var failureFn = function(error) {
			console.log('BackgroundGeoLocation error');
		}
		
		
		backgroundGeolocation.configure(callbackFn, failureFn, {
			desiredAccuracy: 3,
			stationaryRadius: 10,
			distanceFilter: 20,
			locationProvider: backgroundGeolocation.provider.ANDROID_ACTIVITY_PROVIDER,
			interval: 30000,
			fastestInterval: 5000,
			activitiesInterval: 10000,
			//debug: true,
			notificationTitle: 'Background tracking',
			notificationText: 'enabled',
			notificationIconColor: '#FEDD1E',
			notificationIconLarge: 'mappointer_large',
			notificationIconSmall: 'mappointer_small'
		});
		
		
		/////// FINE GEO TRAKER /////////
		
		
		$(".spinner").hide();
		
	}
	
	else{
		
		$("#led").html("<img src='img/ledrosso.png' width='25px'>");
		$("#led5").html("<img src='img/ledrosso.png' width='25px'>");
		
		
		setTimeout(function() {
			window.location.href = "index.html";
		}, 2500);
		
	}
	
		$(document).on("tap", "#esciapp", function(e){
				   
		  playAudio('successSound');
				   
	   	  e.stopImmediatePropagation();
				   
		  e.preventDefault();
				   
		  return false;
				   
		   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	
	$(document).on("tap", "#ciccio", function(e){
				   
		window.location.href = "index2.html";
				   
		e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
			
	});
	
	$(document).on("touchstart", "#chiudibanner", function(e){
				   localStorage.setItem("nobanner","1")
				   $("#bannerp").hide()
				   
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
		my_media.setVolume('7.0');
		my_media.play();
		
		setTimeout(function() {
		   my_media.stop();
		}, 3000);
	}
	
	//localStorage.setItem("lat", "41.889191")
	//localStorage.setItem("lng", "12.492475")
	
	
	var altezzatbl = getRealContentHeight()+40;
	if(localStorage.getItem("okprima")!="1"){
	  var altezzatbl2 = getRealContentHeight()-10;
	}
	else{
	   var altezzatbl2 = getRealContentHeight()-30;
	}
	
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
	
	//alert(altezzatbl2)
	
	
	//alert(screen.width)
	
	//alert(screen.height)
	
	
	var isMobileScreenWidth = (screen.width / window.devicePixelRatio)
	
	var isMobileScreenHeight = (screen.height / window.devicePixelRatio)
	
	
	
	if(isMobileScreenWidth < 768){

		if(isMobileScreenHeight < 540){
			
			$("#tblhome").html('<table id="tblhome" width="90%" height="'+ altezzatbl2 +'" border="0" valign="center" align="center" class="tabella"><tr height="48%"><td width="100%" align="center"><a id="mappa6" href="#" rel="external" class="hvr-wobble-vertical"><img src="img/Volante.png" width="80px"><p class="testo_sottotitoloIP4" id="vea">Voglio essere AUTISTA</p></a><table><tr><td><table id="profiloperc" class="button_small"><tr><td><font color="#FFF" size="4" class="testo_biancoIP4">'+ profiloA +' '+ localStorage.getItem("perc_autista") +'%</font></td></tr></table></td><td><div id="stelleautista"></div></td></tr></table></td></tr><tr height="2%"><td width="70%" align="center"><table width="70%"><tr><td><hr></td></tr></table></td></tr><tr height="48%"> <td width="100%" align="center"><a id="mappa7" href="#" rel="external" class="hvr-wobble-vertical"><img src="img/Valigia.png" width="80px"><p class="testo_sottotitoloIP4" id="vep">Voglio essere PASSEGGERO</p></a><table><tr><td><table id="profiloperc2" class="button_small"><tr><td><font color="#FFF" size="4" class="testo_biancoIP4">'+ profiloA +' '+ localStorage.getItem("perc_pass") +'%</font></td></tr></table></td><td><div id="stellepass"></div></td></tr></table></td> </tr><tr height="10%"> <td width="100%" align="center"></td></tr></table><br>')
		}
		else{
			$("#tblhome").html('<table id="tblhome" width="90%" height="'+ altezzatbl2 +'" border="0" valign="center" align="center" class="tabella"><tr height="48%"><td width="100%" align="center"><a id="mappa6" href="#" rel="external" class="hvr-wobble-vertical"><img src="img/Volante.png" width="110px"><p class="testo_sottotitolo" id="vea">Voglio essere AUTISTA</p></a><table><tr><td><table id="profiloperc" class="button_small"><tr><td><font color="#FFF" size="4" class="testo_bianco">'+ profiloA +' '+ localStorage.getItem("perc_autista") +'%</font></td></tr></table></td><td><div id="stelleautista"></div></td></tr></table></td></tr><tr height="2%"><td width="70%" align="center"><table width="70%"><tr><td><hr></td></tr></table></td></tr><tr height="48%"> <td width="100%" align="center"><a id="mappa7" href="#" rel="external" class="hvr-wobble-vertical"><img src="img/Valigia.png" width="105px"><p class="testo_sottotitolo" id="vep">Voglio essere PASSEGGERO</p></a><table><tr><td><table id="profiloperc2" class="button_small"><tr><td><font color="#FFF" size="4" class="testo_bianco">'+ profiloA +' '+ localStorage.getItem("perc_pass") +'%</font></td></tr></table></td><td><div id="stellepass"></div></td></tr></table></td> </tr><tr height="10%"> <td width="100%" align="center"></td></tr></table><br>')
		}
		
	}
	else
	{
		
		if(isMobileScreenWidth > 719){
		
		   $("#tblhome").html('<table id="tblhome" width="90%" height="'+ altezzatbl2 +'" border="0" valign="center" align="center" class="tabella"><tr height="48%"><td width="100%" align="center"><a id="mappa6" href="#" rel="external" class="hvr-wobble-vertical"><img src="img/Volante.png" width="210px"><p class="testo_sottotitoloIPAD" id="vea">Voglio essere AUTISTA</p></a><table><tr><td><table id="profiloperc" class="button_small"><tr><td><font color="#FFF" size="4" class="testo_biancoIPAD">'+ profiloA +' '+ localStorage.getItem("perc_autista") +'%</font></td></tr></table></td><td><div id="stelleautista"></div></td></tr></table></td></tr><tr height="2%"><td width="70%" align="center"><table width="70%"><tr><td><hr></td></tr></table></td></tr><tr height="48%"> <td width="100%" align="center"><a id="mappa7" href="#" rel="external" class="hvr-wobble-vertical"><img src="img/Valigia.png" width="210px"><p class="testo_sottotitoloIPAD" id="vep">Voglio essere PASSEGGERO</p></a><table><tr><td><table id="profiloperc2" class="button_small"><tr><td><font color="#FFF" size="4" class="testo_biancoIPAD">'+ profiloA +' '+ localStorage.getItem("perc_pass") +'%</font></td></tr></table></td><td><div id="stellepass"></div></td></tr></table></td> </tr><tr height="10%"> <td width="100%" align="center"></td></tr></table><br>')
		}
		else{
			$("#tblhome").html('<table id="tblhome" width="90%" height="'+ altezzatbl2 +'" border="0" valign="center" align="center" class="tabella"><tr height="48%"><td width="100%" align="center"><a id="mappa6" href="#" rel="external" class="hvr-wobble-vertical"><img src="img/Volante.png" width="110px"><p class="testo_sottotitolo" id="vea">Voglio essere AUTISTA</p></a><table><tr><td><table id="profiloperc" class="button_small"><tr><td><font color="#FFF" size="4" class="testo_bianco">'+ profiloA +' '+ localStorage.getItem("perc_autista") +'%</font></td></tr></table></td><td><div id="stelleautista"></div></td></tr></table></td></tr><tr height="2%"><td width="70%" align="center"><table width="70%"><tr><td><hr></td></tr></table></td></tr><tr height="48%"> <td width="100%" align="center"><a id="mappa7" href="#" rel="external" class="hvr-wobble-vertical"><img src="img/Valigia.png" width="105px"><p class="testo_sottotitolo" id="vep">Voglio essere PASSEGGERO</p></a><table><tr><td><table id="profiloperc2" class="button_small"><tr><td><font color="#FFF" size="4" class="testo_bianco">'+ profiloA +' '+ localStorage.getItem("perc_pass") +'%</font></td></tr></table></td><td><div id="stellepass"></div></td></tr></table></td> </tr><tr height="10%"> <td width="100%" align="center"></td></tr></table><br>')
		}
	}
	
	
	
	$("#nickhome").html(localStorage.getItem("nick"));
	$("#nickhome3").html(localStorage.getItem("nick"));
	
	var height = getRealContentHeight();
	$("#tblhome").attr("height",height);
	$("#tblhome3").attr("height",height);
	
	setTimeout(function() {
	  $("#tblhome").fadeIn(1500)
	}, 500);
	
	localStorage.setItem("okprima", "1")
	
	
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
				   
		var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
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
				   
		var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
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
	var refreshPos5;
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
	var posticipata1;
	
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
	var posticipata2;
	
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
	var posticipata3;
	
	var muoviti;
	var setGPS;
	localStorage.setItem("setGPS","0")
	localStorage.setItem("muoviti","1")
	
	var watchID = null;
	var watchID2 = null;
	var watchID5 = null;
    
    // DB //
    
    
    var dsconn;
	var Tdsconn;
    var btnModifica;
    var pagina4quando;
    var s_partenza;
    var magiatitolo;
    var partenzaM;
    var arrivoM;
    var distanzaM;
	
	var h5arrivo;
	var h5partenza;
    
    var db;
    db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
    
    db.transaction(function (tx) {
                   
                   tx.executeSql('SELECT * FROM TestiV2', [], function (tx, results) {
                        var len = results.rows.length, i;
                                 
                            if(localStorage.getItem("lingua")=="it"){
                                 
								 Tdsconn = "Esci"
								 for (i = 0; i < len; i++){
                                 
                                    $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).italiano.replace("P0011", "'"));
                                 
                                 if(results.rows.item(i).id_traduzione == "dsconn"){
                                   dsconn = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "btnModifica"){
                                   btnModifica = results.rows.item(i).italiano.replace("P0011", "'");
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "inizia"){
                                  $("#inizia").html('<font color="#fff"><b>'+ results.rows.item(i).italiano.replace("P0011", "'") +'</b></font>')
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "s_partenza"){
                                   s_partenza = results.rows.item(i).italiano.replace("P0011", "'");
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "magiatitolo"){
                                   magiatitolo = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "partenzaM"){
                                   partenzaM = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "arrivoM"){
                                   arrivoM = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "distanzaM"){
                                   distanzaM = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "h5arrivo"){
								  h5arrivo = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h5partenza"){
								  h5partenza = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 }
								 
								 
                               }
                                 
                            }
                                 
                                 
                            if(localStorage.getItem("lingua")=="en"){
								 
								 Tdsconn = "Logout"
                                 for (i = 0; i < len; i++){
                                 
                                    $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
                                 
                                        if(results.rows.item(i).id_traduzione == "dsconn"){
                                            dsconn = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                        }
                                 
                                 
                                        if(results.rows.item(i).id_traduzione == "btnModifica"){
                                          btnModifica = results.rows.item(i).inglese.replace("P0011", "'");
                                        }
                                 
                                        if(results.rows.item(i).id_traduzione == "inizia"){
                                            $("#inizia").html('<font color="#fff"><b>'+ results.rows.item(i).inglese.replace("P0011", "'") +'</b></font>')
                                 
                                        }
                                 
                                        if(results.rows.item(i).id_traduzione == "s_partenza"){
                                          s_partenza = results.rows.item(i).inglese.replace("P0011", "'");
                                        }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "magiatitolo"){
                                   magiatitolo = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "partenzaM"){
                                   partenzaM = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "arrivoM"){
                                   arrivoM = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "distanzaM"){
                                   distanzaM = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "h5arrivo"){
								 h5arrivo = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h5partenza"){
								 h5partenza = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 }

                            }
                                 
                        }
								 
						if(localStorage.getItem("lingua")=="fr"){
								 
							Tdsconn = "Logout"
							for (i = 0; i < len; i++){
								 
								 $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).francese.replace("P0011", "'"));
								 
								 if(results.rows.item(i).id_traduzione == "dsconn"){
								  dsconn = results.rows.item(i).francese.replace("P0011", "'");
								  dsconn = results.rows.item(i).francese.replace("&eacute;", "è");
								 
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "btnModifica"){
								  btnModifica = results.rows.item(i).francese.replace("P0011", "'");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "inizia"){
								  $("#inizia").html('<font color="#fff"><b>'+ results.rows.item(i).inglese.replace("P0011", "'") +'</b></font>')
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "s_partenza"){
								  s_partenza = results.rows.item(i).francese.replace("P0011", "'");
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "magiatitolo"){
								  magiatitolo = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "partenzaM"){
								  partenzaM = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "arrivoM"){
								  arrivoM = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "distanzaM"){
								  distanzaM = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h5arrivo"){
								 h5arrivo = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h5partenza"){
								 h5partenza = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 
								}
								 
							}
								 
								 
							if(localStorage.getItem("lingua")=="es"){
							
							  Tdsconn = "Logout"
							  for (i = 0; i < len; i++){
								 
								 $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).spagnolo.replace("P0011", "'"));
								 
								 if(results.rows.item(i).id_traduzione == "dsconn"){
								 dsconn = results.rows.item(i).spagnolo.replace("P0011", "'");
								 dsconn = results.rows.item(i).spagnolo.replace("&iacute;", "ì");
								 dsconn = results.rows.item(i).spagnolo.replace("&eacute;", "è");
								 dsconn = results.rows.item(i).spagnolo.replace("&oacute;", "ò")
								 dsconn = results.rows.item(i).spagnolo.replace("&iquest;", "¿");
								 
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "btnModifica"){
								 btnModifica = results.rows.item(i).spagnolo.replace("P0011", "'");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "inizia"){
								 $("#inizia").html('<font color="#fff"><b>'+ results.rows.item(i).inglese.replace("P0011", "'") +'</b></font>')
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "s_partenza"){
								 s_partenza = results.rows.item(i).spagnolo.replace("P0011", "'");
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "magiatitolo"){
								 magiatitolo = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "partenzaM"){
								 partenzaM = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "arrivoM"){
								 arrivoM = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "distanzaM"){
								 distanzaM = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h5arrivo"){
								 h5arrivo = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h5partenza"){
								 h5partenza = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 
								}
								 
							}
								 
								 
								 
								 
                    }, null);
                });
	
	
    //////
	
	
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
			

			for(i=0; i<10; i++)
			{
				navigator.app.exitApp();
			}
			
			//navigator.app.exitApp();
			
			navigator.device.exitApp();
			
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
				   
		  var ref = window.open('http://www.purplemiles.com/www/profile.php?lang='+ localStorage.getItem("lingua") +'&id='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_system', 'location=no');
				   
	   	  e.stopImmediatePropagation();
				   
		  e.preventDefault();
				   
		  return false;
				   
		   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	
	$(document).on("tap", "#legenda1", function(e){
				   
		var ref = window.open('http://pm.purplemiles.com/guida/', '_blank', 'location=no');
	
	    //http://pm.purplemiles.com/guida/index.php?lang='+ localStorage.getItem("lingua") +'
	});
	
	
	$(document).on("touchstart tap", "#profiloperc2", function(e){
				   
		  var ref = window.open('http://www.purplemiles.com/www/profile.php?lang='+ localStorage.getItem("lingua") +'&id='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_system', 'location=no');
				   
	   	  e.stopImmediatePropagation();
				   
		  e.preventDefault();
				   
		  return false;
				   
		  if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart", "#lista", function(e){
				   lista5();
				   controllachat5();
				   
				   localStorage.setItem("chatpass5", "")
				
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
				   
				   $("#btnGPS").removeClass("button_gps").addClass("button_gps_fade");
				   $("#Modifica").removeClass("button_gps_fade").addClass("button_gps");
				   
				   $("#btninizia").removeClass("divAA").addClass("div55");
				   
				   
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
				   
				   $("#btnGPS").removeClass("button_gps_fade").addClass("button_gps");
				   $("#Modifica").removeClass("button_gps").addClass("button_gps_fade");
				   
				   
				   if(localStorage.getItem("lingua")=="it"){
				   
					 $("#modificastart").attr("placeholder", "Indirizzo dell'autista");
				   
				   }
				   else if(localStorage.getItem("lingua")=="en"){
				   
				     $("#modificastart").attr("placeholder", "Driver address");
				   
				   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				     $("#modificastart").attr("placeholder", "Adresse du chauffeur");
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				     $("#modificastart").attr("placeholder", "Direcciòn del conductor");
				   
				   }
				   else{
				   
				     $("#modificastart").attr("placeholder", "Indirizzo dell'autista");
				   
				   }
				   

				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	
	// era qui
	
	
	$(document).on("touchstart", "#ritorna5", function(e){
		
				   
		$.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
				   
		e.stopImmediatePropagation();
				   
	    e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart tap", "#indietro6", function(e){
		$("#tblchat").hide()
				   
		for(i=0; i<10000; i++)
		{
			window.clearInterval(i);
		}
				   
				   // Chiamo funzione per dire che non sei autista
				   $.ajax({
						  type:"GET",
						  url:"http://purplemiles.com/www2/check_noautista.php?id_autista="+ localStorage.getItem("id_autista") +"",
						  contentType: "application/json",
						  //data: {ID: "Lazio"}, LIMIT 10
						  timeout: 7000,
						  jsonp: 'callback',
						  crossDomain: true,
						  success:function(result){
						  
						   // LoginVera()
						  
						  },
						  error: function(){
						  
						  
						  
						  },
						  dataType:"jsonp"});
				   
				   
		window.location.href = "index.html?id=2";

	});
	
    
	$(document).on("touchstart", "#resetta", function(e){
				   
				   // Chiamo funzione per dire che non sei autista
				   $.ajax({
						  type:"GET",
						  url:"http://purplemiles.com/www2/check_noautista.php?id_autista="+ localStorage.getItem("id_autista") +"",
						  contentType: "application/json",
						  //data: {ID: "Lazio"}, LIMIT 10
						  timeout: 7000,
						  jsonp: 'callback',
						  crossDomain: true,
						  success:function(result){
						  
						    //LoginVera()
						  
						  },
						  error: function(){
						  
						  
						  
						  },
						  dataType:"jsonp"});

				   
		window.location.href = "index.html";
	});
	
	$(document).on("touchstart tap", "#mappa7", function(e){
		//backgroundGeolocation.stop();
		
		localStorage.setItem("dovesono", "3");
				   
		// finish GEO TRAKER
		//bgGeo.stop();
		for(i=0; i<10000; i++)
		{
			window.clearInterval(i);
		}

				   
		setTimeout(function() {
			window.location.href = "mappass.html";
		}, 500);

		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#mappa6", function(e){
		
		for(i=0; i<10000; i++)
		{
			window.clearInterval(i);
		}
		
		
		document.ontouchmove = function(e){
		  return true;
		}
				   
      localStorage.setItem("tastiera","0")
				   
	  localStorage.setItem("pagina","mappa")
		
	  var connectionStatus = false;
	  connectionStatus = navigator.onLine ? 'online' : 'offline';
				   
	  if(connectionStatus=='online'){
				   
				   $.ajax({
						  type:"GET",
						  url:"http://purplemiles.com/www2/check_siautista.php?id_autista="+ localStorage.getItem("id_autista") +"",
						  contentType: "application/json",
						  //data: {ID: "Lazio"}, LIMIT 10
						  timeout: 7000,
						  jsonp: 'callback',
						  crossDomain: true,
						  success:function(result){
						  
						    //alert("OK")
						  
						     setTimeout(function() {
										
							   resetta1();
							  }, 300);
						  
						  },
						  error: function(){

						  },
						  dataType:"jsonp"});
		
	  }
	  else
	  {
		
			if(localStorage.getItem("lingua")=="it"){
				   
				   var alertattenzione = "Attenzione"
				   var chiudere = "Possibile errore di rete, riprova tra qualche minuto."
				   
				   
			}
			else if(localStorage.getItem("lingua")=="en"){
				   
				   var alertattenzione = "Attention"
				   var chiudere = "Possible network error, please try again in a few minutes"

				   
			}
			else if(localStorage.getItem("lingua")=="fr"){
				   
				   var alertattenzione = "Attention"
				   var chiudere = "Erreur rèseau possible, s'il vous plaît essayer à nouveau dans quelques minutes"
				   
				   
			}
			else if(localStorage.getItem("lingua")=="es"){
				   
				   var alertattenzione = "Attenciòn"
				   var chiudere = "Posible error en la red, por favor intente nuevamente en unos minutos"
				   
				   
			}
			else{
				   
				   var alertattenzione = "Attention"
				   var chiudere = "Possible network error"

			}
				   
				   
		  navigator.notification.alert(
			   chiudere,  // message
			   alertDismissed,         // callback
			   alertattenzione,           // title
			   'Ok'                  // buttonName
		   );
	  }
				   
	  e.stopImmediatePropagation();
				   
	  e.preventDefault();
				   
	 return false;
				   
	 if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
				   
	});
	
	$(document).on("touchstart tap", "#tornareset", function(e){
				   
		//bgGeo.stop();

		//backgroundGeolocation.stop();
		
				   
		var connectionStatus = false;
			connectionStatus = navigator.onLine ? 'online' : 'offline';
				   
			if(connectionStatus=='online'){
				   
				$("#win2header").html(s_partenza);
				$("#XXX").show();
				$("#tornareset").hide();
				   
				$("#magia").hide();
				//$("#puntina").hide();
				   
				setTimeout(function() {
					$.mobile.changePage( "#home4", { transition: "slide", changeHash: false, reverse: true });
				}, 5000);
			
				resetta1(1);
				   
			}
			else
			{
				setTimeout(function() {
					$("#tornareset").tap();
				}, 5000);
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
				   
				   if(localStorage.getItem("lingua")=="it"){
				   
				   var alertattenzione = "Attenzione"
				   var annallab = "Ok,Annulla"
				   
				   
				   }
				   else if(localStorage.getItem("lingua")=="en"){
				   
				   var alertattenzione = "Attention"
				   var annallab = "Ok,Cancel"
				   
				   
				   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				    var alertattenzione = "Attention"
				    var annallab = "Ok,Annuler"
				   
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				    var alertattenzione = "Attention"
				    var annallab = "Ok,Cancela"
				   
				   
				   }
				   else{
				   
				   var alertattenzione = "Attention"
				   var annallab = "Ok,Cancel"
				   
				   }
				   
				   navigator.notification.confirm(
												  dsconn + " " + localStorage.getItem("nick"),  // message
												  onConfirm,              // callback to invoke with index of button pressed
												  Tdsconn,            // title
												  annallab      // buttonLabels
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
				   
		
		for(i=0; i<10000; i++)
		{
		   window.clearInterval(i);
		}
				   
		
		   // Chiamo funzione per dire che non sei autista
				   $.ajax({
						  type:"GET",
						  url:"http://purplemiles.com/www2/check_noautista.php?id_autista="+ localStorage.getItem("id_autista") +"",
						  contentType: "application/json",
						  //data: {ID: "Lazio"}, LIMIT 10
						  timeout: 7000,
						  jsonp: 'callback',
						  crossDomain: true,
						  success:function(result){
						  
							//alert("OK1")
						  
						    localStorage.setItem("dovesono", "0")
						  
						    /*$.each(result, function(i,item){
								 
								 if(item.Token==1){
								 
								   resetta1(1)
								 }
								 
							});*/
						  
						  },
						  error: function(){
						  
						  /*navigator.notification.alert(
													   'Possibile errore di rete, riprova tra qualche minuto.',  // message
													   alertDismissed,         // callback
													   'Attenzione',           // title
													   'Ok'                  // buttonName
													   );*/
						  
						  
						  
						  },
						  dataType:"jsonp"});
				   
		
		window.location.href = "index.html";
		var altezzatbl2 = getRealContentHeight()-10;
				   
		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#XX3", function(e){
				   localStorage.setItem("ritornaweb","0")
				   
				   
				   $.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
				   
				   
				   if(localStorage.getItem("stomessa")=="1"){
				   
				   localStorage.setItem("primavolta","0");
				   
				   for(i=0; i<10000; i++)
				   {
				   window.clearInterval(i);
				   }
				   
				   resetta1(1)
				   }
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#inizia", function(e){
				   
				   if(localStorage.getItem("lingua")=="it"){
				   
				    var alertgps = "Inserire un indirizzo valido o utilizzare la posizione GPS"
				    var indirizzob = "Indirizzo"
				   
				   
				   }
				   else if(localStorage.getItem("lingua")=="en"){
				   
				    var alertgps = "Enter a valid address or use the GPS position"
				    var indirizzob = "Address"
				   
				   
				   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				    var alertgps = "Entrez une adresse valide ou utiliser la position GPS"
				    var indirizzob = "Addresse"
				   
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				   var alertgps = "Insertar una direcciòn vàlida o utilizar su posiciòn GPS"
				   var indirizzob = "Address"
				   
				   }
				   
				   else{
				   
				    var alertgps = "Enter a valid address or use the GPS position"
				    var indirizzob = "Direction"
				   
				   }
		
				   
				   //bgGeo.start();
					
						
					$('#modificastart').blur()
					$('#inizia').blur()
				   
				   localStorage.setItem("notap","1")
				   
				   if(localStorage.getItem("setGPS") == 1){
				   
					 if (document.getElementById("modificastart").value == "") {
						 navigator.notification.alert(
												alertgps,  // message
												alertDismissed,         // callback
												indirizzob,            // title
												'OK'                  // buttonName
												);
				   
						 return;
					   }
				   }
				   
				   localStorage.setItem("pagina","inizia")
				   $("#win2header").html(s_partenza);
				   
				   	setTimeout(function() {
						start();
					}, 200);
				   

				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#back3", function(e){
				   
		localStorage.setItem("tastiera","1");
				   
		var e = jQuery.Event("keydown");
		e.which = 13; // # Some key code value
		e.keyCode = 13
		$("#back3").trigger(e);
				   
				   
		//setTimeout(function() {
		    //inviopasseggero(3);
	      //}, 500);
		  
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
				   
				   if(localStorage.getItem("aspetta")==0){
				     inviachat(6)
				   }
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart tap", "#back66", function(e){
		$("#spinner6").show();
				   
		if(localStorage.getItem("aspetta")==0){
			inviachat(66)
		}
				   
		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart tap", "#back65", function(e){
		$("#spinner5").show();
				   
				   if(localStorage.getItem("aspetta")==0){
				     inviachat(65)
				   }
				   
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
		
		setTimeout(function() {
		    inviopasseggero(1);
	      }, 200);
		          //inviopasseggero(1);
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#offerta", function(e){
		
		setTimeout(function() {
		    inviopasseggero(2);
	      }, 200);
		  
		          // inviopasseggero(2);
				   
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
	
	
	if(localStorage.getItem("lingua")=="it"){
		
		var alertattenzione = "Attenzione"
		var alertgps = "Possibile errore GPS, assicurati di avere il gps del telefono attivato."
		var indirizzob = "Indirizzo"
		
		
	}
	else if(localStorage.getItem("lingua")=="en"){
		
		var alertattenzione = "Attention"
		var alertgps = "Possible GPS error, make sure you have your GPS enabled phone."
		var indirizzob = "Address"
		
		
	}
	else if(localStorage.getItem("lingua")=="fr"){
		
		var alertattenzione = "Attention"
		var alertgps = "possible erreur de GPS, assurez-vous que vous avez le téléphone activé gps"
		var indirizzob = "Addresse"
		
		
	}
	else if(localStorage.getItem("lingua")=="es"){
		
		var alertattenzione = "Attenciòn"
		var alertgps = "posible error del GPS, asegúrese de que tiene el teléfono activado gps"
		var indirizzob = "Direcciòn"
		
		
	}
	else{
		
		var alertattenzione = "Attention"
		var alertgps = "Possible GPS error, make sure you have your GPS enabled phone."
		var indirizzob = "Address"
		
	}
	
	navigator.notification.alert(
								 alertgps,  // message
								 alertDismissed,         // callback
								 alertattenzione,           // title
								 'Ok'                  // buttonName
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
    
    var btnModifica;
    
    var dsconn;
	var Tdsconn;
    var btnModifica;
    
    var db;
    db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
    
    db.transaction(function (tx) {
                   
                   tx.executeSql('SELECT * FROM TestiV2', [], function (tx, results) {
                       var len = results.rows.length, i;
                                 
                            if(localStorage.getItem("lingua")=="it"){
                                 
								for (i = 0; i < len; i++){
                                  $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).italiano.replace("P0011", "'"));
                                 
                                    if(results.rows.item(i).id_traduzione == "btnModifica"){
                                     btnModifica = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 // Set CSS for the control border.
                                 var controlUI = document.createElement('div');
                                 controlUI.style.backgroundColor = 'transparent';
                                 controlUI.style.border = '0px solid #fff';
                                 controlUI.style.borderRadius = '3px';
                                 controlUI.style.boxShadow = '0 0px 0px rgba(0,0,0,.3)';
                                 controlUI.style.cursor = 'pointer';
                                 controlUI.style.marginBottom = '5px';
                                 controlUI.style.textAlign = 'center';
                                 controlUI.title = 'Click to recenter the map';
                                 controlUI.style.height = '5px';
                                 controlUI.style.width = '320px';
                                 //controlUI.style.display = 'none';
                                 controlDiv.appendChild(controlUI);
                                 
                                 // Set CSS for the control interior.
                                 var controlText = document.createElement('div');
                                 controlText.style.color = 'rgb(25,25,25)';
                                 controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
                                 controlText.style.fontSize = '12px';
                                 controlText.style.lineHeight = '10px';
                                 controlText.style.paddingLeft = '5px';
                                 controlText.style.paddingRight = '5px';
                                 controlText.innerHTML = '<table width="100%" border="0" class="tblmappa6" valign="top"><tr><td align="center" width="100%"><br><a id="btnGPS" href="#" class="button_gps_fade"><font color="#fff"><b>GPS</b></font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="Modifica" href="#" class="button_gps"><font color="#fff"><b>'+btnModifica+'</b></font></a></td></tr></table><br>';
                                 controlUI.appendChild(controlText);
                                 
                                   }
                                 
                                 }
                                 
                            }
							
							else if(localStorage.getItem("lingua")=="fr"){
								for (i = 0; i < len; i++){
								 $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).francese.replace("P0011", "'"));
								 
								 if(results.rows.item(i).id_traduzione == "btnModifica"){
								 btnModifica = results.rows.item(i).francese.replace("P0011", "'");
								 
								 // Set CSS for the control border.
								 var controlUI = document.createElement('div');
								 controlUI.style.backgroundColor = 'transparent';
								 controlUI.style.border = '0px solid #fff';
								 controlUI.style.borderRadius = '3px';
								 controlUI.style.boxShadow = '0 0px 0px rgba(0,0,0,.3)';
								 controlUI.style.cursor = 'pointer';
								 controlUI.style.marginBottom = '5px';
								 controlUI.style.textAlign = 'center';
								 controlUI.title = 'Click to recenter the map';
								 controlUI.style.height = '5px';
								 controlUI.style.width = '320px';
								 //controlUI.style.display = 'none';
								 controlDiv.appendChild(controlUI);
								 
								 // Set CSS for the control interior.
								 var controlText = document.createElement('div');
								 controlText.style.color = 'rgb(25,25,25)';
								 controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
								 controlText.style.fontSize = '12px';
								 controlText.style.lineHeight = '10px';
								 controlText.style.paddingLeft = '5px';
								 controlText.style.paddingRight = '5px';
								 controlText.innerHTML = '<table width="100%" border="0" class="tblmappa6" valign="top"><tr><td align="center" width="100%"><br><a id="btnGPS" href="#" class="button_gps_fade"><font color="#fff"><b>GPS</b></font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="Modifica" href="#" class="button_gps"><font color="#fff"><b>'+btnModifica+'</b></font></a></td></tr></table><br>';
								 controlUI.appendChild(controlText);
								 
								 }
								 
								}
							}
								 
							else if(localStorage.getItem("lingua")=="es"){
								for (i = 0; i < len; i++){
								 $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).spagnolo.replace("P0011", "'"));
								 
								 if(results.rows.item(i).id_traduzione == "btnModifica"){
								 btnModifica = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 // Set CSS for the control border.
								 var controlUI = document.createElement('div');
								 controlUI.style.backgroundColor = 'transparent';
								 controlUI.style.border = '0px solid #fff';
								 controlUI.style.borderRadius = '3px';
								 controlUI.style.boxShadow = '0 0px 0px rgba(0,0,0,.3)';
								 controlUI.style.cursor = 'pointer';
								 controlUI.style.marginBottom = '5px';
								 controlUI.style.textAlign = 'center';
								 controlUI.title = 'Click to recenter the map';
								 controlUI.style.height = '5px';
								 controlUI.style.width = '320px';
								 //controlUI.style.display = 'none';
								 controlDiv.appendChild(controlUI);
								 
								 // Set CSS for the control interior.
								 var controlText = document.createElement('div');
								 controlText.style.color = 'rgb(25,25,25)';
								 controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
								 controlText.style.fontSize = '12px';
								 controlText.style.lineHeight = '10px';
								 controlText.style.paddingLeft = '5px';
								 controlText.style.paddingRight = '5px';
								 controlText.innerHTML = '<table width="100%" border="0" class="tblmappa6" valign="top"><tr><td align="center" width="100%"><br><a id="btnGPS" href="#" class="button_gps_fade"><font color="#fff"><b>GPS</b></font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="Modifica" href="#" class="button_gps"><font color="#fff"><b>'+btnModifica+'</b></font></a></td></tr></table><br>';
								 controlUI.appendChild(controlText);
								 
								 }
								 
							  }
							}
								 
                            else {
								 
                                for (i = 0; i < len; i++){
								 
                                 $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
								 
                                  if(results.rows.item(i).id_traduzione == "btnModifica"){
                                   btnModifica = results.rows.item(i).inglese.replace("P0011", "'");
								 
                                 // Set CSS for the control border.
                                 var controlUI = document.createElement('div');
                                 controlUI.style.backgroundColor = 'transparent';
                                 controlUI.style.border = '0px solid #fff';
                                 controlUI.style.borderRadius = '3px';
                                 controlUI.style.boxShadow = '0 0px 0px rgba(0,0,0,.3)';
                                 controlUI.style.cursor = 'pointer';
                                 controlUI.style.marginBottom = '5px';
                                 controlUI.style.textAlign = 'center';
                                 controlUI.title = 'Click to recenter the map';
                                 controlUI.style.height = '5px';
                                 controlUI.style.width = '320px';
                                 //controlUI.style.display = 'none';
                                 controlDiv.appendChild(controlUI);
                                 
                                 // Set CSS for the control interior.
                                 var controlText = document.createElement('div');
                                 controlText.style.color = 'rgb(25,25,25)';
                                 controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
                                 controlText.style.fontSize = '12px';
                                 controlText.style.lineHeight = '10px';
                                 controlText.style.paddingLeft = '5px';
                                 controlText.style.paddingRight = '5px';
                                 controlText.innerHTML = '<table width="100%" border="0" class="tblmappa6" valign="top"><tr><td align="center" width="100%"><br><a id="btnGPS" href="#" class="button_gps_fade"><font color="#fff"><b>GPS</b></font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="Modifica" href="#" class="button_gps"><font color="#fff"><b>'+btnModifica+'</b></font></a></td></tr></table><br>';
                                 controlUI.appendChild(controlText);
                                 
                                  }

                                }
                                 
                            }
                                 
                    }, null);
                });
    

    
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
	//controlText.innerHTML = '<table width="100%" border="0" class="xalto"><tr><td align="right">&nbsp;<br><br></td></tr></table><table border="0" width="100%" align="right" valign="top" class="bannertbl3"><tr><td align="right" valign="top">&nbsp;&nbsp;<a id="XXX" href="#" rel="external"><img src="img/ico_close1.png" width="45px"></a></td></tr></table>';
	controlUI.appendChild(controlText);
	
	
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
			
		  //alert("K")
			
          setTimeout(function() {
		    inviopasseggero(3);
	      }, 200);
		}
	}
 }
	
 /*if(localStorage.getItem("pagina")=="chat"){
	 if ( key == null ) {
		 keycode = event.keyCode;
		 
	 } else {
		 keycode = key.keyCode;
	 }
	 
	 if (keycode ==13){
		 
		setTimeout(function() {
		  inviachat();
		}, 200);
		 
	 }
 }*/
	
	
}

function cambiap() {
    $('#footer').show();
    $.mobile.changePage ($("#home"));
}

function cambiah() {
	
	// Chiamo funzione per dire che non sei autista
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_noautista.php?id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		     //LoginVera()
		   
		   },
		   error: function(){
		   
		   
		   
		   },
		   dataType:"jsonp"});

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
					 
					 if(localStorage.getItem("lingua")=="it"){
					 
					  var alertattenzione = "Attenzione"
					  var alertgps = "Non riesco a rilevare la tua posizione"
					  var indirizzob = "Indirizzo"
					 
					 
					 }
					 else if(localStorage.getItem("lingua")=="en"){
					 
					  var alertattenzione = "Attention"
					  var alertgps = "I can not detect your location"
					  var indirizzob = "Address"
					 
					 
					 }
					 else if(localStorage.getItem("lingua")=="fr"){
					 
					   var alertattenzione = "Attention"
					   var alertgps = "Je ne peux pas détecter votre emplacement"
					   var indirizzob = "Addresse"
					 
					 
					 }
					 else if(localStorage.getItem("lingua")=="es"){
					 
					  var alertattenzione = "Attenciòn"
					  var alertgps = "No puedo detectar su ubicación"
					  var indirizzob = "Direction"
					 
					 
					 }
					 else{
					 
					  var alertattenzione = "Attention"
					  var alertgps = "I can not detect your location"
					  var indirizzob = "Address"
					 
					 }
					 
					 navigator.notification.alert(
												  alertgps,  // message
												  alertDismissed,         // callback
												  alertattenzione,            // title
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
	
	if(localStorage.getItem("lingua")=="it"){
		
		var alertattenzione = "Attenzione"
		var alertgps = "Inserire un indirizzo valido o utilizzare la posizione GPS"
		var indirizzob = "Indirizzo"
		
		
	}
	else if(localStorage.getItem("lingua")=="en"){
		
		var alertattenzione = "Attention"
		var alertgps = "Enter a valid address or use the GPS position"
		var indirizzob = "Address"
		
		
	}
	else if(localStorage.getItem("lingua")=="fr"){
		
		var alertattenzione = "Attention"
		var alertgps = "Entrez une adresse valide ou utiliser la position GPS"
		var indirizzob = "Addresse"
		
		
	}
	else if(localStorage.getItem("lingua")=="es"){
		
		var alertattenzione = "Attenciòn"
		var alertgps = "Insertar una direcciòn vàlida o utilizar su posiciòn GPS"
		var indirizzob = "Direcciòn"
		
		
	}
	else{
		
		var alertattenzione = "Attention"
		var alertgps = "Enter a valid address or use your GPS position"
		var indirizzob = "Address"
		
	}
	
	
	if (document.getElementById("modificastart").value == "") {
		navigator.notification.alert(
			 alertgps,  // message
			 alertDismissed,         // callback
			 indirizzob,            // title
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


function onPause() {

  for(i=0; i<10000; i++)
   {
	  window.clearInterval(i);
   }
   
   //bgGeo.start();
   backgroundGeolocation.start();
}



function onResume() {
	
	//bgGeo.stop();
	backgroundGeolocation.stop();
	
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
	
	$("#blob3").hide();
	$("#blob4").hide();
	$("#blob5").hide();
	
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
		 
		 $("#led").html("<img src='img/ledverde.png' width='25px'>");
	 }
	
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	
	
	var latlng = new google.maps.LatLng(lat, lng, 1);
	
	var $content = $("#win2 div:jqmData(role=content)");
		
	if(focus==1){
      $content.height (getRealContentHeight());
	}
	else{
	   $content.height (getRealContentHeight()-20);
	}
		
		
	  var options = {
	  zoom : 13,
	  center : latlng,
	  mapTypeId : google.maps.MapTypeId.ROADMAP,
	  scrollwheel	: false,
	  //zoomControl: true,
	  disableDefaultUI: true
  
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
		
		
		
		if(localStorage.getItem("notap")=="0"){
		
		
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
			
		}
		
	if(focus!=1){
		var centerControlDiv = document.createElement('div');
		centerControlDiv.setAttribute('id', 'sopra');
		var centerControl = new CenterControl(centerControlDiv, map);
		
		centerControlDiv.index = 1;
		map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
        
        seleziona();
	}

		
	if(focus==1){
		$("#btninizia").hide();
		$("#setGPS").hide();
		$("#Modifica").hide();
		$("#lista").hide();

        seleziona();
        
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
		$("#lista").hide();
		
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
				  
				  
				  //$("#pass0").show();
				  $("#win2header").html(s_partenza);
				  
				  
				  //$("#pass1").show();
				  //$("#esci").show();
				if(item.posticipata==1){
				  
				  if(item.accettata==1){
				   $("#lista").show();
				  }
				  
				  $("#pass1img").attr("src", "img/1_viola_pos.png");
				  
				  if(item.stato==3){
				  $("#pass1img").attr("src", "img/1_giallo_pos.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass1img").attr("src", "img/1_giallo_pos.png");
				  }
				  if(item.stato==0){
				  $("#pass1img").attr("src", "img/1_viola_pos.png");
				  }
				  if(item.stato==2){
				  
				  if(item.accettata==1){
				  $("#pass1img").attr("src", "img/1_verde_pos.png");
				  }
				  else{
				  $("#pass1img").attr("src", "img/1_giallo_pos.png");
				  }
				  
				  }
				  
				}
				else{
				  
				  $("#pass1img").attr("src", "img/1_viola.png");
				  
				  if(item.stato==3){
				  $("#pass1img").attr("src", "img/1_giallo.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass1img").attr("src", "img/1_giallo.png");
				  }
				  if(item.stato==0){
				  $("#pass1img").attr("src", "img/1_viola.png");
				  }
				  if(item.stato==2){
				  
				  if(item.accettata==1){
				  $("#pass1img").attr("src", "img/1_verde.png");
				  }
				  else{
				  $("#pass1img").attr("src", "img/1_giallo.png");
				  }
				  
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
				   if(item.accettata==1){
				    $("#lista").show();
				   }
				  
				  $("#pass2img").attr("src", "img/2_viola_pos.png");
				  
				  if(item.stato==3){
				  $("#pass2img").attr("src", "img/2_giallo_pos.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass2img").attr("src", "img/2_giallo_pos.png");
				  }
				  if(item.stato==0){
				  $("#pass2img").attr("src", "img/2_viola_pos.png");
				  }
				  if(item.stato==2){
				  
				  if(item.accettata==1){
				  $("#pass2img").attr("src", "img/2_verde_pos.png");
				  }
				  else{
				  $("#pass2img").attr("src", "img/2_giallo_pos.png");
				  }
				  
				  }

				}
				else
				{
				  
				  $("#pass2img").attr("src", "img/2_viola.png");
				  
				  if(item.stato==3){
				  $("#pass2img").attr("src", "img/2_giallo.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass2img").attr("src", "img/2_giallo.png");
				  }
				  if(item.stato==0){
				  $("#pass2img").attr("src", "img/2_viola.png");
				  }
				  if(item.stato==2){
				  
				  if(item.accettata==1){
				  $("#pass2img").attr("src", "img/2_verde.png");
				  }
				  else{
				  $("#pass2img").attr("src", "img/2_giallo.png");
				  }
				  
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
				   if(item.accettata==1){
				    $("#lista").show();
				   }
				  
				  $("#pass3img").attr("src", "img/3_viola_pos.png");
				  
				  if(item.stato==3){
				  $("#pass3img").attr("src", "img/3_giallo_pos.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass3img").attr("src", "img/3_giallo_pos.png");
				  }
				  if(item.stato==0){
				  $("#pass3img").attr("src", "img/3_viola_pos.png");
				  }
				  if(item.stato==2){
				  
				  if(item.accettata==1){
				  $("#pass3img").attr("src", "img/3_verde_pos.png");
				  }
				  else{
				  $("#pass3img").attr("src", "img/3_giallo_pos.png");
				  }
				  
				  }
				  
				  }
				  else{
				  
				  $("#pass3img").attr("src", "img/3_viola.png");
				  
				  if(item.stato==3){
				  $("#pass3img").attr("src", "img/3_giallo.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass3img").attr("src", "img/3_giallo.png");
				  }
				  if(item.stato==0){
				  $("#pass3img").attr("src", "img/3_viola.png");
				  }
				  if(item.stato==2){
				  
				  if(item.accettata==1){
				  $("#pass3img").attr("src", "img/3_verde.png");
				  }
				  else{
				  $("#pass3img").attr("src", "img/3_giallo.png");
				  }
				  
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
										'Ok'                  // buttonName
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
		  
		//alert("gps")

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
		
		localStorage.setItem("solouno", "0");
		localStorage.setItem("primavolta","0")
		tempo = 0;
		
		localStorage.setItem("nobanner","0")
		prendibanner();
		
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
	
	
	var dindon;
	if(localStorage.getItem("primavolta")=="0"){
	  var primavolta=3000;
	}
	else{
	  var primavolta=8000;
	}
	
	refreshIntervalId = setInterval(function() {
									
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
									
	if(connectionStatus=='online'){
									
									//alert("prova")
									//playAudio('successArrivo');
									
									
									if(localStorage.getItem("nobanner")=="0"){
									  prendibanner()
									}
									
									
									$("#led").html("<img src='img/ledverde.png' width='25px'>");
									
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
									dindon=0;
									
									$("#loading").hide();
									$("#btnpass").show();
									$("#lista").hide();

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
                                           
                                           /*if(localStorage.getItem("tutteleofferte")===JSON.stringify(result)){
												dindon=0;
                                           }
                                           else{
											  if (localStorage.getItem("tutteleofferte")!="null" || typeof(localStorage.getItem("tutteleofferte")) != 'undefined' || localStorage.getItem("tutteleofferte")!=0 || localStorage.getItem("tutteleofferte")!="") {
										   
										          if(localStorage.getItem("solouno")!="0"){
													 dindon=1;
												  }
										          else{
											         playAudio('successArrivo');
										          }
										      }

                                           }*/
										   
											   
											marker1.setIcon(iconn);
											marker3.setIcon(iconn);
											marker4.setIcon(iconn);
                                            localStorage.setItem("solouno", "1")
                                            //localStorage.setItem("tutteleofferte", JSON.stringify(result))

										   
										   $.each(result, function(i,item){
												  
												  
												  if(item.Token==3){
												  $("#pass1").hide();
												  $("#pass2").hide();
												  $("#pass3").hide();
												  
												  //$("#pass0").show();
												  $("#win2header").html(s_partenza);
												  }
												  
												  
												  if(item.Token==4){
												  $("#pass1").hide();
												  $("#pass2").hide();
												  $("#pass3").hide();
												  $("#esci").hide();
												  
												  //$("#pass0").show();
												  $("#win2header").html(s_partenza);
												  
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
												  /*if(dindon==1){
												     playAudio('successArrivo');
												  }*/
												  
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
												  posticipata1 = item.posticipata;

												  
												  if(localStorage.getItem("palla1")!="1"){
												  
												     palla1()
													 
												     //playAudio('successArrivo');
												     //SUONO RICEZIONE  if (localStorage.getItem("quando1")==quando1 && localStorage.getItem("ora1") == ora1 && localStorage.getItem("partenza1")==partenza1 && localStorage.getItem("arrivo1")==arrivo1 && localStorage.getItem("stato1")==stato1 && localStorage.getItem("passeggeri1")==passeggeri1 && localStorage.getItem("animali1")==animali1 && localStorage.getItem("fumatori1")==fumatori1 && localStorage.getItem("meno181")==meno181 && localStorage.getItem("disabili1")==disabili1 && localStorage.getItem("bambini1")==bambini1 && localStorage.getItem("wifi1")==wifi1 && localStorage.getItem("portapacchi1")==portapacchi1 && localStorage.getItem("rimorchio1")==rimorchio1 && localStorage.getItem("bluetooth1")==bluetooth1 && localStorage.getItem("note1")==note1 ) {
											       }
												
												  
												  if (localStorage.getItem("quando1")==quando1 && localStorage.getItem("ora1") == ora1 && localStorage.getItem("partenza1")==partenza1 && localStorage.getItem("arrivo1")==arrivo1 && localStorage.getItem("stato1")==stato1 && localStorage.getItem("passeggeri1")==passeggeri1 && localStorage.getItem("animali1")==animali1 && localStorage.getItem("fumatori1")==fumatori1 && localStorage.getItem("meno181")==meno181 && localStorage.getItem("disabili1")==disabili1 && localStorage.getItem("bambini1")==bambini1 && localStorage.getItem("wifi1")==wifi1 && localStorage.getItem("portapacchi1")==portapacchi1 && localStorage.getItem("rimorchio1")==rimorchio1 && localStorage.getItem("bluetooth1")==bluetooth1 && localStorage.getItem("note1")==note1 ) {
												  

												  }
												  else{
												  
												      playAudio('successArrivo');
													  dindon=1;

												  }

												  
												  
												  localStorage.setItem("quando1", quando1)
												  localStorage.setItem("ora1", ora1)
												  localStorage.setItem("partenza1", partenza1)
												  localStorage.setItem("arrivo1", arrivo1)
												  localStorage.setItem("stato1", stato1)
												  localStorage.setItem("passeggeri1", passeggeri1)
												  localStorage.setItem("animali1", animali1)
												  localStorage.setItem("fumatori1", fumatori1)
												  localStorage.setItem("meno181", meno181)
												  localStorage.setItem("disabili1", disabili1)
												  localStorage.setItem("bambini1", bambini1)
												  localStorage.setItem("wifi1", wifi1)
												  localStorage.setItem("portapacchi1", portapacchi1)
												  localStorage.setItem("rimorchio1", rimorchio1)
												  localStorage.setItem("bluetooth1", bluetooth1)
												  localStorage.setItem("note1", note1)
												  
												  
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
												   if(item.accettata==1){
												   $("#lista").show();
												   }
												  
												  $("#pass1img").attr("src", "img/1_viola_pos.png");
												  
												  if(item.stato==3){
												  $("#pass1img").attr("src", "img/1_giallo_pos.png");
												  }
												  
												  if(item.stato==1){
												  $("#pass1img").attr("src", "img/1_giallo_pos.png");
												  }
												  if(item.stato==0){
												  $("#pass1img").attr("src", "img/1_viola_pos.png");
												  }
												  if(item.stato==2){
												  
												  if(item.accettata==1){
												  $("#pass1img").attr("src", "img/1_verde_pos.png");
												  }
												  else{
												  $("#pass1img").attr("src", "img/1_giallo_pos.png");
												  }
												  
												  }
												}
												else{
												  
												  $("#pass1img").attr("src", "img/1_viola.png");
												  
												  if(item.stato==3){
												  $("#pass1img").attr("src", "img/1_giallo.png");
												  }
												  
												  if(item.stato==1){
												  $("#pass1img").attr("src", "img/1_giallo.png");
												  }
												  if(item.stato==0){
												  $("#pass1img").attr("src", "img/1_viola.png");
												  }
												  if(item.stato==2){
												  
												  if(item.accettata==1){
												  $("#pass1img").attr("src", "img/1_verde.png");
												  }
												  else{
												  $("#pass1img").attr("src", "img/1_giallo.png");
												  }
												  
												  }
												  
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
	
												  
												  //$("#pass0").hide();
												  //$("#win2header").html("In attesa di richieste");
												  
												  $("#pass1").show();
												  $("#pass2").hide();
												  $("#pass3").hide();
												  
												  
												  if(item.stato==2){

												  
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
												  //playAudio1('successArrivo');

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
												  posticipata2 = item.posticipata;
												  
												  if (localStorage.getItem("quando2")==quando2 &&
													  localStorage.getItem("ora2") == ora2 &&
													  localStorage.getItem("partenza2")==partenza2 &&
													  localStorage.getItem("arrivo2")==arrivo2 &&
													  localStorage.getItem("stato2")==stato2 &&
													  localStorage.getItem("passeggeri2")==passeggeri2 &&
													  localStorage.getItem("animali2")==animali2 &&
													  localStorage.getItem("fumatori2")==fumatori2 &&
													  localStorage.getItem("meno182")==meno182 &&
													  localStorage.getItem("disabili2")==disabili2 &&
													  localStorage.getItem("bambini2")==bambini2 &&
													  localStorage.getItem("wifi2")==wifi2 &&
													  localStorage.getItem("portapacchi2")==portapacchi2 &&
													  localStorage.getItem("rimorchio2")==rimorchio2 &&
													  localStorage.getItem("bluetooth2")==bluetooth2 &&
													  localStorage.getItem("note2")==note2) {
													 
												  
												  }
												  else{
												  
													  //alert(stato2)

												      playAudio('successArrivo');
												      dindon=1;
												  }
												  
												  
												  localStorage.setItem("quando2", quando2)
												  localStorage.setItem("ora2", ora2)
												  localStorage.setItem("partenza2", partenza2)
												  localStorage.setItem("arrivo2", arrivo2)
												  localStorage.setItem("stato2", stato2)
												  localStorage.setItem("passeggeri2", passeggeri2)
												  localStorage.setItem("animali2", animali2)
												  localStorage.setItem("fumatori2", fumatori2)
												  localStorage.setItem("meno182", meno182)
												  localStorage.setItem("disabili2", disabili2)
												  localStorage.setItem("bambini2", bambini2)
												  localStorage.setItem("wifi2", wifi2)
												  localStorage.setItem("portapacchi2", portapacchi2)
												  localStorage.setItem("rimorchio2", rimorchio2)
												  localStorage.setItem("bluetooth2", bluetooth2)
												  localStorage.setItem("note2", note2)
												  
												  if(localStorage.getItem("palla2")==1){
												  
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
												   if(item.accettata==1){
												    $("#lista").show();
												   }
												  
												  $("#pass2img").attr("src", "img/2_viola_pos.png");
												  
												  if(item.stato==3){
												  $("#pass2img").attr("src", "img/2_giallo_pos.png");
												  }
												  
												  if(item.stato==1){
												  $("#pass2img").attr("src", "img/2_giallo_pos.png");
												  }
												  if(item.stato==0){
												  $("#pass2img").attr("src", "img/2_viola_pos.png");
												  }
												  if(item.stato==2){
												  
												  if(item.accettata==1){
												  $("#pass2img").attr("src", "img/2_verde_pos.png");
												  }
												  else{
												  $("#pass2img").attr("src", "img/2_giallo_pos.png");
												  }
												  
												  }
												  
												  }
												  else{
												  
												  $("#pass2img").attr("src", "img/2_viola.png");
												  
												  if(item.stato==3){
												  $("#pass2img").attr("src", "img/2_giallo.png");
												  }
												  
												  if(item.stato==1){
												  $("#pass2img").attr("src", "img/2_giallo.png");
												  }
												  if(item.stato==0){
												  $("#pass2img").attr("src", "img/2_viola.png");
												  }
												  if(item.stato==2){
												  
												  if(item.accettata==1){
												  $("#pass2img").attr("src", "img/2_verde.png");
												  }
												  else{
												  $("#pass2img").attr("src", "img/2_giallo.png");
												  }
												  
												  }
												  
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
												  

												  
												  if(item.stato==2){
												  
												  if(item.accettata==0){
												   $("#blob4").show();
												  
												   for(i=0; i<10000; i++)
												   {
												    window.clearInterval(i);
												   }
												  
												  $("#viaaccetta2").html(item.partenza);
												   $("#adaccetta2").html(item.arrivo);
												  
												  function countdown2(minutes2) {
												  var seconds2 = 30;
												  var mins2 = minutes2
												  function tick2() {
												  var counter2 = document.getElementById("timer2");
												  var current_minutes2 = 0;
												  seconds2--;
												  counter2.innerHTML =
												  current_minutes2.toString() + ":" + (seconds2 < 10 ? "0" : "") + String(seconds2);
												  if( seconds2 > 0 ) {
												  setTimeout(tick2, 1000);
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
												  tick2();
												  }
												  
												  countdown2(0);
												  //playAudio2('successArrivo');
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
												  posticipata3 = item.posticipata;
												  
												  
												  if (localStorage.getItem("quando3")==quando3 && localStorage.getItem("ora3") == ora3 && localStorage.getItem("partenza3")==partenza3 && localStorage.getItem("arrivo3")==arrivo3 && localStorage.getItem("stato3")==stato3 && localStorage.getItem("passeggeri3")==passeggeri3 && localStorage.getItem("animali3")==animali3 && localStorage.getItem("fumatori3")==fumatori3 && localStorage.getItem("meno183")==meno183 && localStorage.getItem("disabili3")==disabili3 && localStorage.getItem("bambini3")==bambini3 && localStorage.getItem("wifi3")==wifi3 && localStorage.getItem("portapacchi3")==portapacchi3 && localStorage.getItem("rimorchio3")==rimorchio3 && localStorage.getItem("bluetooth3")==bluetooth3 && localStorage.getItem("note3")==note3 ) {
												  
												  }
												  else{

												      playAudio('successArrivo');
												      dindon=1;

												  }

												  

												  localStorage.setItem("quando3", quando3)
												  localStorage.setItem("ora3", ora3)
												  localStorage.setItem("partenza3", partenza3)
												  localStorage.setItem("arrivo3", arrivo3)
												  localStorage.setItem("stato3", stato3)
												  localStorage.setItem("passeggeri3", passeggeri3)
												  localStorage.setItem("animali3", animali3)
												  localStorage.setItem("fumatori3", fumatori3)
												  localStorage.setItem("meno183", meno183)
												  localStorage.setItem("disabili3", disabili3)
												  localStorage.setItem("bambini3", bambini3)
												  localStorage.setItem("wifi3", wifi3)
												  localStorage.setItem("portapacchi3", portapacchi3)
												  localStorage.setItem("rimorchio3", rimorchio3)
												  localStorage.setItem("bluetooth3", bluetooth3)
												  localStorage.setItem("note3", note3)

												  
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
												   if(item.accettata==1){
												    $("#lista").show();
												   }
												  
												  
												  $("#pass3img").attr("src", "img/3_viola_pos.png");
												  
												  if(item.stato==3){
												  $("#pass3img").attr("src", "img/3_giallo_pos.png");
												  }
												  
												  if(item.stato==1){
												  $("#pass3img").attr("src", "img/3_giallo_pos.png");
												  }
												  if(item.stato==0){
												  $("#pass3img").attr("src", "img/3_viola_pos.png");
												  }
												  if(item.stato==2){
												  
												  if(item.accettata==1){
												  $("#pass3img").attr("src", "img/3_verde_pos.png");
												  }
												  else{
												  $("#pass3img").attr("src", "img/3_giallo_pos.png");
												  }
												  
												  }
												  
												  }
												  else{
												  
												  $("#pass3img").attr("src", "img/3_viola.png");
												  
												  if(item.stato==3){
												  $("#pass3img").attr("src", "img/3_giallo.png");
												  }
												  
												  if(item.stato==1){
												  $("#pass3img").attr("src", "img/3_giallo.png");
												  }
												  if(item.stato==0){
												  $("#pass3img").attr("src", "img/3_viola.png");
												  }
												  if(item.stato==2){
												  
												  if(item.accettata==1){
												  $("#pass3img").attr("src", "img/3_verde.png");
												  }
												  else{
												  $("#pass3img").attr("src", "img/3_giallo.png");
												  }
												  
												  }
												  }
												  
												  
												  $("#pass3").show();
												  
												  
												  if(item.stato==2){
												  
												  if(item.accettata==0){
												  $("#blob5").show();
												  
												  for(i=0; i<10000; i++)
												  {
												  window.clearInterval(i);
												  }
												  
												  $("#viaaccetta5").html(item.partenza);
												   $("#adaccetta5").html(item.arrivo);
												  
												  function countdown3(minutes3) {
												  var seconds3 = 30;
												  var mins3 = minutes3
												  function tick3() {
												  var counter3 = document.getElementById("timer3");
												  var current_minutes3 = 0;
												  seconds3--;
												  counter3.innerHTML =
												  current_minutes3.toString() + ":" + (seconds3 < 10 ? "0" : "") + String(seconds3);
												  if( seconds3 > 0 ) {
												  setTimeout(tick3, 1000);
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
												  tick3();
												  }
												  
												  countdown3(0);
												  //playAudio3('successArrivo');
												  
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
									
									
				/////////////////////////vedo se ci sono posticipate////////////////////////////////
									
									$.ajax({
										   type:"GET",
										   url:"http://purplemiles.com/www2/check_prendiposticipata.php?id_autista="+ localStorage.getItem("id_autista") +"",
										   contentType: "application/json",
										   //data: {ID: "Lazio"}, LIMIT 10
										   timeout: 7000,
										   jsonp: 'callback',
										   crossDomain: true,
										   success:function(result){
										   
										   $.each(result, function(i,item){
												  
											  if(item.Token==1){
												  //alert(item.Token)
												  $("#lista").show();
											   }
												  
											});
										   
										   
										   },
										   error: function(){
										   
										    $("#led").html("<img src='img/ledrosso.png' width='25px'>");
										    $("#led5").html("<img src='img/ledrosso.png' width='25px'>");
										   
										    onResume();
										   
										   },
										   dataType:"jsonp"});
									
				/////////////////////////FINE vedo se ci sono posticipate////////////////////////////////					
									
									
									function playAudio(id) {
									var audioElement = document.getElementById(id);
									var url = audioElement.getAttribute('src');
									var my_media = new Media(url,
															 // success callback
															 function () { console.log("playAudio():Audio Success"); },
															 // error callback
															 function (err) { console.log("playAudio():Audio Error: " + err); }
															 );
									
									if(dindon==0){
									  // Play audio
									  my_media.play();
									  dindon=1;
									}
									
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
									
									
									if(localStorage.getItem("primavolta")=="0"){
									  primavolta = 3000;
									  localStorage.setItem("primavolta","1")
									
									  setTimeout(function() {
										for(i=0; i<10000; i++)
										{
									      window.clearInterval(i);
										}
												 
										timer();
												 
									  }, 2000);
									
									}
									
									if(localStorage.getItem("primavolta")=="1"){
									   primavolta = 8000;
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
		}, 10000);
									
	}
						
	
									
	}, primavolta);
	
	
	}
		
 }
	
}


     $(document).on("tap", "#ritorna", function(e){
			   localStorage.setItem("ritornaweb","0")

			   //localStorage.setItem("pagina","inizia")
			   $.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
			   
			   
			   if(localStorage.getItem("stomessa")=="1"){
			   
				  localStorage.setItem("primavolta","0");

				  for(i=0; i<10000; i++)
			      {
			       window.clearInterval(i);
			      }
			   
			       resetta1(1)
			   }
			   
			   e.stopImmediatePropagation();
			   
			   e.preventDefault();
			   
			   return false;
			   
			   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
			   
     });



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
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   onResume();
		   
		   },
		   dataType:"jsonp"});
}



function magia2C(utente,pass) {
    
    // DB2 //
    
    var db;
    db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
    
    db.transaction(function (tx) {
                   
            tx.executeSql('SELECT * FROM TestiV2', [], function (tx, results) {
            var len = results.rows.length, i;
                                 
                if(localStorage.getItem("lingua")=="it"){
                                 
                    for (i = 0; i < len; i++){
                            //$("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).italiano.replace("P0011", "'"));
                                 
                            if(results.rows.item(i).id_traduzione == "magiatitolo"){
                                magiatitolo = results.rows.item(i).italiano.replace("P0011", "'");
                          
                                $("#win2header").html(magiatitolo + "&nbsp;&nbsp;");
                                 
                            }
                          
                          if(results.rows.item(i).id_traduzione == "partenzaM"){
                            partenzaM = results.rows.item(i).italiano.replace("P0011", "'");
                          
                          }
                          
                          if(results.rows.item(i).id_traduzione == "arrivoM"){
                            arrivoM = results.rows.item(i).italiano.replace("P0011", "'");
                          
                          }
                          
                          if(results.rows.item(i).id_traduzione == "distanzaM"){
                            distanzaM = results.rows.item(i).italiano.replace("P0011", "'");
                          
                          }
                          
                    }
                                 
                }
                                 
                                 
                if(localStorage.getItem("lingua")=="en"){
                                 
                    for (i = 0; i < len; i++){
                                 
                        //$("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
                                 
                        if(results.rows.item(i).id_traduzione == "magiatitolo"){
                            magiatitolo = results.rows.item(i).inglese.replace("P0011", "'");
                          
                            $("#win2header").html(magiatitolo + "&nbsp;&nbsp;");
                                 
                        }
                          
                        if(results.rows.item(i).id_traduzione == "partenzaM"){
                          partenzaM = results.rows.item(i).inglese.replace("P0011", "'");
                          
                        }
                          
                        if(results.rows.item(i).id_traduzione == "arrivoM"){
                          arrivoM = results.rows.item(i).inglese.replace("P0011", "'");
                        
                        }
                          
                        if(results.rows.item(i).id_traduzione == "distanzaM"){
                          distanzaM = results.rows.item(i).inglese.replace("P0011", "'");
                          
                        }
                          

                    }
                                 
                }
						  
				if(localStorage.getItem("lingua")=="fr"){
						  
					for (i = 0; i < len; i++){
						  
						  //$("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
						  
						  if(results.rows.item(i).id_traduzione == "magiatitolo"){
						  magiatitolo = results.rows.item(i).francese.replace("P0011", "'");
						  
						  $("#win2header").html(magiatitolo + "&nbsp;&nbsp;");
						  
						  }
						  
						  if(results.rows.item(i).id_traduzione == "partenzaM"){
						  partenzaM = results.rows.item(i).francese.replace("P0011", "'");
						  
						  }
						  
						  if(results.rows.item(i).id_traduzione == "arrivoM"){
						  arrivoM = results.rows.item(i).francese.replace("P0011", "'");
						  
						  }
						  
						  if(results.rows.item(i).id_traduzione == "distanzaM"){
						  distanzaM = results.rows.item(i).francese.replace("P0011", "'");
						  
						  }
						  
						  
					}
						  
				}
						  
				if(localStorage.getItem("lingua")=="es"){
						  
					for (i = 0; i < len; i++){
						  
						  //$("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
						  
						  if(results.rows.item(i).id_traduzione == "magiatitolo"){
						  magiatitolo = results.rows.item(i).spagnolo.replace("P0011", "'");
						  
						  $("#win2header").html(magiatitolo + "&nbsp;&nbsp;");
						  
						  }
						  
						  if(results.rows.item(i).id_traduzione == "partenzaM"){
						  partenzaM = results.rows.item(i).spagnolo.replace("P0011", "'");
						  
						  }
						  
						  if(results.rows.item(i).id_traduzione == "arrivoM"){
						  arrivoM = results.rows.item(i).spagnolo.replace("P0011", "'");
						  
						  }
						  
						  if(results.rows.item(i).id_traduzione == "distanzaM"){
						  distanzaM = results.rows.item(i).spagnolo.replace("P0011", "'");
						  
						  }
						  
						  
						}
						  
				}
						  
        }, null);
    });
	
    /////////
	
	
    $("#win2header").html("Dettaglio richiesta&nbsp;&nbsp;");
	
	$("#XXX").hide();
	$("#tornareset").show();
	
	for(i=0; i<10000; i++)
	{
		window.clearInterval(i);
	}
	
	
	$("#magia").show();
	
	
	$("#btninizia").hide();
	//$("#btnpass").hide();

	$("#lista").hide();
	
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
				  
				  if(item.posticipata==1){
				   $("#lista").show();
				  }
				  
				  //cambiare icona
				  var icon2a = new google.maps.MarkerImage("img/marker_rosso_1.png", null, null, null, new google.maps.Size(40,40));
				  
				  if(utente==1){
				  for(i=0; i<10000; i++)
				  {
				  window.clearInterval(i);
				  }
				  
				  
				  var icon2 = new google.maps.MarkerImage("img/marker_rosso_1.png", null, null, null, new google.maps.Size(40,40));
				  stato1 = item.stato
				  localStorage.setItem("id_richietaP1",item.id_richiesta)
				  
				  $("#pass2").hide();
				  $("#pass3").hide();
				  
				  if(item.posticipata==1){
				  
				  $("#pass1img").attr("src", "img/1_viola_pos.png");
				  
				  if(item.stato==3){
				  $("#pass1img").attr("src", "img/1_giallo_pos.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass1img").attr("src", "img/1_giallo_pos.png");
				  }
				  if(item.stato==0){
				  $("#pass1img").attr("src", "img/1_viola_pos.png");
				  }
				  if(item.stato==2){
				  
				  $("#pass1img").attr("src", "img/1_verde_pos.png");
				  
				  }
				  }
				  else{
				  
				  $("#pass1img").attr("src", "img/1_viola.png");
				  
				  if(item.stato==3){
				  $("#pass1img").attr("src", "img/1_giallo.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass1img").attr("src", "img/1_giallo.png");
				  }
				  if(item.stato==0){
				  $("#pass1img").attr("src", "img/1_viola.png");
				  }
				  if(item.stato==2){
				  
				  $("#pass1img").attr("src", "img/1_verde.png");
				  
				  }
				  
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
				  
				  
				  $("#bannermagia").html("<font size='3' color='#000'><b>"+item.nick+"</b><br><b>"+partenzaM+": </b>"+item.partenza+"<br><b>"+arrivoM+": </b>"+ item.arrivo +"<br><b>"+distanzaM+": </b>"+ item.distanza1 +" Km</font>");
				  
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
				  for(i=0; i<10000; i++)
				  {
				  window.clearInterval(i);
				  }
				  
				  var icon3a = new google.maps.MarkerImage("img/marker_rosso_2.png", null, null, null, new google.maps.Size(40,40));
				  stato2 = item.stato
				  localStorage.setItem("id_richietaP2",item.id_richiesta)
				  $("#pass1").hide();
				  $("#pass3").hide();
				  $("#pass2").show();
				  
				  if(item.posticipata==1){
				  
				  $("#pass2img").attr("src", "img/2_viola_pos.png");
				  
				  if(item.stato==3){
				  $("#pass2img").attr("src", "img/2_giallo_pos.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass2img").attr("src", "img/2_giallo_pos.png");
				  }
				  if(item.stato==0){
				  $("#pass2img").attr("src", "img/2_viola_pos.png");
				  }
				  if(item.stato==2){
				  
				  
				  $("#pass2img").attr("src", "img/2_verde_pos.png");
				  
				  
				  }
				  
				  }
				  else{
				  
				  $("#pass2img").attr("src", "img/2_viola.png");
				  
				  if(item.stato==3){
				  $("#pass2img").attr("src", "img/2_giallo.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass2img").attr("src", "img/2_giallo.png");
				  }
				  if(item.stato==0){
				  $("#pass2img").attr("src", "img/2_viola.png");
				  }
				  if(item.stato==2){
				  
				  
				  $("#pass2img").attr("src", "img/2_verde.png");
				  
				  
				  }
				  
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
				  
				  $("#bannermagia").html("<font size='3' color='#000'><b>"+item.nick+"</b><br><b>"+partenzaM+": </b>"+item.partenza+"<br><b>"+arrivoM+": </b>"+ item.arrivo +"<br><b>"+distanzaM+": </b>"+ item.distanza1 +" Km</font>");
				  
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
				  for(i=0; i<10000; i++)
				  {
				  window.clearInterval(i);
				  }
				  
				  var icon4a = new google.maps.MarkerImage("img/marker_rosso_3.png", null, null, null, new google.maps.Size(40,40));
				  stato3 = item.stato
				  localStorage.setItem("id_richietaP3",item.id_richiesta)
				  $("#pass1").hide();
				  $("#pass2").hide();
				  $("#pass3").show();
				  
				  if(item.posticipata==1){
				  
				  $("#pass3img").attr("src", "img/3_viola_pos.png");
				  
				  if(item.stato==3){
				  $("#pass3img").attr("src", "img/3_giallo_pos.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass3img").attr("src", "img/3_giallo_pos.png");
				  }
				  if(item.stato==0){
				  $("#pass3img").attr("src", "img/3_viola_pos.png");
				  }
				  if(item.stato==2){
				  
				  $("#pass3img").attr("src", "img/3_verde_pos.png");
				  
				  }
				  
				  }
				  else{
				  
				  $("#pass3img").attr("src", "img/3_viola.png");
				  
				  if(item.stato==3){
				  $("#pass3img").attr("src", "img/3_giallo.png");
				  }
				  
				  if(item.stato==1){
				  $("#pass3img").attr("src", "img/3_giallo.png");
				  }
				  if(item.stato==0){
				  $("#pass3img").attr("src", "img/3_viola.png");
				  }
				  if(item.stato==2){
				  
				  $("#pass3img").attr("src", "img/3_verde.png");
				  
				  }
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
				  
				  $("#bannermagia").html("<font size='3' color='#000'><b>"+item.nick+"</b><br><b>"+partenzaM+": </b>"+item.partenza+"<br><b>"+arrivoM+": </b>"+ item.arrivo +"<br><b>"+distanzaM+": </b>"+ item.distanza1 +" Km</font>");
				  
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
		   
		     $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   
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


function elimina2(id_richiesta){
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_elimina2.php?id_richiesta="+ id_richiesta +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  localStorage.setItem("ritornaweb","0")
				  
				  $.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });

				}
				  
			});
		   
		   },
		   error: function(){
		   
		     /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Ok'                  // buttonName
										);*/
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   
		   },
		   dataType:"jsonp"});
	
}


function elimina3(id_richiesta){
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_elimina2A.php?id_richiesta="+ id_richiesta +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   //url:"http://purplemiles.com/www2/check_confermapasseggeroS1.php?conferma=1&id_richiesta="+ id_richiesta +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  localStorage.setItem("ritornaweb","0")
				  
				  resetta1(1);
				  
		   }
				  
		   });
		   
		   },
		   error: function(){
		   
		     $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   
		   },
		   dataType:"jsonp"});
	
}


function cancellapos(id){
	
	if(localStorage.getItem("lingua")=="it"){
		
		var alertattenzione = "Attenzione"
		var alertgps = "Richiesta cancellata dalla mappa"
		var indirizzob = "Indirizzo"
		
		
	}
	else if(localStorage.getItem("lingua")=="en"){
		
		var alertattenzione = "Attention"
		var alertgps = "Request erased from the map"
		var indirizzob = "Address"
		
		
	}
	else if(localStorage.getItem("lingua")=="fr"){
		
		var alertattenzione = "Attention"
		var alertgps = "Demander effacé de la carte"
		var indirizzob = "Addresse"
		
		
	}
	else if(localStorage.getItem("lingua")=="es"){
		
		var alertattenzione = "Attenciòn"
		var alertgps = "Solicitud borrada del mapa"
		var indirizzob = "Direcciòn"
		
		
	}
	else{
		
		var alertattenzione = "Attention"
		var alertgps = "Request erased from the map"
		var indirizzob = "Address"
		
	}
	
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_cancella_pos.php?id_richiesta="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				   navigator.notification.alert(
											   alertgps,  // message
											   alertDismissed,         // callback
											   alertattenzione,           // title
											   'Ok'                  // buttonName
											   );
				  
				  setTimeout(function() {
					$("#ritorna").tap();
				  }, 3000);
				  // tap indietro mappa
				  

				  }
				  else{
				   navigator.notification.alert(
											   alertgps,  // message
											   alertDismissed,         // callback
											   alertattenzione,           // title
											   'Ok'                  // buttonName
											   );
				  
				  }
			});
		   
		   },
		   error: function(){
		   
		    $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   },
		   dataType:"jsonp"});
	
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
			
			
			//var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
			
			//setTimeout(function() {
			//localStorage.setItem("geostory", "NO")
			//clearInterval(refreshIntervalId33);
			//window.location.href = "index.html?id=1";
			//onResume();
			//}, 200);

			if(item.feed==2){

			  localStorage.setItem("ritornaweb","0")
			
			   $.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
			}
			
		}
			else{
			 $("#led").html("<img src='img/ledrosso.png' width='25px'>");

			}
	 });
	 
	 
	 },
	 error: function(){
			
	 $("#led").html("<img src='img/ledrosso.png' width='25px'>");
	 $("#led5").html("<img src='img/ledrosso.png' width='25px'>");
	 
	 /*navigator.notification.alert(
	 'Possibile errore di rete, riprova tra qualche minuto.',  // message
	 alertDismissed,         // callback
	 'Attenzione',           // title
	 'Ok'                  // buttonName
	 );*/
	 
	 },
	 dataType:"jsonp"});
	 
}

function casa(){
	
	// Chiamo funzione per dire che non sei autista
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_noautista.php?id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		     //LoginVera()
		   
		   },
		   error: function(){
		   
		   
		   
		   },
		   dataType:"jsonp"});
	
	window.location.href = "index.html";
	
	}

function start() {
	//chiamo e setto a 1 lo stato dell'autista (ok lavoro)
	
	$("#setGPS").hide();
	$("#Modifica").hide();
	$("#esci").hide();
	
	$("#btninizia").hide();
	$("#lista").hide();
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

	//$("#blob").show();

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
    var pagina4quando;
    var pagina4partenza
    var pagina4arrivo
	var h5codici
    
    var db;
    db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
    
    db.transaction(function (tx) {
                   
        tx.executeSql('SELECT * FROM TestiV2', [], function (tx, results) {
            var len = results.rows.length, i;
                                 
                if(localStorage.getItem("lingua")=="it"){
					
					h5codici = "Codici commento"

                                
                    for (i = 0; i < len; i++){
                      if(results.rows.item(i).id_traduzione == "pagina4quando"){
                        pagina4quando = results.rows.item(i).italiano.replace("P0011", "'");
                      
                      if(posticipata1==0){
                        $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando1 +", Ora: "+ ora1 +"<br><br>");
                        $("#nickhome4").removeClass("button_small").addClass("button_small_green");
                      }
                      else{
                        $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando1 +", Ora: "+ ora1 +"</b><br><br>");
                        $("#nickhome4").removeClass("button_small_green").addClass("button_small");
                      }
                      }
                      
                      
                      if(results.rows.item(i).id_traduzione == "pagina4partenza"){
                        pagina4partenza = results.rows.item(i).italiano.replace("P0011", "'");
                        $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza1 +"<br><br>");
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
                        pagina4arrivo = results.rows.item(i).italiano.replace("P0011", "'");
                        $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo1 +"<br><br>");
                      }
                      
                      
                      if(results.rows.item(i).id_traduzione == "pagina4distanza"){
                        pagina4distanza = results.rows.item(i).italiano.replace("P0011", "'");
                        $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza1 +" Km<br><br>");
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
                        pagina4passeggeri = results.rows.item(i).italiano.replace("P0011", "'");
                        if(passeggeri1!="1"){
                            $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri1 + "</b></font>");
                        }
                        else{
                            $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri1);
                        }
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4animali"){
                       pagina4animali = results.rows.item(i).italiano.replace("P0011", "'");
                       if(animali1=="Si"){
                        $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali1 + "</b></font>");
                       }
                       else{
                         $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali1);
                       }
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
                      pagina4fumatori = results.rows.item(i).italiano.replace("P0011", "'");
                      if(fumatori1=="Si"){
                      $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori1 + "</b></font>");
                      }
                      else{
                      $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori1);
                      }
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4minori"){
                      pagina4minori = results.rows.item(i).italiano.replace("P0011", "'");
                      if(meno181=="Si"){
                      $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno181 +"</b></font>");
                      }
                      else{
                      $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno181);
                      }
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4disabili"){
                      pagina4disabili = results.rows.item(i).italiano.replace("P0011", "'");
                      if(disabili1=="Si"){
                      $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili1 +"</b></font>");
                      }
                      else{
                      $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili1);
                      }
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4bambini"){
                      pagina4bambini = results.rows.item(i).italiano.replace("P0011", "'");
                      if(bambini1=="Si"){
                      $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini1 +"</b></font>");
                      }
                      else{
                      $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini1);
                      }
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
                      pagina4pacchi = results.rows.item(i).italiano.replace("P0011", "'");
                      if(portapacchi1=="Si"){
                      $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi1 +"</b></font>");
                      }
                      else{
                      $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi1);
                      }
                      }
                      
                      
                      if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
                      pagina4rimorchio = results.rows.item(i).italiano.replace("P0011", "'");
                      if(rimorchio1=="Si"){
                      $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio1 +"</b></font>");
                      }
                      else{
                      $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio1);
                      }
                      }
                      
                      
                    }
                      
                }
                                 
                                 
            if(localStorage.getItem("lingua")=="en"){
				

				h5codici = "Feedback code"


                                 
                for (i = 0; i < len; i++){
                      
                      //$("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
                      
                    if(results.rows.item(i).id_traduzione == "pagina4quando"){
                       pagina4quando = results.rows.item(i).inglese.replace("P0011", "'");
                      
                      if(posticipata1==0){
                        $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando1 +", Ora: "+ ora1 +"<br><br>");
                        $("#nickhome4").removeClass("button_small").addClass("button_small_green");
                      }
                      else{
                        $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando1 +", Ora: "+ ora1 +"</b><br><br>");
                        $("#nickhome4").removeClass("button_small_green").addClass("button_small");
                      }
                      }

                      
                    if(results.rows.item(i).id_traduzione == "pagina4partenza"){
                       pagina4partenza = results.rows.item(i).inglese.replace("P0011", "'");
                      $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza1 +"<br><br>");
                    }
                      
                    if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
                       pagina4arrivo = results.rows.item(i).inglese.replace("P0011", "'");
                      $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo1 +"<br><br>");
                    }
                      
                    if(results.rows.item(i).id_traduzione == "pagina4distanza"){
                       pagina4distanza = results.rows.item(i).inglese.replace("P0011", "'");
                       $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza1 +" Km<br><br>");
                    }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
                       pagina4passeggeri = results.rows.item(i).inglese.replace("P0011", "'");
                       if(passeggeri1!="1"){
                       $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri1 + "</b></font>");
                       }
                       else{
                       $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri1);
                       }
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4animali"){
                       pagina4animali = results.rows.item(i).inglese.replace("P0011", "'");
                       if(animali1=="Si"){
                        $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali1 + "</b></font>");
                       }
                       else{
                        $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali1);
                       }
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
                       pagina4fumatori = results.rows.item(i).inglese.replace("P0011", "'");
                       if(fumatori1=="Si"){
                        $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori1 + "</b></font>");
                       }
                       else{
                        $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori1);
                       }
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4minori"){
                       pagina4minori = results.rows.item(i).inglese.replace("P0011", "'");
                       if(meno181=="Si"){
                        $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno181 +"</b></font>");
                       }
                       else{
                        $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno181);
                       }
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4disabili"){
                       pagina4disabili = results.rows.item(i).inglese.replace("P0011", "'");
                       if(disabili1=="Si"){
                        $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili1 +"</b></font>");
                       }
                       else{
                        $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili1);
                       }
                      }
                      
                      if(results.rows.item(i).id_traduzione == "pagina4bambini"){
                       pagina4bambini = results.rows.item(i).inglese.replace("P0011", "'");
                       if(bambini1=="Si"){
                        $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini1 +"</b></font>");
                       }
                       else{
                        $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini1);
                       }
                      }
                      
                      
                      if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
                       pagina4pacchi = results.rows.item(i).inglese.replace("P0011", "'");
                        if(portapacchi1=="Si"){
                         $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi1 +"</b></font>");
                        }
                        else{
                         $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi1);
                        }
                      }
                      
                      
                      if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
                       pagina4rimorchio = results.rows.item(i).inglese.replace("P0011", "'");
                       if(rimorchio1=="Si"){
                        $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio1 +"</b></font>");
                       }
                       else{
                        $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio1);
                       }
                      }
					  
				  }
                      
                }
					  
				if(localStorage.getItem("lingua")=="fr"){
					

				h5codici = "Code de commentaire"

					  
				  for (i = 0; i < len; i++){
					  
					  //$("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
					  
					  if(results.rows.item(i).id_traduzione == "pagina4quando"){
					  pagina4quando = results.rows.item(i).francese.replace("P0011", "'");
					  
					  if(posticipata1==0){
					  $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando1 +", Ora: "+ ora1 +"<br><br>");
					  $("#nickhome4").removeClass("button_small").addClass("button_small_green");
					  }
					  else{
					  $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando1 +", Ora: "+ ora1 +"</b><br><br>");
					  $("#nickhome4").removeClass("button_small_green").addClass("button_small");
					  }
					  }
					  
					  
					  if(results.rows.item(i).id_traduzione == "pagina4partenza"){
					  pagina4partenza = results.rows.item(i).francese.replace("P0011", "'");
					  $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza1 +"<br><br>");
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
					  pagina4arrivo = results.rows.item(i).francese.replace("P0011", "'");
					  $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo1 +"<br><br>");
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4distanza"){
					  pagina4distanza = results.rows.item(i).francese.replace("P0011", "'");
					  $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza1 +" Km<br><br>");
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
					  pagina4passeggeri = results.rows.item(i).francese.replace("P0011", "'");
					  if(passeggeri1!="1"){
					  $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri1 + "</b></font>");
					  }
					  else{
					  $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri1);
					  }
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4animali"){
					  pagina4animali = results.rows.item(i).francese.replace("P0011", "'");
					  if(animali1=="Si"){
					  $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali1 + "</b></font>");
					  }
					  else{
					  $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali1);
					  }
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
					  pagina4fumatori = results.rows.item(i).francese.replace("P0011", "'");
					  if(fumatori1=="Si"){
					  $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori1 + "</b></font>");
					  }
					  else{
					  $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori1);
					  }
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4minori"){
					  pagina4minori = results.rows.item(i).francese.replace("P0011", "'");
					  if(meno181=="Si"){
					  $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno181 +"</b></font>");
					  }
					  else{
					  $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno181);
					  }
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4disabili"){
					  pagina4disabili = results.rows.item(i).francese.replace("P0011", "'");
					  if(disabili1=="Si"){
					  $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili1 +"</b></font>");
					  }
					  else{
					  $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili1);
					  }
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4bambini"){
					  pagina4bambini = results.rows.item(i).francese.replace("P0011", "'");
					  if(bambini1=="Si"){
					  $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini1 +"</b></font>");
					  }
					  else{
					  $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini1);
					  }
					  }
					  
					  
					  if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
					  pagina4pacchi = results.rows.item(i).francese.replace("P0011", "'");
					  if(portapacchi1=="Si"){
					  $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi1 +"</b></font>");
					  }
					  else{
					  $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi1);
					  }
					  }
					  
					  
					  if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
					  pagina4rimorchio = results.rows.item(i).francese.replace("P0011", "'");
					  if(rimorchio1=="Si"){
					  $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio1 +"</b></font>");
					  }
					  else{
					  $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio1);
					  }
					  }
					  
					}
					  
				}
					  
				if(localStorage.getItem("lingua")=="es"){
					
					h5codici = "Codigo del comentario"
					  
					for (i = 0; i < len; i++){
					  
					  //$("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
					  
					  if(results.rows.item(i).id_traduzione == "pagina4quando"){
					  pagina4quando = results.rows.item(i).spagnolo.replace("P0011", "'");
					  
					  if(posticipata1==0){
					  $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando1 +", Ora: "+ ora1 +"<br><br>");
					  $("#nickhome4").removeClass("button_small").addClass("button_small_green");
					  }
					  else{
					  $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando1 +", Ora: "+ ora1 +"</b><br><br>");
					  $("#nickhome4").removeClass("button_small_green").addClass("button_small");
					  }
					  }
					  
					  
					  if(results.rows.item(i).id_traduzione == "pagina4partenza"){
					  pagina4partenza = results.rows.item(i).spagnolo.replace("P0011", "'");
					  $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza1 +"<br><br>");
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
					  pagina4arrivo = results.rows.item(i).spagnolo.replace("P0011", "'");
					  $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo1 +"<br><br>");
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4distanza"){
					  pagina4distanza = results.rows.item(i).spagnolo.replace("P0011", "'");
					  $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza1 +" Km<br><br>");
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
					  pagina4passeggeri = results.rows.item(i).spagnolo.replace("P0011", "'");
					  if(passeggeri1!="1"){
					  $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri1 + "</b></font>");
					  }
					  else{
					  $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri1);
					  }
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4animali"){
					  pagina4animali = results.rows.item(i).spagnolo.replace("P0011", "'");
					  if(animali1=="Si"){
					  $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali1 + "</b></font>");
					  }
					  else{
					  $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali1);
					  }
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
					  pagina4fumatori = results.rows.item(i).spagnolo.replace("P0011", "'");
					  if(fumatori1=="Si"){
					  $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori1 + "</b></font>");
					  }
					  else{
					  $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori1);
					  }
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4minori"){
					  pagina4minori = results.rows.item(i).spagnolo.replace("P0011", "'");
					  if(meno181=="Si"){
					  $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno181 +"</b></font>");
					  }
					  else{
					  $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno181);
					  }
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4disabili"){
					  pagina4disabili = results.rows.item(i).spagnolo.replace("P0011", "'");
					  if(disabili1=="Si"){
					  $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili1 +"</b></font>");
					  }
					  else{
					  $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili1);
					  }
					  }
					  
					  if(results.rows.item(i).id_traduzione == "pagina4bambini"){
					  pagina4bambini = results.rows.item(i).spagnolo.replace("P0011", "'");
					  if(bambini1=="Si"){
					  $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini1 +"</b></font>");
					  }
					  else{
					  $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini1);
					  }
					  }
					  
					  
					  if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
					  pagina4pacchi = results.rows.item(i).spagnolo.replace("P0011", "'");
					  if(portapacchi1=="Si"){
					  $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi1 +"</b></font>");
					  }
					  else{
					  $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi1);
					  }
					  }
					  
					  
					  if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
					  pagina4rimorchio = results.rows.item(i).spagnolo.replace("P0011", "'");
					  if(rimorchio1=="Si"){
					  $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio1 +"</b></font>");
					  }
					  else{
					  $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio1);
					  }
					  }
					  
					}
					  
				}
					  
			}, null);
		});
	
	
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
	
	$("#feedo1").hide();
	$("#feedo2").hide();
	$("#feedo3").hide();
	
	$("#nascondi1").hide();
	$("#nascondi2").hide();
	$("#nascondi3").hide();
	
	$("#cell2").hide();
	$("#cell3").hide();
	
	localStorage.setItem("id_richiesta", id)
	localStorage.setItem("stomessa", "0")
	
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
	
	// STELLE 3
	
	if(parseFloat(rating1)==0){
		$("#stelle3").html("<a id='linkstelle1' href='#'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if(parseFloat(rating1)>0 && parseFloat(rating1)<=0.9){
		$("#stelle3").html("<a id='linkstelle1' href='#'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if(parseFloat(rating1)>=1 && parseFloat(rating1)<=1.4){
		$("#stelle3").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if(parseFloat(rating1)>1.4 && parseFloat(rating1)<=1.9){
		$("#stelle3").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if (parseFloat(rating1)>=2 && parseFloat(rating1)<=2.4) {
		$("#stelle3").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>2.4 && parseFloat(rating1)<=2.9) {
		$("#stelle3").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>=3 && parseFloat(rating1)<=3.4) {
		$("#stelle3").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>3.4 && parseFloat(rating1)<=3.9) {
		$("#stelle3").html("<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>=4 && parseFloat(rating1)<=4.4) {
		$("#stelle3").html(ratio = "<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>4.4 && parseFloat(rating1)<=4.9) {
		$("#stelle3").html(ratio = "<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'></a>")
	}
	else if (parseFloat(rating1)>=5) {
		$("#stelle3").html(ratio = "<a id='linkstelle1' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'></a>")
	}



	localStorage.setItem("id_nick", nick1)
	localStorage.setItem("id_utente_pass1", id_utente_pass1)
	
	$("#nickhome3").html("<a id='linknick1' href='#' class='noblu'><font color='#fff'>"+ nick1 +" "+ percentuale1 +"%</font></a>");
	$("#nickhome66").html("<font color='#fff'>"+ nick1 +"</font>");
	$("#nickblob3").html("<font color='#cc33cc' size='4'><b>"+ nick1 +" "+ percentuale1 +"%</b></font>");
				  

	
	if(wifi1=="Si"){
	  $("#wifi").html("&nbsp;&nbsp;<b><font color='#000000'><b>WiFi "+ wifi1 +"</b></font>");
	}
	else{
		$("#wifi").html("&nbsp;&nbsp;WiFi " + wifi1);
	}
	
	
	if(bluetooth1=="Si"){
		$("#bluetooth").html("&nbsp;&nbsp;<b><font color='#000000'><b>Bluetooth "+ bluetooth1 +"</b></font>");
	}
	else{
		$("#bluetooth").html("&nbsp;&nbsp;Bluetooth " + bluetooth1);
	}
	
	if(note1!=""){
		$("#note").html("&nbsp;&nbsp;<b><font color='#000000'><b>Note "+ note1 +"</b></font>");
	}
	else{
		$("#note").html("&nbsp;&nbsp;Note " + note1);
	}
	
	
	
	              if(stato1==0){
		            $("#4img").html("&nbsp;&nbsp;<img src='img/1_viola.png' width='40'>");
					$("#3img").html("&nbsp;&nbsp;<img src='img/1_viola.png' width='40'>");
					  
					$("#cell1").hide();
					  
					$("#close1").show();
					  
					$("#close1").html("<img src='img/ico_trash.png' width='45'>");
					  
					  
					  $(document).on("touchstart tap", "#close1", function(e){
							$("#pass1").hide();
							$("#blob2").hide();
									 
							elimina2(id)
									 
							e.stopImmediatePropagation();
									 
							e.preventDefault();
									 
							return false;
									 
						});
					  
	              }
	
				  if(stato1!=0){
					$("#risp1").hide();
				  }
	
				  if(stato1==1){
					  $("#cell1").hide();
					  $("#4img").html("&nbsp;&nbsp;<img src='img/1_giallo.png' width='40'>");
					  $("#3img").html("&nbsp;&nbsp;<img src='img/1_giallo.png' width='40'>");
					  
					  $("#feedo1").hide();
					  $("#feedo2").hide();
					  $("#feedo3").hide();
					  
					  $("#close1").show();
					  
					  $(document).on("tap", "#close1", function(e){
									 $("#pass1").hide();
									 
									 $("#blob2").hide();
									 elimina2(id)
									 
									 e.stopImmediatePropagation();
									 
									 e.preventDefault();
									 
									 return false;
									 
									 });
					  
				  }

				  if(stato1==2){
					  
				   $("#gps1").show();
					  
				   $("#close1").hide();
				   $("#close2").hide();
				   $("#close3").hide();
					  
					if(posticipata1==1){
					  $("#nascondi1").show();
					}
					else{
					  $("#feedo1").show();
					}
					  
					  
				   if(cell1!=""){
					 
				     $("#cell1").show();
				   
					  
					  $(document).on("touchstart", "#cell1", function(e){
								  
						window.location.href = "tel:+39" + cell1 + "";
									 
						e.stopImmediatePropagation();
									 
						e.preventDefault();
									 
						return false;
									 
					  });
				   }
					   
					   
					$(document).on("tap", "#nascondi1", function(e){

						setTimeout(function() {
							cancellapos(id);
						}, 500);
									  
						e.stopImmediatePropagation();
									  
						e.preventDefault();
									  
						return false;
									  
					});

				   
					  
				   $(document).on("tap", "#feedo1", function(e){
						$("#pass1").hide();
						$("#blob2").hide();
								  
						var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								  
								  
						setTimeout(function() {
						   cancella(id);
						}, 1500);
								  
								  
						e.stopImmediatePropagation();
									 
						e.preventDefault();
									 
						return false;
									 
					});
					  
					  
				   $("#code1").show();
				   $("#code1").html("<b>"+h5codici+" : " + cod1 + "</b>");
					  
				   $("#chat1").show();
					  
				   $("#risp1").hide();
					  
					  
				   $("#4img").html("&nbsp;&nbsp;<img src='img/1_verde.png' width='40'>");
				   $("#3img").html("&nbsp;&nbsp;<img src='img/1_verde.png' width='40'>");
				  
				   $(document).on("touchstart tap", "#gps1", function(e){
						
						var addressLongLat = lat1+","+lng1;
	
						//window.open("maps:daddr="+ addressLongLat +"" , '_system');
						window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
								  
						// ll=50.894967,4.341626
						
						$("#blob2").hide();
								 
						e.stopImmediatePropagation();
								 
						e.preventDefault();
								 
						return false;
								 
				   });
					  
					  $(document).on("touchstart tap", "#chat1", function(e){
							
							localStorage.setItem("pagechat", "1")
							localStorage.setItem("stomessa", "1")
									 
							localStorage.setItem("chatpass66", "")
                                     
                                     
                                     if(localStorage.getItem("lingua")=="it"){
                                     
                                     $("#chattext66").attr("placeholder", "Scrivi un messaggio");
                                     
                                     }
                                     else if(localStorage.getItem("lingua")=="en"){
                                     
                                     $("#chattext66").attr("placeholder", "Write a message");
                                     
                                     }
                                     else if(localStorage.getItem("lingua")=="fr"){
                                     
                                     $("#chattext66").attr("placeholder", "Ecrire un message");
                                     
                                     }
                                     else if(localStorage.getItem("lingua")=="es"){
                                     
                                     $("#chattext66").attr("placeholder", "Escribir mensaje");
                                     
                                     }
                                     else{
                                     
                                     $("#chattext66").attr("placeholder", "Write a message");
                                     
                                     }
                                     
                            
	 
							$("#btnpanel").click();
									 
							chatting66(1,id)
	 
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
					  
					  
					$("#feedo1").hide();
					$("#feedo2").hide();
					$("#feedo3").hide();
					  
					  
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
				   
				  var ref = window.open('http://www.purplemiles.com/www/feedback_passeggero.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente_pass1")+'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
				   
				   
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
	
	
	controllachat2(1,id)
	
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
	
	$("#feedo1").hide();
	$("#feedo2").hide();
	$("#feedo3").hide();
	
	$("#nascondi1").hide();
	$("#nascondi2").hide();
	$("#nascondi3").hide();
	
	$("#xchiudi1").hide();
	$("#xchiudi3").hide();
	$("#xchiudi2").show();
	
	$("#cell1").hide();
	$("#cell3").hide();
    
    
    // DB //
    
    
    var db;
    db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
    
    db.transaction(function (tx) {
                   
                   tx.executeSql('SELECT * FROM TestiV2', [], function (tx, results) {
                                 var len = results.rows.length, i;
                                 
                                 if(localStorage.getItem("lingua")=="it"){
									 
									 h5codici = "Codici commento"

                                 
                                 for (i = 0; i < len; i++){
                                 if(results.rows.item(i).id_traduzione == "pagina4quando"){
                                 pagina4quando = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 if(posticipata2==0){
                                 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando2 +", Ora: "+ ora2 +"<br><br>");
                                 $("#nickhome4").removeClass("button_small").addClass("button_small_green");
                                 }
                                 else{
                                 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando2 +", Ora: "+ ora2 +"</b><br><br>");
                                 $("#nickhome4").removeClass("button_small_green").addClass("button_small");
                                 }
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4partenza"){
                                 pagina4partenza = results.rows.item(i).italiano.replace("P0011", "'");
                                 $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza2 +"<br><br>");
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
                                 pagina4arrivo = results.rows.item(i).italiano.replace("P0011", "'");
                                 $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo2 +"<br><br>");
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4distanza"){
                                 pagina4distanza = results.rows.item(i).italiano.replace("P0011", "'");
                                 $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza2 +" Km<br><br>");
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
                                 pagina4passeggeri = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(passeggeri1!="1"){
                                 $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri2 + "</b></font>");
                                 }
                                 else{
                                 $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri2);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4animali"){
                                 pagina4animali = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(animali1=="Si"){
                                 $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali2 + "</b></font>");
                                 }
                                 else{
                                 $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali2);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
                                 pagina4fumatori = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(fumatori1=="Si"){
                                 $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori2 + "</b></font>");
                                 }
                                 else{
                                 $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori2);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4minori"){
                                 pagina4minori = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(meno181=="Si"){
                                 $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno182 +"</b></font>");
                                 }
                                 else{
                                 $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno182);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4disabili"){
                                 pagina4disabili = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(disabili1=="Si"){
                                 $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili2 +"</b></font>");
                                 }
                                 else{
                                 $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili2);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4bambini"){
                                 pagina4bambini = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(bambini1=="Si"){
                                 $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini2 +"</b></font>");
                                 }
                                 else{
                                 $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini2);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
                                 pagina4pacchi = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(portapacchi1=="Si"){
                                 $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi2 +"</b></font>");
                                 }
                                 else{
                                 $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi2);
                                 }
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
                                 pagina4rimorchio = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(rimorchio1=="Si"){
                                 $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio2 +"</b></font>");
                                 }
                                 else{
                                 $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio2);
                                 }
                                 }
                                 
                                 
                                 }
                                 
                                 }
                                 
                                 
							if(localStorage.getItem("lingua")=="en"){
								

								h5codici = "Feedback code"


								for (i = 0; i < len; i++){
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4quando"){
                                 pagina4quando = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 if(posticipata2==0){
                                 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando2 +", Ora: "+ ora2 +"<br><br>");
                                 $("#nickhome4").removeClass("button_small").addClass("button_small_green");
                                 }
                                 else{
                                 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando2 +", Ora: "+ ora2 +"</b><br><br>");
                                 $("#nickhome4").removeClass("button_small_green").addClass("button_small");
                                 }
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4partenza"){
                                 pagina4partenza = results.rows.item(i).inglese.replace("P0011", "'");
                                 $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza2 +"<br><br>");
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
                                 pagina4arrivo = results.rows.item(i).inglese.replace("P0011", "'");
                                 $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo2 +"<br><br>");
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4distanza"){
                                 pagina4distanza = results.rows.item(i).inglese.replace("P0011", "'");
                                 $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza2 +" Km<br><br>");
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
                                 pagina4passeggeri = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(passeggeri1!="1"){
                                 $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri2 + "</b></font>");
                                 }
                                 else{
                                 $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri2);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4animali"){
                                 pagina4animali = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(animali1=="Si"){
                                 $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali2 + "</b></font>");
                                 }
                                 else{
                                 $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali2);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
                                 pagina4fumatori = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(fumatori1=="Si"){
                                 $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori2 + "</b></font>");
                                 }
                                 else{
                                 $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori2);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4minori"){
                                 pagina4minori = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(meno181=="Si"){
                                 $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno182 +"</b></font>");
                                 }
                                 else{
                                 $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno182);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4disabili"){
                                 pagina4disabili = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(disabili1=="Si"){
                                 $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili2 +"</b></font>");
                                 }
                                 else{
                                 $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili2);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4bambini"){
                                 pagina4bambini = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(bambini1=="Si"){
                                 $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini2 +"</b></font>");
                                 }
                                 else{
                                 $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini2);
                                 }
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
                                 pagina4pacchi = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(portapacchi1=="Si"){
                                 $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi2 +"</b></font>");
                                 }
                                 else{
                                 $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi2);
                                 }
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
                                 pagina4rimorchio = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(rimorchio1=="Si"){
                                 $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio2 +"</b></font>");
                                 }
                                 else{
                                 $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio2);
                                 }
                                 }
                                 
								 
								}
                                 
							}
								 
							if(localStorage.getItem("lingua")=="fr"){
								

							h5codici = "Code de commentaire"

								 
							  for (i = 0; i < len; i++){
								 
								 if(results.rows.item(i).id_traduzione == "pagina4quando"){
								 pagina4quando = results.rows.item(i).francese.replace("P0011", "'");
								 
								 if(posticipata2==0){
								 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando2 +", Ora: "+ ora2 +"<br><br>");
								 $("#nickhome4").removeClass("button_small").addClass("button_small_green");
								 }
								 else{
								 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando2 +", Ora: "+ ora2 +"</b><br><br>");
								 $("#nickhome4").removeClass("button_small_green").addClass("button_small");
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4partenza"){
								 pagina4partenza = results.rows.item(i).francese.replace("P0011", "'");
								 $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza2 +"<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
								 pagina4arrivo = results.rows.item(i).francese.replace("P0011", "'");
								 $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo2 +"<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4distanza"){
								 pagina4distanza = results.rows.item(i).francese.replace("P0011", "'");
								 $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza2 +" Km<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
								 pagina4passeggeri = results.rows.item(i).francese.replace("P0011", "'");
								 if(passeggeri1!="1"){
								 $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri2 + "</b></font>");
								 }
								 else{
								 $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri2);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4animali"){
								 pagina4animali = results.rows.item(i).francese.replace("P0011", "'");
								 if(animali1=="Si"){
								 $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali2 + "</b></font>");
								 }
								 else{
								 $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali2);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
								 pagina4fumatori = results.rows.item(i).francese.replace("P0011", "'");
								 if(fumatori1=="Si"){
								 $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori2 + "</b></font>");
								 }
								 else{
								 $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori2);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4minori"){
								 pagina4minori = results.rows.item(i).francese.replace("P0011", "'");
								 if(meno181=="Si"){
								 $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno182 +"</b></font>");
								 }
								 else{
								 $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno182);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4disabili"){
								 pagina4disabili = results.rows.item(i).francese.replace("P0011", "'");
								 if(disabili1=="Si"){
								 $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili2 +"</b></font>");
								 }
								 else{
								 $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili2);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4bambini"){
								 pagina4bambini = results.rows.item(i).francese.replace("P0011", "'");
								 if(bambini1=="Si"){
								 $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini2 +"</b></font>");
								 }
								 else{
								 $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini2);
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
								 pagina4pacchi = results.rows.item(i).francese.replace("P0011", "'");
								 if(portapacchi1=="Si"){
								 $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi2 +"</b></font>");
								 }
								 else{
								 $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi2);
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
								 pagina4rimorchio = results.rows.item(i).francese.replace("P0011", "'");
								 if(rimorchio1=="Si"){
								 $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio2 +"</b></font>");
								 }
								 else{
								 $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio2);
								 }
								 }
								 
								 
							  }
								 
							}
								 
							if(localStorage.getItem("lingua")=="es"){
								

								h5codici = "Codigo del comentario"
								 
							  for (i = 0; i < len; i++){
								 
								 if(results.rows.item(i).id_traduzione == "pagina4quando"){
								 pagina4quando = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 if(posticipata2==0){
								 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando2 +", Ora: "+ ora2 +"<br><br>");
								 $("#nickhome4").removeClass("button_small").addClass("button_small_green");
								 }
								 else{
								 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando2 +", Ora: "+ ora2 +"</b><br><br>");
								 $("#nickhome4").removeClass("button_small_green").addClass("button_small");
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4partenza"){
								 pagina4partenza = results.rows.item(i).spagnolo.replace("P0011", "'");
								 $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza2 +"<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
								 pagina4arrivo = results.rows.item(i).spagnolo.replace("P0011", "'");
								 $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo2 +"<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4distanza"){
								 pagina4distanza = results.rows.item(i).spagnolo.replace("P0011", "'");
								 $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza2 +" Km<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
								 pagina4passeggeri = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(passeggeri1!="1"){
								 $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri2 + "</b></font>");
								 }
								 else{
								 $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri2);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4animali"){
								 pagina4animali = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(animali1=="Si"){
								 $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali2 + "</b></font>");
								 }
								 else{
								 $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali2);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
								 pagina4fumatori = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(fumatori1=="Si"){
								 $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori2 + "</b></font>");
								 }
								 else{
								 $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori2);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4minori"){
								 pagina4minori = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(meno181=="Si"){
								 $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno182 +"</b></font>");
								 }
								 else{
								 $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno182);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4disabili"){
								 pagina4disabili = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(disabili1=="Si"){
								 $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili2 +"</b></font>");
								 }
								 else{
								 $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili2);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4bambini"){
								 pagina4bambini = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(bambini1=="Si"){
								 $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini2 +"</b></font>");
								 }
								 else{
								 $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini2);
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
								 pagina4pacchi = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(portapacchi1=="Si"){
								 $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi2 +"</b></font>");
								 }
								 else{
								 $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi2);
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
								 pagina4rimorchio = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(rimorchio1=="Si"){
								 $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio2 +"</b></font>");
								 }
								 else{
								 $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio2);
								 }
								 }
								 
								 
							  }
								 
						  }
								 
						}, null);
				   });
	
	
	
	////
	
	
	
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	
	localStorage.setItem("ritornaweb","1")
	localStorage.setItem("tastiera","1")
	localStorage.setItem("stomessa", "0")
	
	$("#nickhome4").html("<font color='#fff'><a id='linknick2' href='#' class='noblu'><font color='#fff'>"+ nick2 +" "+ percentuale2 +"%</font></a></font>");
	$("#nickhome3").html("<a id='linknick2' href='#' class='noblu'><font color='#fff'>"+ nick2 +" "+ percentuale2 +"%</font></a>");
	$("#nickhome66").html("<font color='#fff'>"+ nick2 +"</font>");
	$("#nickblob4").html("<font color='#cc33cc' size='4'><b>"+ nick2 +" "+ percentuale2 +"%</b></font>");
	
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
	
	// STELLE 3
	
	if(parseFloat(rating2)==0){
		$("#stelle3").html("<a id='linkstelle2' href='#'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if(parseFloat(rating2)>0 && parseFloat(rating2)<=0.9){
		$("#stelle3").html("<a id='linkstelle2' href='#'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if(parseFloat(rating2)>=1 && parseFloat(rating2)<=1.4){
		$("#stelle3").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if(parseFloat(rating2)>1.4 && parseFloat(rating2)<=1.9){
		$("#stelle3").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if (parseFloat(rating2)>=2 && parseFloat(rating2)<=2.4) {
		$("#stelle3").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating2)>2.4 && parseFloat(rating2)<=2.9) {
		$("#stelle3").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating2)>=3 && parseFloat(rating2)<=3.4) {
		$("#stelle3").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating2)>3.4 && parseFloat(rating2)<=3.9) {
		$("#stelle3").html("<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating2)>=4 && parseFloat(rating2)<=4.4) {
		$("#stelle3").html(ratio = "<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating2)>4.4 && parseFloat(rating2)<=4.9) {
		$("#stelle3").html(ratio = "<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'></a>")
	}
	else if (parseFloat(rating2)>=5) {
		$("#stelle3").html(ratio = "<a id='linkstelle2' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'></a>")
	}


	/*if(posticipata2==0){
	 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Quando: </font></b><br>&nbsp;&nbsp;"+ quando2 +", Ora: "+ ora2 +"<br><br>");
		$("#nickhome4").removeClass("button_small").addClass("button_small_green");
	}
	else{
		$("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Quando: </font></b><br>&nbsp;&nbsp;<b>"+ quando2 +", Ora: "+ ora2 +"</b><br><br>");
		$("#nickhome4").removeClass("button_small_green").addClass("button_small");
	}
	
	$("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Partenza: </font></b><br>&nbsp;&nbsp;"+ partenza2 +"<br><br>");
	
	$("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Arrivo: </font></b><br>&nbsp;&nbsp;"+ arrivo2 +"<br><br>");
	
	$("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Distanza (linea d'aria): </font></b>"+ distanza2 +" Km<br><br>");
	
	
	if(passeggeri2!="1"){
		$("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>N. Passeggeri " + passeggeri2 + "</b></font>");
	}
	else{
		$("#passeggeri").html("&nbsp;&nbsp;N. Passeggeri " + passeggeri2);
	}
	
	if(animali2=="Si"){
		$("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>Animale a seguito " + animali2 + "</b></font>");
	}
	else{
		$("#animali").html("&nbsp;&nbsp;Animale a seguito " + animali2);
	}
	
	if(fumatori2=="Si"){
		$("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>Fumatori " + fumatori2 + "</b></font>");
	}
	else{
		$("#fumatori").html("&nbsp;&nbsp;Fumatori " + fumatori2);
	}
	
	if(meno182=="Si"){
		$("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>Minori non accompagnati "+ meno182 +"</b></font>");
	}
	else{
		$("#meno18").html("&nbsp;&nbsp;Minori non accompagnati " + meno182);
	}
	
	if(disabili2=="Si"){
		$("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>Diversamenti abili "+ disabili2 +"</b></font>");
	}
	else{
		$("#disabili").html("&nbsp;&nbsp;Diversamenti abili " + disabili2);
	}
	
	if(bambini2=="Si"){
		$("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>Seggiolino per bambini "+ bambini2 +"</b></font>");
	}
	else{
		$("#bambini").html("&nbsp;&nbsp;Seggiolino per bambini " + bambini2);
	}
     if(portapacchi2=="Si"){
     $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>Portapacchi "+ portapacchi2 +"</b></font>");
     }
     else{
     $("#portapacchi").html("&nbsp;&nbsp;Portapacchi " + portapacchi2);
     }
     
     if(rimorchio2=="Si"){
     $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>Gancio rimorchio "+ rimorchio2 +"</b></font>");
     }
     else{
     $("#rimorchio").html("&nbsp;&nbsp;Gancio rimorchio " + rimorchio2);
     }
     */
    
	if(wifi2=="Si"){
		$("#wifi").html("&nbsp;&nbsp;<b><font color='#000000'><b>WiFi "+ wifi2 +"</b></font>");
	}
	else{
		$("#wifi").html("&nbsp;&nbsp;WiFi " + wifi2);
	}
	
	if(bluetooth2=="Si"){
		$("#bluetooth").html("&nbsp;&nbsp;<b><font color='#000000'><b>Bluetooth "+ bluetooth2 +"</b></font>");
	}
	else{
		$("#bluetooth").html("&nbsp;&nbsp;Bluetooth " + bluetooth2);
	}
	
	if(note2!=""){
		$("#note").html("&nbsp;&nbsp;<b><font color='#000000'><b>Note "+ note2 +"</b></font>");
	}
	else{
		$("#note").html("&nbsp;&nbsp;Note " + note2);
	}
	
	
	
				  if(stato2==0){
					 $("#4img").html("&nbsp;&nbsp;<img src='img/2_viola.png' width='40'>");
					 $("#3img").html("&nbsp;&nbsp;<img src='img/2_viola.png' width='40'>");
					  
					   $("#cell2").hide();
					  
					  $("#feedo2").hide();

					  $("#close2").show();
					  $("#close2").html("<img src='img/ico_trash.png' width='45'>");
					  
					  $(document).on("touchstart", "#close2", function(e){
									 $("#pass2").hide();
									 $("#blob2").hide();
									 elimina2(id)
									 
									 
									 e.stopImmediatePropagation();
									 
									 e.preventDefault();
									 
									 return false;
					  });
				  }
	
				  if(stato2!=0){
					$("#risp2").hide();
				  }
	
				  if(stato2==1){
					 $("#4img").html("&nbsp;&nbsp;<img src='img/2_giallo.png' width='40'>");
					 $("#3img").html("&nbsp;&nbsp;<img src='img/2_giallo.png' width='40'>");
					  
					  $("#cell2").hide();
					  
					  $("#feedo2").hide();
					  
					  $("#close2").show();
					  $("#close2").html("<img src='img/ico_trash.png' width='45'>");
					  
					  
					  
					  $(document).on("tap", "#close2", function(e){
									 $("#pass2").hide();
									 $("#blob2").hide();
									 elimina2(id)
									 
									 
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
						  
						  
						  $(document).on("tap", "#cell2", function(e){
										 
										 window.location.href = "tel:+39"+cell2+"";
										 
										 e.stopImmediatePropagation();
										 
										 e.preventDefault();
										 
										 return false;
										 
										 });
				   }

					  if(posticipata2==1){
						$("#nascondi2").show();
				      }
				      else{
					    $("#feedo2").show();
				      }

					  
				      $("#close1").hide();
				      $("#close2").hide();
				      $("#close3").hide();
						  
						  
						  $(document).on("tap", "#nascondi2", function(e){
										 
								setTimeout(function() {
									cancellapos(id);
								}, 500);
									
								e.stopImmediatePropagation();
									  
								e.preventDefault();
									  
								return false;
									  
							});
					  
					  
					  $(document).on("touchstart", "#feedo2", function(e){
							$("#pass2").hide();
							$("#blob2").hide();
									 
							var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
									 
							setTimeout(function() {
								cancella(id);
							}, 1000);
		 
							e.stopImmediatePropagation();
									 
							e.preventDefault();
									 
							return false;
					});


					  
				   $("#code2").show();
				   $("#code2").html("<b>"+h5codici+" : " + cod2 + "</b>");
					  
				   $("#4img").html("&nbsp;&nbsp;<img src='img/2_verde.png' width='40'>");
				   $("#3img").html("&nbsp;&nbsp;<img src='img/2_verde.png' width='40'>");
					  
				   $("#chat2").show();
					  
				  
					  $(document).on("touchstart tap", "#gps22", function(e){

								 var addressLongLat = lat2+","+lng2;

	                            //window.open("maps:daddr="+ addressLongLat +"" , '_system');
								window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
	
								 $("#blob2").hide();
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
						});
					  
					  $(document).on("touchstart tap", "#chat2", function(e){
									 
							localStorage.setItem("pagechat", "2")
							localStorage.setItem("stomessa", "1")
									 
							localStorage.setItem("chatpass66", "")
                                     
                                     if(localStorage.getItem("lingua")=="it"){
                                     
                                     $("#chattext66").attr("placeholder", "Scrivi un messaggio");
                                     
                                     }
                                     else if(localStorage.getItem("lingua")=="en"){
                                     
                                     $("#chattext66").attr("placeholder", "Write a message");
                                     
                                     }
                                     else if(localStorage.getItem("lingua")=="fr"){
                                     
                                     $("#chattext66").attr("placeholder", "Ecrire un message");
                                     
                                     }
                                     else if(localStorage.getItem("lingua")=="es"){
                                     
                                     $("#chattext66").attr("placeholder", "Escribir mensaje");
                                     
                                     }
                                     else{
                                     
                                     $("#chattext66").attr("placeholder", "Write a message");
                                     
                                     }
									 
							$("#btnpanel").click();
									 
							chatting66(2,id)
									 
							$("#blob2").hide();
									 
							e.stopImmediatePropagation();
									 
							e.preventDefault();
									 
							return false;
									 
						});
				  
				  }
				  else{
					$("#rif2").html("Rifiuta");
					  
					  $("#feedo1").hide();
					  $("#feedo2").hide();
					  $("#feedo3").hide();
					  
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

	
	
	$(document).on("tap", "#risp2", function(e){
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
	
	$("#feedo1").hide();
	$("#feedo2").hide();
	$("#feedo3").hide();
	
	$("#nascondi1").hide();
	$("#nascondi2").hide();
	$("#nascondi3").hide();
	
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
	
	$("#cell1").hide();
	$("#cell2").hide();
    
    // DB //
    
    var db;
    db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
    
    db.transaction(function (tx) {
                   
                   tx.executeSql('SELECT * FROM TestiV2', [], function (tx, results) {
                                 var len = results.rows.length, i;
                                 
                                 if(localStorage.getItem("lingua")=="it"){
									 
								h5codici = "Codici commento"

                                 
                                 for (i = 0; i < len; i++){
                                 if(results.rows.item(i).id_traduzione == "pagina4quando"){
                                 pagina4quando = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 if(posticipata3==0){
                                 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando3 +", Ora: "+ ora3 +"<br><br>");
                                 $("#nickhome4").removeClass("button_small").addClass("button_small_green");
                                 }
                                 else{
                                 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando3 +", Ora: "+ ora3 +"</b><br><br>");
                                 $("#nickhome4").removeClass("button_small_green").addClass("button_small");
                                 }
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4partenza"){
                                 pagina4partenza = results.rows.item(i).italiano.replace("P0011", "'");
                                 $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza3 +"<br><br>");
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
                                 pagina4arrivo = results.rows.item(i).italiano.replace("P0011", "'");
                                 $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo3 +"<br><br>");
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4distanza"){
                                 pagina4distanza = results.rows.item(i).italiano.replace("P0011", "'");
                                 $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza3 +" Km<br><br>");
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
                                 pagina4passeggeri = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(passeggeri1!="1"){
                                 $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri3 + "</b></font>");
                                 }
                                 else{
                                 $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri3);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4animali"){
                                 pagina4animali = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(animali1=="Si"){
                                 $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali3 + "</b></font>");
                                 }
                                 else{
                                 $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali3);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
                                 pagina4fumatori = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(fumatori1=="Si"){
                                 $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori3 + "</b></font>");
                                 }
                                 else{
                                 $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori3);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4minori"){
                                 pagina4minori = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(meno181=="Si"){
                                 $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno183 +"</b></font>");
                                 }
                                 else{
                                 $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno183);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4disabili"){
                                 pagina4disabili = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(disabili1=="Si"){
                                 $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili3 +"</b></font>");
                                 }
                                 else{
                                 $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili3);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4bambini"){
                                 pagina4bambini = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(bambini1=="Si"){
                                 $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini3 +"</b></font>");
                                 }
                                 else{
                                 $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini3);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
                                 pagina4pacchi = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(portapacchi1=="Si"){
                                 $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi3 +"</b></font>");
                                 }
                                 else{
                                 $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi3);
                                 }
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
                                 pagina4rimorchio = results.rows.item(i).italiano.replace("P0011", "'");
                                 if(rimorchio1=="Si"){
                                 $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio3 +"</b></font>");
                                 }
                                 else{
                                 $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio3);
                                 }
                                 }
                                 
                                 
                                 }
                                 
                                 }
                                 
                                 
							if(localStorage.getItem("lingua")=="en"){
								

								h5codici = "Feedback code"

                                 
								for (i = 0; i < len; i++){
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4quando"){
                                 pagina4quando = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 if(posticipata3==0){
                                 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando3 +", Ora: "+ ora3 +"<br><br>");
                                 $("#nickhome4").removeClass("button_small").addClass("button_small_green");
                                 }
                                 else{
                                 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando3 +", Ora: "+ ora3 +"</b><br><br>");
                                 $("#nickhome4").removeClass("button_small_green").addClass("button_small");
                                 }
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4partenza"){
                                 pagina4partenza = results.rows.item(i).inglese.replace("P0011", "'");
                                 $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza3 +"<br><br>");
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
                                 pagina4arrivo = results.rows.item(i).inglese.replace("P0011", "'");
                                 $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo3 +"<br><br>");
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4distanza"){
                                 pagina4distanza = results.rows.item(i).inglese.replace("P0011", "'");
                                 $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza3 +" Km<br><br>");
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
                                 pagina4passeggeri = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(passeggeri1!="1"){
                                 $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri3 + "</b></font>");
                                 }
                                 else{
                                 $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri3);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4animali"){
                                 pagina4animali = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(animali1=="Si"){
                                 $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali3 + "</b></font>");
                                 }
                                 else{
                                 $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali3);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
                                 pagina4fumatori = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(fumatori1=="Si"){
                                 $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori3 + "</b></font>");
                                 }
                                 else{
                                 $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori3);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4minori"){
                                 pagina4minori = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(meno181=="Si"){
                                 $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno183 +"</b></font>");
                                 }
                                 else{
                                 $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno183);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4disabili"){
                                 pagina4disabili = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(disabili1=="Si"){
                                 $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili3 +"</b></font>");
                                 }
                                 else{
                                 $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili3);
                                 }
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4bambini"){
                                 pagina4bambini = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(bambini1=="Si"){
                                 $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini3 +"</b></font>");
                                 }
                                 else{
                                 $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini3);
                                 }
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
                                 pagina4pacchi = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(portapacchi1=="Si"){
                                 $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi3 +"</b></font>");
                                 }
                                 else{
                                 $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi3);
                                 }
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
                                 pagina4rimorchio = results.rows.item(i).inglese.replace("P0011", "'");
                                 if(rimorchio1=="Si"){
                                 $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio3 +"</b></font>");
                                 }
                                 else{
                                 $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio3);
                                 }
                                 }
                                 
                                 
                                 
								}
                                 
							}
								 
								 
							if(localStorage.getItem("lingua")=="fr"){
								

							h5codici = "Code de commentaire"

								 
							  for (i = 0; i < len; i++){
								 
								 if(results.rows.item(i).id_traduzione == "pagina4quando"){
								 pagina4quando = results.rows.item(i).francese.replace("P0011", "'");
								 
								 if(posticipata3==0){
								 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando3 +", Ora: "+ ora3 +"<br><br>");
								 $("#nickhome4").removeClass("button_small").addClass("button_small_green");
								 }
								 else{
								 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando3 +", Ora: "+ ora3 +"</b><br><br>");
								 $("#nickhome4").removeClass("button_small_green").addClass("button_small");
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4partenza"){
								 pagina4partenza = results.rows.item(i).francese.replace("P0011", "'");
								 $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza3 +"<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
								 pagina4arrivo = results.rows.item(i).francese.replace("P0011", "'");
								 $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo3 +"<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4distanza"){
								 pagina4distanza = results.rows.item(i).francese.replace("P0011", "'");
								 $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza3 +" Km<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
								 pagina4passeggeri = results.rows.item(i).francese.replace("P0011", "'");
								 if(passeggeri1!="1"){
								 $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri3 + "</b></font>");
								 }
								 else{
								 $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri3);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4animali"){
								 pagina4animali = results.rows.item(i).francese.replace("P0011", "'");
								 if(animali1=="Si"){
								 $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali3 + "</b></font>");
								 }
								 else{
								 $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali3);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
								 pagina4fumatori = results.rows.item(i).francese.replace("P0011", "'");
								 if(fumatori1=="Si"){
								 $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori3 + "</b></font>");
								 }
								 else{
								 $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori3);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4minori"){
								 pagina4minori = results.rows.item(i).francese.replace("P0011", "'");
								 if(meno181=="Si"){
								 $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno183 +"</b></font>");
								 }
								 else{
								 $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno183);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4disabili"){
								 pagina4disabili = results.rows.item(i).francese.replace("P0011", "'");
								 if(disabili1=="Si"){
								 $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili3 +"</b></font>");
								 }
								 else{
								 $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili3);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4bambini"){
								 pagina4bambini = results.rows.item(i).francese.replace("P0011", "'");
								 if(bambini1=="Si"){
								 $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini3 +"</b></font>");
								 }
								 else{
								 $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini3);
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
								 pagina4pacchi = results.rows.item(i).francese.replace("P0011", "'");
								 if(portapacchi1=="Si"){
								 $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi3 +"</b></font>");
								 }
								 else{
								 $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi3);
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
								 pagina4rimorchio = results.rows.item(i).francese.replace("P0011", "'");
								 if(rimorchio1=="Si"){
								 $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio3 +"</b></font>");
								 }
								 else{
								 $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio3);
								 }
								 }
								 
								 
								 
								}
								 
							}
								 
							if(localStorage.getItem("lingua")=="es"){
								
							h5codici = "Codigo del comentario"
								 
							  for (i = 0; i < len; i++){
								 
								 if(results.rows.item(i).id_traduzione == "pagina4quando"){
								 pagina4quando = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 if(posticipata3==0){
								 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br>&nbsp;&nbsp;"+ quando3 +", Ora: "+ ora3 +"<br><br>");
								 $("#nickhome4").removeClass("button_small").addClass("button_small_green");
								 }
								 else{
								 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4quando+": </font></b><br><b>&nbsp;&nbsp;"+ quando3 +", Ora: "+ ora3 +"</b><br><br>");
								 $("#nickhome4").removeClass("button_small_green").addClass("button_small");
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4partenza"){
								 pagina4partenza = results.rows.item(i).spagnolo.replace("P0011", "'");
								 $("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4partenza +": </font></b><br>&nbsp;&nbsp;"+ partenza3 +"<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4arrivo"){
								 pagina4arrivo = results.rows.item(i).spagnolo.replace("P0011", "'");
								 $("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ pagina4arrivo +": </font></b><br>&nbsp;&nbsp;"+ arrivo3 +"<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4distanza"){
								 pagina4distanza = results.rows.item(i).spagnolo.replace("P0011", "'");
								 $("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+pagina4distanza+": </font></b>"+ distanza3 +" Km<br><br>");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4passeggeri"){
								 pagina4passeggeri = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(passeggeri1!="1"){
								 $("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>"+pagina4passeggeri+" " + passeggeri3 + "</b></font>");
								 }
								 else{
								 $("#passeggeri").html("&nbsp;&nbsp;"+pagina4passeggeri+" " + passeggeri3);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4animali"){
								 pagina4animali = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(animali1=="Si"){
								 $("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>"+ pagina4animali +" " + animali3 + "</b></font>");
								 }
								 else{
								 $("#animali").html("&nbsp;&nbsp;"+ pagina4animali +" " + animali3);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4fumatori"){
								 pagina4fumatori = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(fumatori1=="Si"){
								 $("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4fumatori+" " + fumatori3 + "</b></font>");
								 }
								 else{
								 $("#fumatori").html("&nbsp;&nbsp;"+pagina4fumatori+" " + fumatori3);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4minori"){
								 pagina4minori = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(meno181=="Si"){
								 $("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4minori+" "+ meno183 +"</b></font>");
								 }
								 else{
								 $("#meno18").html("&nbsp;&nbsp;"+pagina4minori+" " + meno183);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4disabili"){
								 pagina4disabili = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(disabili1=="Si"){
								 $("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4disabili+" "+ disabili3 +"</b></font>");
								 }
								 else{
								 $("#disabili").html("&nbsp;&nbsp;"+pagina4disabili+" " + disabili3);
								 }
								 }
								 
								 if(results.rows.item(i).id_traduzione == "pagina4bambini"){
								 pagina4bambini = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(bambini1=="Si"){
								 $("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4bambini+" "+ bambini3 +"</b></font>");
								 }
								 else{
								 $("#bambini").html("&nbsp;&nbsp;"+pagina4bambini+" " + bambini3);
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4pacchi"){
								 pagina4pacchi = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(portapacchi1=="Si"){
								 $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4pacchi+" "+ portapacchi3 +"</b></font>");
								 }
								 else{
								 $("#portapacchi").html("&nbsp;&nbsp;"+pagina4pacchi+" " + portapacchi3);
								 }
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "pagina4rimorchio"){
								 pagina4rimorchio = results.rows.item(i).spagnolo.replace("P0011", "'");
								 if(rimorchio1=="Si"){
								 $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>"+pagina4rimorchio+" "+ rimorchio3 +"</b></font>");
								 }
								 else{
								 $("#rimorchio").html("&nbsp;&nbsp;"+pagina4rimorchio+" " + rimorchio3);
								 }
								 }
								 
								 
								 
							  }
								 
							}
								 
						}, null);
				   });
	
	/////
	
	//alert(2)
	localStorage.setItem("id_richiesta", id)
	localStorage.setItem("stomessa", "0")
	
	$("#blob2").show();
	
	localStorage.setItem("ritornaweb","1")
	localStorage.setItem("tastiera","1")
	

				  $("#nickhome4").html("<font color='#fff'><a id='linknick3' href='#' class='noblu'><font color='#fff'>"+ nick3 +" "+ percentuale3 +"%</font></a></font>");
				  $("#nickhome3").html("<a id='linknick1' href='#' class='noblu'><font color='#fff'>"+ nick3 +" "+ percentuale3 +"%</font></a>");
	              $("#nickhome66").html("<font color='#fff'>"+ nick1 +" </font>");
				  $("#nickblob5").html("<font color='#cc33cc' size='4'><b>"+ nick3 +" "+ percentuale3 +"%</b></font>");
	
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
	
	// STELLE 3
	
	if(parseFloat(rating3)==0){
		$("#stelle3").html("<a id='linkstelle3' href='#'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if(parseFloat(rating3)>0 && parseFloat(rating3)<=0.9){
		$("#stelle3").html("<a id='linkstelle3' href='#'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if(parseFloat(rating3)>=1 && parseFloat(rating3)<=1.4){
		$("#stelle3").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if(parseFloat(rating3)>1.4 && parseFloat(rating3)<=1.9){
		$("#stelle3").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	
	else if (parseFloat(rating3)>=2 && parseFloat(rating3)<=2.4) {
		$("#stelle3").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating3)>2.4 && parseFloat(rating3)<=2.9) {
		$("#stelle3").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating3)>=3 && parseFloat(rating3)<=3.4) {
		$("#stelle3").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating3)>3.4 && parseFloat(rating3)<=3.9) {
		$("#stelle3").html("<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating3)>=4 && parseFloat(rating3)<=4.4) {
		$("#stelle3").html(ratio = "<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'></a>")
	}
	else if (parseFloat(rating3)>4.4 && parseFloat(rating3)<=4.9) {
		$("#stelle3").html(ratio = "<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'></a>")
	}
	else if (parseFloat(rating3)>=5) {
		$("#stelle3").html(ratio = "<a id='linkstelle3' href='#'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'></a>")
	}

	
	/*if(posticipata3==0){
	 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Quando: </font></b><br>&nbsp;&nbsp;"+ quando3 +", Ora: "+ ora3 +"<br><br>");
	 $("#nickhome4").removeClass("button_small").addClass("button_small_green");
	}
	else{
	 $("#quando").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Quando: </font></b><br><b>&nbsp;&nbsp;"+ quando3 +", Ora: "+ ora3 +"</b><br><br>");
	 $("#nickhome4").removeClass("button_small_green").addClass("button_small");
	}
	
	$("#Da").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Partenza: </font></b><br>&nbsp;&nbsp;"+ partenza3 +"<br><br>");
	
	$("#Ad").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Arrivo: </font></b><br>&nbsp;&nbsp;"+ arrivo3 +"<br><br>");
	
	$("#distanza").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Distanza (linea d'aria): </font></b>"+ distanza3 +" Km<br><br>");
	
	
	if(passeggeri3!="1"){
		$("#passeggeri").html("&nbsp;&nbsp;<font color='#000000'><b>N. Passeggeri " + passeggeri3 + "</b></font>");
	}
	else{
		$("#passeggeri").html("&nbsp;&nbsp;N. Passeggeri " + passeggeri3);
	}
	
	if(animali3=="Si"){
		$("#animali").html("&nbsp;&nbsp;<font color='#000000'><b>Animale a seguito " + animali3 + "</b></font>");
	}
	else{
		$("#animali").html("&nbsp;&nbsp;Animale a seguito " + animali3);
	}
	
	if(fumatori3=="Si"){
		$("#fumatori").html("&nbsp;&nbsp;<b><font color='#000000'><b>Fumatori " + fumatori3 + "</b></font>");
	}
	else{
		$("#fumatori").html("&nbsp;&nbsp;Fumatori " + fumatori3);
	}
	
	if(meno183=="Si"){
		$("#meno18").html("&nbsp;&nbsp;<b><font color='#000000'><b>Minori non accompagnati "+ meno183 +"</b></font>");
	}
	else{
		$("#meno18").html("&nbsp;&nbsp;Minori non accompagnati " + meno183);
	}
	
	if(disabili3=="Si"){
		$("#disabili").html("&nbsp;&nbsp;<b><font color='#000000'><b>Diversamenti abili "+ disabili3 +"</b></font>");
	}
	else{
		$("#disabili").html("&nbsp;&nbsp;Diversamenti abili " + disabili3);
	}
	
	if(bambini3=="Si"){
		$("#bambini").html("&nbsp;&nbsp;<b><font color='#000000'><b>Seggiolino per bambini "+ bambini3 +"</b></font>");
	}
	else{
		$("#bambini").html("&nbsp;&nbsp;Seggiolino per bambini " + bambini3);
	}
     if(portapacchi3=="Si"){
     $("#portapacchi").html("&nbsp;&nbsp;<b><font color='#000000'><b>Portapacchi "+ portapacchi3 +"</b></font>");
     }
     else{
     $("#portapacchi").html("&nbsp;&nbsp;Portapacchi " + portapacchi3);
     }
     
     if(rimorchio3=="Si"){
     $("#rimorchio").html("&nbsp;&nbsp;<b><font color='#000000'><b>Gancio rimorchio "+ rimorchio3 +"</b></font>");
     }
     else{
     $("#rimorchio").html("&nbsp;&nbsp;Gancio rimorchio " + rimorchio3);
     }
     */
    
	if(wifi3=="Si"){
		$("#wifi").html("&nbsp;&nbsp;<b><font color='#000000'><b>WiFi "+ wifi3 +"</b></font>");
	}
	else{
		$("#wifi").html("&nbsp;&nbsp;WiFi " + wifi3);
	}
	
	
	if(bluetooth3=="Si"){
		$("#bluetooth").html("&nbsp;&nbsp;<b><font color='#000000'><b>Bluetooth "+ bluetooth3 +"</b></font>");
	}
	else{
		$("#bluetooth").html("&nbsp;&nbsp;Bluetooth " + bluetooth3);
	}
	
	if(note3!=""){
		$("#note").html("&nbsp;&nbsp;<b><font color='#000000'><b>Note "+ note3 +"</b></font>");
	}
	else{
		$("#note").html("&nbsp;&nbsp;Note " + note3);
	}
	
	
	if(stato3==0){
		$("#4img").html("&nbsp;&nbsp;<img src='img/3_viola.png' width='40'>");
		$("#3img").html("&nbsp;&nbsp;<img src='img/3_viola.png' width='40'>");
		
		$("#cell3").hide();
		
		$("#feedo3").hide();
		
		$("#close3").show();
		$("#close3").html("<img src='img/ico_trash.png' width='45'>");
		
		$(document).on("tap", "#close3", function(e){
					   $("#pass3").hide();
					   $("#blob2").hide();
					   
					   elimina2(id)
					   
					   e.stopImmediatePropagation();
					   
					   e.preventDefault();
					   
					   return false;
					   
		});
	}
	
				  if(stato3!=0){
				    $("#risp3").hide();
				  }
	
	if(stato3==1){
		$("#4img").html("&nbsp;&nbsp;<img src='img/3_giallo.png' width='40'>");
		$("#3img").html("&nbsp;&nbsp;<img src='img/3_giallo.png' width='40'>");
		
		$("#cell3").hide();
		
		$("#feedo3").hide();
		
		$("#close3").show();
		 $("#close3").html("<img src='img/ico_trash.png' width='45'>");
		
		$(document).on("tap", "#close3", function(e){
					   $("#pass3").hide();
					   $("#blob2").hide();
					   
					   elimina2(id)
					   
					   e.stopImmediatePropagation();
					   
					   e.preventDefault();
					   
					   return false;
					   
		});
	}
	
	
				if(stato3==2){
				  $("#gps3").show();
				  $("#risp3").hide();
				  $("#code3").show();
					
					//alert(posticipata3)
					  
				   if(posticipata3==1){
					 $("#nascondi3").show();
				   }
				   else{
					 $("#feedo3").show();
				    }
					  
				   $("#close3").hide();
						
						$(document).on("tap", "#nascondi3", function(e){
									   
								setTimeout(function() {
									cancellapos(id);
								}, 500);
									   
								e.stopImmediatePropagation();
									   
								e.preventDefault();
									   
								return false;
									   
							});
					  
					  
					$(document).on("tap", "#feedo3", function(e){
						$("#pass3").hide();
						$("#blob2").hide();
									 
						var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
									 
						setTimeout(function() {
							cancella(id);
						}, 1000);
									 
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

				  
				  $("#code3").html("<b>"+h5codici+" : " + cod3 + "</b>");
				  $("#chat3").show();
					  
				  $("#4img").html("&nbsp;&nbsp;<img src='img/3_verde.png' width='40'>");
				  $("#3img").html("&nbsp;&nbsp;<img src='img/3_verde.png' width='40'>");
				  
				  
				  $(document).on("tap", "#gps3", function(e){

						var addressLongLat = lat3+","+lng3;
	
	                             //window.open("maps:daddr="+ addressLongLat +"" , '_system');
								 window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
	
								 $("#blob2").hide();
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
						 });
					  
					  $(document).on("touchstart tap", "#chat3", function(e){
									 
									 localStorage.setItem("pagechat", "1")
									 localStorage.setItem("stomessa", "1")
									 
									 localStorage.setItem("chatpass66", "")
                                     
                                     if(localStorage.getItem("lingua")=="it"){
                                     
                                     $("#chattext66").attr("placeholder", "Scrivi un messaggio");
                                     
                                     }
                                     else if(localStorage.getItem("lingua")=="en"){
                                     
                                     $("#chattext66").attr("placeholder", "Write a message");
                                     
                                     }
                                     else if(localStorage.getItem("lingua")=="fr"){
                                     
                                     $("#chattext66").attr("placeholder", "Ecrire un message");
                                     
                                     }
                                     else if(localStorage.getItem("lingua")=="es"){
                                     
                                     $("#chattext66").attr("placeholder", "Escribir mensaje");
                                     
                                     }
                                     else{
                                     
                                     $("#chattext66").attr("placeholder", "Write a message");
                                     
                                     }
									 
									 $("#btnpanel").click();
									 
									 chatting66(3,id)
									 
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
	
	var somma;
	var tempistica;
	var tempistica1;
	var h5tempistica
	var h5accettazione
	var h5codici
	var h5quando
	
	if(localStorage.getItem("lingua")=="it"){
		
		tempistica1 = "Tempo di arrivo"
		h5arrivo = "Arrivo"
		h5partenza = "Partenza"
		h5tempistica = "Orario confermato"
		
		h5accettazione = "Accettazione confermata"
		h5codici = "Codici commento"
		h5quando = "Quando"
		
		
	}
	else if(localStorage.getItem("lingua")=="en"){
		
		tempistica1 = "Time of arrival"
		h5arrivo = "Arrival"
		h5partenza = "Departure"
		h5tempistica = "Time confirmed"
		
		h5accettazione = "Acceptance confirmed"
		h5codici = "Feedback code"
		h5quando = "When"
	}
	else if(localStorage.getItem("lingua")=="fr"){
		
		tempistica1 = "Heure d'arriv&eacute;e"
		h5arrivo = "Arriv&eacute;e"
		h5partenza = "D&eacute;part"
		h5tempistica = "Temps confirm&eacute;"
		
		h5accettazione = "Acceptation confirm&eacute;e"
		h5codici = "Code de commentaire"
		h5quando = "Quand"
	}
	else if(localStorage.getItem("lingua")=="es"){
		
		tempistica1 = "Hora de llegada"
		h5arrivo = "Llegada"
		h5partenza = "Salida"
		h5tempistica = "Hora confirmada"
		
		h5accettazione = "Aceptaci&oacute;n confirmada"
		h5codici = "Codigo del comentario"
		h5quando = "Cuando"
	}
	else{
		
		tempistica1 = "Time of arrival"
		h5arrivo = "Arrival"
		h5partenza = "Departure"
		h5tempistica = "Time confirmed"
		
		h5accettazione = "Acceptance confirmed"
		h5codici = "Feedback code"
		h5quando = "When"
	}
	

	
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
		   
		   $("#offerte5").html("");
		   
		   $.each(result, function(i,item){
				  
				if(item.Token==1){
				  
				  if(item.importo==0){
				    somma = "Gratis"
				  }
				  else{
				    somma = item.importo;
				  }
				  
				  if(item.posticipata==0){
				    tempistica = ""+tempistica1+": " + item.tempo + " minuti";
				  }
				  else{
				    tempistica = h5tempistica;
				  }
				  
				  //"+ item.note_autista +"
				  
				  if(item.cell!=""){
				  $("#offerte5").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='right' width='60%'><div class='button_small_green' align='center'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"' href='' class='linkchat'><font color='#fff'>"+ item.nick +" "+ item.percentuale +"%</font></a></div></td><td align='left' width='40%'><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></tr><tr><td align='center' colspan='2'><br>&nbsp;&nbsp;<font color='#cc33cc' size='4'><b>"+h5accettazione+"</b></font><br></td></tr><tr><td align='left' colspan='2'><font color='#cc33cc' size='5'><b><div id='timer2'></div></b></font><br>&nbsp;&nbsp;<b>"+ tempistica +"</b><br>&nbsp;&nbsp;<b>Prezzo: </b>"+ somma +"<br>&nbsp;&nbsp;<b>"+h5quando+": </b>"+ item.quando +" <b>Ora: </b>"+ item.ora +"<br>&nbsp;&nbsp;<b>"+h5partenza+" : </b>"+ item.partenza +"<br>&nbsp;&nbsp;<b>"+h5arrivo+" : </b>"+ item.arrivo +"<br>&nbsp;&nbsp;<b>"+ item.note_autista +" </b>Note</td></tr><tr><td align='center' colspan='2'><br><a id='cell"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' ><img src='img/ico_telephone.png' width='50'></a>&nbsp;&nbsp;<a id='5chat"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' ><img src='img/chat.png' width='50'></a>&nbsp;&nbsp;<a id='rifiuta2"+ item.id_richiesta +"_"+ item.id_autista +"' href='#'><img src='img/ico_feedback.png' width='50'></a></td></tr><tr><td align='center' colspan='2'><br>&nbsp;&nbsp;<b>"+h5codici+": "+ item.cod_autista +"</b></td></tr><tr><td align='center' colspan='2'>&nbsp;&nbsp;</td></tr><tr><td align='center' colspan='2'></td></tr></table>");
				  }
				  else{
				  $("#offerte5").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='right' width='60%'><div class='button_small_green' align='center'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"' href='' class='linkchat'><font color='#fff'>"+ item.nick +" "+ item.percentuale +"%</font></a></div></td><td align='left' width='40%'><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></tr><tr><td align='center' colspan='2'><br>&nbsp;&nbsp;<font color='#cc33cc' size='4'><b>"+h5accettazione+"</b></font><br></td></tr><tr><td align='left' colspan='2'><font color='#cc33cc' size='5'><b><div id='timer2'></div></b></font><br>&nbsp;&nbsp;<b>"+ tempistica +"</b><br>&nbsp;&nbsp;<b>Prezzo: </b>"+ somma +"<br>&nbsp;&nbsp;<b>"+h5quando+": </b>"+ item.quando +" <b>Ora: </b>"+ item.ora +"<br>&nbsp;&nbsp;<b>"+h5partenza+" : </b>"+ item.partenza +"<br>&nbsp;&nbsp;<b>"+h5arrivo+" :  </b>"+ item.arrivo +"<br>&nbsp;&nbsp;<b>Note </b>"+ item.note_autista +"</td></tr><tr><td align='center' colspan='2'><br><a id='5chat"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' ><img src='img/chat.png' width='50'></a>&nbsp;&nbsp;<a id='rifiuta2"+ item.id_richiesta +"_"+ item.id_autista +"' href='#'><img src='img/ico_feedback.png' width='50'></a></td></tr><tr><td align='center' colspan='2'>&nbsp;&nbsp;<b>"+h5codici+": "+ item.cod_autista +"</b></td></tr><tr><td align='center' colspan='2'>&nbsp;&nbsp;</td></tr><tr><td align='center' colspan='2'></td></tr></table>");
				  }
				  
				  
				         $(document).on("touchstart", "#rifiuta2"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
							var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
									 
							setTimeout(function() {
								cancella(item.id_richiesta);
							}, 1000);
								 
							if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
								 
						});
				  
				  
					     $(document).on("touchstart", "#5chat"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
                                        
                                        if(localStorage.getItem("lingua")=="it"){
                                        
                                          $("#chattext5").attr("placeholder", "Scrivi un messaggio");
                                        
                                        }
                                        else if(localStorage.getItem("lingua")=="en"){
                                        
                                          $("#chattext5").attr("placeholder", "Write a message");
                                        
                                        }
                                        else if(localStorage.getItem("lingua")=="fr"){
                                        
										  $("#chattext5").attr("placeholder", "Ecrire un message");
                                        
                                        }
                                        else if(localStorage.getItem("lingua")=="es"){
                                        
                                          $("#chattext5").attr("placeholder", "Escribir mensaje");
                                        
                                        }
                                        else{
                                        
                                          $("#chattext5").attr("placeholder", "Write a message");
                                        
							}
                                        
								
								localStorage.setItem("chatpass5", "")
								$("#btnpanel3").click();
								 
								chatting5(item.id_richiesta)
										
								e.stopImmediatePropagation();
										
								e.preventDefault();
										
								return false;
								 
								if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
						});
				  
				  
				        $(document).on("touchstart", "#cell"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
							window.location.href = "tel:+39"+item.cell+"";
							if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
						});
				  
				  
				  
				  $(document).on("tap", "#linkpass"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
								 var ref = window.open('http://www.purplemiles.com/www/profilo_passeggero.php?lang='+ localStorage.getItem("lingua") +'&idp='+item.id_utente_pass+'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								 
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
					});
				  
				  $(document).on("tap", "#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
								 var ref = window.open('http://www.purplemiles.com/www/feedback_passeggero.php?lang='+ localStorage.getItem("lingua") +'&idp='+item.id_utente_pass+'&ida='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								 
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
					});
				  
				  
				  
				    if(parseFloat(item.rating)==0){
				     $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				    }
				  
				  else if(parseFloat(item.rating)>0 && parseFloat(item.rating)<=0.9){
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  
				  else if(parseFloat(item.rating)>=1 && parseFloat(item.rating)<=1.4){
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if(parseFloat(item.rating)>1.4 && parseFloat(item.rating)<=1.9){
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  
				  else if (parseFloat(item.rating)>=2 && parseFloat(item.rating)<=2.4) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseFloat(item.rating)>2.4 && parseFloat(item.rating)<=2.9) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseFloat(item.rating)>=3 && parseFloat(item.rating)<=3.4) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseFloat(item.rating)>3.4 && parseFloat(item.rating)<=3.9) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseFloat(item.rating)>=4 && parseFloat(item.rating)<=4.4) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html(ratio = "<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseFloat(item.rating)>4.4 && parseFloat(item.rating)<=4.9) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html(ratio = "<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/star_middle.png' width='18'>")
				  }
				  else if (parseFloat(item.rating)>=5) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html(ratio = "<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'>")
				  }
				  
				  
				  
				}
				else{
					 $("#offerte5").html("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><img src='img/Logo.png' width='160px'><br></td></tr><tr><td align='center'>Nessuna Richiesta Posticipata<br></td></tr></table>")
				}
			});
		   
		   
		   },
		   error: function(){
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led5").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Ok'                  // buttonName
										);*/
		   
		   onResume();
		   
		   },
		   dataType:"jsonp"});
	
	
	
	
	setTimeout(function() {
		 localStorage.setItem("chatcontroll5", localStorage.getItem("chatcontroll"))
		 controllachat5();
	}, 2000);
	
	
	
	

}


function chatting(pass,id) {
	

	localStorage.setItem("tastiera","0")
	
	
	localStorage.setItem("pagina","chat")

	
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
		   
		     $("#spinner6").hide();
		   }
		   else{
		     $("#offerta6").html("");
		     $("#spinner6").hide();
		   
		    $.each(result, function(i,item){
				  
			   localStorage.setItem("chatpass", JSON.stringify(result))
 
			   
			  if(item.Token==1){
				
				  if(item.nick==localStorage.getItem("nick")){
				   
				       var indirizzo = item.messaggio.replace("777A","'");
				   
												 
												 indirizzo = indirizzo.replace("777B", "+");
												 
												 indirizzo = indirizzo.replace("777C", "$");
												 
												 indirizzo = indirizzo.replace("777D", "!");
												 
												 indirizzo = indirizzo.replace("777E", "(");
												 
												 indirizzo = indirizzo.replace("777F", ")");
												 
												 indirizzo = indirizzo.replace("777F", ":");

				       $("#offerta6").append("<div class='bubbledLeft'>"+ indirizzo +"</div>")
				    }
				  else{
				   
				        var indirizzo = item.messaggio.replace("777A","'");
				   
					indirizzo = indirizzo.replace("777B", "+");
				   
					indirizzo = indirizzo.replace("777C", "$");
					
					indirizzo = indirizzo.replace("777D", "!");
				   
					indirizzo = indirizzo.replace("777E", "(");
					
					indirizzo = indirizzo.replace("777F", ")");
				   
					indirizzo = indirizzo.replace("777F", ":");

				        $("#offerta6").append("<div class='bubbledRight'>"+ indirizzo +"</div>")
				   
				    }
				  
				}
				  
			 });
		   
		   }
		   
		   },
		   error: function(){
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led5").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Ok'                  // buttonName
										);*/
		   
		   
		   },
		   dataType:"jsonp"});
	
	
	setTimeout(function() {
		chatting(pass,id);
	}, 3000);
	
	
}

function chatting66(pass,id) {
	
	
	localStorage.setItem("tastiera","0")
	
	
	localStorage.setItem("pagina","chat")
	
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/leggi_chat.php?id_richiesta="+ localStorage.getItem("id_richiesta") +"&last_id=0",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   if(localStorage.getItem("chatpass66")==JSON.stringify(result)){
		   
		   $("#spinner66").hide();
		   }
		   else{
		   $("#offerta66").html("");
		   $("#spinner66").hide();
		   
		   $.each(result, function(i,item){
				  
			   localStorage.setItem("chatpass66", JSON.stringify(result))
				  
			   
				  if(item.Token==1){
				  
				  if(item.nick==localStorage.getItem("nick")){
				  
				  
				     var indirizzo2 = item.messaggio.replace("777A","'");
				  
				  indirizzo2 = indirizzo2.replace("777B", "+");
				  
				  indirizzo2 = indirizzo2.replace("777C", "$");
				  
				  indirizzo2 = indirizzo2.replace("777D", "!");
				  
				  indirizzo2 = indirizzo2.replace("777E", "(");
				  
				  indirizzo2 = indirizzo2.replace("777F", ")");
				  
				  indirizzo2 = indirizzo2.replace("777F", ":");
				  
				    $("#offerta66").append("<div class='bubbledLeft'>"+ indirizzo2 +"</div>")
				  }
				  else{
				  
				    var indirizzo2 = item.messaggio.replace("777A","'");
				  
				  indirizzo2 = indirizzo2.replace("777B", "+");
				  
				  indirizzo2 = indirizzo2.replace("777C", "$");
				  
				  indirizzo2 = indirizzo2.replace("777D", "!");
				  
				  indirizzo2 = indirizzo2.replace("777E", "(");
				  
				  indirizzo2 = indirizzo2.replace("777F", ")");
				  
				  indirizzo2 = indirizzo2.replace("777F", ":");
				  
				    $("#offerta66").append("<div class='bubbledRight'>"+ indirizzo2 +"</div>")
				  }
				  
				  
				  }
				  
			});
		   
		   }
		   
		   },
		   error: function(){
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led5").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Ok'                  // buttonName
										);*/
		   
		   
		   },
		   dataType:"jsonp"});
	
	
	setTimeout(function() {
		chatting66(pass,id);
	}, 3000);
	
	
}

function chatting5(pass,id) {
	
	
	localStorage.setItem("tastiera","0")
	
	
	localStorage.setItem("pagina","chat")
	
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/leggi_chat.php?id_richiesta="+ localStorage.getItem("id_richiesta") +"&last_id=0",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   if(localStorage.getItem("chatpass5")==JSON.stringify(result)){
		   
		     $("#spinner5").hide();
		   }
		   else{
		   $("#offerta65").html("");
		   $("#spinner5").hide();
		   
		    $.each(result, function(i,item){
				  
			   localStorage.setItem("chatpass5", JSON.stringify(result))
				  
			   
				  if(item.Token==1){
				  
				  if(item.nick==localStorage.getItem("nick")){
				  
				  var indirizzo = item.messaggio.replace("777A","'");
				   
				   indirizzo = indirizzo.replace("777B", "+");
				   
				   indirizzo = indirizzo.replace("777C", "$");
				   
				   indirizzo = indirizzo.replace("777D", "!");
				   
				   indirizzo = indirizzo.replace("777E", "(");
				   
				   indirizzo = indirizzo.replace("777F", ")");
				   
				   indirizzo = indirizzo.replace("777F", ":");
				  
				   $("#offerta65").append("<div class='bubbledLeft'>"+ indirizzo +"</div>")
				  }
				  else{
				  
				  var indirizzo = item.messaggio.replace("777A","'");
				   
				   indirizzo = indirizzo.replace("777B", "+");
				   
				   indirizzo = indirizzo.replace("777C", "$");
				   
				   indirizzo = indirizzo.replace("777D", "!");
				   
				   indirizzo = indirizzo.replace("777E", "(");
				   
				   indirizzo = indirizzo.replace("777F", ")");
				   
				   indirizzo = indirizzo.replace("777F", ":");
				   
				  
				   $("#offerta65").append("<div class='bubbledRight'>"+ indirizzo +"</div>")
				   
				  }
				  
				  }
				  
			 });
		   
		   }
		   
		   },
		   error: function(){
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led5").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Ok'                  // buttonName
										);*/
		   
		   
		   },
		   dataType:"jsonp"});
	
	
	setTimeout(function() {
		chatting5(pass,id);
	}, 3000);
	
	
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


function inviachat(id) {
	
	if(id==6){
	  var indirizzo = document.getElementById("chattext").value;
		
	  //indirizzo = indirizzo.replace(/[&\/\\#,+()$~%.'":*<>{}]/g,'');
									  
	  //indirizzo = indirizzo.replace(/[&\/\\#,+()$~%.:*<>{}]/g,'');
		
		
	  indirizzo = indirizzo.replace(/[&\/\\#,~%.*<>{}]/g,'');
									  
	  indirizzo = indirizzo.replace(/'/g,"777A");
									
	  indirizzo = indirizzo.replace("+","777B");
									
	  indirizzo = indirizzo.replace("$","777C");
									
	  indirizzo = indirizzo.replace("!","777D");
									
	  indirizzo = indirizzo.replace("(","777E");
									
	  indirizzo = indirizzo.replace(")","777F");
									
	  indirizzo = indirizzo.replace(":","777F");

		
	  $("#spinner6").show();
									
	  localStorage.setItem("aspetta","1")
	}
	
	if(id==66){
		
	  var indirizzo = document.getElementById("chattext66").value;
		
	  indirizzo = indirizzo.replace(/[&\/\\#,~%.*<>{}]/g,'');
		
	  indirizzo = indirizzo.replace(/'/g,"777A");
		
									indirizzo = indirizzo.replace("+","777B");
									
									indirizzo = indirizzo.replace("$","777C");
									
									indirizzo = indirizzo.replace("!","777D");
									
									indirizzo = indirizzo.replace("(","777E");
									
									indirizzo = indirizzo.replace(")","777F");
									
									indirizzo = indirizzo.replace(":","777F");
		
	  $("#spinner4").show();
									
	  localStorage.setItem("aspetta","1")
									
	}
									
	if(id==65){
									
		var indirizzo = document.getElementById("chattext5").value;
									
		indirizzo = indirizzo.replace(/[&\/\\#,+()$~%.:*<>{}]/g,'');
									
		indirizzo = indirizzo.replace(/'/g,"777A");
									  
									  indirizzo = indirizzo.replace("+","777B");
									  
									  indirizzo = indirizzo.replace("$","777C");
									  
									  indirizzo = indirizzo.replace("!","777D");
									  
									  indirizzo = indirizzo.replace("(","777E");
									  
									  indirizzo = indirizzo.replace(")","777F");
									  
									  indirizzo = indirizzo.replace(":","777F");
																  
		$("#spinner5").show();
																  
		localStorage.setItem("aspetta","1")
																  
	}
		
		
	if (indirizzo == "") {
									  
									  if(localStorage.getItem("lingua")=="it"){
									  
									  var alertattenzione = "Attenzione"
									  var alertgps = "Inserire un messaggio"
									  var indirizzob = "Indirizzo"
									  
									  
									  }
									  else if(localStorage.getItem("lingua")=="en"){
									  
									  var alertattenzione = "Attention"
									  var alertgps = "Enter a message"
									  var indirizzob = "Address"
									  
									  
									  }
									  else if(localStorage.getItem("lingua")=="fr"){
									  
									  var alertattenzione = "Attention"
									  var alertgps = "Entrez un message"
									  var indirizzob = "Addresse"
									  
									  
									  }
									  else if(localStorage.getItem("lingua")=="es"){
									  
									  var alertattenzione = "Attenciòn"
									  var alertgps = "Insertar una respuesta"
									  var indirizzob = "Direction"
									  
									  
									  }
									  else{
									  
									  var alertattenzione = "Attention"
									  var alertgps = "insert a message"
									  var indirizzob = "Address"
									  
									  }
									  
		navigator.notification.alert(
									 alertgps,  // message
									 alertDismissed,         // callback
									 'Chat',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	setTimeout(function() {
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/pubblica_chat_autista.php?id_messaggio="+ localStorage.getItem("id_richiesta") +"&nick="+ localStorage.getItem("nickpass") +"&messaggio="+ indirizzo +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				    playChat1('successChat1');
				    localStorage.setItem("aspetta","0")
				  
				    if(id==6){
				      document.getElementById("chattext").value="";
				      $("#spinner6").hide();
				    }
				    if(id==66){
				     document.getElementById("chattext66").value="";
				     $("#spinner4").hide();
					}
				    if(id==65){
				     document.getElementById("chattext5").value="";
				     $("#spinner5").hide();
				    }
				  
				    //$("#btnpanel").click();
					//controllachat2()
					
				  }
				  
			});
		   
		   },
		   error: function(){
		   $("#spinner6").hide();
		   $("#spinner4").hide();
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led5").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Ok'                  // buttonName
										);*/
		   
		   onResume();
		   
		   },
		   dataType:"jsonp"});
			   
	}, 500);
	
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
	$("#lista").hide();
									  
	setTimeout(function() {
	   $("#blob4").hide();
	   $("#blob5").hide();
	}, 500);
	
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
				  
				  if(localStorage.getItem("lingua")=="it"){
				  
				   var alertattenzione = "Attenzione"
				   var alertgps = "Richiesta elaborata da altro utente."
				   var indirizzob = "Indirizzo"
				  
				  }
				  else if(localStorage.getItem("lingua")=="en"){
				  
				   var alertattenzione = "Attention"
				   var alertgps = "Request processed by another user."
				   var indirizzob = "Address"
				  
				  }
				  else if(localStorage.getItem("lingua")=="fr"){
				  
				   var alertattenzione = "Attention"
				   var alertgps = "demande traitée par un autre utilisateur"
				   var indirizzob = "Addresse"
				  
				  }
				  else if(localStorage.getItem("lingua")=="es"){
				  
				   var alertattenzione = "Attenciòn"
				   var alertgps = "Solicitud procesada por otro usuario."
				   var indirizzob = "Direction"
				  
				  }
				  else{
				  
				   var alertattenzione = "Attention"
				   var alertgps = "Request processed by another user."
				   var indirizzob = "Address"
				  
				  }
				  
				  
				    navigator.notification.alert(
											   alertgps,  // message
											   alertDismissed,         // callback
											   alertattenzione,           // title
											   'Ok'                  // buttonName
											   );
				  
				  resetta1(1);
				  
				  }
			});
		   
		   
		   },
		   error: function(){
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led5").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Ok'                  // buttonName
										);*/
		   
		   },
		   dataType:"jsonp"});
	}


function rifiuta1() {
	id = item1
	
	
	$("#blob3").hide();
	elimina3(id)
	
}

function accetta22() {
	id = item2
	
	$("#blob4").hide();
	$("#loading").show();
	$("#esci").hide();
	$("#lista").hide();
									  
	setTimeout(function() {
		$("#blob3").hide();
		$("#blob5").hide();
	}, 500);
	
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
				  
				  if(localStorage.getItem("lingua")=="it"){
				  
				  var alertattenzione = "Attenzione"
				  var alertgps = "Richiesta elaborata da altro utente."
				  var indirizzob = "Indirizzo"
				  
				  }
				  else if(localStorage.getItem("lingua")=="en"){
				  
				  var alertattenzione = "Attention"
				  var alertgps = "Request processed by another user."
				  var indirizzob = "Address"
				  
				  }
				  else if(localStorage.getItem("lingua")=="fr"){
				  
				  var alertattenzione = "Attention"
				  var alertgps = "demande traitée par un autre utilisateur"
				  var indirizzob = "Addresse"
				  
				  }
				  else if(localStorage.getItem("lingua")=="es"){
				  
				  var alertattenzione = "Attenciòn"
				  var alertgps = "Solicitud procesada por otro usuario."
				  var indirizzob = "Direction"
				  
				  }
				  else{
				  
				  var alertattenzione = "Attention"
				  var alertgps = "Request processed by another user."
				  var indirizzob = "Address"
				  
				  }
				  
				  
				  navigator.notification.alert(
											   alertgps,  // message
											   alertDismissed,         // callback
											   alertattenzione,           // title
											   'Ok'                  // buttonName
											   );
				  
				  resetta1(1);
				  
				  }
				  });
		   
		   
		   },
		   error: function(){
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led5").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Ok'                  // buttonName
										);*/
		   
		   },
		   dataType:"jsonp"});
	
	
}

function accetta33() {
	id = item3
	
	$("#blob5").hide();
									  
	$("#loading").show();
	$("#esci").hide();
	$("#lista").hide();
	
	setTimeout(function() {
	  $("#blob3").hide();
	  $("#blob4").hide();
	}, 500);
	
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
				  
				  if(localStorage.getItem("lingua")=="it"){
				  
				   var alertattenzione = "Attenzione"
				   var alertgps = "Richiesta elaborata da altro utente."
				   var indirizzob = "Indirizzo"
				  
				  }
				  else if(localStorage.getItem("lingua")=="en"){
				  
				   var alertattenzione = "Attention"
				   var alertgps = "Request processed by another user."
				   var indirizzob = "Address"
				  
				  }
				  else if(localStorage.getItem("lingua")=="fr"){
				  
				   var alertattenzione = "Attention"
				   var alertgps = "demande traitée par un autre utilisateur"
				   var indirizzob = "Addresse"
				  
				  }
				  else if(localStorage.getItem("lingua")=="es"){
				  
				   var alertattenzione = "Attenciòn"
				   var alertgps = "Solicitud procesada por otro usuario."
				   var indirizzob = "Direction"
				  
				  }
				  else{
				  
				   var alertattenzione = "Attention"
				   var alertgps = "Request processed by another user."
				   var indirizzob = "Address"
				  
				  }
				  
				  
				  navigator.notification.alert(
											   alertgps,  // message
											   alertDismissed,         // callback
											   alertattenzione,           // title
											   'Ok'                  // buttonName
											   );
				  
				  resetta1(1);
				  
				  }
				  });
		   
		   
		   },
		   error: function(){
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led5").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Ok'                  // buttonName
										);*/
		   
		   },
		   dataType:"jsonp"});
	
	
}



function rifiuta2() {
	id = item2
	
	
	$("#blob4").hide();
	elimina3(id)
	
}

function rifiuta3() {
	id = item3
	
	
	$("#blob5").hide();
	elimina3(id)
	
}





function inviopasseggero(come){
									  
									  if(localStorage.getItem("lingua")=="it"){
									  
									  var alertattenzione = "Attenzione"
									  var alertgps = "Richiesta elaborata da altro utente."
									  var inserireb = "Inserire un importo"
									  var annullab = "Il passeggero ha annullato la richiesta."
									  var importob = "Importo"
									  
									  
									  }
									  else if(localStorage.getItem("lingua")=="en"){
									  
									  var alertattenzione = "Attention"
									  var alertgps = "Request processed by another user."
									  var inserireb = "Enter a price"
									  var annullab = "The passenger has canceled the request."
									  var importob = "Price"
									  
									  
									  }
									  else if(localStorage.getItem("lingua")=="fr"){
									  
									  var alertattenzione = "Attention"
									  var alertgps = "demande traitée par un autre utilisateur"
									  var inserireb = "Entrez un prix"
									  var annullab = "le passager a annulé la demande"
									  var importob = "Prix"
									  
									  
									  }
									  else if(localStorage.getItem("lingua")=="es"){
									  
									  var alertattenzione = "Attenciòn"
									  var alertgps = "Solicitud procesada por otro usuario."
									  var inserireb = "Insertar un importe"
									  var annullab = "el pasajero ha cancelado la solicitud"
									  var importob = "Precio"
									  
									  
									  }
									  else{
									  
									  var alertattenzione = "Attention"
									  var alertgps = "Request processed by another user."
									  var inserireb = "Enter a price"
									  var annullab = "The passenger has canceled the request."
									  var importob = "Price"
									  
									  }
									  
									  
	
	if(come==1){
	  var coming = "GRATIS"
	}
	
	if(come==3){
		if (self.document.formia.soldini.value == "") {
			navigator.notification.alert(
										 inserireb,  // message
										 alertDismissed,         // callback
										 importob,            // title
										 'OK'                  // buttonName
										 );
			return;
		}

		
		var coming = self.document.formia.soldini.value;
	}
	
	if(come==2){
		var coming = "OFFERTA LIBERA";
	}
	
	var tempooff = self.document.formia.tempooff.value;
	
	var noteautista = document.getElementById("noteautista").value.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
	
	coming = coming.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
	
	//coming = encodeURIComponent(coming);
	
	
	$("#spinner3").show();
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_inviopasseggero.php?id="+ localStorage.getItem("id_richiesta") +"&note="+ noteautista +"&importo="+ coming +"&id_autista="+ localStorage.getItem("id_autista") +"&tempo="+ tempooff +"",
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
				  
				  google.maps.event.trigger(map, "resize");
				  
				  //if(google && google.maps){
				    //alert("Google maps loaded");
				  //}
				  
				  
				  if(!google || !google.maps){
				    resetta1(1);
				  }
				  
				  
				  e.stopImmediatePropagation();
				  
				  e.preventDefault();
				  
				  
				  //window.location.href = "map2.html?id=1";
				  
				  }
				  else{
				  navigator.notification.alert(
						annullab,  // message
						alertDismissed,         // callback
						alertattenzione,           // title
						'OK'                  // buttonName
						);
				  
				  }
				  
				  $.mobile.changePage( "#win2", { transition: "slide", changeHash: false, reverse: true });
			});
		   
		   
		   },
		   error: function(){
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led5").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Ok'                  // buttonName
										);*/
		   
		   },
		   dataType:"jsonp"});
	
}


function controllachat(uman) {
							  
	//alert("http://purplemiles.com/www2/controlla_chat.php?nick="+ localStorage.getItem("nickpass") +"")
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/controlla_chat.php?nick="+ localStorage.getItem("nickpass") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   if(localStorage.getItem("chatcontroll")==JSON.stringify(result)){
		   
		     //alert("uguale")
		   
		   }
		   else{
		   
		   localStorage.setItem("chatcontroll", JSON.stringify(result))
		   
		   if(uman==2){
		   
		    $.each(result, function(i,item){
				  
				if(item.Token==1){
				  
				  $("#nickhome6").html(item.nick);
				  
				  localStorage.setItem("id_richiesta",item.canale)
				  
				  
				  if( $(".ui-panel").hasClass("ui-panel-open") == true ){
				    //alert("OPENED");
				  }else{
				   
				    //alert("NO OPENED");
                   if(localStorage.getItem("lingua")=="it"){
                   
                   $("#chattext").attr("placeholder", "Scrivi un messaggio");
                   
                   }
                   else if(localStorage.getItem("lingua")=="en"){
                   
                   $("#chattext").attr("placeholder", "Write a message");
                   
                   }
                   else if(localStorage.getItem("lingua")=="fr"){
                   
                   $("#chattext").attr("placeholder", "Ecrire un message");
                   
                   }
                   else if(localStorage.getItem("lingua")=="es"){
                   
                   $("#chattext").attr("placeholder", "Escribir mensaje");
                   
                   }
                   else{
                   
                   $("#chattext").attr("placeholder", "Write a message");
                   
                   }
                   
                   
				    $("#btnpanel2").click();
				  }

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
										'Ok'                  // buttonName
										);*/
		   
		   
		   },
		   dataType:"jsonp"});
	
	
}
							  
					function LoginVera(){
							  

							  var lat = localStorage.getItem("lat");
							  var lng = localStorage.getItem("lng");
							  
							  $(".spinner").show();
							  $.ajax({
									 type:"GET",
									 url:"http://purplemiles.com/www2/check_accesso.php?email="+ localStorage.getItem("email") +"&pin="+ localStorage.getItem("pin") +"&lat="+ lat +"&lon="+ lng +"&veicolo="+ localStorage.getItem("veicolo") +"",
									 contentType: "application/json",
									 //data: {email:email,pin:pin},
									 timeout: 7000,
									 jsonp: 'callback',
									 crossDomain: true,
									 success:function(result){
									 
									 $.each(result, function(i,item){
											
										if (item.Token == 1){
											
											localStorage.setItem("stelleautista", item.voto_autista);
											localStorage.setItem("stellepass", item.voto_passeggero);
											localStorage.setItem("md5", item.md5);
											localStorage.setItem("perc_autista", item.perc_aut);
											localStorage.setItem("perc_pass", item.perc_pass);
											
											//alert(localStorage.getItem("pin"))
											
										}
											
									});
									 
									 $(".spinner").hide();
									 
									 },
									 error: function(){
									 $(".spinner").hide();
									 
									 /*navigator.notification.alert(
																  'Possibile errore di rete, riprova tra qualche minuto',  // message
																  alertDismissed,         // callback
																  'Attenzione',            // title
																  'Done'                  // buttonName
																  );*/
									 
									 },
									 dataType:"jsonp"});
							  }
							  

function controllachat2(ric,id) {
							  
							  setTimeout(function() {
								  controllachat2(ric,id);
							   }, 6000);
							  
	
							  $.ajax({
									 type:"GET",
									 url:"http://purplemiles.com/www2/controlla_chat.php?nick="+ localStorage.getItem("nickpass") +"",
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
									 
									 
									 $.each(result, function(i,item){
											
											if(item.Token==1){
											
											$("#nickhome6").html(item.nick);
											
											localStorage.setItem("id_richiesta",id)
											
											if( $(".ui-panel").hasClass("ui-panel-open") == true ){
												//alert("OPENED");
											}else{
                                            
                                            if(localStorage.getItem("lingua")=="it"){
                                            
                                             $("#chattext66").attr("placeholder", "Scrivi un messaggio");
                                            
                                            }
                                            else if(localStorage.getItem("lingua")=="en"){
                                            
                                             $("#chattext66").attr("placeholder", "Write a message");
                                            
                                            }
                                            else if(localStorage.getItem("lingua")=="fr"){
                                            
                                             $("#chattext66").attr("placeholder", "Ecrire un message");
                                            
                                            }
                                            else if(localStorage.getItem("lingua")=="es"){
                                            
                                             $("#chattext66").attr("placeholder", "Escribir mensaje");
                                            
                                            }
                                            else{
                                            
                                             $("#chattext66").attr("placeholder", "Write a message");
                                            
                                            }
                                            
                                            
												$("#btnpanel").click();
											}
											
											chatting66(ric,id);
											
											}
											
											});

									 }
									 
									 },
									 error: function(){
									 
									 
									 },
									 dataType:"jsonp"});
	
	
}

							  
						function controllachat5() {
							  

							  $.ajax({
									 type:"GET",
									 url:"http://purplemiles.com/www2/controlla_chat.php?nick="+ localStorage.getItem("nickpass") +"",
									 contentType: "application/json",
									 //data: {ID: "Lazio"}, LIMIT 10
									 timeout: 7000,
									 jsonp: 'callback',
									 crossDomain: true,
									 success:function(result){
									 
									 if(localStorage.getItem("chatcontroll5")==JSON.stringify(result)){
										//alert("1");
									 }
									 else{
									 
									    //alert("2");
									 
									 localStorage.setItem("chatcontroll5", JSON.stringify(result))
									 

									 $.each(result, function(i,item){
											
											if(item.Token==1){
											
											$("#nickhome5").html(item.nick);
											
											localStorage.setItem("id_richiesta",item.canale)
											
											
											if( $(".ui-panel").hasClass("ui-panel-open") == true ){
											  //alert("OPENED");
											
											}else{
                                            
                                            if(localStorage.getItem("lingua")=="it"){
                                            
                                            $("#chattext5").attr("placeholder", "Scrivi un messaggio");
                                            
                                            }
                                            else if(localStorage.getItem("lingua")=="en"){
                                            
                                            $("#chattext5").attr("placeholder", "Write a message");
                                            
                                            }
                                            else if(localStorage.getItem("lingua")=="fr"){
                                            
                                            $("#chattext5").attr("placeholder", "Ecrire un message");
                                            
                                            }
                                            else if(localStorage.getItem("lingua")=="es"){
                                            
                                            $("#chattext5").attr("placeholder", "Escribir mensaje");
                                            
                                            }
                                            else{
                                            
                                            $("#chattext5").attr("placeholder", "Write a message");
                                            
                                            }
                                            
											  $("#btnpanel3").click();
											}
											
											  //alert(item.canale);

											  chatting5(0,item.canale);

											}
											
										});
									 
									 }
									 
									 },
									 error: function(){

									 
									 },
									 dataType:"jsonp"});
							  
							  
									//alert();
								    controllachat6();

							  
							  }
							  
							  function controllachat6() {
							  
							  setTimeout(function() {
								//alert();
								controllachat6();
							  }, 6000);
							  
							  
							  $.ajax({
									 type:"GET",
									 url:"http://purplemiles.com/www2/controlla_chat.php?nick="+ localStorage.getItem("nickpass") +"",
									 contentType: "application/json",
									 //data: {ID: "Lazio"}, LIMIT 10
									 timeout: 7000,
									 jsonp: 'callback',
									 crossDomain: true,
									 success:function(result){
									 
									 if(localStorage.getItem("chatcontroll5")==JSON.stringify(result)){
										//alert("1");
									 }
									 else{
									 
									    //alert("2");
									 
									 localStorage.setItem("chatcontroll5", JSON.stringify(result))
									 
									 
									 $.each(result, function(i,item){
											
											if(item.Token==1){
											
											$("#nickhome5").html(item.nick);
											
											localStorage.setItem("id_richiesta",item.canale)
											
											
											if( $(".ui-panel").hasClass("ui-panel-open") == true ){
											//alert("OPENED");
											
											}else{
                                            
                                            if(localStorage.getItem("lingua")=="it"){
                                            
                                            $("#chattext5").attr("placeholder", "Scrivi un messaggio");
                                            
                                            }
                                            else if(localStorage.getItem("lingua")=="en"){
                                            
                                            $("#chattext5").attr("placeholder", "Write a message");
                                            
                                            }
                                            else if(localStorage.getItem("lingua")=="fr"){
                                            
                                            $("#chattext5").attr("placeholder", "Ecrire un message");
                                            
                                            }
                                            else if(localStorage.getItem("lingua")=="es"){
                                            
                                            $("#chattext5").attr("placeholder", "Escribir mensaje");
                                            
                                            }
                                            else{
                                            
                                            $("#chattext5").attr("placeholder", "Write a message");
                                            
                                            }
                                            
											$("#btnpanel3").click();
											}
											
											//alert(item.canale);
											
											chatting5(0,item.canale);
											
											}
											
											});
									 
									 }
									 
									 },
									 error: function(){
									 
									 
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

							  
function prendibanner() {
							  
							  var lat = localStorage.getItem("lat");
							  var lng = localStorage.getItem("lng");
							  
							  $.ajax({
									 type:"GET",
									 url:"http://adv.purplemiles.com/adv.php?lat="+ lat +"&lon="+ lng +"&id="+ localStorage.getItem("id_utente") +"&dev=1",
									 contentType: "application/json",
									 //data: {ID: "Lazio"}, LIMIT 10
									 timeout: 7000,
									 jsonp: 'callback',
									 crossDomain: true,
									 success:function(result){

									 
									  $.each(result, function(i,item){
											 
									  if(item.nome_img!=""){
										$("#bannerp").show();
											 
										$("#bannerpubblicita").html("<table id='linkpubblicita' border=0 width='100%' height='100%' style='background-color:#"+item.colore_sfondo+";'><tr><td align='center'><img src='"+item.nome_img+"' width='300px'></td></tr></table>");
											 
											 $(document).on("tap", "#linkpubblicita", function(e){
															
												var ref = window.open(''+item.link+'', '_system', 'location=no');
															
															
												e.stopImmediatePropagation();
															
												e.preventDefault();
															
												return false;
															
											});
										}
										else{
											$("#bannerp").hide();
										}
											
									    });

									 
									 },
									 error: function(){
									 
									 
									 },
									 dataType:"jsonp"});
	 
}
                // LINGUE //
                function seleziona() {
                    var db;
                    db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
                              
                              db.transaction(function (tx) {
                                             
                                             tx.executeSql('SELECT * FROM TestiV2', [], function (tx, results) {
                                                        var len = results.rows.length, i;
                                                           
                                                        if(localStorage.getItem("lingua")=="it"){
                                                           
                                                           for (i = 0; i < len; i++){
                                                              //$("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).italiano.replace("P0011", "'"));
                                                           
                                                           
                                                           }
                                                           
                                                        }
                                                           
                                                           
                                                        if(localStorage.getItem("lingua")=="en"){
                                                           
                                                           
                                                           for (i = 0; i < len; i++){
                                                           
                                                             $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
                                                           
                                                           

                                                           }
                                                           
                                                        }
														
														if(localStorage.getItem("lingua")=="fr"){
														   
														   
														   for (i = 0; i < len; i++){
														   
														   $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).francese.replace("P0011", "'"));
														   
														   
														   
														   }
														   
														}
														   
														if(localStorage.getItem("lingua")=="es"){
														   
														   
														   for (i = 0; i < len; i++){
														   
														   $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).spagnolo.replace("P0011", "'"));
														   
														   
														   
														   }
														   
														}
														   
                                            }, null);
                                });
							  
                    }



function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
						  }
