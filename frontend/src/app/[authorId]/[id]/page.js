import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/Components/Navbar'
import Button from '@/app/Components/Button'

const BlogPage = () => {
  return (
    <main className="bg-[#202020] min-h-screen">
      <Navbar />
      <div className="pt-36 mx-[24.5rem] scale-[0.9]">
        <Button href="#" bgColor="bg-[#626262]" text="President" />
      </div>
      <h1 className="mt-2 mx-[27rem] text-4xl">
        Thank You to America’s Librarians for Protecting Our Freedom to Read
      </h1>
      <p className="text-[#bebebe] mx-[27rem] mt-2 text-xl">
        I wrote a letter thanking librarians across the country for everything
        they’re doing to protect our freedom to read.
      </p>
      <div className="flex flex-row mx-[27rem] mt-5">
        <Image
          src={'/MainAuthorPic.png'}
          width={'50'}
          height={'50'}
          className="rounded-full"
        />
        <div className="flex flex-col ml-3">
          <div className="flex flex-row">
            <div className="text-lg text-white">Barack Obama</div>
            <div className="text-[#bebebe] mx-2 text-center my-auto">•</div>
            <div className="text-center my-auto">
              <Link href="#" className="text-[#ae2929] text-center">
                Follow
              </Link>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="text-[#bebebe] text-sm">Jul 17</div>
            <div className="text-[#bebebe] text-sm mx-2 text-center my-auto">
              •
            </div>
            <div className=" text-[#bebebe] text-sm text-center my-auto">
              4 min read
            </div>
          </div>
        </div>
      </div>
      <hr className=" bg-[#7a0000] h-0.5 mx-[25rem] my-6 mb-10 border-0" />
      <Image
        src={'/MainBlogImg.png'}
        width={'700'}
        height={'350'}
        className=" align-middle mx-auto"
      />
      <p className="mx-[27rem] text-2xl/7 mt-10 font-serif tracking-wide">
        Extreme heat is a clear and present danger to physical and mental
        health, now and increasingly into the future. In this multi-part Special
        Report, Wise & Well writers — physicians, research scientists, mental
        health experts and journalists — get beyond the news to delve deeply
        into several aspects of heat’s effects on the human condition, from the
        obvious to the unexpected. Over the next two weeks, you’ll also learn
        ways the problem can be mitigated at the societal level, and what you
        can do to protect yourself and your loved ones. Why Extreme Heat Kills
        So Quickly Humans evolved to survive in a pretty narrow temperature
        range. When the body exceeds that range, it starts to shut down. Death
        can follow quickly, sometimes horrifically. The writer wishes she
        understood this better when she took a fateful hike recently on a hot
        summer day. Find out what she’s since learned reporting on the science
        of heat stroke and heat exhaustion, and what you need to know about this
        deadly force of nature. —By Kathleen Murphy
      </p>
    </main>
  )
}

export default BlogPage
