import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Slider from "@/Components/Slider/Slider";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="container   mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#122033]">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default page;
