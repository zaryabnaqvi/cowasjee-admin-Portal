import { useEffect, useState } from "react";
import {
  Navbar,
  Button,
  Input,
  Typography,
  Card,
  CardBody,
  CardFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import Logo from "../Components/Logo";
import { DrawerWithNavigation } from "../Components/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAdd } from "@fortawesome/free-solid-svg-icons";
import { DefaultTable } from "../Components/Table";
import Example from "../Components/LineChart";
import Footer from "../Components/Footer";
import { AchievementTable } from "../Components/AchievementTable";
import PieChart from "../Components/PieChart";
import { Link, useNavigate } from "react-router-dom";

const ManageAchievement = () => {
  const [achievements, setAchievements] = useState([]);
  const d = new Date();
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(todayDate);

  useEffect(() => {

    document.addEventListener("scroll", () => {
      setScrolled(window.scrollY !== 0);
    });
  }, [scrolled]);

  useEffect(() => {

    fetch('https://nedmob1.neduet.edu.pk:8080/achievement')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Sort achievements by year
        const sortedAchievements = data.sort((a, b) => a.year - b.year);
        // Set the fetched data to the state
        setAchievements(sortedAchievements);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, [])

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


      <main onClick={() => setOpen(false)}>
        <div className=" flex flex-col lg:flex-row mt-10 w-4/5 mx-auto justify-between items-center">
          <Typography
            variant="h4"
            className="self-center sm:self-start font-semibold text-[#323226] "
          >
            All the Posted Achievements
          </Typography>
          <div className="flex flex-col lg:flex-row-reverse mt-5 md:mt-0 self-center sm:self-end">
            {/* <div>
              <Input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className=" !border-t-blue-gray-200 focus:!border-red-500 mb-1"
                color="amber"
                labelProps={{
                  className:
                    "before:content-none after:content-none border-none",
                }}
              />
            </div> */}
            <Link to="/create/Achievement">
              <div className="self-center sm:self-end md:w-auto">
                <Button className="mr-0 md:mr-3 mt-3 lg:mt-0 ">
                  <FontAwesomeIcon className="mr-2" icon={faAdd} />
                  New Post
                </Button>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <AchievementTable />
        </div>
        {/* <div className="graphs_sec mb-10 flex flex-col md:flex-row mt-10 w-4/5 mx-auto">
          <div className="w-full md:w-6/12">
            {
              !(achievements.length === 0) && <PieChart data={achievements} details="Achievements Posted in Years" />
            }         
          </div> */}
        {/* <div className="mt-5 md:mt-0 md:ml-5 flex justify-between flex-col w-full md:w-6/12">
            <Card>
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-2 font-semibold text-[#323226]"
                >
                  Instruction
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
            <Card className="mt-5 md:mt-0">
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-2 font-semibold text-[#323226]"
                >
                  Guidelines for Uploads
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div> */}
        {/* </div> */}
        <div className="graphs_sec mb-10 flex flex-col md:flex-row mt-10 w-4/5 mx-auto">
          <div className="w-full w-12/12">
            {
              !(achievements.length === 0) && <PieChart data={achievements} details="Achievements Posted in Years" />
            }
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default ManageAchievement;
