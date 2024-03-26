/* Teme de lecție:

1) Implementați funcționalitatea care după completarea formularului și apăsarea butonului „Confirmare” -
un film nou este adăugat la listă. Pagina nu trebuie reîncărcată.
Noul film ar trebui adăugat la movieDB.movies.
Pentru a accesa valoarea de intrare, accesați-o ca input.value;
P.S. Există mai multe opțiuni pentru rezolvarea problemei, oricare care funcționează este acceptată.


2) Când faceți clic pe coșul de gunoi, articolul va fi eliminat din listă (dificil)


3) Filmele trebuie sortate alfabetic */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    


    const movieDB = {
        movies: [
            "Zoro",
            "Mafia",
            "Avatar",
            "Leon",
            "Spider Man"
        ]
    };

    

    const movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = document.querySelector('.adding__input');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newMovies = addInput.value;
        movieDB.movies.push(newMovies);
        movieDB.movies.sort();


        addForm.reset();
        createMovieList();
       
    });

    const fakeAdd =document.querySelector('.promo__adv');
    fakeAdd.remove();


    function createMovieList() {
        movieList.innerHTML = "";
        const moviesSorted = movieDB.movies.sort();
        

        moviesSorted.forEach((film, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        
        const btnsDelete = document.querySelectorAll('.delete');

        btnsDelete.forEach((element, i) => {
            element.addEventListener('click', () => {
                element.parentElement.remove();
                movieDB.movies.splice(i, 1)

                createMovieList();
            });
        }); 
   
    };


    createMovieList();


});

