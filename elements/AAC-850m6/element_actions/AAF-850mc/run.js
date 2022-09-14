function(instance, properties, context) {
    const AES = CryptoJS.AES;
    const SECRET = context.keys.SecretKey;
    const DATA = properties.string;

    if (!DATA) {
        throw('The string to encrypt is missig');
        return;
    };
    if (!SECRET) {
        throw('Secret key not set');
        return;
    };

    // Encrypt
    let ciphertext = AES.encrypt(DATA, SECRET).toString();

    // Publish state
    instance.publishState('encryption_output', ciphertext);

    // Trigger event
    instance.triggerEvent('string_encrypted', function(err){console.error(err)});
}