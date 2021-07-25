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

    

function makeblue() {document.querySelectorAll('#square').forEach(item => {
    item.addEventListener('mouseover', (e) => {
       e.target.style.backgroundColor = 'blue'
    })
}) }

makeblue()

const eraseAndReset = function() {
    const wholeGrid = container.querySelectorAll('div')
    // wholeGrid.forEach(onesquare => onesquare.style.backgroundColor = 'black')
   wholeGrid.forEach(onesquare => onesquare.remove());
   const promptAsk = prompt('how many squares would you like?')
const ask = parseInt(promptAsk,10)
  if(isNaN(ask)) {
      window.alert('you must pick a positive INTEGER! (max: 100)');
      eraseAndReset()
  }
 else if (ask < 0 ) {
     window.alert('must pick a POSITVE integer! (max: 100)')
     eraseAndReset()
 } else if(ask > 100 ) {
     window.alert('must pick a positve integer! (MAX: 100)')
      eraseAndReset()
    }
 
   board(ask)
   makeblue()
}


reset.addEventListener('click', eraseAndReset)

