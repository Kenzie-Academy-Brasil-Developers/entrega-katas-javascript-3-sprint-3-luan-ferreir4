const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


let mainContent = document.getElementById("mainContainer");


function showResults(titleH3,res){
  
    mainContent.appendChild(titleH3);
    mainContent.appendChild(res);
}



function kata1() {
    // implemente o código do kata 1 aqui
    let title1 = document.createElement("h3");
    title1.innerText="Numeros de 1 a 25";

    let resContainer1 = document.createElement("p");

    let arrRes1 = [];
    let num = 1;

    for(let cont = 0; cont<25;cont++){
        
        arrRes1[cont] = num;
        num++
        
    }
    
    console.log(arrRes1);

    resContainer1.append(arrRes1);

    return showResults(title1,resContainer1);
}
kata1();


function kata2() {
    // implemente o código do kata 2 aqui
    let title2 = document.createElement("h3");
    title2.innerText="Numeros de 25 a 1";

    let resContainer2 = document.createElement("p");


    let arrRes2 = [];
    let num = 25;

    for(let cont = 0 ; cont<25;cont++){
        arrRes2[cont] = num;
        num--
    }

    console.log(arrRes2);

    resContainer2.append(arrRes2);

    return showResults(title2,resContainer2);
}
kata2();


function kata3() {
    // implemente o código do kata 3 aqui
    let title3 = document.createElement("h3");
    title3.innerText="Numeros de -1 a -25";

    let resContainer3 = document.createElement("p");


    let arrRes3 = [];
    let num = -1;

    for(let cont = 0; cont>=-25;cont--){
        arrRes3[num] = cont;
        num++;
    }

    console.log(arrRes3);

    resContainer3.append(arrRes3);

    return showResults(title3,resContainer3);
}
kata3();

function kata4() {
    // implemente o código do kata 4 aqui
    let title4 = document.createElement("h3");
    title4.innerText="Números de -25 a -1";

    let resContainer4 = document.createElement("p");

    let arrRes4 = [];
    let num = -25;

    for(let cont=0; cont<=24;cont++){
        arrRes4[cont]=num;
        num++
    }
    console.log(arrRes4);

    resContainer4.append(arrRes4);

    return showResults(title4,resContainer4);
}
kata4();
function kata5() {
    // implemente o código do kata 5 aqui
    let title5 = document.createElement("h3");
    title5.innerText="Números impares de 25 a -25";

    let resContainer5 = document.createElement("p");

    let num = 25;

    for(let cont=0; cont<=50;cont++){
       if(num%2!==0){
        resContainer5.append( num +" | ");
        }
        num--;  
    }

    return showResults(title5,resContainer5);  
}
kata5();


function kata6() {
    // implemente o código do kata 6 aqui
    let title6 = document.createElement("h3");
    title6.innerText="Números divisíveis por 3 até 100";

    let resContainer6 = document.createElement("p");

    let num = 1;

    for(let cont=0; cont<=100;cont++){
       if(num%3===0){
        resContainer6.append(num+" | ");
        }
        num++
    }

    return showResults(title6,resContainer6);  
}
kata6();


function kata7() {
    // implemente o código do kata 7 aqui
    let title7 = document.createElement("h3");
    title7.innerText="Números divisíveis por 7 até 100"

    let resContainer7 = document.createElement("p");

    let num = 1;

    for(let cont=0; cont<=100;cont++){
       if(num%7===0){
        resContainer7.append(num+" | ");
        }
        num++
    }

    return showResults(title7,resContainer7);  
}
kata7();


function kata8() {
    // implemente o código do kata 8 aqui
    let title8 = document.createElement("h3");
    title8.innerText="Números divisíveis por 3 e 7 de 100 até 1"

    let resContainer8 = document.createElement("p");

    let num = 100;

    for(let cont= 100; cont>0;cont--){
       if(num%3===0){
            resContainer8.append(num+" | ");
        }
        if(num%7===0){
            resContainer8.append(num+" | ");
        }
        num--
    }

    return showResults(title8,resContainer8);  
}
kata8();


function kata9() {
    // implemente o código do kata 9 aqui
    let title9 = document.createElement("h3");
    title9.innerText="Números ímpares e divisíveis por 5 até 100 "

    let resContainer9 = document.createElement("p");

    let num = 1;

    for(let cont = 0; cont<=100;cont++){
       if(num%2!==0 && num%5===0){
            resContainer9.append(num+" | ");
        }     
        num++
    }

    return showResults(title9,resContainer9);  
}
kata9();


