import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProduct';
import '@styles/ProductList.scss';



const API = 'https://api.escuelajs.co/api/v1/products?limit=15&offset=15';

const ProductList = () => {
	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
			{products.map(product => (
				<ProductItem product={product} key= {product.id}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;