import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import ProfileSetting from './pages/ProfileSetting'
import Top from './pages/Top'
import Report_result from './pages/Report_result'
import Selectnumber from './pages/Selectnumber'
import Apply_succeed from './pages/Apply_succeed'
import Recruit from './pages/Recruit'
import Apply from './pages/Apply'
import Report from './pages/Report'
import Recruit_succeed from './pages/Recruit_succeed'
import Search from './pages/Search'
import Apply_index from './pages/Apply_index'
import Profile from './pages/Profile'
import Message from './pages/Message'
import Apply_favorite from './pages/Apply_favorite'
import Recruitre from './pages/Recruitre'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />,
    errorElement: <NotFound />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profile-setting",
    element: <ProfileSetting />
  },
  {
    path: "/apply",
    element: <Apply />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/Report-result",
    element: <Report_result />
  },
  {
    path: "/selectnumber",
    element: <Selectnumber />
  },
  {
  path: "/apply_succeed",
    element:<Apply_succeed/>
   },
   {
    path: "/recruit",
    element: <Recruit />
  },
  {
    path: "/report_result",
    element: <Report_result />
  },
  {
    path: "/report",
    element: <Report />
  },
  {
    path: "/recruit_succeed",
    element: <Recruit_succeed />
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/apply_index",
    element: <Apply_index />
    },
    {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/message",
    element: <Message />
  },
{
  path: "/apply_favorite",
  element: <Apply_favorite />
},
{
  path: "/recruitre",
  element: <Recruitre />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
        fontSizes: {
          xs: 20,
          sm: 22,
          md: 24,
          lg: 26,
          xl: 30,
        },
        spacing: {
          xs: 20,
          sm: 22,
          md: 24,
          lg: 26,
          xl: 30,
        }
      }}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
)
