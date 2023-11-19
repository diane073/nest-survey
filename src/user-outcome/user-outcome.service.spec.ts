import { Test, TestingModule } from '@nestjs/testing';
import { UserOutcomeService } from './user-outcome.service';

describe('UserOutcomeService', () => {
  let service: UserOutcomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserOutcomeService],
    }).compile();

    service = module.get<UserOutcomeService>(UserOutcomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
