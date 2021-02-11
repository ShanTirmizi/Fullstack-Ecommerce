import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { AboutPage, AuthWrapper, CartPage, CheckoutPage, ErrorPage, PrivateRoute, ProductsPage, SingleProductPage } from './pages/index';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/products'>
              <ProductsPage />
            </Redirect>
          </Route>
          <Route exact path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/cart'>
            <CartPage />
          </Route>
          <Route exact path='/products'>
            <ProductsPage />
          </Route>
          <Route exact path='/products/:id' children={<SingleProductPage />}>
          </Route>
          <PrivateRoute exact path='/checkout'>
            <CheckoutPage />
          </PrivateRoute>
          <Route exact path='*'>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  ) 

  
}

export default App
