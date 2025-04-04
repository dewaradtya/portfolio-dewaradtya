import FooterBrand from "./FooterBrand";
import FooterCallToAction from "./FooterCallToAction";
import FooterContent from "./FooterContent";
import FooterSocialLinks from "./FooterSocialLinks";

const Footer = () => {
    return (
      <footer className="bg-black">
        <div className="mx-auto px-8 py-6">
          <FooterContent />
          <FooterSocialLinks />
          <FooterBrand />
          <FooterCallToAction />
        </div>
      </footer>
    );
  };

  export default Footer;