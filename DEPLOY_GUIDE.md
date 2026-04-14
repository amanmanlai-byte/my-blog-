# 🚀 216的博客 - 部署指南

## 项目状态 ✅
- ✅ Hexo命令已修复
- ✅ 构建功能正常
- ✅ 主题配置完成
- ✅ 部署配置就绪

## 本地使用
`ash
# 进入项目目录
cd C:\Users\Lenovo\my-blog

# 启动本地服务器
.\hexo.cmd server -p 4001
# 或使用: hexo server -p 4001

# 访问: http://localhost:4001
`

## 帽子云部署

### 方法A: Git推送（如果帽子云支持）
`ash
# 提交更改
git add .
git commit -m "修复Hexo构建配置"

# 推送到远程仓库
git push origin master
`

### 方法B: 直接上传
1. 打包项目: my-blog.zip
2. 上传到帽子云控制台
3. 等待自动构建

### 构建配置
- **构建命令**: 
pm run build (调用build.js)
- **输出目录**: public/
- **Node版本**: 20+
- **主题**: Butterfly

## 问题排查
如果帽子云构建失败:
1. 检查Node.js版本是否为20+
2. 查看构建日志中的错误信息
3. 确保
pm run build能生成public文件夹

## 网站地址
- 本地: http://localhost:4001
- 线上: https://216blog-uoxy0017o.maozi.io

## 项目信息
- 作者: 216
- 主题: 摄影与动漫空间
- 最后更新: 2026-04-14 22:11:34
