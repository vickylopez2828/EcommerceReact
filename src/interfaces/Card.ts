
export default interface Card {
    id?: number;
    image: string;
    description: string;
    price: number;
    percentageOff?: number;
    //priceOff?: number;
    tagText: string;
    freeShipping: boolean;
    isOff?: boolean;
}