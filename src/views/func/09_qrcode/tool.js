import QRCode from 'qrcode'

/**
 * @description 生成二维码
 * @param {String} qrcodeUrl 二维码的url。带http/https
 * @param {Object} opts 生成二维码的参数。详见：https://www.npmjs.com/package/qrcode#qr-code-options
 * @returns 二维码图片的url
 */
async function qrcode (qrcodeUrl, opts) {
  // const qrcodeUrl = `http://www.gaomi.gov.cn/ddydyzt/tzz/mszb?data=${en}`\
  // const opts = { color: { dark: '#0fcc50ff' }
  return await QRCode.toDataURL(qrcodeUrl, opts)
}

export { qrcode }
