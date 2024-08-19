import { Movie } from './Movie';
import { Customer } from './Customer';
import { Login } from './Login';

class Administrator {

    private id: number;
    private name: string;
    private login: Login;
    private collectionOfMovies: Movie[];
    private collectionOfCustomers: Customer[];    

    constructor(id: number, name: string, login: Login) {
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

    public getLogin(): Login {
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
    login: Login
}