import { Column, Entity, PrimaryColumn, ManyToOne, OneToMany, JoinColumn, Unique} from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserOutcome } from './user-outcome.entity';
import { Survey } from './survey.entity';
import { Option } from './option.entity';

@Entity('question')
@Unique(['id'])
export class Question extends BaseEntity {
  @PrimaryColumn({ type: 'int', nullable: false })
  survey_id: number;
  
  @Column({ type: 'int', comment: '문항 번호'})
  question_number: number;
  
  @Column({ type: 'varchar', comment: '문항 내용'})
  question_content: string;

  @Column({ type: 'varchar', comment: '문항 예시'})
  question_example: string;

  @ManyToOne(() => Survey, survey => survey.question, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'survey_id', referencedColumnName: 'id' })
  survey: Survey;

  @OneToMany(() => Option, option => option.question)
  option: Option[];

  @OneToMany(() => UserOutcome, (user_outcome) => user_outcome.question)
  user_outcome: UserOutcome[];

}
