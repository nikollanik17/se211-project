import Link from "next/link";
import styles from './Logo.module.scss';

const Logo = () => {
	return (
		<Link href="/">
      <div className={styles.logo}>
        <img src="assets/logoVertical.jpg" />
      </div>
    </Link>
	);
};

export default Logo;