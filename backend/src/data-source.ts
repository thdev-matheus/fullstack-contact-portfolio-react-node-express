import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "migration"
    ? {
        type: "postgres",
        host: "localhost",
        port: 5050,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: ["./src/entities/*.ts"],
        migrations: ["./src/migrations/*.ts"],
      }
    : process.env.NODE_ENV === "dev"
    ? {
        type: "postgres",
        host: "localhost",
        port: 5050,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: ["./src/entities/*.ts"],
        migrations: ["./src/migrations/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      }
);

export default AppDataSource;
