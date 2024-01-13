import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  const format  = (userName) => `@${userName}`

  return (
    <section className="App">
      <TwitterFollowCard 
        formatUserName={format} 
        isFollowing 
        userName="AlirezaFirouzja" 
        name="Alireza Firouzja"
      />

      <TwitterFollowCard 
        formatUserName={format} 
        isFollowing={false} 
        userName="GMJuditPolgar" 
        name="Judit Polgar"
      />

      <TwitterFollowCard 
        formatUserName={format} 
        isFollowing={false} 
        userName="Kasparov63" 
        name="Garry Kasparov"
      />
    </section>
  )
}