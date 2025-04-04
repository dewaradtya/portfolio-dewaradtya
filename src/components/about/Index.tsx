import ProfileImage from './ProfileImage';
import AboutText from './AboutText';

const About = () => {
  return (
    <section id="about" className="py-24 text-black">
      <div className="relative">
        <div className="flex flex-col px-8">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight leading-none z-10 relative">DEWA RADITYA R</h1>

          <div className="flex flex-wrap md:flex-nowrap mt-4">
            <div className="w-full md:w-1/4 pr-4 z-10">
              <div className="mt-8 w-full max-w-xs">
                <ProfileImage src="/person2.jpg" alt="Group photo" width={300} height={350} />
              </div>
            </div>

            <div className="w-full md:w-2/4 -mt-16 md:-mt-28 z-0">
              <ProfileImage src="/me.png" alt="Designer portrait" width={600} height={700} />
            </div>

            <div className="w-full md:w-1/4 z-10 pl-4">
              <AboutText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;