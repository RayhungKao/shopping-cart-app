import Link from "next/link";
import styles from "@/styles/Navbar.module.scss";
import { useSelector }  from "react-redux";
import { selectTotalItems } from '../slices/shoppingcartSlice';

function Navbar( {children} ) {
  const totalItems = useSelector(selectTotalItems);

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/shopping-cart">Shopping Cart ({totalItems})</Link>
      </nav>
      {children}
    </>
  );
}

export default Navbar;
