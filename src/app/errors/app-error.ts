export class AppError{
    constructor(public message:string, public error?:Response){}
}