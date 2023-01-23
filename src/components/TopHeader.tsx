import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

const TopHeader = () => {
  return (
    <div className="h-[26px] w-full bg-blSky-700 text-left font-poppins text-[13px] leading-5 text-white">
      <div className="box-border h-[26px]">
        <div className="absolute flex flex-row flex-wrap items-center justify-start gap-4 pl-6">
          <div className="flex flex-row items-center justify-start gap-1">
            <Icon icon={faPhone} />
            <span className="font-medium leading-[20px] underline-offset-4  hover:underline">
              1800 890 6250
            </span>
          </div>

          <div className="flex flex-row items-center justify-start gap-1">
            <Icon icon={faEnvelope} />
            <span className="font-medium leading-[20px] underline-offset-4  hover:underline">
              training@arrelic.com
            </span>
          </div>
        </div>

        <div className="absolute right-0 hidden h-[26px] w-[769.17px] lg:block">
          <div className="absolute flex flex-row flex-wrap items-center justify-start gap-[12px] py-0.5 px-0">
            <div className="flex flex-row items-start justify-start py-0 pr-[0.171875px] pl-0">
              <div className="relative font-medium leading-[20px] underline-offset-4  hover:underline">
                Career Centre
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-medium leading-[20px] underline-offset-4  hover:underline">
                Industries
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-medium leading-[20px] underline-offset-4  hover:underline">
                Resources
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-medium leading-[20px] underline-offset-4  hover:underline">
                Events
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-medium leading-[20px] underline-offset-4  hover:underline">
                Verify
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-medium leading-[20px] underline-offset-4  hover:underline">
                Credentials
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-medium leading-[20px] underline-offset-4  hover:underline">
                About
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-medium leading-[20px] underline-offset-4  hover:underline">
                Contact
              </div>
            </div>
          </div>
          <div className="absolute right-6 flex flex-row items-start justify-start gap-[1px] text-right">
            <div className="flex flex-row items-center justify-center border-r-[1px] border-l-[1px] border-solid border-whGray-500 py-1 px-3">
              <Icon icon={faMagnifyingGlass} size="lg" />
            </div>
            <div className="flex flex-row items-center justify-center border-r-[1px] border-solid border-whGray-500 py-[3px] px-3">
              <div className="relative font-medium leading-[20px]">Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
