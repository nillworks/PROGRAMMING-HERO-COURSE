import logoFooter from '../../../../../../public/assets/logo-footer.png';

const Footer = () => {
  return (
    <footer className="py-10 mt-60 px-8 bg-footerColor text-white w-full">
      <div className="containers relative pt-20">
        {/* top Section*/}
        <div className="absolute -top-88 sm:-top-50 mt-20 w-full borders rounded-lg">
          <section className="containers rounded-lg  border-2 newsletterCard space-y-3 ">
            <h2 className="text-2xl sm:text-2xl font-bold text-black">
              Subscribe to our Newsletter
            </h2>
            <p className="text-[#131313]/70">
              Get the latest updates and news right in your inbox!
            </p>

            {/* Subscribe Button */}
            <div
              className="flex items-center  text-gray-500
              rounded-2xl max-w-max mx-auto gap-4 flex-col sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none bg-white text-gray-500 px-3 py-2 rounded-lg border border-gray-300"
              />
              <input
                type="submit"
                value="Subscribe"
                className="bgGradient px-3 py-2 rounded-lg text-black font-medium cursor-pointer"
              />
            </div>
          </section>
        </div>

        {/* center Section */}
        <div className="space-y-4 pt-20">
          {/* Footer Logo */}
          <div>
            <img
              src={logoFooter}
              alt="Footer Logo"
              className="mx-auto sm:mx-0"
            />
          </div>

          {/* Footer 3 Layout */}
          <div className="space-y-5 sm:flex items-center justify-between">
            {/* Left Footer */}
            <div className="space-y-2">
              <h2 className="font-medium text-lg">About Us</h2>
              <p>
                We are a passionate team <br /> dedicated to providing the best{' '}
                <br /> services to our customers.
              </p>
            </div>

            {/* center Footer */}
            <div className="flex items-center flex-col justify-self-start">
              <h2 className="font-medium text-lg">Quick Links</h2>

              <ol className="list-disc customGray">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ol>
            </div>

            {/* right Footer */}
            <div className="space-y-2 pb-10">
              <h2 className="font-medium text-lg">Subscribe</h2>
              <p>
                Subscribe to our newsletter for the <br /> latest updates.
              </p>

              {/* Subscribe Button */}
              <div
                className="flex items-center bg-white text-gray-500
              rounded-2xl max-w-max"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="outline-none bg-white text-gray-500 px-3 py-2 rounded-lg"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="bgGradient px-3 py-2 rounded-r-lg text-black font-medium cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t py-5 border-gray-600 text-center">
          <small className="text-center">
            <p> @2024 Shipon Roy All Rights Reserved.</p>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
