import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateQuestionInput {
  @Field(() => Number)
  @IsInt()
  @IsNotEmpty()
  survey_id: number;

  @Field(() => Number)
  @IsInt()
  @IsNotEmpty()
  question_number: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  question_content: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  question_example: string;
}

@ArgsType()
export class UpdateQuestionInput {
  @Field(() => String, { nullable: true })
  @IsString()
  question_content?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  question_example?: string;
}
