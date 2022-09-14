function(properties, context) {
	var CryptoJS = require("crypto-js");
    
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

    // Return result
    return(
    	{
     		encrypted_string: ciphertext
		}
    );
}