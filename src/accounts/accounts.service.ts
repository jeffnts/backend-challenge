import { Injectable } from '@nestjs/common';
import { AccountsRepository } from './accounts.repository';
import { Account } from './account.model';

@Injectable()
export class AccountsService {
    constructor(private accountsRepository: AccountsRepository) {}

    public async all(): Promise<Account[]>  {
        return await this.accountsRepository.all();
    }
}
