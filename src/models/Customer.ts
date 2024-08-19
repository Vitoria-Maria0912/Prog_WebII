import { Login } from "./Login";
import { Movie } from "./Movie";

export class Customer {

    private id: number;
    private name: string;
    private login: Login;
    private collectionOfMovies: Movie[];

    constructor(id: number, name: string, login: Login, collectionOfMovies: Movie[]) {
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

    public getLogin(): Login {
        return this.login;
    }

    public getCollectionOfMovies(){
        return this.collectionOfMovies;
    }

    public setName(newName:string) {
        this.name = newName;
    }
}

export interface CustomerInterface {
    id: number,
    name: string,
    login: Login,
    collectionOfMovies: Movie[]
}