import { Module } from '@nestjs/common';
import { UserOutcomeService } from './user-outcome.service';
import { UserOutcomeResolver } from './user-outcome.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOutcome } from 'src/entity/user-outcome.entity';
import { UserSurvey } from 'src/entity/user-survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserOutcome, UserSurvey])],
  providers: [UserOutcomeService, UserOutcomeResolver]
})
export class UserOutcomeModule {}
