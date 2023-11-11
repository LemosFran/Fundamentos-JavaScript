let usuario = parseFloat(prompt("ingrese la cantidad de personas, bah: "));
let myArray = []; 
myArray.toString;
let suma = 0;





if(usuario > 0){
    for(i = 0; i < usuario; i++)
    {
        let usuario2 = parseFloat(prompt("ingrese el monto de cada uno"));
        myArray.push(usuario2);
        
    }
    for(i = 0; i < myArray.length; i++)
        {
            suma += myArray[i];
        }
}



myArray.forEach(function(elem, indice)
{
    document.write("La persona: " + (indice + 1) + " puso: " + elem + "<br>");
});

document.write("<br>", "la suma en total es: ", suma, "<br><br>");


document.write("a poner cada uno es: ", (suma / usuario), "<br><br>"); 


let resultadoCadaUno = [];



for(saraSa in myArray)
{
    resultadoCadaUno.push(myArray[saraSa] - (suma / usuario));
}



resultadoCadaUno.forEach(function(elem, indice)
{
    if(elem < 0)
    {
        let toS = elem.toString();
        let reco = toS.substring(1, 8);
        console.log(reco);
        document.write( "la persona: ", (indice + 1), " debe poner: ", reco, "<br>");
       // document.write("<br>", elem.toString());    // funciona bien, me larga el numero como caracter
        //ahora como le resto el caracter nro 0, que seria el menos.    
    }
    else{
        document.write("la persona: ", (indice + 1), " debe recibir: ", elem, "<br>");
    }
});