const hexo = require('hexo');

async function build() {
    console.log('开始构建...');
    
    const app = new hexo(process.cwd(), { silent: false });
    await app.init();
    await app.call('generate', {});
    
    console.log('构建完成！');
}

build().catch(err => {
    console.error('构建失败:', err);
    process.exit(1);
});
