import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Question } from './question.entity';
import { Survey } from './survey.entity';
import { UserSurvey } from './user-survey.entity';

@Entity('user_outcome')
export class UserOutcome extends BaseEntity {
  @PrimaryColumn({ type: 'int', nullable: false, comment: '설문id' })
  survey_id: number;

  @PrimaryColumn({ type: 'varchar', nullable: false, comment: '설문 작성 유저' })
  user_id: number;

  @PrimaryColumn({ type: 'varchar', nullable: false, comment: '설문 내 질문 문항' })
  question_id: number;
  
  @Column({ type: 'int', comment: '설문 결과 점수'})
  total_score: number;

  @Column({ type: 'array', nullable: false, comment: '설문 응답 내용' })
  user_answer: string;

  @ManyToOne(() => Survey)
  @JoinColumn({ name: 'survey_id' })
  survey: Survey;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @ManyToOne(() => UserSurvey, user_survey => user_survey.user_outcome, {
    onDelete: 'CASCADE',
  })

  @JoinColumn([
    { name: 'survey_id', referencedColumnName: 'survey_id' },
    { name: 'user_id', referencedColumnName: 'user_id' },
  ])

  user_survey: UserSurvey;
}
