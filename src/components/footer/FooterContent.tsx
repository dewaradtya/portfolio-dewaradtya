import FooterContactInfo from "./FooterContactInfo";
import FooterIntro from "./FooterIntro";

const FooterContent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      <FooterIntro />
      <FooterContactInfo />
    </div>
  );
};

export default FooterContent;