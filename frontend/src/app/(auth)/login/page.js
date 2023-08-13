'use client'

import Navbar from '@/app/Components/Navbar'
import InputField from '@/app/Components/InputField'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const [postError, setPostError] = useState({
    status: false,
    msg: '',
  })
  const [credentials, setCred] = useState({
      userCred: '',
      password: '',
    }),
    [valid, setValid] = useState(true)

  const handleClick = () => {
    if (!credentials.userCred || !credentials.password) {
      setValid(false)
    } else {
      setValid(true)
      axios
        .post('http://localhost:8000/user/login/', { ...credentials })
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            setPostError({
              status: false,
              msg: 'User Logged In Successfully!!',
            })
            wait(100)
            router.push('/')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <main className="bg-[#202020] min-h-screen">
      <Navbar />
      <h1 className="pt-36 text-5xl text-center mx-auto">Welcome back!</h1>
      {!valid && (
        <div className=" border-red-700 border-2 text-red-700 text-center mx-auto mt-6 w-64">
          Both the fields are Required
        </div>
      )}
      {!postError.status && postError.msg && (
        <div className=" border-green-500 border-2 text-green-500 text-center mx-auto mt-6 w-64 text-xl">
          {postError.msg}
        </div>
      )}
      <div className="text-center mx-auto mt-14">
        <InputField
          label="Email / Username"
          type="text"
          onChange={(e) => {
            setCred({ ...credentials, userCred: e.target.value })
          }}
        />
      </div>
      <div className="text-center mx-auto mt-14">
        <InputField
          label="Password"
          type="password"
          onChange={(e) =>
            setCred({ ...credentials, password: e.target.value })
          }
        />
      </div>
      <div className="text-right mx-[37rem] mt-6">
        <Link href={'#'}>Forgot Password?</Link>
      </div>
      <div className="text-center mx-auto">
        <button
          type="submit"
          onClick={handleClick}
          className=" rounded-full h-11 bg-[#ae2929] w-52 text-xl mt-6"
        >
          Login
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
      <h1 className="mt-8 text-xl text-center mx-auto">
        No Account?{' '}
        <Link href={'/signup'} className="text-[#ae2929]">
          SignUp
        </Link>
      </h1>
    </main>
  )
}

export default Login
