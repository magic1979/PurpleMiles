document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	//document.addEventListener("resume", onResume, false);
	//$("body").bind('touchmove', function(e){e.preventDefault()})
	
	localStorage.setItem("pagina","log")
	
     document.addEventListener('backbutton', function(e) {
							   
		//if(localStorage.getItem("pagina")=="log"){
							   
	        navigator.notification.confirm(
	       'Vuoi chiudere purple miles?',  // message
	        onConfirm2,              // callback to invoke with index of button pressed
	       'Spegni',            // title
	       'Spegni,Annulla'      // buttonLabels
	        );
							   
		//}
							   
		//if(localStorage.getItem("pagina")=="imp"){
							   
		  //$("#conferma").tap();
							   
		//}
							   
	 }, false);
	
	
	StatusBar.hide();
	
	
	var IDPage;
	var db;
	var dbCreated = false;
	
	if(screen.width < 768){
		
		if(screen.height < 500){
			
			
		}
		else{
			
			
		}
		
	}
	else
	{
		$("#accedi").removeClass("custom-btn").addClass("custom-btnIPAD");
		$("#impostazioni").removeClass("custom-btn").addClass("custom-btnIPAD");
		$("#recuperopsw").removeClass("custom-btn").addClass("custom-btnIPAD");
		$("#regsito").removeClass("custom-btn").addClass("custom-btnIPAD");
		
		$("#legenda").removeClass("custom-btn").addClass("custom-btnIPAD2");
		$("#conferma").removeClass("custom-btn").addClass("custom-btnIPAD2");

	}

	
	if (localStorage.getItem("veicolo") === null || localStorage.getItem("veicolo")=="null" || typeof(localStorage.getItem("veicolo")) == 'undefined' || localStorage.getItem("veicolo")==0 || localStorage.getItem("veicolo")=="") {
		localStorage.setItem("veicolo", "Automobile")
	}

	
	if (localStorage.getItem("lingua") === null || localStorage.getItem("lingua")=="null" || typeof(localStorage.getItem("lingua")) == 'undefined' || localStorage.getItem("lingua")==0 || localStorage.getItem("lingua")=="") {
		localStorage.setItem("lingua", "it")
	}

	
	
	if(localStorage.getItem("lingua")=="it"){
	  document.getElementById("lingua").value = "it"
	}
	else if(localStorage.getItem("lingua")=="en"){
		document.getElementById("lingua").value = "en"
	}
	
    IDPage = getParameterByName('id');

	
    $('#fuso').on('change', function(){
        var $this = $(this),
        $value = $this.val();
		var conteggio = 0;
                   
        document.getElementById("fuso").value = $value;
				  var citta = "<option value=''>Scegli la Citta</option>";
				  
                  $(".spinner").show();
                  $.ajax({
                         type:"GET",
                         url:"http://purplemiles.com/www2/check_prendicittaV2.php?nazione="+$value+"",
                         contentType: "application/json",
                         timeout: 7000,
                         jsonp: 'callback',
                         crossDomain: true,
                         success:function(result){
                         
                         $.each(result, function(i,item){
								
							if (item.Token == 1){

                                  citta = "<option value='"+item.id+"'>"+ item.city +"</option>"
								
								  document.getElementById("citta").value = item.city;
								
								  $("#precitta").html("<b><font size='4'>Fuso Orario: <font color='#cc33cc'>" + item.city +"</font></b></font>");
								
								  prendicittaid(item.city)
								
							}
							if (item.Token == 2){
								document.getElementById("citta").value = "";
								
								$("#precitta").html("<b><font size='4'>Fuso Orario: <font color='#cc33cc'></font></b></font>");
								
								 citta = citta + "<option value='"+item.id+"'>"+ item.city +"</option>"

							}
                        });
						 
                         $(".spinner").hide();
						 

						 //window.location.href = "#page8";
						 
						 $("#citta").html(citta);
						 
						 $("#citta").selectmenu("refresh");
						 
						 
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
                  
    });
	
	
	$('#citta').on('change', function(){
				  var $this = $(this),
				  $value = $this.val();
				  
				  document.getElementById("citta").value = $value;
				   
				  $("#precitta").html("<b><font size='4'>Fuso Orario: <font color='#cc33cc'>" + $value+"</font></b></font>");
				   
			      prendicittaid($value)
				  
				  
		});
	
	function prendicittaid(id){
		
		var citta = "";
		

		$.ajax({
			   type:"GET",
			   url:"http://purplemiles.com/www2/check_prendicittaid.php?id="+ id +"",
			   contentType: "application/json",
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $.each(result, function(i,item){
					  
					  if (item.Token == 1){

					    $("#precitta").html("<b><font size='4'>Fuso Orario: <font color='#cc33cc'>" +item.city+"</font></b></font>");
					    localStorage.setItem("city", item.city);
					  
					  }
					  else{
					  
					  
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
											'Done'                  // buttonName
											);

			   
			   
			   },
			   dataType:"jsonp"});
		
	}
	
	
	$(document).on("tap", "#indietro8", function(e){
				   window.location.href = "#page6";
				   
				   var myScroll2;
				   
				   myScroll2 = new IScroll('#wrapper2', { click: true });
				   setTimeout (function(){
							   myScroll2.refresh();
							   }, 1000);
				   
				   document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
				   
				   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
				   
				   
				   
				   prendimezzi()
				   
				   prendinazione()
				   
				   //$("#fuso").html(nazione);
				   
				   //$("#fuso").selectmenu("refresh");
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
				   });
	
	
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
	
	$(document).on("tap", "#prova", function(e){
				   if(localStorage.getItem("pagina")=="log"){
				   
				   navigator.notification.confirm(
												  'Vuoi chiudere purple miles?',  // message
												  onConfirm2,              // callback to invoke with index of button pressed
												  'Spegni',            // title
												  'Spegni,Annulla'      // buttonLabels
												  );
				   
				   }
				   
				   if(localStorage.getItem("pagina")=="imp"){
				   
				   $("#conferma").tap();
				   
				   }

				   
		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	
	$(document).on("tap", "#conferma", function(e){
				   
		/*if (document.getElementById("citta").value === null || document.getElementById("citta").value=="null" || typeof(document.getElementById("citta").value) == 'undefined' || document.getElementById("citta").value==0 || document.getElementById("citta").value=="") {
			navigator.notification.alert(
												'inserire una citta per il fuso orario',  // message
												alertDismissed,         // callback
												'Citta',            // title
												'OK'                  // buttonName
												);
			return;
		}*/
				   
		localStorage.setItem("start","1")
		localStorage.setItem("pagina","log")
				   
		localStorage.setItem("lingua", document.getElementById("lingua").value);
		localStorage.setItem("fuso", document.getElementById("fuso").value);
        localStorage.setItem("citta", document.getElementById("citta").value);
		
		localStorage.setItem("veicolo", document.getElementById("veicolo").value);
				   
		
		if(IDPage==2){
		  window.location.href = "mappass.html";
		}
		else{
				   
		  window.location.href = "#page";
				   
		}
				   
		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   

		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("tap", "#impostazioni", function(e){
				   
				   if(localStorage.getItem("start")!=1){
				    localStorage.setItem("fuso", "Italy");
				    localStorage.setItem("citta", "154");
				   }

				   prendinazione()
				   
				   //else{
				    //prendinazione()
				   //}
				   
				   $.mobile.changePage( "#page6", { transition: "slide", changeHash: false });
				   
				   //window.location.href = "#page6";
				   localStorage.setItem("pagina","imp")
				   
				   var myScroll2;

				   myScroll2 = new IScroll('#wrapper2', { click: true });
				   setTimeout (function(){
					  myScroll2.refresh();
				   }, 1700);
				   
				   document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
				   
				   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
				   
				   
				   prendimezzi()
				   
				   prendicittaid(localStorage.getItem("citta"))
				   
				   //alert(localStorage.getItem("citta"))
				   
				   //$("#fuso").html(nazione);
				   
				   //$("#fuso").selectmenu("refresh");
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
    });
	
	$(document).on("tap", "#home", function(e){
				   
			if(IDPage==2){
			  window.location.href = "mappass.html";
			}
			else{
			  window.location.href = "#page";
				   
			  setTimeout (function(){
				myScroll.refresh();
			  }, 1000);
				   
			}

			e.stopImmediatePropagation();
				   
			e.preventDefault();
				   
			return false;
				   
			if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});

	
	$(document).on("touchend", "#accedi", function(e){
		//window.location.href = "index.html";
		login();
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
		
	});
	
	$(document).on("touchend", "#iscriviti", function(e){
				   //window.location.href = "index.html";
				   iscriviti();
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
				   });
	
	$(document).on("tap", "#recuperopsw", function(e){
   
				   
		  var ref = window.open('http://www.purplemiles.com/www/rec_pw.php?lang='+ localStorage.getItem("lingua") +'', '_system', 'location=no');

	   	  e.stopImmediatePropagation();
				   
		  e.preventDefault();
				   
		  return false;
				   
		  if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
		
	});
	
	$(document).on("tap", "#legenda", function(e){
				   
		var ref = window.open('http://www.purplemiles.com/www/legenda.php?lang='+ localStorage.getItem("lingua") +'', '_system', 'location=no');
				   
	});
	
	$(document).on("tap", "#regsito", function(e){
				   
		var ref = window.open('http://www.purplemiles.com/www/enter.php?lang='+ localStorage.getItem("lingua") +'', '_system', 'location=no');

		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).keydown(function (eventObj){
		getKey(eventObj);
	});
	
	
	if(IDPage==2){
		
		$("#impostazioni").tap();
		
	}
	

		document.addEventListener("showkeyboard", function(){ $("[data-role=footer]").hide();}, false);
		document.addEventListener("hidekeyboard", function(){ $("[data-role=footer]").show();}, false);
		
		// Workaround for buggy header/footer fixed position when virtual keyboard is on/off
		$('input, select')
		.on('focus', function (e) {
			$('header, footer').css('position', 'absolute');
			})
		.on('blur', function (e) {
			$('header, footer').css('position', 'fixed');
			//force page redraw to fix incorrectly positioned fixed elements
			//setTimeout( function() {
			//window.scrollTo( $.mobile.window.scrollLeft(), $.mobile.window.scrollTop() );
			//		   }, 20 );
			});
    
         setTimeout(function() {
           $(".spinner").hide();
         }, 3000);
	
	
		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
			//document.getElementById("email").value = "F10620"
			//document.getElementById("password").value = "ivQ0MQ4N"
			
			//prendifuso()
			
			//localStorage.setItem("fuso", "Italy");
			//localStorage.setItem("citta", "154");
			
			if(localStorage.getItem("sett_lingua")!="OK"){
			
			   agg();
				
			}
			
			
			prendicittaid(localStorage.getItem("citta"))
			
			
			if (localStorage.getItem("city") === null || localStorage.getItem("city")=="null" || typeof(localStorage.getItem("city")) == 'undefined' || localStorage.getItem("city")==0 || localStorage.getItem("city")=="") {

				//nazione = nazione + "<option value='Italy' selected>Italy</option>"
				$("#fuso").html("<option value='Italy' selected>Italy</option>");
				
				var citta = "<option value='154'>Rome</option>"
				$("#citta").html(citta);
				
				document.getElementById("citta").value = "Rome";
				
				$("#precitta").html("<font size='4'>Fuso Orario: <b><font color='#cc33cc'>Rome</font></b></font>");
				
				prendicittaid("Rome")
			}
			else{
			  $("#citta").html("<option value='"+localStorage.getItem("citta")+"'>"+ localStorage.getItem("city") +"</option>");
			}
			

            //$("#citta").selectmenu("refresh");
			


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
			
			$(".spinner").hide();
			
			document.getElementById("email").value = localStorage.getItem("email2")
		
			
			var watchID = navigator.geolocation.getCurrentPosition(gpsonSuccess, gpsonError, {timeout: 30000, enableHighAccuracy: true, maximumAge: 90000 });
			
		}
		else{
			
				navigator.notification.alert(
					'Nessuna connessione ad internet rilevata',  // message
					alertDismissed,         // callback
					'Attenzione',            // title
					'OK'                  // buttonName
                 );
		}
	

	
    }

function agg(){
	var db;
	
	db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
	
	
	db.transaction(function (tx) {
       tx.executeSql('CREATE TABLE IF NOT EXISTS Testi (id unique, id_traduzione, italiano, inglese)');
				   
		tx.executeSql('DELETE FROM Testi', [], function (tx, results) {
		}, null);
	
	});
	
	agg2()

}


function agg2(){
	db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);

	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_testi.php",
		   contentType: "application/json",
		   //data: {email:email,pin:pin},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				if (item.Token == 1){
				  
				  db.transaction(function (tx) {
					//alert(item.id)
								 
					//tx.executeSql('CREATE TABLE IF NOT EXISTS Testi (id unique, id_traduzione, italiano, inglese)');
					tx.executeSql('INSERT INTO Testi (id, id_traduzione, italiano, inglese) VALUES ('+ item.id +', "'+ item.id_traduzione +'", "'+ item.italiano +'", "'+ item.inglese +'")');
								 
					//alert("ok")
				  });
				  
				  //tx.executeSql('INSERT INTO Testi (id unique, id_traduzione, italiano, inglese, francese) VALUES ('+ item.id +', "'+ item.id_traduzione +'", "'+ item.italiano +'", "'+ item.inglese +'", "")');
				  
				}
				else{
				  navigator.notification.alert(
											   'Errore',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Ok'                  // buttonName@
											   );
				}
		  });
		   
		   setTimeout(function() {
					  
		   
		     $(".spinner").hide();
		     seleziona();
					  
		   }, 1000);
		   
		   
		   },
		   error: function(jqxhr,textStatus,errorThrown){
		   $(".spinner").hide();
		   
		   //alert(jqxhr);
		   //alert(textStatus);
		   //alert(errorThrown);
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});


}


function seleziona() {
	var db;
	db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
	
	localStorage.setItem("sett_lingua", "OK");
			
	//alert("6")
	
	db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Testi', [], function (tx, results) {
			var len = results.rows.length, i;
					 
			//alert(len);
					 
			for (i = 0; i < len; i++){
					 
			 //alert(results.rows.item(i).italiano);
					 
			}
					 
					 
		}, null);
	});
	
}



