import { ArgsType, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsArray, IsString, IsEmail } from 'class-validator';

@ArgsType()
export class CreateUserOutcomeInput {
  @Field(() => Number)
  @IsNotEmpty()
  @IsInt()
  survey_id: number;

  @Field(() => Number)
  @IsNotEmpty()
  @IsInt()
  user_id: number;

  @Field(() => Number)
  @IsNotEmpty()
  @IsInt()
  question_id: number;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  username: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => Number)
  @IsNotEmpty()
  @IsInt()
  total_score: number;

  @Field(() => [String])
  @IsArray()
  @IsNotEmpty()
  user_answer: string[];
}
