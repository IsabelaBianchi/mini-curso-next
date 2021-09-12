import styles from './//styles.module.scss'
import { ActiveLink } from '../ActiveLink'
import Image from 'next/image'

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <Image
                    src="/logo.svg"
                    alt="DevNews"
                    width={500}
                    height={500}
                />
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
            </div>
        </header>
    )
}