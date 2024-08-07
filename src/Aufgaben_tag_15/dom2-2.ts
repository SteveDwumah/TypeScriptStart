//!----- DOM 2 - Aufgabe 2 --------!

type SimplePerson = {
    vorname: string;
    nachname: string;
    land: string;
  };


  const form = document.getElementById('form1') as HTMLFormElement;
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const vorname = (document.getElementById('vorname') as HTMLInputElement).value;
    const nachname = (document.getElementById('nachname') as HTMLInputElement).value;
    const land = (document.getElementById('land') as HTMLSelectElement).value;

    
    const person: SimplePerson = {
      vorname: vorname,
      nachname: nachname,
      land: land,
    };
    
    console.log(person);
    });