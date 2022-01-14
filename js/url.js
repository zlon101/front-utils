// 获取url参数
export function getParams(url) {
  const params = {};
  const _url = url || window.location.search;
  _url.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>params[k]=v);
  return params;
}