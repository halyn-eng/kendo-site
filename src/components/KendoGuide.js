import React, { useEffect } from 'react';

const styles = `
.kendo-wrap{max-width:100%;padding:0}
.kendo-subtitle{font-size:12px;color:#888780;margin-bottom:1.25rem;margin-top:-0.5rem}
nav.kendo-nav{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:1.5rem}
nav.kendo-nav button{font-size:12px;padding:5px 14px;border-radius:20px;border:1px solid #c8c7bf;background:#fff;color:#5f5e5a;cursor:pointer;transition:all 0.15s}
nav.kendo-nav button:hover{background:#eeedea}
nav.kendo-nav button.active{background:#e6f1fb;color:#185fa5;border-color:#b5d4f4}
.kendo-section{display:none}
.kendo-section.active{display:block}
.kcard{background:#fff;border:1px solid #e0dfd7;border-radius:12px;padding:1rem 1.25rem;margin-bottom:10px}
.ksec-label{font-size:11px;font-weight:500;color:#888780;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;border-bottom:1px solid #e0dfd7;padding-bottom:4px;margin-top:1rem}
.ksec-label:first-child{margin-top:0}
.ktag{display:inline-block;font-size:11px;padding:2px 8px;border-radius:10px;margin-bottom:8px}
.ktag.blue{background:#e6f1fb;color:#185fa5}
.ktag.green{background:#eaf3de;color:#3b6d11}
.ktag.warn{background:#faeeda;color:#854f0b}
.kterm-name{font-size:15px;font-weight:500;margin-bottom:6px}
.kterm-body{font-size:13px;color:#5f5e5a;line-height:1.75}
.kflow{background:#f5f4f0;border-radius:8px;padding:10px 12px;font-size:12px;color:#5f5e5a;margin:8px 0;font-family:monospace;line-height:2}
.kdivider{height:1px;background:#e0dfd7;margin:12px 0}
.krow3{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr) minmax(0,1.3fr);gap:5px;margin-bottom:4px}
.krow2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:5px;margin-bottom:4px}
.kcell{padding:6px 9px;border-radius:8px;font-size:12px;line-height:1.5}
.kcell.n{background:#f5f4f0;color:#5f5e5a}
.kcell.a{background:#e6f1fb;color:#185fa5}
.kcell.g{background:#eaf3de;color:#3b6d11}
.kcell.w{background:#faeeda;color:#854f0b}
.kcol-h{font-size:11px;color:#888780;padding:2px 9px}
.kerr-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px;margin-top:8px}
.kerr-box{border-radius:8px;padding:8px 10px;font-size:12px;line-height:1.6}
.kerr-box.bad{background:#fcebeb;color:#a32d2d}
.kerr-box.good{background:#eaf3de;color:#3b6d11}
.kerr-label{font-size:10px;font-weight:500;margin-bottom:2px;opacity:0.8}
.kpriority{background:#f5f4f0;border-radius:8px;padding:10px 12px;margin-top:12px}
.kp-title{font-size:11px;font-weight:500;color:#888780;margin-bottom:8px}
.kp-item{display:flex;align-items:flex-start;gap:8px;margin-bottom:6px;font-size:12px}
.knum{width:18px;height:18px;border-radius:50%;background:#378add;color:#fff;font-size:10px;font-weight:500;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
`;

