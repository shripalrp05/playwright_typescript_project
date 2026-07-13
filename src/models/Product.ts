export class Product {

    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly price: number,
        public readonly brand: string,
        public readonly category: string,
        public readonly userType: string
    ) {}

}