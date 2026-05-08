/**
 * 游戏模式逻辑
 * 儿童模式 / 休闲模式 / 深度模式 共用
 */

// ==================== 摄像头工具 ====================
const CameraUtil = {
  stream: null,
  
  // 打开摄像头
  open: function(targetElementId) {
    // 检查是否支持摄像头
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('您的设备不支持摄像头功能，请使用手机浏览器打开。');
      return;
    }
    
    // 优先使用后置摄像头
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
      audio: false
    }).then((stream) => {
      this.stream = stream;
      this.showCameraModal(targetElementId, stream);
    }).catch((err) => {
      console.error('摄像头打开失败:', err);
      alert('无法打开摄像头，请检查是否授予了相机权限。\n\n提示：请在手机设置中允许浏览器访问相机。');
    });
  },
  
  // 显示摄像头弹窗
  showCameraModal: function(targetElementId, stream) {
    // 移除旧弹窗
    const oldModal = document.getElementById('cameraModal');
    if (oldModal) oldModal.remove();
    
    // 创建弹窗
    const modal = document.createElement('div');
    modal.id = 'cameraModal';
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: #000; z-index: 9999; display: flex;
      flex-direction: column; align-items: center; justify-content: center;
    `;
    
    modal.innerHTML = `
      <video id="cameraVideo" autoplay playsinline style="width:100%;height:70%;object-fit:cover;"></video>
      <div style="padding:16px;text-align:center;color:white;width:100%;">
        <p style="font-size:14px;margin-bottom:12px;opacity:0.8;">将文字对准框内进行扫描</p>
<button id="scanBtn" style="width:70px;height:70px;border-radius:50%;border:4px solid white;background:rgba(255,255,255,0.2);cursor:pointer;font-size:28px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">📸</button>
        <button id="closeCameraBtn" style="background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.3);padding:10px 24px;border-radius:20px;font-size:14px;cursor:pointer;margin-top:8px;">
          关闭摄像头
        </button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // 绑定视频流
    const video = document.getElementById('cameraVideo');
    video.srcObject = stream;
    
    // 扫描按钮
document.getElementById('scanBtn').addEventListener('click', () => {
  // 闪光效果
  const flash = document.createElement('div');
  flash.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:white;z-index:10000;opacity:0.8;transition:opacity 0.3s;';
  document.body.appendChild(flash);
  setTimeout(() => { flash.style.opacity = '0'; }, 100);
  setTimeout(() => { flash.remove(); }, 400);
  
  this.simulateScan(targetElementId);
  this.close();
});
    
    // 关闭按钮
    document.getElementById('closeCameraBtn').addEventListener('click', () => {
      this.close();
    });
  },
  
// 扫描成功
simulateScan: function(targetElementId) {
  const target = document.getElementById(targetElementId);
  if (target && !target.classList.contains('found')) {
    // 直接修改卡片状态
    target.classList.add('found');
    target.style.border = '2px solid #4caf50';
    target.style.background = '#f1f8e9';
    // 修改卡片内的提示文字
    const hint = target.querySelector('p:last-child');
    if (hint) hint.textContent = '✅ 已找到';
  }
},
  
  // 关闭摄像头
  close: function() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    const modal = document.getElementById('cameraModal');
    if (modal) modal.remove();
  }
};