export default function KendoGuide() {
  useEffect(() => {
    const buttons = document.querySelectorAll('nav.kendo-nav button');
    buttons.forEach(btn => {
      btn.addEventListener('click', function() {
        const id = this.dataset.target;
        document.querySelectorAll('.kendo-section').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('nav.kendo-nav button').forEach(b => b.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        this.classList.add('active');
      });
    });
  }, []);

  return (
    <div className="kendo-wrap">
      <style>{styles}</style>
      <p className="kendo-subtitle">道館規定：面・小手・胴 only（無突き）</p>

      <nav className="kendo-nav">
        <button className="active" data-target="k-terms">名詞解釋</button>
        <button data-target="k-yomi">読み練習</button>
        <button data-target="k-errors">常見錯誤</button>
        <button data-target="k-daily">每日練習</button>
      </nav>

      {/* 名詞解釋 */}
      <div id="k-terms" className="kendo-section active">
        <div className="ksec-label">基本姿勢與動作</div>

        <div className="kcard">
          <div className="ktag blue">姿勢</div>
          <div className="kterm-name">中段の構え（ちゅうだんのかまえ）</div>
          <div className="kterm-body">標準備戰姿勢。剣先對準對方喉嚨到左眼之間。</div>
          <div className="kdivider"></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'6px',marginTop:'8px'}}>
            <div className="kerr-box bad"><div className="kerr-label">構えが高い</div>剣先偏上（對準額頭以上）→ 小手露出</div>
            <div className="kerr-box good"><div className="kerr-label">正常</div>剣先對準喉嚨到左眼</div>
            <div className="kerr-box bad"><div className="kerr-label">構えが低い</div>剣先偏下（對準胸口）→ 面露出</div>
          </div>
        </div>

        <div className="kcard">
          <div className="ktag blue">腳步</div>
          <div className="kterm-name">踏み込み（ふみこみ）</div>
          <div className="kterm-body">打擊瞬間右腳用力踩地，產生爆發力。不是「跳起來踩」，是左腳蹬地推出去，右腳水平滑出落地。</div>
          <div className="kflow">気（喊聲）+ 劍（竹刀到）+ 体（右腳踩地）= 同一瞬間</div>
          <div className="kterm-body" style={{marginTop:'6px'}}>審判判定一本時，踏み込みの音也是依據之一。</div>
        </div>

        <div className="kcard">
          <div className="ktag blue">腳步</div>
          <div className="kterm-name">足さばき（あしさばき）</div>
          <div className="kterm-body">劍道的腳步移動。前進後退、左右、斜め，意識放在左腳蹬地，不是右腳主動移動。</div>
        </div>

        <div className="kcard">
          <div className="ktag blue">基本練習</div>
          <div className="kterm-name">素振り（すぶり）</div>
          <div className="kterm-body">徒手揮竹刀練習。分正面素振り、斜め素振り、仕掛け素振り等。自主練習的核心項目。</div>
        </div>

        <div className="ksec-label">打擊部位</div>
        <div className="kcard">
          <div className="ktag green">打突部位</div>
          <div className="kterm-name">面・小手・胴（めん・こて・どう）</div>
          <div className="kterm-body">
            <b>面</b>（メン）— 頭頂<br/>
            <b>小手</b>（コテ）— 右手腕<br/>
            <b>胴</b>（ドウ）— 右脇腹<br/><br/>
            道館規定不打突き（喉嚨），所以有效攻擊只有這三個。
          </div>
        </div>

        <div className="ksec-label">技の種類</div>
        <div className="kcard">
          <div className="ktag warn">仕掛け技</div>
          <div className="kterm-name">仕掛け技（しかけわざ）</div>
          <div className="kterm-body">你主動發動的攻擊技。包含出ばな技、連続技、追い込み技等。</div>
        </div>

        <div className="kcard">
          <div className="ktag warn">応じ技</div>
          <div className="kterm-name">応じ技（おうじわざ）</div>
          <div className="kterm-body">對方攻擊後反擊的技。等對方動了才發動，読み能力是關鍵。</div>
          <div className="kdivider"></div>
          <div style={{fontSize:'12px',color:'#5f5e5a',marginTop:'6px',lineHeight:'2.2'}}>
            <b>返し技</b>（かえしわざ）— 接住對方竹刀後反打<br/>
            <b>抜き技</b>（ぬきわざ）— 閃開對方攻擊後打<br/>
            <b>擦り上げ技</b>（すりあげわざ）— 撥開對方竹刀後打<br/>
            <b>打ち落とし技</b>（うちおとしわざ）— 把對方竹刀打落後打
          </div>
        </div>

        <div className="kcard">
          <div className="ktag warn">応じ技詳解</div>
          <div className="kterm-name">返し胴（かえしどう）★ 初學首選</div>
          <div className="kterm-body">對方打面時，接住竹刀，往右前方斜步，順勢打胴。最自然、最好練的応じ技。</div>
          <div className="kflow">對方打面 → 右前斜步 → 接住 → 打胴</div>
        </div>

        <div className="kcard">
          <div className="ktag warn">応じ技詳解</div>
          <div className="kterm-name">擦り上げ面（すりあげめん）</div>
          <div className="kterm-body">對方竹刀打下來時，用自己竹刀從下往上「擦」過去撥開，順勢打面。不是硬擋，是滑開——像雨傘側面把水撥走。時機要抓得很準，初學建議先練返し胴。</div>
          <div className="kflow">對方打來 → 竹刀由下往上擦 → 撥開 → 打面</div>
        </div>

        <div className="kcard">
          <div className="ktag warn">応じ技詳解</div>
          <div className="kterm-name">抜き面 vs 返し面</div>
          <div className="kterm-body">兩個都是對方打來後打面，但方式不同：</div>
          <div className="kerr-grid" style={{marginTop:'8px'}}>
            <div className="kerr-box good"><div className="kerr-label">抜き面</div>閃開（不接觸）→ 對方落空 → 打面。適合對方打胴時。</div>
            <div className="kerr-box good"><div className="kerr-label">返し面</div>接住（有接觸）→ 撥開 → 打面。對方力道大時借力。</div>
          </div>
        </div>

        <div className="ksec-label">距離與接觸</div>
        <div className="kcard">
          <div className="ktag blue">距離</div>
          <div className="kterm-name">間合い（まあい）</div>
          <div className="kterm-body">
            <b>遠間</b> — 還沒進攻擊範圍，等起こり<br/>
            <b>一足一刀</b> — 標準攻擊距離，所有技都可發動<br/>
            <b>近間</b> — 太近，進入鍔迫り合い狀態
          </div>
        </div>

        <div className="kcard">
          <div className="ktag blue">接觸</div>
          <div className="kterm-name">鍔迫り合い（つばぜりあい）</div>
          <div className="kterm-body">雙方靠太近、竹刀交叉頂在一起的狀態。頂住要馬上決定打或退，太久審判喊「分かれ」強制重來。</div>
          <div className="kflow">鍔迫り合い → 引き面 / 引き小手 / 引き胴</div>
        </div>

        <div className="kcard">
          <div className="ktag blue">引き技</div>
          <div className="kterm-name">引き面（ひきめん）＝ 退擊面</div>
          <div className="kterm-body">鍔迫り合い後退後打面。</div>
          <div className="kflow">打面 → 鍔迫り合い → 左手舉起 → 踏み込み＋打面 → 後退2～3步 → 殘心</div>
          <div className="kterm-body" style={{marginTop:'6px'}}>注意：打的瞬間是踏み込み（向前踩），打完才後退，不是退的同時打。</div>
        </div>

        <div className="ksec-label">稽古種類</div>
        <div className="kcard">
          <div className="ktag warn">稽古</div>
          <div className="kterm-name">掛かり稽古（かかりげいこ）</div>
          <div className="kterm-body">你一直衝、一直打，對方（元立ち）只接招不還手。練氣力不斷、踏み込みの爆發力、體力與精神極限、殘心習慣化。30秒～2分鐘，累到腿軟正常。</div>
        </div>

        <div className="kcard">
          <div className="ktag warn">読み</div>
          <div className="kterm-name">起こり（おこり）</div>
          <div className="kterm-body">動作的起點、預兆。読み練習的關鍵——不是看竹刀，是看肩膀、腰、剣先的起こり。</div>
          <div className="kflow">看肩膀 → 要打之前肩會先動<br/>看腰 → 踏み込み前腰會下沉<br/>看剣先 → 上抬 = 準備打面</div>
        </div>
      </div>

      {/* 読み練習 */}
      <div id="k-yomi" className="kendo-section">
        <div className="ksec-label" style={{marginTop:0}}>對方主動攻擊</div>
        <div className="kcard" style={{padding:'0.75rem 1rem'}}>
          <div className="krow3" style={{marginBottom:'6px'}}>
            <div className="kcol-h">對方動作</div>
            <div className="kcol-h">起こりのサイン</div>
            <div className="kcol-h">你的応じ技</div>
          </div>
          <div className="krow3">
            <div className="kcell n">打面</div>
            <div className="kcell w">剣先上抬、肩上升</div>
            <div className="kcell a">返し胴 / 擦り上げ面 / 抜き胴</div>
          </div>
          <div className="krow3">
            <div className="kcell n">打小手</div>
            <div className="kcell w">剣先靠右手、前傾</div>
            <div className="kcell a">抜き面 / 擦り上げ面</div>
          </div>
          <div className="krow3">
            <div className="kcell n">打胴</div>
            <div className="kcell w">剣先右橫移、腰轉</div>
            <div className="kcell a">抜き面 / 返し面</div>
          </div>
        </div>

        <div className="ksec-label">對方靜止或試探</div>
        <div className="kcard" style={{padding:'0.75rem 1rem'}}>
          <div className="krow2" style={{marginBottom:'6px'}}>
            <div className="kcol-h">對方狀態</div>
            <div className="kcol-h">你的仕掛け技</div>
          </div>
          <div className="krow2"><div className="kcell n">剣先下沉（鬆懈）</div><div className="kcell g">出ばな面</div></div>
          <div className="krow2"><div className="kcell n">後退中</div><div className="kcell g">追い込み面</div></div>
          <div className="krow2"><div className="kcell n">構えが高い（竹刀抬高）</div><div className="kcell g">小手</div></div>
          <div className="krow2"><div className="kcell n">構えが低い（竹刀壓低）</div><div className="kcell g">面</div></div>
          <div className="krow2"><div className="kcell n">足が止まっている</div><div className="kcell g">連続技（小手面）</div></div>
        </div>

        <div className="ksec-label">鍔迫り合い後</div>
        <div className="kcard" style={{padding:'0.75rem 1rem'}}>
          <div className="krow2" style={{marginBottom:'6px'}}>
            <div className="kcol-h">狀況</div><div className="kcol-h">你的選擇</div>
          </div>
          <div className="krow2"><div className="kcell n">雙方糾纏</div><div className="kcell a">引き面 / 引き小手 / 引き胴</div></div>
          <div className="krow2"><div className="kcell n">對方推你</div><div className="kcell a">利用反力 → 引き技</div></div>
          <div className="krow2"><div className="kcell n">對方拉你</div><div className="kcell a">跟著進 → 面 or 小手</div></div>
          <div className="krow2"><div className="kcell n">對方靜止</div><div className="kcell a">引き面</div></div>
        </div>

        <div className="ksec-label">間合い（距離）</div>
        <div className="kcard" style={{padding:'0.75rem 1rem'}}>
          <div className="krow3" style={{marginBottom:'6px'}}>
            <div className="kcol-h">距離</div><div className="kcol-h">狀態</div><div className="kcol-h">適合的技</div>
          </div>
          <div className="krow3"><div className="kcell n">遠間（遠）</div><div className="kcell n">未進入攻擊範圍</div><div className="kcell a">等起こり → 出ばな技</div></div>
          <div className="krow3"><div className="kcell n">一足一刀（剛好）</div><div className="kcell n">標準攻擊距離</div><div className="kcell a">面・小手・胴皆可</div></div>
          <div className="krow3"><div className="kcell n">近間（近）</div><div className="kcell n">太近打不開</div><div className="kcell a">鍔迫り合い → 引き技</div></div>
        </div>

        <div className="kpriority">
          <div className="kp-title">初學者優先練這3個</div>
          <div className="kp-item"><div className="knum">1</div>對方打面 → 返し胴</div>
          <div className="kp-item"><div className="knum">2</div>對方打小手 → 抜き面</div>
          <div className="kp-item"><div className="knum">3</div>鍔迫り合い後 → 引き面</div>
        </div>
      </div>

      {/* 常見錯誤 */}
      <div id="k-errors" className="kendo-section">
        <div className="kcard" style={{marginTop:0}}>
          <div className="kterm-name">踏み込み：跳起來踩</div>
          <div style={{fontSize:'12px',color:'#888780',marginBottom:'8px'}}>力量往上跑，不是往前</div>
          <div className="kerr-grid">
            <div className="kerr-box bad"><div className="kerr-label">錯誤</div>右腳主動跳起來 → 力量向上 → 弧形軌跡</div>
            <div className="kerr-box good"><div className="kerr-label">正確</div>左腳蹬地推出去 → 右腳水平滑出 → 幾乎貼地</div>
          </div>
          <div style={{fontSize:'12px',color:'#5f5e5a',marginTop:'8px'}}>意識放在「左腳蹬地」，不是「右腳跳起」</div>
        </div>

        <div className="kcard">
          <div className="kterm-name">踏み込み：變成兩段</div>
          <div style={{fontSize:'12px',color:'#888780',marginBottom:'8px'}}>手腳沒有同步</div>
          <div className="kerr-grid">
            <div className="kerr-box bad"><div className="kerr-label">錯誤</div>竹刀到 → 停一下 → 腳踩（兩個動作）</div>
            <div className="kerr-box good"><div className="kerr-label">正確</div>竹刀到 = 腳踩（同一瞬間）</div>
          </div>
          <div style={{fontSize:'12px',color:'#5f5e5a',marginTop:'8px'}}>先放慢速度練同步。喊聲幫助同步——聲音、劍、腳三個一起出。</div>
        </div>

        <div className="kcard">
          <div className="kterm-name">引き面：退的同時打</div>
          <div style={{fontSize:'12px',color:'#888780',marginBottom:'8px'}}>步驟順序搞錯</div>
          <div className="kerr-grid">
            <div className="kerr-box bad"><div className="kerr-label">錯誤</div>退後的同時揮竹刀 → 力道不足</div>
            <div className="kerr-box good"><div className="kerr-label">正確</div>踏み込み（踩）→ 打到 → 才後退2～3步</div>
          </div>
        </div>

        <div className="kcard">
          <div className="kterm-name">読み：停在那邊不知道怎麼反應</div>
          <div style={{fontSize:'12px',color:'#888780',marginBottom:'8px'}}>看動作而不是看起こり</div>
          <div className="kerr-grid">
            <div className="kerr-box bad"><div className="kerr-label">錯誤</div>等竹刀打下來才反應 → 來不及</div>
            <div className="kerr-box good"><div className="kerr-label">正確</div>看肩膀/腰/剣先的起こり → 提前反應</div>
          </div>
          <div style={{fontSize:'12px',color:'#5f5e5a',marginTop:'8px'}}>初學重點不是「想對的技」，而是「對方一動你就動」，先讓身體有反應習慣。</div>
        </div>

        <div className="kcard">
          <div className="kterm-name">構えが高い / 低い</div>
          <div style={{fontSize:'12px',color:'#888780',marginBottom:'8px'}}>剣先位置不正確造成防守漏洞</div>
          <div className="kerr-grid">
            <div className="kerr-box bad"><div className="kerr-label">高い（對準額頭以上）</div>小手和胴完全露出</div>
            <div className="kerr-box bad"><div className="kerr-label">低い（對準胸口以下）</div>面位置露出</div>
          </div>
          <div className="kerr-box good" style={{marginTop:'6px'}}><div className="kerr-label">正確</div>剣先對準對方喉嚨到左眼之間</div>
        </div>
      </div>

      {/* 每日練習 */}
      <div id="k-daily" className="kendo-section">
        <div className="kcard" style={{marginTop:0}}>
          <div className="ksec-label" style={{marginTop:0,marginBottom:'10px'}}>每日15分鐘結構</div>
          <div style={{display:'grid',gridTemplateColumns:'48px 1fr 1fr',gap:'6px'}}>
            <div className="kcol-h">時間</div><div className="kcol-h">內容</div><div className="kcol-h">重點</div>
            <div className="kcell n" style={{fontWeight:500}}>2 min</div><div className="kcell n">準備活動</div><div className="kcell n">手腕、肩膀、腳踝旋轉</div>
            <div className="kcell n" style={{fontWeight:500}}>3 min</div><div className="kcell n">足さばき</div><div className="kcell n">前後左右，意識左腳蹬地</div>
            <div className="kcell n" style={{fontWeight:500}}>4 min</div><div className="kcell n">素振り</div><div className="kcell n">見週輪替表</div>
            <div className="kcell n" style={{fontWeight:500}}>3 min</div><div className="kcell n">踏み込み練習</div><div className="kcell n">慢速確認氣・劍・体同步</div>
            <div className="kcell n" style={{fontWeight:500}}>2 min</div><div className="kcell n">緩和・呼吸</div><div className="kcell n">放鬆肩膀收操</div>
          </div>
        </div>

        <div className="kcard">
          <div className="ksec-label" style={{marginTop:0,marginBottom:'10px'}}>素振り 週輪替</div>
          <div style={{display:'grid',gridTemplateColumns:'36px 1fr',gap:'5px'}}>
            <div className="kcol-h">天</div><div className="kcol-h">重點</div>
            <div className="kcell g" style={{textAlign:'center'}}>一</div><div className="kcell n">正面素振り × 50</div>
            <div className="kcell g" style={{textAlign:'center'}}>二</div><div className="kcell n">斜め素振り × 30（左右各15）</div>
            <div className="kcell g" style={{textAlign:'center'}}>三</div><div className="kcell n">仕掛け素振り × 30</div>
            <div className="kcell g" style={{textAlign:'center'}}>四</div><div className="kcell n">正面 × 30 ＋ 快慢交替</div>
            <div className="kcell g" style={{textAlign:'center'}}>五</div><div className="kcell n">斜め × 20 ＋ 正面 × 20</div>
            <div className="kcell g" style={{textAlign:'center'}}>六</div><div className="kcell n">自由選，練自己覺得弱的</div>
            <div className="kcell n" style={{textAlign:'center'}}>日</div><div className="kcell n">休息 or 只做足さばき</div>
          </div>
        </div>

        <div className="kcard">
          <div className="ksec-label" style={{marginTop:0,marginBottom:'10px'}}>踏み込み 專項（3分鐘）</div>
          <div style={{fontSize:'12px',color:'#5f5e5a',lineHeight:'2.2'}}>
            <b>第1分鐘（慢速）</b><br/>
            左腳蹬 → 右腳水平滑出 → 落地，確認不抬高、不跳<br/><br/>
            <b>第2分鐘（加上竹刀）</b><br/>
            喊聲 + 竹刀 + 腳 三個同時到<br/><br/>
            <b>第3分鐘（連續）</b><br/>
            面 × 10、小手 × 10、胴 × 10，每次確認同步
          </div>
        </div>

        <div className="kcard">
          <div className="ksec-label" style={{marginTop:0,marginBottom:'10px'}}>每週動作自我檢查</div>
          <div style={{display:'grid',gridTemplateColumns:'48px 1fr',gap:'5px'}}>
            <div className="kcol-h">週次</div><div className="kcol-h">這週只看這個</div>
            <div className="kcell a" style={{textAlign:'center'}}>第1週</div><div className="kcell n">踏み込み有沒有跳起來</div>
            <div className="kcell a" style={{textAlign:'center'}}>第2週</div><div className="kcell n">氣劍体有沒有同步</div>
            <div className="kcell a" style={{textAlign:'center'}}>第3週</div><div className="kcell n">左手握法</div>
            <div className="kcell a" style={{textAlign:'center'}}>第4週</div><div className="kcell n">素振りの軌跡直不直</div>
          </div>
          <div style={{fontSize:'12px',color:'#888780',marginTop:'8px'}}>手機錄起來，對照上課動作比較。</div>
        </div>
      </div>
    </div>
  );
}
