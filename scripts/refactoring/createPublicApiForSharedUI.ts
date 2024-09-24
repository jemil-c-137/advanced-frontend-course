import { Project } from 'ts-morph';
import path from 'path';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const sharedDirectory = project.getDirectory(path.resolve(__dirname, '../../src/shared/ui'));
const componentsDirectories = sharedDirectory?.getDirectories();

function isAbsolute(value: string) {
    return [
        'app',
        'shared',
        'entities',
        'widgets',
        'features',
        'pages',
    ].some((layer) => value.startsWith(layer));
}

componentsDirectories?.forEach((dir) => {
    const indexFilePath = `${dir.getPath()}/index.ts`;
    const indexFile = dir.getSourceFile(indexFilePath);
    if (!indexFile) {
        const sourceCode = `export * from './${dir.getBaseName()}';\n`;
        const file = dir.createSourceFile(indexFilePath, sourceCode, { overwrite: true });

        file.save();
    }
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');
        const segments = valueWithoutAlias.split('/');
        const isShared = segments?.[0] === 'shared';
        const isUi = segments?.[1] === 'ui';

        console.log('s', isShared && isUi);

        if (isAbsolute(valueWithoutAlias) && isShared && isUi) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
