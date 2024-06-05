const ApplyForm = () => {
  return (
    <form className="w-full max-w-[1000px] mx-auto bg-slate-200 rounded-[20px] h-[1600px] mb-20 p-9">
      <div className="flex items-center  gap-10 w-full">
        <div className=" w-full gap-2 flex flex-col">
          <label
            htmlFor="firstName"
            className="text-[20px] font-bold text-[#1E1E1E]"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder=""
            className="border border-[#A3A3A3] rounded-[10px] px-2 py-2 
                    w-full outline-none"
          />

          {/* <div>
                  {errors.firstName && touched.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </div> */}
        </div>
        <div className=" flex flex-col gap-2 w-full">
          <label
            htmlFor="lastName"
            className="text-[20px] font-bold text-[#1E1E1E]"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder=""
            className="border border-[#A3A3A3] rounded-[10px] px-2 py-2  w-full outline-none"
          />
          {/* <div>
                  {errors.lastName && touched.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                </div> */}
        </div>
      </div>
      <div className="flex items-center  gap-10 w-full">
        <div className=" w-full gap-2 flex flex-col">
          <label
            htmlFor="email"
            className="text-[20px] font-bold text-[#1E1E1E]"
          >
            EMAIL
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder=""
            className="border border-[#A3A3A3] rounded-[10px] px-2 py-2 
                    w-full outline-none"
          />

          {/* <div>
                  {errors.firstName && touched.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </div> */}
        </div>
        <div className=" flex flex-col gap-2 w-full">
          <label
            htmlFor="number"
            className="text-[20px] font-bold text-[#1E1E1E]"
          >
            PHONE NUMBER
          </label>
          <input
            type="number"
            id="phone-number"
            name="phone-number"
            placeholder=""
            className="border border-[#A3A3A3] rounded-[10px] px-2 py-2  w-full outline-none"
          />
          {/* <div>
                  {errors.lastName && touched.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                </div> */}
        </div>
      </div>
      <div className="flex flex-col  gap-10 w-full">
        <div className=" w-full gap-2 flex flex-col">
          <label
            htmlFor="firstName"
            className="text-[20px] font-bold text-[#1E1E1E]"
          >
            ADDRESS
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder=""
            className="border border-[#A3A3A3] rounded-[10px] px-2 py-2 
                    w-full outline-none"
          />

          {/* <div>
                  {errors.firstName && touched.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </div> */}
        </div>
        <div className="flex items-center  gap-10 w-full">
          <div className=" w-full gap-2 flex flex-col">
            <input
              type="text"
              id="email"
              name="email"
              placeholder=""
              className="border border-[#A3A3A3] rounded-[10px] px-2 py-2 
                    w-full outline-none"
            />
            <p>City</p>

            {/* <div>
                  {errors.firstName && touched.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </div> */}
          </div>
          <div className=" flex flex-col gap-2 w-full">
            <input
              type="number"
              id="phone-number"
              name="phone-number"
              placeholder=""
              className="border border-[#A3A3A3] rounded-[10px] px-2 py-2  w-full outline-none"
            />
            <p>State/Province</p>
            {/* <div>
                  {errors.lastName && touched.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                </div> */}
          </div>
        </div>
        <div className=" w-full gap-2 flex flex-col">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder=""
            className="border border-[#A3A3A3] rounded-[10px] px-2 py-2 
                    w-full outline-none"
          />
            <p>Zip Code</p>
          {/* <div>
                  {errors.firstName && touched.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </div> */}
        </div>
      </div>
    </form>
  );
};
export default ApplyForm;
