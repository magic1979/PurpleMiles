document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("resume", onResume, false);
	
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
	
	var destination;
	
	var item;
	var autista;
	var richiesta;
	
	var height = getRealContentHeight()-60;
	$("#tblhome").attr("height",height);
	$("#tblhome3").attr("height",height);
	//$("#tblhome4").attr("height",height);
	
	var emailpass = localStorage.getItem("emailpass");
	
	if (localStorage.getItem("emailpass") === null || localStorage.getItem("emailpass")=="null" || typeof(localStorage.getItem("emailpass")) == 'undefined' || localStorage.getItem("emailpass")==0 || localStorage.getItem("emailpass")=="") {
		
		window.location.href = "Login.html";
		
	}
	
	IDPage = getParameterByName('id');
	ODPage = getParameterByName('od');
	
	$(document).on("tap", "#imgcalendario", function(e){
		mostracal();
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#XXX", function(e){
		for(i=0; i<10000; i++)
		{
		   window.clearInterval(i);
		}
				   
		window.location.href = "index.html";
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#XX3", function(e){
		window.location.href = "index.html";
	   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#inizia", function(e){
		start();
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#da", function(e){
		localStorage.setItem("destination", "0")
				   
		$("#viale").show();
		$("#destinazione").hide();
				   
		$("#da").removeClass("bottoni").addClass("bottoni1");
		$("#a").removeClass("bottoni1").addClass("bottoni");
				   
		onResume();
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#da1", function(e){
				   localStorage.setItem("destination", "0")
				   
				   $("#viale").show();
				   $("#destinazione").hide();
				   
				   $("#da1").removeClass("bottoni").addClass("bottoni1");
				   $("#a1").removeClass("bottoni1").addClass("bottoni");
				   
				   resetta(1);
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   });
	
	$(document).on("tap", "#adesso", function(e){
	 onResume();
	 if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#quando", function(e){
		for(i=0; i<10000; i++)
		{
			window.clearInterval(i);
		}
				   
		localStorage.setItem("viale", document.getElementById("viale").value);
		localStorage.setItem("destinazione", document.getElementById("destinazione").value);
				   
		window.location.href = "#home";
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#annulla", function(e){
		$.mobile.changePage ($("#home"));
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#indietro4", function(e){
		$.mobile.changePage ($("#home"));
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#offerte", function(e){
	    $.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
		//$.mobile.changePage ($("#home4"));
		vediofferte()
		//alert("in costruzione")
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#piu", function(e){
		alert("in costruzione")
		//$.mobile.changePage ($("#home4"));
		//vediofferte()
		//alert("in costruzione")
	if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#a", function(e){
	
	localStorage.setItem("destination", "1")
	
	$("#viale").hide();
	$("#destinazione").show();
				   
	//$("#da").removeClass("custom-pass11").addClass("custom-pass1");
	//$("#a").removeClass("custom-pass1").addClass("custom-pass11");
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#a1", function(e){
				   
				   localStorage.setItem("destination", "1");
				   
				   $("#viale").hide();
				   $("#destinazione").show();
				   
				   $("#da1").removeClass("bottoni1").addClass("bottoni");
				   $("#a1").removeClass("bottoni").addClass("bottoni1");
				   
				   
				   resetta(1);
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
		});
	
	
	$(document).on("touchstart", "#ad", function(e){
				   
				   localStorage.setItem("destination", "1");
				   
				   $("#viale").hide();
				   $("#destinazione").show();
				   
				   $("#da").removeClass("custom-pass11").addClass("custom-pass1");
				   $("#a1").removeClass("custom-pass1").addClass("custom-pass11");
				   
				   
				   resetta(1);
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	function start() {
		//chiamo e setto a 1 lo stato dell'autista (ok lavoro)
		
		$("#btninizia").hide();
		//$("#loading").show();
		
		//resetta1(1);
		
	}
	
	$(document).on("touchstart", "#back3", function(e){
		//alert("http://purplemiles.com/www2/check_richiesta.php?email="+ localStorage.getItem("emailpass") +"&indirizzo="+ document.getElementById("viale3").value +"&indirizzo2="+ document.getElementById("destinazione3").value +"")
		
		
		$.ajax({
			   type:"GET",
			   url:"http://purplemiles.com/www2/check_richiesta3.php?email="+ localStorage.getItem("emailpass") +"&indirizzo="+ document.getElementById("viale3").value +"&indirizzo2="+ document.getElementById("destinazione3").value +"",
			   contentType: "application/json",
			   //data: {ID: "Lazio"}, LIMIT 10
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $.each(result, function(i,item){
					  
				  if(item.Token==1){
					  
					  navigator.notification.alert(
					   'Richiesta Inviata',  // message
					   alertDismissed,         // callback
					   'OK',           // title
					   'Done'                  // buttonName
					   );
					  
					  $("#btnofferte").show();
					  $.mobile.changePage( "#home", { transition: "slide", changeHash: false });
					  
					  //vediofferte()
					  e.stopImmediatePropagation();
				   
				      e.preventDefault();
				   
				      return false;
				   
				      if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
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
		
	});
	

	
	$(document).on("tap", "#anteprima", function(e){
		localStorage.setItem("viale", document.getElementById("viale").value);
		localStorage.setItem("destinazione", document.getElementById("destinazione").value);
		document.getElementById("viale3").value = document.getElementById("viale").value;
		document.getElementById("destinazione3").value = document.getElementById("destinazione").value;
				   
				if (document.getElementById("viale").value == "") {
				   navigator.notification.alert(
					'inserire un Indirizzo di partenza',  // message
					alertDismissed,         // callback
					'Attenzione',            // title
					'OK'                  // buttonName
					);
				   
				   return;
				}
				   
		if (document.getElementById("destinazione3").value == "") {
			navigator.notification.alert(
			  'inserire un Indirizzo di destinazione',  // message
				alertDismissed,         // callback
				'Attenzione',            // title
				'OK'                  // buttonName
			);
		    
				   return;
		}

				   
		$.mobile.changePage ($("#home3"));
		
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});

	
	var last_click_time = new Date().getTime();
	
	document.addEventListener("tap", function (e) {
							  
							  var click_time = e['timeStamp'];
							  
							  if (click_time && (click_time - last_click_time) < 1000) { e.stopImmediatePropagation();
							  
							  e.preventDefault();
							  
							  return false;
							  
							  }
							  
							  last_click_time = click_time;
							  
							  }, true);
	
	var isTabHolded=false;
	

	var map;
	var refreshIntervalId;
	var refreshIntervalId33;
	var prefi2000;
	var item1;
	var item2;
	var item3;
	

	

	if(IDPage==1){
		resetta1(1);
	}
	
	$(document).keydown(function (eventObj){
		getKey(eventObj);
    });
	

    $(".spinner").hide();
    var connectionStatus = false;
    connectionStatus = navigator.onLine ? 'online' : 'offline';
    
    if(connectionStatus=='online'){
        $('#noconn').hide();
		

			var lat = localStorage.getItem("lat");
			var lng = localStorage.getItem("lng");
		
		
			 //var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
			 //var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
		
			 localStorage.setItem("lat", lat)
			 localStorage.setItem("lng", lng)
		

			 //codeLatLng(lat,lng);
    
}
    
    else{
		navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		
		
		window.location.href = "index.html";
		
		
    }
	
	
	if(IDPage==2){
		window.location.href = "#win2";
		resetta2();
	}
}

function chiama(km) {
	alert(km)
}

function CenterControl(controlDiv, map) {
	
	// Set CSS for the control border.
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = 'transparent';
	controlUI.style.border = '0px solid #fff';
	controlUI.style.borderRadius = '0px';
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
	//controlText.innerHTML = '<br><table width="100%"><tr><td align="right"><a id="XXX" href="index.html" rel="external"><img src="img/xx.png" width="25px"></a></td></tr></table><table width="100%" align="center"><tr><td align="center" width="50%">DA</td><td align="center" width="50%">A</td></tr><tr><td align="center" width="50%"><input id="viale" name="viale" type="text" value="'+ localStorage.getItem("Via") +'"></td></tr><tr><td align="center" width="50%"><input id="citta" name="citta" type="text" value="Roma"></td></tr></table>';
	controlText.innerHTML = '<br><table width="100%"><tr><td align="right"><a id="XX3" href="index.html" rel="external"><img src="img/xx.png" width="25px"></a></td></tr></table><table width="100%" border="0" valign="center" align="center" ><tr><td align="center" ><a data-role="button" id="quando" href="#" data-theme="b" class="custom-pass"><font color="#fff">Quando</font></a></td><td align="center" ><a data-role="button" id="da1" href="#" data-theme="b" class="bottoni1"><font color="#fff">&nbsp;Da&nbsp;</font></a></td><td align="center" ><a data-role="button" id="a1" href="#" data-theme="b" class="bottoni"><font color="#fff">&nbsp;A&nbsp;</font></a></td><td align="center" ><a data-role="button" id="piu" href="#" data-theme="b" class="bottoni"><font color="#fff">&nbsp;+&nbsp;</font></a></td><td align="center" ><a data-role="button" id="anteprima" href="#" data-theme="b" class="custom-pass"><font color="#fff">Anteprima</font></a></td></tr></table>';
	controlUI.appendChild(controlText);
	
	//var g = document.createElement('div');
	//g.id ='sopra':
	//controlUI.appendChild(g);
	// Setup the click event listeners: simply set the map to Chicago.
	//controlUI.addEventListener('click', function() {
		//alert();
		//map.setCenter(chicago);
	//});
	
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

function onConfirm(button) {
    $(".spinner").hide();
    
    if (button==1){
        window.location.href = "Token.html";
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
					 
					 
					 
					 if(localStorage.getItem("destination")==0){
					   document.getElementById("viale").value = indirizzo;
					   localStorage.setItem("viale", indirizzo)
					   localStorage.setItem("vialeDA", latlng)
					 }
					 else{
						document.getElementById("destinazione").value = indirizzo;
					   localStorage.setItem("destinazione", indirizzo)
					   localStorage.setItem("vialeA", latlng)
					 }
					 
					   //localStorage.setItem("viale", indirizzo)
					 
					 
			});
	
}

function codeLatLng2(posizione) {
	var geocoder;
	geocoder = new google.maps.Geocoder();
	//var input = "41.875094, 12.478151";
	//var latlngStr = input.split(',', 2);
	
	alert(posizione)
	
	 var mySplitResult = posizione.split(",");
	
	alert(posizione[0] + "--" + posizione[1])
	
	var latlng = new google.maps.LatLng(posizione);
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
					 
					    if(localStorage.getItem("destination")==0){
					     document.getElementById("viale").value = indirizzo;
					     localStorage.setItem("viale", indirizzo)
					    }
					    else{
						 document.getElementById("destinazione").value = indirizzo;
					     localStorage.setItem("destinazione", indirizzo)
					    }
					 
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


function verificawifi(){
    $("#verifica").click();
}

function onResume() {
	
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
	
	if(connectionStatus=='online'){
	
	setTimeout(function() {
	   //localStorage.setItem("geostory", "NO")
	   //clearInterval(refreshIntervalId);
		
		for(i=0; i<10000; i++)
		{
		window.clearInterval(i);
		}
			   
		$("#viale").show();
		$("#destinazione").hide();
			   
		$("#da").removeClass("custom-pass1").addClass("custom-pass11");
		$("#a1").removeClass("custom-pass11").addClass("custom-pass1");
			   
	   resetta1(1);
	}, 200);
		
	}
	else{
		window.location.href = "index.html";
	}
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
		
	$("#da").removeClass("bottoni").addClass("bottoni1");

	var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	
	//$("#btn").click();
	//marker.setMap(null);
	//ido.setVisible(false);
	
	//var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
	//var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
	
	//localStorage.setItem("lat", lat)
    //localStorage.setItem("lng", lng)
	//ido.setPosition(latlng);

	
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
	

    //if(localStorage.getItem("destination")==0){
	  var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
	/*}
	else{
	  var icon = new google.maps.MarkerImage("img/pin.png", null, null, null, new google.maps.Size(30,50));
	}*/
					
					
			marker2 = new google.maps.Marker ({
					 map : map,
					 icon: icon,
					 optimized: false,
					 position : latlng,
					 content:'<div class="popup">'+ localStorage.getItem("nickpass") +'<br>Via '+ localStorage.getItem("Via") +' </div>',
					 title: 'Passeggero',
					 zIndex: 1
					});
					
					google.maps.event.addListener(marker2, 'click', function() {
												  
						infowindow.setContent(this.content);
						infowindow.open(map, this);
												  
					});
		
		
	if(localStorage.getItem("destination")==0){

		
		if (localStorage.getItem("viale") === null || localStorage.getItem("viale")=="null" || typeof(localStorage.getItem("viale")) == 'undefined' || localStorage.getItem("viale")==0 || localStorage.getItem("viale")=="") {
			
			codeLatLng(lat,lng);
			
		}
		else{
			 document.getElementById("viale").value = localStorage.getItem("viale");
		}
		
	}
	else{
		
		if (localStorage.getItem("destinazione") === null || localStorage.getItem("destinazione")=="null" || typeof(localStorage.getItem("destinazione")) == 'undefined' || localStorage.getItem("destinazione")==0 || localStorage.getItem("destinazione")=="") {
			
			codeLatLng(lat,lng);
			
		}
		else{
			document.getElementById("destinazione").value = localStorage.getItem("destinazione");
		}
	}
		
		
		
	   var centerControlDiv = document.createElement('div');
	   centerControlDiv.setAttribute('id', 'sopra');
	   var centerControl = new CenterControl(centerControlDiv, map);
	  
	   centerControlDiv.index = 1;
	   map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
	
		
	
	
	/*INSERT TAP PROLUNGATO*/
	
	google.maps.event.addListener(map, 'click', function(e) {
		placeMarker(e.latLng, map);
								  
								  
		//codeLatLng2(e.latLng)
								  
	});

	
	function placeMarker(position, map) {
		
		if(localStorage.getItem("tappato")=="0"){
		if (isTabHolded){
			var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
			
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
			
			
			/*setTimeout(function() {

					   google.maps.event.addListener(marker4, "tap", function (event) {
										  var latitude2 = this.position.lat();
										  var longitude2 = this.position.lng();
													 
										  infowindow.setContent(this.position);
										  infowindow.open(map, this);
										  //alert(this.position);
										  }); //end addListener
			
					   map.panTo(position);
					   isTabHolded=false;

			}, 300);*/
			
			isTabHolded=false
			localStorage.setItem("tappato", "1")
		}
	 }
   }
		
	
	//---------------------------

		
		function onSuccess2(position) {
			
			//alert("timer")
			
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
			
			localStorage.setItem("lat", lat)
			localStorage.setItem("lng", lng)
			
			//var lat = localStorage.getItem("lat");
			//var lng = localStorage.getItem("lng");
			var latlng = new google.maps.LatLng(lat, lng);
			
			marker2.setPosition(latlng);
			map.setCenter(latlng);
			
			//localStorage.setItem("lat", ciao)
            //localStorage.setItem("lng", ciao1)
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
	
}


function start() {
	//chiamo e setto a 1 lo stato dell'autista (ok lavoro)
	
	$("#btninizia").hide();
	$("#loading").show();
	
	resetta1(1);
	
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
	
	//alert(coming + " - " + localStorage.getItem("id_richiesta"))
	
	//alert(localStorage.getItem("id_richiesta"))
	
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

				  for(i=0; i<10000; i++)
				  {
				  window.clearInterval(i);
				  }
				  
				  //setTimeout(function() {
				  //localStorage.setItem("geostory", "NO")
				  //clearInterval(refreshIntervalId33);
				  //window.location.href = "map.html?id=1";
				  //onResume();
				  //}, 200);
				  
				  //window.location.href = "#win2";
				  //onDeviceReady();
				  
				  resetta1(1);
				  
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

function vediofferte(){
	$("#offerte4").html("");
	$("#timer2").show();
	//alert("Vedo");
	
	for(i=0; i<10000; i++)
	{
		window.clearInterval(i);
	}
	
	//alert("http://purplemiles.com/www2/check_richiesta_passeggero.php?email="+ localStorage.getItem("emailpass") +"&id_passeggero="+ localStorage.getItem("id_pass") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"")
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_passeggero.php?email="+ localStorage.getItem("emailpass") +"&id_passeggero="+ localStorage.getItem("id_pass") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  if(item.stato==2){
				  
				  
				  if(item.accettata==1){
				    $("#offerte4").append("<br><table height='100%' width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><div class='custom-pass2'>"+ item.nick +"</div><img src='img/stelle.png' width='80'><br><font color='#cc33cc' size='5'><b><div id='timer2'></div></b></font><br><b>Prezzo:</b>"+ item.importo +"<br><b>Quando:</b>"+ item.quando +"<br><br><b>Partenza:</b>"+ item.partenza +"<br><b>Arrivo:</b>"+ item.arrivo +"</td></tr><tr><td align='center'><a id='rifiuta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>RIFIUTA</font></a></td></tr><tr><td align='center'><br></td></tr></table>");
				  }
				  else{
				    $("#offerte4").append("<br><table height='100%' width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><div class='custom-pass11'>"+ item.nick +"</div><img src='img/stelle.png' width='80'><br><font color='#cc33cc' size='5'><b><div id='timer2'></div></b></font><br><b>Prezzo:</b>"+ item.importo +"<br><b>Quando:</b>"+ item.quando +"<br><br><b>Partenza:</b>"+ item.partenza +"<br><b>Arrivo:</b>"+ item.arrivo +"</td></tr><tr><td align='center'><a id='accetta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>ACCETTA</font></a>&nbsp;&nbsp;<a id='rifiuta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>RIFIUTA</font></a></td></tr><tr><td align='center'><br></td></tr></table>");
				  }
				  
				    $(document).on("touchstart", "#accetta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
					  accettaofferta(2,item.id_richiesta,item.id_autista)
					  if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				    });
				  
					$(document).on("touchstart", "#rifiuta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						accettaofferta(3,item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				    });
				  
				  if(item.stato==2){
				  
				  if(item.accettata==0){
				  
				  if(item.confermata==0){
				  
				   for(i=0; i<10000; i++)
				   {
				    window.clearInterval(i);
				   }
				  
				   localStorage.setItem("accettato","0")
				   //$("#timer2").show();

				   function countdown2(minutes) {
				   var seconds = 40;
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
				  
				     $("#timer2").hide();
				     //vediofferte()
				     scadutaofferta(0,item.id_richiesta,item.id_autista)
					 return false;

				  
					 // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
					 //setTimeout(function () { countdown(mins - 1); }, 1000);
				  
				   //}
				   }
				   }
				   tick();
				   }
				  
				   countdown2(0);
				  }
				  
				  }
				  
				  }
				  
				  }
				   if(item.stato==1){
					 $("#offerte4").append("<br><table height='100%' width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><div class='custom-pass11'>"+ item.nick +"</div><img src='img/stelle.png' width='80'><br><b>Prezzo:</b>"+ item.importo +"<br><b>Partenza:</b>"+ item.partenza +"</td></tr><tr><td align='center'><a id='accetta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>ACCETTA</font></a>&nbsp;&nbsp;<a id='rifiuta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>RIFIUTA</font></a></td></tr><tr><td align='center'><br></td></tr></table>");
				  
				    $(document).on("touchstart", "#accetta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						accettaofferta(2,item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
					 });
				  
				    $(document).on("touchstart", "#rifiuta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						accettaofferta(3,item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
					});
					
				  }
				  
				  if(item.stato==0){
					 $("#offerte4").append("<br><table height='100%' width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><div class='custom-pass'>"+ item.nick +"</div><img src='img/stelle.png' width='80'><br><b>Prezzo:</b>"+ item.importo +"<br><b>Partenza:</b>"+ item.partenza +"</td></tr><tr><td align='center'></td></tr><tr><td align='center'><br></td></tr></table>");
				  }

				  

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
	
	
	refreshPos = setInterval(function() {
		vediofferte()
	}, 5000);
	
	//setTimeout( function() {
		//vediofferte()
	//}, 5000 );

	
}

function accettaofferta(id,id_richiesta,id_autista){
	
	//alert("http://purplemiles.com/www2/check_confermapasseggero.php?conferma="+ id +"&id_richiesta="+ id_richiesta +"&id_autista="+ id_autista +"")
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_confermapasseggero.php?conferma="+ id +"&id_richiesta="+ id_richiesta +"&id_autista="+ id_autista +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				    vediofferte()
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

function scadutaofferta(id,id_richiesta,id_autista){
	
	//alert("http://purplemiles.com/www2/check_confermapasseggero.php?conferma="+ id +"&id_richiesta="+ id_richiesta +"&id_autista="+ id_autista +"")
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_confermapasseggeroS1A.php?conferma="+ id +"&id_richiesta="+ id_richiesta +"&id_autista="+ id_autista +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){

				  vediofferte()
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


function mostracal(){
	
	var options = {
		
	date: new Date(),
		
	mode: 'date',
		
	doneButtonLabel: 'OK',
	doneButtonColor: '#000000',
	cancelButtonLabel: 'RESET',
	cancelButtonColor: '#000000'
		
	};
	
	
	datePicker.show(options, function(date){
					var datta = String(date).substring(4, 15);
					
					var datta1 = datta.replace("Sep","Settembre")
					var datta2 = datta1.replace("Oct","Ottobre")
					var datta3 = datta2.replace("Nov","Novembre")
					var datta4 = datta3.replace("Dec","Dicembre")
					var datta5 = datta4.replace("Jan","Gennaio")
					var datta6 = datta5.replace("Feb","Febbraio")
					var datta7 = datta6.replace("Mar","Marzo")
					var datta8 = datta7.replace("Apr","Aprile")
					var datta9 = datta8.replace("May","Maggio")
					var datta10 = datta9.replace("Jun","Giugno")
					var datta11 = datta10.replace("Jul","Luglio")
					var datta12 = datta11.replace("Aug","Agosto")
					
		document.getElementById("datacal").value = datta12
					
	});
}




function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
						  }