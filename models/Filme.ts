export class Filme {

    private id: number;
    private titulo: string;
    private sinopse: string;
    private genero: string;
    private classificacaoIndicativa: string;
    
    constructor(id: number, titulo: string, sinopse: string, genero: string, classificacaoIndicativa: string) {
        this.id = id;
        this.titulo = titulo;
        this.sinopse = sinopse;
        this.genero = genero;
        this.classificacaoIndicativa = classificacaoIndicativa;
    }

    public getId(): number{
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getSinopse(): string {
        return this.sinopse;
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
    sinopse: string,
    genero: string,
    classificacaoIndicativa: string
}
