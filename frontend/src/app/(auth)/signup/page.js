'use client'

import Navbar from '@/app/Components/Navbar'
import InputField from '@/app/Components/InputField'
import Link from 'next/link'
import Image from 'next/image'

const Login = () => {
  const onChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <main className="bg-[#202020] min-h-screen">
      <Navbar />
      <h1 className="pt-36 text-5xl text-center mx-auto">Join HackBlogs!</h1>
      <div className="text-center mx-auto mt-14">
        <InputField
          label="Email"
          type="text"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="text-center mx-auto mt-14">
        <InputField
          label="Username"
          type="text"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="text-center mx-auto mt-14">
        <InputField
          label="Password"
          type="password"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="text-center mx-auto mt-14">
        <InputField
          label="Confirm Password"
          type="password"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="text-center mx-auto">
        <button className=" rounded-full h-11 bg-[#ae2929] w-52 text-xl mt-8">
          SignUp
        </button>
      </div>
      <div className="flex flex-row text-center mx-[30rem] mt-4">
        <hr className="align-center my-auto mx-4 w-[17rem] bg-[#ae2929] h-0.5 border-0" />
        <p>or</p>
        <hr className="align-center my-auto mx-4 w-[17rem] bg-[#ae2929] h-0.5 border-0" />
      </div>
      <div className="text-center mx-auto">
        <button className=" rounded-full h-11 bg-[#ae2929] w-72 text-xl mt-6">
          <div className="flex flex-row text-center">
            <Image
              src={'/GoogleLogo.svg'}
              width={'37'}
              height={'37'}
              className=" scale-75 mx-4"
            />
            <p className="text-center my-auto">SignIn with Google</p>
          </div>
        </button>
      </div>
      <h1 className="mt-8 pb-8 text-xl text-center mx-auto">
        Already a User?{' '}
        <Link href={'/login'} className="text-[#ae2929]">
          Login
        </Link>
      </h1>
    </main>
  )
}

export default Login
