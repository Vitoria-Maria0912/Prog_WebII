Create table "Cliente" (
    "id_cliente" Varchar(255) PRIMARY KEY,
    "nome" Varchar(255) NOT NULL,
    "id_login" VARCHAR(255) NOT NULL UNIQUE,
);

Alter table "Clientes" add constraint "login_Cliente" foreign key ("id_login") references "Login" ("id_login");