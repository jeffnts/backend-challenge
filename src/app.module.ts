import { AccountsModule } from "./accounts/accounts.module";
import { Module } from "@nestjs/common";
import { CoreModule } from "./core/core.module";

@Module({
  imports: [AccountsModule, CoreModule],
})
export class AppModule {}
