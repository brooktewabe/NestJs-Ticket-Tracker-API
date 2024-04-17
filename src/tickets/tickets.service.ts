/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketsRepository: Repository<Ticket>){

  }
  async create(createTicketDto: CreateTicketDto) {
    const ticket = this.ticketsRepository.create(createTicketDto)
    
    return await this.ticketsRepository.save(ticket);
  }

  async findAll() {
    return await this.ticketsRepository.find();
  }

  async findOne(id: string) {
    return await this.ticketsRepository.findOne({
      where: { id }
    });
  }

  async findByPriority(priority: string) {
    return await this.ticketsRepository.count({
      where: { priority }
    });
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.findOne(id);
    if(!ticket){
      throw new NotFoundException()
    }
    Object.assign(ticket, updateTicketDto)

    return await this.ticketsRepository.save(ticket)
  }

  async remove(id: string) {
    const ticket = await this.findOne(id);
    if(!ticket){
      throw new NotFoundException()
    }
    return await this.ticketsRepository.remove(ticket)
  }
}
