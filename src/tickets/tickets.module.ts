/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from './entities/ticket.entity';
import { TicketsController } from './tickets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
  TypeOrmModule.forFeature([Ticket]), // Provide the Ticket repository
],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
