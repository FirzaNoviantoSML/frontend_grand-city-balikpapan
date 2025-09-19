import React from 'react'
import {getMetadata} from '@/api/metadata/getMetadata'
import {MetadataData} from "@/types/MetadataType"
import type {Metadata} from "next"
import type {Viewport} from 'next'
import ResidentialIndex from './component/ResidentialIndex'

export const viewport: Viewport = {
  themeColor: '#ffffff'
}

export async function generateMetadata({
    params,

}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
const { slug } = await params;
const data:MetadataData = await getMetadata("developments",slug)
const keywordsValue:string = data?.keywords?.map((item) => item.label).join(", ") || "Grand City Balikpapan"

const logoUrl = `/Logo_grandcitybalikpapan.png`;

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Grand City Balikpapan",
    "url": process.env.NEXT_PUBLIC_SITE_URL,
    "description": data?.description || "Selamat datang di Grand City Balikpapan",
    "publisher": {
      "@type": "Organization",
      "name": "Grand City Balikpapan",
      "logo": {
        "@type": "ImageObject",
        "url": logoUrl
      }
    }
  };

const title = data?.title || "Grand City Balikpapan";
const description = data?.description || "Selamat datang di Grand City Balikpapan";
const url = `${process.env.NEXT_PUBLIC_SITE_URL}`;
const ogImage =   data.image?.url ? `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL} ${data.image?.url}` : logoUrl ;
  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
    title,
    description,
    keywords: keywordsValue, // Kata kunci tambahan
    robots: "index, follow", // Memastikan halaman diindeks oleh Google
    alternates:{
      canonical:`${process.env.NEXT_PUBLIC_SITE_URL}`
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Grand City Balikpapan",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Grand City Balikpapan",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Kota Wisata",
        },
      ],
    },
    other:{
      "script:ld+json": JSON.stringify(jsonLd)
    }
  };
}



const Clusterpage = async ({ params }: {params:Promise<{ slug:string}>}) => {
  const {slug} = await params
  return (
    <div>
      <ResidentialIndex slug={slug} />
    </div>
  )
}

export default Clusterpage