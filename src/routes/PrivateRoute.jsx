// import React, { lazy, Suspense } from 'react';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { navigateRoles, roleForFeedback } from '../Config/constant';
// import PrivateLayout from './PrivateLayout';
// import Progress from '../Components/Progress/Progress';
// // import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
// import Main from "./pages/Main";
// import EditProfile from "./pages/EditProfile";
// import MyProfile from "./pages/MyProfile";
// import ForgetPassword from "./pages/ForgetPassword";

// const SignUp = lazy(() => import('./pages/SignUp'));
// const Login = lazy(() => import('../Pages/Login/login'));
// const AddFeedBack = lazy(() => import('../Pages/AddFeedback/AddFeedback'));
// const Reviewer = lazy(() => import('../Pages/Reviewer/ReviewerDashboard'));
// const AddFeedback = lazy(() => import('../Pages/Trainee/addFeedback'));
// const NoMatch = lazy(() => import('../Pages/NoMatchFound/noMatchFound'));
// const Trainer = lazy(() => import('../Pages/Trainer/TrainerDashboard'));

// const PrivateRoute = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route
//         path={navigateRoles.LOGIN}
//         element={(
//           <Suspense fallback={<div><Progress /></div>}>
//             <Login />
//           </Suspense>
//         )}
//       />
//       <Route
//         exact
//         path={navigateRoles.ADMIN}
//         element={(
//           <>
//             <PrivateLayout>
//               <AdminDashboard />
//             </PrivateLayout>
//           </>
//         )}
//       />
//       <Route
//         exact
//         path={navigateRoles.BatchManagement}
//         element={(
//           <PrivateLayout>
//             <AddBatch />
//           </PrivateLayout>
//         )}
//       />
//       <Route
//         exact
//         path={navigateRoles.UserManagement}
//         element={(
//           <>
//             <PrivateLayout>
//               <UserMangement />
//             </PrivateLayout>

//           </>
//         )}
//       />
//       <Route
//         exact
//         path={navigateRoles.TRAINEE}
//         element={(
//           <PrivateLayout>
//             <Suspense fallback={<div><Progress /></div>}>
//               <Trainee />
//             </Suspense>
//           </PrivateLayout>
//         )}
//       />
//       <Route
//         exact
//         path={navigateRoles.TRAINER}
//         element={(
//           <PrivateLayout>
//             <Suspense fallback={<div><Progress /></div>}>
//               <Trainer />
//             </Suspense>
//           </PrivateLayout>
//         )}
//       />
//       <Route
//         exact
//         path={navigateRoles.REVIEWER}
//         element={(
//           <PrivateLayout>
//             <Suspense fallback={<div><Progress /></div>}>
//               <Reviewer />
//             </Suspense>
//           </PrivateLayout>
//         )}
//       />
//       <Route
//         exact
//         path={navigateRoles.REPORT}
//         element={(
//           <PrivateLayout>
//             <Suspense fallback={<div><Progress /></div>}>
//               <Report />
//             </Suspense>
//           </PrivateLayout>
//         )}
//       />
//       <Route
//         exact
//         path={navigateRoles.TRAINING_ADDFEEDBACK}
//         element={(
//           <PrivateLayout>
//             <Suspense fallback={<div><Progress /></div>}>
//               <AddFeedBack role={roleForFeedback.TRAINING_COORDINATOR} />
//             </Suspense>
//           </PrivateLayout>
//         )}
//       />
//       <Route
//         exact
//         path={navigateRoles.TRAINEE_ADDFEEDBACK}
//         element={(
//           <PrivateLayout>
//             <Suspense fallback={<div><Progress /></div>}>
//               <AddFeedback role={roleForFeedback.TRAINEE} />
//             </Suspense>
//           </PrivateLayout>
//         )}
//       />
//       <Route
//         exact
//         path={navigateRoles.REVIEWER_ADDFEEDBACK}
//         element={(
//           <PrivateLayout>
//             <Suspense fallback={<div><Progress /></div>}>
//               <AddFeedBack role={roleForFeedback.REVIEWER} />
//             </Suspense>
//           </PrivateLayout>
//         )}
//       />
//       <Route
//         exact
//         path={navigateRoles.NOMATCH}
//         element={(
//           <Suspense fallback={<div><Progress /></div>}>
//             <NoMatch />
//           </Suspense>
//         )}
//       />
//     </Routes>
//   </BrowserRouter>
// );

// export default PrivateRoute;
