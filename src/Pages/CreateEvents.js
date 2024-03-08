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
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { DefaultTable } from "../Components/Table";
import Example from "../Components/LineChart";
import Footer from "../Components/Footer"; 
// import { EventTable } from "../Components/EventTable";
import CreateEventForm from "./CreateEventsForm";

const CreateEvent = () => {
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
          {/* <Typography
            variant="h4"
            className="self-center sm:self-start font-semibold text-[#323226] "
          >
            All Posted the Events
          </Typography> */}
        
        </div>
        <div>
          <CreateEventForm/>
        </div>
      
        <Footer />
      </main>
    </>
  );
};

export default CreateEvent;
