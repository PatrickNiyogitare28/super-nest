import { createCipheriv, randomBytes, scrypt, createDecipheriv } from 'crypto';
import { promisify } from 'util';

export const encrypt = async (textToEncrypt: string) : Promise<string> => {
    const iv = randomBytes(process.env.CRYPTO_VI);
    const CRYPTO_PRIVATE_KEY = 'Password used to generate key';
    // The key length is dependent on the algorithm.
    // In this case for aes256, it is 32 bytes.
    const key = (await promisify(scrypt)(CRYPTO_PRIVATE_KEY, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const encryptedText = Buffer.concat([
    cipher.update(textToEncrypt),
    cipher.final(),
    ]);
    return encryptedText.toString();
}

export const decrypt = async (encryptedText) => {
    const decipher = createDecipheriv('aes-256-ctr', key, iv);
    const decryptedText = Buffer.concat([
      decipher.update(encryptedText),
      decipher.final(),
    ]);    
}