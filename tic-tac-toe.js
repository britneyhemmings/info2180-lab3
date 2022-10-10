window.addEventListener('DOMContentLoaded', function (){
    let squares = Array.from(document.getElementById("board").querySelectorAll("div"));
    squares.forEach(function(square){
        square.classList.add("square");
    })
    
    let isGameFinished = false;
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    
    function updateBoard (index) {
        board[index] = currentPlayer;
    }

    function changePlayer (){
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    }

    function squareEmpty(square){
        if(square.innerText === "X" || square.innerText ==="O"){
            return false;
        }else{
            return true;
        }
    }

    function playerPlay (square, index){
        if(squareEmpty(square) && isGameFinished != true){
            square.innerText = currentPlayer;
            square.classList.add(currentPlayer);
            updateBoard(index);
            checkWinner();
            changePlayer();
            square.classList.remove(currentPlayer);
        } 
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

    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let playerXwin = "playerXwin";
    let playerOwin = "playerOwin";
    let declareWinner = document.getElementById('status');
    //console.log(declareWinner);

    function checkWinner() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningCombinations[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announceWinner(currentPlayer == 'X' ? playerXwin : playerOwin);
            isGameFinished = true;
            return;
        }
    }


    const announceWinner = (result) => {
        switch(result){
            case playerXwin:
                declareWinner.innerHTML ="Congratulations! X is the Winner!";
                declareWinner.classList.add("you-won");
                break;
            case playerOwin:
                declareWinner.innerHTML ="Congratulations! O is the Winner!";
                declareWinner.classList.add("you-won");
                break;
        }
    };

    const newGameBtn = document.querySelector("button");
    //console.log(newGameBtn);

    newGameBtn.addEventListener("click", e => {
        e.preventDefault();
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        isGameFinished = false;
        squares.forEach(function(square){
            square.innerText = '';
            square.classList.remove('square.X');
            square.classList.remove('square.O');
        });
        declareWinner.classList.remove("you-won");
        declareWinner.innerHTML = "Move your mouse over a square and click to play an X or an O";
    });
});