function kata10() {
    // implemente o código do kata 10 aqui
    let title10 = document.createElement("h3");
    title10.innerText="Os 20 elementos de sampleArray"

    let resContainer10 = document.createElement("p");


    for(let cont = 0; cont < sampleArray.length ;cont++){
        
        resContainer10.append(sampleArray[cont]+" | ");
        
    }

    return showResults(title10,resContainer10);  
}
kata10();


function kata11() {
    // implemente o código do kata 11 aqui
    let title11 = document.createElement("h3");
    title11.innerText="Os elementos pares de sampleArray"

    let resContainer11 = document.createElement("p");


    for(let cont = 0; cont < sampleArray.length ;cont++){
        if(sampleArray[cont]%2===0){
        resContainer11.append(sampleArray[cont]+" | ");
        }
    }

    return showResults(title11,resContainer11);  
}
kata11();


function kata12() {
    // implemente o código do kata 12 aqui
    let title12 = document.createElement("h3");
    title12.innerText="Os elementos ímpares de sampleArray";

    let resContainer12 = document.createElement("p");

    for(let cont = 0; cont < sampleArray.length ;cont++){
        if(sampleArray[cont]%2!==0){
        resContainer12.append(sampleArray[cont]+" | ");
        }
    }
    return showResults(title12,resContainer12);
}
kata12();


function kata13() {
    // implemente o código do kata 13 aqui
    let title13 = document.createElement("h3");
    title13.innerText="Os elementos divisíveis por 8 de sampleArray";

    let resContainer13 = document.createElement("p");

    for(let cont = 0; cont < sampleArray.length ;cont++){
        if(sampleArray[cont]%8===0){
        resContainer13.append(sampleArray[cont]+" | ");
        }
    }
    return showResults(title13,resContainer13);
}
kata13();

function kata14() {
    // implemente o código do kata 14 aqui
    let title14 = document.createElement("h3");
    title14.innerText="O quadrado de cada elemento de sampleArray";

    let resContainer14 = document.createElement("p");
    let sqr = 0;
    for(let cont=0; cont < sampleArray.length; cont++){
        sqr = sampleArray[cont]*sampleArray[cont];
        resContainer14.append(sqr+" | ");
    }

    return showResults(title14,resContainer14);
}
kata14();

//Função criada para usar a Soma de Gauss 
//Para a resolução do kata 15
function somaGauss(n){
    let total = n+1
    let half = n/2;

    return half*total;
}

function kata15() {
    // implemente o código do kata 15 aqui
    let title15 = document.createElement("h3");
    title15.innerText="Exibir a soma de todos os números de 1 a 20.";

    let resContainer15 = document.createElement("p");
    let nTotal = 20;
    // Soma de Gauss
    let sum = somaGauss(nTotal);

    resContainer15.append(" | "+sum+" | ");
    return showResults(title15,resContainer15);
}
kata15();

function kata16() {
    // implemente o código do kata 16 aqui
    let title16 = document.createElement("h3");
    title16.innerText="Exibir a soma de todos os elementos de sampleArray";

    let resContainer16 = document.createElement("p");
    let sum=0;
    for(let cont = 0; cont < sampleArray.length; cont++){
        sum = sampleArray[cont]+sum;
    }
  
    // Soma de Gauss
    // let sum = somaGauss(nTotal); <--não funcionou aqui

    // RESULTADO --> 9096
    resContainer16.append(" | "+sum+" | ");
    return showResults(title16,resContainer16);
}
kata16();

function kata17() {
    // implemente o código do kata 17 aqui
    let title17 = document.createElement("h3");
    title17.innerText="Exibir o menor elemento de sampleArray";

    let resContainer17 = document.createElement("p");
    let smallNum = sampleArray[0];
    for(let cont = 0; cont < sampleArray.length; cont++){
        if(sampleArray[cont]<smallNum){
            smallNum = sampleArray[cont];
        }
    }
    // RESULTADO --> 20
    resContainer17.append(" | "+smallNum+" | ");
    return showResults(title17,resContainer17);
}
kata17();

function kata18() {
    // implemente o código do kata 18 aqui
    let title18 = document.createElement("h3");
    title18.innerText="Exibir o maior elemento de sampleArray";

    resContainer18 = document.createElement("p");
    let bigNum = sampleArray[0];
    for(let cont = 0; cont < sampleArray.length; cont++){
        if(sampleArray[cont]>bigNum){
            bigNum = sampleArray[cont];
            
        }
    }
    // RESULTADO --> 940
    resContainer18.append(" | "+bigNum+" | ");
    return showResults(title18, resContainer18);
}
kata18();

//TENHO É MEDO
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
