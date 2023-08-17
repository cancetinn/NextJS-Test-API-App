import Link from "next/link";

import styles from "./style.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="https://github.com/cancetinn" target="_blank">
                Can Çetin
            </Link>
        </footer>
    );
}

export default Footer;