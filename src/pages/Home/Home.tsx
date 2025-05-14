import { Fragment } from 'react'
import './Home.scss'
import Header from '../../components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Works from '@/components/Works'
import Cases from '@/components/Cases/Cases'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
const Home = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <Features />
            <Works />
            <Cases />
            <Pricing />
            <Faq />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default Home