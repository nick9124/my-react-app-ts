import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faFacebookF,
  faYoutube,
  faApple,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      {/* top footer start */}
      <article className="bg-blSky-600 pt-10 pb-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-row flex-wrap justify-between gap-4">
            <div className="basis-full sm:basis-[45%] md:basis-full lg:basis-1/6">
              <a href="#.">
                <img
                  src="https://reliabilityq.com/frontend/assets/img/logo-light.png"
                  alt="RealiabilityQ-Logo"
                />
              </a>
              <ul className="social-link list-unstyled mt-3 flex flex-row flex-wrap gap-5">
                <li>
                  <a href="#." rel="noreferrer" target="_blank">
                    <Icon icon={faLinkedin} size="xl"></Icon>
                  </a>
                </li>
                <li>
                  <a href="#." rel="noreferrer" target="_blank">
                    <Icon icon={faTwitter} size="xl"></Icon>
                  </a>
                </li>
                <li>
                  <a href="#." rel="noreferrer" target="_blank">
                    <Icon icon={faFacebookF} size="xl"></Icon>
                  </a>
                </li>
                <li>
                  <a href="#." rel="noreferrer" target="_blank">
                    <Icon icon={faYoutube} size="xl"></Icon>
                  </a>
                </li>
              </ul>
            </div>
            <div className="basis-full sm:basis-[45%] md:basis-[30%] lg:basis-1/6">
              <div className="linkBox">
                <h5>DISCOVER</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#.">Who we are</a>
                  </li>
                  <li>
                    <a href="#.">Leadership Team</a>
                  </li>
                  <li>
                    <a href="#.">Awards and Recognition</a>
                  </li>
                  <li>
                    <a href="#.">Alliance &amp; Partnerships</a>
                  </li>
                  <li>
                    <a href="#.">Arrelic Innovations</a>
                  </li>
                  <li>
                    <a href="#.">Arrelic Foundations</a>
                  </li>
                  <li>
                    <a href="#.">Newsroom</a>
                  </li>
                  <li>
                    <a href="#.">Resources</a>
                  </li>
                  <li>
                    <a href="#.">Code of Business Conduct</a>
                  </li>
                  <li>
                    <a href="#.">Arrelic Learning Centers</a>
                  </li>
                  <li>
                    <a href="#.">ALC Franchise</a>
                  </li>
                  <li>
                    <a href="#.">Become an instructor</a>
                  </li>
                  <li>
                    <a href="#.">Corporate training</a>
                  </li>
                  <li>
                    <a href="#.">Social Media</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-full sm:basis-[45%] md:basis-[30%] lg:basis-1/6">
              <div className="linkBox">
                <h5>INDUSTRY</h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-decoration-none text-deco text-gray-400 hover:text-white"
                      href="#."
                    >
                      Aerospace &amp; Defence
                    </a>
                  </li>
                  <li>
                    <a href="#.">Automobiles</a>
                  </li>
                  <li>
                    <a href="#.">Cement</a>
                  </li>
                  <li>
                    <a href="#.">Chemical</a>
                  </li>
                  <li>
                    <a href="#.">Facility Management</a>
                  </li>
                  <li>
                    <a href="#.">Financial Services</a>
                  </li>
                  <li>
                    <a href="#.">FMCG</a>
                  </li>
                  <li>
                    <a href="#.">Metal &amp; Mining</a>
                  </li>
                  <li>
                    <a href="#.">MSME &amp; Small Business</a>
                  </li>
                  <li>
                    <a href="#.">Oil &amp; Gas</a>
                  </li>
                  <li>
                    <a href="#.">Pharmaceuticals</a>
                  </li>
                  <li>
                    <a href="#.">Power</a>
                  </li>
                  <li>
                    <a href="#.">Pulp &amp; Paper</a>
                  </li>
                  <li>
                    <a href="#.">Public Sector</a>
                  </li>
                  <li>
                    <a href="#.">Transport &amp; Logistic</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-full sm:basis-[45%] md:basis-[30%] lg:basis-1/6">
              <div className="linkBox">
                <h5>CATEGORIES</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#.">Reliability engineering</a>
                  </li>
                  <li>
                    <a href="#.">Operation &amp; Maintenance</a>
                  </li>
                  <li>
                    <a href="#.">Health, Safety, Environment</a>
                  </li>
                  <li>
                    <a href="#.">Asset Management</a>
                  </li>
                  <li>
                    <a href="#.">Best Practice</a>
                  </li>
                  <li>
                    <a href="#.">ISO Series</a>
                  </li>
                  <li>
                    <a href="#.">Predictive Maintenance</a>
                  </li>
                  <li>
                    <a href="#.">Quality Management</a>
                  </li>
                  <li>
                    <a href="#.">Management &amp; Leadership</a>
                  </li>
                  <li>
                    <a href="#.">Machine Lubrications</a>
                  </li>
                  <li>
                    <a href="#.">Project Management</a>
                  </li>
                  <li>
                    <a href="#.">Emerging Technologies</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-full lg:basis-1/6">
              <div className="emailBx">
                <h5>
                  GET THE ENTIRE
                  <br />
                  E-LEARNING BROCHURE
                </h5>
                <form>
                  <div className="form-group my-3 flex flex-col">
                    <input
                      type="email"
                      className="inputOutline form-input"
                      placeholder="Email Address"
                    />
                  </div>
                  <button className="btnLink" type="submit">
                    Download
                  </button>
                </form>
                <div className="mt-8 flex flex-wrap gap-5 align-middle">
                  <h6 className="self-center">LEARN ON THE GO!</h6>
                  <a className="store" href="#.">
                    <Icon icon={faApple} size="xl"></Icon>
                  </a>
                  <a className="store" href="#.">
                    <Icon icon={faGooglePlay} size="lg"></Icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/*  top footer end  */}

      {/*  bottom footer start  */}
      <article className="mx-auto flex w-full flex-col bg-blSky-700">
        <ul className="ml-8 box-border flex list-none flex-row flex-wrap pt-2 pb-0">
          <li className="box-border border-r-[1px] border-solid border-whGray-500 pr-2">
            <a href="#." className="relative leading-[20px]">
              Privacy Policy
            </a>
          </li>

          <li className="box-border border-r-[1px] border-solid border-whGray-500  px-2">
            <a href="#." className="relative leading-[20px]">
              Terms of Use
            </a>
          </li>

          <li className="box-border border-r-[1px] border-solid border-whGray-500  px-2">
            <a href="#." className="relative leading-[20px]">
              Preventing Piracy
            </a>
          </li>

          <li className="box-border border-r-[1px] border-solid border-whGray-500  px-2">
            <a href="#." className="relative leading-[20px]">
              Refund Policy
            </a>
          </li>

          <li className="box-border border-r-[1px] border-solid border-whGray-500 px-2">
            <a href="#." className="relative leading-[20px]">
              Trademarks
            </a>
          </li>

          <li className="box-border border-r-[1px] border-solid border-whGray-500  px-2">
            <a href="#." className="relative leading-[20px]">
              Patents
            </a>
          </li>

          <li className="box-border  px-2">
            <a className="relative leading-[20px]" href="#.">
              Address & TAX ID
            </a>
          </li>
        </ul>

        <p className="ml-8 mb-2 flex flex-row flex-wrap text-[13px] font-medium leading-[21px] text-whGray-500">
          © 2022 Arrelic Reliability Private Limited. All Rights Reserved.
        </p>
      </article>
      {/* bottom footer end */}
    </footer>
  );
};

export default Footer;
