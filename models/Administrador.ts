class Administrador {

    private name: string;
    private login: Map<string, string>;
    private listaDeFilmes: Filme[];
    private listaDeClientes: Cliente[];    

    constructor(name: string, login: Map<string, string>, listaDeFilmes: Filme[], listaDeClientes: Cliente[]) {
        this.name = name;
        this.login = login;
        this.listaDeFilmes = listaDeFilmes;
        this.listaDeClientes = listaDeClientes;    
    }

    public getName(): string {
        return this.name;
    }

    public getLogin(): Map<string, string> {
        return this.login;
    }

    public getListaDeFilmes(){
        return this.listaDeFilmes;
    }

    public getListaDeClientes(){
        return this.listaDeClientes;
    }
}