import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserOutcome } from 'src/entity/user-outcome.entity';
import { Repository } from 'typeorm';
import { CreateUserOutcomeInput } from './user-outcome.dto';
import { SuccessHandler as SH } from 'src/common/status-handler';
import { UserSurvey } from 'src/entity/user-survey.entity';


@Injectable()
export class UserOutcomeService {
  constructor (
    @InjectRepository(UserOutcome)
    private userOutcomeRepo: Repository<UserOutcome>,

    @InjectRepository(UserSurvey)
    private userSurveyRepo: Repository<UserSurvey>,
  ) {}

  findAllBySurveyId(survey_id: number) {
    return this.userOutcomeRepo.findOne({ where: { survey_id: survey_id }})
  }

  findAllByUserId(user_id: number) {
    return this.userOutcomeRepo.findOne({ where: { user_id: user_id }})
  }

  findOne(id: number) {
    return this.userOutcomeRepo.findOne({ where: { id }})
  }

  async create(createUserOutcomeInput: CreateUserOutcomeInput) {
    const checkExistUser = await this.userSurveyRepo.findOne({ where : { email : createUserOutcomeInput.email }});
    if (!checkExistUser) {
      const newUserSurvey = this.userSurveyRepo.create({
      username: createUserOutcomeInput.username,
      email: createUserOutcomeInput.email,
      is_creator: false,
      });
      const newUser = await this.userSurveyRepo.save(newUserSurvey);
      createUserOutcomeInput.user_id = newUser.id;
    }
    const newOutcome = this.userOutcomeRepo.create(createUserOutcomeInput);
    const saveData = await this.userOutcomeRepo.save(newOutcome);
    return SH.created(saveData, 'New outcome has been created!')
  }
}

