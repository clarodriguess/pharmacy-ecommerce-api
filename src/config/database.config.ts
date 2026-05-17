import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Categoria } from '../categoria/entities/categoria.entity';
import { Produto } from '../produto/entities/produto.entity';

export const databaseConfig = (): TypeOrmModuleOptions => {
  const isProd = process.env.NODE_ENV === 'production';

  return {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Categoria, Produto],
    synchronize: true,
    ssl: isProd ? { rejectUnauthorized: false } : false, // 👈 Render exige SSL em produção
  };
};