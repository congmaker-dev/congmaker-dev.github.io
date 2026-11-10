# congmaker-dev.github.io — 个人主页（深色版）

Yicong 的个人主页，展示 Linux 内核贡献、开源项目与专利。纯静态 HTML/CSS/JS，无依赖。

> 本目录是唯一维护版本（深色版）。历史上的多彩版模板已停更，仅存档于
> `/home/yicong/ZCodeProject/github-pages-site/colorful/`。

## 📁 结构

```
congmaker-dev.github.io/
├── index.html          主页（统计条/关于/技能/Linux内核贡献7卡/其他开源贡献/专利/联系）
├── kernel.html         完整记录 · Linux 内核贡献（每项含邮件讨论链接与补丁链接）
├── opensource.html     完整记录 · 其他开源贡献（Notepad--）
├── patents.html        完整记录 · 专利
├── css/style.css       全部样式（配色在顶部 :root 变量区）
├── js/main.js          菜单/终端打字机/滚动动画
└── README.md           本文件
```

导航栏在所有页面保持一致（首页 / 关于 / 技能 / 内核贡献 / 开源贡献 / 专利 / 联系我），
当前页对应项自动高亮（`class="active"`，新建页面时记得设置）。

## 👀 本地预览

```bash
cd /home/yicong/personal/gitee/congmaker-dev.github.io
python3 -m http.server 8123
# 浏览器打开 http://127.0.0.1:8123/
```

（本机没装 emoji 字体时 emoji 显示为方框，属环境限制；装字体：`sudo apt install fonts-noto-color-emoji`。）

## 🚀 发布与更新

GitHub 仓库：`congmaker-dev/congmaker-dev.github.io`（Public）
线上地址：<https://congmaker-dev.github.io>
SSH 密钥已绑定该账号，推送无需密码/token。

首次推送（若尚未初始化）：

```bash
cd /home/yicong/personal/gitee/congmaker-dev.github.io
git init
git add .
git commit -m "init: personal homepage"
git branch -M main
git remote add origin git@github.com:congmaker-dev/congmaker-dev.github.io.git
git push -u origin main
```

日常更新：

```bash
git add .
git commit -m "update: <改了什么>"
git push
```

推送后 1~2 分钟线上生效（浏览器可能缓存，Ctrl+F5 强刷）。若 404：仓库
Settings → Pages，确认 Source 为 `Deploy from a branch`、分支 `main`、目录 `/ (root)`。

## 🔧 修改对照表

| 想改什么 | 改哪里 |
|---|---|
| 统计数字（补丁数/专利数等） | **只改 `js/main.js` 顶部的 `SITE` 配置**，各页面统计自动同步 |
| 新增内核补丁 | `index.html` 复制一个 `<article class="project-card">` 块 + `kernel.html` 复制一个 `.record-item` 块（含讨论链接），再把 `main.js` 里 `SITE.patches` 加 1 |
| 新增开源项目贡献 | `index.html` 的 `.oss-grid` 里复制一张 `.oss-card` + `opensource.html` 复制一个 `.record-item` |
| 新增专利 | `index.html` 与 `patents.html` 的 `.patent-table` 各加一行，更新 `SITE.patents` / `SITE.patentsGranted` |
| 配色 / 字体 / 间距 | `css/style.css` 顶部 `:root` 变量区 |

## 📌 内容来源

`/home/yicong/personal/gitee/work_record/work_achievement.md`（可公开查询的工作成果）。
