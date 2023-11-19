import { Test, TestingModule } from '@nestjs/testing';
import { UserSurveyResolver } from './user-survey.resolver';

describe('UserSurveyResolver', () => {
  let resolver: UserSurveyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSurveyResolver],
    }).compile();

    resolver = module.get<UserSurveyResolver>(UserSurveyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
