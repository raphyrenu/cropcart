import Head from 'next/head'
import Link from 'next/link'


import FeaturesSection from '@/components/FeaturesSection'


import TestimonialsSection from '@/components/TestimonialsSection'
import FeaturedProductsSection from '@/components/FeaturedProductsSection'
import CTASection from '@/components/CTASection'
import HeroSection from '@/components/HeroSection'


export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Farmers' Marketplace</title>
        <meta name="description" content="Connect with local farmers for fresh, organic produce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='scroll'>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FeaturedProductsSection />
        <CTASection />

        
      </main>
      
    </div>
  )
}

