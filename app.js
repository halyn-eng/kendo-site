/* 劍道學習手冊 — 共用工具
   給 index / notes / videos / tags 四頁共用 */

var KENDO = (function () {

  var firebaseConfig = {
    apiKey: "AIzaSyABbUlUE4GXd-oOS5wGvE44QMTf5jHOoww",
    authDomain: "kendo-blog.firebaseapp.com",
    databaseURL: "https://kendo-blog-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kendo-blog",
    storageBucket: "kendo-blog.firebasestorage.app",
    messagingSenderId: "131957671333",
    appId: "1:131957671333:web:5477aaeafdc9765433544c"
  };

  var ADMIN_UID = "aRf8E0FGuZYHAJTFtIA94HJPArF2";

  function init() {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    return { auth: firebase.auth(), db: firebase.database() };
  }

  function isAdmin(user) {
    return !!(user && user.uid === ADMIN_UID);
  }

  /* ---------- 日期 ---------- */
  function formatDate(iso) {
    var p = String(iso).split('-');
    return p[0] + '/' + parseInt(p[1], 10) + '/' + parseInt(p[2], 10);
  }
  function toISODate(display) {
    var p = String(display || '').split('/');
    if (p.length !== 3) return '';
    return p[0] + '-' + String(p[1]).padStart(2, '0') + '-' + String(p[2]).padStart(2, '0');
  }
  function monthKey(display) {
    var p = String(display || '').split('/');
    if (p.length < 2) return '其他';
    return p[0] + ' 年 ' + parseInt(p[1], 10) + ' 月';
  }

  /* ---------- 標籤 ---------- */
  function parseTags(str) {
    return String(str || '')
      .split(/[\s,，、#]+/)
      .map(function (t) { return t.trim(); })
      .filter(Boolean);
  }
  function normTags(v) {
    if (Array.isArray(v)) return v.filter(Boolean);
    return v ? parseTags(v) : [];
  }
  /* 標籤總覽頁連結（跨頁共用標籤的入口） */
  function tagUrl(tag) {
    return 'tags.html?tag=' + encodeURIComponent(tag);
  }

  /* ---------- 文字 ---------- */
  function stripHtml(s) {
    return String(s || '').replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
  }

  /* ---------- YouTube ---------- */
  function ytId(url) {
    if (!url) return null;
    var m = String(url).match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{11})/
    );
    return m ? m[1] : null;
  }
  function ytThumb(url) {
    var id = ytId(url);
    return id ? 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg' : null;
  }
  /* 1:23 / 12:05 / 1:02:30 → 秒數 */
  function tsToSeconds(ts) {
    var p = ts.split(':').map(Number);
    if (p.length === 2) return p[0] * 60 + p[1];
    if (p.length === 3) return p[0] * 3600 + p[1] * 60 + p[2];
    return 0;
  }
  function ytTimeUrl(url, seconds) {
    var id = ytId(url);
    if (!id) return url;
    return 'https://www.youtube.com/watch?v=' + id + '&t=' + seconds + 's';
  }

  /* 把純文字裡的 3:20 這種時間變成可點的連結，跳到影片那一秒。
     回傳 DocumentFragment，不用 innerHTML，避免 XSS。 */
  function linkifyTimestamps(text, url) {
    var frag = document.createDocumentFragment();
    var src = String(text || '');
    if (!ytId(url)) {
      frag.appendChild(document.createTextNode(src));
      return frag;
    }
    var re = /(?:^|[^\d:])(\d{1,2}:\d{2}(?::\d{2})?)(?![\d:])/g;
    var last = 0, m;
    while ((m = re.exec(src)) !== null) {
      var ts = m[1];
      var start = m.index + m[0].length - ts.length;
      if (start > last) frag.appendChild(document.createTextNode(src.slice(last, start)));
      var a = document.createElement('a');
      a.className = 'ts-link';
      a.href = ytTimeUrl(url, tsToSeconds(ts));
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = ts;
      a.title = '跳到影片 ' + ts;
      frag.appendChild(a);
      last = start + ts.length;
    }
    if (last < src.length) frag.appendChild(document.createTextNode(src.slice(last)));
    return frag;
  }

  /* ---------- 選單 ---------- */
  function toggleMenu() {
    var m = document.getElementById('mobileMenu');
    if (m) m.classList.toggle('open');
  }

  return {
    ADMIN_UID: ADMIN_UID,
    init: init,
    isAdmin: isAdmin,
    formatDate: formatDate,
    toISODate: toISODate,
    monthKey: monthKey,
    parseTags: parseTags,
    normTags: normTags,
    tagUrl: tagUrl,
    stripHtml: stripHtml,
    ytId: ytId,
    ytThumb: ytThumb,
    ytTimeUrl: ytTimeUrl,
    tsToSeconds: tsToSeconds,
    linkifyTimestamps: linkifyTimestamps,
    toggleMenu: toggleMenu
  };
})();

window.toggleMenu = KENDO.toggleMenu;
