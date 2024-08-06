/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import path from "path";

await autoloadModules();

router.on('/').render('pages/home')


function getRouteFiles(dir: string, fileList: string[] = []) {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    if (statSync(filePath).isDirectory()) {
      getRouteFiles(filePath, fileList);
    } else if (extname(file) === '.ts' && file.endsWith('.route.ts')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

async function autoloadModules () {
  const modulesPath = path.normalize(path.join(process.cwd(), 'app/modules'));
  const routeFiles = getRouteFiles(modulesPath);

  await Promise.all(
    routeFiles.map(async (file) => {
      await import(file)
    })
  ).catch((err) => {
    console.error('Error importing routes:', err);
  });
}
