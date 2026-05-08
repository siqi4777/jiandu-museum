/**
 * 底部导航栏跳转逻辑
 * 4 个 HTML 文件共用此文件
 * 通过修改 window.location.href 跳转到对应的一级页面 HTML
 */

document.addEventListener('DOMContentLoaded', function() {
  
  const navItems = document.querySelectorAll('.nav-item');
  
  // 获取当前页面的标识（从 <body> 的 data-page 属性读取）
  const currentPage = document.body.getAttribute('data-page');
  
  // 高亮当前页面对应的导航项
  navItems.forEach(item => {
    const page = item.getAttribute('data-page');
    if (page === currentPage) {
      item.classList.add('active');
    }
    
    // 点击导航项跳转到对应 HTML
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const targetPage = this.getAttribute('data-page');
      
      // 如果已经在目标页面，不做跳转
      if (targetPage === currentPage) {
        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      // 跳转到对应的一级页面 HTML
      window.location.href = targetPage + '.html';
    });
  });
  
});