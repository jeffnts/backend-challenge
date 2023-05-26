import { Injectable } from '@nestjs/common';
import { AccountsRepository } from './repositories/accounts.repository';
import { Account } from './account.model';
import { DepositDTO } from './dtos';
import { AccountType } from './types'

@Injectable()
export class AccountsService {
    constructor(private accountsRepository: AccountsRepository) {}

    public async all(): Promise<Account[]>  {
        return  this.accountsRepository.all();
    }

    public async find(id: number): Promise<AccountType> {
        const result = await this.accountsRepository.find(id)

        return {
            id: result?.id,
            balance: result?.balance
        }
    }

    public async deposit(request: DepositDTO){
        await this.accountsRepository.deposit(request)

        return this.find(request.accountId)
    }
}
