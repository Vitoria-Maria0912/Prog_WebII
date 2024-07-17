class Manager {

    name: string;
    login: Map<string, string>;
    listOfMovies: any;
    clientsOfSistem: Map<string, string>;
    
    constructor(name: string, login: Map<string, string>, listOfMovies: any, clientsOfSistem: Map<string, string>,) {
        this.name = name;
        this.login = login;
        this.listOfMovies = listOfMovies;
        this.clientsOfSistem = clientsOfSistem;  
    }
}