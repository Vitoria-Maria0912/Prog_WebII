import { Movie } from "./Movie";

export class Client {

    private id: number;
    private name: string;
    private login: Map<string, string>;
    private collectionOfMovies: Movie[];

    constructor(id: number, name: string, login: Map<string, string>, collectionOfMovies: Movie[]) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.collectionOfMovies = collectionOfMovies;
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
}

export interface ClientInterface {
    id: number,
    name: string,
    login: Map<string, string>,
    collectionOfMovies: Movie[]
}