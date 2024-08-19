export class Login {

    private username: string;
    private password: string;

    constructor(username:string, password:string) {
        this.username = username;
        this.password = password;
    }

    public getUsername(): string {
        return this.username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setUsername(newUsername:string) {
        this.username = newUsername;
    }

    public setPassword(newPassword:string) {
        this.password = newPassword;
    }
}