import { Module } from '@nestjs/common';
import { featureModules } from 'src';

@Module({
  imports: [...featureModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
