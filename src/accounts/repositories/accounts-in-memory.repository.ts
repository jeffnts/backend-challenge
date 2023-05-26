import { Account } from "../account.model";
import { DepositDTO } from "../dtos";
import { AccountRepositoryInterface } from "../interfaces";

export class AccountInMemoryInterface implements AccountRepositoryInterface {
    private accounts = new Array<Account>()

    constructor() {
        this.accounts.push(new Account(1,[100, -9]));
        this.accounts.push(new Account(2, [2000, -150]));

    }
    
    public async all(): Promise<Account[]> {
        return this.accounts;
    }

    public async find(id: number): Promise<Account> {

        return this.accounts        
            .find(account => `${account.id}` === `${id}`)
 
    }

    public async deposit(request: DepositDTO){
        const { accountId, value } = request

        return this.accounts
        .find(account => account.id === accountId)  
        .setTransaction(value)
        
    }
}