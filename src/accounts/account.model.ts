import { Exclude, Expose } from "class-transformer";

export class Account {
    readonly id: number

    @Exclude() 
    private readonly transactions: number[]

    constructor(id: number, transactions: number[] = []) {
        this.id = id;
        this.transactions = transactions;
    }
    
    @Expose()
    get balance(): number {
        return this.transactions.reduce((acc, curr) => acc + curr, 0)
    }  


    public setTransaction(value: number){
        this.transactions.push(value)
    }    
}