export interface Result {
    title?: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    episode_id?: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    opening_crawl?: string;
    director?: string;
    producer?: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    release_date?: string;
    characters?: string[];
    planets?: string[];
    starships?: string[];
    vehicles?: string[];
    species?: string[];
    created?: Date;
    edited?: Date;
    url?: string;
}

export interface Film {
    count?: number;
    next?: any;
    previous?: any;
    results?: Result[];
}
