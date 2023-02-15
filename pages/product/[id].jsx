import SingleProduct from "../../components/product/singleProduct";
import { useState, useEffect } from 'react';

export default function Single({id}){
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(id)
    }, []);
    return (
        <div>
            <SingleProduct product={product} />
        </div>
    );
}


export async function getServerSideProps({ params }) {
    return {
        props: { id: params.id }
    }
}