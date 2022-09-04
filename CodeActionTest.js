var items = [true, false, undefined, '1', 1];
// see code actions when cursor is on	{|items: any[]}
var actualItems = function (_a) {
    var items = _a.items;
    return (items.filter(function (item) { return !!item; }));
};
console.log(actualItems({ items: items }));
// Sublime - Latest Dev Version
// LSPtypescript: [lspserver] Using Typescript version (workspace) 4.8.2 from path
// ".../TestTSCodeActions/node_modules/typescript/lib/tsserver.js"
// VSCode - Latest Insiders Verson
// typescript version 4.8.2 from nodemodules
