export class User {
    public username: string = ''
    private password: string = ''
    private LOGIN_ATTEMPTS: number = 0

    constructor(username:string,password:string) {
        this.username = username
        this.password = password
    }

    getLoginAttempts() : number {
        return this.LOGIN_ATTEMPTS
    }

    login(password:string) : boolean {
        if(password == 'secret123') {
            this.LOGIN_ATTEMPTS += 1
            return true
        } else {
            this.LOGIN_ATTEMPTS += 1
            return false
        }
    }






}
