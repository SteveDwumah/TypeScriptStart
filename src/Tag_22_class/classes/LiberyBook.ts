class LiberyBook {
    private _id: string = "";
    private _currentOwner: string = "";
    _title: string = "";
    _author: string = "";
    private _isBorrewed: boolean = false

    get id() {
        return this._id
    }

    get currentOwner(){
        return this._currentOwner
    }

    constructor(title: string, author: string){
        this._title = title;
        this._author = author;
        this._id = this.generatedId()
    }


    private generatedId():string {
        return `${this._author.replace(" ", "")}-${Date.now()}`
    }

    public borrowBook(currentOwner: string): void {
        
        if(!this._isBorrewed){
            this._isBorrewed = true
            this._currentOwner = currentOwner
        } else {
            const headline = document.createElement("h2") as HTMLHeadElement
            headline.innerText = `The Book${this._title} is already borrowed`
            document.body.appendChild(headline)
            console.error(`The Book${this._title} is already borrowed`)
        }
    }

    public returnBook(): void {
        if(this._isBorrewed){
            this._isBorrewed = false
            this._currentOwner = ""
        } else {
            console.error(`The Book ${this._title} was not borrowed`)
        }
    }

}

export default LiberyBook