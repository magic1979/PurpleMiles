document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("resume", onResume, false);
	
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
    
    
    $('#fuso1').on('change', function(){
                  var $this = $(this),
                  $value = $this.val();
                  
                  document.getElementById("fuso1").value = $value;
                  
                  //$("#stamp2").html($value)
                  //alert($value)
                  
                  var citta = "";
                  
                  $(".spinner").show();
                  $.ajax({
                         type:"GET",
                         url:"http://purplemiles.com/www2/check_prendicitta.php?nazione="+$value+"",
                         contentType: "application/json",
                         timeout: 7000,
                         jsonp: 'callback',
                         crossDomain: true,
                         success:function(result){
                         
                         $.each(result, function(i,item){
                                
                                
                                if (item.Token == 1){
                                
                                  citta = citta + "<option value='"+item.id+"'>"+ item.city +"</option>"
                                
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
                         
                         $("#citta1").html(citta);
                         
                         $("#citta1").selectmenu("refresh");
                         
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
	
	$("#tblhome").fadeIn("slow")
	
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
	
	$(document).on("tap", "#back6", function(e){
				   $("#spinner6").show();
				   
				   inviachat()
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
				   });
	
	$(document).on("tap", "#indietro6", function(e){
				   $("#tblchat").hide()
				   $.mobile.changePage( "#home4", { transition: "slide", changeHash: false, reverse: true });
				   
				   for(i=0; i<10000; i++)
				   {
				   window.clearInterval(i);
				   }
				   
				   vediofferte()
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
				   });
	
	$(document).on("touchstart", "#da", function(e){
		localStorage.setItem("destination", "0")
				   
		$("#viale").show();
		$("#destinazione").hide();
				   
		$("#da1").html("<img src='img/ico_start1.png' width='35px'>");
		$("#a1").html("<img src='img/ico_finish2.png' width='35px'>");
		
		//$("#da").html("bottoni");
		//$("#da").removeClass("bottoni").addClass("bottoni1");
		//$("#a").removeClass("bottoni1").addClass("bottoni");
				   
		onResume();
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#da1", function(e){
				   localStorage.setItem("destination", "0")
				   
				   $("#viale").show();
				   $("#destinazione").hide();
				   
				   $("#s_arrivo").hide();
				   $("#s_partenza").show();
				  
				   
				   $("#da1").html("<img src='img/ico_start2.png' width='35px'>");
				   $("#a1").html("<img src='img/ico_finish1.png' width='35px'>");
				   
				   //$("#da1").removeClass("bottoni").addClass("bottoni1");
				   //$("#a1").removeClass("bottoni1").addClass("bottoni");
				   setTimeout(function() {
				     $("#ricarica").tap();
				   },2000);
				   //resetta1(1);
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   });
	
	$(document).on("tap", "#adesso", function(e){
				   localStorage.setItem("destination", "0")
				   
				   $("#viale").show();
				   $("#destinazione").hide();
				   
				   //$("#da").removeClass("bottoni").addClass("bottoni1");
				   //$("#a").removeClass("bottoni1").addClass("bottoni");
				   
	               onResume();
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart", "#quando", function(e){
		for(i=0; i<10000; i++)
		{
			window.clearInterval(i);
		}
				   
		$("#piu").html("<img src='img/ico_plus1.png' width='35px'>");
		$("#anteprima").html("<img src='img/ico_anteprima1.png' width='35px'>");
				   
		localStorage.setItem("viale", document.getElementById("viale").value);
		localStorage.setItem("destinazione", document.getElementById("destinazione").value);
				   
				   
        //localStorage.setItem("fuso", document.getElementById("fuso").value);
        //localStorage.setItem("citta", document.getElementById("citta").value);
				   
         $("#fuso2").html(localStorage.getItem("fuso"));
				   
		 $("#citta2").html(localStorage.getItem("citta"));
				   
		prendicittaid(localStorage.getItem("citta"))
        //prendinazione()
				   
		window.location.href = "#home";
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#annulla", function(e){
		$.mobile.changePage ($("#home"));
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#indietro4", function(e){
				   
		$("#piu").html("<img src='img/ico_plus1.png' width='35px'>");
	    $("#anteprima").html("<img src='img/ico_anteprima1.png' width='35px'>");
				   
		$.mobile.changePage ($("#home"));
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#offerte", function(e){
	    $.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
		//$.mobile.changePage ($("#home4"));
		$("#spinner4").show();
		vediofferte()
		//alert("in costruzione")
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	
	$(document).on("touchstart", "#piu", function(e){
				   $("#piu").html("<img src='img/ico_plus2.png' width='35px'>");
				   $("#anteprima").html("<img src='img/ico_anteprima1.png' width='35px'>");
				   
				   //localStorage.setItem("citta", document.getElementById("citta1").value);
				   
				   //$("#fuso2").html(localStorage.getItem("fuso"));
				   //$("#citta2").html(localStorage.getItem("citta"));
				   
				   
				   $("#back3").hide();
				   
				   
				   localStorage.setItem("viale", document.getElementById("viale").value);
				   localStorage.setItem("destinazione", document.getElementById("destinazione").value);
				   
				   localStorage.setItem("datacal", document.getElementById("datacal").value);
				   localStorage.setItem("orario", document.getElementById("Orario").value);
				   localStorage.setItem("minuti", document.getElementById("Minuti").value);
				   
				   
				   
				   if(document.getElementById("datacal").value==""){
				     document.getElementById("datacal3").value = "ORA";
				   }
				   else{
				   document.getElementById("datacal3").value = document.getElementById("datacal").value;
				   document.getElementById("orario3").value = document.getElementById("Orario").value;
				   document.getElementById("minuti3").value = document.getElementById("Minuti").value;
				   }
				   
				   
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
				   
				   
				   if(document.getElementById("datacal").value==""){
				     // $("#posticipata").html(" <b><font color='#cc33cc'>Quando: </font></b> Adesso <br>" );
				   }
				   else{
					 // $("#posticipata").html(" <b><font color='#cc33cc'>Quando:</font></b> " + document.getElementById("datacal3").value + "<br> <b><font color='#cc33cc'>Ora:</font></b>" + document.getElementById("orario3").value + " " + document.getElementById("minuti3").value + "<br>");
				   }
				   
				   
				   $.mobile.changePage ($("#home3"));
				   
				    //$("#offerte").tap();
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
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
				   
				   $("#s_partenza").hide();
				   $("#s_arrivo").show();
				   
				   $("#da1").html("<img src='img/ico_start1.png' width='35px'>");
				   $("#a1").html("<img src='img/ico_finish2.png' width='35px'>");
				   
				   setTimeout(function() {
				     $("#ricarica").tap();
					},2000);
				   //resetta1(1);
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
		});
	
	
	$(document).on("touchstart", "#ad", function(e){
				   
				   localStorage.setItem("destination", "1");
				   
				   $("#viale").hide();
				   $("#destinazione").show();
				   

				   
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
		$("#spinner7").show();
				   
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
				   
				   var indirizzo = document.getElementById("viale7").value.replace("'", "")
				   var destinazione = document.getElementById("destinazione7").value.replace("'", "")
				   var passeggeri = document.getElementById("passeggeri").value.replace("'", "")
				   var animali = document.getElementById("animali").value.replace("'", "")
				   var fumatori = document.getElementById("fumatori").value.replace("'", "")
				   var meno18 = document.getElementById("meno18").value.replace("'", "")
				   var disabili = document.getElementById("disabili").value.replace("'", "")
				   var bambini = document.getElementById("bambini").value.replace("'", "")
				   var wifi = document.getElementById("wifi").value.replace("'", "")
				   var portapacchi = document.getElementById("portapacchi").value.replace("'", "")
				   var rimorchio = document.getElementById("rimorchio").value.replace("'", "")
				   var bluetooth = document.getElementById("bluetooth").value.replace("'", "")
				   var note = document.getElementById("notepass").value.replace("'", "")
				   
		
		if(document.getElementById("datacal7").value == "ORA"){
				   
		//alert(document.getElementById("viale3").value.replace("'", ""))
				   
				   
		//alert("http://purplemiles.com/www2/check_richiesta5.php?email="+ localStorage.getItem("emailpass") +"&indirizzo="+ indirizzo +"&indirizzo2="+ destinazione +"&passeggeri="+ passeggeri +"&animali="+ animali +"&fumatori="+ fumatori +"&meno18="+ meno18 +"&disabili="+ disabili +"&bambini="+ bambini +"&wifi="+ wifi +"&portapacchi="+ portapacchi +"&rimorchio="+ rimorchio +"&bluetooth="+ bluetooth +"&fuso="+ localStorage.getItem("citta") +"&ora_cell="+ localStorage.getItem("ora_cell") +"")
		

		$.ajax({
			   type:"GET",
			   url:"http://purplemiles.com/www2/check_richiesta5.php?email="+ localStorage.getItem("emailpass") +"&indirizzo="+ indirizzo +"&indirizzo2="+ destinazione +"&passeggeri="+ passeggeri +"&animali="+ animali +"&fumatori="+ fumatori +"&meno18="+ meno18 +"&disabili="+ disabili +"&bambini="+ bambini +"&wifi="+ wifi +"&portapacchi="+ portapacchi +"&rimorchio="+ rimorchio +"&bluetooth="+ bluetooth +"&fuso="+ localStorage.getItem("citta") +"&ora_cell="+ localStorage.getItem("ora_cell") +"&note="+ note +"",
			   contentType: "application/json",
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $.each(result, function(i,item){
					  
				  if(item.Token==1){
					  $("#spinner7").hide();
					  
					  navigator.notification.alert(
					   'Richiesta Inviata',
					   alertDismissed,
					   'OK',
					   'Done'
					   );
					  
					  //$("#btnofferte").show();
					  //$.mobile.changePage( "#home", { transition: "slide", changeHash: false });
				   
					   $.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
					   $("#spinner4").show();
					   vediofferte()
					  
					  e.stopImmediatePropagation();
				   
				      e.preventDefault();
				   
				      return false;
				   
				      if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				  }
					  
				});
			   
			   
			   },
			   error: function(){
			   
			   navigator.notification.alert(
				'Possibile errore di rete, riprova tra qualche minuto.',
				alertDismissed,
				'Attenzione',
				'Done'
				);
				
				onResume();
			   
			   },
			   dataType:"jsonp"});
			}
			else{
				   //alert("http://purplemiles.com/www2/check_richiesta_pos.php?email="+ localStorage.getItem("emailpass") +"&indirizzo="+ document.getElementById("viale3").value +"&indirizzo2="+ document.getElementById("destinazione3").value +"&data="+ document.getElementById("datacal3").value +"&ora="+ document.getElementById("orario3").value +"&minuti="+ document.getElementById("minuti3").value +"")
				   
				   //alert(document.getElementById("datacal3").value)
				   
				   
				   $.ajax({
						  type:"GET",
						  url:"http://purplemiles.com/www2/check_richiesta_pos.php?email="+ localStorage.getItem("emailpass") +"&indirizzo="+ document.getElementById("viale7").value +"&indirizzo2="+ document.getElementById("destinazione7").value +"&data="+ document.getElementById("datacal7").value +"&ora="+ document.getElementById("Orario").value +"&minuti="+ document.getElementById("Minuti").value +"&passeggeri="+ passeggeri +"&animali="+ animali +"&fumatori="+ fumatori +"&meno18="+ meno18 +"&disabili="+ disabili +"&bambini="+ bambini +"&wifi="+ wifi +"&portapacchi="+ portapacchi +"&rimorchio="+ rimorchio +"&bluetooth="+ bluetooth +"&fuso="+ localStorage.getItem("citta") +"&ora_cell="+ localStorage.getItem("ora_cell") +"&note="+ note +"",
						  contentType: "application/json",
						  timeout: 7000,
						  jsonp: 'callback',
						  crossDomain: true,
						  success:function(result){
						  
						  $.each(result, function(i,item){
								 
								 if(item.Token==1){
								 $("#spinner7").hide();
									 
								 navigator.notification.alert(
															  'Richiesta Inviata',
															  alertDismissed,
															  'OK',
															  'Done'
															  );
								 
								 //$("#btnofferte").show();
								 
								 $.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
								 $("#spinner4").show();
								 vediofferte()
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
								 if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
								 }
								 
								 });
						  
						  
						  },
						  error: function(){
						  
						  navigator.notification.alert(
													   'Possibile errore di rete, riprova tra qualche minuto.',
													   alertDismissed,
													   'Attenzione',
													   'Done'
													   );
						  
						  onResume();
						  
						  },
						  dataType:"jsonp"});
				   
			}
		
	});
	
	
	
	$(document).on("touchstart", "#inviarichiesta", function(e){
				   
				   if (document.getElementById("datacal").value == "") {
				    navigator.notification.alert(
							'inserire una data valida',  // message
							alertDismissed,         // callback
							'Data',            // title
							'OK'                  // buttonName
					);
				   return;
				   }
				   
				   if (document.getElementById("Orario").value == "--") {
				   navigator.notification.alert(
												'inserire un orario valido',  // message
												alertDismissed,         // callback
												'Data',            // title
												'OK'                  // buttonName
												);
				   return;
				   }
				   
				   if (document.getElementById("Minuti").value == "--") {
				   navigator.notification.alert(
												'inserire un orario valido',  // message
												alertDismissed,         // callback
												'Data',            // title
												'OK'                  // buttonName
												);
				   return;
				   }
				   
				   localStorage.setItem("destination", "0")
				   
				   $("#viale").show();
				   $("#destinazione").hide();
				   
				   $("#piu").html("<img src='img/ico_plus1.png' width='35px'>");
				   
				   onResume();
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});


	
	$(document).on("touchstart", "#anteprima", function(e){
				   
		$("#piu").html("<img src='img/ico_plus1.png' width='35px'>");
		$("#anteprima").html("<img src='img/ico_anteprima2.png' width='35px'>");
				   
	    //localStorage.setItem("citta", document.getElementById("citta").value);
				   
		//$("#fuso2").html(localStorage.getItem("fuso"));
	    //$("#citta2").html(localStorage.getItem("citta"));
		
		$("#back3").show();
				   
		localStorage.setItem("viale", document.getElementById("viale").value);
		localStorage.setItem("destinazione", document.getElementById("destinazione").value);
				   
		localStorage.setItem("datacal", document.getElementById("datacal").value);
		localStorage.setItem("orario", document.getElementById("Orario").value);
		localStorage.setItem("minuti", document.getElementById("Minuti").value);
				   
				  
				   if(document.getElementById("datacal").value==""){
				     document.getElementById("datacal7").value = "ORA";
				   }
				   else{
				     document.getElementById("datacal7").value = document.getElementById("datacal").value;
				     document.getElementById("orario7").value = document.getElementById("Orario").value;
				     document.getElementById("minuti7").value = document.getElementById("Minuti").value;
				   }
				   
				   
		document.getElementById("viale7").value = document.getElementById("viale").value;
		document.getElementById("destinazione7").value = document.getElementById("destinazione").value;
				   
				if (document.getElementById("viale7").value == "") {
				   navigator.notification.alert(
					'inserire un Indirizzo di partenza',  // message
					alertDismissed,         // callback
					'Attenzione',            // title
					'OK'                  // buttonName
					);
				   
				   return;
				}
				   
		if (document.getElementById("destinazione7").value == "") {
			navigator.notification.alert(
			  'inserire un Indirizzo di destinazione',  // message
				alertDismissed,         // callback
				'Attenzione',            // title
				'OK'                  // buttonName
			);
		    
				   return;
		}
				   
		
				   $("#passeggeri7").html("passeggeri: " + document.getElementById("passeggeri").value);
				   $("#animali7").html("animali: " + document.getElementById("animali").value);
				   $("#fumatori7").html("fumatori: " + document.getElementById("fumatori").value);
				   $("#meno187").html("meno 18 anni: " + document.getElementById("meno18").value);
				   $("#disabili7").html("disabili: " + document.getElementById("disabili").value);
				   $("#bambini7").html("bambini: " + document.getElementById("bambini").value);
				   $("#wifi7").html("wifi: " + document.getElementById("wifi").value);
				   $("#portapacchi7").html("portapacchi: " + document.getElementById("portapacchi").value);
				   $("#rimorchio7").html("rimorchio: " + document.getElementById("rimorchio").value);
				   $("#bluetooth7").html("bluetooth: " + document.getElementById("bluetooth").value);
				    $("#note7").html("note: " + document.getElementById("notepass").value);
				   
				   
				   if(document.getElementById("datacal").value==""){
				     $("#posticipata7").html(" <b><font color='#cc33cc'>Quando: </font></b> Adesso <br>" );
				   }
				   else{
					  $("#posticipata7").html(" <b><font color='#cc33cc'>Quando:</font></b> " + document.getElementById("datacal7").value + ", <b><font color='#cc33cc'>Ora:</font></b>" + document.getElementById("orario7").value + " " + document.getElementById("minuti7").value);
				   }
				   
				   
				   $("#viale77").html(" <b><font color='#cc33cc'>Partenza: </font></b> "+ document.getElementById("viale").value +" <br>" );
				   $("#destinazione77").html(" <b><font color='#cc33cc'>Arrivo: </font></b> "+ document.getElementById("destinazione").value +" <br>" );
				   
		
				   
		//window.location.href = "#home3";
				   
		$.mobile.changePage ($("#home7"));
		
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
		   localStorage.setItem("risppass", "")
		   localStorage.setItem("mirino","0")

			var lat = localStorage.getItem("lat");
			var lng = localStorage.getItem("lng");
		
		
		    $("#fuso2").html(localStorage.getItem("fuso"));
		    $("#citta2").html(localStorage.getItem("citta"));
		
		
            //prendinazione()
		     prendicittaid(localStorage.getItem("citta"))
		
			 //var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
			 //var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
		
			 localStorage.setItem("lat", lat)
			 localStorage.setItem("lng", lng)
		

			 //codeLatLng(lat,lng);
		
			controllachat(1)
    
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
	//controlText.innerHTML = '<table width="100%" class="xalto"><tr><td align="right">&nbsp;</td></tr><tr><td align="right"><a id="XX3" href="index.html" rel="external"><img src="img/xx.png" width="35px"></a><br></td></tr></table><br><table width="100%" border="0" valign="center" align="center" ><tr><td align="center" ><a data-role="button" id="quando" href="#" data-theme="b" class="custom-pass"><font color="#fff">Quando</font></a></td><td align="center" ><a data-role="button" id="da1" href="#" data-theme="b" class="bottoni1"><font color="#fff">&nbsp;Da&nbsp;</font></a></td><td align="center" ><a data-role="button" id="a1" href="#" data-theme="b" class="bottoni"><font color="#fff">&nbsp;A&nbsp;</font></a></td><td align="center" ><a data-role="button" id="piu" href="#" data-theme="b" class="bottoni"><font color="#fff">&nbsp;+&nbsp;</font></a></td><td align="center" ><a data-role="button" id="anteprima" href="#" data-theme="b" class="custom-pass"><font color="#fff">Anteprima</font></a></td></tr></table>';
	
	controlText.innerHTML = '<table width="100%" class="xalto"><tr><td align="right">&nbsp;</td></tr><tr><td align="right"><a id="XX3" href="#" rel="external"><img src="img/xx.png" width="35px"></a><br></td></tr></table><table width="100%" border="0" valign="center" align="center" ><tr><td align="center" ><a id="quando" href="#"><img src="img/ico_quando1.png" width="35px"></a></td><td align="center" ><a id="da1" href="#"><img src="img/ico_start2.png" width="35px"></a></td><td align="center" ><a id="a1" href="#"><img src="img/ico_finish1.png" width="35px"></a></td><td align="center" ><a id="piu" href="#"><img src="img/ico_plus1.png" width="35px"></a></td><td align="center" ><a id="anteprima" href="#" ><img src="img/ico_anteprima1.png" width="35px"></td><td align="center" ><a id="offerte" href="#" ><img src="img/ico_offerte1.png" width="35px"></a></td></tr><tr><td align="left" colspan="6">&nbsp;<font size="3" color="#cc33cc"><div id="s_partenza"><b>Scegli la partenza</b></div><div id="s_arrivo" style="display:none"><b>Arrivo</b></div></font></td></tr></table>';
	
	
	controlUI.appendChild(controlText);
	
	//<td align="center" ><a data-role="button" id="piu" href="#" data-theme="b" class="bottoni"><font color="#fff">&nbsp;+&nbsp;</font></a></td>
	
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
		
	setTimeout(function() {
		inviachat()
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
			
		
	  //$.mobile.changePage( "#win2", { transition: "slide", changeHash: false });
			   
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
	
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	
	
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
		

	//$("#da").removeClass("bottoni").addClass("bottoni1");

        
	//var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });

        
	//$("#btn").click();
	//marker.setMap(null);
	//ido.setVisible(false);
	
	var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
	var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
	
	//localStorage.setItem("lat", lat)
    //localStorage.setItem("lng", lng)
	//ido.setPosition(latlng);
		
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
		
		
		
		
		
		$(document).on("tap", "#ricarica", function(e){
					   
					   if(localStorage.getItem("destination")==0){
					   
					   var geocoder = new google.maps.Geocoder();
					   geocoder.geocode({
										"address": document.getElementById("viale").value
										}, function(results) {
										//alert(results[0].geometry.location.lat()); //LatLng
										//alert(results[0].geometry.location.lng());
										
										localStorage.setItem("lat", results[0].geometry.location.lat())
										localStorage.setItem("lng", results[0].geometry.location.lng())
										
										var latlng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng(), 1);
										
										setTimeout(function() {
												   map.setCenter(latlng);
												   marker2.setPosition(latlng);
												   }, 700);
										
										
										});
	
					   
					   }
					   
					   else{
					   
					   
					   var geocoder = new google.maps.Geocoder();
					   geocoder.geocode({
										"address": document.getElementById("destinazione").value
										}, function(results) {
										//alert(results[0].geometry.location.lat()); //LatLng
										//alert(results[0].geometry.location.lng());
										
										localStorage.setItem("lat", results[0].geometry.location.lat())
										localStorage.setItem("lng", results[0].geometry.location.lng())
										
										 var latlng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng(), 1);
										
										setTimeout(function() {
												   map.setCenter(latlng);
												   marker2.setPosition(latlng);
												   }, 700);
										
										
										});
					   
					   
					   }
					   

					   
					   e.stopImmediatePropagation();
					   
					   e.preventDefault();
					   
					   return false;
					   
					   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
					   });

		
		
		
	   setTimeout(function() {
			$("#ricarica").tap();
			$("#quando").tap();
		},2000);
		
		//$("#quando").tap();
		//$("#anteprima").html("<img src='img/ico_anteprima1.png' width='35px'>");
		
		
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
	
	$("#timer2").show();
	//alert("Vedo");
	
	for(i=0; i<10000; i++)
	{
		window.clearInterval(i);
	}
	
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_passeggeroV3.php?email="+ localStorage.getItem("emailpass") +"&id_passeggero="+ localStorage.getItem("id_pass") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   if(localStorage.getItem("risppass")==JSON.stringify(result)){
		     //alert("Uguali")
			   $("#spinner4").hide();
		   }
		   else{
		   $("#offerte4").html("");
		   $("#spinner4").hide();
		   localStorage.setItem("risppass", JSON.stringify(result))
		   
		   $.each(result, function(i,item){

				  
				  if(item.Token==1){
				  
				  
				  if(item.stato==2){
				  
				  
				  if(item.accettata==1){
				    $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><div class='custom-pass2'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"' href='' class='linkchat'><font color='#fff'>"+ item.nick +" "+ item.percentuale +"%</font></a></div><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></tr><tr><td align='left'><font color='#cc33cc' size='5'><b><div id='timer2'></div></b></font><br><b>Prezzo: </b>"+ item.importo +"<br><b>Quando: </b>"+ item.quando +"<br><b>Ora: </b>"+ item.ora +"<br><br><b>Partenza: </b>"+ item.partenza +"<br><b>Arrivo: </b>"+ item.arrivo +"</td></tr><tr><td align='center'><br><a id='chat"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btnchat'><font color='#fff'>Chat</font></a></td></tr><tr><td align='center'><br><b>Codice Commento: "+ item.cod_passeggero +"</b></td></tr><tr><td align='center'><br><a id='rifiuta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btnchat'><font color='#fff'>Cancella</font></a></td></tr><tr><td align='center'><br></td></tr></table>");
				  //<tr><td align='center'><a id='rifiuta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>RIFIUTA</font></a></td></tr>
				  }
				  else{
				    $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><div class='custom-pass11'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"' href=''class='linkchat'><font color='#fff'>"+ item.nick +" "+ item.percentuale +"%</font></a></div><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></tr><tr><td align='left'><font color='#cc33cc' size='5'><b><div id='timer2'></div></b></font><br><b>Prezzo: </b>"+ item.importo +"<br><b>Quando: </b>"+ item.quando +"<br><b>Ora: </b>"+ item.ora +"<br><br><b>Partenza: </b>"+ item.partenza +"<br><b>Arrivo: </b>"+ item.arrivo +"</td></tr><tr><td align='center'><a id='rifiuta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>RIFIUTA</font></a></td></tr><tr><td align='center'><br></td></tr></table>");
					
					//<a id='accetta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>ACCETTA</font></a>&nbsp;&nbsp;
				  }
				  
				    $(document).on("touchstart", "#accetta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
					  accettaofferta(2,item.id_richiesta,item.id_autista)
					  if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				    });
				  
					$(document).on("touchstart", "#rifiuta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						accettaofferta(3,item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				    });
				  
				  $(document).on("touchstart", "#chat"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
					chatting(item.id_richiesta)
					if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				  });
				  
				  $(document).on("tap", "#linkpass"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
								 
					var ref = window.open('http://www.purplemiles.com/www/profilo_autista.php?idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_system', 'location=no');
								 
					e.stopImmediatePropagation();
								 
					e.preventDefault();
								 
					return false;
								 
					});
				  
				  $(document).on("tap", "#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
								 
						var ref = window.open('http://www.purplemiles.com/www/feedback_autista.php?idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_system', 'location=no');
								 
								 
						e.stopImmediatePropagation();
								 
						e.preventDefault();
								 
						return false;
								 
					});
				  
				  
				  if(parseInt(item.rating)==0){
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if(parseInt(item.rating)==1){
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==2) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==3) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==4) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==5) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'>")
				  }

				  
				  if(item.stato==2){
				  
				  if(item.accettata==0){
				  
				  if(item.confermata==0){
				  
				   for(i=0; i<10000; i++)
				   {
				    window.clearInterval(i);
				   }
				  
				   localStorage.setItem("accettato","0")
				  
				   refreshPos = setInterval(function() {
										   
					 controllaseautistaaccetta(item.id_richiesta,item.id_autista);
										   
				   }, 5000);


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
				  
				     for(i=0; i<10000; i++)
				    {
				     window.clearInterval(i);
				    }

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
					 $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><div class='custom-pass11'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"' href='' class='linkchat'><font color='#fff'>"+ item.nick +" "+ item.percentuale +"%</font></a></div><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></tr><tr><td align='left'><b>Prezzo: </b>"+ item.importo +"<br><b>Quando: </b>"+ item.quando +"<br><b>Ora: </b>"+ item.ora +"<br><b>Partenza: </b>"+ item.partenza +"<br><b>Arrivo: </b>"+ item.arrivo +"<br></td></tr><tr><td align='center'><a id='accetta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>ACCETTA</font></a>&nbsp;&nbsp;<a id='rifiuta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>RIFIUTA</font></a></td></tr><tr><td align='center'><br></td></tr></table>");
				  
				  
				    $(document).on("touchstart", "#accetta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						accettaofferta(2,item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
					 });
				  
				    $(document).on("touchstart", "#rifiuta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						accettaofferta(3,item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
					});
				  
				  $(document).on("tap", "#linkpass"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
								 
						var ref = window.open('http://www.purplemiles.com/www/profilo_autista.php?idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_system', 'location=no');
								 
						e.stopImmediatePropagation();
								 
						e.preventDefault();
								 
						return false;
								 
					});
				  
				  $(document).on("tap", "#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
								 //http://www.purplemiles.com/www/profilo_passeggero.php?idp=19&ida="+localStorage.getItem("id_autista")+"&pm="+localStorage.getItem("md5")+"
								 
								 var ref = window.open('http://www.purplemiles.com/www/feedback_autista.php?idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_system', 'location=no');
								 
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
								 });
				  
					
				  if(parseInt(item.rating)==0){
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if(parseInt(item.rating)==1){
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==2) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==3) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==4) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==5) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'>")
				  }
				  
				  playAudio('successArrivo');
				  
					
				  }
				  
				  if(item.stato==0){
					 if(item.nick==""){
					   $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><b>RICHIESTA</b><br></td></tr><tr><td align='left'><br><b>Quando: </b>"+ item.quando +"<br><b>Ora: </b>"+ item.ora +"<br><b>Partenza: </b>"+ item.partenza +"<br><b>Arrivo: </b>"+ item.arrivo +"</td></tr><tr><td align='center'></td></tr><tr><td align='center'><br></td></tr></table>");
					 }
					 else{
				       $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><font color='#000'><b>"+ item.nick +" "+ item.percentuale +"%</b></font><br><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></td></tr><tr><td align='left'><br><b>Quando: </b>"+ item.quando +"<br><b>Ora: </b>"+ item.ora +"<br><b>Partenza: </b>"+ item.partenza +"<br><b>Arrivo: </b>"+ item.arrivo +"</td></tr><tr><td align='center'></td></tr><tr><td align='center'><br></td></tr></table>");
				  
				  
				  
				  if(parseInt(item.rating)==0){
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if(parseInt(item.rating)==1){
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==2) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==3) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==4) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starunselected.png' width='18'>")
				  }
				  else if (parseInt(item.rating)==5) {
				  $("#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "").html("<img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'><img src='img/starselected.png' width='18'>")
				  }

				  
				  
				  
				  
				     }
				  }
				  
		  
				  }
				  else{
				  
				  $("#offerte4").html("<br><br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr> <td align='center'><img src='img/Logo.png' width='160px'><br></td></tr><tr><td align='center'>Al momento nessun offerta<br></td></tr></table>");
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
		   
		   vediofferte();
		   
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
	}

	
	refreshPos = setInterval(function() {
		vediofferte()
							 
	    controllachat(2)
	}, 5000);
	
	//setTimeout( function() {
		//vediofferte()
	//}, 5000 );

	
}

