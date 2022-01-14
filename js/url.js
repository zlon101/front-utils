// 获取url参数
export function getParams(url) {
  const params = {};
  const _url = url || window.location.search;
  _url.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>params[k]=v);
  return params;
}
// 设置url参数
export function setUrlQuery(args) {
  const { location } = window;
  if (typeof args !== 'object') {
    return location.pathname + location.search;
  }
  let { search } = location;
  const newQuery = {};
  const startInd = search.indexOf('?');
  if (startInd !== -1) {
    search = search.slice(startInd + 1);
    const list = search.split('&');
    list.forEach(item => {
      const [k, v] = item.split('=');
      newQuery[k] = v;
    });
  }

  const newKList = Object.keys(args);
  newKList.forEach(k => {
    newQuery[k] = args[k];
  });

  let newPath = `${location.pathname}?`;
  const list = Object.keys(newQuery).map(k => `${k}=${newQuery[k]}`);
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
