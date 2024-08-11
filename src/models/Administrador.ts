import path from 'path';

class Administrador {

    private id: number;
    private name: string;
    private login: Map<string, string>;
    private listaDeFilmes;
    private listaDeClientes;    

    constructor(id: number, name: string, login: Map<string, string>) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.listaDeFilmes = path.join(__dirname, '../database', 'filmes.json');
        this.listaDeClientes = path.join(__dirname, '../database', 'clientes.json');;    
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

    public getListaDeFilmes(){
        return this.listaDeFilmes;
    }

    public getListaDeClientes(){
        return this.listaDeClientes;
    }
}

export interface AdministradorInterface {
    id: number,
    nome: string,
    login: Map<string, string>
}