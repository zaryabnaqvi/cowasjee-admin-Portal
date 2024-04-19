import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEnvelope ,faPlus, faCalendar, faUser} from "@fortawesome/free-solid-svg-icons";

import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export function DrawerWithNavigation({ open, setOpen }) {
  const navigate = useNavigate()

  const handleLogout = ( ) =>{
    localStorage.removeItem("token")
    navigate("/sign-in")
  }

  return (
    <>
      <Drawer
        overlay={false}
        className="top-auto"
        overlayProps={{ className: "fixed inset-0 z-50 bg-black opacity-50" }}
        open={open}
        onClose={() => setOpen(open)}
      >
        <List className="mt-2 mx-0 !min-w-full">
          <Link to="/dashboard">
            <ListItem
              ripple={false}
              className="hover:!bg-transparent focus:!bg-transparent hover:translate-x-1"
            >
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>
          <hr className="w-full" />
          {/* <Link to="/predictions">
            <ListItem className="hover:!bg-transparent focus:!bg-transparent hover:translate-x-1">
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </ListItemPrefix>
              Prediction
            </ListItem>
            
          </Link> */}
          <Link to="/create/Achievement">
            <ListItem className="hover:!bg-transparent focus:!bg-transparent hover:translate-x-1">
              <ListItemPrefix style={{display:'flex'}}>
              <FontAwesomeIcon style={{marginRight:"2px"}} icon={faEnvelope} /><FontAwesomeIcon icon={faPlus} />
              </ListItemPrefix>
              Post Achievement
            </ListItem>
            
          </Link>
          <Link to="/create/Notification">
            <ListItem className="hover:!bg-transparent focus:!bg-transparent hover:translate-x-1">
              <ListItemPrefix style={{display:'flex'}}>
                
              <FontAwesomeIcon style={{marginRight:"2px"}} icon={faStar} /> 
              <FontAwesomeIcon icon={faPlus} />
              </ListItemPrefix>
              Post Notification 
            </ListItem>
            
          </Link>
          <Link to="/create/faculty">
            <ListItem className="hover:!bg-transparent focus:!bg-transparent hover:translate-x-1">
              <ListItemPrefix style={{display:'flex'}}>
                
              <FontAwesomeIcon style={{marginRight:"2px"}} icon={faUser} /> 
              <FontAwesomeIcon icon={faPlus} />
              </ListItemPrefix>
              Post Faculties
            </ListItem>
            
          </Link>
          <Link to="/create/event">
            <ListItem className="hover:!bg-transparent focus:!bg-transparent hover:translate-x-1">
              <ListItemPrefix style={{display:'flex'}}>
                
              <FontAwesomeIcon style={{marginRight:"2px"}} icon={faCalendar} /> 
              <FontAwesomeIcon icon={faPlus} />
              </ListItemPrefix>
              Post Event 
            </ListItem>
            
          </Link>
          <Link to="/manage/Notification">
            <ListItem className="hover:!bg-transparent focus:!bg-transparent hover:translate-x-1">
              <ListItemPrefix>
              <FontAwesomeIcon icon={faEnvelope} />
              </ListItemPrefix>
              Manage Notification 
            </ListItem>
            
          </Link>
          <Link to="/manage/Achievement">
            <ListItem className="hover:!bg-transparent focus:!bg-transparent hover:translate-x-1">
              <ListItemPrefix>
              <FontAwesomeIcon icon={faStar} />
              </ListItemPrefix>
              Manage Achievements 
            </ListItem>
            
          </Link>
          <Link to="/manage/Events">
            <ListItem className="hover:!bg-transparent focus:!bg-transparent hover:translate-x-1">
              <ListItemPrefix>
              <FontAwesomeIcon icon={faCalendar} />
              </ListItemPrefix>
              Manage Events 
            </ListItem>
            
          </Link>
          <Link to="/manage/Faculty">
            <ListItem className="hover:!bg-transparent focus:!bg-transparent hover:translate-x-1">
              <ListItemPrefix>
              <FontAwesomeIcon icon={faUser} />
              </ListItemPrefix>
              Manage Faculty 
            </ListItem>
            
          </Link>
        </List>
        <Button onClick={handleLogout} className="mt-3 ml-5" size="sm">
          Logout
        </Button>
      </Drawer>
    </>
  );
}
