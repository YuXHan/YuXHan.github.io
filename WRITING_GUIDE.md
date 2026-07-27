# 网站日常更新指南

## 推荐方式：Pages CMS

1. 打开 <https://app.pagescms.org>，使用 GitHub 登录。
2. 选择 `YuXHan/YuXHan.github.io` 仓库和 `main` 分支。
3. 进入“日记与学习笔记”，点击新建。
4. 填写标题、日期、分类、标签和正文，然后保存。
5. GitHub Actions 会自动重新构建并发布网站。

日记的第一个分类填写 `日记`，学习笔记的第一个分类填写 `学习`。文章会自动出现在对应页面。

## 备用方式：直接使用 GitHub

在 `_posts` 文件夹中创建 `YYYY-MM-DD-英文短标题.md`，内容格式如下：

```markdown
---
title: 文章标题
date: 2026-07-27 20:00:00 +0800
categories: [日记, 生活]
tags: [记录]
description: 一句话摘要
published: true
---

从这里开始写正文。
```

教育经历、成果和个人简介分别位于：

- `_tabs/education.md`
- `_tabs/achievements.md`
- `_tabs/about.md`

> 注意：仓库是公开的。即使文章设置为不发布，源文件仍可能被其他人看到，请不要把真正私密的信息提交到仓库。
