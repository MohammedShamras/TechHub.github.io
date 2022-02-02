import { db } from "../firebase-config/firebase-config";
import { addDoc,  collection,  getDocs} from "firebase/firestore/lite";
import { useEffect, useState } from 'react';
import { deleteDoc, doc } from "firebase/firestore/lite";
import './Register.css'





function Register(){



    




    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');


    


    const [students, setStudents] = useState([]);


    useEffect(() => {
        getStudents();
    }, [])


    const register = async () => {
        const docRef = await addDoc(collection(db, "students"), {
            name: name,
            gender: gender,
            email:email,
            contact:contact,
         
         
            
        }).then(res => {
            alert("Student Added !")
            window.location.reload();
        }).catch(err => {
            alert("Failed Attempt !")
            window.location.reload();
        });
    }

    const getStudents = async () => {
        const querySnapshot = await getDocs(collection(db, "students"));
        setStudents(querySnapshot.docs.map((doc) => ({ ...doc.data() })))
        
    }
    

    const delStudent = async () => {
        const querySnapshotawait  = deleteDoc(doc(db, "students", "name"));}

    

      
    


    return(
        <div>

            <body className="registe-page">

                  {/* card */}

            <div class="card">
            <h3 class="card-header">Student Register</h3>
            <div class="card-body">
                <h5 class="card-title">RMAD</h5>
                <p class="card-text">Rapid Mobile Application Development is a trending certificate program in Sri Lanka that helps you create your own mobile 
                application using the latest technologies within a short time period.</p>
                <button    type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Register
                </button>
            </div>
            </div>

                            
               {/* pop up student details adder */}

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Student Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div class="modal-body">
                        
                        {/* foam */}
                        <label className="form-lable">Name</label>
                        <input className="form-input" type={"text"} value={name} onChange={(e) => {setName(e.target.value)}}></input>

                        <label className="form-lable">E-mail</label>
                        <input className="form-input" type={"email"} value={email} onChange={(e) => {setEmail(e.target.value)}}></input>

                        <label className="form-lable" >Gender</label>
                        
                        <select class="form-input" aria-label="Default select example" value={gender} onChange={(e) => {setGender(e.target.value)}}>
                            <option selected>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">female</option>
                            
                        </select>

                        <label className="form-lable">Contact No: </label>
                        <input className="form-input" type={"tel"} value={contact} onChange={(e) => {setContact(e.target.value)}}></input>

                        
                        

                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal"  onClick={register}  >Save</button>
                    </div>
                    </div>
                </div>
                </div>


                {/* table */}

                
                                <h1 className="table-heading">  RMAD Students</h1>

                <div className="col-12">
                    <table className="table mt table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Gender</th>
                            </tr>
                        </thead>
                        <tbody >
                            {students.map(student => {
                                return (
                                    <tr>
                                        <td>{student.name}  </td>
                                        <td>{student.email}</td>
                                        <td>{student.contact}</td>
                                        <td>{student.gender}</td>
                                        
                                                                           
                                    </tr>
                                    
                                )
                            })}
                        </tbody>
                    </table>
                </div>





            </body>

           

          


                

               
                         
                

        </div>
    );
}
export default Register;