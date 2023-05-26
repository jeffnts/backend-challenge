import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './account.model';

@Controller('accounts')
export class AccountsController {
    constructor(private accountsService: AccountsService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    public async all(): Promise<Account[]> {
        return await this.accountsService.all();
    }
}
