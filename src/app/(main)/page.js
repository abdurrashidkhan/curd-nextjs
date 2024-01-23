const Home = () => {
  return (
    <main>
      <div className="container mx-auto  px-2">
        <div className="w-full h-[100vh]">
          <div className="bg-[#2e2e2e] text-center capitalize">
            {/* header */}
            <h1 className="text-lg py-2">curd operation</h1>
          </div>
          {/* add Item */}
          <div className="w-[400px] h-auto bg-[#0a121d] px-4 mx-auto absolute top-[30%] left-[36%] rounded shadow-2xl py-14">
            <div className="text-center ">
              <div className="">
                <input
                  type="text"
                  placeholder="Enter item name "
                  className="px-2 py-2 rounded bg-[#1d183193] text-[#ffff]  shadow-2xl w-[98%] h-auto outline-none"
                />
              </div>
              <div className="">
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="7"
                  placeholder="Enter Your Item Description"
                  className="my-4 rounded bg-[#1d183193] text-[#ffff] px-2 shadow-2xl w-[98%] h-auto outline-none"
                ></textarea>
              </div>
              <div className="">
                <button className="bg-[#fb5200] w-[99%] rounded shadow-2xl py-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
