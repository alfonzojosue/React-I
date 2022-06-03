import {useEffect, useState} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchMyAPI() {
		const response = await axios(API);
		setProducts(response.data);
	}
	fetchMyAPI()
}, [])

return products;
}




export default useGetProducts;