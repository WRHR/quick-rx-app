import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Link, Heading } from "@chakra-ui/react"
import About from './about'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick RX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>
        <About />
      </Heading>
      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
