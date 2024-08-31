const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
    throw new Error("slice layer wasn't provided");
}

if (!sliceName) {
    throw new Error("slice name wasn't provided");
}

createTemplate(layer, sliceName);
