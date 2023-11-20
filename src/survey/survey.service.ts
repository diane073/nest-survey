import { Injectable } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from 'src/entity/survey.entity';
import { UserSurvey } from 'src/entity/user-survey.entity';
import { CreateSurveyInput, UpdateSurveyInput } from './survey.dto';
import { ResponseHandler } from 'src/common/base-handler';
import { SuccessHandler as SH } from 'src/common/status-handler';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepo: Repository<Survey>,

    @InjectRepository(UserSurvey)
    private userSurveyRepo: Repository<UserSurvey>,
  ) {}

  findOne(id: number) {
    return this.surveyRepo.findOne({ where: { id } });
  }
  
  async getOneSurvey(id: number): Promise<Survey> {
    const findCurrentSurvey = await this.surveyRepo.findOne({ 
      where: {id,},
      relations: ['question', 'question.option'],
      });
    ResponseHandler.findObjectValidater(findCurrentSurvey);
    return findCurrentSurvey;
  }

  async getSurveyListByUser(email: string) {
    const userSurvey = await this.userSurveyRepo.findOne({ where: { email } } as FindOneOptions<UserSurvey>);
    ResponseHandler.findObjectValidater(userSurvey);    
    const surveyIds = Array.isArray(userSurvey.survey_id) 
    ? userSurvey.survey_id
    : [userSurvey.survey_id];
    const surveys: Survey[] = [];
    for (const surveyId of surveyIds) {
      const survey = await this.surveyRepo.findOne(surveyId);
      ResponseHandler.findObjectValidater(survey);
      surveys.push(survey);
    }
    return surveys;
  }
    
  create(createSurveyInput: CreateSurveyInput) {
    const newEntity = this.surveyRepo.create(createSurveyInput);
    const saveData = this.surveyRepo.save(newEntity)
    return SH.created(saveData, 'New survey has been created!');
  }

  async update(id: number, updateSurveyInput: UpdateSurveyInput) {
    const findOneSurvey = await this.getOneSurvey(id);
    ResponseHandler.findObjectValidater(findOneSurvey);
  
    const updatedSurvey = this.surveyRepo.merge(findOneSurvey, updateSurveyInput);
    const newEntity = this.surveyRepo.save(updatedSurvey);
    return SH.success(newEntity, 'Survey has been updated.');
  }

  async delete(id: number) {
    const findOneSurvey = await this.getOneSurvey(id);
    ResponseHandler.findObjectValidater(findOneSurvey);

    const deletedSurvey = await this.surveyRepo.remove(findOneSurvey);
    return SH.success(deletedSurvey, 'Survey has been deleted.');
  }
}