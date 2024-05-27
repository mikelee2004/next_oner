import { ProductCard } from "./components/ProductCard"
import ReactQueryProvider from "./providers/react-query"

export default function Home() {
  return (
      <div>
        <ProductCard id={0} name={""} image={""} price={0} />
      </div>
  )
}