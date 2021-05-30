import Head from 'next/head'
import SectionInfoLeft from '../comps/Section_info_left'
import SectionInfoRight from '../comps/Section_info_right'
import SectionFeature from '../comps/SectionFeatures'
import SectionAbout from '../comps/SectionAbout'

export default function Home() {
  return (
  
    <div>
      <SectionAbout />

      <SectionInfoRight
        title='We Believe'
        paragrafo='That managing your real estate investments should be simple and intuitive. 
      Owning your property should be easy, as well as distributing prots and funding liquidity in your property equity.
      '
        img='Designinspirationpana.svg'
      />


      <SectionInfoLeft
        title='We allow'
        paragrafo='Property owners and investors to create their own portfolio, overseeing ownerhip in a digital ledger. 
      We grant to administrators expense and revenues management in a single or multiple property ventures.
      Digital documents and e-signature streamline legal requirementsand, with operating rules that reect 
      your needs, you can automateprot distributions.
      '
        img='Housesbro.svg'
      />

      <SectionInfoRight
        title='We are'
        paragrafo='A Fintech for real estate equity management. We optimize portfolios and streamlined prot payout, 
      by helping you take control of your properties ownership distribution.
      '
        img='selecthouseBro.svg'
      />

      <SectionFeature />
    </div>
  )
}
