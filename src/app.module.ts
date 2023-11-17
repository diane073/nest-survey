import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'; 
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyModule } from './survey/survey.module'
import { UsersModule } from './users/users.module';

import { User } from './users/entity/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${__dirname}/../env/.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
        
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [User],
      useUTC: false,
      synchronize: true,
      logging: true,
    }),
    SurveyModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
