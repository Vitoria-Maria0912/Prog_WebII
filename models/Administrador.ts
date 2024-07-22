import path from 'path';

class Administrador {

    private name: string;
    private login: Map<string, string>;
    private listaDeFilmes;
    private listaDeClientes;    

    constructor(name: string, login: Map<string, string>) {
        this.name = name;
        this.login = login;
        this.listaDeFilmes = path.join(__dirname, '../database', 'filmes.json');
        this.listaDeClientes = path.join(__dirname, '../database', 'clientes.json');;    
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

export interface AdministradorInterface {
    nome: string,
    login: Map<string, string>
}