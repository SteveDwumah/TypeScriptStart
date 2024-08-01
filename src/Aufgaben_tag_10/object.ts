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

    let pinkApple: Apple = {color: "blue", size: "large"};
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

//!----- Objekte Aufgabe 3 --------!