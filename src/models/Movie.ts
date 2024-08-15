import { Status } from "./Status";

export class Movie {

    private id: number;
    private title: string;
    private synopsis: string;
    private status: Status;
    private genre: string;
    private ageRating: string;
    
    constructor(id: number, title: string, synopsis: string, genre: string, ageRating: string) {
        this.id = id;
        this.title = title;
        this.synopsis = synopsis;
        this.status = Status.AVALIABLE;
        this.genre = genre;
        this.ageRating = ageRating;
    }

    public getId(): number {
        return this.id;
    }

    public getTitulo(): string {
        return this.title;
    }

    public getSinopse(): string {
        return this.synopsis;
    }

    public getGenero(): string {
        return this.genre;
    }

    public getClassificacaoIndicativa(): string {
        return this.ageRating;
    }

    public getStatus(): Status {
        return this.status;
    }

    public setStatus() {
        this.status = (this.status === Status.AVALIABLE ? Status.UNAVALIABLE : Status.AVALIABLE);
    }
    
}

export interface MovieInterface {
    id: number;
    title: string,
    synopsis: string,
    genre: string,
    ageRating: string
}
