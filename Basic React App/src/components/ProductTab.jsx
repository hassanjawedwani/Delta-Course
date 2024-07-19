import Product from './Product';

function ProductTab() {
  const mobileFeatures = ["Gorila Glass", "8MP Front Camera","24MP Back Camera"];
  const watchFeatures = ["24 Hours Battery Timming", "3 inch Screen"];
  return (
    <div>
      <Product title="Mobile" price={1000} features={mobileFeatures} />
      <Product title="Laptop" price={9000} features={["17 inch screen", "2 hour Battery"]} />
      <Product title="Watch" price={3000} features={watchFeatures} />
    </div>
  )
}

export default ProductTab;