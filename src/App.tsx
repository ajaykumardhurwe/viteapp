// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//      Hello world
//       </p>
//     </>
//   )
// }

// export default App




























import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BottomNav } from './components/layout/BottomNav';
import { Home } from './pages/Home';
import { MCQ } from './pages/MCQ';
import { Jobs } from './pages/Jobs';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { JobDetails } from './pages/Jobs/JobDetails';
import {A2Class} from './pages/A2Class/index'
import LanguageScreen from "./pages/A2Class/LanguageScreen";
import MainPage from "./pages/A2Class/FiveTab/";
import PaymentPage from './pages/Home/paymentPage';
import PaymentSuccessPage from './pages/Home/PaymentSuccess';
import { McqPaymentPage } from './pages/MCQ/McqPaymentPage';
import { McqPqaymentSuccessPage } from './pages/MCQ/McqPaymentSuccessPage';
import { TopicList } from './pages/MCQ/TopicList';
import { AboutUs } from './pages/Profile/AboutUs';
import {ContactUs} from './pages/Profile/ContactUs';
import {PrivacyPolicy} from './pages/Profile/PrivacyPolicy';
import {Services} from './pages/Profile/Services'
import { EFormFillup } from './pages/Jobs/EFormFillup';
import { JobConsultancy } from './pages/Jobs/JobConsultancy';
import VisitorCounter from './lib/VisitorCounter';
import Colleges from './pages/A2Class/Colleges';
import Schools from './pages/A2Class/Schools';
import SchoolsData from './pages/A2Class/SchoolsData';
import CollegeDetail from './pages/A2Class/CollegeDetail';
import Notification from './components/layout/Notification';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 pb-16">
 {/* <VisitorCounter></VisitorCounter> 
       <Notification></Notification> */}

{/* 
<div style={{ flexDirection: 'row', alignItems: 'right' }}>
  <VisitorCounter />
  <Notification />
</div> */}


<div style={{ 
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'flex-end', 
  position: 'fixed', 
  top: 0, 
  left: 0, 
  padding: '10px',
  backgroundColor: 'transparent',
  zIndex: 1000 ,
  opacity:1,
}}>

  <Notification />
</div>
<div style={{ 
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'flex-end', 
  position: 'fixed', 
  top: 0, 
  right: 0, 
  padding: '10px',
  // backgroundColor: '#fff',
  backgroundColor: 'transparent',
  
  zIndex: 1000 ,
  opacity:1,
}}>

  <VisitorCounter></VisitorCounter>
</div>

{/* <><h1>.</h1></>
<><h1>.</h1></> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcq/*" element={<MCQ />} />
          {/* <Route path="/mcq/indian-constitution/part-1/test2" element={<MCQ />} /> */}

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/a²class" element={<A2Class />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/english" element={<MainPage />} />
        <Route path="/hindi" element={<MainPage />} />
        <Route path="/topics/:subject" element={<TopicList />} />
        <Route path="/payment/:planId" element={<PaymentPage />} />
        <Route path="/app/payment/:planId" element={<PaymentPage />} />
        <Route path="/payment-succes" element={<PaymentSuccessPage />} /> 

      
        <Route path="/mathsten" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/eformfillup" element={<EFormFillup />} />
        <Route path="/jobconsultancy" element={<JobConsultancy />} />
       
        <Route path="/colleges" element={<Colleges />} />
        {/* <Route path="/schools" element={<Schools />} /> */}
        <Route path="/schools" element={<SchoolsData />} />

        <Route path="college/:name" element={<CollegeDetail />} />
        <Route path="*" element={<NotFound />} />

        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;































