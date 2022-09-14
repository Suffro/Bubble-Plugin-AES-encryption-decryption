function(properties, context) {
	var CryptoJS = require("crypto-js");

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

    // Return result
    return(
    	{
     		decrypted_string: originalText
		}
    );
}