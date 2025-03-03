import React, { useState } from 'react'
import ProductItem from '../components/ui/ProductItem'

function ShopPage({products}) {    
    const [layout, setLayout] = useState("d-flex");

    function toggleLayout () {
        if(layout === "d-flex") {
            setLayout("d-grid");
        }
        else {
            setLayout("d-flex");
        }
    }

    return (
        <>  
            <button onClick={toggleLayout}>Change layout</button>
            <div className={layout}>
                {products && products.map(p => 
                    <ProductItem key={p.id} product={p}/>
                )}
            </div>
        </>
    )
}

export default ShopPage
