window.addEventListener('DOMContentLoaded', function (){
    let squares = Array.from(document.getElementById("board").querySelectorAll("div"));
    squares.forEach(function(square){
        square.classList.add("square");
    })

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    
    function updateBoard (index) {
        board[index] = currentPlayer;
    }

    function changePlayer (){
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    }

    function playerPlay (square, index){
        square.innerText = currentPlayer;
        square.classList.add(currentPlayer);
        updateBoard(index);
        changePlayer();
    }
    
    squares.forEach((square, index) => {
        square.addEventListener('click', () => playerPlay(square, index));
    });

    squares.forEach(function(square){
        square.addEventListener("mouseover", function(e){
            e.target.classList.add("hover");
        });

        square.addEventListener("mouseout", function(e){
            e.target.classList.remove("hover");
        });
    });
});