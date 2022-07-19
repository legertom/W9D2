class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const board = document.createElement('ul');
    board.style.height = '60vh';
    board.style.width = '60vw';
    for (let i=0; i<9; i++){
      const box = document.createElement('li');
      board.appendChild(box);
      box.style.backgroundColor = 'gray';
      box.addEventListener( 'mouseover', function(){
        box.style.backgroundColor = 'yellow';
      })
      box.addEventListener('mouseout', function () {
        box.style.backgroundColor = 'gray';
      })
      let that = this;
      box.addEventListener('click', function () {
        that.handleClick(this);
      })
      box.style.border = 'solid black 1px';
    }
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(3, 33%)';
    board.style.gridTemplateRows = 'repeat(3, 33%)';
    board.style.listStyle = 'none';

    this.el.appendChild(board);
  }
  
  bindEvents() {
    //install a player's mark on the board
    console.log("inside bindevents")
    this.innerText = "some text inside bind events"
      
  }

  handleClick(e) {
    let that = this;
    e.addEventListener('click', function () {
      that.bindEvents();
    });
  }

  makeMove(square) {
    if (square.innerText === '') {
      square.innerText = this.game.currentPlayer;
    } else {
      alert('invalid move');
    }
  }

}

module.exports = View;
