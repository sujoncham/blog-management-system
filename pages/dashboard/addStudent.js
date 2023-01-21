import axios from 'axios';
import React, { useState } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import car from '../../public/images/post5.jpg';

const AddStudent = () => {
	const [image, setImage] = useState('')
	console.log(image)

	const handleImage = (e) => {
		setImage(e.target.files[0])
	  }
    const handleAddStudent = (event) =>{
    event.preventDefault();
    const fname = event.target.fname.value;
    const father = event.target.father.value;
    const classes = event.target.classes.value;
    const branch = event.target.branch.value;
    const subjectsGroup = event.target.subjectsGroup.value;
    const gender = event.target.gender.value;
    const studentId = event.target.studentId.value;
	let formData = new FormData();
	formData.append('photo', image);

    const studentInfo = { fname,father, classes, branch, subjectsGroup, gender, studentId, formData};
	const config={
		headers:{
			'content-type': 'multipart/form-data'
		}
	}


    const url = 'http://localhost:5000/students';
	axios.post(url, studentInfo, config).then(res =>{
		console.log(res.data)
		// event.target.reset();
	}).catch((err)=>{
		console.log(err)
	})
   
        
    }
    return (
				<div className="w-[80%] flex">
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style={{backgroundImage: `url(${car})`}}
					></div>
					
					<div className="w-full lg:w-7/12 bg-white rounded-lg lg:rounded-l-none">
						<h3 className="text-2xl text-center">Add Student!</h3>
						<form method='post' onSubmit={handleAddStudent} className="px-8 pt-6 pb-8 mb-4 bg-white rounded" encType="multipart/form-data">
                        <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fullName">
									Full mame
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									name="fname"
									type="text"
									placeholder="full name"
									
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fatherName">
									Fathers name
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									name="father"
									type="text"
									placeholder="father's name"
								/>
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="classes">
										Class
									</label>
									<select className='border rounded shadow focus:outline-none' name="classes">
                                        <option>select one</option>
                                        <option value="class six">Class Six</option>
                                        <option value="class seven">Class Seven</option>
                                        <option value="class eight">Class Eight</option>
                                        <option value="class nine">Class Nine</option>
                                        <option value="class Ten">Class Ten</option>
                                    </select>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="branch">
										Branch
									</label>
									<select name="branch" className='border rounded shadow focus:outline-none'>
                                        <option>select one</option>
                                        <option value="boys">Boys</option>
                                        <option value="girls">Girls</option>
                                        <option value="others">Others</option>
                                    </select>
								</div>
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="group">
										SubjectsGroup
									</label>
									<select name="subjectsGroup" className='border rounded shadow focus:outline-none'>
                                        <option>select one</option>
                                        <option value="science">Science</option>
                                        <option value="humanities">Humanities</option>
                                        <option value="b-studies">Business Studies</option>
                                        <option value="technical">Technical School</option>
                                    </select>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="gender">
										Gender
									</label>
									<select name="gender" className='border rounded shadow focus:outline-none'>
                                        <option>select one</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
								</div>
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="StudentId">
										StudentId
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="studentId"
										type="number"
										placeholder="student id"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="birthDate">
										Date of birth
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="birthDate"
										type="date"
										placeholder="date of birth"
									/>
								</div>
							</div>
                            <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="photo">
									Students Photo
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									type="file"
                                    name='photo'
									onChange={handleImage}
								/>
							</div>
							<div className="mb-6 text-center">
								<button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
									Add Student
								</button>
							</div>
						
						</form>
					</div>
				</div>
			
		
    );
};

AddStudent.Layout = DashboardLayout

export default AddStudent;