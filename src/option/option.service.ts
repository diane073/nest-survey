import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from 'src/entity/option.entity';
import { Question } from 'src/entity/question.entity';
import { QuestionService } from 'src/question/question.service';
import { Repository } from 'typeorm';
import { CreateOptionInput, UpdateOptionInput } from './option.dto';
import { ResponseHandler } from 'src/common/base-handler';
import { SuccessHandler as SH } from 'src/common/status-handler';


@Injectable()
export class OptionService {
  constructor (
    @InjectRepository(Option)
    private readonly optionRepo: Repository<Option>,

    @InjectRepository(Question)
    private readonly quesitonService: QuestionService
  ){}

  findOne(id: number) {
    return this.optionRepo.findOne({ where: {id} });
  }

  async create(createOptionInput: CreateOptionInput): Promise<{ status_code: number; data: any; message: string; }> {
    const findCurrentQuestion = await this.quesitonService.findOne(createOptionInput.question_id);
    ResponseHandler.findObjectValidater(findCurrentQuestion);
    const newEntity = this.optionRepo.create(createOptionInput);
    const saveData = await this.optionRepo.save(newEntity);
    return SH.created(saveData, 'New option has been created!');
  }

  async update(id: number, updateOptionInput: UpdateOptionInput): Promise<{ status_code: number; data: any; message: string; }> {
    const findOneOption = await this.findOne(id);
    ResponseHandler.findObjectValidater(findOneOption);
    const updatedOption = this.optionRepo.merge(findOneOption, updateOptionInput);
    const newEntity = this.optionRepo.save(updatedOption);
    return SH.success(newEntity, 'Option has been updated.');
  }

  async delete(id: number): Promise<{ status_code: number; data: any; message: string; }> {
    const findOneOption = await this.findOne(id);
    ResponseHandler.findObjectValidater(findOneOption);
    const deletedOption = await this.optionRepo.remove(findOneOption);
    return SH.success(deletedOption, 'Option has been deleted.'); 
  }
}
