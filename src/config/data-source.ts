import dotenv from 'dotenv'
import { DataSource } from 'typeorm'

dotenv.config()
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'test',
  entities: [],
  synchronize: false,
  logging: false,
})
