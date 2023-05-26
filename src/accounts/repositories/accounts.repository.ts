import { Injectable } from "@nestjs/common";
import { AccountRepositoryInterface } from '../interfaces'
import { AccountInMemoryInterface } from ".";

@Injectable()
export class AccountsRepository extends AccountInMemoryInterface implements AccountRepositoryInterface  {
    constructor(){
        super()
    }
}