export interface Character {
    name?:       string;
    height?:     string;
    mass?:       string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    hair_color?: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    skin_color?: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    eye_color?:  string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    birth_year?: string;
    gender?:     string;
    homeworld?:  string;
    films?:      string[];
    species?:    any[];
    vehicles?:   string[];
    starships?:  any[];
    created?:    string;
    edited?:     string;
    url?:        string;
}
