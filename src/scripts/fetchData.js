const axios = require("axios");

const fetchData = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://asos2.p.rapidapi.com/products/v2/list', {
            headers: {
                "x-rapidapi-host":"asos2.p.rapidapi.com",
                "x-rapidapi-key":"61074dac6emsh8f5b49cd05e94eep1a93f4jsn9b824b551a7c"
            },
            params: {
                "country":"US",
                "currency":"USD",
                "sort":"freshness",
                "lang":"en-US",
                "sizeSchema":"US",
                "offset":"0",
                "categoryId":"27871",
                "limit":"48",
                "store":"US"
            }
        }).then(res => {
            const products = [];
            res.data.products.forEach(element => {
                products.push({
                    name: element.name,
                    price: element.price.current.text,
                    imageUrl: element.imageUrl
                })
            });
            resolve(products);
        }).catch(err => { reject() })
    })
}
export default fetchData;

