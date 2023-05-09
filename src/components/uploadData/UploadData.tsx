import axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useRef, useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
import Swal from 'sweetalert2';
import * as XLSX from "xlsx";
import './UploadData.scss'

const UploadData = () => {

    const fileRef = useRef();
    const [fileName, setFileName] = useState(null);
    const [sheetNames, setSheetNames] = useState<any>(null);
    const [file, setFile] = useState(null);
    const [sheetData, setSheetData] = useState<any>({});
    const acceptableFileNames = ["xlsx", "xls"];


    const checkFileName = (name: any) => {
        return acceptableFileNames.includes(name.split(".").pop().toLowerCase());
    };

    const readDataFromExcel = (data: any) => {
        const wb = XLSX.read(data);
        setSheetNames(wb.SheetNames);

        var mySheetData: any = {};

        // loop through sheets

        for (var i = 0; i < wb.SheetNames.length; i++) {
            var sheetName = wb.SheetNames[i];
            const workSheet = wb.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(workSheet);

            (mySheetData as any)[sheetName] = jsonData;
        }

        setSheetData(mySheetData);
        console.log(mySheetData["SOCIETY_PORTAL_SAMPLE_EXCEL"]);

    };

    const handleFile = async (e: any) => {
        // const myFile = e.target.files[0];
        const myFile = e

        if (!myFile) return;

        if (!checkFileName(myFile.name)) {
            alert("Invalid File Format");
            return;
        }

        // Read File Data
        const data = await myFile.arrayBuffer();

        readDataFromExcel(data);

        // Assign sheets

        setFile(myFile);
        setFileName(myFile.name);
    };

    // const handleFileDelete = () => {
    //     setFile(null);
    //     setFileName(null);
    //     fileRef.current.value = "";
    // };

    const uploadData = async () => {

        axios.post("http://localhost:8080/api/upload", sheetData["SOCIETY_PORTAL_SAMPLE_EXCEL"]).then((res) => {
            console.log(res, 'res');
            if (res.data.message == "Uploaded Successfully") {
                Swal.fire(
                    'Success',
                    'Excel uploaded successfully',
                    'success'
                )
            } else {
                Swal.fire(
                    'Error',
                    'Something went wrong',
                    'error'
                )
            }
        }).catch((err) => {
            console.log(err, 'err');
        })


    }

    return (
        <div className='uploadContainer'>
         <h1 className='title'>Upload Loan Defaulters Data</h1>
            <FileUploader handleChange={handleFile} name="file" types={acceptableFileNames} />
            <MDBBtn className='mb-4' block onClick={uploadData}>
                Upload
            </MDBBtn>
        </div>
    )
}

export default UploadData