import React, { useState } from 'react'
import '../../styles/SearchDefaulters.scss'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';
import UserTable from '../../components/UserTable/UserTable.js'

const SearchDefaulters = () => {
    const [filter, setFilter] = useState(false)
    const handleFilter = (e: any) => {
        e.preventDefault()
        setFilter(!filter)
    }
    return (
        <div className='searchDefaultersContainer'>
            <div className="head-title">
                <div className="left">
                    <h1>Search Loan Defaulters</h1>
                </div>
            </div>
            <form>
                <MDBRow className='mb-4'>
                    <MDBCol lg={7}>
                        <MDBInput wrapperClass='mb-4' id='form6Example3' label='Customer name' onChange={(e) => console.log(e)} />
                    </MDBCol>
                    <MDBCol lg={2}>
                        <MDBBtn className='mb-4'>
                            Search
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol lg={3}>
                        <MDBBtn className='mb-4' onClick={handleFilter}>
                            {filter == true ? (<><i className="fa-solid fa-minus"></i>Remove filter</>) : (<><i className="fa-solid fa-plus"></i>Add filter</>)}
                        </MDBBtn>
                    </MDBCol>
                    {
                        filter && (
                            <>
                                <MDBCol lg={4}>
                                    <MDBInput id='form6Example1' label='Aadhar number' type={'number'} maxLength={12} />
                                </MDBCol>
                                <MDBCol lg={4}>
                                    <MDBInput id='form6Example2' label='PAN number' />
                                </MDBCol>
                                <MDBCol lg={4}>
                                    <MDBInput id='form6Example2' label='Mobile number' />
                                </MDBCol>    </>
                        )
                    }
                </MDBRow>
            </form>
            <a href="#" className="btn-download">
                    <i className="bx bxs-cloud-download"></i>
                    <span className="text">Download PDF</span>
                </a>
            <UserTable />
        </div>
    )
}

export default SearchDefaulters