// Simple encryption/decryption utilities for the wordlist
// This provides basic obfuscation to prevent casual viewing of the wordlist

// Get encryption key from environment variable or use a default
const ENCRYPTION_KEY =
    process.env.REACT_APP_ENCRYPTION_KEY || "TimeTraveler2025!@#";

// Simple XOR cipher for encryption
function xorEncrypt(text, key) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(
            text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
        );
    }
    return result;
}

// Encrypt a string
export function encrypt(text) {
    const encrypted = xorEncrypt(text, ENCRYPTION_KEY);
    return btoa(encrypted); // Base64 encode
}

// Decrypt a string
export function decrypt(encryptedText) {
    try {
        const decoded = atob(encryptedText); // Base64 decode
        return xorEncrypt(decoded, ENCRYPTION_KEY);
    } catch (error) {
        console.error("Decryption failed:", error);
        return null;
    }
}

// Encrypt the entire wordlist
export function encryptWordlist(wordlist) {
    const jsonString = JSON.stringify(wordlist);
    return encrypt(jsonString);
}

// Decrypt the entire wordlist
export function decryptWordlist(encryptedWordlist) {
    const decryptedJson = decrypt(encryptedWordlist);
    if (decryptedJson) {
        try {
            return JSON.parse(decryptedJson);
        } catch (error) {
            console.error("Failed to parse decrypted wordlist:", error);
            return null;
        }
    }
    return null;
}
