import { defineConfig } from '@adonisjs/lucid'
import combinedConfig from "#config/module-connections-loader";
import { DefaultDBConfig } from "#common/database/database.constant";

const moduleConnections = await combinedConfig()

const dbConfig = defineConfig({
  connection: 'postgres',
  connections: {
    postgres: DefaultDBConfig,
    ...moduleConnections,
  },
})

export default dbConfig
