export class Product {
    generation:number = 0;
    price: number = 0
    readonly DISCOUNT_PERCENT: number = 5

    constructor(public name: string, public salary: number) {}

    getPrice() : number {
        return this.price
    }

    setPrice(price:number) : number {
        return this.price = price
    }


}

