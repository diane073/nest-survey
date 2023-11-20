import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/entity/question.entity';
import { Survey } from 'src/entity/survey.entity';
import { SurveyService } from 'src/survey/survey.service';
import { Repository } from 'typeorm';
import { CreateQuestionInput, UpdateQuestionInput } from './question.dto';
import { ResponseHandler } from 'src/common/base-handler';
import { SuccessHandler as SH } from 'src/common/status-handler';


@Injectable()
export class QuestionService {
  constructor (
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
    
    @InjectRepository(Survey)
    private readonly surveyService: SurveyService, 
  ) {}

  findOne(id: number){
    return this.questionRepo.findOne({ where: { id }, relations: { option: true }})
  }

  async create(createQuestionInput: CreateQuestionInput){
    const findCurrentSurvey = await this.surveyService.getOneSurvey(
        createQuestionInput.survey_id,
      );
    ResponseHandler.findObjectValidater(findCurrentSurvey);
    const newEntity = this.questionRepo.create(createQuestionInput);
    
    const saveData = await this.questionRepo.save(newEntity)
    return SH.created(saveData, 'New question has been created!')
  }

  async update(id: number, updateQuestionInput: UpdateQuestionInput) {
    const findOneQuestion = await this.findOne(id);
    ResponseHandler.findObjectValidater(findOneQuestion);
    const updatedQuestion = this.questionRepo.merge(findOneQuestion, updateQuestionInput);
    const newEntity = this.questionRepo.save(updatedQuestion)
    return SH.success(newEntity, 'Question has been updated.');
  }

  async delete(id: number){
    const findOneQuestion = await this.findOne(id);
    ResponseHandler.findObjectValidater(findOneQuestion);
    const deletedQuestion = await this.questionRepo.remove(findOneQuestion);
    return SH.success(deletedQuestion, 'Question has been deleted.');
  }

}
