import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import { Fragment, useEffect } from 'react';
import { Navbar, Landing, SignInType, SignUpType, AgencySignIn, OwnerSignIn, UserSignIn } from './components';
import setAuthToken from './utils/setAuthToken';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import AddLand from './components/add/AddLand';
import AddType from './components/add/AddType';
import AddSpace from './components/add/AddSpace';
import { getCardData } from './data/card-data';
import AddHouse from './components/add/AddHouse';
import NewsFeed from './components/feed/NewsFeed';
import UserDashboard from './components/dashboard/UserDashboard';

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
                            <Route path="/register" element={<SignUpType cardInfo={cardInfoData} />} />
                            <Route path="/login" element={<SignInType cardInfo={cardInfoData} />} />
                            <Route path="/login/agency" element={<AgencySignIn />} />
                            <Route path="/login/owner" element={<OwnerSignIn />} />
                            <Route path="/login/user" element={<UserSignIn />} />
                            <Route path="/dashboard" element={<UserDashboard />} />
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
