import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Link, Heading, Button, Box, Flex } from "@chakra-ui/react";
import About from "../components/about";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [activeDiagnostic, setActiveDiagnostic] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick RX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>
        <h1>Welcome to Quick RX</h1>
        <Flex direction='row'>
          <SearchBar />
          <About />
        </Flex>
      </Heading>
      <main className={styles.main}>
        <Heading size="md">Clinical practice guidlines for manging:</Heading>
        <Box pt="20px">
          <Link
            href={activeDiagnostic}
            onClick={() => setActiveDiagnostic("dyslipidemia")}
          >
            Dyslipidemia
          </Link>
        </Box>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
