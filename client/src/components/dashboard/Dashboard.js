import {useEffect, useState} from 'react';
import Sidebar from './Sidebar';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
 
 
const Dashboard = ({getCurrentProfile, profile}) => {
    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])

    console.log("Profile ==> ", profile);

    const record = [
        {
            id : "1705070",
            name : "Al Arafat Tanin",
            email : "tanin70@hotmail.com",
            username : "rng70",
            website : 70
        }
    ]

    return (
    <div class="col main pt-5 mt-3">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">My Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Stats</li>
        </ol>
        </nav>
        <p class="lead d-none d-sm-block">Add Employee Details and Records</p>
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Clients</h6>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Posts</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                        <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Tweets</h6>
                        <h1 class="display-4">125</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Sold</h6>
                        <h1 class="display-4">36</h1>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        
        <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
            <h5 class="mt-3 mb-3 text-secondary">
            Check More Records of Employees
            </h5>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>Client ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Number of Sold Properties</th>
                            </tr>
                        </thead>
                        <tbody>
                        {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                <div className="mb-5" style={{height:"300px",width:"400px"}}> </div></div>
        </div>
    </div>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile.profile
})
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);