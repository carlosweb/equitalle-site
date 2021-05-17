import Head from 'next/head'
import SectionInfoLeft from '../comps/section_info_left'
import SectionInfoRight from '../comps/section_info_right'
import SectionFeature from '../comps/SectionFeatures'

export default function Home() {
  return (
    <div>
    <SectionInfoRight 
      title='Why'
      paragrafo='We believe in a simple and central tool that consolidates all 
      investments in real estate where rules for distributing profi are clear and manageable. 
      Our main heart is on the fact that real estate investment should be easy and auto-explanatory.
      '
      img='Group 2.svg' 
    />

    <SectionInfoLeft 
      title='How?'
      paragrafo='We allow investors to create their own portfolio and shareholders, 
      define specific rules that reflect their operating agreements, summarizing the profits 
      distribution in a determined cycle.Our system grants the administrators the 
      capability to manage expenses and revenues in different granularities, from units to groups 
      of ventures. We digitalize the ledger, provide e-signature and automated payout distribution
      '
      img='Group 3.svg' 
    />

    <SectionInfoRight 
      title='Who are we?'
      paragrafo='A Fintech for real estate equity management with the goal to
      optimize investors portfolio management and facilitate equity distribution. 
      We intend to streamline profit payout defined on waterfall agreements and  
      simplify investor’s portfolio prediction for multi-investments.
      '
      img='Group 5.svg' 
    />

    <SectionInfoLeft 
      title='Actor?'
      paragrafo='Investor: Real Estate partners that are lending the money to companies in Real Estate Management
      Notary: Lawyers that settle agreements between Investors
      Real Estate Managers: Any company that manages or develop Real Estate ventures
      '
      img='Group 4.svg' 
    />


    <SectionFeature />
    </div>

    
  )
}
