import { Movie } from './Movie';
import { Client } from './Client';

class Administrator {

    private id: number;
    private name: string;
    private login: Map<string, string>;
    private collectionOfMovies: Movie[];
    private collectionOfCustomers: Client[];    

    constructor(id: number, name: string, login: Map<string, string>) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.collectionOfMovies = [];
        this.collectionOfCustomers = [];    
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getLogin(): Map<string, string> {
        return this.login;
    }

    public getCollectionOfMovies(){
        return this.collectionOfMovies;
    }

    public getCollectionOfCustomers(){
        return this.collectionOfCustomers;
    }
}

export interface AdministratorInterface {
    id: number,
    name: string,
    login: Map<string, string>
}