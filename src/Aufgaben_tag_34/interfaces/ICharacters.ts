çexport interface ICharacters {
    info:    IInfo;
    results: IResult[];
}

export interface IInfo {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface IResult {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   ILocation;
    location: ILocation;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface ILocation {
    name: string;
    url:  string;
}
