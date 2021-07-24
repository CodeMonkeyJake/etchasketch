const container = document.querySelector('.container')


    function board(num = 16) {
        for (let i = 0; i < num; i++) {
            const container = document.querySelector('.container')
             const squares = document.createElement('div')
            squares.id = 'square'
             container.append(squares)
        }
    }

    board()
const squares = document.querySelector('#square')

    squares.addEventListener('mouseover', function() {
         
        document.getElementById('square').style.backgroundColor = 'blue'
        
    })

 