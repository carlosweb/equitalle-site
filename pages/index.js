import Head from 'next/head'
import SectionInfoLeft from '../comps/section_info_left'
import SectionInfoRight from '../comps/section_info_right'
import SectionFeature from '../comps/SectionFeatures'

export default function Home() {
  return (
    <div name="about">
    <SectionInfoRight 
      title='We Believe'
      paragrafo='That managing your real estate investments should be simple andintuitive. 
      Owning your property should be easy, as well asdistributing prots and nding liquidity in your property equity.
      '
      img='Group 2.svg'
    />
    

    <SectionInfoLeft 
      title='We allow'
      paragrafo='Property owners and investors to create their own portfolio,overseeing ownerhip in a digital ledger. 
      We grant to administratorsexpense and revenues management in a single or multipleproperty ventures.
      Digital documents and e-signature streamline legal requirementsand, with operating rules that reect 
      your needs, you can automateprot distributions.
      '
      img='Group 3.svg' 
    />

    <SectionInfoRight 
      title='We are'
      paragrafo='A Fintech for real estate equity management. We optimizeportfolios and streamlined prot payout, 
      by helping you takecontrol of your properties ownership distribution.
      '
      img='Group 5.svg' 
    />

    <SectionFeature />
    </div>

    
  )
}
