# UserConf

## 説明

自分の設定を変更できたりリセットする事ができます。

:::tip
今の所設定できるものはありません。
:::

## 使用法

`yui!userconf <set|show|remove|reset> (key:key) (value:value)`

### Set

`yui!userconf set (キーの名前) (値)`  
これでキーの部分に値を設定する事ができます。

### Show

`yui!userconf show (キー)`  
これでキーと値の部分になにがあるか確認する事ができます。

### Reset

`yui!userconf reset (キー)`  
これで値の部分を初期値に戻す事ができます。

### Remove <Badge text="Setと動作が同じ" type="warn"/>

`yui!userconf remove (キー) (値)`
