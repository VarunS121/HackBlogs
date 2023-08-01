import Image from 'next/image'
import Link from 'next/link'
import { Numans } from 'next/font/google'
import Button from './Button'

const numansFont = Numans({
  weight: '400',
  subsets: ['latin'],
})

const Navbar = () => {
  return (
    <div
      className={`navbar bg-white ${numansFont.className} fixed w-full z-10`}
    >
      <ul className="flex flex-row content-center">
        <li className="grow ml-10 w-40 relative">
          <Image src="/b-logo.png" width="140" height="140"></Image>
        </li>
        <li className="text-black text-center flex-none m-auto w-28">
          <Link href="/">Home</Link>
        </li>
        <li className="text-black text-center flex-none m-auto w-32">
          <Link href="#">Write</Link>
        </li>
        <li className="flex-none m-auto w-32">
          <Button text="Login" bgColor="bg-[#ae2929]" href="/login" />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
