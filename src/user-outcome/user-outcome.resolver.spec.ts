import { Test, TestingModule } from '@nestjs/testing';
import { UserOutcomeResolver } from './user-outcome.resolver';

describe('UserOutcomeResolver', () => {
  let resolver: UserOutcomeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserOutcomeResolver],
    }).compile();

    resolver = module.get<UserOutcomeResolver>(UserOutcomeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
