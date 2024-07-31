Create table "Filmes" (
    "id_filme" Varchar(255) PRIMARY KEY,
    "titulo" Varchar(255) NOT NULL,
    "sinopse" Varchar(255) NOT NULL,
    "status" Varchar(255) default 'DISPONIVEL' NOT NULL ,
    "genero" Varchar(255) NOT NULL,
    "classificacaoIndicativa" Varchar(255) NOT NULL,
    "id_cliente" Varchar(255) default 'NAO_ALOCADO'
);

Alter table "Filmes" add constraint "filmesRefCliente" foreign key ("id_cliente") references "Cliente" ("id_cliente");