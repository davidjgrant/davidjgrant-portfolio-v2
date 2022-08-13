import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { pageAnimation } from "../styles/Animation";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>DavidJGrant Portfolio</title>
        <meta name="description" charSet="UTF-8" content="Welcome to my Portfolio website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <motion.main layout variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;