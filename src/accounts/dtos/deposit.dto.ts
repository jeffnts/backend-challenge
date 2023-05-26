import { IsNotEmpty, IsPositive } from 'class-validator'

export class DepositDTO {
    @IsNotEmpty({
        message: 'This field can not be empty'
    })
    @IsPositive({
        message: 'This value must be greater than zero'
    })
    value: number

    @IsNotEmpty({
        message: 'This field can not be empty'
    })
    accountId: number
}