import Card from "./Card";

export interface CardList {
    db: Card[];
    title: string;
    iconLeft: string;
    iconRight: string;
}