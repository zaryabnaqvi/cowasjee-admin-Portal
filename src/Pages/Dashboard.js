import { useEffect, useState } from "react";
import { Navbar, Button, Typography, Card, CardBody, CardFooter } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCalendar, faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { DrawerWithNavigation } from "../Components/Drawer";
import Logo from "../Components/Logo";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";

const Dashboard = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [counts, setCounts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/analytics");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCounts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error, e.g., redirect to error page
      }
    };

    if (!localStorage.getItem("token")) {
      navigate("/sign-in");
    } else {
      fetchData();
    }

    const handleScroll = () => {
      setScrolled(window.scrollY !== 0);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [navigate]);

  return (
    <>
          <Navbar
        className="sticky top-0 z-50 px-4 py-2 border-b border-gray-300 text-gray-900"
        shadow={scrolled}
        fullWidth
      >
        <div className="flex items-center justify-between">
          <div className="flex justify-center">
            <Button
              ripple={false}
              variant="text"
              className="active:bg-transparent hover:bg-transparent"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FontAwesomeIcon className="text-base" icon={faBars} />
            </Button>
            <Logo />
          </div>
          {/* <div>
            <div className="flex justify-center items-center">
              <Typography variant="h6">Username</Typography>
              <div>
                <div className="w-72">
                  <Select
                    className=" !border-transparent"
                    labelProps={{
                      className:
                        "before:content-none after:content-none border-none",
                    }}
                  >
                    <Option className="w-72">Profile</Option>
                    <Option className="w-72">Billing</Option>
                    <Option className="w-72">Logout</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Navbar>
      
      <DrawerWithNavigation open={open} setOpen={setOpen} />

      {/* Drawer component */}

      <main className="flex justify-center" onClick={() => setOpen(false)}>
        <div className="container">
          {/* Statistics section */}
          <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <StatCard icon={faCalendar} count={counts.Event} label="Events" />
                <StatCard icon={faStar} count={counts.Achievement} label="Achievements" />
                <StatCard icon={faEnvelope} count={counts.Notification} label="Notifications" />
                <StatCard icon={faGoogleScholar} count={counts.Faculty} label="Faculty Member" />

              </div>
            </div>
          </section>

          {/* Other sections */}
          <div className="container">
            {/* Cards and other components */}
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
};

const StatCard = ({ icon, count, label }) => (
  <div className="p-4 md:w-1/2 sm:w-1/2 w-full">
    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
      <FontAwesomeIcon icon={icon} className="text-red-900 w-12 h-12 mb-3 inline-block" />
      <h2 className="title-font font-medium text-3xl text-gray-900">{count}</h2>
      <p className="leading-relaxed">{label}</p>
    </div>
  </div>
);

export default Dashboard;
