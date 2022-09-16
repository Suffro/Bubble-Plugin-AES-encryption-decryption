function(properties, context) {
	var CryptoJS = require("crypto-js");
    
    const AES = CryptoJS.AES;
    
    let data = properties.string;
    let secret;
	
    if(properties.use_custom_key){
        secret = properties.custom_key;
    }else{
        secret = context.keys.SecretKey;
    }
    
    if (!data) {
        return;
    };
    if (!secret) {
        return;
    };

    // Encrypt
    let ciphertext = AES.encrypt(data, secret).toString();

    // Return result
    return(
    	{
     		encrypted_string: ciphertext
		}
    );
}