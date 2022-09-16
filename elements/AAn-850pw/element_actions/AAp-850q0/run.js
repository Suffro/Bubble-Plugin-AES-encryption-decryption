function(instance, properties, context) {
    const AES = CryptoJS.AES;
    let SECRET = properties.secret_key;
    let DATA = properties.string;

    if (!DATA) {
        console.error('The string to encrypt is missig');
        return;
    };
    if (!SECRET) {
        console.error('Secret key not set');
        return;
    };

    // Encrypt
    let ciphertext = AES.encrypt(DATA, SECRET).toString();

    // Publish state
    instance.publishState('encryption_output', ciphertext);

    // Trigger event
    instance.triggerEvent('string_encrypted');
}