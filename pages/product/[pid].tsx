import SingleProduct from "../../components/product/SingleProduct";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

export default function Single(){
    const router = useRouter()
    const { pid } = router.query
    const name = pid
    return (
        <div>
            <SingleProduct product={name}/>
        </div>
    );
}


// export async function getServerSideProps({ req, res }) {
//     return {
//         props: { id: res }
//     }
// }