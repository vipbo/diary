// eslint-disable-next-line func-names
(function(doc, win) {
  const docEl = doc.documentElement;
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  // eslint-disable-next-line func-names
  const recalc = function() {
    const { clientWidth } = docEl;
    if (!clientWidth) return;
    // pc端设置为54px
    let fontSize = '54px';
    const isMobile =
      navigator.userAgent
        .toLowerCase()
        .match(
          /(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i,
        ) != null;
    if (isMobile) {
      // 移动端
      fontSize = `${37.5 * (clientWidth / 375)}px`;
    }
    // eslint-disable-next-line prefer-template
    docEl.style.fontSize = fontSize;
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
