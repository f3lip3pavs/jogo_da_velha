const squares = document.querySelectorAll('.square');

document.addEventListener('DOMContentLoaded', () => {

    squares.forEach((square) => {
        square.addEventListener('click', move);
    });

});

function move(){
    
    let position = event.target.id;//event sera descontinuado. substituir futuramente

    if(squaresColection[position] == ''){//confere se a posição da array esta vazia para inserir um elemento
        insertSymbol(position);

        if(squaresColection[position] == 'x'){// insere os elementos 'x' e 'o' na div
            squares[position].innerHTML = '<div class="x"></div>'
        }else{
            squares[position].innerHTML = '<span class="material-symbols-outlined">circle</span>'
        }
    
    }

    isWiner();
    if(winer == true) gameOver();
}


function gameOver(){

    let divEmpty = document.querySelector('.empty');
    divEmpty.id = 'gameOver';

    let divTrack = document.createElement('div');
    divTrack.id = 'track';

    let h2 = document.createElement('h2');
    h2.innerHTML = 'Fim de Jogo'

    let divRestartButtom = document.createElement('div');
    divRestartButtom.id = 'restartButtom';
    divRestartButtom.innerHTML = 'Reiniciar Partida'

    divEmpty.appendChild(divTrack);

    divTrack.appendChild(h2);
    divTrack.appendChild(divRestartButtom);

    restartButtom.addEventListener('click', () => {restart()})
}

function restart(){
    //limpar elementos e reinicar jogo;
    let divEmpty = document.querySelector('.empty');
    divEmpty.innerHTML = '';
    divEmpty.id = '';

    //zerar array
    //retirar elementos

}