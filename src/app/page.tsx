import Image from "next/image";
import Link from "next/link";
import socialLinks from "./constants";

interface ISocialLinks {
  name: string;
  url: string;
  key: string;
}

export default function Home(): JSX.Element {
  return (
    <main className="w-screen h-[100svh] sm:h-screen grid place-items-center bg-zinc-950">
      {/* card container */}
      <div className="w-[300px] sm:w-[260px] min-h-80 bg-zinc-900/50 rounded-lg flex flex-col items-center p-5 gap-y-3 shadow-lg">
        {/* profile image */}
        <div className=" w-20 aspect-square rounded-[50%] bg-zinc-800/10 relative overflow-hidden border border-zinc-800/60 hover:border-lime-400">
          <Image
            src="/avtar.png"
            loading="lazy"
            width={80}
            height={80}
            alt="profile Image"
          />
        </div>
        {/* user name and address */}
        <div className="text-center">
          <h3 className=" text-[18px] text-zinc-400">Sudhir Gadpayle</h3>
          <p className=" text-lime-400 text-[11px]">London, United Kingdom</p>
        </div>
        {/* user proffession */}
        <p className=" text-center text-zinc-400 text-[10px]">
          <q>Front-end developer and avid reader.</q>
        </p>
        {/* social links */}
        <div className=" w-full h-auto flex flex-col items-center gap-y-2 mb-2">
          {socialLinks.map(
            ({ name, url, key }: ISocialLinks): JSX.Element => (
              <Link
                href={url}
                key={key}
                className={`w-full bg-zinc-800/50 text-center py-1.5 text-sm text-zinc-400/60 rounded-md border border-zinc-700/70 hover:bg-lime-400 hover:border-lime-100 hover:text-zinc-950 capitalize shadow-sm transition-all ease-linear`}
              >
                {name}
              </Link>
            )
          )}
        </div>
      </div>
    </main>
  );
}
