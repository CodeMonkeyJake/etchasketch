const container = document.querySelector('.container')
const reset = document.querySelector('.reset')



    function board(num = 16) {
        for (let i = 0; i < num * num ; i++) {
            const container = document.querySelector('.container')
             const squares = document.createElement('div')
            squares.id = 'square'
            let squareHeight = 40/num + 'rem'
            let squareWidth = 40/num + 'rem'
            squares.style.height = `${squareHeight}`
            squares.style.width = `${squareWidth}`
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


const eraseAndReset = function() {
    const wholeGrid = container.querySelectorAll('div')
    wholeGrid.forEach(onesquare => onesquare.style.backgroundColor = 'black')
   
}


reset.addEventListener('click', eraseAndReset)

