import { Filme } from "./Filme";

export class Cliente{

    private id: number;
    private nome: string;
    private login: Map<string, string>;
    private listaDeFilmes: Filme[];

    constructor(id: number, nome: string, login: Map<string, string>, listaDeFilmes: Filme[]) {
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.listaDeFilmes = listaDeFilmes;
    }

    public getId(): number {
        return this.id;
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

export interface ClienteInterface {
    id: number,
    nome: string,
    login: Map<string, string>,
    listaDeFilmes: Filme[]
}