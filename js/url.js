/**
 * 获取url参数
 * @param {string} url 可选
 * @returns Object
 */
export function getParams(url) {
  const params = {};
  const _url = url || window.location.search;
  _url.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>params[k]=v);
  return params;
}

/**
 * 设置url参数
 * @param {Object} args: { k, v }
 * @returns url: string
 */
export function setUrlQuery(args) {
  const { location } = window;
  if (typeof args !== 'object') {
    return location.pathname + location.search;
  }

  const newQuery = getParams();
  const newKList = Object.keys(args);
  newKList.forEach((k) => {
    newQuery[k] = args[k];
  });
  let newPath = `${location.pathname}?`;
  const list = Object.keys(newQuery)
    .filter((k) => newQuery[k])
    .map((k) => `${k}=${newQuery[k]}`);
  newPath += list.join('&');
  return newPath;
}

// 阻止浏览器回退
export function preventBrowserBack() {
  window.history.pushState(null, null, document.URL);
  const popFn = function () {
    window.history.pushState(null, null, document.URL);
  };
  window.addEventListener('popstate', popFn);
  // 恢复回退
  return () => {
    window.removeEventListener('popstate', popFn);
  };
}
