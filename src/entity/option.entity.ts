import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Question } from './question.entity';

@Entity('option')
export class Option extends BaseEntity{
  @PrimaryColumn({ type: 'int', nullable: false })
  question_id: number;

  @Column({ type: 'int', comment: '선택지 번호' })
  option_number: number;

  @Column({ type: 'varchar', comment: '선택지 내용' })
  option_content: string;

  @Column({ type: 'int', comment: '선택지 점수' })
  score: number;

  @ManyToOne(() => Question, (question) => question.option, {
    cascade: true,
    onDelete: 'CASCADE' 
  })
  @JoinColumn({ name: 'question_id', referencedColumnName: 'id' })
  question: Question;
}