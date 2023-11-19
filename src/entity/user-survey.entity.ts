import { Column, Entity, PrimaryColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Survey } from './survey.entity';
import { UserOutcome } from './user-outcome.entity';

@Entity('user_survey')
export class UserSurvey extends BaseEntity {
  @PrimaryColumn({ type: 'int', comment: '유저 관련 설문id' })
  survey_id: number;
  
  @Column({ type: 'varchar', comment: '설문 완료 유저이름'})
  username: string;

  @Column({ type: 'varchar', comment: '설문 완료 유저이메일'})
  email: string;

  @Column({ type: 'varchar', comment: '설문 작성자 여부'})
  is_creator: boolean;

  @ManyToOne(() => Survey, (survey) => survey.user_survey, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'survey_id' })
  survey: Survey[];
  
  @OneToMany(() => UserOutcome, user_outcome => user_outcome.user_survey, {
    onDelete: 'CASCADE',
  })
  user_outcome: UserOutcome[]
}