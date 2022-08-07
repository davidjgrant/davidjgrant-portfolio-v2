import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>DavidJGrant Portfolio</title>
        <meta name="description" charSet="UTF-8" content="Welcome to my Portfolio website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen mx-auto max-w-2xl flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;