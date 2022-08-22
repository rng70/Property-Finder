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
    Dashboard
} from './components';
import setAuthToken from './utils/setAuthToken';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getCardData } from './data/card-data';
<<<<<<< HEAD
=======
import AddHouse from './components/add/AddHouse';
import NewsFeed from './components/feed/NewsFeed';
import UserDashboard from './components/dashboard/UserDashboard';
>>>>>>> 4f7b4d2a4747b7f46b92d2500e56ba998743caf3

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser);
    }, []);

    const cardInfoData = getCardData();

    console.log(cardInfoData);


    return (
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                    <Navbar />
                    <section>
                        {/* <Alert /> */}
                        <Routes>
                            <Route path='/' element={<Landing />} />
                            <Route path='/add' element ={<AddType/>} />
                            <Route path='/addLand' element ={<AddLand/>} />
                            <Route path='/addSpace' element ={<AddSpace/>} />
                            <Route path='/addHouse' element ={<AddHouse/>} />
                            <Route path='/feed' element ={<NewsFeed/>} />
<<<<<<< HEAD
                            <Route path='/register' element={<SignUpType cardInfo={cardInfoData} />} />
                            <Route path='/login' element={<SignInType cardInfo={cardInfoData} />} />
                            <Route path='/login/agency' element={<AgencySignIn />} />
                            <Route path='/login/owner' element={<OwnerSignIn />} />
                            <Route path='/login/user' element={<UserSignIn />} />
                            <Route path='/*' element={<PrivateOutlet/>}>
                                <Route path='/dashboard' element={<Dashboard/>}/>
                            </Route>
=======
                            <Route path="/register" element={<SignUpType cardInfo={cardInfoData} />} />
                            <Route path="/login" element={<SignInType cardInfo={cardInfoData} />} />
                            <Route path="/login/agency" element={<AgencySignIn />} />
                            <Route path="/login/owner" element={<OwnerSignIn />} />
                            <Route path="/login/user" element={<UserSignIn />} />
                            <Route path="/dashboard" element={<UserDashboard />} />
>>>>>>> 4f7b4d2a4747b7f46b92d2500e56ba998743caf3
                            {/* <Route path="/login" element={<Login />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/create-profile" element={<CreateProfile />} />
                            <Route path="/posts" element={<Posts />} />
                            <Route path="/posts/:id" element={<Post />} /> */}
                        </Routes>
                    </section>
                    <Footer/>
                </Fragment>
            </BrowserRouter>
        </Provider>
    )
};

export default App;
