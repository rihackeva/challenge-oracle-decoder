function encryptText() {
    const input = document.getElementById('inputText').value;
    if (input) {
        const encrypted = btoa(input); // Simple base64 encoding
        document.getElementById('resultMessage').textContent = encrypted;
    } else {
        document.getElementById('resultMessage').textContent = 'Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.';
    }
}

function decryptText() {
    const input = document.getElementById('inputText').value;
    if (input) {
        try {
            const decrypted = atob(input); // Simple base64 decoding
            document.getElementById('resultMessage').textContent = decrypted;
        } catch (e) {
            document.getElementById('resultMessage').textContent = 'Texto no válido para desencriptar';
        }
    } else {
        document.getElementById('resultMessage').textContent = 'Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.';
    }
}
