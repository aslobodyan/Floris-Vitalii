import * as axios from 'axios';

const productAPI = {
    getProduct: () => {
        //  Usually it is better to make instance of Axios and to use it,
        //  but in this particular case there is nothing to move in Pre-Condition
        return axios.get('https://hatsa.com/api/search/public/products/3a484937198f2250782eac1d2555c52be842034d');
    }
};

export default productAPI;
