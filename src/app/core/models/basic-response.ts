export class BasicResponse {

    message: string;
    hasError: boolean;

    constructor(message: string, hasError: boolean){
        this.message = message;
        this.hasError = hasError;
    }
}