function chatting(id) {
	$("#nickhome6").html(localStorage.getItem("nick"));
	//$("#spinner6").show();
	
	localStorage.setItem("id_richiesta",id)
	
	
	for(i=0; i<10000; i++)
	{
		window.clearInterval(i);
	}
	
	
	$.mobile.changePage( "#home6", { transition: "slide", changeHash: false });
	
	setTimeout(function() {
	 $("#tblchat").fadeIn(1000)
    }, 500);
	
	
	//alert("http://purplemiles.com/www2/leggi_chat.php?id_richiesta="+ id +"&last_id=0")
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/leggi_chat.php?id_richiesta="+ id +"&last_id=0",
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
		   localStorage.setItem("chatpass", JSON.stringify(result))
		   
		   $.each(result, function(i,item){
				  
				  
			   if(item.Token==1){
				  
				  if(item.nick==localStorage.getItem("nick")){
				  //$("#offerta6").append("<br><br><table width='70%' border='0' valign='center' align='left' class='tabella'><tr><td align='center'><div class='custom-pass33'><font color='#fff' size='4'>"+ item.nick +"</font></div></tr><tr><td align='left'><br><b>Mesaggio: </b>"+ item.messaggio +"<br><b>Data: </b>"+ item.data +"</td></tr></table>");
				  $("#offerta6").append("<div class='bubbledLeft'>"+ item.messaggio +"</div>")
				  }
				  else{
				  //$("#offerta6").append("<br><br><table width='70%' border='0' valign='center' align='right' class='tabella'><tr><td align='center'><div class='custom-pass22'><font color='#fff' size='4'>"+ item.nick +"</font></div></tr><tr><td align='left'><br><b>Mesaggio: </b>"+ item.messaggio +"<br><b>Data: </b>"+ item.data +"</td></tr></table>");
				  $("#offerta6").append("<div class='bubbledRight'>"+ item.messaggio +"</div>")
				  }
				  
				  playChat2('successChat2');
				  
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
		   
		   chatting(id);
		   
		   },
		   dataType:"jsonp"});
	
	
	refreshPos = setInterval(function() {
		chatting(id)
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
}

function inviachat() {
	var indirizzo = document.getElementById("chattext").value.replace("'", "")
	
	if (indirizzo == "") {
		navigator.notification.alert(
									 'inserire un messaggio',  // message
									 alertDismissed,         // callback
									 'Chat',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	$("#spinner6").show();
	//alert(localStorage.getItem("id_richiesta"))
	
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/pubblica_chat.php?id_messaggio="+ localStorage.getItem("id_richiesta") +"&nick="+ localStorage.getItem("nick") +"&messaggio="+ indirizzo +"",
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
		   
		   vediofferte();
		   
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
			     chatting(item.canale);
			  }
				  
		    });
		   }
		   
		   }
		   
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
	
}



