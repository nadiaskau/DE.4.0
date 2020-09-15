let placesToVisit = ['New York', 'San Francisco', 'Miami', 'Los Angeles', 'New Orleans'];

document.write('<h1>For loop:</h1> <br>')
//For-loop til at udskrive vores array
for(i = 0; i < placesToVisit.length; i++){
    document.write(placesToVisit[i] + '<br>');
}

document.write('<h1>Tilføjelse af Jackson:</h1> <br>')
//Vi tilføjer Jackson til array'et
placesToVisit.push('Jackson');

outputArray(placesToVisit);

document.write('<h1>Fjerner to elementer</h1> <br>')
//Vi fjerner de første to elementer
placesToVisit.splice(0, 1);
placesToVisit.splice(1, 1);

outputArray(placesToVisit);

document.write('<h1>Sortering</h1> <br>')
//Sorterer arrayet
placesToVisit.sort(); 

outputArray(placesToVisit);

