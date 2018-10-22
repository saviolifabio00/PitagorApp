/* calcoli in js */
function calcolo(){
	/* dichiarazione variabili del form */
    var c1=document.forms.pitagora.c1.valueAsNumber;
    var c2=document.forms.pitagora.c2.valueAsNumber;
    var q1=c1*c1;
    var q2=Math.pow(c2,2);
    var somma=q1+q2;
    var ipotenusa=Math.sqrt(somma);
    document.getElementById('risultato').innerHTML="L'ipotenusa misura "+ipotenusa+" cm";
}

  function cancella(){
    document.getElementById('risultato').innerHTML=" "; 
  }

