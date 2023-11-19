import { Module } from '@nestjs/common';
import { UserSurveyResolver } from './user-survey.resolver';

@Module({
  providers: [UserSurveyResolver]
})
export class UserSurveyModule {}
