import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateUserOutcomeInput } from './user-outcome.dto';
import { UserOutcomeService } from './user-outcome.service';

@Resolver('UserOutcome')
export class UserOutcomeResolver {
  constructor(
    private readonly userOutcomeService: UserOutcomeService
  ) {}

  @Query()
  getUserOutcomeListBySurvey(@Args('survey/:survey_id') survey_id: number) {
    return this.userOutcomeService.findAllBySurveyId(survey_id)
  }

  @Query()
  getUserOutcomeListByUser(@Args('user/:user_id') user_id: number) {
    return this.userOutcomeService.findAllByUserId(user_id)
  }

  @Query()
  getUserOutcome(@Args('id') id: number) {
    return this.userOutcomeService.findOne(id)
  }

  @Mutation()
  createUserOutcome(@Args('createUserOutcomeInput') createUserOutcomeInput: CreateUserOutcomeInput) {
    return this.userOutcomeService.create(createUserOutcomeInput)
  }
}
