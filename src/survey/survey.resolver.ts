import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateSurveyWithUserInput, UpdateSurveyInput } from './survey.dto';
import { SurveyService } from './survey.service';

@Resolver('Survey')
export class SurveyResolver {
  constructor(
    private readonly surveyService: SurveyService,
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
    @Args('createSurveyInput') createSurveyWithUserInput: CreateSurveyWithUserInput,
  ) {
    return this.surveyService.create(createSurveyWithUserInput);
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