function prendimezzi(){
	var mezzi = "<option value='Autovettura' selected>Autovettura</option>"
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_prendimezzo.php",
		   contentType: "application/json",
		   //data: {email:email,pin:pin},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  //alert(item.Token);
				  
				  if (item.Token == 1){
				  
				  if(localStorage.getItem("veicolo")==item.veicolo){
				  
				    if(localStorage.getItem("veicolo")=="Autovettura"){
				       mezzi = mezzi + "<option value='"+item.veicolo+"' selected>Autovettura</option>"
				    }
					else{
				      mezzi = mezzi + "<option value='"+item.veicolo+"' selected>"+ item.veicolo +"</option>"
					}
				  
				  }
				  else{
				     mezzi = mezzi + "<option value='"+item.veicolo+"'>"+ item.veicolo +"</option>"
				  }
				  
				  
				    // if(localStorage.getItem("veicolo")==item.veicolo){
				       //mezzi = "";
				      // mezzi = mezzi + "<option value='"+item.veicolo+"' selected>"+ item.veicolo +"</option>"
					 //}
				     //else{
                        /*if (localStorage.getItem("veicolo") === null || localStorage.getItem("veicolo")=="null" || typeof(localStorage.getItem("veicolo")) == 'undefined' || localStorage.getItem("veicolo")==0 || localStorage.getItem("veicolo")=="") {
                           if(item.veicolo=="Autovettura"){
                               mezzi = mezzi + "<option value='"+item.veicolo+"' selected>"+ item.veicolo +"</option>"
                           }
                           else{
                              mezzi = mezzi + "<option value='"+item.veicolo+"'>"+ item.veicolo +"</option>"
                           }
                        }
                        else{*/
                            //mezzi = mezzi + "<option value='"+item.veicolo+"'>"+ item.veicolo +"</option>"
                       // }
                     //}
				         /*if(item.id_veicolo==6){
				            mezzi = mezzi + "<option value='"+item.id_veicolo+"' selected>"+ item.veicolo +"</option>"
				          }
				          else{
				            mezzi = mezzi + "<option value='"+item.id_veicolo+"'>"+ item.veicolo +"</option>"
				          }*/
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Errore di rete',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName@
											   );
				  }
			});
		   
		   $("#veicolo").html(mezzi);
		   
		   $("#veicolo").selectmenu("refresh");
		   
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

