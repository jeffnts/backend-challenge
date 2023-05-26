import { AccountsService } from "./accounts.service";
import { AccountsController } from "./accounts.controller";

import { Module } from "@nestjs/common";
import { AccountsRepository } from "./repositories";

@Module({
  imports: [],
  controllers: [AccountsController],
  providers: [AccountsService, AccountsRepository],
})
export class AccountsModule {}
