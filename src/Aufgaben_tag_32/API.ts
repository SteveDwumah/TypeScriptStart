//!----------------- Aufgabe 2 & 3 ---------------------

// type Img = {
//     id: string;
//     author: string;
//     width: number;
//     height: number;
//     url: string;
//     download_url: string;
// }
// const imageDiv = document.getElementById("images") as HTMLDivElement

// fetch("https://picsum.photos/v2/list")
//     .then((response: Response) => {
//         if (!response.ok){
//             console.log("Response doent work !!");
//         }
//         console.log(response);
//         return response.json()
//     })
//     .then((img: Img[]) => {
//         img.forEach ((img: Img) => {
//             console.log(img);
//             const image = document.createElement("img")
//             image.src = img.download_url
//             const authorFig = document.createElement("figcaption")
//             authorFig.textContent = img.author
//             imageDiv.appendChild(image)
//             imageDiv.appendChild(authorFig)
//         });
        
//     })
//     .catch((error: Error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("All images available");
//     })

 
    //!----------------- Aufgabe 4 --------------------------

    type Comments = {
        postId: number;
        id: number;
        name: string;
        email: string;
        body: string;
    }

    fetch ("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response: Response) => {
            if(response){
                // console.log(response);
                return response.json()
            }
        })
        .then((comment: Comments[]) => {
            comment.forEach ((comment: Comments)=>{
                console.log(comment);
                console.log(comment.email);
            })
        })
        .catch((error: Error) => {
            console.error(error);
        })
        .finally (() => {
            console.log("All comments and emails are available");
        }) 

//?-----------------------------------------------------------------------------------

type Posts = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response: Response) => {
    if(response){
        return response.json()
    }
})
.then((post: Posts[]) => {
    post.forEach((post: Posts) => {
        console.log(post);
        let highestId = 0;
        if(post.id > highestId){
            highestId = post.id;
            console.log("Highest Id is:", highestId);
        }
        
        
    })

})