// ==================== 儿童模式 ====================
const KidsMode = {
  currentStep: 'role',
  
  init: function() {
    this.currentStep = 'role';
    this.renderRoleStep();
  },
  
  renderRoleStep: function() {
    const container = document.getElementById('modeContent');
    container.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:55vh;padding:20px;text-align:center;">
        <div id="treasureBox" style="font-size:80px;cursor:pointer;animation:float 2s ease-in-out infinite;transition:transform 0.3s;">
          🎁
        </div>
        <p style="color:#888;font-size:14px;margin-top:12px;">点击宝箱 · 抽取你的密探身份</p>
        <div id="roleResult" style="display:none;margin-top:20px;"></div>
      </div>
      <style>
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      </style>
    `;
    
    document.getElementById('treasureBox').addEventListener('click', () => {
      this.openTreasureBox();
    });
  },
  
  openTreasureBox: function() {
    const box = document.getElementById('treasureBox');
    box.textContent = '✨';
    box.style.animation = 'sparkle 0.2s ease-in-out 3';
    
    setTimeout(() => {
      box.textContent = '📦';
      document.getElementById('roleResult').style.display = 'block';
      document.getElementById('roleResult').innerHTML = `
        <div style="font-size:64px;animation:bounce 0.5s ease-out;">🕵️</div>
        <h3 style="font-family:'ZhongHuaXinHuo','PingFang SC','Microsoft YaHei',sans-serif;font-size:22px;color:#DF1D16;margin:12px 0 8px;">大吴小密探</h3>
        <p style="color:#888;font-size:13px;margin-bottom:20px;">签小库 向你报到</p>
        <div style="background:rgba(223,29,22,0.05);border-radius:16px;padding:16px;text-align:left;line-height:1.8;color:#555;font-size:14px;">
          🗣️ "嘿！小英雄，你现在被秘密招募为大吴国的<strong style="color:#DF1D16;">首席小密探</strong>啦！这些竹简里藏着好多逃跑的小动物，只有你能用火眼金睛抓住它们！"
        </div>
        <button id="startMissionBtn" style="margin-top:24px;background:#DF1D16;color:#fff;border:none;padding:14px 36px;border-radius:16px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;box-shadow:0 6px 20px rgba(223,29,22,0.3);">
          🚀 开始任务
        </button>
      `;
      
      document.getElementById('startMissionBtn').addEventListener('click', () => {
        this.currentStep = 'mission';
        this.renderMissionStep();
      });
    }, 600);
  },
  
  renderMissionStep: function() {
    const container = document.getElementById('modeContent');
    container.innerHTML = `
      <div style="padding:10px 0;text-align:center;">
        <div style="background:linear-gradient(135deg,#DF1D16,#ff6b63);border-radius:20px;padding:20px;color:white;margin-bottom:20px;">
          <p style="font-size:13px;opacity:0.9;margin-bottom:4px;">🔍 任务目标</p>
          <p style="font-size:16px;font-weight:600;">寻找 3 个像小动物的古汉字</p>
          <p style="font-size:11px;opacity:0.7;margin-top:4px;">点击卡片打开摄像头扫描</p>
        </div>
        
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div class="mission-card scan-card" id="target1" style="background:#fff;border:2px dashed #DF1D16;border-radius:20px;padding:24px;text-align:center;cursor:pointer;transition:all 0.2s;">
            <span style="font-size:48px;">🐎</span>
            <p style="font-weight:600;margin-top:8px;color:#DF1D16;">目标一：马</p>
            <p style="font-size:12px;color:#888;">📷 点击打开摄像头扫描</p>
          </div>
          <div class="mission-card scan-card" id="target2" style="background:#fff;border:2px dashed #DF1D16;border-radius:20px;padding:24px;text-align:center;cursor:pointer;transition:all 0.2s;">
            <span style="font-size:48px;">🐟</span>
            <p style="font-weight:600;margin-top:8px;color:#DF1D16;">目标二：鱼</p>
            <p style="font-size:12px;color:#888;">📷 点击打开摄像头扫描</p>
          </div>
          <div class="mission-card scan-card" id="target3" style="background:#fff;border:2px dashed #DF1D16;border-radius:20px;padding:24px;text-align:center;cursor:pointer;transition:all 0.2s;">
            <span style="font-size:48px;">🐦</span>
            <p style="font-weight:600;margin-top:8px;color:#DF1D16;">目标三：鸟</p>
            <p style="font-size:12px;color:#888;">📷 点击打开摄像头扫描</p>
          </div>
        </div>
        
        <div id="missionComplete" style="display:none;margin-top:24px;"></div>
      </div>
    `;
    
    const targets = ['target1', 'target2', 'target3'];
    let foundCount = 0;
    
    targets.forEach(id => {
      document.getElementById(id).addEventListener('click', function() {
        if (this.classList.contains('found')) return;
        // 打开摄像头
        CameraUtil.open(id);
        // 注意：扫描成功会由 CameraUtil.simulateScan 触发下面的逻辑
      });
    });
    
    // 完成逻辑
    const checkComplete = () => {
      foundCount++;
      if (foundCount >= 3) {
        setTimeout(() => {
          document.getElementById('missionComplete').style.display = 'block';
          document.getElementById('missionComplete').innerHTML = `
            <div style="font-size:64px;animation:bounce 0.5s ease-out;">🏆</div>
            <h3 style="font-family:'ZhongHuaXinHuo','PingFang SC','Microsoft YaHei',sans-serif;font-size:20px;color:#DF1D16;margin:12px 0;">任务完成！</h3>
            <div style="background:#fff;border-radius:20px;padding:20px;border:2px solid #DF1D16;text-align:center;">
              <div style="width:60px;height:60px;background:#DF1D16;border-radius:50%;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:28px;color:white;">👤</div>
              <p style="font-weight:600;color:#DF1D16;">大吴一等密探</p>
              <p style="font-size:12px;color:#888;margin-top:4px;">电子结案书 · 已生成</p>
              <div style="width:80px;height:80px;border:3px solid #DF1D16;border-radius:50%;margin:12px auto 0;display:flex;align-items:center;justify-content:center;font-size:24px;color:#DF1D16;font-family:'ZhongHuaXinHuo','PingFang SC','Microsoft YaHei',sans-serif;">印</div>
           <button onclick="window.location.href='tasks.html'" style="margin-top:16px;background:#DF1D16;color:#fff;border:none;padding:12px 28px;border-radius:16px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">
  🏅 查看成就
</button>
              </div>
          `;
          window.scrollTo({ top: document.getElementById('missionComplete').offsetTop, behavior: 'smooth' });
        }, 300);
      }
    };
    
    // 监听每个 target 的 found 状态
    const observer = new MutationObserver(() => {
      const allFound = targets.every(id => document.getElementById(id).classList.contains('found'));
      if (allFound && foundCount < 3) {
        foundCount = 3;
        checkComplete();
        observer.disconnect();
      }
    });
    
    targets.forEach(id => {
      observer.observe(document.getElementById(id), { attributes: true, attributeFilter: ['class'] });
    });
  }
};

// ==================== 休闲模式 ====================
const CasualMode = {
  currentStep: 'role',
  selectedMood: null,
  
  moods: [
    { emoji: '💰', word: '想发财', role: '催债小吏', title: '走马楼打工人' },
    { emoji: '🏖️', word: '想休假', role: '摸鱼文书', title: '走马楼打工人' },
    { emoji: '🍜', word: '想吃肉', role: '食堂管理员', title: '走马楼打工人' },
    { emoji: '😴', word: '想躺平', role: '值班门卫', title: '走马楼打工人' }
  ],
  
  init: function() {
    this.currentStep = 'role';
    this.renderRoleStep();
  },
  
  renderRoleStep: function() {
    const container = document.getElementById('modeContent');
    container.innerHTML = `
      <div style="padding:10px 0;text-align:center;">
        <p style="color:#888;font-size:14px;margin-bottom:20px;">选择一个你此刻的心情词</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;" id="moodGrid">
          ${this.moods.map((m, i) => `
            <div class="mood-card clickable" data-index="${i}" style="background:#fff;border:2px solid #f0f0f0;border-radius:20px;padding:20px;text-align:center;cursor:pointer;transition:all 0.2s;">
              <span style="font-size:36px;">${m.emoji}</span>
              <p style="font-weight:600;margin-top:6px;color:#71C2E4;">${m.word}</p>
            </div>
          `).join('')}
        </div>
        <div id="roleResult" style="display:none;margin-top:20px;"></div>
      </div>
    `;
    
    document.querySelectorAll('.mood-card').forEach(card => {
      card.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        CasualMode.selectedMood = CasualMode.moods[index];
        CasualMode.showRole();
      });
    });
  },
  
  showRole: function() {
    const m = this.selectedMood;
    document.getElementById('roleResult').style.display = 'block';
    document.getElementById('roleResult').innerHTML = `
      <div style="font-size:64px;animation:bounce 0.5s ease-out;">🪪</div>
      <h3 style="font-family:'ZhongHuaXinHuo','PingFang SC','Microsoft YaHei',sans-serif;font-size:20px;color:#71C2E4;margin:12px 0 4px;">${m.title}</h3>
      <p style="font-size:18px;font-weight:600;color:#1a1a1a;margin-bottom:4px;">${m.role}</p>
      <p style="color:#888;font-size:12px;">简秘书 为你签发</p>
      <div style="background:rgba(113,194,228,0.08);border-radius:16px;padding:16px;text-align:left;line-height:1.8;color:#555;font-size:14px;margin-top:16px;">
        🗣️ "恭喜你入职两千年前的长沙郡政府！这是你的工牌，拿好。别看这儿现在安静，当年的 KPI 压力大着呢，走，带你去看看前任是怎么吐槽老板的。"
      </div>
      <button id="startMissionBtn" style="margin-top:20px;background:#71C2E4;color:#fff;border:none;padding:14px 36px;border-radius:16px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;box-shadow:0 6px 20px rgba(113,194,228,0.3);">
        🚀 开始摸鱼...啊不，开工！
      </button>
    `;
    
    document.getElementById('startMissionBtn').addEventListener('click', () => {
      this.currentStep = 'mission';
      this.renderMissionStep();
    });
  },
  
  renderMissionStep: function() {
    const container = document.getElementById('modeContent');
    const posts = [
      { word: '米', story: '某小吏因为算错了一斗米，被罚抄简牍 50 片。这倒霉蛋在简牍背面画了个哭脸，结果被上司发现，又加了 20 片。' },
      { word: '钱', story: '库房的老张最近很烦恼，因为他发现账上少了五铢钱。查了三天才发现是老鼠叼走塞墙缝了。他在简牍上郑重记录：钱非人盗，乃鼠所为。' },
      { word: '官', story: '新来的县令第一天上班就迟到了。他在考勤简上写的理由是：马惊了。但大家一致认为他就是睡过头了——因为他一周"马惊"了三次。' }
    ];
    
    container.innerHTML = `
      <div style="padding:10px 0;text-align:center;">
        <div style="background:linear-gradient(135deg,#71C2E4,#4fc3f7);border-radius:20px;padding:20px;color:white;margin-bottom:20px;">
          <p style="font-size:13px;opacity:0.9;margin-bottom:4px;">🕵️ 任务目标</p>
          <p style="font-size:16px;font-weight:600;">寻找 3 个高频词解锁古代职场八卦</p>
          <p style="font-size:11px;opacity:0.7;margin-top:4px;">点击卡片打开摄像头扫描</p>
        </div>
        
        <div style="display:flex;flex-direction:column;gap:16px;" id="postList">
          ${posts.map((p, i) => `
            <div class="mission-post scan-card" id="post${i}" data-index="${i}" style="background:#fff;border:2px dashed #71C2E4;border-radius:20px;padding:20px;text-align:center;cursor:pointer;transition:all 0.2s;">
              <span style="font-size:40px;">📋</span>
              <p style="font-weight:600;margin-top:8px;color:#71C2E4;">目标：找到"<strong>${p.word}</strong>"</p>
              <p style="font-size:12px;color:#888;">📷 点击打开摄像头扫描</p>
            </div>
          `).join('')}
        </div>
        
        <div id="postReveal" style="margin-top:16px;"></div>
      </div>
    `;
    
let foundCount = 0;
document.querySelectorAll('.mission-post').forEach(post => {
  post.addEventListener('click', function() {
    if (this.classList.contains('found')) return;
    CameraUtil.open(this.id);
    foundCount++;
    // 等待扫描完成后检查
    setTimeout(() => {
      if (foundCount >= 3) {
        document.getElementById('postReveal').innerHTML += `
          <div style="margin-top:20px;text-align:center;">
            <span style="font-size:48px;">🏆</span>
            <p style="font-weight:600;color:#DF1D16;">全部八卦收集完毕！</p>
            <button onclick="window.location.href='tasks.html'" style="margin-top:16px;background:#71C2E4;color:#fff;border:none;padding:12px 28px;border-radius:16px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">
              🏅 查看成就
            </button>
          </div>
        `;
      }
    }, 500);
  });
});
  }
};

// ==================== 深度模式 ====================
const DeepMode = {
  currentStep: 'role',
  
  init: function() {
    this.currentStep = 'role';
    this.renderRoleStep();
  },
  
  renderRoleStep: function() {
    const container = document.getElementById('modeContent');
    container.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:55vh;padding:20px;text-align:center;">
        <p style="color:#888;font-size:14px;margin-bottom:20px;">请按下手印，确认你的考据官身份</p>
        <div id="handPrint" style="width:100px;height:100px;border:3px solid #DF1D16;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:48px;cursor:pointer;transition:all 0.3s;background:rgba(223,29,22,0.03);">
          ✋
        </div>
        <p style="color:#888;font-size:12px;margin-top:8px;">点击确认</p>
        <div id="roleResult" style="display:none;margin-top:20px;"></div>
      </div>
    `;
    
    document.getElementById('handPrint').addEventListener('click', () => {
      this.confirmContract();
    });
  },
  
  confirmContract: function() {
    const hand = document.getElementById('handPrint');
    hand.textContent = '🤝';
    hand.style.background = 'rgba(223,29,22,0.08)';
    
    setTimeout(() => {
      document.getElementById('roleResult').style.display = 'block';
      document.getElementById('roleResult').innerHTML = `
        <div style="font-size:64px;animation:bounce 0.5s ease-out;">📜</div>
        <h3 style="font-family:'ZhongHuaXinHuo','PingFang SC','Microsoft YaHei',sans-serif;font-size:22px;color:#DF1D16;margin:12px 0 4px;">长沙郡考据官</h3>
        <p style="color:#888;font-size:13px;">牍大丞 为你授权</p>
        <div style="background:rgba(223,29,22,0.05);border-radius:16px;padding:16px;text-align:left;line-height:1.8;color:#555;font-size:14px;margin-top:16px;">
          🗣️ "史学家，欢迎回到公元 222 年。这些沉睡在井底的碎片记载了一个家族的兴衰。历史的真相已经断裂，我们现在需要你通过残存的字符，重构那段消失的记忆。"
        </div>
        <button id="startMissionBtn" style="margin-top:20px;background:#DF1D16;color:#fff;border:none;padding:14px 36px;border-radius:16px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;box-shadow:0 6px 20px rgba(223,29,22,0.3);">
          🚀 进入考据
        </button>
      `;
      
      document.getElementById('startMissionBtn').addEventListener('click', () => {
        this.currentStep = 'mission';
        this.renderMissionStep();
      });
    }, 600);
  },
  
  renderMissionStep: function() {
    const container = document.getElementById('modeContent');
    const clues = [
      { label: '线索一', desc: '苏某 · 建安二十五年', info: '户主苏某，家有四口，田十亩，纳赋税' },
      { label: '线索二', desc: '苏氏 · 黄龙元年', info: '苏某长子成年，新增一口，田增至十五亩' },
      { label: '线索三', desc: '苏家 · 嘉禾三年', info: '苏某之孙出生，家族兴旺，然赋税亦增' }
    ];
    
    container.innerHTML = `
      <div style="padding:10px 0;text-align:center;">
        <div style="background:linear-gradient(135deg,#1a1a2e,#2d2d44);border-radius:20px;padding:20px;color:white;margin-bottom:20px;">
          <p style="font-size:12px;opacity:0.7;margin-bottom:4px;">《走马楼：大井底的家族档案》</p>
          <p style="font-size:13px;opacity:0.9;">寻找 3 处提到"<strong style="color:#71C2E4;">苏</strong>"姓的简牍记录</p>
          <p style="font-size:11px;opacity:0.7;margin-top:4px;">点击卡片打开摄像头扫描</p>
        </div>
        
        <div style="display:flex;flex-direction:column;gap:16px;" id="clueList">
          ${clues.map((c, i) => `
            <div class="clue-card scan-card" id="clue${i}" data-index="${i}" style="background:#fff;border:2px solid #eee;border-radius:16px;padding:20px;text-align:center;cursor:pointer;transition:all 0.2s;">
              <span style="font-size:36px;">🔍</span>
              <p style="font-weight:600;margin-top:8px;color:#DF1D16;">${c.label}</p>
              <p style="font-size:12px;color:#888;">${c.desc}</p>
              <p style="font-size:11px;color:#aaa;">📷 点击扫描</p>
            </div>
          `).join('')}
        </div>
        
        <div id="linkGame" style="display:none;margin-top:20px;"></div>
        <div id="finalResult" style="display:none;margin-top:20px;"></div>
      </div>
    `;
    
    document.querySelectorAll('.clue-card').forEach(card => {
      card.addEventListener('click', function() {
        if (this.classList.contains('found')) return;
        // 打开摄像头
        CameraUtil.open(this.id);
      });
    });
    
    // 监听完成
    const observer = new MutationObserver(() => {
      const allFound = document.querySelectorAll('.clue-card.found').length === 3;
      if (allFound) {
        observer.disconnect();
        this.showLinkGame(clues);
      }
    });
    
    document.querySelectorAll('.clue-card').forEach(card => {
      observer.observe(card, { attributes: true, attributeFilter: ['class'] });
    });
  },
  
  showLinkGame: function(clues) {
    document.getElementById('linkGame').style.display = 'block';
    document.getElementById('linkGame').innerHTML = `
      <p style="color:#888;font-size:14px;margin-bottom:16px;">用手指划线连接散落的简牍</p>
      <div style="display:flex;flex-direction:column;gap:12px;align-items:center;" id="linkArea">
        ${clues.map((c, i) => `
          <div class="link-node" data-node="${i}" style="background:#fff;border:2px solid #DF1D16;border-radius:12px;padding:16px;width:100%;cursor:pointer;transition:all 0.2s;text-align:left;">
            <strong style="color:#DF1D16;">${c.label}</strong>
            <p style="font-size:13px;color:#555;margin-top:4px;">${c.info}</p>
          </div>
        `).join('')}
      </div>
      <button id="completeLinkBtn" style="margin-top:16px;background:#DF1D16;color:#fff;border:none;padding:12px 28px;border-radius:12px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">
        🔗 确认编联
      </button>
    `;
    
    let linkedCount = 0;
    document.querySelectorAll('.link-node').forEach(node => {
      node.addEventListener('click', function() {
        if (this.classList.contains('linked')) return;
        this.classList.add('linked');
        this.style.background = '#e8f5e9';
        this.style.border = '2px solid #4caf50';
        linkedCount++;
      });
    });
    
    document.getElementById('completeLinkBtn').addEventListener('click', () => {
      document.getElementById('finalResult').style.display = 'block';
      document.getElementById('finalResult').innerHTML = `
        <div style="background:#fff;border-radius:20px;padding:24px;border:2px solid #DF1D16;text-align:center;animation:fadeIn 0.5s ease;">
          <div style="font-size:64px;">🏅</div>
          <h3 style="font-family:'ZhongHuaXinHuo','PingFang SC','Microsoft YaHei',sans-serif;font-size:20px;color:#DF1D16;margin:12px 0;">首席史官</h3>
          <p style="line-height:1.8;color:#555;font-size:14px;text-align:left;">
            <strong>家族档案重建完成：</strong><br>
            苏氏家族，自建安二十五年至嘉禾三年，历经三代，人口从四口增至六口，田地从十亩扩至二十亩。这是一个普通农家在三国时代的生存缩影。
          </p>
          <p style="color:#888;font-size:12px;margin-top:12px;">历史不仅是大人物的，也是每一个普通人的。</p>
        <button onclick="window.location.href='tasks.html'" style="margin-top:16px;background:#DF1D16;color:#fff;border:none;padding:12px 28px;border-radius:16px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;box-shadow:0 6px 20px rgba(223,29,22,0.3);">
  🏅 查看成就
</button>
</div>
      `;
      window.scrollTo({ top: document.getElementById('finalResult').offsetTop, behavior: 'smooth' });
    });
  }
};