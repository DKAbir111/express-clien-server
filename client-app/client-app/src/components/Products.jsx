import { Link, useLoaderData } from "react-router-dom"

export default function Products() {
    const data = useLoaderData()
    return (
        <div>
            <h1>{data.length}</h1>
            {
                data.map(product => <div key={product.id} style={{ border: '2px solid red', margin: '5px', borderRadius: '5px' }}>
                    <Link to={`/product/${product.id}`}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <small>${product.price}</small></Link>

                </div>)
            }
        </div>
    )
}
