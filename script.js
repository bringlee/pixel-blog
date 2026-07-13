// 像素博客：文章数据（使用 Markdown 格式）
const posts = [
    {
        id: 'pixel-life',
        title: '在像素里重建生活',
        date: '2026-07-10',
        tags: ['随笔', '像素', '生活'],
        excerpt: '用 8-bit 的视角看世界，每一帧都值得被记录。',
        content: `# 在像素里重建生活

> 越简单的画面，越能装下复杂的情绪。

最近迷上了像素风。不是因为复古，而是因为它强迫你**做减法**：只有有限的色块、有限的细节，所以每一笔都必须有意义。

## 为什么喜欢像素

- **克制**：不能堆砌细节，必须抓重点。
- **想象**：留白让观众自己脑补。
- **温暖**：低分辨率的画面总有一种手工感。

## 代码里的像素

写博客和画像素画其实很像。你也在用有限的元素——标题、段落、代码块——搭建一个完整的世界。

\`\`\`javascript
const life = {
    resolution: '8-bit',
    colors: ['#7ee787', '#ff9e64', '#89ddff'],
    rule: 'less is more'
};
\`\`\`

愿你也能在简单的像素里，找到属于自己的复杂世界。`
    },
    {
        id: 'markdown-guide',
        title: '我的 Markdown 写作指南',
        date: '2026-07-05',
        tags: ['技术', '写作', '工具'],
        excerpt: '用 Markdown 保持写作的专注与自由。',
        content: `# 我的 Markdown 写作指南

Markdown 是我最喜欢的写作格式。它让你专注于内容，而不是排版。

## 常用语法

### 标题

\`#\` 一级标题，\`##\` 二级标题，以此类推。

### 列表

无序列表：

- 简洁
- 清晰
- 易读

有序列表：

1. 打开编辑器
2. 写下想法
3. 发布

### 代码

行内代码用反引号：\`console.log('hello')\`。

代码块：

\`\`\`python
def hello(name):
    return f"Hello, {name}!"
\`\`\`

### 引用

> 写作就是思考的外化。

## 我的原则

1. 先写再改，不要边写边排版。
2. 短段落，降低阅读压力。
3. 多用列表，少用长句。

保持简单，保持写作。`
    },
    {
        id: 'web-building',
        title: '从零开始做一个静态博客',
        date: '2026-06-28',
        tags: ['技术', '前端', 'GitHub'],
        excerpt: '不需要后端，只需要 HTML、CSS、JS 和 Markdown。',
        content: `# 从零开始做一个静态博客

做一个个人博客不一定需要服务器。静态网站托管在 GitHub Pages 上完全免费，而且加载速度极快。

## 技术栈

| 技术 | 用途 |
|------|------|
| HTML | 页面结构 |
| CSS | 样式与布局 |
| JavaScript | 路由与交互 |
| Markdown | 文章内容 |
| GitHub Pages | 免费部署 |

## 实现思路

1. 用单页应用（SPA）的方式，通过 \`hash\` 路由切换视图。
2. 文章内容用 Markdown 编写，通过 \`marked.js\` 渲染成 HTML。
3. 部署到 GitHub Pages，利用 Actions 自动发布。

## 优势

- **免费**：GitHub Pages 不花钱。
- **快速**：纯静态，无后端延迟。
- **安全**：没有数据库，也就没有注入风险。
- **可控**：每一行代码都是自己的。

如果你也想拥有一个属于自己的小角落，不妨试试看。`
    },
    {
        id: 'summer-notes',
        title: '夏日笔记',
        date: '2026-06-20',
        tags: ['随笔', '生活'],
        excerpt: '关于空调、西瓜和午后的蝉鸣。',
        content: `# 夏日笔记

夏天总是让人又爱又恨。

## 喜欢夏天的理由

- 漫长的白昼
- 冰镇的西瓜
- 雷阵雨后的空气

## 讨厌夏天的理由

- 黏腻的汗水
- 晒黑的皮肤
- 永远不够的睡眠

但无论如何，夏天是活着的季节。阳光强烈，水波温柔，连懒惰都理直气壮。

> 夏天就是要无所事事，然后心安理得。`
    }
];

// 关于页面内容
const aboutContent = `# 关于我

你好，我是这个像素博客的主人。

我喜欢简单的东西：像素画、Markdown、静态网站，以及一切不必要之外的留白。

## 这个博客是什么

这是一个**极简像素风**的个人博客，用纯前端技术构建：

- 文章列表
- 文章详情
- 标签分类
- Markdown 渲染

所有内容都写在 Markdown 里，通过 JavaScript 动态渲染。

## 联系我

- GitHub: [github.com/yourname](https://github.com/yourname)
- Email: hello@example.com

感谢你的到访。`;

// DOM 元素
const app = document.getElementById('app');
const yearSpan = document.getElementById('year');

// 初始化年份
yearSpan.textContent = new Date().getFullYear();

// 配置 marked.js
marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: true,
    sanitize: false
});

// 渲染 Markdown 为安全的 HTML
function renderMarkdown(md) {
    return marked.parse(md);
}

// 获取所有标签及其计数
function getTags() {
    const tags = {};
    posts.forEach(post => {
        post.tags.forEach(tag => {
            tags[tag] = (tags[tag] || 0) + 1;
        });
    });
    return tags;
}

