import {
  formatFiles,
  generateFiles,
  getProjects,
  names,
  normalizePath,
  readProjectConfiguration,
  readWorkspaceConfiguration,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { normalize } from 'path';
import { InterfaceSchema } from './schema';

export default async function (host: Tree, schema: InterfaceSchema) {
  // read project from workspace.json / angular.json
  const project = getProjects(host).get(schema.projectName);
  // generate interfaces into app/my-app-name/lib/src/interfaces
  const targetPath = path.join(project.sourceRoot, 'interfaces');

  // read templates from tools/generators/interface/templates
  const templatePath = 'tools/generators/interface/templates';
  checkPathUnderProjectRoot(host, schema);
  // generate different name variations for substitutions
  const interfaceNames = names(schema.name);

  const substitutions = {
    // remove __tmpl__ from file endings
    tmpl: '',
    // make the different name variants available as substitutions
    ...interfaceNames,
  };
    
  // generate the files from the templatePath into the targetPath
  generateFiles(host, templatePath, targetPath, substitutions);

  // format all files which were created / updated in this schematic
  await formatFiles(host);
}

function checkPathUnderProjectRoot(tree: Tree, options: Partial<InterfaceSchema>) {
  if (!options.path) {
    return;
  }

  const project =
    options.projectName ?? readWorkspaceConfiguration(tree).defaultProject;
  const { root } = readProjectConfiguration(tree, project);

  let pathToPipe = normalizePath(options.path);
  pathToPipe = pathToPipe.startsWith('/') ? pathToPipe.slice(1) : pathToPipe;

  if (!pathToPipe.startsWith(normalize(root))) {
    throw new Error(
      `The path provided for the SCAM (${options.path}) does not exist under the project root (${root}).`
    );
  }
}

