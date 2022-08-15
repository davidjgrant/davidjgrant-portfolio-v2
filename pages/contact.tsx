import React from "react";
import ContactForm from "../components/contactForm";
import Layout from "../sections/Layout";

export default function App() {
  
  return (
      <Layout>
        <div className="h-36"></div>
        <div className="container mx-auto flex justify-between">
          <ContactForm />
        </div>
      </Layout>
  );
}

