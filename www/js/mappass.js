document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("resume", onResume, false);
	
	var height = getRealContentHeight();
	$("#tblhome").attr("height",height);
	$("#tblhome3").attr("height",height);
	
	var emailpass = localStorage.getItem("emailpass");
	
	if (localStorage.getItem("emailpass") === null || localStorage.getItem("emailpass")=="null" || typeof(localStorage.getItem("emailpass")) == 'undefined' || localStorage.getItem("emailpass")==0 || localStorage.getItem("emailpass")=="") {
		
		window.location.href = "LoginPass.html";
		
	}
	
	IDPage = getParameterByName('id');
	ODPage = getParameterByName('od');
	
	$(document).on("tap", "#XXX", function(e){
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
		onResume();
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#adesso", function(e){
	 onResume();
	 if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#quando", function(e){
		$.mobile.changePage ($("#home"));
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#annulla", function(e){
		$.mobile.changePage ($("#home"));
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#offerte", function(e){
		alert("in costruzione")
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#a", function(e){
				   
	$("#viale").hide();
	$("#destinazione").show();
				   
	$("#da").removeClass("custom-pass11").addClass("custom-pass1");
	$("#a").removeClass("custom-pass1").addClass("custom-pass11");
				   
	if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#a1", function(e){
				   
				   $("#viale").hide();
				   $("#destinazione").show();
				   
				   $("#da").removeClass("custom-pass11").addClass("custom-pass1");
				   $("#a1").removeClass("custom-pass1").addClass("custom-pass11");
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   });
	
	$(document).on("touchstart", "#ad", function(e){
				   
		onResume();
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
			   url:"http://purplemiles.com/www2/check_richiesta.php?email="+ localStorage.getItem("emailpass") +"&indirizzo="+ document.getElementById("viale3").value +"&indirizzo2="+ document.getElementById("destinazione3").value +"",
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
					  $.mobile.changePage ($("#home3"));
					  return;
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
		document.getElementById("viale3").value = document.getElementById("viale").value;
		document.getElementById("destinazione3").value = document.getElementById("destinazione").value;
				   
				if (document.getElementById("viale").value == "") {
				   navigator.notification.alert(
					'inserire un Indirizzo di partenza',  // message
					alertDismissed,         // callback
					'Pin',            // title
					'OK'                  // buttonName
					);
				   
				   return;
				}
				   
		if (document.getElementById("destinazione3").value == "") {
			navigator.notification.alert(
			  'inserire un Indirizzo di destinazione',  // message
				alertDismissed,         // callback
				'Pin',            // title
				'OK'                  // buttonName
			);
		    
				   return;
		}

				   
		$.mobile.changePage ($("#home3"));
		
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
	

    $(".spinner").show();
    var connectionStatus = false;
    connectionStatus = navigator.onLine ? 'online' : 'offline';
    
    if(connectionStatus=='online'){
        $('#noconn').hide();
		
        var geostory = localStorage.getItem("geostory");
		
        
    if (geostory == 'NO'){
		navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
        
        function onSuccess(position) {
            var ciao = position.coords.latitude;
            var ciao1 = position.coords.longitude;
            
            localStorage.setItem("lat", ciao)
            localStorage.setItem("lng", ciao1)
            
            localStorage.setItem("geostory", "SI")
        }
        
        
        function onError(error) {
			navigator.geolocation.getCurrentPosition(onSuccess, onError1, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
        }
        
        function onError1(error) {
            localStorage.setItem("geostory", "NO")
            
            navigator.notification.alert(
               'Non riesco a rilevare la tua posizione',
                alertDismissed,
                'Attenzione',
                'OK'
               );
        
            $(".spinner").hide();
        }
    }
    else{
        var latitudine = localStorage.getItem("lat");
        var longitudine = localStorage.getItem("lng");
        
        localStorage.setItem("geostory", "SI")
        
        $(".spinner").hide();
    }
		
		
								  var lat = localStorage.getItem("lat");
								  var lng = localStorage.getItem("lng");
		
		
								  //var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
								  //var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
		
								  localStorage.setItem("lat", lat)
								  localStorage.setItem("lng", lng)
		

								  codeLatLng(lat,lng);
    
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
	controlText.innerHTML = '<br><table width="100%"><tr><td align="right"><a id="XX3" href="index.html" rel="external"><img src="img/xx.png" width="25px"></a></td></tr></table><table border="0" valign="center" align="center" ><tr><td align="center" ><a data-role="button" id="quando" href="#" data-theme="b" class="custom-pass1"><font color="#fff">Quando</font></a></td><td align="center" ><a data-role="button" id="da" href="#" data-theme="b" class="custom-pass11">Da</a></td><td align="center" ><a data-role="button" id="a1" href="#" data-theme="b" class="custom-pass1"><font color="#fff">A</font></a></td><td align="center" ><a data-role="button" id="piu" href="#" data-theme="b" class="custom-pass1"><font color="#fff">+</font></a></td><td align="center" ><a data-role="button" id="anteprima" href="#" data-theme="b" class="custom-pass1"><font color="#fff">Anteprima</font></a></td></tr></table>';
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
    
    geocoder.geocode({'latLng': latlng}, function(results, status) {
	 if (status == google.maps.GeocoderStatus.OK) {
	 if (results[1]) {
	 
		/*var tabella = '<table align="center" border="0" width="310px" height="60px">';
		tabella = tabella + '<tr><td align="center" width="50px"><a href="maps:daddr=41.913010,12.442009&saddr=41.875094,12.478151"><img src="images/pin.png" width="32px"></a></td><td align="left"><font color="white" size="2">'+ results[1].formatted_address +'</font></td></tr>';
		tabella = tabella + '</table>';*/
	 
		var viadotto = results[1].formatted_address;
	 
		localStorage.setItem("Via", viadotto)
					 
		document.getElementById("viale").value = viadotto;
	 
		$('#classifica').html('');
		$(".spinner").hide();
		//funzioneradar();
	 
	 } else {
	  /*navigator.notification.alert(
	   'Non riesco a rilevare la tua posizione',  // message
		alertDismissed,         // callback
		'Attenzione',            // title
		'OK'                  // buttonName
	  );*/
		$(".spinner").hide();
		//funzioneradar();
	 }
	 } else {
	  /*navigator.notification.alert(
	   'Non riesco a rilevare la tua posizione',  // message
		 alertDismissed,         // callback
		 'Attenzione',            // title
		 'OK'                  // buttonName
	 );*/
	 
		$(".spinner").hide();
		//funzioneradar();
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
	  }
	  });	//----------------
	
	
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
	
	if(connectionStatus=='online'){

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
	


	var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
					
					
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


	   var centerControlDiv = document.createElement('div');
	   centerControlDiv.setAttribute('id', 'sopra');
	   var centerControl = new CenterControl(centerControlDiv, map);
	  
	   centerControlDiv.index = 1;
	   map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
	
		
	
	
	/*INSERT TAP PROLUNGATO*/
	
	google.maps.event.addListener(map, 'click', function(e) {
		placeMarker(e.latLng, map);
								  
		//alert(e.latLng);
								  
	});

	
	function placeMarker(position, map) {
		
		if(localStorage.getItem("tappato")=="0"){
		if (isTabHolded){
			var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
			marker4 = new google.maps.Marker({
											position: position,
											map: map,
											icon: icon,
											content:'<div class="popup">ORA</div>',
											optimized: false
											});
			
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



function richiesta1() {
	id = item1

	$("#risp1").show();
	$("#risp2").hide();
	$("#gps22").hide();
	$("#risp3").hide();
	$("#gps3").hide();
	
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  $("#nickblob").html("<font color='#cc33cc'>"+ item.nick +"</font>");
				  localStorage.setItem("id_nick", item.nick)
				  $("#nickhome3").html(item.nick);
				  
				  $("#quando").html("<b>Quando:</b><font color='#cc33cc'>"+ item.quando +", "+ item.ora +"</font>");
				  
				  $("#Da").html("<b>Da:</b><font color='#cc33cc'>"+ item.partenza +"</font>");
				  
				  $("#Ad").html("<b>Ad:</b><font color='#cc33cc'>"+ item.arrivo +"</font>");
				  
				  $("#Note").html("<b>Note:</b><font color='#cc33cc'>"+ item.distanza +"</font>");
				  
				  if(item.stato!=0){
				    //alert(id)
					$("#risp1").hide();
				  }
				  
				  if(item.stato==2){
				  //alert(item.stato)
				  $("#gps1").show();
				  
				  $(document).on("tap", "#gps1", function(e){
						//clearInterval(refreshIntervalId);
						
						//alert(item.lat+","+item.lng);
						
						var addressLongLat = item.lat+","+item.lng;
	
	//var refff = window.open("http://www.google.com/maps?q=220, Via Zoe Fontana, Roma", '_system');
	//"http://maps.google.com/maps?daddr=41.929622,12.608878&dirflg=r"
	window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
						
						$("#blob2").hide();
								 
						e.stopImmediatePropagation();
								 
						e.preventDefault();
								 
						return false;
								 
					});
				  
				  }
				  else{
					$("#gps1").hide();
				  }
				  
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
		   
		   $("#blob2").show();
		   
		   },
		   dataType:"jsonp"});
	
	
	$("#close1").show();
	$("#close2").hide();
	$("#close3").hide();
	
	$("#xchiudi1").show();
	$("#xchiudi2").hide();
	$("#xchiudi3").hide();
	
	
	$(document).on("tap", "#xchiudi1", function(e){
		
		$("#blob2").hide();
		magia(1,id)
		
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;

	});

	$(document).on("tap", "#close1", function(e){
		$("#pass1").hide();
				   
		$("#blob2").hide();
		cancella(id)
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;

	});
	
	$(document).on("tap", "#risp1", function(e){
				   
				   $("#blob2").hide();
				   $.mobile.changePage ($("#home3"));
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
	});
	
}

function richiesta2() {
	id = item2
	$("#risp1").hide();
	$("#gps1").hide();
	$("#risp2").show();
	$("#risp3").hide();
	$("#gps3").hide();
	
	//alert(2)
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  $("#nickblob").html("<font color='#cc33cc'>"+ item.nick +"</font>");
				  
				  $("#quando").html("<b>Quando:</b><font color='#cc33cc'>"+ item.quando +", "+ item.ora +"</font>");
				  
				  $("#Da").html("<b>Da:</b><font color='#cc33cc'>"+ item.partenza +"</font>");
				  
				  $("#Ad").html("<b>Ad:</b><font color='#cc33cc'>"+ item.arrivo +"</font>");
				  
				  $("#Note").html("<b>Note:</b><font color='#cc33cc'>"+ item.distanza +"</font>");
				  
				  if(item.stato!=0){
					$("#risp2").hide();
				  if(item.stato==2){
				  //alert(item.stato)
				  $("#gps22").show();
				  
				  $(document).on("tap", "#gps22", function(e){
								 //clearInterval(refreshIntervalId);
								 var addressLongLat = item.lat+","+item.lng;
	
	//var refff = window.open("http://www.google.com/maps?q=220, Via Zoe Fontana, Roma", '_system');
	//"http://maps.google.com/maps?daddr=41.929622,12.608878&dirflg=r"
	window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
	
								 $("#blob2").hide();
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
								 });
				  
				  }
				  }

				  
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
		   
		   $("#blob2").show();
		   
		   },
		   dataType:"jsonp"});
	
	$("#close2").show();
	$("#close1").hide();
	$("#close3").hide();
	
	$("#xchiudi2").show();
	$("#xchiudi1").hide();
	$("#xchiudi3").hide();
	
	
	
	$(document).on("tap", "#xchiudi2", function(e){
				   clearInterval(refreshIntervalId);
				   $("#blob2").hide();
				   magia(2,id)
				   
				   });

	$(document).on("tap", "#close2", function(e){
	$("#pass2").hide();
	$("#blob2").hide();
	cancella(id)
	
		
	e.stopImmediatePropagation();
		
	e.preventDefault();
		
	return false;
	});
	
	$(document).on("tap", "#risp2", function(e){
				   $("#blob2").hide();
				    $.mobile.changePage ($("#home3"));
				   
				   });
	
}

function richiesta3() {
	id = item3
	$("#risp3").show();
	$("#risp2").hide();
	$("#gps22").hide();
	$("#risp1").hide();
	$("#gps1").hide();
	
	//alert(2)
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  $("#nickblob").html("<font color='#cc33cc'>"+ item.nick +"</font>");
				  
				  $("#quando").html("<b>Quando:</b><font color='#cc33cc'>"+ item.quando +", "+ item.ora +"</font>");
				  
				  $("#Da").html("<b>Da:</b><font color='#cc33cc'>"+ item.partenza +"</font>");
				  
				  $("#Ad").html("<b>Ad:</b><font color='#cc33cc'>"+ item.arrivo +"</font>");
				  
				  $("#Note").html("<b>Note:</b><font color='#cc33cc'>"+ item.distanza +"</font>");
				  
				  if(item.stato!=0){
				    $("#risp3").hide();
				  }
				  
				  if(item.stato==2){
				  //alert(item.stato)
				  $("#gps3").show();
				  
				  $(document).on("tap", "#gps3", function(e){
								 //clearInterval(refreshIntervalId);
								 var addressLongLat = item.lat+","+item.lng;
	
	//var refff = window.open("http://www.google.com/maps?q=220, Via Zoe Fontana, Roma", '_system');
	//"http://maps.google.com/maps?daddr=41.929622,12.608878&dirflg=r"
	window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
	
								 $("#blob2").hide();
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
								 });
				  
				  }
				  else{
				  $("#gps2").hide();
				  }
				  
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
										);
		   
		   $("#blob2").show();*/
		   
		   },
		   dataType:"jsonp"});
	
	$("#close3").show();
	$("#close2").hide();
	$("#close1").hide();
	
	$("#xchiudi3").show();
	$("#xchiudi2").hide();
	$("#xchiudi1").hide();
	
	
	$(document).on("tap", "#xchiudi3", function(e){
				   clearInterval(refreshIntervalId);
				   $("#blob2").hide();
				   magia(3,id)

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





function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
						  }