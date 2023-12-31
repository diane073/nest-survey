import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

@ArgsType()
export class CreateOptionInput {
  @Field(() => Number)
  @IsNotEmpty()
  @IsInt()
  question_id: number;

  @Field(() => Number)
  @IsNotEmpty()
  @IsInt()
  option_number: number;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  option_content: string;

  @Field(() => Number)
  @IsNotEmpty()
  score: number;
}

@ArgsType()
export class UpdateOptionInput {
  @Field(() => Number, { nullable: false })
  @IsOptional()
  question_id: number;

  @Field(() => Number)
  @IsOptional()
  option_number: number;

  @Field(() => String)
  @IsOptional()
  @IsString()
  option_content: string;

  @Field(() => Number)
  @IsOptional()
  score: number;
}