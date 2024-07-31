Create table "Administrador" (
    "id_administrador" Varchar(255) PRIMARY KEY,
    "nome" Varchar(255) NOT NULL default 'Administrador',
    "id_login" VARCHAR(255) NOT NULL UNIQUE,
);

Alter table "Administrador" add constraint "login_Adm" foreign key ("id_login") references "Login" ("id_login");