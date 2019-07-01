# Auto Role

YuigahamaにはAuto Role機能が備わっています。

## Auto Role って何？

参加した新しいメンバーに**自動的に役職**を与えることができます。  
これから設定手順を説明するよ。

## 手順

### Yuigahamの権限を確認する。

まず最初に役職`Yuigahama`に**役職の管理**権限が有効になっていることを確認してください。

![Imgur](https://i.imgur.com/hQbtH2Q.png)

### confコマンドを使って参加したユーザーにどの役職を与えるか設定する。

::: tip 注意
ここでは`Members`という役職を参加した人に与えることにするよ！
:::

本来なら`yui!conf set mod.AutoRole <役職の名前>`という風にやりたいですが、Yuigahamaにはまだそれが実装されていないのです...  
なので**役職メンションか役職IDを入力する必要があります。**

### 役職IDの場合

現時点ではこの方法を推奨します。  
まずYuigahamaに実装されている[roleinfo](../commands/roleinfo.html)コマンドを使って役職IDを取得します。  
`yui!roleinfo <役職の名前>` でIDなどの情報を取得することができます。

![Imgur](https://i.imgur.com/4KfLHbS.png)

`ID`と書いてある部分の数値をコピーしてください。  
そして`yui!conf set mod.AutoRole <コピーしたIDを貼り付け>`を送信すると

![Imgur](https://i.imgur.com/vpa7cT0.png)

やったね！成功だ！  
最後に`yui!conf show mod`で確認しておきましょう！

![Imgur](https://i.imgur.com/pmfNziN.png)

バッチリ！これでこの手順は終了です。

### 役職メンションの場合

この方法は非推奨です。

::: tip なぜ？
役職メンションで指定するということは、`Members`という役職を既に持っているメンバーに**通知**が送信されてしまうからです。  
これは一部のメンバーでは不快に感じる人もいるかもしれません...  
なるべく[上記](#役職idの場合)の手順を使ったほうが良いでしょう。
:::

まず**役職のメンション**を許可する必要があります。  
サーバー設定から役職をクリックして`Members`を選択します。

`このロールに対して@mentionを許可する`をオンにします。そして保存

![Imgur](https://i.imgur.com/x03DtfI.png)

次にテキストチャンネルで`yui!conf set mod.AutoRole <役職のメンション>`を送信するだけです。

![Imgur](https://i.imgur.com/mAdp48H.png)

そして念の為確認しておきます。  
`yui!conf show mod`を送信

![Imgur](https://i.imgur.com/T6FKcYt.png)

しっかり設定できていますね。  
方法はこちらのほうが簡単ですが、**メンバーのことも考えましょう。**  
気を付けてくださいね！
