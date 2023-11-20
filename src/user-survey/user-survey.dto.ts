import { ArgsType, Field, } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

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
  @IsString()
  email: string;

  @Field(() => Boolean)
  @IsNotEmpty()
  @IsBoolean()
  is_creator: boolean;
}

@ArgsType()
export class UpdateUserSurveyInput {
  @Field(() => Boolean)
  @IsNotEmpty()
  @IsBoolean()
  is_creator: boolean;
}