function prendinazione(){
	
	var nazione = "<option value='Italy' selected>Italy</option>";
    
    $(".spinner").show();
     $.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_prendinazione.php",
		   contentType: "application/json",
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				 
     
     if (item.Token == 1){
				  if(localStorage.getItem("fuso")==item.country){
					  nazione = nazione + "<option value='"+item.country+"' selected>"+ item.country +"</option>"
				  
				       //prendicittaid(localStorage.getItem("citta"))
				  
				       //var citta = "<option value='"+localStorage.getItem("citta")+"'>"+localStorage.getItem("city")+"</option>"
				       //$("#citta").html(citta);
				  
				  }
				  else{
				     nazione = nazione + "<option value='"+item.country+"'>"+ item.country +"</option>"
				  }
				  
		
       /*if(localStorage.getItem("fuso")==item.country){
			nazione = nazione + "<option value='"+item.country+"' selected>"+ item.country +"</option>"

				  
       }
       else{
          if (localStorage.getItem("fuso") === null || localStorage.getItem("fuso")=="null" || typeof(localStorage.getItem("fuso")) == 'undefined' || localStorage.getItem("fuso")==0 || localStorage.getItem("fuso")=="") {
                  if(item.country=="Italy"){
                    nazione = nazione + "<option value='Italy' selected>Italy</option>"
		            $("#fuso").html(nazione);
				  
				    var citta = "<option value='154'>Rome</option>"
				    $("#citta").html(citta);
				  
				    document.getElementById("citta").value = "Rome";
				  
				    $("#precitta").html("<font size='4'>Fuso Orario: <b><font color='#cc33cc'>Rome</font></b></font>");
				  
					prendicittaid("Rome")
				  
                  }
                  else{
                    nazione = nazione + "<option value='"+item.country+"'>"+ item.country +"</option>"
				  
                  }

           }
           else{
               nazione = nazione + "<option value='"+item.country+"'>"+ item.country +"</option>"

            }
       }*/
     }
     else{
     navigator.notification.alert(
     'Errore di rete',  // message
     alertDismissed,         // callback
     'Attenzione',            // title
     'Done'                  // buttonName@
     );
     }
     });
		   
     $(".spinner").hide();
     
     $("#fuso").html(nazione);
     
     $("#fuso").selectmenu("refresh");
			
	 
    //document.getElementById("citta").value = localStorage.getItem("citta");
		   
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




