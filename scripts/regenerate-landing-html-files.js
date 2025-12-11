import { omit } from '@useless-media/useless-sdk';
import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const getLineEnding = str => {
  let lf = str.indexOf('\n');
  if (str[lf - 1] === '\r') {
    return '\r\n';
  }

  return '\n';
};

(async () => {
  const projects = JSON.parse(fs.readFileSync(join(__dirname, '../projects.json'), 'utf-8'));

  const rootIndex = fs.readFileSync(join(__dirname, '../index.html'), 'utf-8');
  const rootLineEnding = getLineEnding(rootIndex);
  const rootLines = rootIndex.split(rootLineEnding);

  const internalIndex = fs.readFileSync(join(__dirname, '../internal/index.html'), 'utf-8');
  const internalLineEnding = getLineEnding(rootIndex);
  const internalLines = internalIndex.split(internalLineEnding);

  const injectMissingProjects = (projects, lines, internal) => {
    const projectPaths = Object.keys(projects);
    const foundProjects = [];

    let inLinks = false;
    let readingLink = false;
    let internalSection = false;
    let internalSectionLinksEndIndex = -1;
    let linksEndIndex = -1;
    for (const l in lines) {
      if (lines[l].trim().startsWith('<div class="card-container')) { // Entered link section
        internalSection = lines[l].includes('internal');
        inLinks = true;
      }
      if (!inLinks) continue;

      if (lines[l].includes('<a')) {
        readingLink = true;
        const projectPathStartIndex = 6 + lines[l].indexOf('href="');
        const projectPathEndIndex = lines[l].indexOf('"', projectPathStartIndex);
        const projectPath = lines[l].slice(6 + lines[l].indexOf('href="'), projectPathEndIndex);
        foundProjects.push(projectPath);
      }

      if (!readingLink && lines[l].trim() === '</div>') {
        inLinks = false;
        if (internalSection) {
          internalSectionLinksEndIndex = l;
        }
        else {
          linksEndIndex = l;
        }
      }

      if (lines[l].includes('</a')) {
        readingLink = false;
      }
    }

    const linesToInject = [];
    for (const p in projectPaths) {
      if (!foundProjects.includes(projectPaths[p])) { // add
        const project = projects[projectPaths[p]];
        linesToInject.push(...[
          `        <a class="card" href="${project.path}">`,
          `          <figure><img src="${project.logo ?? `${internal ? '../' : './'}images/useless-media.svg`}" alt=""></figure>`,
          `          <h4>${project.name}</h4>`,
          `        </a>`
        ]);
      }
    }

    if (linesToInject.length) {
      if (internal && internalSectionLinksEndIndex > 0) {

        lines.splice(internalSectionLinksEndIndex, 0, ...linesToInject);
      }
      else if (linksEndIndex > 0) {
        lines.splice(linksEndIndex, 0, ...linesToInject);
      }
    }

    return lines;
  };

  const modifiedRootLines = injectMissingProjects(omit(projects, 'internal'), rootLines);
  fs.writeFileSync(join(__dirname, '../index.html'), modifiedRootLines.join(rootLineEnding));

  const modifiedInternalLines = injectMissingProjects(projects.internal, internalLines, true);
  fs.writeFileSync(join(__dirname, '../internal/index.html'), modifiedInternalLines.join(internalLineEnding));
})();