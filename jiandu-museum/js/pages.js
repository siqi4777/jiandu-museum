/**
 * 所有页面的子页面内容模板
 * 每个一级页面可以有多个子页面
 */

const pageTemplates = {

  // ==================== 探索页面 ====================
explore: {
    home: {
      title: '探索发现',
      subtitle: '',
      html: `<!-- 直接跳到 map，此页面不使用 -->`
    },
    map: {
      title: '展厅地图',
      subtitle: '',
      html: `
        <div style="position:relative;">
          
          <!-- 地图容器（全屏占满） -->
          <div style="background:#f5f5f0;border-radius:16px;overflow:hidden;min-height:380px;margin-bottom:80px;" id="mapContainer">
            
            <!-- 1F -->
            <div class="floor-map" id="floor1" style="display:block;padding:16px;min-height:380px;">
              <div style="text-align:center;margin-bottom:12px;">
                <span style="display:inline-block;background:#DF1D16;color:white;padding:4px 14px;border-radius:10px;font-size:12px;font-weight:600;">1F</span>
                <h3 style="font-family:'ZhongHuaXinHuo',sans-serif;font-size:18px;margin:8px 0 2px;">文明之路</h3>
                <p style="color:#888;font-size:11px;">长沙简牍博物馆基本陈列</p>
              </div>
              <div style="background:#fff;border-radius:14px;padding:14px;border:2px solid #e8e8e0;">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(223,29,22,0.06),rgba(223,29,22,0.02));border:2px solid rgba(223,29,22,0.15);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">📜</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#DF1D16;">三国吴简</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">走马楼出土</p>
                  </div>
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(223,29,22,0.06),rgba(223,29,22,0.02));border:2px solid rgba(223,29,22,0.15);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">🏛️</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#DF1D16;">中国简牍</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">战国至魏晋</p>
                  </div>
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(223,29,22,0.06),rgba(223,29,22,0.02));border:2px solid rgba(223,29,22,0.15);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">🌍</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#DF1D16;">世界文字载体</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">全球书写材料</p>
                  </div>
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(223,29,22,0.06),rgba(223,29,22,0.02));border:2px solid rgba(223,29,22,0.15);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">✍️</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#DF1D16;">简牍书法</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">书法演变</p>
                  </div>
                </div>
                <div style="display:flex;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:2px dashed #e0e0e0;">
                  <span style="color:#4caf50;font-weight:600;font-size:11px;">🚪 入口</span>
                  <span style="color:#ff9800;font-weight:600;font-size:11px;">🚪 2F →</span>
                </div>
              </div>
            </div>
            
            <!-- 2F -->
            <div class="floor-map" id="floor2" style="display:none;padding:16px;min-height:380px;">
              <div style="text-align:center;margin-bottom:12px;">
                <span style="display:inline-block;background:#71C2E4;color:white;padding:4px 14px;border-radius:10px;font-size:12px;font-weight:600;">2F</span>
                <h3 style="font-family:'ZhongHuaXinHuo',sans-serif;font-size:18px;margin:8px 0 2px;">湘水流过</h3>
                <p style="color:#888;font-size:11px;">湖南地区出土简牍展</p>
              </div>
              <div style="background:#fff;border-radius:14px;padding:14px;border:2px solid #e8e8e0;">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(113,194,228,0.06),rgba(113,194,228,0.02));border:2px solid rgba(113,194,228,0.15);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">🏔️</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#71C2E4;">湘水溯源</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">流域分布</p>
                  </div>
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(113,194,228,0.06),rgba(113,194,228,0.02));border:2px solid rgba(113,194,228,0.15);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">🏺</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#71C2E4;">简牍之乡</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">考古发现</p>
                  </div>
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(113,194,228,0.06),rgba(113,194,228,0.02));border:2px solid rgba(113,194,228,0.15);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">📚</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#71C2E4;">地下书库</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">文献珍藏</p>
                  </div>
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(113,194,228,0.06),rgba(113,194,228,0.02));border:2px solid rgba(113,194,228,0.15);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">🔬</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#71C2E4;">学术价值</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">研究成果</p>
                  </div>
                </div>
                <div style="display:flex;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:2px dashed #e0e0e0;">
                  <span style="color:#ff9800;font-weight:600;font-size:11px;">🚪 ← 1F</span>
                  <span style="color:#ff9800;font-weight:600;font-size:11px;">🚪 3F →</span>
                </div>
              </div>
            </div>
            
            <!-- 3F -->
            <div class="floor-map" id="floor3" style="display:none;padding:16px;min-height:380px;">
              <div style="text-align:center;margin-bottom:12px;">
                <span style="display:inline-block;background:#DF1D16;color:white;padding:4px 14px;border-radius:10px;font-size:12px;font-weight:600;">3F</span>
                <h3 style="font-family:'ZhongHuaXinHuo',sans-serif;font-size:18px;margin:8px 0 2px;">文脉在兹 · 谊居千年</h3>
                <p style="color:#888;font-size:11px;">西汉贾谊与他生活的城市</p>
              </div>
              <div style="background:#fff;border-radius:14px;padding:14px;border:2px solid #e8e8e0;">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(223,29,22,0.04),rgba(223,29,22,0.01));border:2px solid rgba(223,29,22,0.12);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">🎓</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#DF1D16;">洛阳才子</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">贾谊生平</p>
                  </div>
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(223,29,22,0.04),rgba(223,29,22,0.01));border:2px solid rgba(223,29,22,0.12);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">🏠</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#DF1D16;">谪居长沙</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">太傅岁月</p>
                  </div>
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(223,29,22,0.04),rgba(223,29,22,0.01));border:2px solid rgba(223,29,22,0.12);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">📖</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#DF1D16;">鵩鸟赋成</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">文学创作</p>
                  </div>
                  <div class="map-room clickable" style="background:linear-gradient(135deg,rgba(223,29,22,0.04),rgba(223,29,22,0.01));border:2px solid rgba(223,29,22,0.12);border-radius:12px;padding:16px 12px;text-align:center;cursor:pointer;transition:all 0.2s;">
                    <span style="font-size:32px;">🏙️</span>
                    <p class="room-name" style="font-weight:600;font-size:13px;margin-top:6px;color:#DF1D16;">过秦论道</p>
                    <p class="room-desc" style="font-size:10px;color:#888;">古城风貌</p>
                  </div>
                </div>
                <div style="display:flex;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:2px dashed #e0e0e0;">
                  <span style="color:#ff9800;font-weight:600;font-size:11px;">🚪 ← 2F</span>
                  <span style="color:#4caf50;font-weight:600;font-size:11px;">🚪 出口</span>
                </div>
              </div>
            </div>
            
          </div>
          
          <!-- 展厅详情 -->
          <div id="roomDetail" style="display:none;margin-top:12px;"></div>
        </div>
      `
    },
    scanner: {
      title: '扫码探索',
      subtitle: '',
      html: `
        <div id="scanArea" style="background: #f9f9f9; border: 2px dashed #DF1D16; border-radius: 24px; padding: 40px 20px; text-align: center; cursor: pointer; transition: all 0.3s ease; min-height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <span style="font-size: 64px;">📷</span>
          <p style="margin-top: 16px; font-weight: 600; color: #DF1D16;">点击打开摄像头</p>
          <p style="color: #888; font-size: 13px; margin-top: 8px;">对准文物或简牍拍照识别</p>
          <p style="color: #bbb; font-size: 11px; margin-top: 12px;">需要完成 3 次扫描</p>
        </div>
        <button class="back-button" style="margin-top:16px;" onclick="document.querySelector('[data-subpage=map]').click();">← 返回地图</button>
      `
    }
  },

  // ==================== 馆藏页面 ====================
  collection: {
    home: {
      title: '馆藏珍品',
      subtitle: '今日推荐',
      html: `
       <div class="daily-push clickable" data-subpage="dailyDetail">
  <div class="daily-push-img">
    <img src="assets/images/长沙吴简 · 嘉禾吏民田家莂.jpg" alt="长沙吴简">
  </div>
  <div class="daily-push-body">
    <div class="daily-text">
      <span class="daily-label">每日推送</span>
      <h3 class="daily-title">长沙吴简 · 嘉禾吏民田家莂</h3>
      <p class="daily-desc"><span>📜</span> 三国吴简精选 · 点击查看</p>
    </div>
    <div class="daily-icon">→</div>
  </div>
</div>

          <!-- 当前陈列 -->
          <div class="exhibition-section">
            <div class="exhibition-section-header">
              <h3 class="exhibition-section-title">当前陈列</h3>
              <span class="exhibition-section-more">↗</span>
            </div>
            <div class="exhibition-scroll">
              <div class="exhibition-item clickable" data-subpage="permanentExhibition">
                <div class="exhibition-img">
                  <img src="assets/images/文明之路——长沙简牍博物馆基本陈列.png" alt="文明之路">
                </div>
                <p class="exhibition-item-title">文明之路</p>
                <p class="exhibition-item-desc">长沙简牍博物馆基本陈列</p>
              </div>
              <div class="exhibition-item clickable" data-subpage="permanentExhibition2">
                <div class="exhibition-img">
                  <img src="assets/images/湘水流过——湖南地区出土简牍展.jpg" alt="湘水流过">
                </div>
                <p class="exhibition-item-title">湘水流过</p>
                <p class="exhibition-item-desc">湖南地区出土简牍展</p>
              </div>
              <div class="exhibition-item clickable" data-subpage="permanentExhibition3">
                <div class="exhibition-img">
                  <img src="assets/images/文脉在兹  谊居千年——西汉长沙王太傅贾谊和他生活的城市.jpg" alt="文脉在兹 谊居千年">
                </div>
                <p class="exhibition-item-title">文脉在兹 谊居千年</p>
                <p class="exhibition-item-desc">西汉贾谊和他生活的城市</p>
              </div>
            </div>
          </div>

          <!-- 往期特展 -->
          <div class="exhibition-section past-section">
            <div class="exhibition-section-header">
              <h3 class="exhibition-section-title">往期特展</h3>
              <span class="exhibition-section-more">↗</span>
            </div>
            <div class="exhibition-scroll">
              <div class="exhibition-item clickable" data-subpage="pastExhibition1">
                <div class="exhibition-img">
                  <img src="assets/images/承汉启唐——北魏书法与雕塑艺术展.jpg" alt="承汉启唐">
                </div>
                <p class="exhibition-item-title">承汉启唐</p>
                <p class="exhibition-item-desc">北魏书法与雕塑艺术展</p>
              </div>
              <div class="exhibition-item clickable" data-subpage="pastExhibition2">
                <div class="exhibition-img">
                  <img src="assets/images/大道至简——简牍里的中国精神主题展.png" alt="大道至简">
                </div>
                <p class="exhibition-item-title">大道至简</p>
                <p class="exhibition-item-desc">简牍里的中国精神主题展</p>
              </div>
              <div class="exhibition-item clickable" data-subpage="pastExhibition3">
                <div class="exhibition-img">
                  <img src="assets/images/鉴古知今——罗振玉学术成就展.jpg" alt="鉴古知今">
                </div>
                <p class="exhibition-item-title">鉴古知今</p>
                <p class="exhibition-item-desc">罗振玉学术成就展</p>
              </div>
              <div class="exhibition-item clickable" data-subpage="pastExhibition4">
                <div class="exhibition-img">
                  <img src="assets/images/金玉妆成——江西省博物馆藏明代首饰精品展.jpg" alt="金玉妆成">
                </div>
                <p class="exhibition-item-title">金玉妆成</p>
                <p class="exhibition-item-desc">江西省博物馆藏明代首饰</p>
              </div>
              <div class="exhibition-item clickable" data-subpage="pastExhibition5">
                <div class="exhibition-img">
                  <img src="assets/images/流沙坠简——甘肃出土简牍文物精品展.jpg" alt="流沙坠简">
                </div>
                <p class="exhibition-item-title">流沙坠简</p>
                <p class="exhibition-item-desc">甘肃出土简牍文物精品展</p>
              </div>
              <div class="exhibition-item clickable" data-subpage="pastExhibition6">
                <div class="exhibition-img">
                  <img src="assets/images/清平乐——黄河流域汉唐宋元乐舞戏曲精品文物展.jpg" alt="清平乐">
                </div>
                <p class="exhibition-item-title">清平乐</p>
                <p class="exhibition-item-desc">黄河流域汉唐宋元乐舞戏曲</p>
              </div>
            </div>
          </div>

          <!-- 藏品图鉴 -->
          <div class="collection-gallery clickable" data-subpage="collectionGallery">
            <div class="gallery-header">
              <h3>藏品图鉴</h3>
              <span class="gallery-more">查看全部 →</span>
            </div>
            <div class="gallery-scroll">
              <div class="gallery-item"><div class="gallery-img-placeholder" style="background: #DF1D16;">简</div><span class="gallery-name">竹简残片</span></div>
              <div class="gallery-item"><div class="gallery-img-placeholder" style="background: #71C2E4;">牍</div><span class="gallery-name">木牍文书</span></div>
              <div class="gallery-item"><div class="gallery-img-placeholder" style="background: #DF1D16;">封</div><span class="gallery-name">封检匣</span></div>
              <div class="gallery-item"><div class="gallery-img-placeholder" style="background: #71C2E4;">印</div><span class="gallery-name">封泥印记</span></div>
            </div>
          </div>
        </div>
      `
    },

    // ==================== 每日推送详情 ====================
    dailyDetail: {
  title: '每日推送',
  subtitle: '',
  html: `
    <button class="back-button">← 返回馆藏</button>
    <div style="background: #fff; border-radius: 24px; padding: 24px 20px; border: 1px solid #eee; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
      <div style="width:100%;height:200px;border-radius:16px;overflow:hidden;margin-bottom:20px;">
        <img src="assets/images/长沙吴简 · 嘉禾吏民田家莂.jpg" alt="长沙吴简 · 嘉禾吏民田家莂" style="width:100%;height:100%;object-fit:cover;">
      </div>
      <span style="display:inline-block;background:rgba(223,29,22,0.1);color:#DF1D16;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;margin-bottom:12px;">DAILY PUSH</span>
      <h3 style="font-size: 22px; color: #DF1D16; margin-bottom: 8px;">📜 长沙吴简 · 嘉禾吏民田家莂</h3>
      <p style="color: #888; font-size: 13px; margin-bottom: 16px;">三国 · 吴 | 长沙走马楼出土</p>
      <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 24px;">三国时期吴国长沙郡的田家莂木简，记录了嘉禾年间吏民租种官田的详细信息。这批简牍数量庞大、内容丰富，涵盖赋税、户籍、司法等诸多方面，是研究三国经济史、社会史不可多得的第一手资料，被誉为继甲骨文、敦煌遗书之后中国考古史上的又一重大发现。</p>
      <a href="game.html" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#DF1D16;color:#fff;text-decoration:none;padding:14px 24px;border-radius:16px;font-weight:600;font-size:15px;">
        🚀 开始探索
      </a>
    </div>
  `
},

    // ==================== 常设展览1：文明之路 ====================
    permanentExhibition: {
      title: '文明之路',
      subtitle: '常设展览',
      html: `
        <button class="back-button">← 返回馆藏</button>
        <div style="background: #fff; border-radius: 24px; padding: 24px 20px; border: 1px solid #eee; border-top: 4px solid #DF1D16; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <div style="width:100%;height:200px;border-radius:16px;overflow:hidden;margin-bottom:20px;">
            <img src="assets/images/文明之路——长沙简牍博物馆基本陈列.png" alt="文明之路" style="width:100%;height:100%;object-fit:cover;">
          </div>
          <span style="display:inline-block;background:rgba(223,29,22,0.1);color:#DF1D16;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;margin-bottom:12px;">PERMANENT EXHIBITION</span>
          <h3 style="font-size: 22px; margin-bottom: 8px;">🏛️ 文明之路 · 长沙简牍博物馆基本陈列</h3>
          <p style="color: #888; font-size: 13px; margin-bottom: 16px;">📍 一楼展厅 | 常设展览</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 8px;">以时间为轴，从战国楚简到秦简、汉简、三国吴简，直至魏晋南北朝简牍，全面呈现简牍文化的演变历程。展览分为"简牍初现""战国纷争""秦汉一统""三国鼎立""简牍与书法"五大单元，运用多媒体互动装置，让观众沉浸式体验古代书写文化的魅力。</p>
          <a href="game.html" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#DF1D16;color:#fff;text-decoration:none;padding:14px 24px;border-radius:16px;font-weight:600;font-size:15px;transition:all 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            🚀 开始探索
          </a>
        </div>
      `
    },

    // ==================== 常设展览2：湘水流过 ====================
    permanentExhibition2: {
      title: '湘水流过',
      subtitle: '常设展览',
      html: `
        <button class="back-button">← 返回馆藏</button>
        <div style="background: #fff; border-radius: 24px; padding: 24px 20px; border: 1px solid #eee; border-top: 4px solid #DF1D16; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <div style="width:100%;height:200px;border-radius:16px;overflow:hidden;margin-bottom:20px;">
            <img src="assets/images/湘水流过——湖南地区出土简牍展.jpg" alt="湘水流过" style="width:100%;height:100%;object-fit:cover;">
          </div>
          <span style="display:inline-block;background:rgba(223,29,22,0.1);color:#DF1D16;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;margin-bottom:12px;">PERMANENT EXHIBITION</span>
          <h3 style="font-size: 22px; margin-bottom: 8px;">🏛️ 湘水流过 · 湖南地区出土简牍展</h3>
          <p style="color: #888; font-size: 13px; margin-bottom: 16px;">📍 二楼展厅 | 常设展览</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 8px;">以湘江流域为线索，汇集湖南全省范围内出土的简牍文物，包括里耶秦简、益阳兔子山简牍、郴州苏仙桥晋简等重要考古发现。</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 24px;">展览通过"湘水溯源""简牍之乡""地下书库""学术价值"四个板块，展现湖南作为简牍大省的深厚底蕴，呈现湘江流域简牍文化的独特面貌与历史价值。</p>
          <a href="game.html" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#DF1D16;color:#fff;text-decoration:none;padding:14px 24px;border-radius:16px;font-weight:600;font-size:15px;transition:all 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            🚀 开始探索
          </a>
        </div>
      `
    },

    // ==================== 常设展览3：文脉在兹 谊居千年 ====================
    permanentExhibition3: {
      title: '文脉在兹 谊居千年',
      subtitle: '常设展览',
      html: `
        <button class="back-button">← 返回馆藏</button>
        <div style="background: #fff; border-radius: 24px; padding: 24px 20px; border: 1px solid #eee; border-top: 4px solid #DF1D16; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <div style="width:100%;height:200px;border-radius:16px;overflow:hidden;margin-bottom:20px;">
            <img src="assets/images/文脉在兹  谊居千年——西汉长沙王太傅贾谊和他生活的城市.jpg" alt="文脉在兹 谊居千年" style="width:100%;height:100%;object-fit:cover;">
          </div>
          <span style="display:inline-block;background:rgba(223,29,22,0.1);color:#DF1D16;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;margin-bottom:12px;">PERMANENT EXHIBITION</span>
          <h3 style="font-size: 22px; margin-bottom: 8px;">🏛️ 文脉在兹 · 谊居千年</h3>
          <p style="color: #888; font-size: 13px; margin-bottom: 16px;">📍 专题展厅 | 文物特展</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 8px;">以西汉长沙王太傅贾谊为主线，通过简牍、文物、场景复原等多种形式，生动展现这位政治家、文学家的生平事迹与卓越成就。</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 24px;">展览分为"洛阳才子""谪居长沙""鵩鸟赋成""过秦论道"四大篇章，结合西汉长沙国的历史背景，再现两千年前长沙古城的风貌与人文底蕴，是一部关于贾谊与长沙的城市记忆。</p>
          <a href="game.html" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#DF1D16;color:#fff;text-decoration:none;padding:14px 24px;border-radius:16px;font-weight:600;font-size:15px;transition:all 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            🚀 开始探索
          </a>
        </div>
      `
    },

    // ==================== 往期特展1：承汉启唐 ====================
    pastExhibition1: {
      title: '承汉启唐',
      subtitle: '往期特展',
      html: `
        <button class="back-button">← 返回馆藏</button>
        <div style="background: #fff; border-radius: 24px; padding: 24px 20px; border: 1px solid #eee; border-top: 4px solid #71C2E4; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <div style="width:100%;height:200px;border-radius:16px;overflow:hidden;margin-bottom:20px;">
            <img src="assets/images/承汉启唐——北魏书法与雕塑艺术展.jpg" alt="承汉启唐" style="width:100%;height:100%;object-fit:cover;">
          </div>
          <span style="display:inline-block;background:rgba(113,194,228,0.15);color:#71C2E4;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;margin-bottom:12px;">PAST EXHIBITION</span>
          <h3 style="font-size: 22px; margin-bottom: 8px;">📖 承汉启唐 · 北魏书法与雕塑艺术展</h3>
          <p style="color: #888; font-size: 13px; margin-bottom: 16px;">🕐 展期：2025.03 — 2025.06 | 已结束</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 8px;">北魏时期是中国书法艺术承前启后的关键阶段，上承汉隶遗风，下启唐楷先声。本次展览精选北魏墓志、造像记、摩崖石刻等书法精品拓片六十余件。</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 24px;">同时展出北魏佛教雕塑艺术精品，包括龙门石窟、云冈石窟相关文物资料，呈现汉唐之间佛教艺术中国化的演变脉络，揭示北魏在中华文明史上的重要地位。</p>
          <a href="game.html" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#71C2E4;color:#fff;text-decoration:none;padding:14px 24px;border-radius:16px;font-weight:600;font-size:15px;transition:all 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            🚀 开始探索
          </a>
        </div>
      `
    },

    // ==================== 往期特展2：大道至简 ====================
    pastExhibition2: {
      title: '大道至简',
      subtitle: '往期特展',
      html: `
        <button class="back-button">← 返回馆藏</button>
        <div style="background: #fff; border-radius: 24px; padding: 24px 20px; border: 1px solid #eee; border-top: 4px solid #71C2E4; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <div style="width:100%;height:200px;border-radius:16px;overflow:hidden;margin-bottom:20px;">
            <img src="assets/images/大道至简——简牍里的中国精神主题展.png" alt="大道至简" style="width:100%;height:100%;object-fit:cover;">
          </div>
          <span style="display:inline-block;background:rgba(113,194,228,0.15);color:#71C2E4;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;margin-bottom:12px;">PAST EXHIBITION</span>
          <h3 style="font-size: 22px; margin-bottom: 8px;">📖 大道至简 · 简牍里的中国精神主题展</h3>
          <p style="color: #888; font-size: 13px; margin-bottom: 16px;">🕐 展期：2024.09 — 2025.01 | 已结束</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 8px;">以"简"为媒，从浩瀚的简牍文献中提炼中国传统文化的精神内核。展览精选百余件简牍实物与高清复制品，涵盖儒道经典、法律文书、医方算术等各类内容。</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 24px;">通过"天人合一""仁者爱人""以法治国""格物致知"四大主题，展现简牍所承载的哲学思想、人文精神与科学智慧，让观众在方寸之间感受中华文明的博大精深。</p>
          <a href="game.html" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#71C2E4;color:#fff;text-decoration:none;padding:14px 24px;border-radius:16px;font-weight:600;font-size:15px;transition:all 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            🚀 开始探索
          </a>
        </div>
      `
    },

    // ==================== 往期特展3：鉴古知今 ====================
    pastExhibition3: {
      title: '鉴古知今',
      subtitle: '往期特展',
      html: `
        <button class="back-button">← 返回馆藏</button>
        <div style="background: #fff; border-radius: 24px; padding: 24px 20px; border: 1px solid #eee; border-top: 4px solid #71C2E4; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <div style="width:100%;height:200px;border-radius:16px;overflow:hidden;margin-bottom:20px;">
            <img src="assets/images/鉴古知今——罗振玉学术成就展.jpg" alt="鉴古知今" style="width:100%;height:100%;object-fit:cover;">
          </div>
          <span style="display:inline-block;background:rgba(113,194,228,0.15);color:#71C2E4;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;margin-bottom:12px;">PAST EXHIBITION</span>
          <h3 style="font-size: 22px; margin-bottom: 8px;">📖 鉴古知今 · 罗振玉学术成就展</h3>
          <p style="color: #888; font-size: 13px; margin-bottom: 16px;">🕐 展期：2024.06 — 2024.09 | 已结束</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 8px;">罗振玉是中国近代学术史上的巨擘，在甲骨学、简牍学、敦煌学、金石学等领域均有开创性贡献。本次展览展出罗振玉手稿、著作、收藏品等珍贵资料百余件。</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 24px;">展览分"甲骨先驱""简牍功臣""敦煌卫士""金石大家"四大板块，系统梳理其学术生涯与卓越成就，致敬这位为中国现代学术奠基做出不朽贡献的学界泰斗。</p>
          <a href="game.html" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#71C2E4;color:#fff;text-decoration:none;padding:14px 24px;border-radius:16px;font-weight:600;font-size:15px;transition:all 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            🚀 开始探索
          </a>
        </div>
      `
    },

    // ==================== 往期特展4：金玉妆成 ====================
    pastExhibition4: {
      title: '金玉妆成',
      subtitle: '往期特展',
      html: `
        <button class="back-button">← 返回馆藏</button>
        <div style="background: #fff; border-radius: 24px; padding: 24px 20px; border: 1px solid #eee; border-top: 4px solid #71C2E4; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <div style="width:100%;height:200px;border-radius:16px;overflow:hidden;margin-bottom:20px;">
            <img src="assets/images/金玉妆成——江西省博物馆藏明代首饰精品展.jpg" alt="金玉妆成" style="width:100%;height:100%;object-fit:cover;">
          </div>
          <span style="display:inline-block;background:rgba(113,194,228,0.15);color:#71C2E4;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;margin-bottom:12px;">PAST EXHIBITION</span>
          <h3 style="font-size: 22px; margin-bottom: 8px;">📖 金玉妆成 · 江西省博物馆藏明代首饰精品展</h3>
          <p style="color: #888; font-size: 13px; margin-bottom: 16px;">🕐 展期：2024.03 — 2024.06 | 已结束</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 8px;">荟萃江西省博物馆珍藏的明代金银玉首饰精品百余件，涵盖发簪、耳坠、手镯、佩饰等多种品类，工艺精湛、造型华美。</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 24px;">展览以"金玉满堂""巧夺天工""华服霓裳""礼制之美"四个单元，呈现明代首饰的制作工艺、佩戴习俗与审美风尚，折射出大明王朝的繁荣与奢华，是了解明代社会生活与工艺美术的绝佳窗口。</p>
          <a href="game.html" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#71C2E4;color:#fff;text-decoration:none;padding:14px 24px;border-radius:16px;font-weight:600;font-size:15px;transition:all 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            🚀 开始探索
          </a>
        </div>
      `
    },

    // ==================== 往期特展5：流沙坠简 ====================
    pastExhibition5: {
      title: '流沙坠简',
      subtitle: '往期特展',
      html: `
        <button class="back-button">← 返回馆藏</button>
        <div style="background: #fff; border-radius: 24px; padding: 24px 20px; border: 1px solid #eee; border-top: 4px solid #71C2E4; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <div style="width:100%;height:200px;border-radius:16px;overflow:hidden;margin-bottom:20px;">
            <img src="assets/images/流沙坠简——甘肃出土简牍文物精品展.jpg" alt="流沙坠简" style="width:100%;height:100%;object-fit:cover;">
          </div>
          <span style="display:inline-block;background:rgba(113,194,228,0.15);color:#71C2E4;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;margin-bottom:12px;">PAST EXHIBITION</span>
          <h3 style="font-size: 22px; margin-bottom: 8px;">📖 流沙坠简 · 甘肃出土简牍文物精品展</h3>
          <p style="color: #888; font-size: 13px; margin-bottom: 16px;">🕐 展期：2024.12 — 2025.03 | 已结束</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 8px;">甘肃是中国的简牍大省，居延汉简、敦煌汉简、悬泉汉简等举世闻名。本次展览精选甘肃各地出土的简牍精品百余枚，时间跨度从秦代至魏晋。</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 24px;">展览以"大漠遗珍""边塞风云""丝路邮驿""屯戍生活"为主线，再现两千年前西北边塞的历史风貌，呈现汉代河西走廊作为丝绸之路要道的繁盛景象与戍边吏卒的日常生活。</p>
          <a href="game.html" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#71C2E4;color:#fff;text-decoration:none;padding:14px 24px;border-radius:16px;font-weight:600;font-size:15px;transition:all 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            🚀 开始探索
          </a>
        </div>
      `
    },

    // ==================== 往期特展6：清平乐 ====================
    pastExhibition6: {
      title: '清平乐',
      subtitle: '往期特展',
      html: `
        <button class="back-button">← 返回馆藏</button>
        <div style="background: #fff; border-radius: 24px; padding: 24px 20px; border: 1px solid #eee; border-top: 4px solid #71C2E4; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <div style="width:100%;height:200px;border-radius:16px;overflow:hidden;margin-bottom:20px;">
            <img src="assets/images/清平乐——黄河流域汉唐宋元乐舞戏曲精品文物展.jpg" alt="清平乐" style="width:100%;height:100%;object-fit:cover;">
          </div>
          <span style="display:inline-block;background:rgba(113,194,228,0.15);color:#71C2E4;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;margin-bottom:12px;">PAST EXHIBITION</span>
          <h3 style="font-size: 22px; margin-bottom: 8px;">📖 清平乐 · 黄河流域汉唐宋元乐舞戏曲展</h3>
          <p style="color: #888; font-size: 13px; margin-bottom: 16px;">🕐 展期：2024.09 — 2024.12 | 已结束</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 8px;">汇聚黄河流域汉、唐、宋、元各时期乐舞戏曲精品文物，包括乐舞俑、壁画摹本、乐器实物、戏曲剧本等，纵跨两千年中华音乐舞蹈史。</p>
          <p style="line-height: 1.9; color: #444; font-size: 15px; margin-bottom: 24px;">展览以"汉乐恢弘""唐舞霓裳""宋词婉转""元曲铿锵"四大板块，生动呈现古代音乐舞蹈从宫廷雅乐到市井戏曲的演变轨迹，让观众在视觉与想象中聆听历史的回响。</p>
          <a href="game.html" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#71C2E4;color:#fff;text-decoration:none;padding:14px 24px;border-radius:16px;font-weight:600;font-size:15px;transition:all 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            🚀 开始探索
          </a>
        </div>
      `
    },

    // ==================== 藏品图鉴 ====================
    collectionGallery: {
      title: '藏品图鉴',
      subtitle: '',
      html: `
        <button class="back-button">← 返回馆藏</button>
        <div style="background: #fff; border-radius: 24px; padding: 24px 20px; border: 1px solid #eee; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <h3 style="font-size: 20px; margin-bottom: 6px;">🖼️ 藏品图鉴</h3>
          <p style="color: #888; font-size: 13px; margin-bottom: 20px;">精选馆藏珍品，触摸历史的纹理</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px;">
            <div style="background:#fef3f2; border-radius:16px; padding:20px; text-align:center; border:1px solid #fde8e6;">
              <span style="font-size:48px;">📜</span>
              <p style="font-weight:600;margin-top:10px;font-size:15px;">竹简残片</p>
              <p style="font-size:12px;color:#888;margin-top:4px;">战国 · 长沙出土</p>
            </div>
            <div style="background:#f0f8ff; border-radius:16px; padding:20px; text-align:center; border:1px solid #dceefb;">
              <span style="font-size:48px;">📄</span>
              <p style="font-weight:600;margin-top:10px;font-size:15px;">木牍文书</p>
              <p style="font-size:12px;color:#888;margin-top:4px;">汉代 · 里耶出土</p>
            </div>
            <div style="background:#fef3f2; border-radius:16px; padding:20px; text-align:center; border:1px solid #fde8e6;">
              <span style="font-size:48px;">📦</span>
              <p style="font-weight:600;margin-top:10px;font-size:15px;">封检匣</p>
              <p style="font-size:12px;color:#888;margin-top:4px;">秦汉 · 文书封装</p>
            </div>
            <div style="background:#f0f8ff; border-radius:16px; padding:20px; text-align:center; border:1px solid #dceefb;">
              <span style="font-size:48px;">🔖</span>
              <p style="font-weight:600;margin-top:10px;font-size:15px;">封泥印记</p>
              <p style="font-size:12px;color:#888;margin-top:4px;">汉代 · 官印痕迹</p>
            </div>
          </div>
          <a href="game.html" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#DF1D16;color:#fff;text-decoration:none;padding:14px 24px;border-radius:16px;font-weight:600;font-size:15px;transition:all 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            🚀 开始探索
          </a>
        </div>
      `
    }
  },

  // ==================== 成就页面 ====================
tasks: {
    home: {
      title: '成就',
      subtitle: '收集徽章',
      html: `
        <!-- 签到卡片 -->
        <div style="background: linear-gradient(135deg, #DF1D16, #ff6b63); border-radius: 20px; padding: 20px; color: white; margin-bottom: 16px;">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div>
              <p style="font-size:12px;opacity:0.8;">连续签到</p>
              <p style="font-size:32px;font-weight:700;">🔥 7 天</p>
            </div>
            <div style="font-size:48px;">📅</div>
          </div>
          <div style="display:flex;gap:6px;margin-top:12px;">
            <span style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:12px;">✓</span>
            <span style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:12px;">✓</span>
            <span style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:12px;">✓</span>
            <span style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:12px;">✓</span>
            <span style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:12px;">✓</span>
            <span style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:12px;">✓</span>
            <span style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:12px;">✓</span>
          </div>
        </div>
        
        <!-- 观展统计 -->
        <div style="display:flex;gap:12px;margin-bottom:16px;">
          <div style="flex:1;background:#fff;border:1px solid #eee;border-radius:16px;padding:16px;text-align:center;">
            <span style="font-size:28px;">🏛️</span>
            <p style="font-size:20px;font-weight:700;color:#DF1D16;margin:4px 0;">3</p>
            <p style="font-size:11px;color:#888;">参观展览</p>
          </div>
          <div style="flex:1;background:#fff;border:1px solid #eee;border-radius:16px;padding:16px;text-align:center;">
            <span style="font-size:28px;">📷</span>
            <p style="font-size:20px;font-weight:700;color:#71C2E4;margin:4px 0;">12</p>
            <p style="font-size:11px;color:#888;">扫码识别</p>
          </div>
          <div style="flex:1;background:#fff;border:1px solid #eee;border-radius:16px;padding:16px;text-align:center;">
            <span style="font-size:28px;">📝</span>
            <p style="font-size:20px;font-weight:700;color:#DF1D16;margin:4px 0;">5</p>
            <p style="font-size:11px;color:#888;">观展笔记</p>
          </div>
        </div>
        
        <!-- 徽章收集 -->
        <h3 style="font-family:'ZhongHuaXinHuo',sans-serif;font-size:17px;margin-bottom:12px;">🏅 徽章收集</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="clickable" data-subpage="badgeDetail" style="background: #fff; border: 1px solid #eee; border-radius: 16px; padding: 18px; text-align: center;">
            <span style="font-size: 32px;">🏅</span>
            <p style="font-weight: 600; margin-top: 8px;">初识简牍</p>
            <p style="font-size: 12px; color: #DF1D16;">已解锁</p>
          </div>
          <div style="background: #fff; border: 1px solid #eee; border-radius: 16px; padding: 18px; text-align: center; opacity: 0.5;">
            <span style="font-size: 32px;">🔒</span>
            <p style="font-weight: 600; margin-top: 8px;">博览群简</p>
            <p style="font-size: 12px; color: #999;">参观5次解锁</p>
          </div>
          <div style="background: #fff; border: 1px solid #eee; border-radius: 16px; padding: 18px; text-align: center; opacity: 0.5;">
            <span style="font-size: 32px;">🔒</span>
            <p style="font-weight: 600; margin-top: 8px;">考据达人</p>
            <p style="font-size: 12px; color: #999;">深度模式通关</p>
          </div>
          <div style="background: #fff; border: 1px solid #eee; border-radius: 16px; padding: 18px; text-align: center; opacity: 0.5;">
            <span style="font-size: 32px;">🔒</span>
            <p style="font-weight: 600; margin-top: 8px;">简牍之友</p>
            <p style="font-size: 12px; color: #999;">分享3次展览</p>
          </div>
        </div>
        
        <!-- 最近动态 -->
        <h3 style="font-family:'ZhongHuaXinHuo',sans-serif;font-size:17px;margin:20px 0 12px;">📌 最近动态</h3>
        <div style="background:#fff;border:1px solid #eee;border-radius:16px;padding:16px;">
          <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #f5f5f5;">
            <span style="font-size:24px;">🏅</span>
            <div style="flex:1;">
              <p style="font-weight:600;font-size:14px;">获得"初识简牍"徽章</p>
              <p style="font-size:11px;color:#888;">2026-05-01</p>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #f5f5f5;">
            <span style="font-size:24px;">📷</span>
            <div style="flex:1;">
              <p style="font-weight:600;font-size:14px;">完成3次扫码识别</p>
              <p style="font-size:11px;color:#888;">2026-05-03</p>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:10px 0;">
            <span style="font-size:24px;">🎮</span>
            <div style="flex:1;">
              <p style="font-weight:600;font-size:14px;">首次进入文明之路探索</p>
              <p style="font-size:11px;color:#888;">2026-05-05</p>
            </div>
          </div>
        </div>
      `
    },    badgeDetail: {
      title: '徽章详情',
      subtitle: '',
      html: `
        <button class="back-button">← 返回成就</button>
        <div style="text-align: center; background: #fff; border-radius: 24px; padding: 30px 20px; border: 1px solid #eee;">
          <span style="font-size: 72px;">🏅</span>
          <h3 style="font-size: 22px; margin-top: 12px;">初识简牍</h3>
          <p style="color: #888; margin-top: 8px;">首次参观简牍博物馆获得</p>
          <p style="color: #DF1D16; font-weight: 600; margin-top: 16px;">✅ 已获得</p>
        </div>
      `
    }
  },

  // ==================== 我的页面 ====================
profile: {
    home: {
      title: '我的',
      subtitle: '我的观展',
      html: `
        <!-- 用户头像区域 -->
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #DF1D16, #ff6b63); border-radius: 50%; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 36px; color: white;">👤</div>
          <h3 style="font-weight: 700;">简牍爱好者</h3>
          <p style="color: #888; font-size: 13px;">已参观 3 次展览 · 累计扫码 12 次</p>
          <div style="display:flex;justify-content:center;gap:8px;margin-top:12px;">
            <span style="background:rgba(223,29,22,0.1);color:#DF1D16;padding:4px 10px;border-radius:10px;font-size:11px;">🏅 初识简牍</span>
            <span style="background:rgba(113,194,228,0.1);color:#71C2E4;padding:4px 10px;border-radius:10px;font-size:11px;">🎮 探索者</span>
          </div>
        </div>
        
        <!-- 功能入口 -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
          <div class="clickable" data-subpage="myCollection" style="background:#fff;border:1px solid #eee;border-radius:16px;padding:16px;text-align:center;">
            <span style="font-size:28px;">📋</span>
            <p style="font-weight:600;font-size:14px;margin-top:6px;">我的收藏</p>
            <p style="font-size:11px;color:#888;">12 件文物</p>
          </div>
          <div class="clickable" data-subpage="myNotes" style="background:#fff;border:1px solid #eee;border-radius:16px;padding:16px;text-align:center;">
            <span style="font-size:28px;">📝</span>
            <p style="font-weight:600;font-size:14px;margin-top:6px;">观展笔记</p>
            <p style="font-size:11px;color:#888;">5 条记录</p>
          </div>
          <div style="background:#fff;border:1px solid #eee;border-radius:16px;padding:16px;text-align:center;">
            <span style="font-size:28px;">🎫</span>
            <p style="font-weight:600;font-size:14px;margin-top:6px;">我的门票</p>
            <p style="font-size:11px;color:#888;">3 张电子票</p>
          </div>
          <div style="background:#fff;border:1px solid #eee;border-radius:16px;padding:16px;text-align:center;">
            <span style="font-size:28px;">🏆</span>
            <p style="font-weight:600;font-size:14px;margin-top:6px;">我的成就</p>
            <a href="tasks.html" style="font-size:11px;color:#DF1D16;text-decoration:none;">查看全部 →</a>
          </div>
        </div>
        
        <!-- 最近笔记 -->
        <h3 style="font-family:'ZhongHuaXinHuo',sans-serif;font-size:17px;margin-bottom:12px;">📝 最近笔记</h3>
        <div class="clickable" data-subpage="myNotes" style="background:#fff;border:1px solid #eee;border-radius:16px;padding:16px;margin-bottom:10px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-size:28px;">📜</span>
            <div style="flex:1;">
              <p style="font-weight:600;font-size:14px;">关于吴简的思考</p>
              <p style="font-size:12px;color:#888;">记录了嘉禾吏民田家莂的细节观察...</p>
              <p style="font-size:11px;color:#aaa;margin-top:4px;">2026-05-01</p>
            </div>
          </div>
        </div>
        <div class="clickable" data-subpage="myNotes" style="background:#fff;border:1px solid #eee;border-radius:16px;padding:16px;margin-bottom:10px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-size:28px;">📖</span>
            <div style="flex:1;">
              <p style="font-weight:600;font-size:14px;">秦简观后感</p>
              <p style="font-size:12px;color:#888;">里耶秦简展现了秦代基层治理...</p>
              <p style="font-size:11px;color:#aaa;margin-top:4px;">2026-04-28</p>
            </div>
          </div>
        </div>
        
        <!-- 设置 -->
        <h3 style="font-family:'ZhongHuaXinHuo',sans-serif;font-size:17px;margin:20px 0 12px;">⚙️ 设置</h3>
        <div style="background:#fff;border:1px solid #eee;border-radius:16px;overflow:hidden;">
          <div style="padding:14px 16px;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:14px;">🌙 深色模式</span>
            <span style="color:#888;font-size:13px;">跟随系统</span>
          </div>
          <div style="padding:14px 16px;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:14px;">🔔 推送通知</span>
            <span style="color:#4caf50;font-size:13px;">已开启</span>
          </div>
          <div style="padding:14px 16px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:14px;">ℹ️ 关于我们</span>
            <span style="color:#888;font-size:13px;">v1.0 →</span>
          </div>
        </div>
      `
    },
    myCollection: {
      title: '我的收藏',
      subtitle: '',
      html: `
        <button class="back-button">← 返回我的</button>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div style="background:#fef3f2; border-radius:16px; padding:20px; text-align:center; border:1px solid #fde8e6;"><span style="font-size:40px;">📜</span><p style="font-weight:600;margin-top:8px;">竹简残片</p></div>
          <div style="background:#f0f8ff; border-radius:16px; padding:20px; text-align:center; border:1px solid #dceefb;"><span style="font-size:40px;">📄</span><p style="font-weight:600;margin-top:8px;">木牍文书</p></div>
        </div>
      `
    },
     myNotes: {
      title: '观展笔记',
      subtitle: '',
      html: `
        <button class="back-button">← 返回我的</button>
        <div style="background:#fff; border:1px solid #eee; border-radius:16px; padding:16px; margin-bottom:10px;">
          <p style="font-weight:600;">📝 关于吴简的思考</p>
          <p style="font-size:12px; color:#888;">2026-05-01</p>
        </div>
        <div style="background:#fff; border:1px solid #eee; border-radius:16px; padding:16px;">
          <p style="font-weight:600;">📝 秦简观后感</p>
          <p style="font-size:12px; color:#888;">2026-04-28</p>
        </div>
      `
    }
  },





























  // ==================== Game 启动页 ====================
  game: {
    // 加载页面
splash: {
  title: '文明之路',
  html: `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;padding:20px;text-align:center;">
      <div style="font-size:64px;margin-bottom:20px;animation:pulse 1.5s ease-in-out infinite;">📜</div>
      <h2 style="font-family:'ZhongHuaXinHuo','PingFang SC','Microsoft YaHei',sans-serif;font-size:28px;color:#DF1D16;letter-spacing:2px;margin-bottom:8px;">文明之路</h2>
      <p style="color:#888;font-size:14px;margin-bottom:40px;">长沙简牍博物馆 · 基本陈列</p>
      <div class="progress-bar-track">
        <div id="progressBar" class="progress-bar-fill"></div>
      </div>
      <p id="progressText" style="color:#888;font-size:12px;">加载中 0%</p>
    </div>
  `
},
    // 模式选择页面
modeSelect: {
  title: '选择模式',
  html: `
    <div style="padding:20px 16px;text-align:center;">
      <div style="font-size:48px;margin-bottom:8px;">🚀</div>
      <h2 style="font-family:'ZhongHuaXinHuo','PingFang SC','Microsoft YaHei',sans-serif;font-size:24px;color:#1a1a1a;letter-spacing:1px;margin-bottom:4px;">选择探索模式</h2>
      <p style="color:#888;font-size:13px;margin-bottom:28px;">请选择适合您的参观路线</p>
      
      <!-- 儿童模式 -->
      <div class="clickable mode-card kids" data-subpage="start" data-mode="kids">
        <div class="mode-icon-wrap kids-icon">🧒</div>
        <div class="mode-info">
          <h4 class="kids-title">儿童模式</h4>
          <p>趣味互动 · 简单易懂 · 寓教于乐</p>
        </div>
        <span class="mode-arrow">→</span>
      </div>
      
      <!-- 休闲模式 -->
      <div class="clickable mode-card casual" data-subpage="start" data-mode="casual">
        <div class="mode-icon-wrap casual-icon">☕</div>
        <div class="mode-info">
          <h4 class="casual-title">休闲模式</h4>
          <p>轻松漫游 · 精选展品 · 自由节奏</p>
        </div>
        <span class="mode-arrow">→</span>
      </div>
      
      <!-- 深度模式 -->
      <div class="clickable mode-card deep" data-subpage="start" data-mode="deep">
        <div class="mode-icon-wrap deep-icon">🔬</div>
        <div class="mode-info">
          <h4 class="deep-title">深度模式</h4>
          <p>学术路线 · 详细解说 · 爱好者之选</p>
        </div>
        <span class="mode-arrow">→</span>
      </div>
    </div>
  `
},
    // 开始探索（确认页面）
start: {
  title: '开始探索',
  html: `
    <div style="text-align:center;padding:60px 20px;">
      <span style="font-size:80px;" id="modeEmoji">🚀</span>
      <h3 style="font-family:'ZhongHuaXinHuo','PingFang SC','Microsoft YaHei',sans-serif;font-size:24px;margin:20px 0 8px;" id="modeTitle">准备出发</h3>
      <p style="color:#888;font-size:14px;margin-bottom:6px;" id="modeDesc">加载中...</p>
      <p style="color:#bbb;font-size:12px;margin-bottom:30px;">您可以在后续随时切换模式</p>
      <button id="startExploreBtn" class="explore-start-btn">
        🏛️ 进入展览
      </button>
      <button id="backToMode" class="back-select-btn">
        ← 重新选择模式
      </button>
    </div>
  `
}
  }};