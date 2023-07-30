import Image from 'next/image'
import Button from './Button'

const MainBlog = () => {
  return (
    <div className="grid grid-flow-col grid-cols-[650px_500px] grid-rows-4 relative pt-32 pb-14 gap-x-24 mx-auto justify-center w-9/12">
      <div className="row-span-4 m-0 p-0">
        <Image
          src={'/MainBlogImg.png'}
          width={'650'}
          height={'600'}
          style={{ marginRight: '0px' }}
        ></Image>
      </div>
      <div className="row-span-1 self-center justify-self-stretch">
        <div className="flex flex-row">
          <Image
            src="/MainAuthorPic.png"
            width={'50'}
            height={'50'}
            className=" rounded-full"
          ></Image>
          <div className="basis-35 align-middle text-center m-auto mr-0 ml-5">
            Barack Obama
          </div>
          <div className="text-[#bebebe] basis-10 align-middle text-center m-auto mx-0">
            •
          </div>
          <div className="text-[#bebebe] basis-30 align-middle text-center m-auto mx-0">
            Jul 17
          </div>
          <div className="text-[#bebebe] basis-10 align-middle text-center m-auto mx-0">
            •
          </div>
          <div className="text-[#bebebe] basis-35 align-middle text-center m-auto ml-0">
            4 min read
          </div>
        </div>
      </div>
      <div className="text-3xl row-span-1 self-center justify-self-center">
        Thank You to America’s Librarians for Protecting Our Freedom to Read
      </div>
      <div className="text-[#bebebe] text-xl row-span-1 self-center justify-self-center">
        <p>
          I wrote a letter thanking librarians across the country for everything
          they’re doing to protect our freedom to read.
        </p>
      </div>
      <div className="row-span-1 self-center justify-self-stretch">
        <div className="">
          <div className="float-left scale-90">
            <Button href="#" bgColor="bg-[#626262]" text="President" />
          </div>
          <div className="float-left scale-90">
            <Button href="#" bgColor="bg-[#626262]" text="America" />
          </div>
          <div className=" float-right scale-[1.1]">
            <Button href="#" bgColor="bg-[#ae2929]" text="Read More" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBlog
