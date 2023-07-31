import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Trending = () => {
  const trendList = [
    { number: 1, topic: 'BugBounty' },
    { number: 2, topic: 'BugBounty' },
    { number: 3, topic: 'BugBounty' },
    { number: 4, topic: 'BugBounty' },
    { number: 5, topic: 'BugBounty' },
    { number: 6, topic: 'BugBounty' },
    { number: 7, topic: 'BugBounty' },
    { number: 8, topic: 'BugBounty' },
    { number: 9, topic: 'BugBounty' },
  ]

  return (
    <div className="flex flex-col mt-14 min-h-full">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Image src="/trending.png" width={'30'} height={'30'}></Image>
          <p className="pl-3 text-xl">Trending Topics</p>
        </div>
        {trendList.map((trendTopic) => (
          <div className="flex flex-row py-4">
            <p className="text-[#bebebe] text-3xl my-auto mx-8">
              0x0{trendTopic.number}
            </p>
            <Button text={trendTopic.topic} bgColor="bg-[#ae2929]" href="#" />
          </div>
        ))}
      </div>
      <hr className=" bg-[#7a0000] h-0.5 border-0 w-80" />
      <div className="flex flex-col sticky top-20">
        <p className="text-xl my-6">Discover Other Topics</p>
        <div>
          <div className="float-left mx-1 mb-2">
            <Button text="BugBounty" bgColor="bg-[#ae2929]" href="#" />
          </div>
          <div className="float-left mx-1 mb-2">
            <Button text="BugBountyReconTool" bgColor="bg-[#ae2929]" href="#" />
          </div>
          <div className="float-left mx-1 mb-2">
            <Button text="BugBounty" bgColor="bg-[#ae2929]" href="#" />
          </div>
          <div className="float-left mx-1 mb-2">
            <Button text="BugBounty" bgColor="bg-[#ae2929]" href="#" />
          </div>
          <div className="float-left mx-1 mb-2">
            <button className={`rounded-full bg-[#ae2929] h-9 w-9`}>
              <Link className=" fit" href="#">
                <Image
                  src={'/search.svg'}
                  width={'20'}
                  height={'20'}
                  className="m-2"
                ></Image>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
