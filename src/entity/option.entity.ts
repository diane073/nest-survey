import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Question } from './question.entity';

@Entity('option')
export class Option extends BaseEntity{
  @PrimaryColumn({ type: 'int', nullable: false })
  question_id: number;

  @Column()
  option_number: number;

  @Column()
  option_content: string;

  @Column()
  score: number;

  @ManyToOne(() => Question, question => question.option)
  @JoinColumn({ name: 'question_id', referencedColumnName: 'survey_id' })
  question: Question;
}