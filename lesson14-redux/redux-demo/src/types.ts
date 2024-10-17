export interface User {
    id: number;
    name: string;
}

export type ActionType = {
    type: string;
    payload?: any;
}