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
import { faAdd, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { DefaultTable } from "../Components/Table";
import Example from "../Components/LineChart";
import Footer from "../Components/Footer";
import { NotificationTable } from "../Components/NotificationTable";
import LineGraph from "../Components/LineGraph";
import { Link } from "react-router-dom";
import PieChart from "../Components/PieChart";

const ManageNotification = () => {
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
  const [notifications, setNotifications] = useState([]);
  const getMonthIndex = (month) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months.indexOf(month);
};
    useEffect(() => {
        // Fetch data from the endpoint
        fetch('https://nedmob1.neduet.edu.pk:8080/notifications')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Sort notifications by issue date
                const sortedNotifications = data.sort((a, b) => {
                    const dateA = new Date(a.issueDate.year, getMonthIndex(a.issueDate.month), a.issueDate.day);
                    const dateB = new Date(b.issueDate.year, getMonthIndex(b.issueDate.month), b.issueDate.day);
                    return dateB - dateA;
                });
                // Set the fetched data to the state
                setNotifications(sortedNotifications);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
            All Posted Notifications
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
            <Link to="/create/Notification">
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
          <NotificationTable />
        </div>
        <div className="graphs_sec mb-10 flex flex-col md:flex-row mt-10 w-4/5 mx-auto">
          {/* <div className="w-full w-12/12">
            <LineGraph data={notifications} details="Notifications over time" />
          </div> */}
         
        </div>
        <Footer />
      </main>
    </>
  );
};

export default ManageNotification;
