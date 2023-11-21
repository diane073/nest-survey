import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from 'src/entity/option.entity';
import { Question } from 'src/entity/question.entity';
import { OptionResolver } from './option.resolver';
import { OptionService } from './option.service';

@Module({
  imports: [TypeOrmModule.forFeature([Option, Question])],
  providers: [OptionService, OptionResolver]
})
export class OptionModule {}
