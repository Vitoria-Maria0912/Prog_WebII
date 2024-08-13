import path from 'path';
import { Filme } from './Filme';
import { Cliente } from './Cliente';

class Administrador {

    private id: number;
    private name: string;
    private login: Map<string, string>;
    private listaDeFilmes: Filme[];
    private listaDeClientes: Cliente[];    

    constructor(id: number, name: string, login: Map<string, string>) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.listaDeFilmes = [];
        this.listaDeClientes = [];    
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