import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';

@Module({
  imports: [
    MulterModule.register({
      dest: './files'
    })
  ],
  controllers: [AppController],
})
export class AppModule {}
