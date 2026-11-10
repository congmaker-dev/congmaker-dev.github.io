# congmaker-dev.github.io — 个人主页（深色版）

Yicong 的个人主页，展示 Linux 内核贡献、开源项目与专利。纯静态 HTML/CSS/JS，无依赖。

> 本目录是唯一维护版本（深色版）。历史上的多彩版模板已停更，仅存档于
> `/home/yicong/ZCodeProject/github-pages-site/colorful/`。

## 📁 结构

```
congmaker-dev.github.io/
├── index.html          主页（统计条/关于/技能/Linux内核贡献7卡/其他开源贡献/专利/联系）
├── contributions.html  完整记录页（每项成果含邮件讨论链接与补丁链接）
├── css/style.css       全部样式（配色在顶部 :root 变量区）
├── js/main.js          菜单/终端打字机/滚动动画
└── README.md           本文件
```

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
| 统计条数字 | `index.html` 的 `.stats` 区块 |
| 新增内核补丁卡片 | `index.html` 复制一个 `<article class="project-card">` 块 |
| 新增开源项目贡献 | `index.html` 的 `.oss-grid` 里复制一张 `.oss-card` |
| 新增完整记录条目 | `contributions.html` 复制一个 `.record-item` 块（含讨论链接） |
| 新增专利 | `index.html` 与 `contributions.html` 的 `.patent-table` 各加一行 |
| 配色 / 字体 / 间距 | `css/style.css` 顶部 `:root` 变量区 |

## 📌 内容来源

`/home/yicong/personal/gitee/work_record/work_achievement.md`（可公开查询的工作成果）。
