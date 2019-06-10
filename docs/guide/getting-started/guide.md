# Yuigahamabot基本ガイド

ここでは`YuigahamaBot`導入法などの説明を記載してあります。  
困った時参考にしてください。

## これはなんなの？

Discordサーバー向けの多機能ボットです。  
管理者のサーバー管理を簡単にしたりサーバーに参加しているメンバー達を盛り上げたりできます。  
使い方はいろいろあります。

## ボットを招待する。

1. まず[DiscordBotList](https://discordbots.org/bot/531097309748920371)にアクセスしてください。  
1. 次に`Invite`というボタンをクリック（日本語で`Invite`は`招待`と読みます。）
1. `Discordに接続 Yuigahama`というページが出てくるので、導入したいサーバーを選択してから`認証`をクリックしてください。（**このとき使用する権限にチェックが付いてますがこのボットが必要とする権限です。チェックを外すとコマンドが使えなくなったりするので外さないでください。**）
1. そうすると次のページに飛ばされて`reCAPTCHA`のボタンが出てくるはずなのでチェックボックスをクリックしてロボットでないことを証明してください。
1. 完了です。

## コマンド一覧の確認方法

Yuigahamaを導入しているサーバーで`yui!help`を実行することでダイレクトメッセージにコマンド一覧が送信されます。（サーバーにいる人からのDMを禁止している人に一覧を送信できないため警告が表示されます。）  
また他のサーバーでYuigahamaを導入しているところはコマンドの`接頭辞（Prefix）`を変えている可能性があるためメンションを使用するとよいでしょう`@Yuigahama#9721 help`  
helpコマンドの説明は[こちら](../commands/help.html)

## なぜかコマンドに反応してくれない

以下が原因かもしれません。

### そのチャンネルでボットの発言権限が奪われている。

コマンドを使用したチャンネルの設定を開き権限設定から`Yuigahama`の役職に`メッセージの送信`権限を与えることで解決できます。

チャンネルの編集をクリック  
![Imgur](https://i.imgur.com/YBZWrrj.png)  
権限を選択して  
![Imgur](https://i.imgur.com/KRSsYRN.png)  
`＋`から`Yuigahama`の役職を選んでクリック  
![Imgur](https://i.imgur.com/Ja4Yp75.png)  
![Imgur](https://i.imgur.com/grtGwLN.png)  
`メッセージを読む`と`メッセージの送信`をONにしてください。  
![Imgur](https://i.imgur.com/RM4t45h.png)  
ONにするとこのようになります。  
![Imgur](https://i.imgur.com/AYrXAFR.png)  
できたら変更を保存しよう。  
![Imgur](https://i.imgur.com/evlBvqE.png)

### ブラックリストに登録されているかも

サーバーまたはユーザー（自分自身）がYuigahamaからブラックリストに登録されている可能性があります。  
権限設定を確認しても使えない場合はその可能性大（管理者権限を与えてもコマンドが使えない場合は確定）

**ブラックリストに登録されると解除されることはほぼありません。**  
解除の依頼や理由を聞きたい場合は[公式サーバー](https://discordapp.com/invite/JJhtTvG)のチャンネルで聞いてみてください。