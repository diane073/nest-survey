import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyService } from './survey.service';
import { SurveyResolver } from './survey.resolver';
import { Survey } from 'src/entity/survey.entity';
import { UserSurvey } from 'src/entity/user-survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Survey, UserSurvey])],
  providers: [SurveyService, SurveyResolver]
})
export class SurveyModule {}
