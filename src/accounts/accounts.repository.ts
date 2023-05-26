import { Injectable } from "@nestjs/common";
import { Account } from "./account.model";

@Injectable()
export class AccountsRepository {
    private accounts = new Array<Account>()

    constructor() {
        this.accounts.push(new Account(1,[100, -9]));
        this.accounts.push(new Account(2, [2000, -150]));

    }

    public async all(): Promise<Account[]> {
        return this.accounts;
    }
}