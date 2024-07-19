class Filme {

    private titulo: string;
    private descricao: string;
    private genero: string;
    private classificacaoIndicativa: string;
    
    constructor(titulo: string, descricao: string, genero: string, classificacaoIndicativa: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.genero = genero;
        this.classificacaoIndicativa = classificacaoIndicativa;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getGenero(): string {
        return this.genero;
    }

    public getClassificacaoIndicativa(): string {
        return this.classificacaoIndicativa;
    }
}