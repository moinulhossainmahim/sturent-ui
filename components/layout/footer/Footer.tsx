'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-muted pt-8 pb-4">
      <div className="container mx-auto px-6 lg:px-8 flex md:justify-center md:items-center justify-between flex-col md:flex-row">
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0 flex flex-col gap-2">
          <Image
            onClick={() => router.push('/')}
            src='/assets/sturent-logo.png'
            alt="logo"
            className="
              cursor-pointer
            "
            height={10}
            width={150}
          />
          <p><a href="mailto:hello@sturent.com" className='text-muted-foreground leading-6 hover:text-primary transition'>hello@sturent.com</a></p>
          <p><a href="tel:+8801631356933" className='text-lg font-bold'>+8801732748262</a></p>
          <p>Sector 13, Uttara, Dhaka</p>
        </div>
        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
          <h3 className="text-lg font-bold mb-2">Information</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-primary">About Us</a></li>
            <li><a href="#" className="hover:text-primary">Blog</a></li>
            <li><a href="#" className="hover:text-primary">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
          <h3 className="text-lg font-bold mb-2">Services</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-primary">Host Listings</a></li>
            <li><a href="#" className="hover:text-primary">Detailed Listings</a></li>
            <li><a href="#" className="hover:text-primary">Wishlist Management</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <p className="mb-4">Subscribe to our newsletter.</p>
          <form className="flex">
            <input
              type="email"
              className="w-full p-2 border rounded-l-md focus:outline-none"
              placeholder="Your email address"
            />
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="pb-2 pt-4 flex justify-center items-center">
        <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear().toString()} <span className="text-primary">stuRENT</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
