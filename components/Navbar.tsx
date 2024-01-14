
import Link from "next/link";
import { NavLinks } from "@/constant";
import Image from "next/image";


const Navbar = async () => {

  return (
    <nav className=" flexBetween  navbar bg-[url('/header-bg.png')] bg-cover">
      <div className=' flex-1 flex items-center justify-start  lg:justify-center xl:justify-center 2xl:justify-center  gap-10 '>
      <Link href='/'>
          <Image
          className="hidebg"
            src='/logos.png'
            width={40}
            height={30}
            alt='logo'
          />
          
        </Link>
      <a href="/profiles" className="text-[20px] font-bold">Profile</a>
       
        <ul className='xl:flex 2xl:flex   hidden gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text} >
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
