import { Test } from '@nestjs/testing';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { Account } from './account.model';
import { AccountsRepository } from './repositories/accounts.repository';
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

  describe('find', () => {
    it('should return an account by your id', async () => {
      const account: Account = new Account(1,[100, 30]);

      jest.spyOn(accountsService, 'find').mockImplementation(() => Promise.resolve(account));

      const result = await accountsController.find(1)

      expect(instanceToPlain(result)).toEqual({id: 1, balance: 130});
    });
  })

  describe('deposit', () => {
    it('should return an account with the balance updated', async () => {
      const account: Account = new Account(1,[100, 30]);

      jest.spyOn(accountsService, 'deposit').mockImplementation(() => Promise.resolve(account));

      const result = await accountsController.deposit({ accountId: 1, value: 130 })

      expect(instanceToPlain(result)).toEqual({id: 1, balance: 130});
    });
  })
});