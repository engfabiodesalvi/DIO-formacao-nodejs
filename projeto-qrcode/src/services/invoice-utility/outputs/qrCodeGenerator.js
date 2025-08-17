const QRCode = require("qrcde");

export default async function generateQrBuffer(link) {
  return await QRCode.toBuffer(link);  
};
