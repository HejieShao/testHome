/**
 *@Time : 2020/9/2 下午2:49
 *@Author : Hejie Shao
 * 计算rem需要的字体大小，按照设计图1920宽度来做基准
 */
;(function(win) {
  let tid;
  function refreshRem() {
    let designSize = 1920; // 设计图尺寸
    let html = document.documentElement;
    let wW = html.clientWidth;// 窗口宽度
    if(wW < 1024)
      wW = 1024
    let rem = wW * 100 / designSize;
    if(rem > 100)
      rem = 100;
    document.documentElement.style.fontSize = rem + 'px';
  }

  win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  refreshRem();

})(window);
