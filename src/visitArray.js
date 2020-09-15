let placesToVisit = ['New York', 'San Francisco', 'Miami', 'Los Angeles', 'New Orleans'];
let divArr; 
let h1Arr; 
let m = document.getElementById("visit");
let arrDiv;
let arrH1;

//Vi bygger elementerne
for(i=0; i < 4; i++){
    arrDiv = [document.createElement('div')];
}

for(i=0; i < 4; i++){
    arrH1 = [document.createElement('h1')];
}

arrH1[0].innerHTML = 'For-loop til at vise array';
arrH1[1].innerHTML = 'Funktionen printer, efter vi har tilføjet Jackson';
arrH1[2].innerHTML = 'For-loop til at vise array';
arrH1[3].innerHTML = 'For-loop til at vise array';

arrDiv[0].appendChild(h1);

//For-loop til at udskrive vores array
for(i = 0; i < placesToVisit.length; i++){
    let c = document.createElement('p');
    c.innerHTML = placesToVisit[i];
    arrDiv[0].appendChild(c);
}

m.appendChild(arrDiv[0]);

h1no2.innerHTML = 'Funktionen printer, efter vi har tilføjet Jackson';
div2.appendChild(h1no2);
m.appendChild(div2);

//Vi tilføjer Jackson til array'et
placesToVisit.push('Jackson');

outputArray(placesToVisit);

//Vi fjerner de første to elementer
placesToVisit.splice(0, 1);
placesToVisit.splice(1, 1);

outputArray(placesToVisit);

//Sorterer arrayet
placesToVisit.sort(); 

outputArray(placesToVisit);

