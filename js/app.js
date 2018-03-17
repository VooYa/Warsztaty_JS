'use strict';
document.addEventListener('DOMContentLoaded', function () {
    var showMenuDOM = document.querySelector('.for-dropdown');
    var menuDOM = document.querySelector('.dropdown');

    console.log(showMenuDOM, menuDOM);

    showMenuDOM.addEventListener('mouseover', function () {
        menuDOM.style.display = 'block';

        showMenuDOM.addEventListener('mouseout', function () {
            menuDOM.style.display = 'none';
        })

        // console.log(99)
    });
    // tutaj będziemy umieszczać kod ze wszystkich zadań
    var buttons = document.querySelectorAll('.read-more');
    //console.log(buttons);
    //console.log(buttons[0].previousElementSibling);
    //buttons[0].addEventListener('click', function () {
    //    console.log('działa'); // To powinno pojawić się w konsoli po kliknięciu w //pierwszy przycisk

    //});
    //buttons[0].addEventListener('click', function() {
    //  console.log(this); // Powinien pojawić się przycisk w konsoli
    //});
    
//  blok który rozsuwa przycisk     
    
    function showHide() {
        var textArea = this.previousElementSibling;

        if (textArea.style.display === 'none' || textArea.style.display === '') {
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        } else {
            textArea.style.display = 'none';
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
        }
    }
    for (var i = 0; i<=buttons.length -1; i++) {
        buttons[i].addEventListener('click', showHide);
        
    }
    
//    buttons[0].addEventListener('click', showHide);
    
/* 
    to jest cały blok działający bez pętli for
    
    buttons[0].addEventListener('click', function () {
        var textArea = this.previousElementSibling;

        // Poniższa linijka sprawdza, czy `style.display` jest ustawiony na `none` LUB jest pusty
        // Dwie kreski obok siebie, czyli || oznaczają LUB, więc aby wykonał się kod podany w nawiasie klamrowym
        // warunek po jednej albo po drugiej stronie kresek musi być spełniony

        if (textArea.style.display === 'none' || textArea.style.display === '') {

            // ten kod wykona się, gdy spełni się jeden z powyższych warunków
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        } else {

            // ten kod zadziała, gdy warunek podany w `if` nie będzie spełniony, czyli w przypadku
            // gdy `style.display` jest inny niż `none` oraz gdy nie jest pusty
            textArea.style.display = 'none';
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
        }

    });

    buttons[1].addEventListener('click', function () {
        var textArea = this.previousElementSibling;
        if (textArea.style.display === 'none' || textArea.style.display === '') {
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        } else {
            textArea.style.display = 'none';
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
        }
    });


    function showHide() {
        var textArea = this.previousElementSibling;

        if (textArea.style.display === 'none' || textArea.style.display === '') {
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        } else {
            textArea.style.display = 'none';
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
        }
    }
    buttons[2].addEventListener('click', showHide);
*/

})
