import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: '1234',
  port: +process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: 'ticket-tracker',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
