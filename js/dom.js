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
