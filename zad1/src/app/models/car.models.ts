export interface Service{
party:string;
cost:number;
}

export interface Car{
    id:number;
    name:string;
    brand:string;
    service:Service[];
} 