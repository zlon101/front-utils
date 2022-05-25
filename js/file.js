/**
 * 根据base64计算图像存储大小
 * base64 是用四个字符来表示3个字节
 */
function getSizeFromBase64(base64) {
  // 把头部去掉
  let str = base64.replace(/data:image\/.+base64,/, '');
  // 找到等号，把等号也去掉
  const equalIndex = str.indexOf('=');
  if (str.indexOf('=') > 0) {
    str = str.substring(0, equalIndex);
  }
  // 原来的字符流大小，单位为字节
  const strLength = str.length;
  // 计算后得到的文件流大小，单位为字节
  const fileLength = parseInt(strLength - (strLength / 8) * 2, 10);
  // 由字节转换为MB
  const size = `${fileLength / 1024 ** 2}`;
  return `${size}MB`;
}
