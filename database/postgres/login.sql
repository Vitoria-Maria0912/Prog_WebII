CREATE TABLE "Login" (
    "id_login" VARCHAR(255) PRIMARY KEY,
    "email" VARCHAR(100) NOT NULL UNIQUE,
    "senha" VARCHAR(20) NOT NULL
);
