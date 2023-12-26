const axios = require('axios');
const baseUrl = "https://script.google.com/macros/s/AKfycbxxlN-CAewiKIKzgpzcYwW5fEU3R1bK1SFN5qDjJhzv2fIGdrZDdokd8ti5uYp8JMam5w/exec"

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

exports.getData = async (whatsapp) => {
    try {
        // console.log(">>>", whatsapp);
        const response = await axiosInstance.get()
        let responseStr = ""
        response.data.data.forEach(element => {
            if (element.whatsapp.toString() === whatsapp) {
                responseStr += `Jenis Cucian: ${element.jenis_cucian}\nHarga: ${element.total_bayar}\nStatus: ${element.status}\n\n`
            }
        });
        if (responseStr === "") {
            responseStr = "Anda tidak punya Cucian"
        }

        return responseStr
    } catch (error) {
        console.log(error);
    }
}
