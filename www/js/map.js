document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("resume", onResume, false);
	
	IDPage = getParameterByName('id');
	
	//var markers = [];
	var map;
    
    $('body').on('touchmove', function (e) {
        e.preventDefault();
     });
    
    $('#footer').show();
    $(".spinner").show();
    var connectionStatus = false;
    connectionStatus = navigator.onLine ? 'online' : 'offline';
    
    if(connectionStatus=='online'){
        $('#noconn').hide();
		
        var geostory = localStorage.getItem("geostory");
        
    if (geostory == 'NO'){
        //var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 50000 });
		navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
        
        function onSuccess(position) {
            var ciao = position.coords.latitude;
            var ciao1 = position.coords.longitude;
            
            localStorage.setItem("lat", ciao)
            localStorage.setItem("lng", ciao1)
            
            localStorage.setItem("geostory", "SI")
        }
        
        
        function onError(error) {
            //var watchID = navigator.geolocation.watchPosition(onSuccess, onError1, { timeout: 80000 });
			navigator.geolocation.getCurrentPosition(onSuccess, onError1, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
        }
        
        function onError1(error) {
            localStorage.setItem("geostory", "NO")
            
            navigator.notification.alert(
               'Non riesco a rilevare la tua posizione',  // message
                alertDismissed,         // callback
                'Attenzione',            // title
                'OK'                  // buttonName
               );
        
            $(".spinner").hide();
        }
    }
    else{
        var latitudine = localStorage.getItem("lat");
        var longitudine = localStorage.getItem("lng");
        
        localStorage.setItem("geostory", "SI")
        
        codeLatLng(latitudine,longitudine);
        $(".spinner").hide();
    }
		
								//41.783780, 12.364947
		
								  var lat = localStorage.getItem("lat");  //  "41.783780"  "41.783780"
								  var lng = localStorage.getItem("lng"); //  "12.364947"  "12.364947"

								  
								  var destIcon = new google.maps.MarkerImage("img/pin.png", null, null, null, new google.maps.Size(28,40));
								  var figpIcon = new google.maps.MarkerImage("img/pin.png", null, null, null, new google.maps.Size(28,40));
								  var casinoIcon = new google.maps.MarkerImage("img/pin.png", null, null, null, new google.maps.Size(28,40));

									  var beaches = [];
									  var posizione = 1;
									  var distanza = "";
                                              
                                      beaches.push(['Tua Posizione',lat,lng,1])
                                              
								  $.ajax({
										 type:"GET",
										 url:"http://www.pokeranswer.it/www/Check_Room.asp",
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
										 dataType:"jsonp"});
        
                                              var shape = {
                                              coord: [1, 1, 1, 20, 18, 20, 18 , 1],
                                              type: 'poly'
                                              };
                                              
                                              var img = new google.maps.MarkerImage("img/car.png", null, null, null, new google.maps.Size(26,50));
		
                                              var latlng = new google.maps.LatLng (lat, lng);
                                              var options = {
                                              zoom : 14,
                                              center : latlng,
                                              mapTypeId : google.maps.MapTypeId.ROADMAP
                                              
                                              };
        
                                              $("#btn").bind ("click", function (event)
                                                              {
                                                              var $content = $("#win2 div:jqmData(role=content)");
                                                              $content.height (getRealContentHeight());
                                                              
                                                              $(".spinner").show();
                                                              
                                                              var options = {
                                                              zoom : 14,
                                                              center : latlng,
                                                              mapTypeId : google.maps.MapTypeId.ROADMAP,
															  scrollwheel	: false,
															  zoomControl: true
															  //navigationControl	: false,
															  //mapTypeControl	: false,
															  //scaleControl	: false,
															  //draggable	: false
                                                              
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
															  
                                                              //'<small><b>Lat.</b> 52.520196, <b>Lon.</b> 13.406067</small></p>'+
                                                              //'<a target="_blank" href="http://www.marchettidesign.net">'+
                                                              //'Visit Web Site &#187;</a> '+
															  
															  '</div>';
                                                              
                                                              var infowindow = new google.maps.InfoWindow({
                                                                  content: contentString1,
                                                                  maxWidth: 200,
                                                                  maxHeight: 150,
                                                              });
															  
                                                              for (var i = 0; i < beaches.length; i++) {
                                                              
                                                              var beach = beaches[i];
                                                              
                                                              var myLatLng = new google.maps.LatLng(beach[1], beach[2], beach[3]);
                                                              
                                                              if (i==0) {
                                                              icon = img;  
																  ido = new google.maps.Marker ({
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
                                                              }
															  				  
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
															  
															  /*var infowindow = new google.maps.InfoWindow({
																content: beach[5]
															  });
															  infowindow.open(map, marker);*/
																  

                                                              google.maps.event.addListener(marker, 'click', function() {
																							
                                                                 infowindow.setContent(this.content);
                                                                 infowindow.open(map, this);
																
																/*var lati = this.getPosition().lat();
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
																
																
																flightPath.setMap(map);*/
                                                              });

                                                              }
															  
															  //DIV IN ALTO 41.873729, 12.478138  41.783692, 12.364979
															  var centerControlDiv = document.createElement('div');
															  centerControlDiv.setAttribute('id', 'sopra');
															  var centerControl = new CenterControl(centerControlDiv, map);
															  
															  centerControlDiv.index = 1;
															  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
															  
                                                              $(".spinner").hide();
                                                              
                                                              });
        
    $("#gps2").bind ("click", function (event){
        window.location.href = "Finder.html";
    });
    
}
    
    else{
        $('#noconn').show();
        
        
        var tabella = '<table align="center" border="0" width="310px" height="60px" class="conn">';
        tabella = tabella + '<tr><td align="center" width="50px"><img src="images/wire.png" width="32px"></td><td align="left"><font color="white" size="2">Nessuna connessione attiva</font></td><td><a href="javascript:verificawifi()"><div width="40px" class="home"></div></a></td></tr>';
        tabella = tabella + '</table>';
        
        $('#noconn').html(tabella);
        
        $("#verifica").bind ("click", function (event)
                             {
                             var connectionStatus = false;
                             connectionStatus = navigator.onLine ? 'online' : 'offline';
                             
                             if(connectionStatus=='online'){
                             onDeviceReady();
                             }
                             else{
                             navigator.notification.alert(
                                                          'Nessuna connessione ad internet rilevata',  // message
                                                          alertDismissed,         // callback
                                                          'Attenzione',            // title
                                                          'OK'                  // buttonName
                                                          );
                             }
                             
                             
                             });

        
        $("#mappa5").attr("href", "");
        $("#gps5").attr("href", "");
        
        $(".spinner").hide();
        
    }
	
	var myTimer = setInterval(resetta, 15000);
	
	
	if(IDPage==1){
		$("#btn").click();
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
	controlUI.style.height = '100px';
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
	controlText.innerHTML = '<br><b><a href="javascript:nodiv()">CHIUDI</a></b><br><input type="text" value="'+ localStorage.getItem("Via") +'">';
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
                     
                        var tabella = '<table align="center" border="0" width="310px" height="60px">';
                        tabella = tabella + '<tr><td align="center" width="50px"><a href="maps:daddr=41.913010,12.442009&saddr=41.875094,12.478151"><img src="images/pin.png" width="32px"></a></td><td align="left"><font color="white" size="2">'+ results[1].formatted_address +'</font></td></tr>';
                        tabella = tabella + '</table>';
                     
                        var viadotto = results[1].formatted_address;
                     
                        localStorage.setItem("Via", viadotto)
                     
                        $('#classifica').html('');
                        $(".spinner").hide();
                        //funzioneradar();
                     
                     } else {
                     navigator.notification.alert(
                       'Non riesco a rilevare la tua posizione',  // message
                        alertDismissed,         // callback
                        'Attenzione',            // title
                        'OK'                  // buttonName
                     );
                        $(".spinner").hide();
                        //funzioneradar();
                     }
                     } else {
                     navigator.notification.alert(
                       'Non riesco a rilevare la tua posizione',  // message
                         alertDismissed,         // callback
                         'Attenzione',            // title
                         'OK'                  // buttonName
                     );
                     
                        $(".spinner").hide();
                        //funzioneradar();
                     }
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
	
	setTimeout(function() {
	   localStorage.setItem("geostory", "NO")
	   resetta();
	}, 0);
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

function resetta() {
	//$("#btn").click();
	//marker.setMap(null);
	ido.setVisible(false);
	
	//var watchID = navigator.geolocation.watchPosition(onSuccess2, onError2, { timeout: 50000 });
	navigator.geolocation.getCurrentPosition(onSuccess2, onError2, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
        
        function onSuccess2(position) {
            var ciao = position.coords.latitude;
            var ciao1 = position.coords.longitude;
            
            localStorage.setItem("lat", ciao)
            localStorage.setItem("lng", ciao1)
            
            localStorage.setItem("geostory", "SI")
			
			var latlng = new google.maps.LatLng(ciao, ciao1);
		
		    setTimeout(function() {
				ido.setPosition(latlng);
				ido.setVisible(true);
			}, 300);
        }
        
        
        function onError2(error) {
            //var watchID = navigator.geolocation.watchPosition(onSuccess2, onError3, { timeout: 80000 });
			navigator.geolocation.watchPosition(onSuccess2, onError3, {timeout: 50000, enableHighAccuracy: false, maximumAge: 0 });
        }
        
        function onError3(error) {
            localStorage.setItem("geostory", "NO")
            
            navigator.notification.alert(
               'Non riesco a rilevare la tua posizione',  // message
                alertDismissed,         // callback
                'Attenzione',            // title
                'OK'                  // buttonName
               );
        	
			ido.setVisible(true);
        }
															  
	 //}
	
	//alert(markers.lenght)
	
	//alert()
	
	/*var lat = "41.783780"//localStorage.getItem("lat");  "41.783780"
	var lng = "12.364947"//localStorage.getItem("lng");  "12.364947"
	
	
	var destIcon = new google.maps.MarkerImage("images/pin.png", null, null, null, new google.maps.Size(28,40));
	var figpIcon = new google.maps.MarkerImage("images/pin_figp.png", null, null, null, new google.maps.Size(36,32));
	var casinoIcon = new google.maps.MarkerImage("images/casino.png", null, null, null, new google.maps.Size(60,48));
	
	var beaches = [];
	var posizione = 1;
	var distanza = "";
	
	beaches.push(['Tua Position',lat,lng,1])
	
	$.ajax({
		   type:"GET",
		   url:"http://www.pokeranswer.it/www/Check_Room.asp",
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
										'Possibile errore di rete22, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
	
	var shape = {
	coord: [1, 1, 1, 20, 18, 20, 18 , 1],
	type: 'poly'
	};
	
	var img = new google.maps.MarkerImage("images/gps.png", null, null, null, new google.maps.Size(22,22));
	
	
	var latlng = new google.maps.LatLng (lat, lng);
	var options = {
		zoom : 10,
		center : latlng,
		mapTypeId : google.maps.MapTypeId.ROADMAP
		
	};
	
					var $content = $("#win2 div:jqmData(role=content)");
					$content.height (getRealContentHeight());
	
					
					var options = {
					zoom : 10,
					center : latlng,
					mapTypeId : google.maps.MapTypeId.ROADMAP,
					scrollwheel	: false,
					zoomControl: true
					
					};
					var map = new google.maps.Map($content[0], options);
	
	
					for (var i = 0; i < beaches.length; i++) {
						
					
					var beach = beaches[i];
						
					
					var myLatLng = new google.maps.LatLng(beach[1], beach[2], beach[3]);
					
					
					if (i==0) {
					icon = img;
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
					}
					
					marker = new google.maps.Marker (
													 
													 {
													 map : map,
													 icon: icon,
													 animation : google.maps.Animation.DROP,
													 position : myLatLng,
													 content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="javascript:chiama('+ beach[5] +')">Cliccami</a></div>',
													 shape: shape,
													 title: beach[0],
													 //label: ''+ beach[1] +','+ beach[2] +'',
													 zIndex: beach[3]
													 });
					
					
					var infowindow = new google.maps.InfoWindow({
					 content: beach[5]
					 });
					 infowindow.open(map, marker);
					
					
					google.maps.event.addListener(marker, 'click', function() {
												  
												  infowindow.setContent(this.content);
												  infowindow.open(map, this);
												  
					});
					
						//alert(beach[1])
					
					}*/
	
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
						  }