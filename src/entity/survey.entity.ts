import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, UpdateDateColumn } from 'typeorm';
import { Question } from './question.entity';
import { UserOutcome } from './user-outcome.entity';
import { UserSurvey } from './user-survey.entity';

@Entity('survey')
export class Survey extends BaseEntity {
  @Column({ type: 'varchar', comment: '설문 제목'})
  title: string
    
  @Column({ type: 'text', comment: '설문 설명문'})
  description: string
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({
    type: 'varchar',
    nullable: false,
    default: '설문에 응해주셔서 감사합니다.',
    comment: '설문완료 안내문',
  })
  thanks_message: string;

  @OneToMany(() => Question, (question) => question.survey)
  question: Question[];

  @OneToMany(() => UserSurvey, (user_survey) => user_survey.survey)
  user_survey: UserSurvey[];

  @OneToMany(() => UserOutcome, (user_outcome) => user_outcome.survey)
  user_outcome: UserSurvey[];

}