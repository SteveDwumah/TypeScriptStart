import Song from "./Song";

const song1 = new Song("One Love", "Bob Marley")
const song2 = new Song("Freund", "Hanybal")

song1._durationInSeconds = 166
song2._durationInSeconds = 138

class SongWithUnknownArtist extends Song {

    constructor(title: string){
        super(title,"Unknown")
    }
    
    setArtist(name:string): void{
        this._artist = name;
    }
}

const unknownArtistSong = new SongWithUnknownArtist ("Unknown Artist Song")
console.log(unknownArtistSong);
unknownArtistSong.setArtist("Bob Marley")