import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactForm from "../components/contactForm";
import FeaturedTextBanner from "../components/featuredTextBanner";
import SectionTitle from "../components/sectionTitle";
import Socials from "../components/socials";
import Layout from "../sections/Layout";
import imageLoader from "../utils/imageHandler";
import { getContactPage } from "./api";

interface Props {
  contactPage;
}

const contact: NextPage<Props> = ({ contactPage: { title, shortDescription }}) => {
  
  return (
      <Layout>
        <div className="h-36"></div>
        <div className="container mx-auto flex flex-col lg:flex-row justify-between px-6 xl:px-0">
          <div className="flex flex-col w-full sm:w-[42rem] mx-auto text-center lg:text-left px-2">
            <h1 className="mb-4 font-bold text-2xl">{title}</h1>
            <p className="mb-6">{shortDescription}</p>
            <ContactForm />
          </div>
          <div className="flex flex-col w-full sm:w-[42rem] mx-auto text-center px-2">
            <FeaturedTextBanner />
            <div className="flex flex-col md:grid lg:block grid-rows-2 grid-flow-col gap-6 md:gap-4 my-8 md:my-12 lg:my-0">
              <div className="flex flex-col justify-center items-center order-2 md:order-1 px-4 sm:px-0 lg:my-16">
                <h3 className={`font-bold text-lg capitalise text-transparent bg-clip-text green-blue-gradient`}>Email</h3>
                <Link href={'mailto:hello@davidjgrant.com'}>
                  <a className="my-4 font-medium text-2xl">hello@davidjgrant.com</a>
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center order-1 md:order-2 px-4 sm:px-0 lg:my-16">
                <h3 className={`font-bold text-lg capitalise text-transparent bg-clip-text green-blue-gradient`}>Socials</h3>
                <Socials />
              </div>
              <div className="row-span-2 col-span-2 flex flex-col justify-center items-center order-3 px-4 sm:px-0 lg:my-16">
                <h3 className={`font-bold text-lg capitalise text-transparent bg-clip-text green-blue-gradient mb-4`}>Remote Location</h3>
                <Image
                  className='bg-white'
                  loader={imageLoader}
                  src='/assets/logo-gradient-empty-small.png'
                  alt="Banner"
                  width={200}
                  height={125}
                />
                <p className="mt-4">Bristol, UK</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [ contactPage ] = await getContactPage() ?? []
  
  return {
    props: { contactPage }
  }
}

export default contact

