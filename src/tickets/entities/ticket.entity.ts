import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tickets' })
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  body: string;

  @Column({ type: 'text' })
  priority: string;
}
