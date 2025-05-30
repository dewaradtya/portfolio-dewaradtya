const FooterContactInfo = () => {
  return (
    <>
      <div className="space-y-6">
        <div>
          <p className="text-gray-500 mb-4 font-medium">Address</p>
          <p>
            Pasuruan, East Java, <br className="hidden md:block" />
            Indonesian
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-gray-500 mb-4 font-medium">Phone</p>
          <p>(+62) 81332611178</p>
        </div>
        <div>
          <p className="text-gray-500 mb-4 font-medium">Email</p>
          <p>dewarochman26@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default FooterContactInfo;
