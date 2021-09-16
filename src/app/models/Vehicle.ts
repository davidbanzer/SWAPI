export interface Vehicle{
    name: string;
    model: string;
    manufacturer: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    cost_in_credits: string;
    length: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    cargo_capacity: string;
    consumables: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    vehicle_class: string;
    pilots: any[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}
