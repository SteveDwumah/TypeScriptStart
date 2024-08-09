type FootballCard = {
    playerName: string;
    age: number;
    team: string;
    position: string;
    goalsScored: number;
    matchesPlayed: number;
    imageUrl: string;
  };
  
  const footballCards: FootballCard[] = [];
  
  function addFootballCard(card: FootballCard) {
    footballCards.push(card);
    displayCards();
  }

  document.getElementById('footballCardForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const playerName = (document.getElementById('playerName') as HTMLInputElement).value;
    const age = parseInt((document.getElementById('age') as HTMLInputElement).value);
    const team = (document.getElementById('team') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const goalsScored = parseInt((document.getElementById('goalsScored') as HTMLInputElement).value);
    const matchesPlayed = parseInt((document.getElementById('matchesPlayed') as HTMLInputElement).value);
    const imageUrl = (document.getElementById('imageUrl') as HTMLInputElement).value;
  
    const newCard: FootballCard = {
      playerName,
      age,
      team,
      position,
      goalsScored,
      matchesPlayed,
      imageUrl
    };
  
    addFootballCard(newCard);
  });
  
  function displayCards() {
    const cardContainer = document.getElementById('cardContainer');
    if (cardContainer) {
      cardContainer.innerHTML = '';
      footballCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
          <img src="${card.imageUrl}" alt="${card.playerName}">
          <h2>${card.playerName}</h2>
          <p>Alter: ${card.age}</p>
          <p>Team: ${card.team}</p>
          <p>Position: ${card.position}</p>
          <p>Tore: ${card.goalsScored}</p>
          <p>Spiele: ${card.matchesPlayed}</p>
        `;
        cardContainer.appendChild(cardElement);
      });
    }
  }