# 夏特稀筆記網
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### 安裝

```
$ yarn
```

### 本地開發

```
$ yarn start
```

使用這個指令會幫您打開一個本地開發伺服器和開啟瀏覽器

### 建置

```
$ yarn build
```

使用這個指令會會幫您生成靜態網頁，並放置在 `build`裡面。

### 部屬

使用 SSH:

```
$ USE_SSH=true yarn deploy
```

如果不是使用 SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果你使用 gh_pages，那就用這個指令吧！
