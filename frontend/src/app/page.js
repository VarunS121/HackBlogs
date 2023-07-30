import Image from 'next/image'
import Navbar from './Components/Navbar'
import HomePost from './Components/HomePost'
import MainBlog from './Components/MainBlog'
import { Secular_One } from 'next/font/google'

const secularFont = Secular_One({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  return (
    <main className={secularFont.className}>
      <Navbar />
      <MainBlog />
      <hr className=" bg-[#7a0000] h-0.5 mx-11 border-0" />
      <div className="mx-14 py-14">
        <HomePost />
      </div>
    </main>
  )
}
