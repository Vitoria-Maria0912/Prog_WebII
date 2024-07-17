class Client {

    name: string;
    login: Map<string, string>;
    listOfMovies: any;
    
    constructor(name: string, login: Map<string, string>, listOfMovies: any) {
        this.name = name;
        this.login = login;
        this.listOfMovies = listOfMovies;
    }
}