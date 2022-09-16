function(instance, properties, context) {
	const AES = CryptoJS.AES;
    let SECRET = properties.secret_key;
    let ENC_DATA = properties.encrypted_string;

    if (!ENC_DATA) {
        console.error('The string to decrypt is missig');
        return;
    };
    if (!SECRET) {
        console.error('Secret key not set');
        return;
    };

    // Decrypt
    let bytes  = AES.decrypt(ENC_DATA, SECRET);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);

    // Publish state
    instance.publishState('decrypted_output', originalText);

    // Trigger event
    instance.triggerEvent('string_decrypted');
}