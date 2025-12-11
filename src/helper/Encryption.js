import CryptoJS from "crypto-js";

const secretKey = "KEYCOMPUTER";

const encryptData = (text) => {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
};
const decryptData = (cipher) => {
  const bytes = CryptoJS.AES.decrypt(cipher, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
export default {encryptData,decryptData};