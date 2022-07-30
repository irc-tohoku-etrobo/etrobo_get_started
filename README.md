# Get Stared
ここでは、本チームで ET ロボコンを参戦する上で必要な技術的情報を記載していきます。  

### リンクなど
- 公式サイト
    - https://www.etrobo.jp/
- 2022 年度のルール
    - https://docs.etrobo.jp/information/2022/20220215_ETRC_tec.pdf
- シミュレータ
  - https://github.com/ETrobocon/etrobo
- RasPike
  - https://github.com/ETrobocon/RasPike

### ルール的なやつ
##### コミットルール
コミットメッセージには、プレフィックスを付けましょう。

| プレフィックス  | 意味             |
|----------|----------------|
| add      | 機能/コード/ファイルの追加 |
| update   | 新規ではない機能追加     |
| change   | 仕様変更による機能変更    |
| fix      | バグの修正          |
| refactor | コードのリファクタリング   |
| remove   | 機能/コード/ファイルの削除 |
| test     | テストの追加やテストの修正  |
| chore    | 自動生成ファイルをコミット  |

##### ブランチ運用方針
Git-flow をベースに運用していきます。  
（けど、あまり厳密にやっていく気はないので自由にやっていきましょう）

| プレフィックス | 意味                |
|---------|-------------------|
| feature | 追加機能の実装を行う場合に使います |
| fix     | バグの修正を行う際に使います    |
| hotfix  | 緊急で修正しなくてはいけないバグ  |

### 開発のやり方
[Github を用いて Git-flow の開発を行うとはなんぞや？？？](https://qiita.com/KosukeSone/items/514dd24828b485c69a05) はリンク先を読んでもらえればと思います。  
詳しい説明は、チームメンバーから聞いてください。  
ざっくり説明すると、以下の感じになります。

<details>
<summary>※ 初回インストール時は、これも実行してください</summary>

##### 参加年度のリポジトリ（`etrobo_20XX_workspace`）を `$ETROBO_HRP3_WORKSPACE` にクローンする
以下を実行します。  
```shell
cd $ETROBO_HRP3_WORKSPACE && echo git clone git@github.com:irc-tohoku-etrobo/etrobo_$(date +%Y)_workspace.git && cd etrobo_$(date +%Y)_workspace
```

##### ブランチを分ける
`プレフィックス/実装したいことがわかるブランチ名` でブランチを分けましょう。  
```bash
# 例: git checkout -b プレフィックス/実装したいことがわかるブランチ名
git checkout -b feature/init
```
</details>


##### 実装 & コンパイル
念の為、毎回コンパイルしたほうが良い気がするのでそうしてます。
```bash
cd $ETROBO_HRP3_WORKSPACE && make app=etrobo_$(date +%Y)_workspace sim up
```

##### コミット
```bash
# コミットしたいファイルを選択します。
# 大体すべてのファイルだと思うので、. で OK
git add .

# コミットメッセージを記入します。
# -m で実行すると打ち間違いとかのミスしがちなので vi コマンド使ったほうが良いです。
# コミットメッセージは、「プレフィックス: 変更内容」にすると親切です。
# 例: git commit -m "add: 全員が困らず開発を行えるようにしたいので、README にコミット方法を詳細に説明"
git commit -m "コミットメッセージ"
# or git commit のみで vi を起動し、コミットメッセージを書く（おすすめ）

# コミットの設定を行ったファイルを送信する
# 「git push origin 現在のブランチ名」で送信できます
git push origin feature/init
```

<details>
<summary>※ 「コミットメッセージのプレフィックスどれにしたら良いかわからん！楽に指定したい」って人 🙋‍♂</summary>
いい感じのツール使って、サボりましょう。  
  
[nodebrew](https://github.com/hokaccha/nodebrew) をインストールします。
```bash
curl -L git.io/nodebrew | perl - setup
export PATH=$HOME/.nodebrew/current/bin:$PATH
source ~/.bashrc
# nodebrew help と入れていろいろ表示されたら OK です。
```

先程インストールした nodebrew を使って Node.js をインストールします。
```bash
nodebrew install v16.14.0 # 何でも良い気がするけど、自分の環境がこれです。
nodebrew use v16.14.0
```
`node -v` と入れて、`v16.14.0` と出力されれば OK です。  
  
yarn をインストール
```bash
npm install -g yarn
```
`yarn -v` と入れて、`1.22.17（ここタイミングによって違うかも）` と表示されれば OK です。    
  
[git-cz](https://github.com/streamich/git-cz) をインストールし、コミットの設定を行う
```bash
yarn global add git-cz
cat ./changelog.config.js > ~/changelog.config.js
```

こうすると、`git commit` の代わりに `git cz` でいい感じのプレフィックスを指定できます。
</details>

### PlantUML をセットアップ
ETロボコンでは、モデル図の作成も評価対象になります。  
本チームでは、UML 作成に PlantUML を使用する方針なので、環境構築方法を記載します。  

##### Java をインストール
<details>
<summary>Windows</summary>

[https://www.java.com/ja/download/](https://www.java.com/ja/download/) から Java をインストールします。

```shell
java --version

# ↓ みたいな内容が表示されたら OK
# openjdk 17.0.3 2022-04-19 LTS
# OpenJDK Runtime Environment Corretto-17.0.3.6.1 (build 17.0.3+6-LTS)
# OpenJDK 64-Bit Server VM Corretto-17.0.3.6.1 (build 17.0.3+6-LTS, mixed mode, sharing)
```
</details>


##### Graphviz をインストール
<details>
<summary>Windows</summary>

[https://graphviz.org/download/#windows](https://graphviz.org/download/#windows) の「Stable Windows install packages」から任意のバージョンをインストールします。  
（なるべく新しいやつを入れると良いと思います。）
</details>

##### VSCode に PlantUML の拡張機能をインストール
![VSCodeの拡張機能の位置を説明している画像](https://user-images.githubusercontent.com/11432913/181919931-8db2d179-8692-41da-b0c5-6b307ccd8b86.png)

VSCode の Extensions から PlantUML をインストールします。

![PlantUMLインストール後のVSCode](https://user-images.githubusercontent.com/11432913/181920012-8db9141a-1fae-46f1-ad96-4ed1b28d4cf8.png)

こんな感じでインストールできたら OKです。
