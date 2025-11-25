# Vercel 部署指南

## 方法一：通过 Vercel CLI 部署（推荐）

### 1. 安装 Vercel CLI

```bash
npm install -g vercel
```

### 2. 登录 Vercel

```bash
vercel login
```

### 3. 部署项目

在项目根目录运行：

```bash
vercel
```

第一次部署时会询问一些问题：
- Set up and deploy "~/Desktop/wallet-connect-example"? **Y**
- Which scope do you want to deploy to? **选择你的账户**
- Link to existing project? **N** (如果是第一次部署)
- What's your project's name? **wallet-connect-example** (或自定义名称)
- In which directory is your code located? **./** 
- Want to override the settings? **N**

### 4. 生产环境部署

开发测试通过后，运行：

```bash
vercel --prod
```

## 方法二：通过 Vercel 网站部署

### 1. 准备 Git 仓库

确保你的代码已推送到 GitHub、GitLab 或 Bitbucket：

```bash
git add .
git commit -m "Add Vercel configuration"
git push origin master
```

### 2. 导入项目到 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 选择你的 Git 仓库
4. 配置项目设置：
   - **Framework Preset**: Other
   - **Build Command**: `echo 'Using pre-built files'`
   - **Output Directory**: `dist`
   - **Install Command**: `echo 'No install needed'`

5. 点击 "Deploy"

### 3. 自动部署

连接 Git 仓库后，每次推送代码到主分支，Vercel 会自动重新部署。

## 方法三：拖拽部署

1. 访问 [vercel.com/new](https://vercel.com/new)
2. 直接将 `dist` 文件夹拖拽到页面上
3. 等待部署完成

⚠️ 注意：此方法不支持自动部署，每次更新需要手动上传。

## 环境变量配置（如需要）

如果你的应用需要环境变量：

1. 在 Vercel 项目设置中添加环境变量
2. 或在项目根目录创建 `.env.production` 文件（不要提交到 Git）

## 自定义域名

部署成功后，你可以在 Vercel 项目设置中添加自定义域名：

1. 进入项目设置
2. 选择 "Domains"
3. 添加你的域名
4. 按照提示配置 DNS 记录

## 查看部署状态

```bash
vercel ls
```

## 查看项目日志

```bash
vercel logs
```

## 常见问题

### Q: 路由返回 404？
A: 确保 `vercel.json` 中的路由配置正确，所有路由都应指向 `index.html`。

### Q: 静态资源加载失败？
A: 检查资源路径是否正确，确保使用相对路径或绝对路径。

### Q: 部署后页面空白？
A: 检查浏览器控制台错误，可能是 JavaScript 错误或资源加载问题。

## 有用的命令

```bash
# 查看所有部署
vercel ls

# 查看当前项目信息
vercel inspect

# 删除部署
vercel rm [deployment-url]

# 查看环境变量
vercel env ls
```

## 更多信息

- [Vercel 官方文档](https://vercel.com/docs)
- [Vercel CLI 文档](https://vercel.com/docs/cli)

