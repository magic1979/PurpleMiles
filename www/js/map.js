document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("resume", onResume, false);
	

	var email = localStorage.getItem("email");
	
	
	if (localStorage.getItem("email") === null || localStorage.getItem("email")=="null" || typeof(localStorage.getItem("email")) == 'undefined' || localStorage.getItem("email")==0 || localStorage.getItem("email")=="") {
		
		window.location.href = "Login.html";
		
	}
	
	localStorage.setItem("palla1", "0")
	localStorage.setItem("palla2", "0")
	localStorage.setItem("exit", "0")
	
	//alert(localStorage.getItem("id_autista"))
	
	var last_click_time = new Date().getTime();
	
	document.addEventListener("tap", function (e) {
							  
							  var click_time = e['timeStamp'];
							  
							  if (click_time && (click_time - last_click_time) < 1000) { e.stopImmediatePropagation();
							  
							  e.preventDefault();
							  
							  return false;
							  
							  }
							  
							  last_click_time = click_time;
							  
							  }, true);
	
	isTabHolded=false;
	
	IDPage = getParameterByName('id');
	ODPage = getParameterByName('od');
	
	//var markers = [];
	var map;
	var refreshIntervalId;
	var refreshIntervalId33;
	var prefi2000;
	
	
	$(document).on("tap", "#inizia", function(e){
		start();
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
    
	$(document).on("tap", "#resetta", function(e){
		window.location.href = "index.html";
	});
	
	$(document).on("tap", "#mappa6", function(e){
		resetta1();
	});
	
	$(document).on("tap", "#XX", function(e){
		window.location.href = "index.html";
	});
	
	$(document).on("tap", "#XXX", function(e){
		window.location.href = "index.html";
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#XX3", function(e){
		window.location.href = "map.html";
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#back3", function(e){
		inviopasseggero(3);
		//window.location.href = "#win2";
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#xchiudi", function(e){
		chiudix();
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
		
	$(document).on("tap", "#gratis", function(e){
		inviopasseggero(1);

	});
	
	$(document).on("tap", "#offerta", function(e){
		inviopasseggero(2);
	});
	
	
	//$(document).on("touchend", "#XXX", function(e){
				  // window.location.href = "index.html";
	//});
    
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
        
        //codeLatLng(latitudine,longitudine);
        $(".spinner").hide();
    }
		
		
								  var lat = localStorage.getItem("lat");
								  var lng = localStorage.getItem("lng");
		
		
								  //var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
								  //var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
		
								  localStorage.setItem("lat", lat)
								  localStorage.setItem("lng", lng)
		


								 /* var destIcon = new google.maps.MarkerImage("img/pin.png", null, null, null, new google.maps.Size(28,40));
								  var figpIcon = new google.maps.MarkerImage("img/pin.png", null, null, null, new google.maps.Size(28,40));
								  var casinoIcon = new google.maps.MarkerImage("img/pin.png", null, null, null, new google.maps.Size(28,40));

									  var beaches = [];
									  var posizione = 1;
									  var distanza = "";
                                              
                                      beaches.push(['Tua Posizione',lat,lng,1])*/
                                              
								  /*$.ajax({
										 type:"GET",
										 url:"http://www.pokeranswer.it/www2/Check_Room.asp",
										 contentType: "application/json",
										 data: {ID: "Lazio"},
										 timeout: 7000,
										 jsonp: 'callback',
										 crossDomain: true,
										 success:function(result){
										 
										 $.each(result, function(i,item){
												
											posizione = (posizione+1);
											
											distanza = getDistance(lat,lng,item.lat,item.lng).toFixed(1);
											
											beaches.push(["<h2>"+item.Room+"</h2><br>"+item.Indirizzo,item.lat,item.lng,posizione,item.figp,distanza])

										  });
										 
										 for (var i = 0; i < beaches.length; i++) {
											var beach = beaches[i];
										 }
										 
										 //$("#btn").click();
										 
										 },
										 error: function(){
										 
										 navigator.notification.alert(
										 'Possibile errore di rete, riprova tra qualche minuto.',  // message
										  alertDismissed,         // callback
										  'Attenzione',           // title
										  'Done'                  // buttonName
										  );
										 
										 },
										 dataType:"jsonp"});*/
        
                                              /*var shape = {
                                              coord: [1, 1, 1, 20, 18, 20, 18 , 1],
                                              type: 'poly'
                                              };
                                              
                                              var img = new google.maps.MarkerImage("img/car.png", null, null, null, new google.maps.Size(26,50));
		
                                              var latlng = new google.maps.LatLng (lat, lng);
                                              var options = {
                                              zoom : 13,
                                              center : latlng,
                                              mapTypeId : google.maps.MapTypeId.ROADMAP
                                              
                                              };*/
        
                                              $("#btn").bind ("click", function (event)
                                                              {
                                                              /*var $content = $("#win2 div:jqmData(role=content)");
                                                              $content.height (getRealContentHeight());
                                                              
                                                              $(".spinner").show();
                                                              
                                                              var options = {
                                                              zoom : 16,
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
															  
                                                              for (var i = 0; i < beaches.length; i++) {
                                                              
                                                              var beach = beaches[i];
                                                              
                                                              var myLatLng = new google.maps.LatLng(beach[1], beach[2], beach[3]);*/
                                                              
                                                              /*if (i==0) {
                                                              	icon = img;  
																  marker = new google.maps.Marker ({
																   map : map,
																   icon: icon,
																   optimized: false,
																   animation : google.maps.Animation.DROP,
																   position : myLatLng,
																   content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="javascript:chiama('+ beach[5] +')">Cliccami</a></div>',
																   shape: shape,
																   title: beach[0],
																   //label: ''+ beach[1] +','+ beach[2] +'',
																   zIndex: beach[3]
																   });

															  }
                                                              else {
																  if (beach[4]==1){
																	icon = figpIcon;
																  }
																  else if (beach[4]==2){
																	  icon = casinoIcon;
																   }
																   else{
																		icon = destIcon;
																	}
                                                              }*/
															  				  
															  /*marker = new google.maps.Marker ({
															   map : map,
															   icon: icon,
															   optimized: false,
															   animation : google.maps.Animation.DROP,
															   position : myLatLng,
															   content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="javascript:chiama('+ beach[5] +')">Cliccami</a></div>',
															   shape: shape,
															   title: beach[0],
															   //label: ''+ beach[1] +','+ beach[2] +'',
															   zIndex: beach[3]
															   });
															   
															   google.maps.event.addListener(marker, 'click', function() {
																							
																   infowindow.setContent(this.content);
																   infowindow.open(map, this);
																
        														});*/
															  
															  /*var infowindow = new google.maps.InfoWindow({
																content: beach[5]
															  });
															  infowindow.open(map, marker);*/
																  
                                                               /*google.maps.event.addListener(marker, 'click', function() {
																							
                                                                 infowindow.setContent(this.content);
                                                                 infowindow.open(map, this);
																
																var lati = this.getPosition().lat();
																var lngi = this.getPosition().lng();
													
																var flightPlanCoordinates = [
																	 {lat: localStorage.getItem("lat"), lng: localStorage.getItem("lng")},
																	 {lat: parseFloat(lati), lng: parseFloat(lngi)}
																	 ];
																var flightPath = new google.maps.Polyline({
																	  path: flightPlanCoordinates,
																	  geodesic: true,
																	  strokeColor: '#FF0000',
																	  strokeOpacity: 1.0,
																	  strokeWeight: 2
																	  });
																
																
																flightPath.setMap(map);
                                                              });*/
														  
															   /*google.maps.event.addListener(map, 'center_changed', function() {
															
																setTimeout(function() {
																	//map.panTo();
																}, 300);
																
															  });*/

                                                              }
															                                                    
}
    
    else{
		
		navigator.notification.alert(
			'Possibile errore di rete, riprova tra qualche minuto.',  // message
			alertDismissed,         // callback
			'Attenzione',           // title
			'Done'                  // buttonName
		);
									
		window.location.href = "index.html";
		
        $('#noconn').show();

        $(".spinner").hide();

    }
	  
	
	if(IDPage==1){
		window.location.href = "#win2";
		resetta1(1);
	}
}

function chiama(km) {
	alert(km)
}

function CenterControl(controlDiv, map) {
	
	// Set CSS for the control border.
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = 'transparent';
	controlUI.style.border = '1px solid #fff';
	controlUI.style.borderRadius = '3px';
	controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
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
	controlText.innerHTML = '<br><table width="100%"><tr><td align="right"><a id="XXX" href="index.html" rel="external"><img src="img/xx.png" width="25px"></a></td></tr></table><input id="viale" name="viale" type="text" value="'+ localStorage.getItem("Via") +'">';
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

function gps() {
    $("#gps2").click();
}

function verificawifi(){
    $("#verifica").click();
}

function onResume() {
	
	setTimeout(function() {
	   //localStorage.setItem("geostory", "NO")
	   //clearInterval(refreshIntervalId);
	   //window.location.reload(true);
	   resetta1(1);
	}, 200);
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
	
	var connectionStatus = false;
    connectionStatus = navigator.onLine ? 'online' : 'offline';
    
    if(connectionStatus=='online'){
	
	//window.plugins.insomnia.keepAwake();
	
	//PRESS TO MARKER
	$(function(){
   $(document).bind( "taphold", tapholdHandler );
	  //$( "div.box" ).bind( "taphold", tapholdHandler );
	  
	  
	  function tapholdHandler( event ){
	  $( event.target ).addClass( "taphold" );
	  isTabHolded=true;
	  }
	  });	//----------------
	

	//var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
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
	  }, 300);

	
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
	
	var beaches = [];
	var markers = [];//some array
	var posizione = 1;
	var distanza = "";
	var numero = "";
	
	beaches.push(['Tua Posizione',lat,lng,1,0,0])
	
	//alert("http://purplemiles.com/www2/check_richiesta_autista.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"");
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autista.php?email="+ localStorage.getItem("email") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  distanza = getDistance(lat,lng,item.lat,item.lng).toFixed(1);
				  
				  beaches.push(["<h2>"+item.nick+"</h2><br>"+item.partenza,item.lat,item.lng,posizione,item.rating,item.distanza,item.id_pass])
				  
				  
				if(posizione==1){
				  
				  if(item.stato==1){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass2");
				  }
				}
				  
				if(posizione==2){
				  
				  if(item.stato==1){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass2");
				  }
				}
				  if(posizione==3){
				  
				  if(item.stato==1){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass2");
				  }
				  }

				posizione = (posizione+1);
				  
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
	
	
		 setTimeout(function() {
					for (var i = 0; i < beaches.length; i++) {
					var beach = beaches[i];
					
					numero = beaches.length;
					
					var myLatLng = new google.maps.LatLng(beach[1], beach[2], beach[3]);
					
					
					if(i==0){
						 var icon = new google.maps.MarkerImage("img/autista.png", null, null, null, new google.maps.Size(30,50));
						 //alert(myLatLng + beach[0])
					
						marker2 = new google.maps.Marker ({
													 map : map,
													 icon: icon,
													 optimized: false,
													 position : myLatLng,
													 content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="javascript:chiama('+ beach[5] +')">Cliccami</a></div>',
													 title: beach[0],
													 //label: ''+ beach[1] +','+ beach[2] +'',
													 zIndex: beach[3]
													 });
					
					google.maps.event.addListener(marker2, 'click', function() {
												  
												  infowindow.setContent(this.content);
												  infowindow.open(map, this);
												  
												  });


					}
					
			if(focus==1){
					if(i==1){
						 var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
					
						 //alert(myLatLng + beach[0] + beach[5])
						 marker1 = new google.maps.Marker ({
													 map : map,
													 icon: icon,
													 optimized: false,
													 position : myLatLng,
													 content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="#home3">Cliccami</a></div>',
													 title: beach[0],
													 //label: ''+ beach[1] +','+ beach[2] +'',
													 zIndex: beach[3]
													 });
					
					
						//markers.push(marker)
					
						 google.maps.event.addListener(marker1, 'click', function() {
												  
							infowindow.setContent(this.content);
							infowindow.open(map, this);
													  
						});
					
					}
					if(i==2){
						 var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
						 //alert(myLatLng + beach[0] + beach[5])
						 marker3 = new google.maps.Marker ({
													 map : map,
													 icon: icon,
													 optimized: false,
													 position : myLatLng,
													 content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="#home3">Cliccami</a></div>',
													 title: beach[0],
													 //label: ''+ beach[1] +','+ beach[2] +'',
													 zIndex: beach[3]
													 });
					
					
						 //markers.push(marker)
					
						 google.maps.event.addListener(marker3, 'click', function() {
												  
												  infowindow.setContent(this.content);
												  infowindow.open(map, this);
												  
												  });

					}
					
					if(i==3){
					var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
					//alert(myLatLng + beach[0] + beach[5])
					marker4 = new google.maps.Marker ({
													  map : map,
													  icon: icon,
													  optimized: false,
													  position : myLatLng,
													  content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="#home3">Cliccami</a></div>',
													  title: beach[0],
													  //label: ''+ beach[1] +','+ beach[2] +'',
													  zIndex: beach[3]
													  });
					
					
					//markers.push(marker)
					
					google.maps.event.addListener(marker4, 'click', function() {
												  
												  infowindow.setContent(this.content);
												  infowindow.open(map, this);
												  
												  });
					
					}

			  }
					
					

					}
					
					
		 }, 1000);
	
	
		//$("#blob1").attr("href", "javascript:alert()");

	   var centerControlDiv = document.createElement('div');
	   centerControlDiv.setAttribute('id', 'sopra');
	   var centerControl = new CenterControl(centerControlDiv, map);
	  
	   centerControlDiv.index = 1;
	   map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
	   
	if(focus==1){
		$("#btninizia").hide();
		
		refreshIntervalId = setInterval(function() {
			var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
										
					var lat = localStorage.getItem("lat");
					var lng = localStorage.getItem("lng");
										
					//var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
					//var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
					
					var beaches1 = [];
					var posizione = 1;
					var distanza = "";

					beaches1.push(['Tua Posizione',lat,lng,1,0,0,0])
					
					var centromap = new google.maps.LatLng(lat, lng, posizione);
					
					$.ajax({
						   type:"GET",
						   url:"http://purplemiles.com/www2/check_richiesta_autista.php?email="+ localStorage.getItem("email") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"",
						   contentType: "application/json",
						   //data: {ID: "Lazio"}, LIMIT 10
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
								   $("#esci").hide();
								  
								   //resetta1(1);
								  
								   // ??
								   marker1.setMap(null);
								  
								  var isVisible3 = marker3.getVisible();
								  if(isVisible3){
								   marker3.setMap(null);
								  }
								  
								  
								  var isVisible4 = marker4.getVisible();
								  if(isVisible4){
								    marker4.setMap(null);
								  }

								   // GO in resetta1
								  }
								  else
								  {
								    $("#esci").show();
								  }
								  
								  if(item.Token==1){
									
								    var myLatLng = new google.maps.LatLng(item.lat, item.lng, posizione);
								  
									distanza = getDistance(lat,lng,item.lat,item.lng).toFixed(1);
								  
									beaches1.push(["<h2>"+item.nick+"</h2><br>"+item.partenza,item.lat,item.lng,posizione,item.rating,item.distanza,item.id_richiesta])
								  

								  if(posizione==1){
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
								  
								  
								  
								   $(document).on("tap", "#ric1", function(e){
												 
									magia(1,item.id_richiesta);
									e.stopImmediatePropagation();
												 
									e.preventDefault();
												 
									return false;
											  
									});
								  

								  $("#pass1").show();
								  $("#pass2").hide();
								  $("#pass3").hide();
								  
								  if(item.stato==3){
								    $("#pass1").hide();
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
				                     $("#pass1").removeClass("custom-pass").addClass("custom-pass2");
									 $("#pass1").removeClass("custom-pass1").addClass("custom-pass2");
								     $("#pass1").removeClass("custom-pass3").addClass("custom-pass2");
								  }

								  
								  $(document).on("tap", "#pass1", function(e){
												 //window.location.href = "#index3";

											
													//localStorage.setItem("geostory", "NO")
													clearInterval(refreshIntervalId);
															
													richiesta1(item.id_richiesta);

												 });

								  }
								  
								  if(posizione==2){
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
								  $("#pass2").hide();
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
								  $("#pass2").removeClass("custom-pass").addClass("custom-pass2");
									 $("#pass2").removeClass("custom-pass1").addClass("custom-pass2");
								  $("#pass2").removeClass("custom-pass3").addClass("custom-pass2");
								  }
								  

								  
								  
								    $(document).on("tap", "#pass2", function(e){
												 //window.location.href = "#index3";

												//localStorage.setItem("geostory", "NO")
											    clearInterval(refreshIntervalId);
															  
												richiesta2(item.id_richiesta);


												 });
								  
								  }
								  
								  if(posizione==3){
								  var icon3 = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
								  
								  marker4.setMap(null);
								  
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
								  $("#pass3").hide();
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
								  $("#pass3").removeClass("custom-pass").addClass("custom-pass2");
									 $("#pass3").removeClass("custom-pass1").addClass("custom-pass2");
								  $("#pass3").removeClass("custom-pass3").addClass("custom-pass2");
								  }


								  
								  $(document).on("tap", "#pass3", function(e){
										//window.location.href = "#index3";

															//localStorage.setItem("geostory", "NO")
															clearInterval(refreshIntervalId);
															
															richiesta3(item.id_richiesta);

									});
								  
								  }
								  
								  posizione = (posizione+1);
								  
								  }
								  
						   });
						   
  
						   },
						   error: function(){
						   
						  
						   
						   },
						   dataType:"jsonp"});
					
					setTimeout(function() {
							   
							   for (var k = 0; k < beaches1.length; k++) {
							   var beach = beaches1[k];
							   
							   var myLatLng = new google.maps.LatLng(beach[1], beach[2], beach[3]);
							   
							   if(k==0){
							   var icon = new google.maps.MarkerImage("img/autista.png", null, null, null, new google.maps.Size(30,50));
							   var icon2 = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
							   //alert(myLatLng + beach[0])
								marker2.setPosition(myLatLng);
							   
							     //alert(beaches1.length + "--" + beach[6])
								//marker2.setIcon(icon2);

							   }
							   else{
							   
								var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
							   }
							   
							   
								//se leggo=0
								if((k==1) && (localStorage.getItem("palla1")!=1)){
								  
							    //if(localStorage.getItem("ODPage")=="0"){
								  palla1()
							    //}
							   
							      /*$(document).on("tap", "#pass1", function(e){
											//window.location.href = "#index3";
											  
											richiesta(beach[6]);
									});
							   
							   
								  $(document).on("tap", "#ric1", function(e){

									magia(k,beach[6]);
											  
									});*/
							   
								}
							   
							   
							   if(k==2){
							   
								
							   
							   }

								//se leggo=0
								//if(k==2 && localStorage.getItem("palla2")!=1){
									//palla2()
								//}
							   
								//$("#pass"+k+"").attr("href", "javascript:magia("+ k +","+ beach[6] +")");

								
							   }
							   
							   codeLatLng(lat,lng);
							   map.setCenter(centromap);
										
							   
							   //alert(3);
					}, 1000);
			/*
			 var lat = parseFloat("41.777525");
			var lng = parseFloat("12.364673" );
					
				var latlng = new google.maps.LatLng(lat, lng);
					
				marker2.setPosition(latlng);
				map.setCenter(latlng);
					
				localStorage.setItem("lat", lat)
				localStorage.setItem("lng", lng)*/
					
			//navigator.geolocation.getCurrentPosition(onSuccess2, onError2, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
		}, 10000);
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
            var ciao = position.coords.latitude;
            var ciao1 = position.coords.longitude;
			
			//alert(ciao)
			//var latlng = new google.maps.LatLng(ciao, ciao1);
			
			//marker.setPosition(latlng);
			//map.setCenter(latlng);
			
			localStorage.setItem("lat", ciao)
            localStorage.setItem("lng", ciao1)
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
    
    else{
		
		navigator.notification.alert(
			'Possibile errore di rete, riprova tra qualche minuto.',  // message
			alertDismissed,         // callback
			'Attenzione',           // title
			'Done'                  // buttonName
		);
									
		window.location.href = "index.html";
		
        $('#noconn').show();

        $(".spinner").hide();

    }
		
}

