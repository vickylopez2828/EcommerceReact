import {ProductItem} from "./ProductItem";

export interface ProductList {
    db: ProductItem[];
    title: string;
    iconLeft: string;
    iconRight: string;
}