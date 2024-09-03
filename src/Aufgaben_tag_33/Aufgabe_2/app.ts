// main.ts
interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string; url: string };
    location: { name: string; url: string };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
  interface CharacterResponse {
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string | null;
    };
    results: Character[];
  }

  function fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character?page=1')
      .then(response => response.json())
      .then((data: CharacterResponse) => {
        displayCharacters(data.results);
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Daten:', error);
      });
  }
  
  function displayCharacters(characters: Character[]) {
    const characterList = document.getElementById('character-list') as HTMLUListElement;
    characterList.innerHTML = '';
  
    characters.forEach(character => {
      const listItem = document.createElement('li');
      listItem.textContent = character.name;
      characterList.appendChild(listItem);
    });
  
  }
  
  fetchCharacters();