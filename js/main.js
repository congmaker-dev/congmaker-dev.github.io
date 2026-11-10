// ============================================================
// 站点统计配置（唯一需要维护的数字）
// 新增成果后只改这里，页面上的统计数字会自动同步：
//   - index.html 统计条（data-stat）
//   - kernel.html / patents.html 页头（data-stat + data-template）
//   - 首屏终端打字机命令里的补丁数
// ============================================================
const SITE = {
  patches: 7,          // 合入 Linux 主线内核的补丁数
  cveFixes: 1,         // 其中成为 CVE 修复的数量
  patents: 3,          // 专利总数
  patentsGranted: 1,   // 已授权专利数
  ossProjects: 2,      // 参与的开源项目数（Linux 内核、Notepad--）
};

// 深色版交互：统计数字 / 菜单 / 打字机 / 滚动入场 / 年份
document.addEventListener('DOMContentLoaded', () => {

  // 填充统计数字。用法：
  //   纯数字：<b data-stat="patches">7</b>
  //   带文案：<span data-stat="patches" data-template="%d 个补丁合入主线">…</span>
  document.querySelectorAll('[data-stat]').forEach(el => {
    const key = el.dataset.stat;
    if (key in SITE) el.textContent = (el.dataset.template || '%d').replace('%d', SITE[key]);
  });

  // 移动端菜单
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // 终端打字机效果（命令轮播）
  const typingEl = document.getElementById('typing');
  if (typingEl) {
    const commands = [
      "git log --author='Yi Cong' --oneline",
      `echo '${SITE.patches} patches merged into mainline'`,
    ];
    let cmdIdx = 0, charIdx = 0, deleting = false;
    (function tick() {
      const cmd = commands[cmdIdx];
      typingEl.textContent = cmd.slice(0, charIdx);
      let delay = deleting ? 38 : 85;
      if (!deleting && charIdx === cmd.length) { delay = 1800; deleting = true; }
      else if (deleting && charIdx === 0) { deleting = false; cmdIdx = (cmdIdx + 1) % commands.length; delay = 420; }
      else charIdx += deleting ? -1 : 1;
      setTimeout(tick, delay);
    })();
  }

  // 滚动入场
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // 页脚年份
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
