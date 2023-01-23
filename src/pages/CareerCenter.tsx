import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import Footer from '../components/Footer';

import FormSelect from '../components/FormSelect';
import TabSection from '../components/TabSection';

const CareerCenter = () => {
  return (
    <>
      <header className="flex flex-wrap bg-gray-50">
        <TopHeader />
        <MainHeader />
      </header>

      <HeroSection
        heroTitle="Career Center"
        heroDescription="The RealiabilityQ Career Center is filled with hundreds of
        opportunities"
      />

      <section className="S2">
        <article className="container mx-auto px-4">
          <aside className="flex flex-col justify-between gap-4 align-middle sm:flex-row">
            <input
              className="inputOutline form-input block w-full rounded sm:w-[30%] lg:w-1/5"
              type="search"
              placeholder="Enter Job-Title/Skills"
            />

            <FormSelect />

            <button
              className="btnLink form-control block w-full sm:w-[30%] lg:w-1/5"
              type="button"
            >
              SEARCH
            </button>
          </aside>
        </article>
      </section>

      <TabSection />

      <section className="S4">
        <div className="container mx-auto px-4">
          <article className="flex w-full flex-col justify-around gap-3 md:flex-row">
            <aside className="sm:basis-[40%]">
              <div className="">
                <h4 className="text-xl font-semibold text-blSky-500">JOB SEEKERS</h4>

                <h6 className="mt-4 mb-2 font-semibold text-blSky-100">
                  JOB SEEKER RESOURCES FOR QUALITY PROFESSIONALS
                </h6>

                <span className="text-base">
                  <p className="text-justify">
                    A career in quality is about using managerial, analytical and
                    business-based skill sets to improve the way an organization
                    functions. When you work in quality, you contribute to an
                    organization’s success by:
                  </p>
                  <ol className="">
                    <li className="">Improving processes and systems</li>
                    <li className="">Identifying and meeting customer needs</li>
                    <li className="">Reducing costs</li>
                    <li className="">Assuring a high quality of product or service</li>
                  </ol>
                </span>

                <div className="mt-4 flex flex-col gap-2 xs:flex-row">
                  <a className="btnLink" href="#.">
                    Find Opportunity
                  </a>
                  <a className="btnLink" href="#.">
                    Create Catagory
                  </a>
                </div>
              </div>
            </aside>

            <div className="sm:basis-[50%]">
              <img
                className="w-full max-w-screen-md"
                alt=""
                src="/assets/jobseeker-section@2x.png"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="S5">
        <div className="container mx-auto px-4">
          <article className="flex w-full flex-col justify-around gap-3 md:flex-row">
            <div className="basis-auto sm:basis-[50%]">
              <img
                className="w-full max-w-screen-md"
                alt=""
                src="/assets/employer-section@2x.png"
              />
            </div>

            <aside className="basis-auto sm:basis-[40%]">
              <h4 className="text-xl font-semibold text-blSky-500">EMPLOYERS</h4>

              <h6 className="mt-4 mb-2 font-semibold text-blSky-100">
                EMPLOYER RESOURCES FOR RECRUITING QUALITY PROFESSIONALS
              </h6>

              <span className="text-base">
                <p className="text-justify">
                  The ReliabilityQ Career Center is your number one resource for finding
                  highly-qualified quality professionals, capable of filling any open
                  position you may have. Through a partnership with the Engineering &
                  Science Career Network, ASQ gives you access to candidates across 37
                  associations in one convenient job board geared towards quality,
                  science, and engineering specializations.
                </p>
                <ol className="">
                  <li className="">Access a specialized market of jobseekers</li>
                  <li className="">
                    Browse more than 24,000 resumes while your posting is active
                  </li>
                  <li className="">Choose from a variety of options</li>
                  <li className="">
                    Customize a package that works best for your organization
                  </li>
                </ol>
              </span>

              <div className="mt-4 flex flex-col gap-2 xs:flex-row">
                <a className="btnLink" href="#.">
                  Find Talent
                </a>
                <a className="btnLink" href="#.">
                  View Pricing
                </a>
              </div>
            </aside>
          </article>
        </div>
      </section>

      <section className="S6">
        <article className="container mx-auto px-4 py-2">
          <h4 className="mb-4 text-xl font-semibold text-blSky-500">
            RECRUITMENT PROCESS
          </h4>
          {/* ****************** */}
          <aside className="flex flex-row flex-wrap justify-around">
            {/* Card-1 */}
            <span className="flex-col sm:basis-2/5 lg:basis-1/5">
              <Card
                cardTitle="Understand the specific requirement"
                cardImage="/assets/projectmgmtcard@2x.png"
              />
            </span>

            {/* d:visible_sm:hidden => Down-Arrow */}
            <span className="flex-col sm:hidden">
              <img className="w-full" src="/assets/arrowDown_sm.svg" alt="" />
            </span>

            {/* sm:visible => Left-Arrow */}
            <span className="hidden flex-col sm:block sm:basis-1/12 lg:basis-4/1">
              <img className="w-full" src="/assets/Left-Arrow.svg" alt="" />
            </span>

            {/* Card-2 */}
            <span className="flex-col sm:basis-2/5 lg:basis-1/5">
              <Card
                cardTitle="Develop JD & the Position Specification"
                cardImage="/assets/learningcard@2x.png"
              />
            </span>

            {/* d:visible_sm:hidden => Down-Arrow */}
            <span className="flex-col sm:hidden">
              <img className="w-full" src="/assets/arrowDown_sm.svg" alt="" />
            </span>

            {/* sm:visible_lg:hidden => Down-Arrow **** */}
            <span className="hidden flex-col sm:block lg:hidden">
              <img className="w-full" src="/assets/arrowDown_md.svg" alt="" />
            </span>

            {/* lg:visible => Left-Arrow */}
            <span className="hidden flex-col lg:block lg:basis-4/1">
              <img className="w-full" src="/assets/Left-Arrow.svg" alt="" />
            </span>

            {/* Card-3 */}
            <span className="flex-col sm:hidden sm:basis-2/5 lg:block lg:basis-1/5">
              <Card
                cardTitle="Preliminary Screening"
                cardImage="/assets/searchclientcard@2x.png"
              />
            </span>

            {/* Card-4 => sm:visible_lg:hidden */}
            <span className="hidden flex-col sm:block sm:basis-2/5 lg:hidden lg:basis-1/5">
              <Card
                cardTitle="Evaluation & Shortlist"
                cardImage="/assets/validationcard@2x.png"
              />
            </span>

            {/* d:visible_sm:hidden => Down-Arrow */}
            <span className="flex-col sm:hidden">
              <img className="w-full" src="/assets/arrowDown_sm.svg" alt="" />
            </span>

            {/* sm:visible => Left-Arrow */}
            <span className="hidden flex-col sm:block sm:basis-1/12 lg:basis-4/1">
              <img
                className="w-full sm:rotate-180 lg:rotate-0"
                src="/assets/Left-Arrow.svg"
                alt=""
              />
            </span>

            {/* Card-4 */}
            <span className="flex-col sm:hidden sm:basis-2/5 lg:block lg:basis-1/5">
              <Card
                cardTitle="Evaluation & Shortlist"
                cardImage="/assets/validationcard@2x.png"
              />
            </span>

            {/* Card-3 => sm:visible_lg:hidden */}
            <span className="hidden flex-col sm:block sm:basis-2/5 lg:hidden lg:basis-1/5">
              <Card
                cardTitle="Preliminary Screening"
                cardImage="/assets/searchclientcard@2x.png"
              />
            </span>
          </aside>
          {/* ****************** */}

          {/* ****************** */}
          <aside className="flex flex-row flex-wrap justify-around sm:justify-start lg:justify-end">
            {/* d:visible => Down-Arrow */}
            <span className="flex-col sm:block">
              <img className="w-full" src="/assets/arrowDown_sm.svg" alt="" />
            </span>
          </aside>
          {/* ****************** */}

          {/* ****************** */}
          <aside className="flex flex-row flex-wrap justify-around lg:flex-row-reverse">
            {/* Card-5 */}
            <span className="flex-col sm:basis-2/5 lg:basis-1/5">
              <Card
                cardTitle="Validation & Test"
                cardImage="/assets/testpassedcard@2x.png"
              />
            </span>

            {/* d:visible_sm:hidden => Down-Arrow */}
            <span className="flex-col sm:hidden">
              <img className="w-full" src="/assets/arrowDown_sm.svg" alt="" />
            </span>

            {/* sm:visible => Right-Arrow */}
            <span className="hidden flex-col sm:block sm:basis-1/12 lg:basis-4/1">
              <img
                className="w-full sm:rotate-180 lg:rotate-0"
                src="/assets/Right-Arrow.svg"
                alt=""
              />
            </span>

            {/* Card-6 */}
            <span className="flex-col sm:basis-2/5 lg:basis-1/5">
              <Card
                cardTitle="Client-Interview"
                cardImage="/assets/meetingroomcard@2x.png"
              />
            </span>

            {/* d:visible_sm:hidden => Down-Arrow */}
            <span className="flex-col sm:hidden">
              <img className="w-full" src="/assets/arrowDown_sm.svg" alt="" />
            </span>

            {/* sm:visible_lg:hidden => Down-Arrow ****  */}
            <span className="hidden flex-col sm:block lg:hidden">
              <img className="w-full" src="/assets/arrowDown_md.svg" alt="" />
            </span>

            {/* lg:visible => Right-Arrow */}
            <span className="hidden flex-col lg:block lg:basis-4/1">
              <img className="w-full" src="/assets/Right-Arrow.svg" alt="" />
            </span>

            {/* Card-7 */}
            <span className="flex-col sm:hidden sm:basis-2/5 lg:block lg:basis-1/5">
              <Card cardTitle="Offer Negotiation" cardImage="/assets/couponcard@2x.png" />
            </span>

            {/* Card-8 => sm:visible_lg:hidden */}
            <span className="hidden flex-col sm:block sm:basis-2/5 lg:hidden lg:basis-1/5">
              <Card cardTitle="Closure" cardImage="/assets/closeprogramcard@2x.png" />
            </span>

            {/* d:visible_sm:hidden => Down-Arrow */}
            <span className="flex-col sm:hidden">
              <img className="w-full" src="/assets/arrowDown_sm.svg" alt="" />
            </span>

            {/* sm:visible => Right-Arrow */}
            <span className="hidden flex-col sm:block sm:basis-1/12 lg:basis-4/1">
              <img className="w-full" src="/assets/Right-Arrow.svg" alt="" />
            </span>

            {/* Card-8 */}
            <span className="flex-col sm:hidden sm:basis-2/5 lg:block lg:basis-1/5">
              <Card cardTitle="Closure" cardImage="/assets/closeprogramcard@2x.png" />
            </span>

            {/* Card-7 => sm:visible_lg:hidden */}
            <span className="hidden flex-col sm:block sm:basis-2/5 lg:hidden lg:basis-1/5">
              <Card cardTitle="Offer Negotiation" cardImage="/assets/couponcard@2x.png" />
            </span>
          </aside>
          {/* ****************** */}
        </article>
      </section>

      <Footer />
    </>
  );
};

export default CareerCenter;
