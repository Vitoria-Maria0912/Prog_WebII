import { Filme } from "./Filme";

export class Cliente{

    private nome: string;
    private login: Map<string, string>;
    private listaDeFilmes: Filme[];

    constructor(nome: string, login: Map<string, string>, listaDeFilmes: Filme[]) {
        this.nome = nome;
        this.login = login;
        this.listaDeFilmes = listaDeFilmes;
    }

    public getnome(): string {
        return this.nome;
    }

    public getLogin(): Map<string, string> {
        return this.login;
    }

    public getListaDeFilmes(){
        return this.listaDeFilmes;
    }
}

export interface ClienteInterface{
    nome: string,
    login: Map<string, string>,
    listaDeFilmes: Filme[]
}