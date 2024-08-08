import env from "#start/env";
import { ConnectionConfig } from "@adonisjs/lucid/types/database";

export const DefaultDBConfig: ConnectionConfig = {
  client: 'pg',
  connection: {
    host: env.get('DB_HOST'),
    port: env.get('DB_PORT'),
    user: env.get('DB_USER'),
    password: env.get('DB_PASSWORD'),
    database: env.get('DB_DATABASE'),
  },
  migrations: {
    naturalSort: true,
    paths: ['database/migrations'],
  },
}
