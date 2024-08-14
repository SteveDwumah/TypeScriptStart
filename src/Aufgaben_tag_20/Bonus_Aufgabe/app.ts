class  Series {
    title: string;
    description: string;
    startYear: number;
    endYear: number;
    episodes: Episode[];

    constructor(title: string, description: string, startYear: number, endYear: number, episodes: Episode[]){
        this.title = title;
        this.description = description;
        this.startYear = startYear;
        this.endYear = endYear;
        this.episodes = episodes

    }
}

class Episode{
    title: string;
    length: number;
    description: string;
    actors: Actor[];



    constructor(title: string, lenght: number, description: string, actors: Actor[]){
        this.title = title;
        this.length = lenght;
        this.description = description;
        this.actors = actors;
    }
}

class Actor {
    firstName: string;
    lastName: string;
    birthday: string;
    gender: string;


    constructor(firstName: string, lastName: string, birthday: string, gender: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.gender = gender;
    }
}


const actor1 = new Actor("Gaten", "Matarazzo", "2002-09-08", "Male");
const actor2 = new Actor("Finn", "Wolfhard", "2002-12-23", "Male");
const actor3 = new Actor("Millie Bobby", "Brown", "2004-02-19", "Female");

const episode1 = new Episode("Kapitel eins: Suzie, hörst du mich?",50 ,"Dustin kehrt aus dem Sommercamp zurück", [actor1, actor2, actor3])
const episode2 = new Episode("Kapitel sechs: E Pluribus Unum", 54, "Die Russen erwischen Steve und Robin", [actor1, actor2, actor3])

const strangerThings = new Series ("Stranger Things", "In einer Kleinstadt in Indiana verschwindet der 12 jährige Will Byers. Vor allem seine alleinerziehende Mutter macht sich Sorgen.", 2016, 2019, [episode1, episode2])

console.log(strangerThings);

function printSeriesInfo(series: Series) {
    console.log(`Title: ${series.title}`);
    console.log(`Description: ${series.description}`);
    console.log(`Start Year: ${series.startYear}`);
    console.log(`End Year: ${series.endYear}`);
    console.log(`Number of Episodes: ${series.episodes.length}`);

    console.log("Actors:");
    console.log(actor1.firstName, actor1.lastName);
    console.log("-", actor1.birthday);
    console.log("-", actor1.gender);

    console.log(actor2.firstName, actor2.lastName);
    console.log("-", actor2.birthday);
    console.log("-", actor2.gender);

    console.log(actor3.firstName, actor3.lastName);
    console.log("-", actor3.birthday);
    console.log("-", actor3.gender);
}

printSeriesInfo(strangerThings)