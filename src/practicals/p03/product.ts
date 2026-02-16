export class Product {
    readonly name:string = ''
    private price: number = 0
    static readonly DISCOUNT_PERCENT : number = 10

    constructor(name:string,price?:number){
        this.name = name
        this.price = price!
    }

    getPrice() : number {
        return this.price
    }

    setPrice(price: number) {
        this.price = price
    }
}

