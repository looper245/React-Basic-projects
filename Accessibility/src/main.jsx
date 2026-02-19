import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layout from './Layout.jsx'
import Cart from './Cart.jsx'
import Description from './Description.jsx'
import { Provider } from 'react-redux'
import Store from './Redux/Store.jsx'
import UserProduct from './UserProduct.jsx'
import MyContaxFun from './CartContaxAPI.jsx'
import MyContaxSearchFun from './SearchContax.jsx'
import WebSiteColorMod from './WebMod.jsx'
import { Suspense } from 'react'
import React from 'react'
import ProductSkeleton from './ProductSkeleton.jsx'
const Layout = React.lazy(() => import('./Layout.jsx'))
import { centralApiData } from './centralData.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/Cart',
        element: <Cart />
      },
      {
        path: '/description',
        element: <Description />
      },
      {
        path: '/User/',
        element: <UserProduct />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<ProductSkeleton />}>

        <WebSiteColorMod>
          <MyContaxSearchFun>
            <MyContaxFun>
              <Provider store={Store}>
                <RouterProvider router={router} />
              </Provider>
            </MyContaxFun>
          </MyContaxSearchFun>
        </WebSiteColorMod>

    </Suspense>
  </StrictMode>,
)
