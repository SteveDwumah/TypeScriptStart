class Vocabulary{
    private _words: string [] = [];
    protected _language: string;


    constructor(language: string){
        this._language = "English"
    }
    
    public addWord (word: string): void{
        if (word.length > 0 && !this._words.includes(word)){
            this._words.push(word)
        }else {
            console.error(`Das Wort "${word}" kann nicht hinzugefügt werden.`);
        }
    }

    public displayAll(): void {
        console.log(`Sprache: ${this._language}`);
        console.log(`Wörter: ${this._words}`);
    }
}
    
export default Vocabulary