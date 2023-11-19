import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserSurveyService } from 'src/user-survey/user-survey.service';
import { CreateSurveyInput, UpdateSurveyInput } from './survey.dto';
import { SurveyService } from './survey.service';

@Resolver('Survey')
export class SurveyResolver {
  constructor(
    private readonly surveyService: SurveyService,
    private readonly userSurveyService: UserSurveyService
  ) {}

  @Query()
  getSurvey(@Args('idOrEmail') idOrEmail: string) {
    if (isNaN(Number(idOrEmail))) {
      return this.surveyService.getSurveyListByUser(idOrEmail)
    } else {
      return this.surveyService.getOneSurvey(Number(idOrEmail));
    }   
  }

  @Mutation()
  createSurvey(
    @Args('createSurveyInput') createSurveyInput: CreateSurveyInput,
  ) {
    return this.surveyService.create(createSurveyInput);
  }

  @Mutation()
  updateSurvey(@Args('id') id: number, @Args('updateSurveyInput') updateSurveyInput: UpdateSurveyInput,) {
    return this.surveyService.update(id, updateSurveyInput);
  }

  @Mutation()
  deleteSurvey(@Args('id') id: number) {
    return this.surveyService.delete(id);
  }
}