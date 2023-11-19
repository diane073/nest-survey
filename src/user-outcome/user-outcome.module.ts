import { Module } from '@nestjs/common';
import { UserOutcomeService } from './user-outcome.service';
import { UserOutcomeResolver } from './user-outcome.resolver';

@Module({
  providers: [UserOutcomeService, UserOutcomeResolver]
})
export class UserOutcomeModule {}
