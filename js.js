function make_target(negara) {
    var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX19J+Gl7G1IMOjmZmK1wQJ/mzuPutwaB1+p/E/Df/olnaYDTROn1wRmz",
        negara);
    if (decrypted == "") {
        var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1/+7k5iNUu7ePWdEtER84MyupugURMvl22tA/YJLFs5XxSKpmvbjKaH",
            negara);
        if (decrypted == "") {
            return "https://twitter.com/imkameriana";
        } else {
            return decrypted.toString(CryptoJS.enc.Utf8);
        }
    } else {
        return decrypted.toString(CryptoJS.enc.Utf8);

    }


}