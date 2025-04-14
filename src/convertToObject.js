
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
    const stylesObject = {};
    const declarations = sourceString.split(';');

    for (const declaration of declarations) {
        const trimmedDecl = declaration.trim();
        if (trimmedDecl === '') continue;

        const colonIndex = trimmedDecl.indexOf(':');
        if (colonIndex === -1) continue;

        const key = trimmedDecl.substring(0, colonIndex).trim();
        const value = trimmedDecl.substring(colonIndex + 1).trim();

        if (key && value) {
            stylesObject[key] = value;
        }
    }

    return stylesObject;
}

module.exports = convertToObject;
