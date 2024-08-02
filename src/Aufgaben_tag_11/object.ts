//!----- Objekte Aufgabe 1 --------!

type Apple = {
    color: string;
    size: string;
    isSweet: boolean;
  };
  
  let redApple: Apple = { color: 'red', size: 'big', isSweet: false };
  let greenApple: Apple = { color: 'green', size: 'small', isSweet: false };
  let yellowApple: Apple = { color: 'yellow', size: 'big', isSweet: true };
  let apples: Apple[] = [redApple, greenApple, yellowApple];

  for (let i = 0; i < apples.length; i++) {
    console.log(apples[i].size);
  }
  apples.forEach(apple => {
    console.log(apple.color);
  })
    console.log("Anzahl der Äpfel: ", apples.length);

    let pinkApple: Apple = {color: "pink", size: "large"};
    apples.push(pinkApple)


//!----- Objekte Aufgabe 2 --------!

    type Pet = {
        tiertyp: string;
        namen: string[];
      };
      
      let unsereHaustiere: Pet[] = [
        {
          tiertyp: 'Katze',
          namen: ['Gipsy', 'Nala', 'Dinky']
        },
        {
          tiertyp: 'Hunde',
          namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
        }
      ];

      console.log(unsereHaustiere[0].namen[1]);
      console.log(unsereHaustiere[1].namen[2]);
      
      unsereHaustiere.forEach((name) => {
        console.log(name.namen);
      })

      unsereHaustiere[1].namen[2] = "Snoppy"
      unsereHaustiere[0].namen[2] = "Pinky"
    
      let Giraffen: Pet = {
        tiertyp: "Giraffe",
        namen: ["Herbert", "Gustav"]
        }
        unsereHaustiere.push(Giraffen)

        console.log(unsereHaustiere);

        console.clear()

//!----- Objekte Aufgabe 3 --------!

type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

let unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

console.clear()

//!----- Objekte Aufgabe 4 --------!

type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
  };
  
  let meineTopVier: Musik[] = [
    {
      kunstler: 'The Beatles',
      title: 'Abbey Road',
      release_jahr: 1969,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      kunstler: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_jahr: 1978,
      formate: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_jahr: 1971,
      formate: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_jahr: 1983,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];

  console.log(meineTopVier[0].kunstler);
  console.log(meineTopVier[0].formate[3]);
  console.log(meineTopVier[1].gold);
  console.log(meineTopVier[2].release_jahr.toString(), " und ", meineTopVier[3].release_jahr.toString());
  console.log(meineTopVier[3].formate[2]);
  console.log(meineTopVier[3].title.slice(17,21));

  let RedHotChilliPeppers: Musik = {
    kunstler: 'Steve',
    title: 'Snow',
    release_jahr: 2006,
    formate: ['LP', 'CD', 'MC', 'Download'],
    gold: true
  }

  meineTopVier.push(RedHotChilliPeppers)

  console.log(meineTopVier);

  //!----- Objekte Aufgabe 5 --------!

  type PeriodActive = {
    start: number;
    end: number | string;
    extra?: number;
};

type Singer = {
    name: string;
    country: string;
    period_active: PeriodActive;
    genre: string;
};

const singers: Singer[] = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

//*   ⬇️ Bands alphabetisch nach Namen sortieren ⬇️
singers.sort((a, b) => a.name.localeCompare(b.name))
console.log(singers);

// singers.forEach ((year) => {
//     console.log(year.period_active);
// })
//*   ⬇️ Bands aufsteigend nach dem Karrierebeginn sortieren ⬇️
singers.sort((yearA, yearB) => {
    return yearB.period_active.start - yearA.period_active.start
})
console.log(singers);

  //!----- Objekte Bonus-Aufgabe --------!
   
  type PeriodActiveTwo = {
    start: number;
    end: number | string;
    extra?: number;
  };
  
  type SingerTwo = {
    name: string;
    country: string;
    period_active: PeriodActiveTwo;
    genre: string;
  };
  
  const singersTwo: SingerTwo[] = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: 'Rock / Pop' },
    {
      name: 'Elvis Presley',
      country: 'United States',
      period_active: { start: 1954, end: 1977 },
      genre: 'Rock and roll'
    },
    {
      name: 'Michael Jackson',
      country: 'United States',
      period_active: { start: 1964, end: 2009 },
      genre: 'Pop / Rock / Dance / Soul / R&B'
    },
    {
      name: 'Elton John',
      country: 'United Kingdom',
      period_active: { start: 1964, end: 'present' },
      genre: 'Pop / Rock'
    },
    {
      name: 'Madonna',
      country: 'United States',
      period_active: { start: 1979, end: 'present' },
      genre: 'Pop / Dance / Electronica'
    },
    {
      name: 'Led Zeppelin',
      country: 'United Kingdom',
      period_active: { start: 1968, end: 1980 },
      genre: 'Hard rock / Blues rock / Folk rock'
    },
    {
      name: 'Rihanna',
      country: 'United States',
      period_active: { start: 2005, end: 'present' },
      genre: 'R&B / Pop / Dance / Hip-hop'
    },
    {
      name: 'Pink Floyd',
      country: 'United Kingdom',
      period_active: { start: 1965, end: 1996, extra: 2014 },
      genre: 'Progressive rock / Psychedelic rock'
    }
  ];

