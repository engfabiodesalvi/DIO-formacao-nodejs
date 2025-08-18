import QRCode from "qrcode";

export default async function generateQrBuffer(link) {
  return await QRCode.toBuffer(link);  
};
