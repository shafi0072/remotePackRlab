import React from 'react';
import './Home.css';
import Image1 from '../../../Resorces/face2.jpg';
import AccessibleIcon from '@material-ui/icons/Accessible';

const Team = () => {
    return (
        <div>
            <div className="team-section py-5">
                <div className="team-section-container">
                    <h1 className="homePage-title text-center">Our Team</h1>
                    <p className="homePage-p text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="row teams-container py-4">
                        <div className="col-md-3 team-container p-0 t-c-margin">
                            <div className="team-img">
                                <img className="t-img" src={Image1} alt="" />
                                <div className="icons">
                                    <span className="icon1">
                                        <AccessibleIcon id="team-icon"/>
                                        <AccessibleIcon id="team-icon"/>
                                    </span>
                                    <span className="icon2">
                                        <AccessibleIcon id="team-icon"/>
                                        <AccessibleIcon id="team-icon"/>
                                    </span>
                                </div>
                            </div>
                            <div className="team-text-area text-center my-3 px-3">
                                <h4 className="teams-title">Abdul Al Shafi</h4>
                                <p className="teams-profession">Prefessional Programer</p>
                                <p className="teams-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sequi doloremque, voluptatum recusandae quisquam commodi.</p>
                            </div>
                            <div className="team-btn-container my-3">
                                <button className="team-btn">Details</button>
                            </div>
                        </div>
                        <div className="col-md-3 team-container p-0 t-c-margin">
                            <div className="team-img">
                                <img className="t-img" src={Image1} alt="" />
                                <div className="icons">
                                    <span className="icon1">
                                        <AccessibleIcon id="team-icon"/>
                                        <AccessibleIcon id="team-icon"/>
                                    </span>
                                    <span className="icon2">
                                        <AccessibleIcon id="team-icon"/>
                                        <AccessibleIcon id="team-icon"/>
                                    </span>
                                </div>
                            </div>
                            <div className="team-text-area text-center my-3 px-3">
                                <h4 className="teams-title">Abdul Al Shafi</h4>
                                <p className="teams-profession">Prefessional Programer</p>
                                <p className="teams-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sequi doloremque, voluptatum recusandae quisquam commodi.</p>
                            </div>
                            <div className="team-btn-container my-3">
                                <button className="team-btn">Details</button>
                            </div>
                        </div>
                        <div className="col-md-3 team-container p-0 t-c-margin">
                            <div className="team-img">
                                <img className="t-img" src={Image1} alt="" />
                                <div className="icons">
                                    <span className="icon1">
                                        <AccessibleIcon id="team-icon"/>
                                        <AccessibleIcon id="team-icon"/>
                                    </span>
                                    <span className="icon2">
                                        <AccessibleIcon id="team-icon"/>
                                        <AccessibleIcon id="team-icon"/>
                                    </span>
                                </div>
                            </div>
                            <div className="team-text-area text-center my-3 px-3">
                                <h4 className="teams-title">Abdul Al Shafi</h4>
                                <p className="teams-profession">Prefessional Programer</p>
                                <p className="teams-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sequi doloremque, voluptatum recusandae quisquam commodi.</p>
                            </div>
                            <div className="team-btn-container my-3">
                                <button className="team-btn">Details</button>
                            </div>
                        </div>
                        <div className="col-md-3 team-container p-0">
                            <div className="team-img">
                                <img className="t-img" src={Image1} alt="" />
                                <div className="icons">
                                    <span className="icon1">
                                        <AccessibleIcon id="team-icon"/>
                                        <AccessibleIcon id="team-icon"/>
                                    </span>
                                    <span className="icon2">
                                        <AccessibleIcon id="team-icon"/>
                                        <AccessibleIcon id="team-icon"/>
                                    </span>
                                </div>
                            </div>
                            <div className="team-text-area text-center my-3 px-3">
                                <h4 className="teams-title">Abdul Al Shafi</h4>
                                <p className="teams-profession">Prefessional Programer</p>
                                <p className="teams-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sequi doloremque, voluptatum recusandae quisquam commodi.</p>
                            </div>
                            <div className="team-btn-container my-3">
                                <button className="team-btn">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
