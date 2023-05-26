import { Account } from '../account.model'
import { DepositDTO } from '../dtos'

export interface AccountRepositoryInterface {
    all: () => Promise<Account[]>

    find: (id: number) => Promise<Account>
    
    deposit: (request: DepositDTO) => void
}