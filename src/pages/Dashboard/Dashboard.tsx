import axios from 'axios';
import React, { useEffect } from 'react'
import InfoBox from '../../components/Analytics/InfoBox'

const Dashboard = () => {
    const getUserData = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8000/api/getUserData",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            ).then((res) => {
                console.log(res, "RES");
            }).catch((err) => {
                console.log(err);
            })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);
    return (
        <>
            <div className="head-title">
                <div className="left">
                    <h1>Dashboard</h1>
                </div>
            </div>
            <InfoBox />
        </>
    )
}

export default Dashboard