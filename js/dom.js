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
  const widthDiff = dom.scrollWidth - dom.offsetWidth;
  const heightDiff = dom.scrollHeight - dom.offsetHeight;
  if (widthDiff > 2 || heightDiff > 2) {
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

/**
 * 检查浏览器是否支持CSS
 * 浏览器遇到不支持的属性值时，浏览器会直接把这个值抛弃
 * @param attribute
 * @param value
 * @return {Boolean}
 */
export const supportsCSS = (attribute, value) => {
  if (window.CSS && window.CSS.supportsCSS) {
    if (typeof value === 'undefined') return window.CSS.supportsCSS(attribute);
    return window.CSS.supportsCSS(attribute, value);
  }

  const elem = document.createElement('div');
  if (attribute in elem.style) {
    elem.style[attribute] = value;
    // window.getComputedStyle
    return elem.style[attribute] === value;
  }
  return false;
};
