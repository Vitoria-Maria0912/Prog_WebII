class Cliente{

    private name: string;
    private login: Map<string, string>;
    private listaDeFilmes: Filme[];

    constructor(name: string, login: Map<string, string>, listaDeFilmes: Filme[]) {
        this.name = name;
        this.login = login;
        this.listaDeFilmes = listaDeFilmes;
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
}