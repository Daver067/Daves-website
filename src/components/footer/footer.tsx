import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface Footer {}
const Footer: React.FC<Footer> = ({}) => {
  const router = useRouter();

  return (
    <div className=" mt-10 bg-tertiary-color min-h-[10vh] w-full p-5 font-poppins ">
      <div className="flex justify-center">
        <div className="">
          <h3 className="text-center text-xl mb-3 underline decoration-1 underline-offset-4 ">
            Socials
          </h3>
          <div className="flex  gap-10">
            <div className="flex flex-col gap-2">
              <a
                href="https://www.facebook.com/dave.diemert"
                className="hover:text-text-color-hovering"
              >
                <div className="flex  ">
                  <FaFacebook className="my-auto" />
                  <h3 className="pl-3">Facebook</h3>
                </div>
              </a>
              <a
                href="https://www.instagram.com/davediemert/"
                className="hover:text-text-color-hovering"
              >
                <div className="flex">
                  <FaInstagram className="my-auto" />
                  <h3 className="pl-3">Instagram</h3>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/dave-diemert-a47135306/"
                className="hover:text-text-color-hovering"
              >
                <div className="flex ">
                  <FaLinkedin className="my-auto" />
                  <h3 className="pl-3">LinkedIn</h3>
                </div>
              </a>
              <a
                href="https://github.com/Daver067"
                className="hover:text-text-color-hovering"
              >
                <div className="flex">
                  <FaGithub className="my-auto" />
                  <h3 className="pl-3">Github</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
