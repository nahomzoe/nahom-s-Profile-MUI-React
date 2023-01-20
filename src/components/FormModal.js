// import React, { useState, useEffect } from "react";
// import { db } from "../firebase.config";
// import { axios } from "react-axios";
// import { collection, addDoc } from "firebase/firestore";

// import {
//   MDBBtn,
//   MDBModal,
//   MDBModalDialog,
//   MDBModalContent,
//   MDBModalHeader,
//   MDBModalTitle,
//   MDBModalBody,
//   MDBInput,
//   MDBTextArea,
// } from "mdb-react-ui-kit";

// const FormModal = () => {
//   const [basicModal, setBasicModal] = useState(false);
//   const [data, setData] = useState({
//     testimony: "",
//     fullName: "",
//     jobTitle: "",
//     imageUrl: "",
//   });
//   const testimoniesFetchRef = collection(db, "testimonies");
//   const { testimony, fullName, jobTitle, imageUrl } = data;
//   const toggleShow = () => setBasicModal(!basicModal);

//   const changeHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();

//     addDoc(testimoniesFetchRef, data);
//   };

//   return (
//     <>
//       <MDBBtn onClick={toggleShow}>Give your testimony</MDBBtn>
//       <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
//         <MDBModalDialog>
//           <MDBModalContent className="mContent">
//             <MDBModalHeader>
//               <MDBModalTitle>Your testimony</MDBModalTitle>
//               <MDBBtn
//                 className="btn-close"
//                 color="none"
//                 onClick={toggleShow}
//               ></MDBBtn>
//             </MDBModalHeader>
//             <MDBModalBody>
//               {" "}
//               <div className="container">
//                 <div>
//                   <h2>Only sth good!</h2>
//                 </div>

//                 <form className="form" onSubmit={submitHandler}>
//                   <div className="input">
//                     <MDBTextArea
//                       label="Testimony"
//                       id="textAreaExample"
//                       rows={4}
//                       name="testimony"
//                       value={testimony}
//                       onChange={changeHandler}
//                     />
//                   </div>
//                   <div className="input">
//                     <MDBInput
//                       label="Full name"
//                       id="typeText"
//                       type="text"
//                       name="fullName"
//                       value={fullName}
//                       onChange={changeHandler}
//                     />
//                   </div>
//                   <div className="input">
//                     <MDBInput
//                       label="Job Title"
//                       id="typeText"
//                       type="text"
//                       name="jobTitle"
//                       value={jobTitle}
//                       onChange={changeHandler}
//                     />
//                   </div>

//                   <div className="input">
//                     <MDBInput
//                       label="Picture URL"
//                       id="typeURL"
//                       type="url"
//                       name="imageUrl"
//                       value={imageUrl}
//                       onChange={changeHandler}
//                     />
//                   </div>
//                   <div className="input">
//                     <MDBBtn
//                       className="mx-2"
//                       tag="input"
//                       type="submit"
//                       value="Submit"
//                       color="secondary"
//                       onClick={toggleShow}
//                     />
//                   </div>
//                 </form>
//               </div>
//             </MDBModalBody>

//             {/* <MDBModalFooter>
//               <MDBBtn color="secondary" onClick={toggleShow}>
//                 Close
//               </MDBBtn>
//             </MDBModalFooter> */}
//           </MDBModalContent>
//         </MDBModalDialog>
//       </MDBModal>
//     </>
//   );
// };

// export default FormModal;
