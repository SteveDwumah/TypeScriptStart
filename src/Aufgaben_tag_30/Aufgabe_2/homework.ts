function exerciseOne():Promise<string> {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Exercise 1 done.");
            let exerciseTimer: boolean = true
            if(exerciseTimer){
                resolve("Exercise 1 done.")
            } else {
                reject("Exercise 1 not done")
            }
        }, 1000 * 20)
    })
}

function exerciseTwo():Promise<string> {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let exerciseTimer: boolean = true
            if(exerciseTimer){
                resolve("Exercise 2 done.")
            } else {
                reject("Exercise 2 not done")
            }
        }, 1000 * 30)
    })
}

function exerciseThree():Promise<string> {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let exerciseTimer: boolean = true
            if(exerciseTimer){
                resolve("Exercise 3 done.")
            } else {
                reject("Exercise 3 not done")
            }
        }, 1000 * 40)
    })
}
//! V1
// exerciseOne().then(() => console.log(exerciseTwo()))
//     .then(() => console.log(exerciseThree()))
//     .catch((error) => {
//         console.error("No Exercise done", error)
//     }
//     )

//! V2

// exerciseOne().then((message) => {
//     paragraph.textContent = `  ${message}  `;
//     console.log(message)
//   }) .catch((error)=>{
//     console.error(error);
//   });
  
//   exerciseTwo().then((message) => {
//     paragraph.textContent += `  ${message}  `;
//     console.log(message)
//   });
  
//   exerciseThree().then((message) => {
//     paragraph.textContent += `  ${message}  `;
//     console.log(message)
//   });


  const paragraph = document.getElementById("homeworkStatus") as HTMLParagraphElement;

  paragraph.textContent = "Starting..."

Promise.all([exerciseOne(), exerciseTwo(), exerciseThree()])
     .then((resp: [string, string, string]) => {
             resp.forEach((result: string) => {
                 console.log(result);
                 paragraph.textContent += result
             })
         }).catch((error) => console.error(error))
         .finally (() =>{
            paragraph.textContent += " Homework done "
         })