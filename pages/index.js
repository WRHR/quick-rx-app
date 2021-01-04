import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Link, Heading, Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";

export default function Home() {
  const [activeDiagnostic, setActiveDiagnostic] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick RX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <NavBar />
        <SearchBar />
      </Box>
      <main className={styles.main}>
        <Heading size="md">Clinical practice guidlines for manging:</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
          <Box pt="20px">
            <Link
              href={activeDiagnostic}
              onClick={() => setActiveDiagnostic("dyslipidemia")}
            >
              Dyslipidemia
            </Link>
          </Box>
          <Box pt="20px">
            <Link
              href={activeDiagnostic}
              onClick={() => setActiveDiagnostic("dyslipidemia")}
            >
              Test1
            </Link>
          </Box>
          <Box pt="20px">
            <Link
              href={activeDiagnostic}
              onClick={() => setActiveDiagnostic("dyslipidemia")}
            >
              Test2
            </Link>
          </Box>
        </Grid>
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
