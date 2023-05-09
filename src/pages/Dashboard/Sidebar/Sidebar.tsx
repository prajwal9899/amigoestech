import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <section id="sidebar">
            <a href="#" className="brand">
                <i className="bx bxs-smile"></i>
                <span className="text">SOCIETY PORTAL</span>
            </a>
            <ul className="side-menu top">
                <li className="">
                    <NavLink to={'/'}
                        className={({ isActive, isPending }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <i className="bx bxs-dashboard"></i>
                        <span className="text">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/search'}
                        className={({ isActive, isPending }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <i className='bx bx-search-alt-2'></i>
                        <span className="text">Search Defaulters</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/upload'}
                        className={({ isActive, isPending }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <i className="bx bxs-doughnut-chart"></i>
                        <span className="text">Upload Data</span>
                    </NavLink>
                </li>
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#">
                        <i className="bx bxs-cog"></i>
                        <span className="text">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="logout">
                        <i className="bx bxs-log-out-circle"></i>
                        <span className="text">Logout</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Sidebar