import * as axios from 'axios';

const productAPI = {
    getProduct: () => {
        return axios.get('https://hatsa.com/api/search/public/products/3a484937198f2250782eac1d2555c52be842034d');
    }
};

export default productAPI;
