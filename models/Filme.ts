import { Status } from "./Status";

export class Filme {

    private id: string;
    private titulo: string;
    private sinopse: string;
    private status: Status;
    private genero: string;
    private classificacaoIndicativa: string;
    
    constructor(id: string, titulo: string, sinopse: string, genero: string, classificacaoIndicativa: string) {
        this.id = id;
        this.titulo = titulo;
        this.sinopse = sinopse;
        this.status = Status.DISPONIVEL;
        this.genero = genero;
        this.classificacaoIndicativa = classificacaoIndicativa;
    }

    public getId(): string {
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

    public getStatus(): Status {
        return this.status;
    }

    public setStatus() {
        this.status = (this.status === Status.DISPONIVEL ? Status.ALUGADO : Status.DISPONIVEL);
    }
    
}

export interface FilmeInterface {
    id: string;
    titulo: string,
    sinopse: string,
    genero: string,
    classificacaoIndicativa: string
}
