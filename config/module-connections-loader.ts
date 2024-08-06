import * as path from 'path';
import { readdirSync, statSync } from "fs";
import { extname, join } from "path";

async function combinedConfig() {
  const configDirectory = path.normalize(path.join(process.cwd(), 'app/modules'));
  const configFiles = getDBConfigFiles(configDirectory);
  const combinedConfig: Record<string, any> = {};

  for (const file of configFiles) {
    const module = await import(file);
    const config = module.default
    const connectionName = config?.connectionName;
    const connectionConfig = config?.connectionConfig;
    if (connectionName && connectionConfig) {
      combinedConfig[connectionName] = connectionConfig;
    }
  }

  return combinedConfig;
}

function getDBConfigFiles(dir: string, fileList: string[] = []) {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    if (statSync(filePath).isDirectory()) {
      getDBConfigFiles(filePath, fileList);
    } else if (extname(file) === '.ts' && file.endsWith('.connection.ts')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}


export default combinedConfig;
