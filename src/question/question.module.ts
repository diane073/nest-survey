import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';
import { Question } from 'src/entity/question.entity';
import { Survey } from 'src/entity/survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Survey])],
  providers: [QuestionService, QuestionResolver]
})
export class QuestionModule {}
