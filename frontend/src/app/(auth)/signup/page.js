'use client'

import Navbar from '@/app/Components/Navbar'
import InputField from '@/app/Components/InputField'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'

const SignUp = () => {
  const emailRegEx = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)
  const usernameRegEx = new RegExp(/^[A-Za-z][A-Za-z0-9_.]{7,29}$/)
  const passRegEx = new RegExp(
    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/
  )

  const [valid, setValid] = useState(false)
  const [credentials, setCred] = useState({
    email: '',
    username: '',
    password: '',
    confirmPass: '',
  })
  const [errors, setErrors] = useState({})

  const validate = (fieldName, value) => {
    if (fieldName === 'email') {
      if (!value) {
        setErrors({ ...errors, email: 'This field is Required' })
        return false
      } else if (!emailRegEx.test(value)) {
        setErrors({ ...errors, email: 'Invalid Email' })
        return false
      } else {
        return true
      }
    } else if (fieldName === 'username') {
      if (!value) {
        setErrors({ ...errors, username: ['This field is Required'] })
        return false
      } else if (!usernameRegEx.test(value)) {
        setErrors({
          ...errors,
          username: [
            'Username should only contain alphnumeric, underscore and period(.)',
            'It should start with an alphabet',
            'It should be 8-30 characters long',
          ],
        })
        return false
      } else {
        return true
      }
    } else if (fieldName === 'password') {
      if (!value) {
        setErrors({ ...errors, password: 'This field is Required' })
        return false
      } else if (!passRegEx.test(value)) {
        setErrors({
          ...errors,
          password:
            'Password must contain minimum eight characters, at least one letter, one number and one special character',
        })
        return false
      } else {
        return true
      }
    }
  }

  const handleChange = (fieldName, value) => {
    if (fieldName === 'email') {
      if (validate('email', value)) {
        setCred({ ...credentials, email: value })
        setErrors({ ...errors, email: '' })
      }
    } else if (fieldName === 'username') {
      if (validate('username', value)) {
        setCred({ ...credentials, username: value })
        setErrors({ ...errors, username: '' })
      }
    } else if (fieldName === 'password') {
      if (validate('password', value)) {
        setCred({ ...credentials, password: value })
        setErrors({ ...errors, password: '' })
      }
    } else if (fieldName === 'confirmPass') {
      if (value !== credentials.password) {
        setErrors({ ...errors, confirmPass: 'Should match the Password' })
      } else {
        setErrors({ ...errors, confirmPass: '' })
        setCred({ ...credentials, confirmPass: value })
      }
    }
  }

  const handleClick = () => {
    console.log(credentials)
    axios
      .post('http://localhost:8000/user/signup/', {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (
      errors.email ||
      errors.username ||
      errors.password ||
      errors.confirmPass ||
      !credentials.email ||
      !credentials.username ||
      !credentials.password ||
      !credentials.confirmPass
    ) {
      setValid(false)
    } else {
      setValid(true)
    }
    console.log(valid)
  })

  useEffect(() => {
    console.log(credentials)
  }, [credentials])

  return (
    <main className="bg-[#202020] min-h-screen">
      <Navbar />
      <h1 className="pt-36 text-5xl text-center mx-auto">Join HackBlogs!</h1>
      <div className="text-center mx-auto mt-14">
        <InputField
          label="Email"
          type="text"
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {errors.email && (
          <span className=" text-red-700 mt-2">{errors.email}</span>
        )}
      </div>
      <div className="text-center mx-auto mt-14">
        <InputField
          label="Username"
          type="text"
          onChange={(e) => handleChange('username', e.target.value)}
        />
        {errors.username && (
          <span className=" text-red-700 mt-2">
            <ul>
              {errors.username.map((line) => (
                <li key={errors.username.indexOf(line)}>{line}</li>
              ))}
            </ul>
          </span>
        )}
      </div>
      <div className="text-center mx-auto mt-14">
        <InputField
          label="Password"
          type="password"
          onChange={(e) => handleChange('password', e.target.value)}
        />
        {errors.password && (
          <span className=" text-red-700 mt-2">{errors.password}</span>
        )}
      </div>
      <div className="text-center mx-auto mt-14">
        <InputField
          label="Confirm Password"
          type="password"
          onChange={(e) => handleChange('confirmPass', e.target.value)}
        />
        {errors.confirmPass && (
          <span className="text-red-700 mt-2">{errors.confirmPass}</span>
        )}
      </div>
      <div className="text-center mx-auto">
        <button
          type="submit"
          className=" rounded-full h-11 bg-[#ae2929] w-52 text-xl mt-8"
          onClick={() => {
            if (valid) {
              handleClick()
            }
          }}
        >
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

export default SignUp
