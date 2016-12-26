document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
	
	
	StatusBar.hide();
	

	/*$("#viale").blur(function() {
		$("#btninizia").removeClass("divAA").addClass("div55");
	});
	
	
	$("#viale").focus(function() {
		$("#btninizia").removeClass("div55").addClass("divAA");
	});
	
	$("#destinazione").blur(function() {
		$("#btninizia").removeClass("divAA").addClass("div55");
	});
	
	
	$("#destinazione").focus(function() {
		$("#btninizia").removeClass("div55").addClass("divAA");
	});*/
	
	//////////// TASTIERA ////////////////
	
	
	window.addEventListener('native.keyboardhide', keyboardHideHandler);
  
	  function keyboardHideHandler(e){
		  $("#btninizia").removeClass("divAA").addClass("div55");
	  }
	  
	  window.addEventListener('native.keyboardshow', keyboardShowHandler);
  
	 function keyboardShowHandler(e){
		 $("#btninizia").removeClass("div55").addClass("divAA");
	 }
		
	////////// FINE TASTIERA ////////////////
	
	
	$('#veicolo').on('change', function(){
		 var $this = $(this),
		 $value = $this.val();
					 
		 document.getElementById("veicolo11").value = $value;
					 
		 //alert(document.getElementById("veicolo11").value)
					 
	});
	
	
    var alertstart;
    var alertend;
    var alertinvio;
    
    var h7quando;
    var h7adesso;
    var h7partenza;
    var h7arrivo;
    var h7veicolo;
	 var h7destinazione;
    
    var h7passeggeri;
    var h7fumatori;
    var h7animali;
    var h7minori;
    var h7disabili;
    var h7seggiolino;
    var h7pacchi;
    var h7gancio;
    
    var h4richiesta;
    
    var db;
    db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
    
    db.transaction(function (tx) {
                   
                   tx.executeSql('SELECT * FROM TestiV2', [], function (tx, results) {
                                 var len = results.rows.length, i;
                                 
                        if(localStorage.getItem("lingua")=="it"){
                                 
                            for (i = 0; i < len; i++){
                                 
                                    $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).italiano.replace("P0011", "'"));
                                 
                                 if(results.rows.item(i).id_traduzione == "h4richiesta"){
                                 h4richiesta = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h7quando"){
                                 h7quando = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionQuando",h7quando)
                                 
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "rispopzioni"){
									rispopzioni = results.rows.item(i).italiano.replace("P0011", "'");
									//:&nbsp;
									//.replace("Si",""+rispopzioni+"")
							    }
								 
								 
								 if(results.rows.item(i).id_traduzione == "h7destinazione"){
								 h7destinazione = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionArrivo",h7destinazione)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h7valutazione"){
								 h7valutazione = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionValutazione",h7valutazione)
								 
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "offerta"){
								 var offerta = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionOfferta",offerta)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "gratis"){
								 var gratis = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionGratis",gratis)
								 
								 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4tempo"){
                                 h4tempo = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionTempo",h4tempo)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4ora"){
                                 h4ora = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionOra",h4ora)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4prezzo"){
                                 h4prezzo = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionPrezzo",h4prezzo)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4confermato"){
                                 h4confermato = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionConfermato",h4confermato)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4commento"){
                                 h4commento = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionCommento",h4commento)
                                 
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "h4rifiutata"){
                                 h4rifiutata = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionRifiutata",h4rifiutata)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4reinoltra"){
                                 h4reinoltra = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionReinoltra",h4reinoltra)
                                 
                                 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "h4attendere"){
                                 h4attendere = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionAttendere",h4attendere)
                                 
                                 }
                                 
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "h4accettazione"){
                                 h4accettazione = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionAccettazione",h4accettazione)
                                 
                                 }
								 
                                 if(results.rows.item(i).id_traduzione == "h7adesso"){
                                 h7adesso = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h7partenza"){
                                 h7partenza = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionPartenza",h7partenza)
                                 
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "h4minuti"){
								 h4minuti = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionMinuti",h4minuti)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h3note"){
								 h3note = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionNote",h3note)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h4nessuna"){
								 h4nessuna = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionNessuna",h4nessuna)
								 
								 }
								 
								 
								 
                                 if(results.rows.item(i).id_traduzione == "h7arrivo"){
                                 h7arrivo = results.rows.item(i).italiano.replace("P0011", "'");
								 
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7veicolo"){
                                 h7veicolo = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7passeggeri"){
                                 h7passeggeri = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7fumatori"){
                                 h7fumatori = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7animali"){
                                 h7animali = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7minori"){
                                 h7minori = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7disabili"){
                                 h7disabili = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7seggiolino"){
                                 h7seggiolino = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7pacchi"){
                                 h7pacchi = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7gancio"){
                                 h7gancio = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "alertpartenza"){
                                 alertstart = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionStart",alertstart)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "alertdestinazione"){
                                 alertend = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionEnd",alertend)
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "alertinvio"){
                                 alertinvio = results.rows.item(i).italiano.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "adesso1"){
                                 $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;" + results.rows.item(i).italiano.replace("P0011", "'") + "&nbsp;");
                                 }
                                 
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "tardi1"){
                                 $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + results.rows.item(i).italiano.replace("P0011", "'") + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                                 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "datavalida"){
								 datavalida = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionDatavalida",datavalida)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "orariovalido"){
								 orariovalido = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionOrariovalido",orariovalido)
								 
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "nonrilevare"){
								 nonrilevare = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionNonrilevare",nonrilevare)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "offertaacc"){
								 offertaacc = results.rows.item(i).italiano.replace("P0011", "'");
								 
								 localStorage.setItem("sessionOffertaacc",offertaacc)
								 
								 }
								 
								 
                            }
                                 
                        }
                                 
                                 
                            if(localStorage.getItem("lingua")=="en"){
                                 
                                 
                              for (i = 0; i < len; i++){
                                   $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
								   
								   if(results.rows.item(i).id_traduzione == "rispopzioni"){
									rispopzioni = results.rows.item(i).inglese.replace("P0011", "'");
									//:&nbsp;
									//.replace("Si",""+rispopzioni+"")
							    }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4richiesta"){
                                   h4richiesta = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4tempo"){
                                 h4tempo = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionTempo",h4tempo)
                                 
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "h4nessuna"){
								 h4nessuna = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionNessuna",h4nessuna)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h4minuti"){
								 h4minuti = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionMinuti",h4minuti)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "offerta"){
								 var offerta = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionOfferta",offerta)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h3note"){
								 h3note = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionNote",h3note)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "gratis"){
								 var gratis = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionGratis",gratis)
								 
								 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4reinoltra"){
                                 h4reinoltra = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionReinoltra",h4reinoltra)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4commento"){
                                 h4commento = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionCommento",h4commento)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4prezzo"){
                                 h4prezzo = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionPrezzo",h4prezzo)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4confermato"){
                                 h4confermato = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionConfermato",h4confermato)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4attendere"){
                                 h4attendere = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionAttendere",h4attendere)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4accettazione"){
                                 h4accettazione = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionAccettazione",h4accettazione)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4rifiutata"){
                                 h4rifiutata = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionRifiutata",h4rifiutata)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h7quando"){
                                 h7quando = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionQuando",h7quando)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4ora"){
                                 h4ora = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionOra",h4ora)
                                 
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "h7destinazione"){
								 h7destinazione = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionArrivo",h7destinazione)
								 
								 
								 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h7adesso"){
                                 h7adesso = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h7partenza"){
                                 h7partenza = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionPartenza",h7partenza)
                                 
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "h7valutazione"){
								 h7valutazione = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionValutazione",h7valutazione)
								 
								 }
								 
                                 
                                 if(results.rows.item(i).id_traduzione == "h7arrivo"){
                                 h7arrivo = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7veicolo"){
                                 h7veicolo = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7passeggeri"){
                                 h7passeggeri = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7fumatori"){
                                 h7fumatori = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7animali"){
                                 h7animali = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7minori"){
                                 h7minori = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7disabili"){
                                 h7disabili = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7seggiolino"){
                                 h7seggiolino = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7pacchi"){
                                 h7pacchi = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "h7gancio"){
                                 h7gancio = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "alertpartenza"){
                                   alertstart = results.rows.item(i).inglese.replace("P0011", "'");
								 
								   localStorage.setItem("sessionStart",alertstart)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "alertdestinazione"){
                                   alertend = results.rows.item(i).inglese.replace("P0011", "'");
								 
								   localStorage.setItem("sessionEnd",alertend)
                                 
                                 }
                                 if(results.rows.item(i).id_traduzione == "alertinvio"){
                                   alertinvio = results.rows.item(i).inglese.replace("P0011", "'");
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "adesso1"){
                                   $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;" + results.rows.item(i).inglese.replace("P0011", "'") + "&nbsp;");
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "datavalida"){
								 datavalida = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionDatavalida",datavalida)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "orariovalido"){
								 orariovalido = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionOrariovalido",orariovalido)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "nonrilevare"){
								 nonrilevare = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionNonrilevare",nonrilevare)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "offertaacc"){
								 offertaacc = results.rows.item(i).inglese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionOffertaacc",offertaacc)
								 
								 }
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "tardi1"){
                                   $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + results.rows.item(i).inglese.replace("P0011", "'") + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                                 }
                                 
                                }
                                 
                            }
								 
							if(localStorage.getItem("lingua")=="fr"){
								 
								 
								for (i = 0; i < len; i++){
								 $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).francese.replace("P0011", "'"));
								 
								  if(results.rows.item(i).id_traduzione == "rispopzioni"){
									rispopzioni = results.rows.item(i).francese.replace("P0011", "'");
									//:&nbsp;
									//.replace("Si",""+rispopzioni+"")
							    }
								 
								 if(results.rows.item(i).id_traduzione == "h4richiesta"){
								 h4richiesta = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4tempo"){
                                 h4tempo = results.rows.item(i).francese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionTempo",h4tempo)
                                 
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "h4nessuna"){
								 h4nessuna = results.rows.item(i).francese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionNessuna",h4nessuna)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h4minuti"){
								 h4minuti = results.rows.item(i).francese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionMinuti",h4minuti)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "offerta"){
								 var offerta = results.rows.item(i).francese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionOfferta",offerta)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "gratis"){
								 var gratis = results.rows.item(i).francese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionGratis",gratis)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h7valutazione"){
								 h7valutazione = results.rows.item(i).francese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionValutazione",h7valutazione)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h3note"){
								 h3note = results.rows.item(i).francese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionNote",h3note)
								 
								 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4prezzo"){
                                 h4prezzo = results.rows.item(i).francese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionPrezzo",h4prezzo)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4commento"){
                                 h4commento = results.rows.item(i).francese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionCommento",h4commento)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4reinoltra"){
                                 h4reinoltra = results.rows.item(i).francese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionReinoltra",h4reinoltra)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4attendere"){
                                 h4attendere = results.rows.item(i).francese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionAttendere",h4attendere)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4rifiutata"){
                                 h4rifiutata = results.rows.item(i).francese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionRifiutata",h4rifiutata)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4confermato"){
                                 h4confermato = results.rows.item(i).francese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionConfermato",h4confermato)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4ora"){
                                 h4ora = results.rows.item(i).francese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionOra",h4ora)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4accettazione"){
                                 h4accettazione = results.rows.item(i).francese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionAccettazione",h4accettazione)
                                 
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "h7quando"){
								 h7quando = results.rows.item(i).francese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionQuando",h7quando)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h7destinazione"){
								 h7destinazione = results.rows.item(i).francese.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionArrivo",h7destinazione)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h7adesso"){
								 h7adesso = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h7partenza"){
								 h7partenza = results.rows.item(i).francese.replace("P0011", "'").replace("&eacute;", "è").replace("&eacute;", "è").replace("&eacute;", "è").replace("&iacute;", "ì");
                                 
                                 localStorage.setItem("sessionPartenza",h7partenza)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h7arrivo"){
								 h7arrivo = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7veicolo"){
								 h7veicolo = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7passeggeri"){
								 h7passeggeri = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7fumatori"){
								 h7fumatori = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7animali"){
								 h7animali = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7minori"){
								 h7minori = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7disabili"){
								 h7disabili = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7seggiolino"){
								 h7seggiolino = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7pacchi"){
								 h7pacchi = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7gancio"){
								 h7gancio = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "alertpartenza"){
								 alertstart = results.rows.item(i).francese.replace("P0011", "'").replace("&eacute;", "è").replace("&eacute;", "è").replace("&eacute;", "è").replace("&iacute;", "ì");
								 
								 localStorage.setItem("sessionStart",alertstart)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "alertdestinazione"){
								 alertend = results.rows.item(i).francese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionEnd",alertend)
								 
								 }
								 if(results.rows.item(i).id_traduzione == "alertinvio"){
								 alertinvio = results.rows.item(i).francese.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "adesso1"){
								 $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;" + results.rows.item(i).francese.replace("P0011", "'") + "&nbsp;").replace("&eacute;", "è").replace("&eacute;", "è").replace("&iacute;", "ì");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "datavalida"){
								 datavalida = results.rows.item(i).francese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionDatavalida",datavalida)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "orariovalido"){
								 orariovalido = results.rows.item(i).francese.replace("P0011", "'");
								 
								 localStorage.setItem("sessionOrariovalido",orariovalido)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "nonrilevare"){
								 nonrilevare = results.rows.item(i).francese.replace("P0011", "'").replace("&eacute;", "è").replace("&eacute;", "è").replace("&eacute;", "è").replace("&iacute;", "ì");
								 
								 localStorage.setItem("sessionNonrilevare",nonrilevare)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "offertaacc"){
								 offertaacc = results.rows.item(i).francese.replace("P0011", "'").replace("&eacute;", "è").replace("&eacute;", "è").replace("&aacute;", "à");
								 
								 localStorage.setItem("sessionOffertaacc",offertaacc)
								 
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "tardi1"){
								 $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + results.rows.item(i).francese.replace("P0011", "'") + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "adesso"){
								  $("#"+ results.rows.item(i).id_traduzione +"").html("<font size='2'>"+results.rows.item(i).francese.replace("P0011", "'")+"</font>");
								 }
								 
								 
								 
								}
								 
							}
								 
							if(localStorage.getItem("lingua")=="es"){
								 
								 
							for (i = 0; i < len; i++){
								 $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).spagnolo.replace("P0011", "'"));
								 
								if(results.rows.item(i).id_traduzione == "rispopzioni"){
									rispopzioni = results.rows.item(i).spagnolo.replace("P0011", "'");
									//:&nbsp;
									//.replace("Si",""+rispopzioni+"")
							    }
								 
								 if(results.rows.item(i).id_traduzione == "h4richiesta"){
								 h4richiesta = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4commento"){
                                 h4commento = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionCommento",h4commento)
                                 
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "h4minuti"){
								 h4minuti = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 localStorage.setItem("sessionMinuti",h4minuti)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h4nessuna"){
								 h4nessuna = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 localStorage.setItem("sessionNessuna",h4nessuna)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "offerta"){
								 var offerta = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 localStorage.setItem("sessionOfferta",offerta)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h7valutazione"){
								 h7valutazione = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 localStorage.setItem("sessionValutazione",h7valutazione)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h3note"){
								 h3note = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 localStorage.setItem("sessionNote",h3note)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "gratis"){
								 var gratis = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 localStorage.setItem("sessionGratis",gratis)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h7quando"){
								 h7quando = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionQuando",h7quando)
								 
								 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4tempo"){
                                 h4tempo = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionTempo",h4tempo)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4rifiutata"){
                                 h4rifiutata = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionRifiutata",h4rifiutata)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4attendere"){
                                 h4attendere = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionAttendere",h4attendere)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4reinoltra"){
                                 h4reinoltra = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionReinoltra",h4reinoltra)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4ora"){
                                 h4ora = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionOra",h4ora)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4accettazione"){
                                 h4accettazione = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionAccettazione",h4accettazione)
                                 
                                 }
                                 
                                 
                                 
                                 if(results.rows.item(i).id_traduzione == "h4prezzo"){
                                 h4prezzo = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionPrezzo",h4prezzo)
                                 
                                 }
                                 
                                 if(results.rows.item(i).id_traduzione == "h4confermato"){
                                 h4confermato = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionConfermato",h4confermato)
                                 
                                 }
								 
								 if(results.rows.item(i).id_traduzione == "h7destinazione"){
								 h7destinazione = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionArrivo",h7destinazione)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h7adesso"){
								 h7adesso = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h7partenza"){
								 h7partenza = results.rows.item(i).spagnolo.replace("P0011", "'");
                                 
                                 localStorage.setItem("sessionPartenza",h7partenza)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "h7arrivo"){
								 h7arrivo = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7veicolo"){
								 h7veicolo = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7passeggeri"){
								 h7passeggeri = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7fumatori"){
								 h7fumatori = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7animali"){
								 h7animali = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7minori"){
								 h7minori = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7disabili"){
								 h7disabili = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7seggiolino"){
								 h7seggiolino = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7pacchi"){
								 h7pacchi = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 if(results.rows.item(i).id_traduzione == "h7gancio"){
								 h7gancio = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "alertpartenza"){
								 alertstart = results.rows.item(i).spagnolo.replace("P0011", "'").replace("&oacute;", "ò").replace("&ntilde;", "ñ");
								 
								 localStorage.setItem("sessionStart",alertstart)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "alertdestinazione"){
								 alertend = results.rows.item(i).spagnolo.replace("P0011", "'").replace("&oacute;", "ò").replace("&oacute;", "ò").replace("&ntilde;", "ñ");
								 
								 localStorage.setItem("sessionEnd",alertend)
								 
								 }
								 if(results.rows.item(i).id_traduzione == "alertinvio"){
								 alertinvio = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "adesso1"){
								 $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;" + results.rows.item(i).spagnolo.replace("P0011", "'") + "&nbsp;");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "datavalida"){
								 datavalida = results.rows.item(i).spagnolo.replace("P0011", "'").replace("&aacute;", "à").replace("&oacute;", "ò").replace("&ntilde;", "ñ");
								 
								 localStorage.setItem("sessionDatavalida",datavalida)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "orariovalido"){
								 orariovalido = results.rows.item(i).spagnolo.replace("P0011", "'").replace("&aacute;", "à").replace("&oacute;", "ò").replace("&ntilde;", "ñ");
								 
								 localStorage.setItem("sessionOrariovalido",orariovalido)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "nonrilevare"){
								 nonrilevare = results.rows.item(i).spagnolo.replace("P0011", "'").replace("&oacute;", "ò").replace("&oacute;", "ò").replace("&ntilde;", "ñ");
								 
								 localStorage.setItem("sessionNonrilevare",nonrilevare)
								 
								 }
								 
								 if(results.rows.item(i).id_traduzione == "offertaacc"){
								 offertaacc = results.rows.item(i).spagnolo.replace("P0011", "'");
								 
								 localStorage.setItem("sessionOffertaacc",offertaacc)
								 
								 }
								 
								 
								 if(results.rows.item(i).id_traduzione == "tardi1"){
								 $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + results.rows.item(i).spagnolo.replace("P0011", "'") + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
								 }
								 
								 if(results.rows.item(i).id_traduzione == "adesso"){
								  $("#"+ results.rows.item(i).id_traduzione +"").html("<font size='2'>"+results.rows.item(i).spagnolo.replace("P0011", "'")+"</font>");
								 }
								 
							}
							
						}
								 
					}, null);
				});
	
	
	
	if(localStorage.getItem("lingua")=="it"){
		
		var alertattenzione = localStorage.getItem("sessionAttenzione")
		var chiudereA = ""+localStorage.getItem("sessionChiudere")+""
		var spegniA = ""+localStorage.getItem("sessionSpegni")+""
		var annullaA = ""+localStorage.getItem("sessionSpegni")+","+localStorage.getItem("sessionSannulla")+""
		var profiloA = "Profilo"
		
	}
	else if(localStorage.getItem("lingua")=="en"){
		
		var alertattenzione = localStorage.getItem("sessionAttenzione")
		var chiudereA = ""+localStorage.getItem("sessionChiudere")+""
		var spegniA = ""+localStorage.getItem("sessionSpegni")+""
		var annullaA = ""+localStorage.getItem("sessionSpegni")+","+localStorage.getItem("sessionSannulla")+""
		var profiloA = "Profile"
		
	}
	else if(localStorage.getItem("lingua")=="fr"){
		
		var alertattenzione = localStorage.getItem("sessionAttenzione")
		var chiudereA = ""+localStorage.getItem("sessionChiudere")+""
		var spegniA = ""+localStorage.getItem("sessionSpegni")+""
		var annullaA = ""+localStorage.getItem("sessionSpegni")+","+localStorage.getItem("sessionSannulla")+""
		var profiloA = "Profil"
		
	}
	else if(localStorage.getItem("lingua")=="es"){
		
		var alertattenzione = localStorage.getItem("sessionAttenzione")
		var chiudereA = ""+localStorage.getItem("sessionChiudere")+""
		var spegniA = ""+localStorage.getItem("sessionSpegni")+""
		var annullaA = ""+localStorage.getItem("sessionSpegni")+","+localStorage.getItem("sessionSannulla")+""
		var profiloA = "Perfil"
		
	}
	else{
		var alertattenzione = localStorage.getItem("sessionAttenzione")
		var chiudereA = ""+localStorage.getItem("sessionChiudere")+""
		var spegniA = ""+localStorage.getItem("sessionSpegni")+""
		var annullaA = ""+localStorage.getItem("sessionSpegni")+","+localStorage.getItem("sessionSannulla")+""
		var profiloA = "Profilo"
	}
	
	
	
	document.addEventListener('backbutton', function(e) {
							  
	        navigator.notification.confirm(
			chiudereA,  // message
			 onConfirm2,              // callback to invoke with index of button pressed
			spegniA,            // title
			annullaA      // buttonLabels
			);
							  
							  
		}, false);
	
	
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
			
			//navigator.device.exitApp();
			
			if (navigator.app && navigator.app.exitApp) {
				navigator.app.exitApp();
			} else if (navigator.device && navigator.device.exitApp) {
				navigator.device.exitApp();
			}
			
			
			e.stopImmediatePropagation();
			
			e.preventDefault();
			
			return;
		}
		
	}
	
	
	
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
                                
                                if(localStorage.getItem("lingua")=="it"){
                                
                                 var alertattenzione = localStorage.getItem("sessionAttenzione")
                                var alerterrore = localStorage.getItem("sessionErrorrete")
                                
                                }
                                else if(localStorage.getItem("lingua")=="en"){
                                
                                 var alertattenzione = localStorage.getItem("sessionAttenzione")
                                 var alerterrore = localStorage.getItem("sessionErrorrete")

                                
                                }
								else if(localStorage.getItem("lingua")=="fr"){
								
								 var alertattenzione = localStorage.getItem("sessionAttenzione")
								 var alerterrore = localStorage.getItem("sessionErrorrete")
								
								
								}
								else if(localStorage.getItem("lingua")=="es"){
								
								 var alertattenzione = localStorage.getItem("sessionAttenzione")
								 var alerterrore = localStorage.getItem("sessionErrorrete")
								
								
								}
								else{
								
                                 var alertattenzione = localStorage.getItem("sessionAttenzione")
                                 var erroreA = "Possible error network"

                                }
                    
                                
                                navigator.notification.alert(
                                                             erroreA,  // message
                                                             alertDismissed,         // callback
                                                             alertattenzione,            // title
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
                         
                         if(localStorage.getItem("lingua")=="it"){
                         
                         var alertattenzione = localStorage.getItem("sessionAttenzione")
                        var alerterrore = localStorage.getItem("sessionErrorrete")
                         
                         }
                         else if(localStorage.getItem("lingua")=="en"){
                         
                         var alertattenzione = localStorage.getItem("sessionAttenzione")
                         var alerterrore = localStorage.getItem("sessionErrorrete")
                         
                         
                         }
						 else if(localStorage.getItem("lingua")=="fr"){
						 
						 var alertattenzione = localStorage.getItem("sessionAttenzione")
						 var alerterrore = localStorage.getItem("sessionErrorrete")
						 
						 
						 }
						 else if(localStorage.getItem("lingua")=="es"){
						 
						 var alertattenzione = localStorage.getItem("sessionAttenzione")
						 var alerterrore = localStorage.getItem("sessionErrorrete")
						 
						 
						 }
						 else{
						 
                         var alertattenzione = localStorage.getItem("sessionAttenzione")
                         var erroreA = "Possible error network"
                         
                         }
                         
                         navigator.notification.alert(
                                                      erroreA,  // message
                                                      alertDismissed,         // callback
                                                      alertattenzione,            // title
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
	
	
	/*if(screen.width < 768){
		$("#quando").html("<img src='img/ico_clock3.png' width='55px'>");
		$("#da").html("<img src='img/ico_start1.png' width='45px'>");
		$("#a3").html("<img src='img/ico_finish1.png' width='45px'>");
		$("#piu").html("<img src='img/ico_plus1.png' width='45px'>");
		$("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
		$("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
		
		
	}
	else
	{
		if(screen.width > 719){
			$("#quando").html("<img src='img/ico_clock3.png' width='110px'>");
			$("#da").html("<img src='img/ico_start1.png' width='90px'>");
			$("#a3").html("<img src='img/ico_finish1.png' width='90px'>");
			$("#piu").html("<img src='img/ico_plus1.png' width='90px'>");
			$("#anteprima").html("<img src='img/ico_go1.png' width='90px'>");
			$("#offerte").html("<img src='img/ico_offerte1.png' width='90px'>");
			
			$("#spazioipad").attr("height","90");
		}
		else{
			$("#quando").html("<img src='img/ico_clock3.png' width='45px'>");
			$("#da").html("<img src='img/ico_start1.png' width='45px'>");
			$("#a3").html("<img src='img/ico_finish1.png' width='45px'>");
			$("#piu").html("<img src='img/ico_plus1.png' width='45px'>");
			$("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
			$("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
		}
	}*/

	
	$("#tblhome").fadeIn("slow")
	localStorage.setItem("aspetta","0")
	
	IDPage = getParameterByName('id');
	ODPage = getParameterByName('od');
	
	$(document).on("tap", "#imgcalendario", function(e){
		mostracal();
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$("#datacal").focus(function() {
		mostracal();
	});
	
	$(document).on("tap", "#XXX", function(e){
		for(i=0; i<10000; i++)
		{
		   window.clearInterval(i);
		}
				   
		window.location.href = "index.html";
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#XX3", function(e){
				   
		//bgGeo.finish();

		//backgroundGeolocation.stop();

		window.location.href = "index.html";
		
	   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#inizia", function(e){
				   
		start();
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart tap", "#back6", function(e){
				   $("#spinner6").show();
				   
				   if(localStorage.getItem("aspetta")==0){
				     inviachat()
				   }
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
				   });
	
	$(document).on("touchstart tap", "#cambiafuso", function(e){
		window.location.href = "Login.html?id=2";
				   
		e.stopImmediatePropagation();
				   
		e.preventDefault();
				   
		return false;
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart", "#chiudibanner", function(e){
				   localStorage.setItem("nobanner","0")
				   $("#bannerp").hide()
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	
	$(document).on("touchstart tap", "#indietro6", function(e){
				   
			//$("#tblchat").hide()
				   
			//$.mobile.changePage( "#home4", { transition: "slide", changeHash: false, reverse: true });
				   
				   
			for(i=0; i<10000; i++)
			{
			   window.clearInterval(i);
			}
				   
			window.location.href = "mappass.html";
				   
			/*setTimeout(function() {
			  vediofferte()
			}, 500);*/
			
			e.stopImmediatePropagation();
				   
			e.preventDefault();
				   
			return false;
				   
			if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("tap", "#da", function(e){
		localStorage.setItem("dovesono", "1");
		localStorage.setItem("destination", "0")
		localStorage.setItem("pagebtn", "da")
				   
		document.getElementById("datacal").value = "";
				   
		$("#Orario").html("<option selected>--</option><option>00</option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option>");
		$("#Minuti").html("<option selected>--</option><option>00</option><option>15</option><option>30</option><option>45</option>");
				   
		$("#Orario").selectmenu("refresh");
		$("#Minuti").selectmenu("refresh");
				   
		$("#viale").show();
		$("#tblviale").show();
				   
				   if(localStorage.getItem("lingua")=="it"){
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   }
				   else if(localStorage.getItem("lingua")=="en"){
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   }
				   else{
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   
		$("#destinazione").hide();
		$("#tbldestinazione").hide();
				   
				   /*if(screen.width < 768){
				   $("#da1").html("<img src='img/ico_start3.png' width='55px'>");
				   $("#a1").html("<img src='img/ico_finish2.png' width='45px'>");
				   }
				   else
				   {
				   if(screen.width > 719){
				   $("#da1").html("<img src='img/ico_start3.png' width='110px'>");
				   $("#a1").html("<img src='img/ico_finish2.png' width='90px'>");
				   }
				   else{
				   $("#da1").html("<img src='img/ico_start3.png' width='55px'>");
				   $("#a1").html("<img src='img/ico_finish2.png' width='45px'>");
				   }
				   }*/
				   
		
		
		//$("#da").html("bottoni");
		//$("#da").removeClass("bottoni").addClass("bottoni1");
		//$("#a").removeClass("bottoni1").addClass("bottoni");
				   
		onResume();
				   
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	$(document).on("touchstart", "#da2", function(e){
				   localStorage.setItem("dovesono", "1");
				   localStorage.setItem("destination", "0")
				   localStorage.setItem("pagebtn", "da")
				   
				   $("#s_arrivo").hide();
				   $("#s_partenza2").show();

				   
				   $("#viale").show();
				   $("#tblviale").show();
				   
				   if(localStorage.getItem("lingua")=="it"){
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   }
				   else if(localStorage.getItem("lingua")=="en"){
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   }
				   else{
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   
				   $("#destinazione").hide();
				   $("#tbldestinazione").hide();
				   
				   /*if(screen.width < 768){
				   $("#da1").html("<img src='img/ico_start3.png' width='55px'>");
				   $("#a1").html("<img src='img/ico_finish2.png' width='45px'>");
				   }
				   else
				   {
				   if(screen.width > 719){
				   $("#da1").html("<img src='img/ico_start3.png' width='110px'>");
				   $("#a1").html("<img src='img/ico_finish2.png' width='90px'>");
				   }
				   else{
				   $("#da1").html("<img src='img/ico_start3.png' width='55px'>");
				   $("#a1").html("<img src='img/ico_finish2.png' width='45px'>");
				   }
				   }*/
				   
				   
				   
				   onResume();
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	$(document).on("touchstart", "#da1", function(e){
				   localStorage.setItem("dovesono", "1");
				   localStorage.setItem("destination", "0")
				   localStorage.setItem("pagebtn", "da")
				   
				   //document.getElementById("datacal").value = "";
				   
				   //$("#Orario").html("<option selected>--</option><option>00</option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option>");
				   //$("#Minuti").html("<option selected>--</option><option>00</option><option>15</option><option>30</option><option>45</option>");
				   
				   //$("#Orario").selectmenu("refresh");
				   //$("#Minuti").selectmenu("refresh");
				   
				   $("#viale").show();
				   $("#tblviale").show();
				   
				   
				   if(localStorage.getItem("lingua")=="it"){
				     $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   }
				   else if(localStorage.getItem("lingua")=="en"){
				     $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				    $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				    $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   }
				   else{
				    $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   

				   $("#destinazione").hide();
				   $("#tbldestinazione").hide();
				   
				   $("#s_arrivo").hide();
				   $("#s_partenza2").show();
				   
				   $("#da1").html("<img src='img/ico_start3.png' width='55px'>");
				   $("#a1").html("<img src='img/ico_finish1.png' width='45px'>");
				  
				   /*if(screen.width < 768){
				     $("#da1").html("<img src='img/ico_start3.png' width='55px'>");
				     $("#a1").html("<img src='img/ico_finish1.png' width='45px'>");

				   }
				   else
				   {
				   if(screen.width > 719){
				     $("#da1").html("<img src='img/ico_start3.png' width='110px'>");
				     $("#a1").html("<img src='img/ico_finish1.png' width='90px'>");
				   }
				   else{
				     $("#da1").html("<img src='img/ico_start3.png' width='55px'>");
				     $("#a1").html("<img src='img/ico_finish2.png' width='45px'>");
				   }
				   }*/
				   
				   
				   
				   //$("#da1").removeClass("bottoni").addClass("bottoni1");
				   //$("#a1").removeClass("bottoni1").addClass("bottoni");
				   setTimeout(function() {
				     $("#ricarica").tap();
				   },2000);
				   //resetta1(1);
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   });
	
	$(document).on("touchstart tap", "#adesso", function(e){
				   localStorage.setItem("dovesono", "1");
                   localStorage.setItem("pagebtn", "da")
				   document.getElementById("datacal").value = "";
				   
				   $("#Orario").html("<option selected>--</option><option>00</option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option>");
				    $("#Minuti").html("<option selected>--</option><option>00</option><option>15</option><option>30</option><option>45</option>");
				   
				    $("#Orario").selectmenu("refresh");
				    $("#Minuti").selectmenu("refresh");
				   
				   
				   localStorage.setItem("destination", "0")
				   
				   $("#viale").show();
				   $("#tblviale").show();
				   
				   
				   
				   if(localStorage.getItem("lingua")=="it"){
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   }
				   else if(localStorage.getItem("lingua")=="en"){
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   }
				   else{
				   $("#viale").attr("placeholder",""+localStorage.getItem("sessionPartenza")+"");
				   
				   }
				   
				   
				   
				   $("#destinazione").hide();
				   $("#tbldestinazione").hide();
				   
				   //$("#da").removeClass("bottoni").addClass("bottoni1");
				   //$("#a").removeClass("bottoni1").addClass("bottoni");
				   
	               onResume();
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   
	});
	
	$(document).on("touchstart", "#quando", function(e){
		localStorage.setItem("dovesono", "1");
				   
		for(i=0; i<10000; i++)
		{
			window.clearInterval(i);
		}
				   
		$("#piu").html("<img src='img/ico_plus1.png' width='45px'>");
		$("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
                   
        ripetiseleziona();
				   
		localStorage.setItem("viale", document.getElementById("viale").value);
		localStorage.setItem("destinazione", document.getElementById("destinazione").value);
				   
				   
		 $("#fuso3").html(localStorage.getItem("fuso") + "," + localStorage.getItem("citta"));
				   
				   
		prendicittaid(localStorage.getItem("citta"))
				   
		
				   /*if(screen.width < 768){
				   $("#quando").html("<img src='img/ico_clock3.png' width='55px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a3").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus1.png' width='45px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
				   
				   
				   }
				   else
				   {
				   if(screen.width > 719){
				   $("#quando").html("<img src='img/ico_clock3.png' width='110px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='90px'>");
				   $("#a3").html("<img src='img/ico_finish1.png' width='90px'>");
				   $("#piu").html("<img src='img/ico_plus1.png' width='90px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='90px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='90px'>");
				   
				   $("#spazioipad").attr("height","90");
				   }
				   else{
				   $("#quando").html("<img src='img/ico_clock3.png' width='45px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a3").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus1.png' width='45px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
				   }
				   }if(screen.width < 768){
				   $("#quando").html("<img src='img/ico_clock3.png' width='55px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a3").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus1.png' width='45px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
				   
				   
				   }
				   else
				   {
				   if(screen.width > 719){
				   $("#quando").html("<img src='img/ico_clock3.png' width='110px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='90px'>");
				   $("#a3").html("<img src='img/ico_finish1.png' width='90px'>");
				   $("#piu").html("<img src='img/ico_plus1.png' width='90px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='90px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='90px'>");
				   
				   $("#spazioipad").attr("height","90");
				   }
				   else{
				   $("#quando").html("<img src='img/ico_clock3.png' width='45px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a3").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus1.png' width='45px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
				   }
				   }*/
				   
		window.location.href = "#home";
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#annulla", function(e){
		$.mobile.changePage ($("#home"));
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	$(document).on("tap", "#indietro4", function(e){
				   
		$("#piu").html("<img src='img/ico_plus1.png' width='45px'>");
	    $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   
		localStorage.setItem("risppass", "")
				   
		window.location.href = "index.html";
        //ripetiseleziona()
				   
		$.mobile.changePage ($("#home"));
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	
	$(document).on("tap", "#offerte", function(e){
		 
		//backgroundGeolocation.start();

		//setTimeout(function() {
		   //bgGeo.start();
		   //backgroundGeolocation.start();
				   
				   
			//bgGeo.start();
		   
		   	localStorage.setItem("dovesono", "3");
			localStorage.setItem("scroller","0")
			localStorage.setItem("nobanner","0")
					   
			prendibanner()
				   
				   /*if(screen.width < 768){
				   $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus3.png' width='55px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
				   
				   
				   }
				   else
				   {
				   if(screen.width > 719){
				   
				   $("#quando4").attr("width", "90px");
				   $("#da4").attr("width", "90px");
				   $("#a4").attr("width", "90px");
				   $("#piu4").attr("width", "90px");
				   $("#anteprima4").attr("width", "90px");
				   $("#offerte44").attr("width", "110px");
				   $("#spazioipadofferte").show();
				   
				   }
				   else{
				   $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus3.png' width='55px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
				   
				   }
				   }*/
				   
			$.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
			//$.mobile.changePage ($("#home4"));
			$("#spinner4").show();
				   
				   /*if(screen.width < 768){
				   $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus1.png' width='45px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offers3.png' width='55px'>");
				   }
				   else
				   {
				   if(screen.width > 719){
				   $("#quando").html("<img src='img/ico_quando1.png' width='90px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='90px'>");
				   $("#a2").html("<img src='img/ico_finish1.png' width='90px'>");
				   $("#piu").html("<img src='img/ico_plus1.png' width='90px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='90px'>");
				   $("#offerte").html("<img src='img/ico_offers3.png' width='110px'>");
				   }
				   else{
				   $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus1.png' width='45px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offers3.png' width='55px'>");
				   }
				   }*/
					   
			vediofferte()
			
	   // }, 500);
				   

		/* myScroll = new IScroll('#wrapper', { click: true });
				   
				   
				   setTimeout (function(){
							   myScroll.refresh();
							   }, 1500);
				   
				   
				   myScroll.on ('scrollStart', function () {
						setTimeout (function(){
							alert();
		 
					});
				   
				   
				   
				   myScroll.on ('scrollEnd', function () {
				      setTimeout (function(){
						alert();
					  }, 1500);
				   });*/


	});
	
	
	
	$(document).on("touchstart", "#piu", function(e){
				   
				   
                   
                   if(localStorage.getItem("lingua")=="it"){
                   
                    var alertattenzione = localStorage.getItem("sessionAttenzione")
                   var alerterrore = localStorage.getItem("sessionErrorrete")
				    var alertstart = localStorage.getItem("sessionStart")
				    var alertend = localStorage.getItem("sessionEnd")
				    $("#notepass").attr("placeholder","Note");
                   
                   }
                   else if(localStorage.getItem("lingua")=="en"){
                   
                    var alertattenzione = localStorage.getItem("sessionAttenzione")
                    var erroreA = localStorage.getItem("sessionErrorrete")
				    var alertstart = localStorage.getItem("sessionStart")
				    var alertend = localStorage.getItem("sessionEnd")
				    $("#notepass").attr("placeholder","Note");
				   
                   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				    var alertattenzione = localStorage.getItem("sessionAttenzione")
				    var alerterrore = localStorage.getItem("sessionErrorrete")
				    var alertstart = "Entrez une adresse de dèpart" //localStorage.getItem("sessionStart")
				    var alertend = "Entrez une adresse de destination" //localStorage.getItem("sessionEnd")
				    $("#notepass").attr("placeholder","Remarque");
				   
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				    var alertattenzione = localStorage.getItem("sessionAttenzione")
				    var alerterrore = localStorage.getItem("sessionErrorrete")
				    var alertstart = localStorage.getItem("sessionStart")
				    var alertend = localStorage.getItem("sessionEnd")
				    $("#notepass").attr("placeholder","Notas");
				   
				   }
				   else{
				   
                    var alertattenzione = localStorage.getItem("sessionAttenzione")
                    var erroreA = localStorage.getItem("sessionErrorrete")
				    var alertstart = "Enter a starting address"
				    var alertend = "Choose the arrival address"
				    $("#notepass").attr("placeholder","Note");
                   
                   }
                   
                   
				   localStorage.setItem("dovesono", "1");
				   document.getElementById("viale3").value = document.getElementById("viale").value;
				   document.getElementById("destinazione3").value = document.getElementById("destinazione").value;
				   
				   
				   if (document.getElementById("viale").value == "") {
					   
					
				    navigator.notification.alert(
												alertstart,  // message
												alertDismissed,         // callback
												alertattenzione,            // title
												'OK'                  // buttonName
												);
												
					$("#da").tap();
				   
				    return;
				   }
				   
				   if (document.getElementById("destinazione3").value == "") {
					   
					   
				    navigator.notification.alert(
												alertend,  // message
												alertDismissed,         // callback
												alertattenzione,            // title
												'OK'                  // buttonName
												);
												
					$("#a1").tap();
				   
				    return;
				   }
				   

				   /*if(screen.width < 768){
				   $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus3.png' width='55px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
				   
				   //$("#spazioipad3").attr("height","70px");
				   
				   }
				   else
				   {
				   if(screen.width > 719){
				   
				   $("#quando3").attr("width", "90px");
				   $("#da3").attr("width", "90px");
				   $("#a23").attr("width", "90px");
				   $("#piu3").attr("width", "110px");
				   $("#anteprima3").attr("width", "90px");
				   $("#offerte3").attr("width", "90px");
				   
				   $("#spazioipad3").show();
				   //$("#spazioipad3").attr("height","130");
				   
				   }
				   else{
				   $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus3.png' width='55px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
				   
				   //$("#piu").html("<img src='img/ico_plus2.png' width='45px'>");
				   //$("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   }
				   }*/


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
				   
				   
				   
				   if(document.getElementById("datacal").value==""){
				     // $("#posticipata").html(" <b><font color='#cc33cc'>Quando: </font></b> Adesso <br>" );
				   }
				   else{
					 // $("#posticipata").html(" <b><font color='#cc33cc'>Quando:</font></b> " + document.getElementById("datacal3").value + "<br> <b><font color='#cc33cc'>Ora:</font></b>" + document.getElementById("orario3").value + " " + document.getElementById("minuti3").value + "<br>");
				   }
				   
				   prendimezzi()
				   
				   setTimeout(function() {
							  
							  myScroll2 = new IScroll('#wrapper2', { click: true });
							  
							  
							  setTimeout (function(){
									myScroll2.refresh();
										  
								}, 500);
							  
							  
							  document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
							  
							  document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
					}, 500);
				   
				   
				   $.mobile.changePage ($("#home3"));
				   
				   
				   
				   $('#notepass').focus(function(){

						myScroll2.scrollToElement("#bluetooth", "1s");
				   });
				   
				   
				   $(document).on("touchmove", function(e){
								  $('#notepass').blur();
								  
								  cordova.plugins.Keyboard.close();
					});
				   
				   
				   
				    //$("#offerte").tap();
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	$(document).on("touchstart", "#a2", function(e){
	localStorage.setItem("dovesono", "1");
	localStorage.setItem("destination", "1")
    localStorage.setItem("pagebtn", "a")
	
	document.getElementById("datacal").value = "";
				   
		$("#Orario").html("<option selected>--</option><option>00</option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option>");
		$("#Minuti").html("<option selected>--</option><option>00</option><option>15</option><option>30</option><option>45</option>");
				   
		$("#Orario").selectmenu("refresh");
		$("#Minuti").selectmenu("refresh");
	
		$("#viale").hide();
		$("#tblviale").hide();
				   
		$("#destinazione").show();
		$("#tbldestinazione").show();
	
		$("#s_partenza2").hide();
		$("#s_arrivo").show();
		
	     onResume();
				   
				   /*if(screen.width < 768){
				   $("#da1").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a1").html("<img src='img/ico_finish3.png' width='55px'>");
				   }
				   else
				   {
				   if(screen.width > 719){
				   $("#da1").html("<img src='img/ico_start1.png' width='90px'>");
				   $("#a1").html("<img src='img/ico_finish3.png' width='110px'>");
				   }
				   else{
				   $("#da1").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a1").html("<img src='img/ico_finish3.png' width='55px'>");
				   }
				   }*/
		 
		 
				   
		setTimeout(function() {
			  $("#ricarica").tap();
	    },2000);

				   
	  e.stopImmediatePropagation();
				   
	  e.preventDefault();
				   
	  return false;
				   
	  if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("touchstart", "#a3", function(e){
				   localStorage.setItem("dovesono", "1");
				   localStorage.setItem("destination", "1")
				   localStorage.setItem("pagebtn", "a")
				   
				   document.getElementById("datacal").value = "";
				   
				   $("#Orario").html("<option selected>--</option><option>00</option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option>");
				   $("#Minuti").html("<option selected>--</option><option>00</option><option>15</option><option>30</option><option>45</option>");
				   
				   $("#Orario").selectmenu("refresh");
				   $("#Minuti").selectmenu("refresh");
				   
				   $("#viale").hide();
				   $("#tblviale").hide();
				   
				   $("#destinazione").show();
				   $("#tbldestinazione").show();
				   
				   $("#s_partenza2").hide();
				   $("#s_arrivo").show();
				   
				   onResume();
				   
				   /*if(screen.width < 768){
				   $("#da1").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a1").html("<img src='img/ico_finish3.png' width='55px'>");
				   }
				   else
				   {
				   if(screen.width > 719){
				   $("#da1").html("<img src='img/ico_start1.png' width='90px'>");
				   $("#a1").html("<img src='img/ico_finish3.png' width='110px'>");
				   }
				   else{
				   $("#da1").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a1").html("<img src='img/ico_finish3.png' width='55px'>");
				   }
				   }*/
				   
				   
				   
				   setTimeout(function() {
							  $("#ricarica").tap();
							  },2000);
				   
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   });
	
	$(document).on("tap", "#a1", function(e){
				   localStorage.setItem("dovesono", "1");
				   localStorage.setItem("destination", "1");
				   localStorage.setItem("pagebtn", "a")
				   
				   $("#viale").hide();
				   $("#tblviale").hide();
				   
				   $("#destinazione").show();
				   $("#tbldestinazione").show();
				   
				   
				   if(localStorage.getItem("lingua")=="it"){
				   $("#destinazione").attr("placeholder",""+localStorage.getItem("sessionArrivo")+"");
				   }
				   else if(localStorage.getItem("lingua")=="en"){
				   $("#destinazione").attr("placeholder",""+localStorage.getItem("sessionArrivo")+"");
				   
				   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				   $("#destinazione").attr("placeholder",""+localStorage.getItem("sessionArrivo")+"");
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				   $("#destinazione").attr("placeholder",""+localStorage.getItem("sessionArrivo")+"");
				   }
				   else{
				   $("#destinazione").attr("placeholder",""+localStorage.getItem("sessionArrivo")+"");
				   
				   }
				   
				   
				   $("#s_partenza2").hide();
				   $("#s_arrivo").show();
				   
				   
				   $("#da1").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a1").html("<img src='img/ico_finish3.png' width='55px'>");
				   
				   
				   /*if(screen.width < 768){
				     $("#da1").html("<img src='img/ico_start1.png' width='45px'>");
				     $("#a1").html("<img src='img/ico_finish3.png' width='55px'>");
				   }
				   else
				   {
				    if(screen.width > 719){
				     $("#da1").html("<img src='img/ico_start1.png' width='90px'>");
				     $("#a1").html("<img src='img/ico_finish3.png' width='110px'>");
				    }
				    else{
				     $("#da1").html("<img src='img/ico_start1.png' width='45px'>");
				     $("#a1").html("<img src='img/ico_finish3.png' width='55px'>");
				    }
				   }*/

				   
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
				    $("#tblviale").hide();
				   
				   $("#destinazione").show();
				   $("#tbldestinazione").show();

				   
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
				   var veicolo = document.getElementById("veicolo7").value.replace("'", "")
				   
                   
                   if(localStorage.getItem("lingua")=="it"){
                   
                    var alertattenzione = localStorage.getItem("sessionAttenzione")
                    var richiestaA = "Richiesta"
                   
                   }
                   else if(localStorage.getItem("lingua")=="en"){
                   
                    var alertattenzione = localStorage.getItem("sessionAttenzione")
                    var richiestaA = "Request"
				   
                   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				    var alertattenzione = localStorage.getItem("sessionAttenzione")
				    var richiestaA = "Demande"
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				    var alertattenzione = localStorage.getItem("sessionAttenzione")
				    var richiestaA = "Solicitud"
				   
				   }
				   else{
				   
                   var alertattenzione = localStorage.getItem("sessionAttenzione")
                   var richiestaA = "Request"
                   
                   }
                   
		
		if(document.getElementById("datacal7").value == "ORA"){
				   
				   
		//alert("http://purplemiles.com/www2/check_richiesta5.php?email="+ localStorage.getItem("emailpass") +"&indirizzo="+ indirizzo +"&indirizzo2="+ destinazione +"&passeggeri="+ passeggeri +"&animali="+ animali +"&fumatori="+ fumatori +"&meno18="+ meno18 +"&disabili="+ disabili +"&bambini="+ bambini +"&wifi="+ wifi +"&portapacchi="+ portapacchi +"&rimorchio="+ rimorchio +"&bluetooth="+ bluetooth +"&fuso="+ localStorage.getItem("citta") +"&ora_cell="+ localStorage.getItem("ora_cell") +"")
                   
		$.ajax({
			   type:"GET",
			   url:"http://purplemiles.com/www2/check_richiesta5.php?email="+ localStorage.getItem("emailpass") +"&indirizzo="+ indirizzo +"&indirizzo2="+ destinazione +"&passeggeri="+ passeggeri +"&animali="+ animali +"&fumatori="+ fumatori +"&meno18="+ meno18 +"&disabili="+ disabili +"&bambini="+ bambini +"&wifi="+ wifi +"&portapacchi="+ portapacchi +"&rimorchio="+ rimorchio +"&bluetooth="+ bluetooth +"&fuso="+ localStorage.getItem("citta") +"&ora_cell="+ localStorage.getItem("ora_cell") +"&note="+ note +"&veicolo="+ veicolo +"",
			   contentType: "application/json",
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $.each(result, function(i,item){
					  
				  if(item.Token==1){
					  $("#spinner7").hide();
					  
					  
					  // CANCELLO CACHE INPUT RICHIESTE //
					  localStorage.setItem("viale", "");
					  localStorage.setItem("destinazione", "");
				   
					  document.getElementById("viale").value = ""
					  document.getElementById("destinazione").value = ""
					  
					  
					  window.location.href = "mappass.html";
					  //////////
					  
					  
					  navigator.notification.alert(
					   alertinvio,
					   alertDismissed,
					   richiestaA,
					   'OK'
					   );
					  
					  //$("#btnofferte").show();
					  //$.mobile.changePage( "#home", { transition: "slide", changeHash: false });
					  
				   
					   $.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
					   localStorage.setItem("dovesono", "3");
					   $("#spinner4").show();
					  
					  
					  
				/*if(screen.width < 768){
				   $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus3.png' width='55px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
				   
				   
				   }
				   else
				   {
				   if(screen.width > 719){
				   
				   $("#quando4").attr("width", "90px");
				   $("#da4").attr("width", "90px");
				   $("#a4").attr("width", "90px");
				   $("#piu4").attr("width", "90px");
				   $("#anteprima4").attr("width", "90px");
				   $("#offerte44").attr("width", "110px");
				   $("#spazioipadofferte").show();
				   
				   }
				   else{
				   $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
				   $("#da").html("<img src='img/ico_start1.png' width='45px'>");
				   $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
				   $("#piu").html("<img src='img/ico_plus3.png' width='55px'>");
				   $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
				   $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
				   
				   }
				   }*/
					  
					  
					  // vediofferte()
					  
					  e.stopImmediatePropagation();
				   
				      e.preventDefault();
				   
				      return false;
				   
				      if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				  }
					  
				});
			   
			   
			   },
			   error: function(){
			   
			     $("#led").html("<img src='img/ledrosso.png' width='25px'>");
			     $("#led2").html("<img src='img/ledrosso.png' width='25px'>");
			     $("#led4").html("<img src='img/ledrosso.png' width='25px'>");
				
				 onResume();
			   
			   },
			   dataType:"jsonp"});
			}
			else{
				   //alert("http://purplemiles.com/www2/check_richiesta_pos.php?email="+ localStorage.getItem("emailpass") +"&indirizzo="+ document.getElementById("viale7").value +"&indirizzo2="+ document.getElementById("destinazione7").value +"&data="+ document.getElementById("datacal7").value +"&ora="+ document.getElementById("Orario").value +"&minuti="+ document.getElementById("Minuti").value +"&passeggeri="+ passeggeri +"&animali="+ animali +"&fumatori="+ fumatori +"&meno18="+ meno18 +"&disabili="+ disabili +"&bambini="+ bambini +"&wifi="+ wifi +"&portapacchi="+ portapacchi +"&rimorchio="+ rimorchio +"&bluetooth="+ bluetooth +"&fuso="+ localStorage.getItem("citta") +"&ora_cell="+ localStorage.getItem("ora_cell") +"&note="+ note +"&veicolo="+ veicolo +"")
				   
				   
					//alert(document.getElementById("datacal7").value)
				   
				   
				   $.ajax({
						  type:"GET",
						  url:"http://purplemiles.com/www2/check_richiesta_pos.php?email="+ localStorage.getItem("emailpass") +"&indirizzo="+ document.getElementById("viale7").value +"&indirizzo2="+ document.getElementById("destinazione7").value +"&data="+ document.getElementById("datacal7").value +"&ora="+ document.getElementById("Orario").value +"&minuti="+ document.getElementById("Minuti").value +"&passeggeri="+ passeggeri +"&animali="+ animali +"&fumatori="+ fumatori +"&meno18="+ meno18 +"&disabili="+ disabili +"&bambini="+ bambini +"&wifi="+ wifi +"&portapacchi="+ portapacchi +"&rimorchio="+ rimorchio +"&bluetooth="+ bluetooth +"&fuso="+ localStorage.getItem("citta") +"&ora_cell="+ localStorage.getItem("ora_cell") +"&note="+ note +"&veicolo="+ veicolo +"",
						  contentType: "application/json",
						  timeout: 7000,
						  jsonp: 'callback',
						  crossDomain: true,
						  success:function(result){
						  
						  $.each(result, function(i,item){
								 
								 if(item.Token==1){
								 $("#spinner7").hide();
								 
								 // CANCELLO CACHE INPUT RICHIESTE //
								  localStorage.setItem("viale", "");
								  localStorage.setItem("destinazione", "");
							   
								  document.getElementById("viale").value = ""
								  document.getElementById("destinazione").value = ""
								  
								  
								  window.location.href = "mappass.html";
								  //////////
									 
								 navigator.notification.alert(
															  alertinvio,
															  alertDismissed,
															  richiestaA,
															  'Ok'
															  );
								 
								 //$("#btnofferte").show();
								 
								 $.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
								 $("#spinner4").show();
								 
								 /*if(screen.width < 768){
								 $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
								 $("#da").html("<img src='img/ico_start1.png' width='45px'>");
								 $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
								 $("#piu").html("<img src='img/ico_plus3.png' width='55px'>");
								 $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
								 $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
								 
								 
								 }
								 else
								 {
								 if(screen.width > 719){
								 
								 $("#quando4").attr("width", "90px");
								 $("#da4").attr("width", "90px");
								 $("#a4").attr("width", "90px");
								 $("#piu4").attr("width", "90px");
								 $("#anteprima4").attr("width", "90px");
								 $("#offerte44").attr("width", "110px");
								 
								 $("#spazioipadofferte").show();
								 
								 }
								 else{
								 $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
								 $("#da").html("<img src='img/ico_start1.png' width='45px'>");
								 $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
								 $("#piu").html("<img src='img/ico_plus3.png' width='55px'>");
								 $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
								 $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
								 
								 }
								 }*/
								 
								 
								 //vediofferte()
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
								 if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
								 }
								 
								 });
						  
						  
						  },
						  error: function(){
						  
						  $("#led").html("<img src='img/ledrosso.png' width='25px'>");
						  $("#led2").html("<img src='img/ledrosso.png' width='25px'>");
						  $("#led4").html("<img src='img/ledrosso.png' width='25px'>");
						  onResume();
						  
						  },
						  dataType:"jsonp"});
				   
			}
		
	});
	
	
	
	$(document).on("touchstart", "#inviarichiesta", function(e){
                   
                   if(localStorage.getItem("lingua")=="it"){
                   
                    var alertattenzione = localStorage.getItem("sessionAttenzione")
                    var inserireA = localStorage.getItem("sessionDatavalida")
                    var orarioA = localStorage.getItem("sessionOrariovalido")
                   
                   }
                   else if(localStorage.getItem("lingua")=="en"){
                   
                    var alertattenzione = localStorage.getItem("sessionAttenzione")
                    var inserireA = localStorage.getItem("sessionDatavalida")
                    var orarioA = localStorage.getItem("sessionOrariovalido")
                   
                   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				    var alertattenzione = localStorage.getItem("sessionAttenzione")
				    var inserireA = localStorage.getItem("sessionDatavalida")
				    var orarioA = localStorage.getItem("sessionOrariovalido")
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				   var alertattenzione = localStorage.getItem("sessionAttenzione")
				   var inserireA = localStorage.getItem("sessionDatavalida")
				   var orarioA = localStorage.getItem("sessionOrariovalido")
				   
				   }
				   else{
				   
                    var alertattenzione = localStorage.getItem("sessionAttenzione")
                    var inserireA = localStorage.getItem("sessionDatavalida")
                    var orarioA = localStorage.getItem("sessionOrariovalido")
				   
                   }
                   
				   
				   if (document.getElementById("datacal").value == "") {
				    navigator.notification.alert(
							inserireA,  // message
							alertDismissed,         // callback
							alertattenzione,            // title
							'OK'                  // buttonName
					);
				   return;
				   }
				   
				   if (document.getElementById("Orario").value == "--") {
				   navigator.notification.alert(
												orarioA,  // message
												alertDismissed,         // callback
												alertattenzione,            // title
												'OK'                  // buttonName
												);
				   return;
				   }
				   
				   if (document.getElementById("Minuti").value == "--") {
				   navigator.notification.alert(
												orarioA,  // message
												alertDismissed,         // callback
												'Data',            // title
												'OK'                  // buttonName
												);
				   return;
				   }
				   
				   localStorage.setItem("destination", "0")
				   localStorage.setItem("dovesono", "1");
				   
				   $("#viale").show();
				   $("#tblviale").show();
				   $("#destinazione").hide();
				   $("#tbldestinazione").hide();
				   
				   $("#piu").html("<img src='img/ico_plus1.png' width='45px'>");
                   

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
                   

                   var datona = yyyy+""+mm+""+dd;
                   var orona = ora;
				   var minutoni = minuti;
				   
                   
                   var testo = document.getElementById("datacal").value;
                   
                   var testo1 = testo.replace('May', '05');
                   var testo2 = testo1.replace('Jun', '06');
                   var testo3 = testo2.replace('Jul', '07');
                   var testo4 = testo3.replace('Aug', '08');
                   var testo5 = testo4.replace('Sep', '09');
                   var testo6 = testo5.replace('Oct', '10');
                   var testo7 = testo6.replace('Nov', '11');
                   var testo8 = testo7.replace('Dec', '12');
                   var testo9 = testo8.replace('Jan', '01');
                   var testo10 = testo9.replace('Feb', '02');
                   var testo11 = testo10.replace('Mar', '03');
                   var testo12 = testo11.replace('Apr', '04');
                   
                   var testo13 = testo12;
                   
                   var testo14 = testo12;
                   
                   
                   var mese2 = testo12.substring(0, 2);
                   var giorno2 = testo13.substring(6, 2);
                   var anno2 = testo14.substring(10, 6);
                   
                   var datona2 = anno2+""+mese2+""+giorno2
				   
				   datona2 = datona2.replace(" ","")
				   
				   var orona2 = document.getElementById("Orario").value
				   var minutoni2 = document.getElementById("Minuti").value
				   
				   var cista;
                   cista = 0;
				   
				   
				   
                   if (parseInt(datona2)<parseInt(datona)) {
				   
				       navigator.notification.alert(
												inserireA,  // message
												alertDismissed,         // callback
												alertattenzione,            // title
												'OK'                  // buttonName
												);
				     return;
				   }
				   

				   
				   if (parseInt(datona2)==parseInt(datona)) {
				   
				     if (parseInt(orona2)<parseInt(orona)) {
					  
				   
				       navigator.notification.alert(
												orarioA,  // message
												alertDismissed,         // callback
												alertattenzione,            // title
												'OK'                  // buttonName
												);
				      return;
				     }
				   

					if (parseInt(orona2)==parseInt(orona)) {
						
						if (parseInt(minutoni2)<parseInt(minutoni)) {
							
						   navigator.notification.alert(
														 orarioA,  // message
														 alertDismissed,         // callback
														 alertattenzione,            // title
														 'OK'                  // buttonName
														 );
				           return;
				   
						}

				   
					}
				   
				   }
				   
	 
				   
				   onResume();
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});


	
	$(document).on("touchstart", "#anteprima", function(e){
		
				
				if(localStorage.getItem("lingua")=="it"){
                   
                    var alertattenzione = localStorage.getItem("sessionAttenzione")
                    var alerterrore = localStorage.getItem("sessionErrorrete")
				    var alertstart = localStorage.getItem("sessionStart")
				    var alertend = localStorage.getItem("sessionEnd")
				    $("#notepass").attr("placeholder","Note");
                   
                   }
                   else if(localStorage.getItem("lingua")=="en"){
                   
                    var alertattenzione = localStorage.getItem("sessionAttenzione")
                    var erroreA = localStorage.getItem("sessionErrorrete")
				    var alertstart = localStorage.getItem("sessionStart")
				    var alertend = localStorage.getItem("sessionEnd")
				    $("#notepass").attr("placeholder","Note");
				   
                   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				    var alertattenzione = localStorage.getItem("sessionAttenzione")
				    var alerterrore = localStorage.getItem("sessionErrorrete")
				    var alertstart = "Entrez une adresse de dèpart" //localStorage.getItem("sessionStart")
				    var alertend = "Entrez une adresse de destination" //localStorage.getItem("sessionEnd")
				    $("#notepass").attr("placeholder","Remarque");
				   
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				    var alertattenzione = localStorage.getItem("sessionAttenzione")
				    var alerterrore = localStorage.getItem("sessionErrorrete")
				    var alertstart = localStorage.getItem("sessionStart")
				    var alertend = localStorage.getItem("sessionEnd")
				    $("#notepass").attr("placeholder","Notas");
				   
				   }
				   else{
				   
                    var alertattenzione = localStorage.getItem("sessionAttenzione")
                    var erroreA = localStorage.getItem("sessionErrorrete")
				    var alertstart = "Enter a starting address"
				    var alertend = "Choose the arrival address"
				    $("#notepass").attr("placeholder","Note");
                   
                   }
                   
                   
                   var veicolando;
                   /// prendo veicolo ////
                   document.getElementById("veicolo7").value = document.getElementById("veicolo11").value;
                   
                   if(localStorage.getItem("lingua")=="it"){
                   if (document.getElementById("veicolo11").value=="Autovettura"){
                   veicolando = "Autovettura"
                   $("#veicolo77").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ localStorage.getItem("h7veicolo") +": </font></b><br>&nbsp;&nbsp; "+ veicolando +"");
                   }
                   }
                   else if(localStorage.getItem("lingua")=="en"){
                   if (document.getElementById("veicolo11").value=="Autovettura"){
                   veicolando = "Car"
                   $("#veicolo77").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ localStorage.getItem("h7veicolo") +": </font></b><br>&nbsp;&nbsp; "+ veicolando +"");
                   }
                   }
                   else if (localStorage.getItem("lingua")=="fr"){
                   if (document.getElementById("veicolo11").value=="Autovettura"){
                   veicolando = "Automobile"
                   $("#veicolo77").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ localStorage.getItem("h7veicolo") +": </font></b><br>&nbsp;&nbsp; "+ veicolando +"");
                   }
                   }
                   else if (localStorage.getItem("lingua")=="es"){
                   if (document.getElementById("veicolo11").value=="Autovettura"){
                   veicolando = "Autom&oacute;vil"
                   $("#veicolo77").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ localStorage.getItem("h7veicolo") +": </font></b><br>&nbsp;&nbsp; "+ veicolando +"");
                   }
                   }
                   else{
                   
                   }
                   
                   
                   $.ajax({
                          type:"GET",
                          url:"http://purplemiles.com/www2/check_Mezzi_Lingua.php?mezzo="+document.getElementById("veicolo11").value+"",
                          contentType: "application/json",
                          //data: {email:email,pin:pin},
                          timeout: 7000,
                          jsonp: 'callback',
                          crossDomain: true,
                          success:function(result){
                          
                          $.each(result, function(i,item){
                                 
                                 if(localStorage.getItem("lingua")=="it"){
                                 veicolando = item.italia;
                                 $("#veicolo77").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ localStorage.getItem("h7veicolo") +": </font></b><br>&nbsp;&nbsp; "+ veicolando +"");
                                 }
                                 if(localStorage.getItem("lingua")=="en"){
                                 veicolando = item.inglese;
                                 $("#veicolo77").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ localStorage.getItem("h7veicolo") +": </font></b><br>&nbsp;&nbsp; "+ veicolando +"");
                                 }
                                 if(localStorage.getItem("lingua")=="fr"){
                                 veicolando = item.francia;
                                 $("#veicolo77").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ localStorage.getItem("h7veicolo") +": </font></b><br>&nbsp;&nbsp; "+ veicolando +"");
                                 }
                                 if(localStorage.getItem("lingua")=="es"){
                                 veicolando = item.spagna;
                                 $("#veicolo77").html("&nbsp;&nbsp;<b><font color='#cc33cc'>"+ localStorage.getItem("h7veicolo") +": </font></b><br>&nbsp;&nbsp; "+ veicolando +"");
                                 }
                                 
                                 });
                          
                          
                          },
                          error: function(){
                          $(".spinner").hide();
                          
                          veicolando = document.getElementById("veicolo11").value
                          $("#veicolo77").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Veicolo </font></b><br>&nbsp;&nbsp; "+ veicolando +"");
                          
                          },
                          dataType:"jsonp"});
                   
                   
                   document.getElementById("viale7").value = document.getElementById("viale").value;
                   document.getElementById("destinazione7").value = document.getElementById("destinazione").value;
                   
                   if (document.getElementById("viale7").value == "") {
                   
                   
                   navigator.notification.alert(
                                                alertstart,  // message
                                                alertDismissed,         // callback
                                                alertattenzione,            // title
                                                'OK'                  // buttonName
                                                );
                   
                   $("#da").tap();
                   
                   return;
                   }
                   
                   if (document.getElementById("destinazione7").value == "") {
                   
                   
                   navigator.notification.alert(
                                                alertend,  // message
                                                alertDismissed,         // callback
                                                alertattenzione,            // title
                                                'OK'                  // buttonName
                                                );
                   
                   $("#a1").tap();
                   
                   return;
                   }
                   
                   
                   /*if(screen.width < 768){
                    $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
                    $("#da").html("<img src='img/ico_start1.png' width='45px'>");
                    $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
                    $("#piu").html("<img src='img/ico_plus3.png' width='55px'>");
                    $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
                    $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
                    
                    }
                    else
                    {
                    if(screen.width > 719){
                    
                    $("#quando7").attr("width", "90px");
                    $("#da7").attr("width", "90px");
                    $("#a27").attr("width", "90px");
                    $("#piu7").attr("width", "90px");
                    $("#anteprima7").attr("width", "110px");
                    $("#offerte7").attr("width", "90px");
                    
                    $("#spazioipad7").attr("height","70");
                    
                    }
                    else{
                    $("#quando").html("<img src='img/ico_quando1.png' width='45px'>");
                    $("#da").html("<img src='img/ico_start1.png' width='45px'>");
                    $("#a2").html("<img src='img/ico_finish1.png' width='45px'>");
                    $("#piu").html("<img src='img/ico_plus3.png' width='55px'>");
                    $("#anteprima").html("<img src='img/ico_go1.png' width='45px'>");
                    $("#offerte").html("<img src='img/ico_offerte1.png' width='45px'>");
                    
                    
                    }
                    }*/
                   
                   
                   
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
                   
                   
                   if(localStorage.getItem("lingua")=="it"){
                   
                   
                   /*if (document.getElementById("veicolo").value === null || document.getElementById("veicolo").value=="null" || typeof(document.getElementById("veicolo").value) == 'undefined' || document.getElementById("veicolo").value==0 || document.getElementById("veicolo").value=="") {
                    
                    //alert(document.getElementById("veicolo7").value)
                    
                    document.getElementById("veicolo7").value = "Autovettura"
                    
                    if (document.getElementById("veicolo7").value=="Autovettura"){
                    var veicolando = "Autovettura"
                    }
                    else {
                    var veicolando = document.getElementById("veicolo7").value
                    }
                    
                    
                    $("#veicolo77").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Veicolo </font></b><br>&nbsp;&nbsp; "+ veicolando +"");
                    
                    }
                    else{
                    
                    
                    document.getElementById("veicolo7").value = document.getElementById("veicolo11").value;
                    
                    if (document.getElementById("veicolo7").value=="Autovettura"){
                    //var veicolando = "Auto/Taxi/NCC"
                    var veicolando = "Autovettura"
                    }
                    else {
                    var veicolando = document.getElementById("veicolo7").value
                    }
                    
                    
                    $("#veicolo77").html("&nbsp;&nbsp;<b><font color='#cc33cc'>Veicolo: </font></b><br>&nbsp;&nbsp; "+ veicolando +"");
                    }*/
                   
                   if(document.getElementById("passeggeri").value!="01"){
                   $("#passeggeri7").html("&nbsp;&nbsp;<font color='#000000'><b>N. Passeggeri:&nbsp; " + document.getElementById("passeggeri").value + "</b></font>");
                   }
                   else{
                   $("#passeggeri7").html("&nbsp;&nbsp;N. Passeggeri:&nbsp; " + document.getElementById("passeggeri").value);
                   }
                   
                   if(document.getElementById("animali").value=="Si"){
                   $("#animali7").html("&nbsp;&nbsp;<font color='#000000'><b>Animale a seguito:&nbsp; " + document.getElementById("animali").value.replace("Si",""+rispopzioni+"") + "</b></font>");
                   }
                   else{
                   $("#animali7").html("&nbsp;&nbsp;Animale a seguito:&nbsp; " + document.getElementById("animali").value.replace("Si",""+rispopzioni+""));
                   }
                   
                   if(document.getElementById("fumatori").value=="Si"){
                   $("#fumatori7").html("&nbsp;&nbsp;<font color='#000000'><b>Fumatori:&nbsp; " + document.getElementById("fumatori").value.replace("Si",""+rispopzioni+"") + "</b></font>");
                   }
                   else{
                   $("#fumatori7").html("&nbsp;&nbsp;Fumatori:&nbsp; " + document.getElementById("fumatori").value.replace("Si",""+rispopzioni+""));
                   }
                   
                   if(document.getElementById("meno18").value=="Si"){
                   $("#meno187").html("&nbsp;&nbsp;<font color='#000000'><b>Minori non accompagnati:&nbsp; " + document.getElementById("meno18").value.replace("Si",""+rispopzioni+"") + "</b></font>");
                   }
                   else{
                   $("#meno187").html("&nbsp;&nbsp;Minori non accompagnati:&nbsp; " + document.getElementById("meno18").value.replace("Si",""+rispopzioni+""));
                   }
                   
                   if(document.getElementById("disabili").value=="Si"){
                   $("#disabili7").html("&nbsp;&nbsp;<font color='#000000'><b>Diversamente abili:&nbsp; " + document.getElementById("disabili").value.replace("Si",""+rispopzioni+"") + "</b></font>");
                   }
                   else{
                   $("#disabili7").html("&nbsp;&nbsp;Diversamente abili:&nbsp; " + document.getElementById("disabili").value.replace("Si",""+rispopzioni+""));
                   }
                   
                   if(document.getElementById("bambini").value=="Si"){
                   $("#bambini7").html("&nbsp;&nbsp;<font color='#000000'><b>Seggiolino per bambini:&nbsp; " + document.getElementById("bambini").value.replace("Si",""+rispopzioni+"") + "</b></font>");
                   }
                   else{
                   $("#bambini7").html("&nbsp;&nbsp;Seggiolino per bambini:&nbsp;" + document.getElementById("bambini").value.replace("Si",""+rispopzioni+""));
                   }
                   
                   if(document.getElementById("wifi").value=="Si"){
                   $("#wifi7").html("&nbsp;&nbsp;<font color='#000000'><b>WiFi:&nbsp; " + document.getElementById("wifi").value.replace("Si",""+rispopzioni+"") + "</b></font>");
                   }
                   else{
                   $("#wifi7").html("&nbsp;&nbsp;WiFi :&nbsp;" + document.getElementById("wifi").value.replace("Si",""+rispopzioni+""));
                   }
                   
                   if(document.getElementById("portapacchi").value=="Si"){
                   $("#portapacchi7").html("&nbsp;&nbsp;<font color='#000000'><b>Portapacchi:&nbsp; " + document.getElementById("portapacchi").value.replace("Si",""+rispopzioni+"") + "</b></font>");
                   }
                   else{
                   $("#portapacchi7").html("&nbsp;&nbsp;Portapacchi :&nbsp;" + document.getElementById("portapacchi").value.replace("Si",""+rispopzioni+""));
                   }
                   
                   if(document.getElementById("rimorchio").value=="Si"){
                   $("#rimorchio7").html("&nbsp;&nbsp;<font color='#000000'><b>Gancio rimorchio:&nbsp; " + document.getElementById("rimorchio").value.replace("Si",""+rispopzioni+"") + "</b></font>");
                   }
                   else{
                   $("#rimorchio7").html("&nbsp;&nbsp;Gancio rimorchio:&nbsp;" + document.getElementById("rimorchio").value.replace("Si",""+rispopzioni+""));
                   }
                   
                   if(document.getElementById("bluetooth").value=="Si"){
                   $("#bluetooth7").html("&nbsp;&nbsp;<font color='#000000'><b>Bluetooth:&nbsp; " + document.getElementById("bluetooth").value.replace("Si",""+rispopzioni+"") + "</b></font>");
                   }
                   else{
                   $("#bluetooth7").html("&nbsp;&nbsp;Gancio rimorchio:&nbsp;" + document.getElementById("bluetooth").value.replace("Si",""+rispopzioni+""));
                   }
                   
                   if(document.getElementById("notepass").value!=""){
                   $("#note7").html("&nbsp;&nbsp;<font color='#000000'><b>Note:&nbsp; " + document.getElementById("notepass").value + "</b></font>");
                   }
                   else{
                   $("#note7").html("&nbsp;&nbsp;Note:&nbsp;" + document.getElementById("notepass").value);
                   }
                   
                   
                   if(document.getElementById("datacal").value==""){
                   $("#posticipata7").html(" &nbsp;&nbsp;<b><font color='#cc33cc'><b>Quando:&nbsp; </font></b><br>&nbsp;&nbsp; Adesso, prima possibile <br><br>" );
                   }
                   else{
                   $("#posticipata7").html(" &nbsp;&nbsp;<b><font color='#cc33cc'>Quando:&nbsp; </font></b><br>&nbsp;&nbsp; " + document.getElementById("datacal7").value + ", <b><font color='#cc33cc'>Ora: </font></b>" + document.getElementById("orario7").value + " " + document.getElementById("minuti7").value + "<br><br>");
                   }
                   
                   
                   
                   $("#viale77").html(" &nbsp;&nbsp;<b><font color='#cc33cc'>Partenza:&nbsp; </font></b><br>&nbsp;&nbsp; "+ document.getElementById("viale").value +" <br><br>" );
                   
                   $("#destinazione77").html("&nbsp;&nbsp; <b><font color='#cc33cc'>Destinazione:&nbsp; </font></b><br>&nbsp;&nbsp; "+ document.getElementById("destinazione").value +" <br><br>" );
                   }
                   
                   else{

                   
                   // QUI ALTRE LINGUE
                   if(document.getElementById("passeggeri").value!="01"){
                   $("#passeggeri7").html("&nbsp;&nbsp;<font color='#000000'><b>"+ localStorage.getItem("h7passeggeri") +":&nbsp; " + document.getElementById("passeggeri").value + "</b></font>");
                   }
                   else{
                   $("#passeggeri7").html("&nbsp;&nbsp;"+ localStorage.getItem("h7passeggeri") +":&nbsp; " + document.getElementById("passeggeri").value);
                   }
                   
                   if(document.getElementById("animali").value=="Si"){
                   $("#animali7").html("&nbsp;&nbsp;<font color='#000000'><b>"+ localStorage.getItem("h7animali") +":&nbsp; " + document.getElementById("animali").value.replace("Si",""+localStorage.getItem("rispopzioni")+"") + "</b></font>");
                   }
                   else{
                   $("#animali7").html("&nbsp;&nbsp;"+ localStorage.getItem("h7animali") +":&nbsp; " + document.getElementById("animali").value.replace("Si",""+localStorage.getItem("rispopzioni")+""));
                   }
                   
                   if(document.getElementById("fumatori").value=="Si"){
                   $("#fumatori7").html("&nbsp;&nbsp;<font color='#000000'><b>"+ localStorage.getItem("h7fumatori") +":&nbsp; " + document.getElementById("fumatori").value.replace("Si",""+localStorage.getItem("rispopzioni")+"") + "</b></font>");
                   }
                   else{
                   $("#fumatori7").html("&nbsp;&nbsp;"+ localStorage.getItem("h7fumatori")  +":&nbsp; " + document.getElementById("fumatori").value.replace("Si",""+localStorage.getItem("rispopzioni")+""));
                   }
                   if(document.getElementById("meno18").value=="Si"){
                   $("#meno187").html("&nbsp;&nbsp;<font color='#000000'><b>"+ localStorage.getItem("h7minori")  +":&nbsp; " + document.getElementById("meno18").value.replace("Si",""+localStorage.getItem("rispopzioni")+"") + "</b></font>");
                   }
                   else{
                   $("#meno187").html("&nbsp;&nbsp;"+ localStorage.getItem("h7minori") +":&nbsp; " + document.getElementById("meno18").value.replace("Si",""+localStorage.getItem("rispopzioni")+""));
                   }
                   
                   if(document.getElementById("disabili").value=="Si"){
                   $("#disabili7").html("&nbsp;&nbsp;<font color='#000000'><b>"+ localStorage.getItem("h7disabili") +":&nbsp; " + document.getElementById("disabili").value.replace("Si",""+localStorage.getItem("rispopzioni")+"") + "</b></font>");
                   }
                   else{
                   $("#disabili7").html("&nbsp;&nbsp;"+ localStorage.getItem("h7disabili") +":&nbsp; " + document.getElementById("disabili").value.replace("Si",""+localStorage.getItem("rispopzioni")+""));
                   }
                   if(document.getElementById("bambini").value=="Si"){
                   $("#bambini7").html("&nbsp;&nbsp;<font color='#000000'><b>"+ localStorage.getItem("h7seggiolino") +":&nbsp; " + document.getElementById("bambini").value.replace("Si",""+localStorage.getItem("rispopzioni")+"") + "</b></font>");
                   }
                   else{
                   $("#bambini7").html("&nbsp;&nbsp;"+ localStorage.getItem("h7seggiolino") +":&nbsp;" + document.getElementById("bambini").value.replace("Si",""+localStorage.getItem("rispopzioni")+""));
                   }
                   
                   if(document.getElementById("wifi").value=="Si"){
                   $("#wifi7").html("&nbsp;&nbsp;<font color='#000000'><b>WiFi :&nbsp;" + document.getElementById("wifi").value.replace("Si",""+localStorage.getItem("rispopzioni")+"") + "</b></font>");
                   }
                   else{
                   $("#wifi7").html("&nbsp;&nbsp;WiFi:&nbsp;" + document.getElementById("wifi").value.replace("Si",""+localStorage.getItem("rispopzioni")+""));
                   }
                   
                   if(document.getElementById("portapacchi").value=="Si"){
                   $("#portapacchi7").html("&nbsp;&nbsp;<font color='#000000'><b>"+ localStorage.getItem("h7pacchi") +":&nbsp; " + document.getElementById("portapacchi").value.replace("Si",""+localStorage.getItem("rispopzioni")+"") + "</b></font>");
                   }
                   else{
                   $("#portapacchi7").html("&nbsp;&nbsp;"+ localStorage.getItem("h7pacchi") +":&nbsp; " + document.getElementById("portapacchi").value.replace("Si",""+localStorage.getItem("rispopzioni")+""));
                   }
                   
                   if(document.getElementById("rimorchio").value=="Si"){
                   $("#rimorchio7").html("&nbsp;&nbsp;<font color='#000000'><b>"+ localStorage.getItem("h7gancio") +":&nbsp; " + document.getElementById("rimorchio").value.replace("Si",""+localStorage.getItem("rispopzioni")+"") + "</b></font>");
                   }
                   else{
                   $("#rimorchio7").html("&nbsp;&nbsp;"+ localStorage.getItem("h7gancio") +":&nbsp; " + document.getElementById("rimorchio").value.replace("Si",""+localStorage.getItem("rispopzioni")+""));
                   }
                   
                   if(document.getElementById("bluetooth").value=="Si"){
                   $("#bluetooth7").html("&nbsp;&nbsp;<font color='#000000'><b>Bluetooth :&nbsp;" + document.getElementById("bluetooth").value.replace("Si",""+localStorage.getItem("rispopzioni")+"") + "</b></font>");
                   }
                   else{
                   $("#bluetooth7").html("&nbsp;&nbsp;Bluetooth :&nbsp;" + document.getElementById("bluetooth").value.replace("Si",""+localStorage.getItem("rispopzioni")+""));
                   }
				   
                   if(localStorage.getItem("lingua")!="fr"){
					   if(document.getElementById("notepass").value!=""){
					   $("#note7").html("&nbsp;&nbsp;<font color='#000000'><b>Note:&nbsp; " + document.getElementById("notepass").value + "</b></font>");
					   }
					   else{
					   $("#note7").html("&nbsp;&nbsp;Note :&nbsp;" + document.getElementById("notepass").value);
					   }
				   }
                   
                   if(document.getElementById("datacal").value==""){
                   $("#posticipata7").html(" &nbsp;&nbsp;<b><font color='#cc33cc'><b>"+ localStorage.getItem("h7quando") +":&nbsp;</font></b><br>&nbsp;&nbsp; "+ localStorage.getItem("h7adesso") +" <br><br>" );
                   }
                   else{
                   $("#posticipata7").html(" &nbsp;&nbsp;<b><font color='#cc33cc'>"+ localStorage.getItem("h7quando") +":&nbsp; </font></b><br>&nbsp;&nbsp; " + document.getElementById("datacal7").value + ", <b><font color='#cc33cc'>Ora: </font></b>" + document.getElementById("orario7").value + " " + document.getElementById("minuti7").value + "<br><br>");
                   }
                   
                   
                   
                   $("#viale77").html(" &nbsp;&nbsp;<b><font color='#cc33cc'>"+ h7partenza +":&nbsp; </font></b><br>&nbsp;&nbsp; "+ document.getElementById("viale").value +" <br><br>" );
                   
                   $("#destinazione77").html("&nbsp;&nbsp; <b><font color='#cc33cc'>"+ h7destinazione +":&nbsp; </font></b><br>&nbsp;&nbsp; "+ document.getElementById("destinazione").value +" <br><br>" );
                   
                   
                   }
                   
                   
                   setTimeout(function() {
                              
                              myScroll3 = new IScroll('#wrapper3', { click: true });
                              
                              
                              setTimeout (function(){
                                          myScroll3.refresh();
                                          
                                          }, 500);
                              
                              
                              document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
                              
                              document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
                              }, 500);
                   
                   
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
	var myScroll;
	var myScroll2;
	var myScroll3;
	

	

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
		
			$("#fuso3").html(localStorage.getItem("fuso") + "," + localStorage.getItem("citta"));
		
		   $("#led").html("<img src='img/ledverde.png' width='25px'>");
		   $("#led2").html("<img src='img/ledverde.png' width='25px'>");
		   $("#led4").html("<img src='img/ledverde.png' width='25px'>");
		
		    //$("#fuso2").html(localStorage.getItem("fuso"));
		    //$("#citta2").html(localStorage.getItem("citta"));
		
            //prendinazione()
		     prendicittaid(localStorage.getItem("citta"))
		
			 //var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
			 //var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
		
			 //localStorage.setItem("lat", lat)
			 //localStorage.setItem("lng", lng)
		
		
			  var watchID = navigator.geolocation.watchPosition(gpsonSuccess, onError2, {maximumAge:600000, timeout:80000, enableHighAccuracy: true});
			 //var watchID = navigator.geolocation.getCurrentPosition(gpsonSuccess, gpsonError, {timeout: 30000, enableHighAccuracy: true, maximumAge: 90000 });
			 
			 ripetiseleziona();
		
		/////// GEO TRAKER IOS//////
		
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
				   url:"http://purplemiles.com/www2/check_richiesta_passeggeroV3.php?email="+ localStorage.getItem("emailpass") +"&id_passeggero="+ localStorage.getItem("id_pass") +"&latitudine="+ location.latitude +"&longitudine="+ location.longitude +"&trakka=1",
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
		
		/////// FINE GEO TRAKER IOS//////////
		
		
		/////// GEO TRAKER ANDROID//////
		
		window.navigator.geolocation.getCurrentPosition(function(location) {
			console.log('Location from Phonegap');
		});
		
		
		var callbackFn = function(location) {
			//console.log('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);
			
			
			$.ajax({
				   type:"GET",
				   url:"http://purplemiles.com/www2/check_richiesta_passeggeroV3.php?email="+ localStorage.getItem("emailpass") +"&id_passeggero="+ localStorage.getItem("id_pass") +"&latitudine="+ location.latitude +"&longitudine="+ location.longitude +"&trakka=1&bck=1",
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

				//backgroundGeolocation.finish();
		};
		
		
		var failureFn = function(error) {
			console.log('BackgroundGeoLocation error');
		}
		
		
		backgroundGeolocation.configure(callbackFn, failureFn, {
			desiredAccuracy: 10,
			stationaryRadius: 50,
			distanceFilter: 50,
			locationProvider: backgroundGeolocation.provider.ANDROID_ACTIVITY_PROVIDER,
			interval: 10000,
			fastestInterval: 5000,
			activitiesInterval: 10000,
			//debug: true,
			notificationTitle: 'Background tracking',
			notificationText: 'enabled',
			notificationIconColor: '#FEDD1E',
			notificationIconLarge: 'mappointer_large',
			notificationIconSmall: 'mappointer_small'
			
		});
		
		
		/////// FINE GEO TRAKER ANDROID//////////

		    localStorage.setItem("scroller","0")
		
			controllaofferte()
		
			controllachat(1)
    
}
    
    else{
		$("#led").html("<img src='img/ledrosso.png' width='25px'>");
		$("#led2").html("<img src='img/ledrosso.png' width='25px'>");
		$("#led4").html("<img src='img/ledrosso.png' width='25px'>");
		
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
	controlUI.style.marginBottom = '10px';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Click to recenter the map';
	controlUI.style.height = '30px';
	controlUI.style.width = '100%';
	//controlUI.style.display = 'none';
	controlDiv.appendChild(controlUI);
	
	// Set CSS for the control interior.
	var controlText = document.createElement('div');
	controlText.style.color = 'rgb(25,25,25)';
	controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
	controlText.style.fontSize = '12px';
	controlText.style.lineHeight = '15px';
	controlText.style.paddingLeft = '5px';
	controlText.style.paddingRight = '5px';
	//controlText.innerHTML = '<table width="100%" class="xalto" border="0"><tr><td align="right">&nbsp;<br><br><br></td></tr></table><table width="100%" border="0" valign="center" align="center" ><tr><td align="center" ><a id="quando" href="#"><img src="img/ico_quando1.png" width="45px"></a></td><td align="center" ><a id="da1" href="#"><img src="img/ico_start3.png" width="55px"></a></td><td align="center" ><a id="a1" href="#"><img src="img/ico_finish1.png" width="45px"></a></td><td align="center" ><a id="piu" href="#"><img src="img/ico_plus1.png" width="45px"></a></td><td align="center" ><a id="anteprima" href="#" ><img src="img/ico_anteprima1.png" width="45px"></td><td align="center" ><a id="offerte" href="#" ><img src="img/ico_offerte1.png" width="45px"></a></td></tr><tr><td align="center" valign="center" colspan="6"><table border="0" width="100%" align="center" valign="center" class="bannertbl"><tr><td align="center" valign="center">&nbsp;<br></td></tr></table><table border="0" width="100%" align="center" valign="center" class="bannertbl2"><tr><td align="center" valign="center">&nbsp;<font size="4" color="#fff"><div id="s_partenza2" valign="center"><b>Scegli la partenza</b><br></div><div id="s_arrivo" style="display:none" valign="center"><b>Scegli l\'arrivo</b></div></font><br></td></tr></table><table border="0" width="100%" align="right" valign="top" class="bannertbl3"><tr><td align="right" valign="top">&nbsp;&nbsp;<a id="XX3" href="#" rel="external"><img src="img/ico_close1.png" width="45px"></a></td></tr></table>';
	
	
	//if(screen.width < 768){
		controlText.innerHTML = '<br><table width="100%" border="0" valign="center" align="center" ><tr><td align="center" ><a id="quando" href="#"><img src="img/ico_quando1.png" width="45px"></a></td><td align="center" ><a id="da1" href="#"><img src="img/ico_start3.png" width="55px"></a></td><td align="center" ><a id="a1" href="#"><img src="img/ico_finish1.png" width="45px"></a></td><td align="center" ><a id="piu" href="#"><img src="img/ico_plus1.png" width="45px"></a></td><td align="center" ><a id="anteprima" href="#" ><img src="img/ico_go1.png" width="45px"></td><td align="center" ><a id="offerte" href="#" ><img src="img/ico_offerte1.png" width="45px"></a></td></tr><tr><td align="center" valign="center" colspan="6">';
	/*}
	else
	{
		if(screen.width > 719){
			controlText.innerHTML = '<br><table width="100%" border="0" valign="center" align="center" ><tr><td align="center" width="16%"><a id="quando" href="#"><img src="img/ico_quando1.png" width="85px"></a></td><td align="center"  width="16%"><a id="da1" href="#"><img src="img/ico_start3.png" width="105px"></a></td><td align="center" width="16%"><a id="a1" href="#"><img src="img/ico_finish1.png" width="85px"></a></td><td align="center" width="16%"><a id="piu" href="#"><img src="img/ico_plus1.png" width="85px"></a></td><td align="center" ><a id="anteprima" href="#" ><img src="img/ico_go1.png" width="85px"></td><td align="center" width="16%"><a id="offerte" href="#" ><img src="img/ico_offerte1.png" width="85px"></a></td></tr><tr><td align="center" valign="center" colspan="6"></tr>';
		}
		else{
			controlText.innerHTML = '<br><table width="100%" border="0" valign="center" align="center" ><tr><td align="center" ><a id="quando" href="#"><img src="img/ico_quando1.png" width="45px"></a></td><td align="center" ><a id="da1" href="#"><img src="img/ico_start3.png" width="55px"></a></td><td align="center" ><a id="a1" href="#"><img src="img/ico_finish1.png" width="45px"></a></td><td align="center" ><a id="piu" href="#"><img src="img/ico_plus1.png" width="45px"></a></td><td align="center" ><a id="anteprima" href="#" ><img src="img/ico_go1.png" width="45px"></td><td align="center" ><a id="offerte" href="#" ><img src="img/ico_offerte1.png" width="45px"></a></td></tr><tr><td align="center" valign="center" colspan="6">';
		}
	}*/
	

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
	if((localStorage.getItem("pagebtn") != "da") && (localStorage.getItem("pagebtn") != "a")){
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
	
	else {
		
		if ( key == null ) {
			keycode = event.keyCode;
			
		} else {
			keycode = key.keyCode;
		}
		
		if (keycode ==13){
			    if((localStorage.getItem("pagebtn")=="da") || (localStorage.getItem("pagebtn")=="a")){
				setTimeout(function() {
					
					/*navigator.notification.alert(
						'Tocca il mirino',  // message
						 alertDismissed,         // callback
						 'Mirino',            // title
						 'OK'                  // buttonName
					);*/
						   
					$("#ricarica").tap();
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
                     
                     if(localStorage.getItem("lingua")=="it"){
                     
                      var alertattenzione = localStorage.getItem("sessionAttenzione")
                      var posizioneA = localStorage.getItem("sessionNonrilevare")
                      var orarioA = "Inserire un orario valido"
                     
                     }
                     else if(localStorage.getItem("lingua")=="en"){
                     
                      var alertattenzione = localStorage.getItem("sessionAttenzione")
                      var posizioneA = "I can not detect your location"
                      var orarioA = "Enter a valid time"
                     
                     }
					 else if(localStorage.getItem("lingua")=="fr"){
					 
					  var alertattenzione = localStorage.getItem("sessionAttenzione")
					  var posizioneA = localStorage.getItem("sessionNonrilevare")
					  var orarioA = "Entrer une heure valide"
					 
					 }
					 else if(localStorage.getItem("lingua")=="es"){
					 
					  var alertattenzione = localStorage.getItem("sessionAttenzione")
					  var posizioneA = localStorage.getItem("sessionNonrilevare")
					  var orarioA = "Introduzca una hora válida"
					 
					 }
					 else{
					 
                      var alertattenzione = localStorage.getItem("sessionAttenzione")
                      var posizioneA = localStorage.getItem("sessionNonrilevare")
                      var orarioA = "Enter a valid time"
                     }
                     
                     
					 navigator.notification.alert(
												  posizioneA,  // message
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
                     
					 if(localStorage.getItem("lingua")=="it"){
					 
					 var alertattenzione = localStorage.getItem("sessionAttenzione")
					 var posizioneA = localStorage.getItem("sessionNonrilevare")
					 var orarioA = "Inserire un orario valido"
					 
					 }
					 else if(localStorage.getItem("lingua")=="en"){
					 
					 var alertattenzione = localStorage.getItem("sessionAttenzione")
					 var posizioneA = localStorage.getItem("sessionNonrilevare")
					 var orarioA = "Enter a valid time"
					 
					 }
					 else if(localStorage.getItem("lingua")=="fr"){
					 
					 var alertattenzione = localStorage.getItem("sessionAttenzione")
					 var posizioneA = localStorage.getItem("sessionNonrilevare")
					 var orarioA = "Entrer une heure valide"
					 
					 }
					 else if(localStorage.getItem("lingua")=="es"){
					 
					 var alertattenzione = localStorage.getItem("sessionAttenzione")
					 var posizioneA = localStorage.getItem("sessionNonrilevare")
					 var orarioA = "Introduzca una hora válida"
					 
					 }
					 else{
					 
					 var alertattenzione = localStorage.getItem("sessionAttenzione")
					 var posizioneA = localStorage.getItem("sessionNonrilevare")
					 var orarioA = "Enter a valid time"
					 }
					 
					 navigator.notification.alert(
												  posizioneA,  // message
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
	//backgroundGeolocation.stop();
	
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
	
	if(connectionStatus=='online'){
	
	setTimeout(function() {
			   
		$("#led").html("<img src='img/ledverde.png' width='25px'>");
		$("#led2").html("<img src='img/ledverde.png' width='25px'>");
		$("#led4").html("<img src='img/ledverde.png' width='25px'>");
			   

	  //$.mobile.changePage( "#win2", { transition: "slide", changeHash: false });
		if (localStorage.getItem("dovesono")=="3"){
			   for(i=0; i<10000; i++)
			   {
			     window.clearInterval(i);
			   }
			   
			   window.location.href = "mappass.html";
			   
			   
			   $("#viale").show();
			   $("#tblviale").show();
			   $("#destinazione").hide();
			   $("#tbldestinazione").hide();
			   
			   
			   $.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
			   
			   $("#spinner4").show();
			   
			   
			   //vediofferte()
			  
			   
		}
		
		else{
			   for(i=0; i<10000; i++)
			   {
			     window.clearInterval(i);
			   }
			   
			   $("#viale").show();
			   $("#tblviale").show();
			   $("#destinazione").hide();
			   $("#tbldestinazione").hide();
			   
		      resetta1(1);
		}
			   
			   
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
		
	$("#led").html("<img src='img/ledverde.png' width='25px'>");
	$("#led2").html("<img src='img/ledverde.png' width='25px'>");
	$("#led4").html("<img src='img/ledverde.png' width='25px'>");
		

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
    $content.height (getRealContentHeight()+30);
                                                              
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
			
			codeLatLng(lat,lng);
		}
		
	}
	else{
		
		if (localStorage.getItem("destinazione") === null || localStorage.getItem("destinazione")=="null" || typeof(localStorage.getItem("destinazione")) == 'undefined' || localStorage.getItem("destinazione")==0 || localStorage.getItem("destinazione")=="") {
			
			codeLatLng(lat,lng);
			
		}
		else{
			
			//alert("dest")
			
			document.getElementById("destinazione").value = localStorage.getItem("destinazione");
			
			codeLatLng(lat,lng);
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
								  
	});

	
	function placeMarker(position, map) {
		
		//if(localStorage.getItem("tappato")=="0"){
		//if (isTabHolded){
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
			
			isTabHolded=false
			localStorage.setItem("tappato", "1")
		//}
	 //}
   }
		
	
	//---------------------------
	

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
				  $("#led").html("<img src='img/ledrosso.png' width='25px'>");
				  $("#led2").html("<img src='img/ledrosso.png' width='25px'>");
				  $("#led4").html("<img src='img/ledrosso.png' width='25px'>");
				  
				  }
				  });
		   
		   
		   },
		   error: function(){
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led2").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led4").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   },
		   dataType:"jsonp"});
	
}

function controllaofferte(){
    
    $("#spinner").show();
    $.ajax({
           type:"GET",
           url:"http://purplemiles.com/www2/check_richiesta_passeggeroV3.php?email="+ localStorage.getItem("emailpass") +"&id_passeggero="+ localStorage.getItem("id_pass") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"&bck=0",
           contentType: "application/json",
           //data: {ID: "Lazio"}, LIMIT 10
           timeout: 7000,
           jsonp: 'callback',
           crossDomain: true,
           success:function(result){
           
           $.each(result, function(i,item){
                if(item.Token==1){
                  
                  setTimeout( function() {
					  
					 $("#offerte").tap();
					 
					//localStorage.setItem("nobanner","0")
					//prendibanner()
							 
                    //$.mobile.changePage( "#home4", { transition: "slide", changeHash: false });
							 

					//setTimeout(function() {
					   //bgGeo.start();
					   //vediofferte()
					//}, 500);
							 

							 //
							 
							 /*var myScroll2;
							 
							 myScroll2 = new IScroll('#wrapper',{
													 click: true,
													 probeType:2,
													 bounceTime: 250,
													 bounceEasing: 'quadratic',
													 mouseWheel:false,
													 scrollbars:true,
													 fadeScrollbars:true,
													 interactiveScrollbars:false
													 });
							 
							 setTimeout (function(){
								myScroll2.refresh();
							 }, 1500);*/
							 
							 //
							 
                    $("#spinner").hide();
                  }, 1000 );
                  
                }
           });

           
           },
           error: function(){
           
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led2").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led4").html("<img src='img/ledrosso.png' width='25px'>");
		   
           vediofferte();
           
           },
    dataType:"jsonp"});
    
    
}


function vediofferte(){
	
	$("#timer2").show();
	//alert("Vedo");
	var somma;
	var tempistica;
	var conta = 0;
	
	if(localStorage.getItem("nobanner")=="0"){
	
	   prendibanner()
	}
	
	
	
	localStorage.setItem("tempor","0")
	
	for(i=0; i<10000; i++)
	{
		window.clearInterval(i);
	}
	
	
	//alert();
	

	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_passeggeroV3.php?email="+ localStorage.getItem("emailpass") +"&id_passeggero="+ localStorage.getItem("id_pass") +"&latitudine="+ localStorage.getItem("lat3") +"&longitudine="+ localStorage.getItem("lng3") +"&trakka=1&bck=0",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
			   
		   $("#led").html("<img src='img/ledverde.png' width='25px'>");
		   $("#led2").html("<img src='img/ledverde.png' width='25px'>");
		   $("#led4").html("<img src='img/ledverde.png' width='25px'>");
		   
		   if(localStorage.getItem("risppass")===JSON.stringify(result)){
			   $("#spinner4").hide();
		   }
		   else{
		    $("#offerte4").html("");
		    $("#spinner4").hide();
		    localStorage.setItem("risppass", JSON.stringify(result))
		   
		   //
		   
		   /*var myScroll2;
		   
		   myScroll2 = new IScroll('#wrapper',{
								   click: true,
								   probeType:2,
								   bounceTime: 250,
								   bounceEasing: 'quadratic',
								   mouseWheel:false,
								   scrollbars:true,
								   fadeScrollbars:true,
								   interactiveScrollbars:false
								   });
		   
		   setTimeout (function(){
					   myScroll2.refresh();
					   }, 1500);*/
		   
		   //In arrivo tra : "+ item.tempo +" minuti
		   
		   //
		   
		    $.each(result, function(i,item){

				  
				if(item.Token==1){
				  
				   var contanick = item.nick.length;
				   var nuovonick;
				   
				   if(contanick <= 12){
				   
				   nuovonick = item.nick
				   
				   }
				   else{
				   nuovonick = item.nick.slice(0,10)
				   nuovonick = nuovonick + ".."
				   
				   }

				   
				  if((item.importo==0)||(item.importo=="GRATIS")){
				   
					somma = localStorage.getItem("sessionGratis")
				   
				  }
				  else{
				
				   
				   if(item.importo=="OFFERTA LIBERA"){
					somma = localStorage.getItem("sessionOfferta")
				   }
				   else{
					somma = item.importo;
				   }

				   }
				   
				   if(item.posticipata==0){
				     tempistica = "<table><tr><td><b><div>"+localStorage.getItem("sessionTempo")+" </div></b></td><td><b> " + item.tempo + " </b></td><td><div id='h4minuti'>"+localStorage.getItem("sessionMinuti")+"</div></td></tr></table>";
				   }
				   else{
				     tempistica = "<div id='h4confermato'>"+localStorage.getItem("sessionConfermato")+"</div>";
				   }
				  
				  
				  if(item.stato==2){
				  
				  
				  if(item.accettata==1){
				  
				    if(item.cell!=""){
				    $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='right' width='60%'><div class='custom-pass2' align='center'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"' href='' class='linkchat'><font color='#fff'>"+ nuovonick +" "+ item.percentuale +"%</font></a></div></td><td align='left' width='40%'><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></tr><tr><td align='center' colspan='2'><br><font color='#cc33cc' size='4'><b><p>"+localStorage.getItem("sessionAccettazione")+"</p></b></font><br></td></tr><tr><td align='left' colspan='2'><font color='#cc33cc' size='5'><b><div id='timer2'></div></b></font><b>"+ tempistica +"</b><table><tr><td><b><p>"+localStorage.getItem("sessionPrezzo")+":</p> </b></td><td>"+ somma +"</td></tr><tr><td><b><p>"+localStorage.getItem("sessionQuando")+": </p></td><td> </b>"+ item.quando +" </td><td><b><p>"+localStorage.getItem("sessionOra")+": </p></td><td> </b>"+ item.ora +"</td></tr></table><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionPartenza")+": </p></b></td><td> "+ item.partenza +"</td></tr></table><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionArrivo")+": </p> </b></td><td>"+ item.arrivo +"</td></tr></table><table><tr><td><b>"+localStorage.getItem("sessionNote")+": </b></td><td>"+ item.note_autista +"</td></tr></table></td></tr><tr><td align='center' colspan='2'><br><a id='cell"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' ><img src='img/ico_telephone.png' width='50'></a>&nbsp;&nbsp;<a id='chat"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' ><img src='img/chat.png' width='50'></a>&nbsp;&nbsp;<a id='rifiuta2"+ item.id_richiesta +"_"+ item.id_autista +"' href='#'><img src='img/ico_feedback.png' width='50'></a></td></tr><tr><td align='center' colspan='2'><br><table><tr><td><b><p>"+localStorage.getItem("sessionCommento")+"</p></td><td> "+ item.cod_passeggero +"</b></td></tr></table></td></tr><tr><td align='center' colspan='2'>&nbsp;&nbsp;</td></tr><tr><td align='center' colspan='2'></td></tr></table>");
                   
                   seleziona();
				    }
				    else{
				      $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='right' width='60%'><div class='custom-pass2' align='center'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"' href='' class='linkchat'><font color='#fff'>"+ nuovonick +" "+ item.percentuale +"%</font></a></div></td><td align='left' width='40%'><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></tr><tr><td align='center' colspan='2'>&nbsp;&nbsp;<font color='#cc33cc' size='4'><b><p>"+localStorage.getItem("sessionAccettazione")+"</p></b></font></td></tr><tr><td align='left' colspan='2'><font color='#cc33cc' size='5'><b><div id='timer2'></div></b></font><br><b>"+ tempistica +"</b><table><tr><td><b><p>"+localStorage.getItem("sessionPrezzo")+":</p> </b></td><td>"+ somma +"</td></tr><tr><td><b><p>"+localStorage.getItem("sessionQuando")+": </p></td><td> </b>"+ item.quando +" </td><td><b><p>"+localStorage.getItem("sessionOra")+": </p></td><td> </b>"+ item.ora +"</td></tr></table><table><tr><td valign='top'><b><p >"+localStorage.getItem("sessionPartenza")+": </p></b></td><td> "+ item.partenza +"</td></tr></table><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionArrivo")+": </p> </b></td><td>"+ item.arrivo +"</td></tr></table><table><tr><td><b>"+localStorage.getItem("sessionNote")+": </b></td><td>"+ item.note_autista +"</td></tr></table></td></tr><tr><td align='center' colspan='2'><br><a id='chat"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' ><img src='img/chat.png' width='50'></a>&nbsp;&nbsp;<a id='rifiuta2"+ item.id_richiesta +"_"+ item.id_autista +"' href='#'><img src='img/ico_feedback.png' width='50'></a></td></tr><tr><td align='center' colspan='2'><table><tr><td><b><p>"+localStorage.getItem("sessionCommento")+"</p></td><td> "+ item.cod_passeggero +"</b></td></tr></table></td></tr><tr><td align='center' colspan='2'>&nbsp;&nbsp;</td></tr><tr><td align='center' colspan='2'></td></tr></table>");
                   
                   seleziona();
					}
				  
				  
				   if (localStorage.getItem("risppass")!="null" || typeof(localStorage.getItem("risppass")) != 'undefined' || localStorage.getItem("risppass")!=0 || localStorage.getItem("risppass")!="") {
				     playAudio('successArrivo');
				   }
				  
				   //<tr><td align='center'><a id='rifiuta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>RIFIUTA</font></a></td></tr>
				  }
				  else{
                   
                   
				    $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='right' width='60%'><div class='custom-pass11' align='center'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"' href=''class='linkchat'><font color='#fff'>"+ nuovonick +" "+ item.percentuale +"%</font></a></div></td><td align='left' width='40%'><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></tr><tr><td align='center' colspan='2'><font color='#cc33cc' size='5'><b><div id='timer2' style='display:none'></div></b></font><br>&nbsp;&nbsp;<font color='#cc33cc' size='3'><b>&nbsp;<div>"+localStorage.getItem("sessionAttendere")+"</div></font><font color='#cc33cc' size='2'><div id='puntini' class='loading'>L'autista sta valutando la richiesta</div></b></font></td></tr><tr><td align='left' colspan='2'>&nbsp;&nbsp;<b>"+ tempistica +"</b><table><tr><td><b><p>"+localStorage.getItem("sessionPrezzo")+":</p> </b></td><td>"+ somma +"</td></tr><tr><td><b><p>"+localStorage.getItem("sessionQuando")+" </p></td><td> </b>"+ item.quando +": </td><td><b><p>"+localStorage.getItem("sessionOra")+": </p></td><td> </b>"+ item.ora +"</td></tr></table><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionPartenza")+": </p></b></td><td> "+ item.partenza +"</td></tr></table><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionArrivo")+": </p> </b></td><td>"+ item.arrivo +"</td></tr></table><table><tr><td><b>"+localStorage.getItem("sessionNote")+": </b></td><td>"+ item.note_autista +"</td></tr></table><br></td></tr><tr><td align='center' colspan='2'><a id='elimina"+ item.id_richiesta +"_"+ item.id_autista +"' href='#'><font color='#fff'><img src='img/ico_trash.png' width='45'></font></a></td></tr><tr><td align='center' colspan='2'></td></tr></table>");
                   
                   seleziona();
					
					//<a id='accetta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4'><font color='#fff'>ACCETTA</font></a>&nbsp;&nbsp;    class='loading'
				  }
				  
				    $(document).on("touchstart", "#accetta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
					  accettaofferta(2,item.id_richiesta,item.id_autista)
					  if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				    });
					
					$(document).on("touchstart", "#elimina"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						elimina3(item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
					});
					
				  
					$(document).on("touchstart", "#rifiuta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						
						var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								   
						feedofferta(item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				    });
				  
				   $(document).on("touchstart", "#rifiuta2"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
							var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								 
							feedofferta(item.id_richiesta,item.id_autista)
								  
							if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
								  
					});
				  
				  $(document).on("touchstart", "#chat"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
				    localStorage.setItem("chatpass", "")
                                 
                                 if(localStorage.getItem("lingua")=="it"){
                                 
                                 $("#chattext").attr("placeholder", ""+localStorage.getItem("sessionInsmessaggio")+"");
                                 
                                 }
                                 else if(localStorage.getItem("lingua")=="en"){
                                 
                                 $("#chattext").attr("placeholder", ""+localStorage.getItem("sessionInsmessaggio")+"");
                                 
                                 }
                                 else if(localStorage.getItem("lingua")=="fr"){
                                 
                                 $("#chattext").attr("placeholder", ""+localStorage.getItem("sessionInsmessaggio")+"");
                                 
                                 }
                                 else if(localStorage.getItem("lingua")=="es"){
                                 
                                 $("#chattext").attr("placeholder", ""+localStorage.getItem("sessionInsmessaggio")+"");
                                 
                                 }
                                 else{
                                 
                                 $("#chattext").attr("placeholder", ""+localStorage.getItem("sessionInsmessaggio")+"");
                                 
                                 }
                                 
					$("#btnpanel").click();
					
					chatting(item.id_richiesta)
								 
					if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				  });
				  
				  
				  $(document).on("touchstart", "#cell"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						window.location.href = "tel:+39"+item.cell+"";
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
					});
				  
				  
				  
				  $(document).on("tap", "#linkpass"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
								 
					var ref = window.open('http://www.purplemiles.com/www/profilo_autista.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								 
					e.stopImmediatePropagation();
								 
					e.preventDefault();
								 
					return false;
								 
					});
				  
				  $(document).on("tap", "#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
								 
						var ref = window.open('http://www.purplemiles.com/www/feedback_autista.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								 
								 
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
				   
				   

				   localStorage.setItem("tempor","1")
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
					 localStorage.setItem("tempor","0")
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
				   
				   
				   if(localStorage.getItem("lingua")=="it"){
				   
				    var accetta="ACCETTA"
				    var cancella = "CANCELLA"
				   
				   }
				   else if(localStorage.getItem("lingua")=="en"){
				   
				   $("#chattext").attr("placeholder", "Write a message");
				   
				   var accetta="ACCEPT"
				   var cancella = "CANCEL"
				   
				   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				   $("#chattext").attr("placeholder", "Ecrire un message");
				   
				   var accetta="ACCEPTER"
				   var cancella = "&Eacute;LIMINER"
				   
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				   $("#chattext").attr("placeholder", "Escribir mensaje");
				   
				   var accetta="ACEPTA"
				   var cancella = "CANCELA"
				   
				   }
				   else{
				   
				   $("#chattext").attr("placeholder", "Write a message");
				   
				   }
				   
				   
				   //
				   if(item.accettata==1 && item.stato==3){
				   
				   $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='right' width='60%'><div class='custom-pass11' align='center'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"' href='' class='linkchat'><font color='#fff'>"+ nuovonick +" "+ item.percentuale +"%</font></a></div></td><td align='left' width='40%'><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></tr><tr><td align='center' colspan='2'>&nbsp;&nbsp;<font color='#cc33cc' size='4'><b><p>"+localStorage.getItem("sessionRifiutata")+"</p></b></font></td></tr><tr><td align='left' colspan='2'>&nbsp;&nbsp;<b>"+ tempistica +"</b><table><tr><td><b><p>"+localStorage.getItem("sessionPrezzo")+":</p> </b></td><td>"+ somma +"</td></tr></table><table><tr><td><b><p>"+localStorage.getItem("sessionQuando")+": </p></td><td> </b>"+ item.quando +" </td><td><b><p>"+localStorage.getItem("sessionOra")+":</b></p></td><td> "+ item.ora +"</td></tr></table><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionPartenza")+": </p></b></td><td> "+ item.partenza +"</td></tr></table><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionArrivo")+": </p> </b></td><td>"+ item.arrivo +"</td></tr></table><table><tr><td><b>"+localStorage.getItem("sessionNote")+": </b></td><td>"+ item.note_autista +"</td></tr></table></td></tr><tr><td align='center' colspan='2'><br><table><tr><td><b><p>"+localStorage.getItem("sessionCommento")+"</p> </d><td>"+ item.cod_passeggero +"</b></td></tr></table><br><a id='rifiuta2"+ item.id_richiesta +"_"+ item.id_autista +"' href='#'><img src='img/ico_feedback.png' width='50'></a>&nbsp;&nbsp;<a id='elimina"+ item.id_richiesta +"_"+ item.id_autista +"' href='#'><img src='img/ico_trash.png' width='50'></a></td></tr><tr><td align='center' colspan='2'></td></tr></table>");
                   
                   seleziona();
				   
				   $(document).on("touchstart", "#accetta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						accettaofferta(2,item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
					});
				   
				   $(document).on("touchstart", "#elimina"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						elimina3(item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
					});
				   
				   $(document).on("touchstart", "#rifiuta2"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								  
						var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								  
						feedofferta(item.id_richiesta,item.id_autista)
								  
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
								  
					});
				   
				   
				   $(document).on("tap", "#linkpass"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								  
								
						var ref = window.open('http://www.purplemiles.com/www/profilo_autista.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								  
						e.stopImmediatePropagation();
								  
						e.preventDefault();
								  
						return false;
								  
					});
				   
				   
				   $(document).on("tap", "#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								  
							//http://www.purplemiles.com/www/profilo_passeggero.php?idp=19&ida="+localStorage.getItem("id_autista")+"&pm="+localStorage.getItem("md5")+"
								  
							var ref = window.open('http://www.purplemiles.com/www/feedback_autista.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								  
								  
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
				   
				   
				   if (localStorage.getItem("risppass")!="null" || typeof(localStorage.getItem("risppass")) != 'undefined' || localStorage.getItem("risppass")!=0 || localStorage.getItem("risppass")!="") {
				      playAudio('successArrivo');
				   }

				   }
				   
				   if(item.stato==1){
				  
				   if(item.confermata==1){
                   

					 $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='right' width='60%'><div class='custom-pass11' align='center'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"' href='' class='linkchat'><font color='#fff'>"+ nuovonick +" "+ item.percentuale +"%</font></a></div></td><td align='left' width='40%'><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></tr><tr><td align='center' colspan='2'>&nbsp;&nbsp;<font color='#cc33cc' size='3'><b><p>"+localStorage.getItem("sessionReinoltra")+"</p></b></font></td></tr><tr><td align='left' colspan='2'>&nbsp;&nbsp;<b>"+ tempistica +"</b><table><tr><td><b><p>"+localStorage.getItem("sessionPrezzo")+":</p> </b></td><td>"+ somma +"</td></tr></table><table><tr><td><b><p>"+localStorage.getItem("sessionQuando")+": </p></td><td> </b>"+ item.quando +" </td><td><b><p>"+localStorage.getItem("sessionOra")+": </p></td><td> </b>"+ item.ora +"</td></tr></table><table><tr><td valign='top'><b><p >"+localStorage.getItem("sessionPartenza")+": </p></b></td><td> "+ item.partenza +"</td></tr></table><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionArrivo")+": </p> </b></td><td>"+ item.arrivo +"</td></tr></table><table><tr><td><b>"+localStorage.getItem("sessionNote")+": </b></td><td>"+ item.note_autista +"</td></tr></table></td></tr><tr><td align='center' colspan='2'><a id='accetta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4accetta'><font color='#fff'>"+ accetta +"</font></a>&nbsp;&nbsp;<a id='elimina"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4rifiuta'><font color='#fff'>"+ cancella +"</font></a></td></tr><tr><td align='center' colspan='2'></td></tr></table>");
                   
                     seleziona();
				   }
				   else{
                   

					 $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='right' width='60%'><div class='custom-pass11' align='center'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"' href='' class='linkchat'><font color='#fff'>"+ nuovonick +" "+ item.percentuale +"%</font></a></div></td><td align='left' width='40%'><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></tr><tr><td align='left' colspan='2'>&nbsp;&nbsp;<b>"+ tempistica +"</b><table><tr><td><b><p>"+localStorage.getItem("sessionPrezzo")+":</p> </b></td><td>"+ somma +"</td></tr></table><table><tr><td><b><p>"+localStorage.getItem("sessionQuando")+": </p></td><td> </b>"+ item.quando +" </td><td><b><p>"+localStorage.getItem("sessionOra")+": </p></td><td> </b>"+ item.ora +"</td></tr></table><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionPartenza")+": </p></b></td><td> "+ item.partenza +"</td></tr></table><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionArrivo")+": </p> </b></td><td>"+ item.arrivo +"</td></tr></table><table><tr><td><b>"+localStorage.getItem("sessionNote")+": </b></td><td>"+ item.note_autista +"</td></tr></table><br></td></tr><tr><td align='center' colspan='2'><a id='accetta"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4accetta'><font color='#fff'>"+ accetta +"</font></a>&nbsp;&nbsp;<a id='elimina"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' data-role='button' data-theme='b' class='custom-btn4rifiuta'><font color='#fff'>"+ cancella +"</font></a></td></tr><tr><td align='center' colspan='2'></td></tr></table>");
                   
                      seleziona();
				   
				    }
				   

				  
				    $(document).on("touchstart", "#accetta"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						accettaofferta(2,item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
					 });
				  
				    $(document).on("touchstart", "#elimina"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
						elimina3(item.id_richiesta,item.id_autista)
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
					});
				   
				   $(document).on("touchstart", "#rifiuta2"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								  
						var ref = window.open('http://www.purplemiles.com/www/feedback_user.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								  
						feedofferta(item.id_richiesta,item.id_autista)
								  
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
								  
					});
				   
				  
				  $(document).on("tap", "#linkpass"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
								 
						var ref = window.open('http://www.purplemiles.com/www/profilo_autista.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								 
						e.stopImmediatePropagation();
								 
						e.preventDefault();
								 
						return false;
								 
					});
				  
				  $(document).on("tap", "#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
								 //http://www.purplemiles.com/www/profilo_passeggero.php?idp=19&ida="+localStorage.getItem("id_autista")+"&pm="+localStorage.getItem("md5")+"
								 
						var ref = window.open('http://www.purplemiles.com/www/feedback_autista.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								 
								 
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
				  
				  
				  if (localStorage.getItem("risppass")!="null" || typeof(localStorage.getItem("risppass")) != 'undefined' || localStorage.getItem("risppass")!=0 || localStorage.getItem("risppass")!="") {
				    playAudio('successArrivo');
				  }
				  

				  }
				  
				  if(item.stato==0){
                   
					 if(item.nick==""){
				   
					   item.stato==2
				   
					   $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='center'><b><p id='h4richiesta'>RICHIESTA</p></b></td></tr><tr><td align='left'><br><table><tr><td><b><p>"+localStorage.getItem("sessionQuando")+": </p></td><td> </b>"+ item.quando +" </td><td><b><p>"+localStorage.getItem("sessionOra")+": </p></td><td> </b>"+ item.ora +"</td></tr></table><br><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionPartenza")+": </p></b></td><td> "+ item.partenza +"</td></tr></table><br><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionArrivo")+": </p> </b></td><td>"+ item.arrivo +"</td></tr></table></td></tr><tr><td align='center'></td></tr><tr><td align='center'><br></td></tr><tr><td align='center'><a id='elimina"+ item.id_richiesta +"' href='#' ><img src='img/ico_trash.png' width='45'></a></td></tr><tr><td align='center'></td></tr></table>");
				  
				           $(document).on("touchstart", "#elimina"+ item.id_richiesta +"", function(e){
							 elimina(item.id_richiesta)
							 if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
						   });
				   
				   
                      seleziona();
				  
					 }
					 else{
				   
				       $("#offerte4").append("<br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr><td align='right' width='60%'><div class='custom-pass00' align='center'><a id='linkpass"+ item.id_richiesta +"_"+ item.id_autista +"'><font color='#fff'><b>"+ nuovonick +" "+ item.percentuale +"%</b></font></div></td><td align='left' width='40%'><div id='stelleautista"+ item.id_richiesta +"_"+ item.id_autista +"'></div></td></tr><tr><td align='left' colspan='2'><br><table><tr><td align='center' colspan='2'><font color='#cc33cc' size='3'><b>&nbsp;<div>"+localStorage.getItem("sessionValutazione")+"</div></font></td></tr><tr><td><b><p>"+localStorage.getItem("sessionQuando")+": </p></td><td> </b>"+ item.quando +" </td><td><b><p>"+localStorage.getItem("sessionOra")+": </p></td><td> </b>"+ item.ora +"</td></tr></table><br><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionPartenza")+": </p></b></td><td> "+ item.partenza +"</td></tr></table><br><table><tr><td valign='top'><b><p>"+localStorage.getItem("sessionArrivo")+": </p> </b></td><td>"+ item.arrivo +"</td></tr></table></td></tr><tr><td align='center' colspan='2'><a id='elimina"+ item.id_richiesta +"_"+ item.id_autista +"' href='#' ><img src='img/ico_trash.png' width='45'></a></td></tr><tr><td align='center' colspan='2'></td></tr></table>");
				  
                   
                     seleziona();
				  
				       $(document).on("touchstart", "#elimina"+ item.id_richiesta +"_"+ item.id_autista +"", function(e){
						  elimina3(item.id_richiesta,item.id_autista)
						  if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
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
				  
				  
				  $(document).on("tap", "#linkpass"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
								 
						var ref = window.open('http://www.purplemiles.com/www/profilo_autista.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								 
						e.stopImmediatePropagation();
								 
						e.preventDefault();
								 
						return false;
								 
					});

				  
				  
				  $(document).on("tap", "#stelleautista"+ item.id_richiesta +"_"+ item.id_autista + "", function(e){
								 
						//http://www.purplemiles.com/www/profilo_passeggero.php?idp=19&ida="+localStorage.getItem("id_autista")+"&pm="+localStorage.getItem("md5")+"
								 
						var ref = window.open('http://www.purplemiles.com/www/feedback_autista.php?lang='+ localStorage.getItem("lingua") +'&idp='+localStorage.getItem("id_utente")+'&ida='+item.id_utente_autista+'&pm='+localStorage.getItem("md5")+'', '_blank', 'location=no');
								 
								 
						e.stopImmediatePropagation();
								 
						e.preventDefault();
								 
						return false;
								 
					});
				  
				  
				     }
				  }
				  
		  
				  }
				  else{
				  
				   
				  $("#offerte4").html("<br><br><table width='90%' border='0' valign='center' align='center' class='tabella'><tr> <td align='center'><br></td></tr><tr><td align='center'><div id='h4nessuna'>"+localStorage.getItem("sessionNessuna")+"</div><br><br></td></tr></table>");
                   
                   seleziona();
				
				   }
				   
				   
			  conta = conta + 1;
				   
				  
			});
		   
		   
		   if(conta>1){

		   if(localStorage.getItem("scroller")=="0"){
		   /////////SCROLLER///////////////
		   
		   setTimeout(function() {
					  
					  myScroll = new IScroll('#wrapper', { click: true });
					  
					  
					  setTimeout (function(){
						 myScroll.refresh();
								  
					   }, 500);
					  
					  
					  localStorage.setItem("scroller","1")
					  //document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
					  
					  document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
			}, 500);
		   
		   ////////////////////////////////
		   }
		   else{
		       setTimeout (function(){
					   myScroll.refresh();
					   
			   }, 1000);
		   }
		   
		   }
		   else{
		       myScroll = "";
		       localStorage.setItem("scroller","0")
		   }
		   //fine conta
		   
		   
		   }
		   
		   
		   },
		   error: function(){
			   
		    $("#spinner4").hide();
		   
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led2").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led4").html("<img src='img/ledrosso.png' width='25px'>");
		   
		   setTimeout (function(){
			vediofferte();
					   
		    }, 2000);
	
		   
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
	
	
	function gpsonSuccess2(position){
		
		var ciao = position.coords.latitude;
		var ciao1 = position.coords.longitude;
		
		localStorage.setItem("lat3", ciao)
		localStorage.setItem("lng3", ciao1)
		
	}
	
	
	function onError22(error) {
		navigator.geolocation.watchPosition(gpsonSuccess2, onError33, {timeout: 50000, enableHighAccuracy: false, maximumAge: 0 });
	}
	
	
	function onError33(error) {
	 localStorage.setItem("geostory", "NO")
	
	}
	
	

	refreshPos = setInterval(function() {
							 
		//playAudio('successArrivo');
		
		// prendi gps
		var watchID = navigator.geolocation.watchPosition(gpsonSuccess2, onError22, {maximumAge:600000, timeout:80000, enableHighAccuracy: true});
							 
		vediofferte()
							 
	    controllachat(2)
	}, 10000);
	
	
}



function gpsonSuccess24(position){
	
	var ciao = position.coords.latitude;
	var ciao1 = position.coords.longitude;
	
	localStorage.setItem("lat3", ciao)
	localStorage.setItem("lng3", ciao1)
	
}

function onError24(error) {
	navigator.geolocation.watchPosition(gpsonSuccess24, onError34, {timeout: 50000, enableHighAccuracy: false, maximumAge: 0 });
}


function onError34(error) {
	
	
}


function chatting(id) {
	var nuovonick;
	
	localStorage.setItem("id_richiesta",id)
	
	localStorage.setItem("pagebtn", "chat")

	
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/leggi_chat.php?id_richiesta="+ id +"&last_id=0",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   if(localStorage.getItem("chatpass")===JSON.stringify(result)){
		   
		   ("#spinner6").hide();
		   }
		   else{
		   $("#offerta6").html("");
		   $("#spinner6").hide();
		   localStorage.setItem("chatpass", JSON.stringify(result))
		   
		   $.each(result, function(i,item){
				  
				  
			   if(item.Token==1){
				  
				  //alert(item.nick + localStorage.getItem("nickpass"))
				  
				  
				  if(item.nick==localStorage.getItem("nickpass")){
				  
					contanick = item.nick_destinatario.length;
				
				  
				   if(contanick <= 12){
					  nuovonick = item.nick_destinatario;
				  
				   }
				    else{
					  nuovonick = item.nick_destinatario.slice(0,10)
					  nuovonick = nuovonick + ".."
				  
				  
				   }
				  
				  }
				  else{
						
					 contanick = item.nick.length;
				
				    if(contanick <= 12){
					 nuovonick = item.nick;
				  
				    }
				    else{
				  	 nuovonick = item.nick.slice(0,10)
				     nuovonick = nuovonick + ".."
				  
					 //alert(nuovonick)
				  
				    }
						
				  }
				  
				  
				  $("#nickhome6").html(nuovonick);
				  
				  
				  
				  var indirizzo = item.messaggio.replace("777A","'");
				  
				  indirizzo = indirizzo.replace("777B", "+");
				  
				  indirizzo = indirizzo.replace("777C", "$");
				  
				  indirizzo = indirizzo.replace("777D", "!");
				  
				  indirizzo = indirizzo.replace("777E", "(");
				  
				  indirizzo = indirizzo.replace("777F", ")");
				  
				  indirizzo = indirizzo.replace("777F", ":");
				  
				  if(item.nick==localStorage.getItem("nickpass")){
				  //$("#offerta6").append("<br><br><table width='70%' border='0' valign='center' align='left' class='tabella'><tr><td align='center'><div class='custom-pass33'><font color='#fff' size='4'>"+ item.nick +"</font></div></tr><tr><td align='left'><br><b>Mesaggio: </b>"+ item.messaggio +"<br><b>Data: </b>"+ item.data +"</td></tr></table>");
				  $("#offerta6").append("<div class='bubbledLeft'>"+ indirizzo +"</div>")
				  }
				  else{
				  //$("#offerta6").append("<br><br><table width='70%' border='0' valign='center' align='right' class='tabella'><tr><td align='center'><div class='custom-pass22'><font color='#fff' size='4'>"+ item.nick +"</font></div></tr><tr><td align='left'><br><b>Mesaggio: </b>"+ item.messaggio +"<br><b>Data: </b>"+ item.data +"</td></tr></table>");
				  $("#offerta6").append("<div class='bubbledRight'>"+ indirizzo +"</div>")
				  
				  }
				  
				  }
				  
				  if(item.Token==2){
				  
				  var contanick = item.nick.length;
					nuovonick;
				  
				  if(contanick <= 12){
				   nuovonick = item.nick
				  
				  }
				  else{
				    nuovonick = item.nick.slice(0,10)
				    nuovonick = nuovonick + ".."
				  
				  }
				  
				  //alert("2-"+nuovonick)
				  
				   $("#nickhome6").html(nuovonick);
				  
				  
				  }
				  
				  });
		   
		   playChat2('successChat2');
		   
		   }
		   
		   },
		   error: function(){
		   
		   if(localStorage.getItem("lingua")=="it"){
		   
		   var alertattenzione = localStorage.getItem("sessionAttenzione")
		   var alerterrore = localStorage.getItem("sessionErrorrete")
		   var orarioA = "Inserire un orario valido"
		   
		   }
		   else if(localStorage.getItem("lingua")=="en"){
		   
		   var alertattenzione = localStorage.getItem("sessionAttenzione")
		   var alerterrore = localStorage.getItem("sessionErrorrete")
		   var orarioA = "Enter a valid time"
		   
		   }
		   else if(localStorage.getItem("lingua")=="fr"){
		   
		   var alertattenzione = localStorage.getItem("sessionAttenzione")
		   var alerterrore = localStorage.getItem("sessionErrorrete")
		   var orarioA = "Entrez une heure valide"
		   
		   }
		   else if(localStorage.getItem("lingua")=="es"){
		   
		   var alertattenzione = localStorage.getItem("sessionAttenzione")
		   var alerterrore = localStorage.getItem("sessionErrorrete")
		   var orarioA = "Introduzca una hora válida"
		   
		   }
		   else{
		   
		   var alertattenzione = localStorage.getItem("sessionAttenzione")
		   var alerterrore = localStorage.getItem("sessionErrorrete")
		   var orarioA = "Enter a valid time"
		   }
		   
		   
		   navigator.notification.alert(
										alerterrore,  // message
										alertDismissed,         // callback
										alertattenzione,           // title
										'Done'                  // buttonName
										);
		   
		   localStorage.setItem("chatpass", "")
		   chatting(id);
		   
		   },
		   dataType:"jsonp"});
	
	
	
	setTimeout(function() {
			   localStorage.setItem("chatpass", "")
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
	var indirizzo = document.getElementById("chattext").value;
	
	//indirizzo = indirizzo.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
									
	indirizzo = indirizzo.replace(/[&\/\\#,~%.*<>{}]/g,'');
	
	indirizzo = indirizzo.replace(/'/g,"777A");
								  
	indirizzo = indirizzo.replace("+","777B");
								  
	indirizzo = indirizzo.replace("$","777C");
								  
	indirizzo = indirizzo.replace("!","777D");
								  
	indirizzo = indirizzo.replace("(","777E");
								  
	indirizzo = indirizzo.replace(")","777F");
								  
	indirizzo = indirizzo.replace(":","777F");
                                  
                                  if(localStorage.getItem("lingua")=="it"){
                                  
                                   var alertattenzione = localStorage.getItem("sessionAttenzione")
                                   var alerterrore = localStorage.getItem("sessionErrorrete")
                                   var messaggioA = localStorage.getItem("sessionInsmessaggio")
                                  
                                  }
                                  else if(localStorage.getItem("lingua")=="en"){
                                  
                                   var alertattenzione = localStorage.getItem("sessionAttenzione")
                                   var alerterrore = localStorage.getItem("sessionErrorrete")
                                   var messaggioA = localStorage.getItem("sessionInsmessaggio")
                                  
                                  }
								  else if(localStorage.getItem("lingua")=="fr"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var messaggioA = localStorage.getItem("sessionInsmessaggio")
								  
								  }
								  else if(localStorage.getItem("lingua")=="es"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var messaggioA = localStorage.getItem("sessionInsmessaggio")
								  
								  }
								  else{
								  
                                   var alertattenzione = localStorage.getItem("sessionAttenzione")
                                   var alerterrore = localStorage.getItem("sessionErrorrete")
                                   var messaggioA = localStorage.getItem("sessionInsmessaggio")
                                  }
								  
								  
	
	if (indirizzo == "") {
		navigator.notification.alert(
									 messaggioA,  // message
									 alertDismissed,         // callback
									 'Chat',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	if (indirizzo == " ") {
		navigator.notification.alert(
									 messaggioA,  // message
									 alertDismissed,         // callback
									 'Chat',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
								  
	localStorage.setItem("aspetta","1")
	
	$("#spinner6").show();
	//alert(localStorage.getItem("id_richiesta"))
	
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/pubblica_chat.php?id_messaggio="+ localStorage.getItem("id_richiesta") +"&nick="+ localStorage.getItem("nickpass") +"&messaggio="+ indirizzo +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $("#spinner6").hide();
		   
		   $.each(result, function(i,item){
				  
			if(item.Token==1){
			  playChat1('successChat1');
			  localStorage.setItem("aspetta","0")
			  document.getElementById("chattext").value="";
				  
			  chatting(localStorage.getItem("id_richiesta"))
				  
			  //controllachat2();
				  
			}
				  
			});
		   
		   
		   
		   },
		   error: function(){
		   $("#spinner6").hide();
		   navigator.notification.alert(
										alerterrore,  // message
										alertDismissed,         // callback
										alertattenzione,           // title
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
		   
		   if(uman==2){
		   
		    $.each(result, function(i,item){
				  
			  if(item.Token==1){
				 localStorage.setItem("chatpass", "")
				   
				   if( $(".ui-panel").hasClass("ui-panel-open") == true ){
				     //alert("OPENED");
				   }else{
                   
                   if(localStorage.getItem("lingua")=="it"){
                   
                     $("#chattext").attr("placeholder", ""+localStorage.getItem("sessionInsmessaggio")+"");
                   
                   }
                   else if(localStorage.getItem("lingua")=="en"){
                   
                     $("#chattext").attr("placeholder", ""+localStorage.getItem("sessionInsmessaggio")+"");
                   
                   }
                   else if(localStorage.getItem("lingua")=="fr"){
                   
                     $("#chattext").attr("placeholder", ""+localStorage.getItem("sessionInsmessaggio")+"");
                   
                   }
                   else if(localStorage.getItem("lingua")=="es"){
                   
                     $("#chattext").attr("placeholder", ""+localStorage.getItem("sessionInsmessaggio")+"");
                   
                   }
                   else{
                   
                     $("#chattext").attr("placeholder", ""+localStorage.getItem("sessionInsmessaggio")+"");
                   
                   }
                   
				     $("#btnpanel").click();
				   }
				   
				 
				   
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


function controllachat2() {
	
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
				  
				if(item.stato==3){
				  
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


function elimina(id_richiesta){
	
    $("#spinner4").show();
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_elimina.php?id_richiesta="+ id_richiesta +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				if(item.Token==1){
				  
                  $("#spinner4").hide();
				  vediofferte()
			    }
				  
			});
		   
		   },
		   error: function(){
           
           if(localStorage.getItem("lingua")=="it"){
           
           var alertattenzione = localStorage.getItem("sessionAttenzione")
           var alerterrore = localStorage.getItem("sessionErrorrete")
           var messaggioA = localStorage.getItem("sessionInsmessaggio")
           
           }
           else if(localStorage.getItem("lingua")=="en"){
           
           var alertattenzione = localStorage.getItem("sessionAttenzione")
           var alerterrore = localStorage.getItem("sessionErrorrete")
           var messaggioA = localStorage.getItem("sessionInsmessaggio")
           
           }
		   else if(localStorage.getItem("lingua")=="fr"){
		   
		   var alertattenzione = localStorage.getItem("sessionAttenzione")
		   var alerterrore = localStorage.getItem("sessionErrorrete")
		   var messaggioA = localStorage.getItem("sessionInsmessaggio")
		   
		   }
		   else if(localStorage.getItem("lingua")=="es"){
		   
		   var alertattenzione = localStorage.getItem("sessionAttenzione")
		   var alerterrore = localStorage.getItem("sessionErrorrete")
		   var messaggioA = localStorage.getItem("sessionInsmessaggio")
		   
		   }
		   else{
		   
           var alertattenzione = localStorage.getItem("sessionAttenzione")
           var alerterrore = localStorage.getItem("sessionErrorrete")
           var messaggioA = localStorage.getItem("sessionInsmessaggio")
           }
		   
		   navigator.notification.alert(
										alerterrore,  // message
										alertDismissed,         // callback
										alertattenzione,           // title
										'Done'                  // buttonName
										);
		   
		   
		   vediofferte()
		   
		   },
		   dataType:"jsonp"});
}

function elimina2(id_richiesta,id_autista){
    
    $("#spinner4").show();
    $.ajax({
           type:"GET",
           url:"http://purplemiles.com/www2/check_elimina2.php?id_richiesta="+ id_richiesta +"&id_autista="+ id_autista +"",
           contentType: "application/json",
           //data: {ID: "Lazio"}, LIMIT 10
           timeout: 7000,
           jsonp: 'callback',
           crossDomain: true,
           success:function(result){
           
           $.each(result, function(i,item){
                  
                  if(item.Token==1){
                  
                  $("#spinner4").hide();
                  vediofferte()
                  
                  }
                  
            });
           
           },
           error: function(){
           
           if(localStorage.getItem("lingua")=="it"){
           
           var alertattenzione = localStorage.getItem("sessionAttenzione")
           var alerterrore = localStorage.getItem("sessionErrorrete")
           var messaggioA = localStorage.getItem("sessionInsmessaggio")
           
           }
           else if(localStorage.getItem("lingua")=="en"){
           
           var alertattenzione = localStorage.getItem("sessionAttenzione")
           var alerterrore = localStorage.getItem("sessionErrorrete")
           var messaggioA = localStorage.getItem("sessionInsmessaggio")
           
           }
		   else if(localStorage.getItem("lingua")=="fr"){
		   
		   var alertattenzione = localStorage.getItem("sessionAttenzione")
		   var alerterrore = localStorage.getItem("sessionErrorrete")
		   var messaggioA = localStorage.getItem("sessionInsmessaggio")
		   
		   }
		   else if(localStorage.getItem("lingua")=="es"){
		   
		   var alertattenzione = localStorage.getItem("sessionAttenzione")
		   var alerterrore = localStorage.getItem("sessionErrorrete")
		   var messaggioA = localStorage.getItem("sessionInsmessaggio")
		   
		   }
		   else{
		   
           var alertattenzione = localStorage.getItem("sessionAttenzione")
           var alerterrore = localStorage.getItem("sessionErrorrete")
           var messaggioA = localStorage.getItem("sessionInsmessaggio")
           }
           
           navigator.notification.alert(
                                        alerterrore,  // message
                                        alertDismissed,         // callback
                                        alertattenzione,           // title
                                        'Done'                  // buttonName
                                        );
           
           
           vediofferte()
           
           },
           dataType:"jsonp"});
}
									
			
	function elimina3(id_richiesta,id_autista){
									
			$("#spinner4").show();
			$.ajax({
					type:"GET",
										   url:"http://purplemiles.com/www2/check_elimina3.php?id_richiesta="+ id_richiesta +"&id_autista="+ id_autista +"",
										   contentType: "application/json",
										   //data: {ID: "Lazio"}, LIMIT 10
										   timeout: 7000,
										   jsonp: 'callback',
										   crossDomain: true,
										   success:function(result){
										   
										   $.each(result, function(i,item){
												  
												  if(item.Token==1){
												  
												  $("#spinner4").hide();
												  vediofferte()
												  
												  }
												  
												  });
										   
										   },
										   error: function(){
                   
                   if(localStorage.getItem("lingua")=="it"){
                   
                   var alertattenzione = localStorage.getItem("sessionAttenzione")
                   var alerterrore = localStorage.getItem("sessionErrorrete")
                   var messaggioA = localStorage.getItem("sessionInsmessaggio")
                   
                   }
                   else if(localStorage.getItem("lingua")=="en"){
                   
                   var alertattenzione = localStorage.getItem("sessionAttenzione")
                   var alerterrore = localStorage.getItem("sessionErrorrete")
                   var messaggioA = localStorage.getItem("sessionInsmessaggio")
                   
                   }
				   else if(localStorage.getItem("lingua")=="fr"){
				   
				   var alertattenzione = localStorage.getItem("sessionAttenzione")
				   var alerterrore = localStorage.getItem("sessionErrorrete")
				   var messaggioA = localStorage.getItem("sessionInsmessaggio")
				   
				   }
				   else if(localStorage.getItem("lingua")=="es"){
				   
				   var alertattenzione = localStorage.getItem("sessionAttenzione")
				   var alerterrore = localStorage.getItem("sessionErrorrete")
				   var messaggioA = localStorage.getItem("sessionInsmessaggio")
				   
				   }
				   else{
				   
                   var alertattenzione = localStorage.getItem("sessionAttenzione")
                   var alerterrore = localStorage.getItem("sessionErrorrete")
                   var messaggioA = localStorage.getItem("sessionInsmessaggio")
                   }
										   
										   navigator.notification.alert(
																		alerterrore,  // message
																		alertDismissed,         // callback
																		alertattenzione,           // title
																		'Done'                  // buttonName
																		);
										   
										   
										   vediofferte()
										   
										   },
										   dataType:"jsonp"});
	}



function feedofferta(id_richiesta,id_autista){
	
	//alert("http://purplemiles.com/www2/check_cancella2.php?id_richiesta="+ id_richiesta +"&id_autista="+ id_autista +"")
	
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_cancella2.php?id_richiesta="+ id_richiesta +"&id_autista="+ id_autista +"",
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
           
           if(localStorage.getItem("lingua")=="it"){
           
           var alertattenzione = localStorage.getItem("sessionAttenzione")
           var alerterrore = localStorage.getItem("sessionErrorrete")
           var messaggioA = localStorage.getItem("sessionInsmessaggio")
           
           }
           else if(localStorage.getItem("lingua")=="en"){
           
           var alertattenzione = localStorage.getItem("sessionAttenzione")
           var alerterrore = localStorage.getItem("sessionErrorrete")
           var messaggioA = localStorage.getItem("sessionInsmessaggio")
           
           }
		   else if(localStorage.getItem("lingua")=="fr"){
		   
		   var alertattenzione = localStorage.getItem("sessionAttenzione")
		   var alerterrore = localStorage.getItem("sessionErrorrete")
		   var messaggioA = localStorage.getItem("sessionInsmessaggio")
		   
		   }
		   else if(localStorage.getItem("lingua")=="es"){
		   
		   var alertattenzione = localStorage.getItem("sessionAttenzione")
		   var alerterrore = localStorage.getItem("sessionErrorrete")
		   var messaggioA = localStorage.getItem("sessionInsmessaggio")
		   
		   }
		   else{
		   
           var alertattenzione = localStorage.getItem("sessionAttenzione")
           var alerterrore = localStorage.getItem("sessionErrorrete")
           var messaggioA = localStorage.getItem("sessionInsmessaggio")
           }
		   
		   navigator.notification.alert(
										alerterrore,  // message
										alertDismissed,         // callback
										alertattenzione,           // title
										'Done'                  // buttonName
										);
		   
		   
		   vediofferte()
		   
		   },
		   dataType:"jsonp"});
}


function accettaofferta(id,id_richiesta,id_autista){
                                  
                                  if(localStorage.getItem("lingua")=="it"){
                                  
                                   var alertattenzione = localStorage.getItem("sessionAttenzione")
                                   var alerterrore = localStorage.getItem("sessionErrorrete")
                                   var offertaA = localStorage.getItem("sessionOffertaacc")
								  
                                  
                                  }
                                  else if(localStorage.getItem("lingua")=="en"){
                                  
                                   var alertattenzione = localStorage.getItem("sessionAttenzione")
                                   var alerterrore = localStorage.getItem("sessionErrorrete")
                                   var offertaA = localStorage.getItem("sessionOffertaacc")
                                  
                                  }
								  else if(localStorage.getItem("lingua")=="fr"){
								  
								   var alertattenzione = localStorage.getItem("sessionAttenzione")
								   var alerterrore = localStorage.getItem("sessionErrorrete")
								   var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  else if(localStorage.getItem("lingua")=="es"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  
								  
								  else{
								  
                                   var alertattenzione = localStorage.getItem("sessionAttenzione")
                                   var alerterrore = localStorage.getItem("sessionErrorrete")
                                   var offertaA = localStorage.getItem("sessionOffertaacc")
                                  
                                  }
	
	
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
				  else{
				    navigator.notification.alert(
											   offertaA,  // message
											   alertDismissed,         // callback
											   alertattenzione,           // title
											   'Ok'                  // buttonName
											   );
				  }
				  
			});
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										alerterrore,  // message
										alertDismissed,         // callback
										alertattenzione,           // title
										'Done'                  // buttonName
										);
									
		   
		   vediofferte()
		   
		   },
		   dataType:"jsonp"});
}

function scadutaofferta(id,id_richiesta,id_autista){
                                  
								  if(localStorage.getItem("lingua")=="it"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  else if(localStorage.getItem("lingua")=="en"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  else if(localStorage.getItem("lingua")=="fr"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  else if(localStorage.getItem("lingua")=="es"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  
								  
								  else{
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  
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
										alerterrore,  // message
										alertDismissed,         // callback
										alertattenzione,           // title
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
					
		 $("#datacal").blur();
					
	});
}

function prendinazione(){
                                  
								  if(localStorage.getItem("lingua")=="it"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  else if(localStorage.getItem("lingua")=="en"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  else if(localStorage.getItem("lingua")=="fr"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  else if(localStorage.getItem("lingua")=="es"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  
								  
								  else{
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  
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
                                               alerterrore,  // message
                                               alertDismissed,         // callback
                                               alertattenzione,            // title
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
           
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led2").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led4").html("<img src='img/ledrosso.png' width='25px'>");
		   
           },
           dataType:"jsonp"});
}
								  
								  


function prendicitta(id){
    
								  if(localStorage.getItem("lingua")=="it"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  else if(localStorage.getItem("lingua")=="en"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  else if(localStorage.getItem("lingua")=="fr"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  else if(localStorage.getItem("lingua")=="es"){
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
								  
								  
								  else{
								  
								  var alertattenzione = localStorage.getItem("sessionAttenzione")
								  var alerterrore = localStorage.getItem("sessionErrorrete")
								  var offertaA = localStorage.getItem("sessionOffertaacc")
								  
								  }
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
                                               alerterrore,  // message
                                               alertDismissed,         // callback
                                               alertattenzione,            // title
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
           
		   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led2").html("<img src='img/ledrosso.png' width='25px'>");
		   $("#led4").html("<img src='img/ledrosso.png' width='25px'>");
		   
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
				  
					//$("#citta2").html(item.city);
				    $("#fuso3").html(localStorage.getItem("fuso") + ", " + item.city);
				  
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
								  
									
							function prendimezzi(){
                                  
                                  if(localStorage.getItem("lingua")=="it"){
                                    var mezzi = "<option value='Autovettura' selected>Auto/Taxi/NCC</option>"
                                  }
                                  
                                  if(localStorage.getItem("lingua")=="en"){
                                    var mezzi = "<option value='Autovettura' selected>Car/Taxi/Limo</option>"
                                  }
								  if(localStorage.getItem("lingua")=="fr"){
								    var mezzi = "<option value='Autovettura' selected>Auto/Taxi/VTC</option>"
								  }

								  if(localStorage.getItem("lingua")=="es"){
								    var mezzi = "<option value='Autovettura' selected>Auto/Taxi/ACC</option>"
								  }
								  
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
                                                  
                                                  if(localStorage.getItem("lingua")=="it"){
                                                    mezzi = mezzi + "<option value='"+item.veicolo+"'>"+ item.veicolo +"</option>"
                                                  }
                                                  if(localStorage.getItem("lingua")=="en"){
                                                    mezzi = mezzi + "<option value='"+item.veicolo+"'>"+ item.vehicle +"</option>"
                                                  }
												  if(localStorage.getItem("lingua")=="fr"){
												   mezzi = mezzi + "<option value='"+item.veicolo+"'>"+ item.veicolo_fr +"</option>"
												  }
												  if(localStorage.getItem("lingua")=="es"){
												   mezzi = mezzi + "<option value='"+item.veicolo+"'>"+ item.veicolo_es +"</option>"
												  }
												  //mezzi = mezzi + "<option value='"+item.veicolo+"'>"+ item.veicolo +"</option>"

												 /* if (item.Token == 1){
												  if(localStorage.getItem("veicolo")==item.veicolo){
												  mezzi = "";
												  mezzi = mezzi + "<option value='"+item.veicolo+"' selected>"+ item.veicolo +"</option>"
												  }
												  else{
												  if (localStorage.getItem("veicolo") === null || localStorage.getItem("veicolo")=="null" || typeof(localStorage.getItem("veicolo")) == 'undefined' || localStorage.getItem("veicolo")==0 || localStorage.getItem("veicolo")=="") {
												  if(item.veicolo=="Autovettura"){
												  mezzi = mezzi + "<option value='"+item.veicolo+"' selected>"+ item.veicolo +"</option>"
												  }
												  else{
												  mezzi = mezzi + "<option value='"+item.veicolo+"'>"+ item.veicolo +"</option>"
												  }
												  }
												  else{
												  mezzi = mezzi + "<option value='"+item.veicolo+"'>"+ item.veicolo +"</option>"
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
												  }*/
									       });
										   
										   $("#veicolo").html(mezzi);
										   
										   $("#veicolo").selectmenu("refresh");
										   
										   $(".spinner").hide();
										   
										   },
										   error: function(){
										   $(".spinner").hide();
										   
										   $("#led").html("<img src='img/ledrosso.png' width='25px'>");
										   $("#led2").html("<img src='img/ledrosso.png' width='25px'>");
										   $("#led4").html("<img src='img/ledrosso.png' width='25px'>");
										   
										   },
										   dataType:"jsonp"});
									
									}

									
								
							function gpsonSuccess(position){
									
								var ciao = position.coords.latitude;
								var ciao1 = position.coords.longitude;
									
								localStorage.setItem("lat3", ciao)
								localStorage.setItem("lng3", ciao1)
								  
								localStorage.setItem("lat", ciao)
								localStorage.setItem("lng", ciao1)
								  
								//alert(ciao)
									
									
							}
									
							function onError2(error) {
								//var watchID = navigator.geolocation.watchPosition(onSuccess2, onError3, { timeout: 80000 });
								navigator.geolocation.watchPosition(gpsonSuccess, onError3, {timeout: 50000, enableHighAccuracy: false, maximumAge: 0 });
							}
							
	
						    function onError3(error) {
							 localStorage.setItem("geostory", "NO")
							
							 //window.location.href = "index.html";
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
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).italiano.replace("P0011", "'"));

                                                               if(results.rows.item(i).id_traduzione == "h4richiesta"){
                                                               h4richiesta = results.rows.item(i).italiano.replace("P0011", "'");
                                                               
                                                               }
       
                                                               
                                                            }
                                                        
                                                        }
                                                               
                                                               
                                                        if(localStorage.getItem("lingua")=="en"){
                                                               
                                                               
                                                               for (i = 0; i < len; i++){
                                                                 $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
                                                               
                                                                 if(results.rows.item(i).id_traduzione == "h4richiesta"){
                                                                   h4richiesta = results.rows.item(i).inglese.replace("P0011", "'");
                                                               
                                                                 }
                                                               
                                                               
                                                               }
                                                               
                                                        }
														if(localStorage.getItem("lingua")=="fr"){
															   
															   
															for (i = 0; i < len; i++){
															   $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).francese.replace("P0011", "'"));
															   
															   if(results.rows.item(i).id_traduzione == "h4richiesta"){
															   h4richiesta = results.rows.item(i).francese.replace("P0011", "'");
															   
															   }
															   
															   
															}
															   
														}
														if(localStorage.getItem("lingua")=="es"){
															   
															   
															for (i = 0; i < len; i++){
															   $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).spagnolo.replace("P0011", "'"));
															   
															   if(results.rows.item(i).id_traduzione == "h4richiesta"){
															   h4richiesta = results.rows.item(i).spagnolo.replace("P0011", "'");
															   
															   }
															   
															   
															}
															   
														}
															   
                                            }, null);
                                        });
								  
                                  }
								  
								  
								  function ripetiseleziona () {
                                  
                                  var db;
                                  db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
                                  
                                  db.transaction(function (tx) {
                                                 
                                                 tx.executeSql('SELECT * FROM TestiV2', [], function (tx, results) {
                                                               var len = results.rows.length, i;
                                                               
                                                               if(localStorage.getItem("lingua")=="it"){
                                                               
                                                               for (i = 0; i < len; i++){
                                                               
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).italiano.replace("P0011", "'"));
                                                               
                                                               if(results.rows.item(i).id_traduzione == "datacal"){
                                                               
                                                               $("#datacal").attr("placeholder",""+results.rows.item(i).italiano.replace("P0011", "'")+"");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h4richiesta"){
                                                               h4richiesta = results.rows.item(i).italiano.replace("P0011", "'");
                                                               
                                                               }
															   
															   if(results.rows.item(i).id_traduzione == "rispopzioni"){
																	rispopzioni = results.rows.item(i).italiano.replace("P0011", "'");
																	localStorage.setItem("rispopzioni",rispopzioni)
																}
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7quando"){
                                                               h7quando = results.rows.item(i).italiano.replace("P0011", "'");
                                                               
                                                               localStorage.setItem("h7quando",h7quando)
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7adesso"){
                                                               h7adesso = results.rows.item(i).italiano.replace("P0011", "'");
                                                               localStorage.setItem("h7adesso",h7adesso)
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7partenza"){
                                                               h7partenza = results.rows.item(i).italiano.replace("P0011", "'");
                                                               
                                                               
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7arrivo"){
                                                               h7arrivo = results.rows.item(i).italiano.replace("P0011", "'");
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7veicolo"){
                                                               h7veicolo = results.rows.item(i).italiano.replace("P0011", "'");
                                                               localStorage.setItem("h7veicolo",h7veicolo)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7passeggeri"){
                                                               h7passeggeri = results.rows.item(i).italiano.replace("P0011", "'");
                                                               localStorage.setItem("h7passeggeri",h7passeggeri)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7fumatori"){
                                                               h7fumatori = results.rows.item(i).italiano.replace("P0011", "'");
                                                               localStorage.setItem("h7fumatori",h7fumatori)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7animali"){
                                                               h7animali = results.rows.item(i).italiano.replace("P0011", "'");
                                                               localStorage.setItem("h7animali",h7animali)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7minori"){
                                                               h7minori = results.rows.item(i).italiano.replace("P0011", "'");
                                                               localStorage.setItem("h7minori",h7minori)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7disabili"){
                                                               h7disabili = results.rows.item(i).italiano.replace("P0011", "'");
                                                               localStorage.setItem("h7disabili",h7disabili)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7seggiolino"){
                                                               h7seggiolino = results.rows.item(i).italiano.replace("P0011", "'");
                                                               localStorage.setItem("h7seggiolino",h7seggiolino)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7pacchi"){
                                                               h7pacchi = results.rows.item(i).italiano.replace("P0011", "'");
                                                               localStorage.setItem("h7pacchi",h7pacchi)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7gancio"){
                                                               h7gancio = results.rows.item(i).italiano.replace("P0011", "'");
                                                               localStorage.setItem("h7gancio",h7gancio)
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "alertpartenza"){
                                                               alertstart = results.rows.item(i).italiano.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "alertdestinazione"){
                                                               alertend = results.rows.item(i).italiano.replace("P0011", "'");
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "alertinvio"){
                                                               alertinvio = results.rows.item(i).italiano.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "adesso1"){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;" + results.rows.item(i).italiano.replace("P0011", "'") + "&nbsp;");
                                                               }
                                                               
                                                               
                                                               
                                                               if(results.rows.item(i).id_traduzione == "tardi1"){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + results.rows.item(i).italiano.replace("P0011", "'") + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                                                               }
                                                               
                                                               }
                                                               
                                                               }
                                                               
                                                               
                                                               if(localStorage.getItem("lingua")=="en"){
                                                               
                                                               
                                                               for (i = 0; i < len; i++){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).inglese.replace("P0011", "'"));
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h4richiesta"){
                                                               h4richiesta = results.rows.item(i).inglese.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "datacal"){
                                                               
                                                               $("#datacal").attr("placeholder",""+results.rows.item(i).inglese.replace("P0011", "'")+"");
                                                               
                                                               }
															   
															   if(results.rows.item(i).id_traduzione == "rispopzioni"){
																	rispopzioni = results.rows.item(i).inglese.replace("P0011", "'");
																	localStorage.setItem("rispopzioni",rispopzioni)
																}
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7quando"){
                                                               h7quando = results.rows.item(i).inglese.replace("P0011", "'");
                                                               localStorage.setItem("h7quando",h7quando)
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7adesso"){
                                                               h7adesso = results.rows.item(i).inglese.replace("P0011", "'");
                                                               localStorage.setItem("h7adesso",h7adesso)
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7partenza"){
                                                               h7partenza = results.rows.item(i).inglese.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7arrivo"){
                                                               h7arrivo = results.rows.item(i).inglese.replace("P0011", "'");
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7veicolo"){
                                                               h7veicolo = results.rows.item(i).inglese.replace("P0011", "'");
                                                               localStorage.setItem("h7veicolo",h7veicolo)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7passeggeri"){
                                                               h7passeggeri = results.rows.item(i).inglese.replace("P0011", "'");
                                                               localStorage.setItem("h7passeggeri",h7passeggeri)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7fumatori"){
                                                               h7fumatori = results.rows.item(i).inglese.replace("P0011", "'");
                                                               localStorage.setItem("h7fumatori",h7fumatori)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7animali"){
                                                               h7animali = results.rows.item(i).inglese.replace("P0011", "'");
                                                               localStorage.setItem("h7animali",h7animali)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7minori"){
                                                               h7minori = results.rows.item(i).inglese.replace("P0011", "'");
                                                               localStorage.setItem("h7minori",h7minori)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7disabili"){
                                                               h7disabili = results.rows.item(i).inglese.replace("P0011", "'");
                                                               localStorage.setItem("h7disabili",h7disabili)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7seggiolino"){
                                                               h7seggiolino = results.rows.item(i).inglese.replace("P0011", "'");
                                                               localStorage.setItem("h7seggiolino",h7seggiolino)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7pacchi"){
                                                               h7pacchi = results.rows.item(i).inglese.replace("P0011", "'");
                                                               localStorage.setItem("h7pacchi",h7pacchi)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7gancio"){
                                                               h7gancio = results.rows.item(i).inglese.replace("P0011", "'");
                                                               localStorage.setItem("h7gancio",h7gancio)
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "alertpartenza"){
                                                               alertstart = results.rows.item(i).inglese.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "alertdestinazione"){
                                                               alertend = results.rows.item(i).inglese.replace("P0011", "'");
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "alertinvio"){
                                                               alertinvio = results.rows.item(i).inglese.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "adesso1"){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;" + results.rows.item(i).inglese.replace("P0011", "'") + "&nbsp;");
                                                               }
                                                               
                                                               
                                                               
                                                               if(results.rows.item(i).id_traduzione == "tardi1"){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + results.rows.item(i).inglese.replace("P0011", "'") + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                                                               }
                                                               
                                                               }
                                                               
                                                               }
                                                               
                                                               if(localStorage.getItem("lingua")=="fr"){
                                                               
                                                               
                                                               for (i = 0; i < len; i++){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).francese.replace("P0011", "'"));
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h4richiesta"){
                                                               h4richiesta = results.rows.item(i).francese.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7quando"){
                                                               h7quando = results.rows.item(i).francese.replace("P0011", "'");
                                                               localStorage.setItem("h7quando",h7quando)
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "datacal"){
                                                               
                                                               $("#datacal").attr("placeholder",""+results.rows.item(i).francese.replace("P0011", "'")+"");
                                                               
                                                               }
															   
															   if(results.rows.item(i).id_traduzione == "rispopzioni"){
																	rispopzioni = results.rows.item(i).francese.replace("P0011", "'");
																	localStorage.setItem("rispopzioni",rispopzioni)
																}
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7adesso"){
                                                               h7adesso = results.rows.item(i).francese.replace("P0011", "'");
                                                               localStorage.setItem("h7adesso",h7adesso)
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7partenza"){
                                                               h7partenza = results.rows.item(i).francese.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7arrivo"){
                                                               h7arrivo = results.rows.item(i).francese.replace("P0011", "'");
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7veicolo"){
                                                               h7veicolo = results.rows.item(i).francese.replace("P0011", "'");
                                                               localStorage.setItem("h7veicolo",h7veicolo)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7passeggeri"){
                                                               h7passeggeri = results.rows.item(i).francese.replace("P0011", "'");
                                                               localStorage.setItem("h7passeggeri",h7passeggeri)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7fumatori"){
                                                               h7fumatori = results.rows.item(i).francese.replace("P0011", "'");
                                                               localStorage.setItem("h7fumatori",h7fumatori)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7animali"){
                                                               h7animali = results.rows.item(i).francese.replace("P0011", "'");
                                                               localStorage.setItem("h7animali",h7animali)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7minori"){
                                                               h7minori = results.rows.item(i).francese.replace("P0011", "'");
                                                               localStorage.setItem("h7minori",h7minori)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7disabili"){
                                                               h7disabili = results.rows.item(i).francese.replace("P0011", "'");
                                                               localStorage.setItem("h7disabili",h7disabili)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7seggiolino"){
                                                               h7seggiolino = results.rows.item(i).francese.replace("P0011", "'");
                                                               localStorage.setItem("h7seggiolino",h7seggiolino)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7pacchi"){
                                                               h7pacchi = results.rows.item(i).francese.replace("P0011", "'");
                                                               localStorage.setItem("h7pacchi",h7pacchi)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7gancio"){
                                                               h7gancio = results.rows.item(i).francese.replace("P0011", "'");
                                                               localStorage.setItem("h7gancio",h7gancio)
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "alertpartenza"){
                                                               alertstart = results.rows.item(i).francese.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "alertdestinazione"){
                                                               alertend = results.rows.item(i).francese.replace("P0011", "'");
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "alertinvio"){
                                                               alertinvio = results.rows.item(i).francese.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "adesso1"){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;" + results.rows.item(i).francese.replace("P0011", "'") + "&nbsp;");
                                                               }
                                                               
                                                               
                                                               
                                                               if(results.rows.item(i).id_traduzione == "tardi1"){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + results.rows.item(i).francese.replace("P0011", "'") + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "adesso"){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html("<font size='2'>"+results.rows.item(i).francese.replace("P0011", "'")+"</font>");
                                                               }
                                                               
                                                               }
                                                               
                                                               }
                                                               
                                                               if(localStorage.getItem("lingua")=="es"){
                                                               
                                                               
                                                               for (i = 0; i < len; i++){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html(results.rows.item(i).spagnolo.replace("P0011", "'"));
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h4richiesta"){
                                                               h4richiesta = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7quando"){
                                                               h7quando = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               localStorage.setItem("h7quando",h7quando)
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "datacal"){
                                                               
                                                               $("#datacal").attr("placeholder",""+results.rows.item(i).spagnolo.replace("P0011", "'")+"");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7adesso"){
                                                               h7adesso = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               localStorage.setItem("h7adesso",h7adesso)
                                                               }
															   
															   if(results.rows.item(i).id_traduzione == "rispopzioni"){
																	rispopzioni = results.rows.item(i).spagnolo.replace("P0011", "'");
																	localStorage.setItem("rispopzioni",rispopzioni)
																}
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7partenza"){
                                                               h7partenza = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "h7arrivo"){
                                                               h7arrivo = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7veicolo"){
                                                               h7veicolo = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               localStorage.setItem("h7veicolo",h7veicolo)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7passeggeri"){
                                                               h7passeggeri = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               localStorage.setItem("h7passeggeri",h7passeggeri)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7fumatori"){
                                                               h7fumatori = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               localStorage.setItem("h7fumatori",h7fumatori)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7animali"){
                                                               h7animali = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               localStorage.setItem("h7animali",h7animali)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7minori"){
                                                               h7minori = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               localStorage.setItem("h7minori",h7minori)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7disabili"){
                                                               h7disabili = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               localStorage.setItem("h7disabili",h7disabili)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7seggiolino"){
                                                               h7seggiolino = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               localStorage.setItem("h7seggiolino",h7seggiolino)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7pacchi"){
                                                               h7pacchi = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               localStorage.setItem("h7pacchi",h7pacchi)
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "h7gancio"){
                                                               h7gancio = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               localStorage.setItem("h7gancio",h7gancio)
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "alertpartenza"){
                                                               alertstart = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "alertdestinazione"){
                                                               alertend = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               
                                                               }
                                                               if(results.rows.item(i).id_traduzione == "alertinvio"){
                                                               alertinvio = results.rows.item(i).spagnolo.replace("P0011", "'");
                                                               
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "adesso1"){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;" + results.rows.item(i).spagnolo.replace("P0011", "'") + "&nbsp;");
                                                               }
                                                               
                                                               
                                                               
                                                               if(results.rows.item(i).id_traduzione == "tardi1"){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + results.rows.item(i).spagnolo.replace("P0011", "'") + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                                                               }
                                                               
                                                               if(results.rows.item(i).id_traduzione == "adesso"){
                                                               $("#"+ results.rows.item(i).id_traduzione +"").html("<font size='2'>"+results.rows.item(i).spagnolo.replace("P0011", "'")+"</font>");
                                                               }
                                                               
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
