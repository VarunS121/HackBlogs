import Link from 'next/link'

const Button = (props) => {
  return (
    <button className={`rounded-full ${props.bgColor} h-8`}>
      <Link className=" p-5 my-5" href={props.href}>
        {props.text}
      </Link>
    </button>
  )
}

export default Button
