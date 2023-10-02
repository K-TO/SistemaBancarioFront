export class AuthenticationResponse {
    id: string;
    name: string;
    identification: string;
    token: string;
    message: string;

    constructor(id: string, name: string, identification: string, token: string, message: string) {
        this.id = id;
        this.name = name;
        this.identification = identification;
        this.token = token;
        this.message = message;
    }
}