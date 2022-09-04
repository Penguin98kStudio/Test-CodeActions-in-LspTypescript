const items = [true,false, undefined, '1', 1]

// see code actions when cursor is on	{|items: any[]}
const actualItems = ({items}: {items: any[]}) => (
	items.filter(item => !!item)
)
console.log(actualItems({items}))


// Sublime - Latest Dev Version

// LSPtypescript: [lspserver] Using Typescript version (workspace) 4.8.2 from path
// ".../TestTSCodeActions/node_modules/typescript/lib/tsserver.js"


// VSCode - Latest Insiders Verson

// typescript version 4.8.2 from nodemodules