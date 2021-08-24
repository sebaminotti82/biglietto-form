var genera = document.getElementById('genera')
var annulla = document.getElementById('annulla')

// TOGLIERE TUTTI I console.LOG AL TERMINE DEL PROGETTO!!!!!!!!

genera.addEventListener('click',function(){

//inseriamo qualche controllo per i vari  utonti




// utiliziamo una variabile con Math.floor per generare randomicamente
// un numero carrozza per il biglietto
var codiceCarrozza = Math.floor(Math.random()*12)+1
console.log(codiceCarrozza);

// stesso procedimento per il codice cp del biglietto (che non so cosa sia il
//      cp codice)

var codiceCp = Math.floor(Math.random()*2000)+1
console.log(codiceCp);
// costante che indica il prezzo al km
const prezzoKm = 0.21;
console.log(prezzoKm);

// variabile per il nome passeggero nell imput
var nome = document.getElementById('nome').value

if(nome=='' || !isNaN(nome)){
    alert('il campo nome non deve essere vuoto o contenere numeri')+location.reload()
}
console.log(nome);

// variabile per l'imput dei km da percorrere
var km = document.getElementById('km').value
if((km < 10)||(km>5000)){
    alert('tratta non ideonea alle nostre linee ! inserire una tratta che va dai 10 ai 5000km')+location.reload()
}
// variabile per il select della fascia d'età
var eta = document.getElementById('eta').value
console.log(eta);

// variabile che indica il prezzo del biglietto intero
var prezzoIntero = prezzoKm * km
console.log(prezzoIntero);
var sconto 
if 

(eta=='minorenne') {
    sconto = prezzoIntero / 100 * 80
    sconto = sconto.toFixed(2)
  document.getElementById('totaleBiglietto').innerHTML =sconto + " "+'€'
  document.getElementById('scontoApplicato').innerHTML ='sconto 20%'
  document.getElementById('kmPercorsi').innerHTML =km + " "+"km"
  document.getElementById('codiceCp').innerHTML ='codice N°'+" "+codiceCp
  document.getElementById('numeroCarrozza').innerHTML ='carrozza N°'+ " " + codiceCarrozza
  document.getElementById('nomePasseggero').innerHTML =nome
    
} 

else if(eta =='adulto'){
    sconto = prezzoIntero
    sconto = sconto.toFixed(2)
    document.getElementById('totaleBiglietto').innerHTML =sconto + " "+'€'
    document.getElementById('scontoApplicato').innerHTML ='nessuno sconto'
    document.getElementById('kmPercorsi').innerHTML =km + " "+"km"
    document.getElementById('codiceCp').innerHTML ='codice N°'+" "+codiceCp
    document.getElementById('numeroCarrozza').innerHTML ='carrozza N°'+ " " + codiceCarrozza
    document.getElementById('nomePasseggero').innerHTML =nome
    
   
} 

else if ( eta =='anziano'){
    sconto = prezzoIntero / 100 * 60
    sconto = sconto.toFixed(2)
    document.getElementById('totaleBiglietto').innerHTML =sconto + " "+'€'
    document.getElementById('scontoApplicato').innerHTML ='sconto 40%'
    document.getElementById('kmPercorsi').innerHTML =km + " "+"km"
    document.getElementById('codiceCp').innerHTML ='codice N°'+" "+codiceCp
    document.getElementById('numeroCarrozza').innerHTML ='carrozza N°'+ " " + codiceCarrozza
    document.getElementById('nomePasseggero').innerHTML =nome

} 

else if(eta=='null'){
    alert('inserisci una fascia d\' eta\' per poter compilare il biglietto')
    location.reload()
}





})

// SEZIONE PER IL PULSANTE ANNULLA . CHE FARA' RIPARTIRE LA PAGINA DI FATTO COSI AZZERANDO IL BIGLIETTO

annulla.addEventListener('click',function(){

document.getElementsByClassName('form').style.display=location.reload()


})


