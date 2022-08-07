import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

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
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;