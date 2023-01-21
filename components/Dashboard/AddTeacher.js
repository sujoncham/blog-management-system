import axios from "axios";
import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import girl from '../../images/beauty.jpg';

const AddTeacher = () => {
    const [fname, setFName] = useState("");
    const [position, setPosition] = useState("");
    const [subject, setSubject] = useState("");

    const [file, setFile] = useState("");
  
    // const history = useNavigate();
  
    const setdata = (e) => {
      const { value } = e.target;
      setFName(value);
    }
    const addPosition = (e) => {
      const { value } = e.target;
      setPosition(value);
    }
    const addSubject = (e) => {
      const { value } = e.target;
      setSubject(value);
    }
  
    const setImageFile = (e) => {
      setFile(e.target.files[0])
    }
  
    // adduser data
  
    const addUserData = async (e) => {
      e.preventDefault();
  
      var formData = new FormData();
      formData.append("photo", file);
      formData.append("fname", fname);
      formData.append("position", position);
      formData.append("subject", subject);

      // console.log(file, fname, position, subject )
  
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      }
  
      const res = await axios.post("http://localhost:5008/teachers", formData, config);
  
      if (res.data.status === 401 || !res.data) {
        console.log("errror")
      } else {
        console.log(res.data)
        // history("/")
      }
    }
  
    return (
      <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{backgroundImage: `url(${girl})`}}
              ></div>
              
              <div className="w-full lg:w-7/12 bg-white rounded-lg lg:rounded-l-none">
                <form className="w-96 shadow-lg px-4 py-5 rounded-md" onSubmit={addUserData} action="multipart/form-data">
                    <div className="flex flex-col mt-5">
                        <label htmlFor="fname">Full name</label>
                        <input type="text" name='fname' onChange={setdata} placeholder="full name" className='border-2 px-2 py-2 w-72 rounded-md' />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="position">Designation</label>
                        <input type="text" name='position' onChange={addPosition} placeholder="designation" className='border-2 px-2 py-2 w-72 rounded-md' />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="position">Subject</label>
                        <input type="text" name='subject' onChange={addSubject} placeholder="subject" className='border-2 px-2 py-2 w-72 rounded-md' />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="file">Full name</label>
                        <input type="file" onChange={setImageFile} name='photo' className='border-2 px-2 py-2 w-72 rounded-md' />
                    </div>
                    <button type="submit" className='bg-red-500 px-2 py-2 rounded-md mt-5 text-white hover:bg-red-700 hover:text-black'>create</button>
                </form>
            </div>
          </div>
        </div>
    </div>
    );
};

export default AddTeacher;