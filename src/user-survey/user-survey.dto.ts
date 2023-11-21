import { ArgsType, Field, } from '@nestjs/graphql';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class CreateUserSurveyInput {
  @Field(() => Number)
  @IsNotEmpty()
  survey_id: number;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  username: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => Boolean, { defaultValue: false })
  @IsOptional()
  @IsBoolean()
  is_creator?: boolean;
}

@ArgsType()
export class UpdateUserSurveyInput {
  @Field(() => Boolean)
  @IsNotEmpty()
  @IsBoolean()
  is_creator: boolean;
}
