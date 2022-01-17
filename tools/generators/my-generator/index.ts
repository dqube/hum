import { Tree, formatFiles, installPackagesTask, readProjectConfiguration, generateFiles, joinPathFragments, names, readWorkspaceConfiguration, normalizePath } from '@nrwl/devkit';
import { libraryGenerator  } from '@nrwl/workspace/generators';
import { wrapAngularDevkitSchematic } from '@nrwl/devkit/ngcli-adapter';
import { ɵFormlyValidationMessage } from '@ngx-formly/core';
export default async function (tree: Tree, schema: any) {
  //await libraryGenerator(tree, schema);
  
  // const { inlineScam, ...options } = schema;
  

 
  const angularComponentSchematic = wrapAngularDevkitSchematic(
    '@schematics/angular',
    'component'
  );
  const componentNames = names(schema.name);
  const componentFileName = `${componentNames.fileName}.${
   'component'
  }`;
  const project =
    schema.project ?? readWorkspaceConfiguration(tree).defaultProject;
  const projectConfig = readProjectConfiguration(tree, project);
  let componentDirectory = schema.flat
    ? joinPathFragments(
        projectConfig.sourceRoot,
        projectConfig.projectType === 'application' ? 'app' : 'lib'
      )
    : joinPathFragments(
        projectConfig.sourceRoot,
        projectConfig.projectType === 'application' ? 'app' : 'lib',
        componentNames.fileName
      );

  if (schema.path) {
    componentDirectory = schema.flat
      ? normalizePath(schema.path)
      : joinPathFragments(schema.path, componentNames.fileName);
  }

  const componentFilePath = joinPathFragments(
    componentDirectory,
    `${componentFileName}.ts`
  );
  // await angularComponentSchematic(tree, {
  //   name:schema.name,
  //   project:project,
  //   skipImport: false,
  //   path:componentFilePath,
  //   export: false,
  // });
  // const angularComponentSchematic = wrapAngularDevkitSchematic(
  //   wrapAngularDevkitSchematic
  //   'component'
  // );
  // await angularComponentSchematic(tree, {
  //   name: 'example',
  //   project: 'app1',
  //   skipImport: true,
  //   export: false,
  // });
  // const libraryRoot = readProjectConfiguration(tree, schema.name).root;
  // generateFiles(
  //   tree, // the virtual file system
  //   joinPathFragments(__dirname, './files'), // path to the file templates
  //   libraryRoot, // destination path of the files
  //   schema // config object to replace variable in file templates
  // );
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