function controllaseautistaaccetta(id_richiesta,id_autista){
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_controllaseaccettata.php?id_richiesta="+ id_richiesta +"&id_autista="+ id_autista +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				if(item.accettata==1){
				  
				  for(i=0; i<10000; i++)
				  {
				     window.clearInterval(i);
				  }
				  
				  vediofferte()
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
		   
		  controllaseautistaaccetta(id_richiesta,id_autista);
		   
		   },
		   dataType:"jsonp"});
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
									
		   
		   vediofferte()
		   
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
		   
		   vediofferte()
		   
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
					
		//document.getElementById("datacal").value = datta12
		
		document.getElementById("datacal").value = datta
					
	});
}

function prendinazione(){
    
    var nazione = "";
    
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
                  }
                  else{
                  if (localStorage.getItem("fuso") === null || localStorage.getItem("fuso")=="null" || typeof(localStorage.getItem("fuso")) == 'undefined' || localStorage.getItem("fuso")==0 || localStorage.getItem("fuso")=="") {
                  if(item.country=="Italy"){
                  nazione = nazione + "<option value='"+item.country+"' selected>"+ item.country +"</option>"
                  }
                  else{
                  nazione = nazione + "<option value='"+item.country+"'>"+ item.country +"</option>"
                  }
                  
                  }
                  else{
                  nazione = nazione + "<option value='"+item.country+"'>"+ item.country +"</option>"
                  }
                  }
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
           
           $("#fuso1").html(nazione);
           
           $("#fuso1").selectmenu("refresh");
           
           prendicitta(localStorage.getItem("citta"))
           
           //$("#citta1").html("<option value='"+localStorage.getItem("citta")+"'>"+ localStorage.getItem("citta") +"</option>");
           
           //$("#citta1").selectmenu("refresh");
    
           
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


function prendicitta(id){
    
    var citta = "";
    
    
    $(".spinner").show();
    $.ajax({
           type:"GET",
           url:"http://purplemiles.com/www2/check_prendicitta.php?nazione=Italy",
           contentType: "application/json",
           timeout: 7000,
           jsonp: 'callback',
           crossDomain: true,
           success:function(result){
           
           $.each(result, function(i,item){
                  
                  
                  if (item.Token == 1){
                  
                  citta = citta + "<option value='"+item.id+"'>"+ item.city +"</option>"
                  
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
           
           $("#citta1").html(citta);
           
           $("#citta1").selectmenu("refresh");
           
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

function prendicittaid(id){
	
	var citta = "";
	
	
	//$(".spinner").show();
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
				  
					$("#citta2").html(item.city);
				  
				  }
				  else{

				  
				  }
				  });
		   
		   $(".spinner").hide();

		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   

		   
		   },
		   dataType:"jsonp"});
	
}



function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
						  }