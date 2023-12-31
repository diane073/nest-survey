import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { CreateQuestionInput, UpdateQuestionInput } from './question.dto';
import { QuestionService } from './question.service';

@Resolver('Question')
export class QuestionResolver {
    constructor(
        private readonly questionService: QuestionService,
    ) {}

    @Query()
    getQuestion(@Args('id') id: number){
        return this.questionService.findOne(id);
    }

    @Mutation()
    createQuestion(@Args('createQuestionInput') createQuestionInput: CreateQuestionInput){
        return this.questionService.create(createQuestionInput);
    }

    @Mutation()
    updateQuestion(@Args('id') id: number, @Args('updateQuestionInput') updateQuestionInput: UpdateQuestionInput){
        return this.questionService.update(id, updateQuestionInput);
    }

    @Mutation()
    deleteQuestion(@Args('id') id: number){
        return this.questionService.delete(id);
    }
}
