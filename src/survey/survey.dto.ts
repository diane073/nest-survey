import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class CreateSurveyWithUserInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  title: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  description: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  thanks_message: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  username: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  email: string;
}

@ArgsType()
export class UpdateSurveyInput {
  @Field(() => String)
  @IsOptional()
  @IsString()
  title: string;

  @Field(() => String)
  @IsOptional()
  @IsString()
  description: string;

  @Field(() => String)
  @IsOptional()
  @IsString()
  thanks_message: string;
}