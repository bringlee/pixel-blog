# Pixel Blog · 像素博客

一个极简像素风的个人博客，纯前端实现，支持 Markdown 渲染。

## 特性

- 文章列表与详情
- 标签分类浏览
- Markdown 渲染（使用 marked.js）
- 响应式像素风设计
- 单页应用（Hash 路由）
- 自动部署到 GitHub Pages

## 在线访问

https://yourusername.github.io/pixel-blog

## 本地预览

```bash
cd pixel-blog
python -m http.server 8000
```

然后打开 http://localhost:8000

## 技术栈

- HTML5
- CSS3
- JavaScript (Vanilla)
- Markdown
- GitHub Pages

## 添加新文章

在 `script.js` 的 `posts` 数组中新增文章对象即可，例如：

```javascript
{
    id: 'my-new-post',
    title: '文章标题',
    date: '2026-07-13',
    tags: ['标签一', '标签二'],
    excerpt: '文章摘要',
    content: `# Markdown 内容`
}
```
