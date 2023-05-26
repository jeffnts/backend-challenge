import { Test } from '@nestjs/testing';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { Account } from './account.model';
import { AccountsRepository } from './accounts.repository';
import { instanceToPlain } from 'class-transformer';

describe('AccountsController', () => {
  let accountsController: AccountsController;
  let accountsService: AccountsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AccountsController],
      providers: [AccountsService, AccountsRepository],
    }).compile();

    accountsService = moduleRef.get<AccountsService>(AccountsService);
    accountsController = moduleRef.get<AccountsController>(AccountsController);
  });

  describe('all', () => {
    it('should return an array of accounts', async () => {
      const result: Account[] = [new Account(1,[100, 30])];

      jest.spyOn(accountsService, 'all').mockImplementation(() => Promise.resolve(result));

      expect((await accountsController.all()).map(account => instanceToPlain(account)))
        .toEqual(expect.arrayContaining([{id: 1, balance: 130}] as any[]));
    });
  });
});