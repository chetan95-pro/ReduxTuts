import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './container/Header'
import productLists from './container/ProductList'
import productDetail from './container/ProductDetail'
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={productLists} />
          <Route path='/product/:productId' exact component={productDetail} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
