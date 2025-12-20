import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { DefaltComponent } from './components/DefaltComponent/DefaltComponent'
import { isJsonString } from './utils'
import { jwtDecode as jwt_decode } from "jwt-decode";
import * as UserService from "./services/UserService";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/slides/userSlide'
//import axios from 'axios'
import Loading from './components/LoadingComponent/Loading'

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    setIsLoading(true)
    const { storageData, decoded } = handleDecoded()
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData)
    }
    setIsLoading(false)
  }, [])

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token')
    let decoded = {}
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      decoded = jwt_decode(storageData)
    }
    return { decoded, storageData }
  }

  UserService.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    if (decoded?.exp < currentTime.getTime() / 1000) {
      try {
        const data = await UserService.refreshToken()
        config.headers['token'] = `Bearer ${data?.access_token}`
      } catch (err) {
        // network or refresh error - clear auth and redirect to sign-in
        console.error('refreshToken failed:', err);
        localStorage.removeItem('access_token');
        // avoid throwing uncaught errors in render/requests
        window.location.href = '/sign-in';
        return Promise.reject(err);
      }
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token }))
  }

  // const fetchApi = async () => {
  //   const res = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/product/get-all`)
  //   return res.data
  // }

  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })

  return (
    <div>
      <Loading isLoading={isLoading}>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              const isCheckAuth = !route.isPrivatete || user.isAdmin
              const Layout = route.isShowHeader ? DefaltComponent : Fragment
              if (!isCheckAuth) return null;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>}
                />
              )
            })}
          </Routes>
        </Router>
      </Loading>
    </div>
  )
}

export default App