// 根据标签筛选文章
function filterPostsByTag(tag) {
    return posts.filter(post => post.tags.includes(tag));
}

// 渲染首页
function renderHome(tag = null) {
    const filteredPosts = tag ? filterPostsByTag(tag) : posts;

    let html = `
        <section class="hero">
            <h1>PIXEL.LOG</h1>
            <p>一个极简像素风的个人博客 · 用方块记录思考</p>
        </section>
    `;

    if (tag) {
        html += `<p class="tag-filter">标签：<span class="tag active">${tag}</span> <a href="#" class="clear-tag">清除筛选</a></p>`;
    }

    html += `<div class="post-list">`;

    if (filteredPosts.length === 0) {
        html += `<div class="not-found"><h2>404</h2><p>没有找到相关文章。</p></div>`;
    } else {
        filteredPosts.forEach(post => {
            html += `
                <article class="post-card" data-id="${post.id}">
                    <h2>${escapeHtml(post.title)}</h2>
                    <div class="post-meta">
                        <span>📅 ${post.date}</span>
                        <span>🏷️ ${post.tags.map(t => `<a href="#tags/${encodeURIComponent(t)}" class="tag-link">${escapeHtml(t)}</a>`).join(', ')}</span>
                    </div>
                    <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
                    <a href="#post/${post.id}" class="read-more">阅读全文 →</a>
                </article>
            `;
        });
    }

    html += `</div>`;
    app.innerHTML = html;
}

// 渲染文章详情
function renderPost(id) {
    const post = posts.find(p => p.id === id);

    if (!post) {
        renderNotFound();
        return;
    }

    app.innerHTML = `
        <article class="post-detail">
            <a href="#" class="back-link">← 返回文章列表</a>
            <h1>${escapeHtml(post.title)}</h1>
            <div class="post-meta">
                <span>📅 ${post.date}</span>
                <span>🏷️ ${post.tags.map(t => `<a href="#tags/${encodeURIComponent(t)}" class="tag-link">${escapeHtml(t)}</a>`).join(', ')}</span>
            </div>
            <div class="markdown-content">
                ${renderMarkdown(post.content)}
            </div>
        </article>
    `;
}

// 渲染标签页
function renderTags(activeTag = null) {
    const tags = getTags();
    const sortedTags = Object.entries(tags).sort((a, b) => b[1] - a[1]);

    let html = `
        <section class="about-card">
            <h1>标签分类</h1>
            <p>按标签浏览文章，点击标签筛选。</p>
        </section>
        <div class="tag-list">
    `;

    sortedTags.forEach(([tag, count]) => {
        const isActive = tag === activeTag;
        html += `<a href="#tags/${encodeURIComponent(tag)}" class="tag ${isActive ? 'active' : ''}">${escapeHtml(tag)}<span class="tag-count">${count}</span></a>`;
    });

    html += `</div>`;

    if (activeTag) {
        const filtered = filterPostsByTag(activeTag);
        html += `<p class="tag-filter">已选择：<span class="tag active">${escapeHtml(activeTag)}</span></p><div class="post-list">`;
        filtered.forEach(post => {
            html += `
                <article class="post-card" data-id="${post.id}">
                    <h2>${escapeHtml(post.title)}</h2>
                    <div class="post-meta"><span>📅 ${post.date}</span></div>
                    <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
                    <a href="#post/${post.id}" class="read-more">阅读全文 →</a>
                </article>
            `;
        });
        html += `</div>`;
    }

    app.innerHTML = html;
}

// 渲染关于页面
function renderAbout() {
    app.innerHTML = `
        <div class="about-card">
            <div class="avatar" role="img" aria-label="像素头像"></div>
            <div class="markdown-content">
                ${renderMarkdown(aboutContent)}
            </div>
        </div>
    `;
}

// 渲染 404
function renderNotFound() {
    app.innerHTML = `
        <div class="not-found">
            <h2>404</h2>
            <p>这个页面不存在。</p>
            <a href="#" class="read-more">返回首页</a>
        </div>
    `;
}

// 简单的 HTML 转义，防止 XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 更新导航激活状态
function updateNav(view) {
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.toggle('active', link.dataset.view === view);
    });
}

// 路由处理
function handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const parts = hash.split('/');
    const route = parts[0];
    const param = parts[1] ? decodeURIComponent(parts[1]) : null;

    switch (route) {
        case '':
        case 'home':
            renderHome();
            updateNav('home');
            break;
        case 'post':
            if (param) {
                renderPost(param);
                updateNav('home');
            } else {
                renderNotFound();
            }
            break;
        case 'tags':
            renderTags(param);
            updateNav('tags');
            break;
        case 'about':
            renderAbout();
            updateNav('about');
            break;
        default:
            renderNotFound();
    }

    window.scrollTo(0, 0);
}

// 事件监听
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);

// 全局点击事件：处理卡片点击跳转
document.addEventListener('click', (e) => {
    const card = e.target.closest('.post-card');
    if (card && !e.target.closest('a')) {
        const id = card.dataset.id;
        if (id) {
            window.location.hash = `#post/${id}`;
        }
    }
});
