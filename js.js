function make_target(negara) {
    var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1/jV9vzZtaNjS01m+4Da1o9KAIeYhd+KmLnYTaDCoeVCOouDvYXkP0X",
        negara);
    if (decrypted == "") {
        var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX19NUJA0KpwIjurW3k8JOOx9KuBh3nqB3PuHJrKr1BCiLubkvz1Klk+g",
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