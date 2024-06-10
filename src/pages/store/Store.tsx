import Product from '../../components/Product/Product'
import "./store.scss"
import { useProductContext } from '../../context/ProductContext'

export default function Store() {
  const {data} = useProductContext()
  return (
    <>
      <div style={{fontSize: "30px"}}>Store</div>
      <br />
      <div className="products-flex">{/* !! */}
        <div className="products">
          {data.map(p=>{
          return <Product {...p} key={p.id} />
          })}
        </div>
      
      </div>
      
    </>
  )
}
