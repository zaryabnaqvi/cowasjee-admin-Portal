import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";

import Dashboard from "./Pages/Dashboard";

import Error404Page from "./Pages/Errors/404";
import Profile from "./Pages/Profile";
import { AchievementTable } from "./Components/AchievementTable";
import ManageAchievement from "./Pages/ManageAchievement";
import CreateAchievementForm from "./Pages/CreateAchievementForm";
import CreateAchievement from "./Pages/CreateAchievements";
import ManageNotification from "./Pages/ManageNotification";
import CreateNotification from "./Pages/CreateNotification";
import UpdateNotification from "./Pages/ManageNotificationUpdate";
import UpdateAchievement from "./Pages/UpdateAchievement";
import CreateEvent from "./Pages/CreateEvents";
import ManageEvent from "./Pages/ManageEvents";
import UpdateEvent from "./Pages/UpdateEvent";
import CreateFaculty from "./Pages/CreateFaculty";
import ManageFaculty from "./Pages/ManageFaculty";
import UpdateFaculty from "./Pages/UpdateFaculty";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignInPage />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage/Achievement" element={<ManageAchievement/>} />
        <Route path="/manage/Notification" element={<ManageNotification/>} />
        <Route path="/manage/Events" element={<ManageEvent/>} />
        <Route path="/manage/Faculty" element={<ManageFaculty/>} />




       
        <Route path="/create/Achievement" element={<CreateAchievement />} />
        <Route path="/create/Notification" element={<CreateNotification />} />
        <Route path="/create/event" element={<CreateEvent />} />
        <Route path="/create/faculty" element={<CreateFaculty />} />


        <Route path="/update/Notification/:id" element={<UpdateNotification />} />
        <Route path="/update/Achievement/:id" element={<UpdateAchievement />} />
        <Route path="/update/Event/:id" element={<UpdateEvent />} />
        <Route path="/update/Faculty/:id" element={<UpdateFaculty />} />








        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
