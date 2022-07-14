var users = ['x', 'o'];
var squaresColection = ['','','','','','','','',''];
var userTime = true; //true = player x 
var winer = false;

//insere 'x' ou 'o' na array e troca a vez do jogador
function insertSymbol(position){
    if(userTime){
        squaresColection[position] = users[0];
        userTime = false;
    }else{
        squaresColection[position] = users[1];
        userTime = true;
    }
 
}

function isWiner(){
    let winersPositions = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(i=0; i < winersPositions.length; i++){
        
        let pos1 = winersPositions[i][0];// i busca os arrays dentro de isWiner e 0 o primeiro elemento dentro dessa array
        let pos2 = winersPositions[i][1];
        let pos3 = winersPositions[i][2];

        if(squaresColection[pos1] == 'x' && squaresColection[pos2] == 'x' && squaresColection[pos3] == 'x' ||
        squaresColection[pos1] == 'o' && squaresColection[pos2] == 'o' && squaresColection[pos3] == 'o'){
                
            winer = true;
        }
    }

    return winer;
}