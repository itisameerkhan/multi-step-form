import './App.css';
import Info from './Info';
import Plan from './Plan';
import Addons from './Addons';
import Summary from './Summary'
import '/images/bg-sidebar-desktop.svg'
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Confirm from './Confirm';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="form-div">
          <div className="form-left">
            <div className="form-left-inner">
              <NavLink to='/' className={'nav-link'}>1</NavLink>
              <div className="form-left-inner-desc">
                <p>STEP 1</p>
                <h3>YOUR INFO</h3>
              </div>
            </div>
            <div className="form-left-inner">
            <NavLink to='/select-plan' className={'nav-link'}>2</NavLink>
              <div className="form-left-inner-desc">
                <p>STEP 2</p>
                <h3>SELECT PLAN</h3>
              </div>
            </div>
            <div className="form-left-inner">
            <NavLink to='/add-ons' className={'nav-link'}>3</NavLink>
              <div className="form-left-inner-desc">
                <p>STEP 3</p>
                <h3>ADD-ONS</h3>
              </div>
            </div>
            <div className="form-left-inner">
            <NavLink to='/summary' className={'nav-link'}>4</NavLink>
              <div className="form-left-inner-desc">
                <p>STEP 4</p>
                <h3>SUMMARY</h3>
              </div>
            </div>
          </div>
            <div className="form-right">
              <Routes>
                  <Route path='/' element={<Info />}/>
                  <Route path='/select-plan' element={<Plan  />} />
                  <Route path='/add-ons' element={<Addons />} />
                  <Route path='/summary' element={<Summary />} />
                  <Route path='/Confirm' element={<Confirm />} />
              </Routes>
            </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
