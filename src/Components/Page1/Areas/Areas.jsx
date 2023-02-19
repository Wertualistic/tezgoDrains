import React from "react";

function Areas() {
  return (
    <div className="flex flex-col items-center justify-center mt-[80px]">
      <h1 className="text-[40px] text-[#003060] font-[700]">
        OUR SERVICE AREAS
      </h1>
      <p className="text-[18px] text-[#1E1E1E] font-[300]">
        Proudly serving the Wealden area, please call us on 0800 669 6492
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6139268.312834856!2d60.08435075652733!3d41.29385938324349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sO%60zbekiston!5e0!3m2!1suz!2s!4v1676803945380!5m2!1suz!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-[100%] h-[80vh] mt-[40px]"
      />
    </div>
  );
}

export default Areas;
