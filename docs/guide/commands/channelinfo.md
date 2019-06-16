# ChannelInfo

## 説明

チャンネルの情報を表示します。

## 使用法

`yui!channelinfo <channel:channel>`

- `channel`にはチャンネルIDまたはメンションが必要です。

## 詳しい説明 - テキストチャンネルの場合

![ChannelInfo - TextChannel](https://i.imgur.com/w7LyQEX.png)

### Name

テキストチャンネルの名前が表示されています。

### ID

テキストチャンネルのIDが表示されています。

### Type

テキストチャンネルかボイスチャンネルどちらなのかを表示しています。

- `Text Channel`はテキストチャンネル
- `Voice Channel`はボイスチャンネル

### Typing Count

入力している人の数を表示しています。

### NSFW

NSFWチャンネルかどうかを表示しています。

## 詳しい説明 - ボイスチャンネルの場合

![ChannelInfo - VoiceChannel](https://i.imgur.com/QqVaEI9.png)

### Name

ボイスチャンネルの名前が表示されています。

### ID

ボイスチャンネルのIDを表示しています。

### Type

テキストチャンネルかボイスチャンネルどちらなのかを表示しています。

- `Text Channel`はテキストチャンネル
- `Voice Channel`はボイスチャンネル

### Members

ボイスチャンネルに参加している人数を表示しています。

### Limit

人数制限を表示しています。  
ちなみに制限がない場合は`Infinity(無限)`になっています。
