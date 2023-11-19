import { Module } from '@nestjs/common';
import { OptionResolver } from './option.resolver';
import { OptionService } from './option.service';

@Module({
  providers: [OptionService, OptionResolver]
})
export class OptionModule {}
