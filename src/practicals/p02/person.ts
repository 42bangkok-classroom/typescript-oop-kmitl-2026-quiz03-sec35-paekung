export class Person {
    firstname: string = ''
    lastname: string = ''
    private age: number = 0
    static COUNTRY: string = 'Thailand'

    getFullName() : string {
        return this.firstname + ' ' + this.lastname
    }

    setAge(age: number) : number {
        return this.age = age
    }

    getAge(): number {
        return this.age
    }

}