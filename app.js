document.getElementById('output').style.visibility='hidden';

document.getElementById('num').addEventListener('input', function (e) {
    document.getElementById('output').style.visibility='visible';
    let pounds = e.target.value;
    console.log(pounds);
    document.getElementById('gram').innerHTML = pounds /  0.002;
    document.getElementById('kilogram').innerHTML = pounds /2.20;
    document.getElementById('ounce').innerHTML = pounds * 16;

});


