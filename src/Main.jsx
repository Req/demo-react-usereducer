import { useContext } from 'react'
import './main.css'
import { AppContext } from './AppContext'

const products = []
for (let i = 0; i < 20; i++) {
    const product = {
        id: i,
        name: "Product " + i
    }
    products.push(product)
}

export default function Main() {
    const { state } = useContext(AppContext)

    return (
        <main>
            {products.map(p => {
                return (
                    <div className="product" key={p.id}>
                        <p>{p.name}</p>
                        {state.user && <button>Add to cart</button>}
                        {!state.user && <p>Log in to add to cart</p>}
                    </div>
                )
            })}
        </main>
    )
}