/**
 * 性能优化
 */

// 节流
export function throttle(callFn, interval) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        callFn.apply(this, args);
      }, interval);
    }
  };
}
