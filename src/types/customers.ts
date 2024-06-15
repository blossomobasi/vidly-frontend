export interface Customer {
    _id: string;
    name: string;
    phone: string;
    isGold: boolean;
    __v: number;
}

export interface CustomerInput {
    name: string;
    phone: string;
    isGold?: boolean;
}
