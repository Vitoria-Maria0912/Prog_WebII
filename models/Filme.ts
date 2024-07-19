export class Filme {

    private id: number;
    private titulo: string;
    private descricao: string;
    private genero: string;
    private classificacaoIndicativa: string;
    
    constructor(id: number, titulo: string, descricao: string, genero: string, classificacaoIndicativa: string) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.genero = genero;
        this.classificacaoIndicativa = classificacaoIndicativa;
    }

    public getId(): number{
        return this.id;
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

export interface FilmeInterface {
    id: number;
    titulo: string,
    descricao: string,
    genero: string,
    classificacaoIndicativa: string
}
