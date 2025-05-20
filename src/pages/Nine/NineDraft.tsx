

function NineDraft() {
  const suiteRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
  const suiteNames = ['-of-clubs', '-of-diamonds', '-of-hearts', '-of-spades'];
  const amountOfCards = 9; // OR 12
  const reqItem = amountOfCards === 9 ? '' : '13';
  return (
  <div className='box nine-box'>

    <div className='box-left nine-box-left'>
      <div className='game-board' id='nine-game-board'>
        {[0,1,2,3].map((row) => {
          return (
            <div 
              className='game-board-row' 
              id={`game-board-row-${row}`}
              key={row}
            >
              {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((col) => {
                // const cardIndex = row * 4 + col;
                // const card = cardsData[cardIndex];
                return (
                  // <div className='game-board-card' key={col}>
                  <div 
                    className='game-board-item nine-board-item'
                    id={`item-${suiteRanks[col]}${suiteNames[row]}`}
                    key={col}
                  >
                    <img
                      alt={`${suiteRanks[col]}${suiteNames[row]}`}
                      className='game-boart-item-img' 
                      src={`images/${suiteRanks[col]}${suiteNames[row]}.png`}
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className='clear' />
      <div className='game-player-hand' id='nine-player-hand' />
      <div className='clear' />
    </div>

    <div className='box-right nine-box-right'>
      <div className='game-details' id='nine-game-details'>
        <div className='game-name' id='nine-game-name'>$name</div>
        <div className='game-bank' id='nine-game-bank'>
          <div className='game-bank-title'>bank:</div>
          <div className='game-bank-cash' id='nine-bank-cash'>$bank</div>
        </div>
        <div className='game-players-list' id='nine-game-players-list' />
        <div className='btn-close-board' id='btn-close-board' /*onclick='loadPage({game:\"nine\",page: \"games\"});'*/>Close Board</div>
        <div className='game-log-chat' id='nine-game-log-chat'>
          <div className='game-log-chat-tab active' id='game-log' /*onclick='switchBetweenLC(\"log\");'*/>Log</div>
          <div className='game-log-chat-tab' id='game-chat'  /*onclick='switchBetweenLC(\"chat\");'*/>Chat</div>
          <div className='game-log-chat-content active' id='game-log-content' />
          <div className='game-log-chat-content' id='game-chat-content'>* in re-build mode</div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default NineDraft
