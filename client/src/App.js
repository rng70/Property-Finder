import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import { Fragment, useEffect } from 'react';
import {
  Navbar,
  Landing,
  SignInType,
  SignUpType,
  AgencySignIn,
  OwnerSignIn,
  UserSignIn,
  Footer,
  AddLand,
  AddType,
  AddSpace,
  AddHouse,
  NewsFeed,
  PrivateOutlet,
  Dashboard,
  AgencySignUp,
  UserSignUp,
  OwnerSignUp,
  SingleComponent
} from './components';
import setAuthToken from './utils/setAuthToken';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getCardData } from './data/card-data';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);

  const cardInfoData = getCardData();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <section>
            <Routes>
              <Route path='/' element={<Landing />} exact />
              <Route path='/add' element={<AddType />} />
              <Route path='/addLand' element={<AddLand />} />
              <Route path='/addSpace' element={<AddSpace />} />
              <Route path='/addHouse' element={<AddHouse />} />
              <Route path='/feed' element={<NewsFeed />} />
              <Route path='/feed/:id' element={<SingleComponent/>} />
              <Route
                path='/register'
                element={<SignUpType cardInfo={cardInfoData} />}
              />
              <Route
                path='/login'
                element={<SignInType cardInfo={cardInfoData} />}
              />
              <Route path='/login/agency' element={<AgencySignIn />} />
              <Route path='/login/owner' element={<OwnerSignIn />} />
              <Route path='/login/user' element={<UserSignIn />} />
              <Route path='/register/agency' element={<AgencySignUp />} />
              <Route path='/register/owner' element={<OwnerSignUp />} />
              <Route path='/register/user' element={<UserSignUp />} />
              <Route path='/*' element={<PrivateOutlet />}>
                <Route path='dashboard' element={<Dashboard />} />
              </Route>
              {/* <Route path="/create-profile" element={<CreateProfile />} />
                            <Route path="/posts" element={<Posts />} />
                            <Route path="/posts/:id" element={<Post />} /> */}
            </Routes>
          </section>
          {/* <Footer /> */}
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
