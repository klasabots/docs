# Easy Pin

`📍 （pushpin）`を使ってピン留めしたいメッセージにリアクションすることでメッセージをピン留めしてくれます。

::: tip 重要
- **メッセージの管理**権限を持っていないユーザーがリアクション（📍）を追加してもピン留めされません。
- Yuigahamaに**メッセージの管理**権限が与えられてない場合もピン留めされません。
- リアクションを削除してもピン留めは**外れません。**
:::

![Imgur](https://i.imgur.com/6piRNBB.png)

## 設定方法

### 有効化

`yui!conf set channels.EasyPin true`

### 無効化

`yui!conf set channels.EasyPin false`