function magia(utente,pass) {
	// marker[pass].setVisible(false);
	// devo prendere ID pass e far vedere solo lui nella mappa
	clearInterval(refreshIntervalId);
	
	chiudi22(utente);
	
	/*var infowindow = new google.maps.InfoWindow({
												content: contentString1,
												maxWidth: 200,
												maxHeight: 150,
												});*/

	//refreshIntervalId33 = setInterval(function() {
									  
			//alert("magia");
	
			var lat = localStorage.getItem("lat");
			var lng = localStorage.getItem("lng");
	
	        //var lat = parseFloat("41.8337871");
	        //var lng = parseFloat("12.4757278" );
	
				var beaches = [];
				var posizione = 1;
				var distanza = "";
				
				beaches.push(['Tua Posizione',lat,lng,1,0,0,0])
				
				$.ajax({
					   type:"GET",
					   url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ pass +"&id_autista="+ localStorage.getItem("id_autista") +"",
					   contentType: "application/json",
					   //data: {ID: "Lazio"}, LIMIT 10
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $.each(result, function(i,item){
							  
							  if(item.Token==1){
							  
							  
							  distanza = getDistance(lat,lng,item.lat,item.lng).toFixed(1);
							  
							  beaches.push(["<h2>"+item.nick+"</h2><br>"+item.partenza,item.lat,item.lng,posizione,item.rating,item.distanza,item.id_richiesta])
							  
							  posizione = (posizione+1);
							  
							  }
							  else{
								//marker1.setMap(null);
							  }
							  
						});
					   
					   clearInterval(refreshIntervalId);
					   
					   magia2C(utente,pass);
					   
					   
					   
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
				
				setTimeout(function() {
						   for (var i = 0; i < beaches.length; i++) {
						   var beach = beaches[i];
						   
						   
						   var myLatLng = new google.maps.LatLng(beach[1], beach[2], beach[3]);
						   
						   if(i==0){
						   var icon = new google.maps.MarkerImage("img/autista.png", null, null, null, new google.maps.Size(30,50));
						   
						   marker2.setPosition(myLatLng);
						   

						   }
						   else{
							//cambiare icona
						     var icon2 = new google.maps.MarkerImage("img/pin.png", null, null, null, new google.maps.Size(30,40));
						   
							
							 if(utente==1){
							   //marker1.set('content', '<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a id="marke1" href="#">RISPONDI</a></div>');
							    //marker1.setMap(null);
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
						   
						        /*marker1 = new google.maps.Marker ({
															 map : map,
															 icon: icon2,
															 optimized: false,
															 position : myLatLng,
															 content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="#home3">RICHIESTA</a></div>',
															 title: beach[0],
															 //label: ''+ beach[1] +','+ beach[2] +'',
															 zIndex: beach[3]
															 });*/
						   

							 }
						   
							if(utente==2){
							  //marker1.set('content', '<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a id="marke1" href="#">RISPONDI</a></div>');
						      marker1.setVisible(false);
						   
						      marker3.setVisible(true);
						      marker3.setIcon(icon2);
						   
							 
						    }
						   
						   if(utente==3){
							  //marker1.set('content', '<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a id="marke1" href="#">RISPONDI</a></div>');
							 marker1.setVisible(false);
							 marker3.setVisible(false);
						   
							 marker4.setVisible(true);
							 marker4.setIcon(icon2);

						   
						   }


						   }
						   

						   }
						   
						   codeLatLng(lat,lng);
						   map.setCenter(myLatLng);
						   
						   $("#XXX").attr("href", "index.html");
						   
						   
						   //clearInterval(refreshIntervalId);
						   
						   //richiesta(pass);
						   
						   
					}, 1000);
									  
		//}, 10000);
	//alert(pass)
}


function magia2C(utente,pass) {
clearInterval(refreshIntervalId);
	

refreshIntervalId33 = setInterval(function() {
								  
	var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
										
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
								  
	var beaches = [];
	var posizione = 1;
	var distanza = "";
								  
	beaches.push(['Tua Posizione',lat,lng,1,0,0,0])
	
	var centromap = new google.maps.LatLng(lat, lng, posizione);
								  
								  $.ajax({
										 type:"GET",
										 url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ pass +"&id_autista="+ localStorage.getItem("id_autista") +"",
										 contentType: "application/json",
										 //data: {ID: "Lazio"}, LIMIT 10
										 timeout: 7000,
										 jsonp: 'callback',
										 crossDomain: true,
										 success:function(result){
										 
										 $.each(result, function(i,item){
												
												if(item.Token==1){
												
												
												distanza = getDistance(lat,lng,item.lat,item.lng).toFixed(1);
												
												beaches.push(["<h2>"+item.nick+"</h2><br>"+item.partenza,item.lat,item.lng,posizione,item.rating,item.distanza,item.id_richiesta])
												
												alert(utente + item.stato)
												
											if(utente==1){
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
										 
										 navigator.notification.alert(
																	  'Possibile errore di rete, riprova tra qualche minuto.',  // message
																	  alertDismissed,         // callback
																	  'Attenzione',           // title
																	  'Done'                  // buttonName
																	  );
										 
										 },
										 dataType:"jsonp"});

	
	//var lat = localStorage.getItem("lat");
	//var lng = localStorage.getItem("lng");
	
	//var lat = parseFloat("41.8337871");
	//var lng = parseFloat("12.4757278" );

	map.setCenter(centromap);
	

	/*var posizione = 1;

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
				  
				  
				  beaches.push(["<h2>"+item.nick+"</h2><br>"+item.partenza,item.lat,item.lng,posizione,item.rating,item.distanza,item.stato])
				  
				  posizione = (posizione+1);
				  
				  if(utente==1){
				  
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
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass3");
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass3");
				  }
				  
				  
				  }
				  
				  if(utente==2){
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
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass3");
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass3");
				  }
				  
				  
				  }
				  
				  if(utente==3){
				  
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
				  $("#pass33").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass2");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass2");
				  }
				  if(item.stato==3){
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass3");
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass3");
				  }
				  
				  }

			}
				  else{

				  }
				  
			});
		   
		   
		   },
		   error: function(){
		   
		   
		   },
		   dataType:"jsonp"});
								  setTimeout(function() {
											 for (var i = 0; i < beaches.length; i++) {
											   var beach = beaches[i];
											 
											   var myLatLng = new google.maps.LatLng(beach[1], beach[2], beach[3]);


											 }
											 
											 

											 map.setCenter(centromap);
											 
											 }, 1000);*/
	
	
}, 10000);
	
	$(document).on("tap", "#esci", function(e){
				   //$("#btninizia").show();
				   //$("#esci").hide();
				   
				   localStorage.setItem("palla1", "1")
				   localStorage.setItem("palla2", "0")
				   localStorage.setItem("exit", "1")
				   
				   clearInterval(refreshIntervalId33);
				   
				   //setTimeout(function() {
				   //localStorage.setItem("geostory", "NO")
				   //clearInterval(refreshIntervalId33);
						 //window.location.href = "map.html?id=1";
				   //onResume();
				   //}, 200);
				   
				   //window.location.href = "#win2";
				   resetta1(1);
	});
	
	
	//---------------------------
	
	
	function onSuccess2(position) {
		var ciao = position.coords.latitude;
		var ciao1 = position.coords.longitude;
		
		//alert(ciao)
		//var latlng = new google.maps.LatLng(ciao, ciao1);
		
		//marker.setPosition(latlng);
		//map.setCenter(latlng);
		
		localStorage.setItem("lat", ciao)
		localStorage.setItem("lng", ciao1)
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
			   // window.location.href = "map.html?id=1";
			
			   $("#pass1").hide();
			   $("#pass2").hide();
			   $("#pass3").hide();
			   $("#esci").hide();

			
			    $("#btninizia").show();
			
					//localStorage.setItem("geostory", "NO")
				     //clearInterval(refreshIntervalId33);
					//window.location.href = "map.html?id=1&od=1";
					onResume();

			    //resetta1();
			    //setTimeout(function() {
					   //localStorage.setItem("geostory", "NO")
					   //clearInterval(refreshIntervalId33);
					   //window.location.href = "map.html?id=1&od=0";
					   //start();
					   //onResume();
				//}, 200);
			
			    //e.stopImmediatePropagation();
			
			    //e.preventDefault();
			
			    //return false;
			
			    //clearInterval(refreshIntervalId33);
				//resetta1(1);
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
	window.location.href = "map.html";
	
	// + interval
	/*var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	
	var beaches = [];
	var posizione = 1;
	var distanza = "";
	
	beaches.push(['Tua Posizione',lat,lng,1,0,0])
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autista.php?email=salvatore.bruni@gmail.com&lat=41.777525&lng=12.364673",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  posizione = (posizione+1);
				  
				  distanza = getDistance(lat,lng,item.lat,item.lng).toFixed(1);
				  
				  beaches.push(["<h2>"+item.nick+"</h2><br>"+item.partenza,item.lat,item.lng,posizione,item.rating,item.distanza])
				  
				  
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
	
	setTimeout(function() {
			   for (var i = 0; i < beaches.length; i++) {
			   var beach = beaches[i];
			   
			   
			   var myLatLng = new google.maps.LatLng(beach[1], beach[2], beach[3]);
			   
			   if(i==0){
			   var icon = new google.maps.MarkerImage("img/autista.png", null, null, null, new google.maps.Size(30,50));
			   //alert(myLatLng + beach[0])
			   marker2.setPosition(myLatLng);
			   

			   }
			   else{
			   var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
			   }
			   
			   //se leggo=0
			   if(i==1 && localStorage.getItem("palla1")!=1){
			   palla1()
			   }
			   

				marker1.setVisible(true);

				marker.setVisible(true);

			   
			   
			   $("#pass"+i+"").attr("href", "javascript:magia("+ i +")");
			   $("#ric"+i+"").attr("href", "javascript:magia("+ i +")");
			   
			   }
			   
			   codeLatLng(lat,lng);
			   map.setCenter(myLatLng);
			   
			   
		}, 1000);*/
}

function start() {
	//chiamo e setto a 1 lo stato dell'autista (ok lavoro)
	
	$("#btninizia").hide();
	
	resetta1(1);
	
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

function richiesta1(id) {

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
		clearInterval(refreshIntervalId);
		magia(1,id)
		$("#blob2").hide();
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;

	});

	$(document).on("tap", "#close1", function(e){
		$("#pass1").hide();
				   
		//localStorage.setItem("palla1", "0")
		cancella(id)
		$("#blob2").hide();
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;

	});
	
	$(document).on("tap", "#risp1", function(e){
				   $("#blob2").hide();
				   window.location.href = "#home3";
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
	});
	
}

function richiesta2(id) {
	
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
				   magia(2,id)
				   $("#blob2").hide();
				   
				   });

	$(document).on("tap", "#close2", function(e){
	$("#pass2").hide();
	cancella(id)
	$("#blob2").hide();
		
	e.stopImmediatePropagation();
		
	e.preventDefault();
		
	return false;
	});
	
	$(document).on("tap", "#risp2", function(e){
				   $("#blob2").hide();
				   window.location.href = "#home3";
				   
				   });
	
}

function richiesta3(id) {
	
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
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   $("#blob2").show();
		   
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
				   magia(3,id)
				   $("#blob2").hide();

				   });
	
	$(document).on("tap", "#close3", function(e){
				   $("#pass3").hide();
				   cancella(id)
				   $("#blob2").hide();
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;

				   });
	
	$(document).on("tap", "#risp3", function(e){
				   $("#blob2").hide();
				   window.location.href = "#home3";

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
					
					//window.location.reload(true);
					onResume();
				  
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
										'Possibile errore di rete2, riprova tra qualche minuto.',  // message
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