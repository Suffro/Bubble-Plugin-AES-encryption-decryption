function(instance, properties, context) {
    const AES = CryptoJS.AES;
    const SECRET = context.keys.SecretKey;
    const ENC_DATA = properties.encrypted_string;

    if (!ENC_DATA) {
        throw('The string to decrypt is missig');
        return;
    };
    if (!SECRET) {
        throw('Secret key not set');
        return;
    };

    // Decrypt
    let bytes  = AES.decrypt(ENC_DATA, SECRET);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);

    // Publish state
    instance.publishState('decrypted_output', originalText);

    // Trigger event
    instance.triggerEvent('string_decrypted', function(err){console.error(err)});
        
}