import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import productsStyles from "@/styles/Products.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../slices/shoppingcartSlice";

const products = [
  {
    id: "1",
    name: "DUNE PART TWO",
    imageUrl:
      "https://www.vscinemas.com.tw/vsweb/upload/film/film_20240126001.jpg",
    releaseDate: "2024-02-28",
    price: "100",
  },
  {
    id: "2",
    name: "DEMON SLAYER KIMETSU NO YAIBA TO THE HASHIR",
    imageUrl:
      "https://www.vscinemas.com.tw/vsweb/upload/film/film_20240206002.jpg",
    releaseDate: "2024-02-23",
    price: "200",
  },
  {
    id: "3",
    name: "SPY x FAMILY CODE WHITE",
    imageUrl:
      "https://www.vscinemas.com.tw/vsweb/upload/film/film_20231220001.jpg",
    releaseDate: "2024-01-19",
    price: "300",
  },
  {
    id: "4",
    name: "ARGYLLE",
    imageUrl:
      "https://www.vscinemas.com.tw/vsweb/upload/film/film_20240104001.jpg",
    releaseDate: "2024-01-31",
    price: "400",
  },
  {
    id: "5",
    name: "AQUAMAN AND THE LOST KINGDOM",
    imageUrl:
      "https://www.vscinemas.com.tw/vsweb/upload/film/film_20231107058.jpg",
    releaseDate: "2023-12-20",
    price: "150",
  },
  {
    id: "6",
    name: "KILLERS OF THE FLOWER MOON",
    imageUrl:
      "https://www.vscinemas.com.tw/vsweb/upload/film/film_20230920002.jpg",
    releaseDate: "2024-03-01",
    price: "250",
  },
];

export default function Products() {
  const dispatch = useDispatch();

  const handleShoppingcartAddItem = (payload) => {
    dispatch(addItem(payload));
  };
  return (
    <>
      <main className={`${productsStyles.product} ${inter.className}`}>
        <h1>Movies</h1>
        <section className={productsStyles.section}>
          {products.map((product) => (
            <div key={product.id} className={productsStyles.product}>
              <img
                className={productsStyles.img}
                src={product.imageUrl}
                alt={product.name}
              />
              <div className={productsStyles.productInfo}>
                <h2 className={productsStyles.name}>{product.name}</h2>
                <p className={productsStyles.releaseDate}>
                  Release date : {product.releaseDate}
                </p>
                <p className={productsStyles.price}>price : ${product.price}</p>
                <button
                  className={productsStyles["add-to-cart-button"]}
                  onClick={() =>
                    handleShoppingcartAddItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                    })
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
