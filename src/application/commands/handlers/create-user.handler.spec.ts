/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserHandler } from './create-user.handler';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { CreateUserCommand } from '../create-user.command';

describe('CreateUserHandler', () => {
  let handler: CreateUserHandler;
  let repository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserHandler,
        {
          provide: UserRepository,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    handler = module.get<CreateUserHandler>(CreateUserHandler);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('should create a user', async () => {
    const command = new CreateUserCommand('testuser', 'password');
    await handler.execute(command);
    expect(repository.create).toHaveBeenCalledWith(expect.objectContaining({ username: 'testuser', password: 'password' }));
  });
});