function getKey(key){
 if ( key == null ) {
 keycode = event.keyCode;
 
 } else {
 keycode = key.keyCode;
 }
 
 if (keycode ==13){
	 
   setTimeout(function() {
	 login();
   }, 200);
 
 }
 
 }


function verificawifi(){
	$("#verifica").click();
}


function onResume() {
	app.initialize();
}


function login() {
	
	var email2 = self.document.formia2.email.value;
	var pin2 = self.document.formia2.password.value;
	
	if (email2 == "") {
		navigator.notification.alert(
									 'inserire la email',  // message
									 alertDismissed,         // callback
									 'Email',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	
	if (pin2 == "") {
		navigator.notification.alert(
									 'inserire la Password',  // message
									 alertDismissed,         // callback
									 'Password',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	email2 = email2.replace(/\s/g, '')
	//email2 = email2.replace(" ","")
	
	EmailAddr = email2;
	Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
	if (Filtro.test(EmailAddr)) {
	 
		
	}
	else {
		navigator.notification.alert(
									 'Verificare la email',  // message
									 alertDismissed,         // callback
									 'Email',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	//var newpin = sha1(pin2);
	
	
	
	if (localStorage.getItem("fuso") === null || localStorage.getItem("fuso")=="null" || typeof(localStorage.getItem("fuso")) == 'undefined' || localStorage.getItem("fuso")==0 || localStorage.getItem("fuso")=="") {
		
		navigator.notification.alert(
				'Inserire nelle impostazioni un fuso orario',  // message
				 alertDismissed,         // callback
				'Attenzione',            // title
				'OK'                  // buttonName
		);

		return;
		
	}
	
	if (localStorage.getItem("citta") === null || localStorage.getItem("citta")=="null" || typeof(localStorage.getItem("citta")) == 'undefined' || localStorage.getItem("citta")==0 || localStorage.getItem("citta")=="") {
		
		navigator.notification.alert(
									 'Inserire nelle impostazioni un fuso orario',  // message
									 alertDismissed,         // callback
									 'Attenzione',            // title
									 'OK'                  // buttonName
									 );
		
		return;
		
	}
	
	if (localStorage.getItem("veicolo") === null || localStorage.getItem("veicolo")=="null" || typeof(localStorage.getItem("veicolo")) == 'undefined' || localStorage.getItem("veicolo")==0 || localStorage.getItem("veicolo")=="") {
		
		navigator.notification.alert(
			'Seleziona un veicolo di preferenza',  // message
			alertDismissed,         // callback
			'Email',            // title
			'OK'                  // buttonName
		);
		
		return;
		
	}
	

	LoginVera(email2,pin2);
	
}

function LoginVera(email,pin){
	//alert(email+pin);
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_accesso.php?email="+ email +"&pin="+ pin +"&lat="+ lat +"&lon="+ lng +"&veicolo="+ localStorage.getItem("veicolo") +"",
		   contentType: "application/json",
		   //data: {email:email,pin:pin},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				//alert(item.Token);
				  
				if (item.Token == 1){
				  localStorage.setItem("email", email);
				  localStorage.setItem("email2", email);
				  localStorage.setItem("emailpass", email);
				  localStorage.setItem("id_autista", item.id_autista);
				  localStorage.setItem("nick", item.nick);
				  localStorage.setItem("id_pass", item.id_passeggero);
				  localStorage.setItem("nickpass", item.nick);
				  
				  localStorage.setItem("stelleautista", item.voto_autista);
				  localStorage.setItem("stellepass", item.voto_passeggero);
				  localStorage.setItem("md5", item.md5);
				  localStorage.setItem("perc_autista", item.perc_aut);
				  localStorage.setItem("perc_pass", item.perc_pass);
				  localStorage.setItem("id_utente", item.id_utente);
				  localStorage.setItem("pin", pin);
				  
				  window.location.href = "index.html";
				  
				}
				else{
				navigator.notification.alert(
											   'Email e/o password non corretti',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Ok'                  // buttonName@
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
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
}


function iscriviti(){
	
	var emailreg = self.document.formia.emailreg.value;
	var pinreg = self.document.formia.pinreg.value;
	var nomereg = self.document.formia.nome.value;
	
	if (emailreg == "") {
		navigator.notification.alert(
									 'inserire Email',  // message
									 alertDismissed,         // callback
									 'Email',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	
	if (pinreg == "") {
		navigator.notification.alert(
									 'inserire un Pin',  // message
									 alertDismissed,         // callback
									 'Pin',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	if (nomereg == "") {
		navigator.notification.alert(
									 'inserire il Nome',  // message
									 alertDismissed,         // callback
									 'Nome',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	
	EmailAddr = self.document.formia.emailreg.value;
	Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
	if (Filtro.test(EmailAddr)) {
		
	}
	else {
		navigator.notification.alert(
									 'Verificare la email',  // message
									 alertDismissed,         // callback
									 'Email',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	
	
	//window.location.href = "TerminiTotal.html";

	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_registrazione.php?email="+ emailreg +"&password="+ pinreg +"&nickname="+ nomereg +"",
		   contentType: "application/json",
		   //data: {email:emailreg,nickname:nomereg,pin:pinreg},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  if (item.Token == '1'){
				  
				  navigator.notification.alert(
											   'Registrazione effettuata correttamente.',  // message
											    alertDismissed,         // callback
											   'Registrazione Eseguita',            // title
											   'Done'                  // buttonName
											   );
				  
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Cliente gia registrato',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName
											   );
				  
				  }
				  });
		   
		   $(".spinner").hide();
		   window.location.href = "#page";
		   
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



function alertDismissed() {
	
}


function gpsonSuccess(position){
	
	
	var ciao = position.coords.latitude;
	var ciao1 = position.coords.longitude;
	var gradi = position.coords.heading;
	
	localStorage.setItem("lat", ciao)
	localStorage.setItem("lng", ciao1)
	localStorage.setItem("gradi", gradi)
	
	localStorage.setItem("geostory", "SI")
	
	/*alert('Latitude: '          + position.coords.latitude          + '\n' +
	 'Longitude: '         + position.coords.longitude         + '\n' +
	 'Altitude: '          + position.coords.altitude          + '\n' +
	 'Accuracy: '          + position.coords.accuracy          + '\n' +
	 'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
	 'Heading: '           + position.coords.heading           + '\n' +
	 'Speed: '             + position.coords.speed             + '\n' +
	 'Timestamp: '         + position.timestamp                + '\n');*/
	
	
	//$("#distanza").html("<span style = 'font-size: 18px;'>"+ position.coords.speed +","+ position.coords.heading  +"</span>");
	
	
}


function gpsonError(){
	
	var lat = "41.889191";
	var lng = "12.492475";
	
	localStorage.setItem("lat", lat)
	localStorage.setItem("lng", lng)
	
	navigator.notification.alert(
								 'Possibile errore GPS, assicurati di avere il gps del telefono attivato.',  // message
								 alertDismissed,         // callback
								 'Attenzione',           // title
								 'Ok'                  // buttonName
								 );
	
}




function EmailDimenticata() {
	navigator.notification.prompt(
								  'Inserisci il tuo indirizzo email',  // message
								  onPrompt,                  // callback to invoke
								  'Recupera la Password',            // title
								  ['Invia','Annulla'],             // buttonLabels
								  ''                 // defaultText
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
		
		//Recupera la Password
		//alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
		
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://www.gtechplay.com/mycollection/www2/Check_RecPassword.asp",
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

function gomappa(){
	var addressLongLat = '41.862321,12.692804';
	
	window.open("http://maps.apple.com/?q="+addressLongLat, '_blank');
	//window.location.href = "http://maps.apple.com/?q="+addressLongLat
	
	//var ref = window.open('http://maps.apple.com/?q=Via di Acilia, 7', '_system');
	
}

function onConfirm2(button) {
	if(button==1){    //If User selected No, then we just do nothing

		
		for(i=0; i<10000; i++)
		{
			window.clearInterval(i);
		}
		
		for(i=0; i<3; i++)
		{
			navigator.app.exitApp();
		}
		
		//navigator.app.exitApp();
		
		navigator.device.exitApp();
		
		
		e.stopImmediatePropagation();
		
		e.preventDefault();
		
		return;
	}
	
}


function sha1(str) {
	//  discuss at: http://phpjs.org/functions/sha1/
	// original by: Webtoolkit.info (http://www.webtoolkit.info/)
	// improved by: Michael White (http://getsprink.com)
	// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	//    input by: Brett Zamir (http://brett-zamir.me)
	//   example 1: sha1('Kevin van Zonneveld');
	//   returns 1: '54916d2e62f65b3afa6e192e6a601cdbe5cb5897'
	
	var rotate_left = function(n, s) {
		var t4 = (n << s) | (n >>> (32 - s));
		return t4;
	};
	
	/*var lsb_hex = function (val) {
	 // Not in use; needed?
	 var str="";
	 var i;
	 var vh;
	 var vl;
	 for ( i=0; i<=6; i+=2 ) {
	 vh = (val>>>(i*4+4))&0x0f;
	 vl = (val>>>(i*4))&0x0f;
	 str += vh.toString(16) + vl.toString(16);
	 }
	 return str;
  };*/
	
	var cvt_hex = function(val) {
		var str = '';
		var i;
		var v;
		
		for (i = 7; i >= 0; i--) {
			v = (val >>> (i * 4)) & 0x0f;
			str += v.toString(16);
		}
		return str;
	};
	
	var blockstart;
	var i, j;
	var W = new Array(80);
	var H0 = 0x67452301;
	var H1 = 0xEFCDAB89;
	var H2 = 0x98BADCFE;
	var H3 = 0x10325476;
	var H4 = 0xC3D2E1F0;
	var A, B, C, D, E;
	var temp;
	
	// utf8_encode
	str = unescape(encodeURIComponent(str));
	var str_len = str.length;
	
	var word_array = [];
	for (i = 0; i < str_len - 3; i += 4) {
		j = str.charCodeAt(i) << 24 | str.charCodeAt(i + 1) << 16 | str.charCodeAt(i + 2) << 8 | str.charCodeAt(i + 3);
		word_array.push(j);
	}
	
	switch (str_len % 4) {
  case 0:
			i = 0x080000000;
			break;
  case 1:
			i = str.charCodeAt(str_len - 1) << 24 | 0x0800000;
			break;
  case 2:
			i = str.charCodeAt(str_len - 2) << 24 | str.charCodeAt(str_len - 1) << 16 | 0x08000;
			break;
  case 3:
			i = str.charCodeAt(str_len - 3) << 24 | str.charCodeAt(str_len - 2) << 16 | str.charCodeAt(str_len - 1) <<
			8 | 0x80;
			break;
	}
	
	word_array.push(i);
	
	while ((word_array.length % 16) != 14) {
		word_array.push(0);
	}
	
	word_array.push(str_len >>> 29);
	word_array.push((str_len << 3) & 0x0ffffffff);
	
	for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
		for (i = 0; i < 16; i++) {
			W[i] = word_array[blockstart + i];
		}
		for (i = 16; i <= 79; i++) {
			W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
		}
		
		A = H0;
		B = H1;
		C = H2;
		D = H3;
		E = H4;
		
		for (i = 0; i <= 19; i++) {
			temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}
		
		for (i = 20; i <= 39; i++) {
			temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}
		
		for (i = 40; i <= 59; i++) {
			temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}
		
		for (i = 60; i <= 79; i++) {
			temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}
		
		H0 = (H0 + A) & 0x0ffffffff;
		H1 = (H1 + B) & 0x0ffffffff;
		H2 = (H2 + C) & 0x0ffffffff;
		H3 = (H3 + D) & 0x0ffffffff;
		H4 = (H4 + E) & 0x0ffffffff;
	}
	
	temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
	return temp.toLowerCase();
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
						  }

