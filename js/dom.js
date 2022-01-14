/**
 * 判断dom元素文本是否溢出
 * @param dom 
 * @returns boolean
 */
export function isOverflow(dom) {
  if (!dom) {
    return false;
  }
  // clientWidth
  // if (dom.scrollWidth > dom.offsetWidth || dom.scrollHeight > dom.offsetHeight)
  if (dom.scrollWidth > dom.offsetWidth) {
    return true;
  }
  return false;
}

// 复制
export function copyString(str) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(str);
  }
  const input = document.createElement('textarea');
  input.readOnly = 'readonly';
  input.style.position = 'fixed';
  input.style.clip = 'rect(0 0 0 0)';
  input.style.top = '10px';
  input.value = str;
  document.body.appendChild(input);
  input.select();
  const isSuccess = document.execCommand('copy');
  document.body.removeChild(input);
  return isSuccess;
}