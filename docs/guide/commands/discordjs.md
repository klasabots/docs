# Discordjs

## 説明

Discord.jsのドキュメント検索ができます。
開発者向けの機能です。

:::warning
`branch(ブランチ)`が何か分からない場合は何も指定しないでください。  
検索結果に何も表示されなかったり、エラーが起きるかもしれません。
:::

## 使用法

`yui!《discordjs|djs|djsdocs》 <commando|rpc|main:default> <query:string> [branch:string]`

## 使用法 - "メイン" ドキュメントの検索

`yui!discordjs <検索内容> <ブランチ>`, `yui!discordjs main <検索内容> [ブランチ]`  
で検索する事ができます。

:::tip
`branch`は何も指定していないと`stable`になっています。  
`master`ブランチのドキュメントを検索する場合は`yui!discordjs <検索内容> master`と実行する事で検索できます。
:::

## 使用法 - "RPC" ドキュメントの検索

`yui!discordjs rpc <検索内容>`  
で検索する事ができます。

:::warning
`branch`は指定できません。
:::

## 使用法 - "Commando" ドキュメントの検索

`yui!discordjs commando <検索内容>`  
で検索する事ができます。

:::warning
`branch`は指定できません。
:::