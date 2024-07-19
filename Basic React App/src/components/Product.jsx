import "./Product.css";

function Product({ title, price = 0, features }) {
  const styles = {backgroundColor: price>5000?"pink":""};
  return (
    <div className="Product" style={styles}>
      <h3>Title: {title}</h3>
      <p>Price: {price}</p>
      <p>Features: </p>
      <ul>
        {features.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>
        {price > 5000 ? "5%" : price > 3000 ? "3%" : "1%"} Discount on this item
      </p>
    </div>
  );
}

export default Product;