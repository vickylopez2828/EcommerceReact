import Card from "./ProductItem";

export interface ProductList {
    db: Card[];
    title: string;
    iconLeft: string;
    iconRight: string;
}