/**
 * 长沙简牍博物馆 · 观展助手
 * 首页馆藏页面 & 底部导航栏交互
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // ========== 底部导航栏切换 ==========
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      // 移除所有 active 状态
      navItems.forEach(nav => nav.classList.remove('active'));
      
      // 为当前点击项添加 active
      this.classList.add('active');
      
      // 获取页面标识
      const page = this.getAttribute('data-page');
      
      // 根据页面标识执行不同逻辑（暂时用 alert 模拟跳转）
      switch(page) {
        case 'explore':
          console.log('跳转到探索页面');
          alert('🔍 探索页面（待开发）');
          break;
        case 'collection':
          console.log('当前已在馆藏页面');
          // 已在此页面，可滚动到顶部
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'tasks':
          console.log('跳转到任务成就页面');
          alert('🏆 任务成就页面（待开发）');
          break;
        case 'profile':
          console.log('跳转到个人主页页面');
          alert('👤 个人主页页面（待开发）');
          break;
        default:
          break;
      }
    });
  });

  // ========== 每日推送卡片点击 ==========
  const dailyPush = document.getElementById('dailyPush');
  if (dailyPush) {
    dailyPush.addEventListener('click', function() {
      alert('📜 每日推送详情：长沙吴简 · 嘉禾吏民田家莂\n\n三国时期吴国长沙郡的田家莂木简，记录吏民租田详情。');
      console.log('点击了每日推送');
    });
  }

  // ========== 基本常设展览卡片点击 ==========
  const permanentExhibition = document.getElementById('permanentExhibition');
  if (permanentExhibition) {
    permanentExhibition.addEventListener('click', function() {
      alert('🏛️ 基本常设展览：简牍时代\n\n展示长沙出土的历代简牍，涵盖战国至魏晋时期。');
      console.log('点击了常设展览');
    });
  }

  // ========== 往期特展卡片点击 ==========
  const pastExhibition = document.getElementById('pastExhibition');
  if (pastExhibition) {
    pastExhibition.addEventListener('click', function() {
      alert('📖 往期特展：秦简之谜\n\n回顾秦代简牍特展，探索里耶秦简的历史价值。');
      console.log('点击了往期特展');
    });
  }

  // ========== 藏品图鉴卡片点击 ==========
  const collectionGallery = document.getElementById('collectionGallery');
  if (collectionGallery) {
    collectionGallery.addEventListener('click', function(e) {
      // 如果点击的是查看全部文字
      if (e.target.classList.contains('gallery-more')) {
        alert('🖼️ 查看全部藏品图鉴（待开发）');
        console.log('点击了查看全部藏品');
      } else {
        alert('🖼️ 藏品图鉴详情（待开发）');
        console.log('点击了藏品图鉴区域');
      }
    });
  }

  // ========== 菜单按钮点击 ==========
  const menuIcon = document.querySelector('.menu-icon');
  if (menuIcon) {
    menuIcon.addEventListener('click', function() {
      alert('☰ 菜单功能（待开发）');
      console.log('点击了菜单按钮');
    });
  }

  console.log('✅ 长沙简牍博物馆 · 观展助手已就绪');
});