// 深色版交互：菜单 / 打字机 / 滚动入场 / 年份
document.addEventListener('DOMContentLoaded', () => {

  // 移动端菜单
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // 终端打字机效果
  const typingEl = document.getElementById('typing');
  if (typingEl) {
    const commands = [
      "git log --author='Yicong' --oneline mainline",
      "ls ./drivers/net/wireless",
      "echo '7 patches merged into mainline'",
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
