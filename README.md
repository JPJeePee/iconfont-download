# iconfont-download

Step1: Download

```sh
git clone git@github.com:JPJeePee/iconfont-download.git
```

Step2: Install

```sh
npm install
```

Step3: Config

```json
{
  // your iconfont-repo address
  "symbol_url": "//at.alicdn.com/t/font_1373348_ghk94ooopqr.js",
  // the directory where to put your output
  "save_dir": "",
  // the size of your iconfont png
  "size": 100,
  // exclude this array from your iconfont png
  "excludes": []
}
```

Step4: Run

```sh
npm run download
```
