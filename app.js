const container = document.querySelector('.container')
const reset = document.querySelector('.reset')

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

    

document.querySelectorAll('#square').forEach(item => {
    item.addEventListener('mouseover', (e) => {
       e.target.style.backgroundColor = 'blue'
    })
})


// reset.addEventListener('click', () => {

//     document.querySelectorAll('#square').style.backgroundColor = 'black'

// })