function(properties, context) {
	var CryptoJS = require("crypto-js");
    
    const AES = CryptoJS.AES;
    
    let enc_data = properties.string;
    let secret;
	
    if(properties.use_custom_key){
        secret = properties.custom_key;
    }else{
        secret = context.keys.SecretKey;
    }
    
    if (!enc_data) {
        return;
    };
    if (!secret) {
        return;
    };

    // Decrypt
    let bytes  = AES.decrypt(enc_data, secret);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);

    // Return result
    return(
    	{
     		decrypted_string: originalText
		}
    );
}