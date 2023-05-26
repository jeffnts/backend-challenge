import { ClassSerializerInterceptor, Controller, Get, Post, Body, Param,  UseInterceptors } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './account.model';
import { DepositDTO } from './dtos'
import { AccountType } from './types'

@Controller('accounts')
export class AccountsController {
    constructor(private accountsService: AccountsService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    public async all(): Promise<Account[]> {
        return  this.accountsService.all();
    }

    @Get(':id')
    public async find(@Param('id') id: number): Promise<AccountType> {
        return this.accountsService.find(id)
    }

    @Post('/deposit')
    public async deposit(@Body() request: DepositDTO) {
        return this.accountsService.deposit(request)
    }
}
