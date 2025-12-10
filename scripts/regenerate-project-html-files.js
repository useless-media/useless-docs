import { booleanOrDefault, omit, stringFormat } from '@useless-media/useless-sdk';
import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  const indexTemplate = fs.readFileSync(join(__dirname, '../templates/project.index.html.template'), 'utf-8');
  const projects = JSON.parse(fs.readFileSync(join(__dirname, '../projects.json'), 'utf-8'));
  const mappedProjects = Object.values(omit(projects, 'internal'))
    .map(p => ({ ...p, relativePathToRoot: '' }))
    .concat(Object.values(projects.internal).map(p => ({ ...p, internal: true, relativePathToRoot: '../' })));

  for (const p in mappedProjects) {
    if (!booleanOrDefault(mappedProjects[p].generated, true)) continue; // If project is manually documented and not generated, skip!

    const projectIndexHtmlPath = join(__dirname, mappedProjects[p].internal ? '../internal' : '..', mappedProjects[p].path, 'index.html');
    fs.writeFileSync(projectIndexHtmlPath, stringFormat(indexTemplate, mappedProjects[p]));
  }
})();