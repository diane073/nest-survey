import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyModule } from './survey/survey.module';
import { QuestionModule } from './question/question.module';
import { OptionModule } from './option/option.module';
import { UserSurveyModule } from './user-survey/user-survey.module';
import { UserOutcomeModule } from './user-outcome/user-outcome.module';
import { Survey } from './entity/survey.entity';
import { Question } from './entity/question.entity';
import { Option } from './entity/option.entity';
import { UserSurvey } from './entity/user-survey.entity';
import { UserOutcome } from './entity/user-outcome.entity';
import * as dotenv from 'dotenv'; 

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src/**/*.graphql'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [Survey, Question, Option, UserOutcome, UserSurvey],
      useUTC: false,
      synchronize: true,
      logging: true,
    }),
    SurveyModule,
    QuestionModule,
    OptionModule,
    UserOutcomeModule,
    UserSurveyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
