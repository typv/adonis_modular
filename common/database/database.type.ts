import { ConnectionConfig } from "@adonisjs/lucid/types/database";

export type ModuleConnectionConfig = {
  connectionName: string,
  connectionConfig: ConnectionConfig,
}
