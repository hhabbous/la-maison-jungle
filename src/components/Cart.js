const articles = [
  {
    id: 1,
    label: "monstera",
    price: 8,
  },
  {
    id: 2,
    label: "lierre",
    price: 10,
  },
  {
    id: 3,
    label: "bouquet de fleurs",
    price: 15,
  },
];

const Cart = () => {
  return (
    <>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.id}>
              {article.label} <span>{`${article.price} $`}</span>
            </li>
          );
        })}
      </ul>
      <div>{articles.reduce((total, item) => (total += item.price), 0)}</div>
    </>
  );
};

export default Cart;
