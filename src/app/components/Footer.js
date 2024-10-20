import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="bg-blue-900 text-white py-8 w-full bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/footer-bg.png")' }} // Replace with your image path
    >
      <div className="max-w-screen px-4 lg:px-32 md:px-24 lg:py-8">
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/images/footer-logo.png"
            alt="Footer Logo"
            width={100}
            height={50}
          />
        </div>
        <div className="grid lg:grid-cols-12 md::grid-cols-1 gap-4">
          <div className="lg:col-span-1 col-span-2 p-4">
            <h4 className="font-bold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-footer">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-footer">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-footer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 col-span-3 p-4">
            <div>
              <h4 className="font-bold mb-4">CONTACT</h4>
              <div className="space-y-2 mb-3">
                <p className="text-footer">Phone</p>
                <a
                  href="tel:+2347088073128"
                  className="block mb-4 text-white hover:underline font-bold"
                >
                  +234 708 807 3128
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-footer">Address</p>
                <p className="text-sm font-bold">
                  16, Oginigbe Close, Upsten Close
                </p>
              </div>
            </div>
          </div>

          {/* Add padding-right and border */}
          <div className="lg:col-span-5 col-span-2 p-4 pr-6 pb-8 border-b lg:border-b-0 border-footer sm:border-r-0 lg:border-r">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2">CONSUMER ADVISORY</h4>
                <div className="space-y-2">
                  <p className="">
                    These statements have not been evaluated by the Food and
                    Drug Administration. This product is not intended to
                    diagnose, treat, cure, or prevent any disease. This product
                    should be used only as directed on the label. All trademarks
                    and copyrights are property of their respective owners and
                    not affiliated with nor do they endorse this product.
                    Results may vary.
                  </p>

                  <p className="">
                    By using our website or product, you agree to follow our
                    <br />{" "}
                    <span className="text-socials">terms of service.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Add padding-left */}
          <div className="col-span-3 p-4">
            <div className="space-y-5">
              <h4 className="font-bold mb-4">CONTACT</h4>
              <p className="text-footer">
                Feel free to get in touch with us via email
              </p>
              <h3 className="text-2xl font-bold">hello@sleepstiq.com</h3>

              <div className="flex justify-start items-center gap-2">
                <p>
                  <Image
                    src="/images/fb.png"
                    alt="Facebook"
                    width={25}
                    height={25}
                  />
                </p>
                <p>
                  <Image
                    src="/images/x.png"
                    alt="Twitter"
                    width={25}
                    height={25}
                  />
                </p>
                <p>
                  <Image
                    src="/images/gplus.png"
                    alt="Google Plus"
                    width={25}
                    height={25}
                  />
                </p>
                <p>
                  <Image
                    src="/images/link.png"
                    alt="LinkedIn"
                    width={25}
                    height={25}
                  />
                </p>
              </div>

              <p className="text-xs text-footer">
                © 2020@sleepstiq. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

