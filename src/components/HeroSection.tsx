interface IProps {
  heroTitle: string;
  heroDescription: string;
}

const HeroSection = ({ heroTitle, heroDescription }: IProps) => {
  return (
    <section className="container mx-auto">
      <aside className="flex flex-row justify-center p-[20px_0px_30px] md:p-[30px_0px_50px]">
        <div className="flex basis-9/12 flex-col gap-[16px] md:gap-[28px] lg:basis-2/3 lg:text-center">
          <h2 className="text-[22px] font-semibold leading-[29px] text-blSky-500 md:text-[36px] md:leading-[47px]">
            {heroTitle}
          </h2>
          <h2 className="text-[24px] font-semibold leading-[31px] text-blSky-100  md:text-[40px] md:leading-[54px]">
            {heroDescription}
          </h2>
        </div>
      </aside>
    </section>
  );
};

export default HeroSection;
