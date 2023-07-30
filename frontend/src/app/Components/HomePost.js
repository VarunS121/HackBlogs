import Image from 'next/image'

const HomePost = () => {
  return (
    <div className="grid grid-flow-col grid-cols-[650px_300px] grid-rows-4 gap-x-16 gap-y-2 items-center">
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
      <div className="row-span-1"></div>
      <div className="row-span-4">
        <Image src={'/MainBlogImg.png'} width={'300'} height={'300'}></Image>
      </div>
    </div>
  )
}

export default HomePost
