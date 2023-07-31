import Image from 'next/image'
import Button from './Button'

const HomePost = () => {
  return (
    <div className="grid grid-flow-col-dense grid-cols-[650px_300px] grid-rows-4 gap-x-12 items-center mb-4">
      <div className="flex flex-row row-span-1">
        <Image
          src="/MainAuthorPic.png"
          width={'40'}
          height={'40'}
          className=" rounded-full"
        ></Image>
        <p className="mx-5 py-2 text-center align-middle">Barack Obama</p>
      </div>
      <div className=" text-xl row-span-1">
        Thank You to America’s Librarians for Protecting Our Freedom to Read
      </div>
      <div className="text-[#bebebe] row-span-1">
        <p>
          I wrote a letter thanking librarians across the country for everything
          they’re doing to protect our freedom to read.
        </p>
      </div>
      <div className="row-span-1">
        <div className="flex flex-row">
          <div className="text-[#bebebe] basis-30 align-middle text-center m-auto mx-0">
            Jul 17
          </div>
          <div className="text-[#bebebe] basis-10 align-middle text-center m-auto mx-0">
            •
          </div>
          <div className="text-[#bebebe] basis-30 align-middle text-center m-auto mx-0">
            4 min read
          </div>
          <div className="text-[#bebebe] basis-10 align-middle text-center m-auto mx-0">
            •
          </div>
          <div className="basis-20 scale-[0.8]">
            <Button href="#" bgColor="bg-[#626262]" text="President" />
          </div>
        </div>
      </div>
      <div className="row-span-4">
        <Image src={'/MainBlogImg.png'} width={'300'} height={'300'}></Image>
      </div>
    </div>
  )
}

export default HomePost
