import Image from 'next/image';
import { Eye } from 'lucide-react';
import { Modal } from '@/shared/components';
import VideoEmbed from './video-embed';

interface Props {
  imgSrc: string;
  Title: string;
  viewCnt: string | number;
  date: string;
  videoLink: string;
}

export default function WiztvCard({
  imgSrc,
  Title,
  viewCnt,
  date,
  videoLink,
}: Props) {
  let stateText;
  let stateClass;
  return (
    <Modal
      triggerElement={
        <div
          className={`relative flex flex-col  text-gray-700 bg-white bg-clip-border rounded-xl w-10/12 hover:scale-110 hover:text-black hover:cursor-pointer`}
        >
          <p className="w-full px-4 flex justify-end font-extrabold text-darkBrown">
            <Eye className="mr-1" /> {viewCnt}
          </p>
          <div
            className={`relative h-64 mx-4 mt-1 overflow-hidden text-white bg-clip-border rounded-xl`}
          >
            <div
              className={`relative w-full h-full bg-white-300 overflow-hidden ${stateClass}`}
            >
              <div className="relative w-full h-full top-[0.5%] left-[0.5%]">
                <Image
                  src={imgSrc}
                  alt=""
                  fill
                  className="object-cover object-center transition-transform duration-200 ease-out transform hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          <div className="p-6">
            <h5 className="block mb-2 text-h2 font-bold antialiased font-semibold leading-snug tracking-normal text-slateGray hover:scale-110 hover:text-black">
              {Title}
            </h5>
            <p className="block font-sans antialiased font-light leading-relaxed text-inherit">
              {date}
            </p>
          </div>
        </div>
      }
      titleElement={Title}
      isClosedIcon={true}
      children={
        <div className="w-[85vw] h-[90%]">
          <VideoEmbed url={'https://www.youtube.com/embed/-SN_mPv90kU'} />
        </div>
      }
    />
  );
}
