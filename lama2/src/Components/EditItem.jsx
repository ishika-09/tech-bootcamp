// import React, {useState} from 'react';
// import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBRadio, MDBRange } from 'mdb-react-ui-kit';
// import Cart from '../Assets/Images/cart.jpg';
// import axios from 'axios';

// function EditItem(props) {

//   const [item, setItem] = useState({});
//   const [itemCategory, setItemCategory] = useState("");
//   const [itemDescription, setItemDescription] = useState("");
//   const [itemValue, setItemValue] = useState(0);
//   const [itemMake, setItemMake] = useState("");
//   const [itemImg, setItemImg] = useState("");
//   const backendURL = "http://localhost:8081/items" + props.itemId;
//   function handleSubmit(){
//     axios.get(backendURL)
//     .then((response) => setItem(response.data));
//   }



//   return (
//     <MDBContainer fluid className="p-3 my-5 h-custom">
//       <MDBRow>

//         <MDBCol col='4' md='6'>
//           <div className='w- 100 m-5'>
//             <h3>Edit Item</h3>
//             <br/>
//             <select label="Item Category" name="itemCategory" onChange={e => setItemCategory(e.target.value)} id="itemCategory" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
//               <option value="Furniture">Furniture</option>
//               <option value="Crockery ">Crockery</option>
//               <option value="Electrical">Electrical</option>
//               <option value="Electronic">Electronic</option>
//               <option value="Plastic">Plastic</option>
//             </select>
//             <MDBInput wrapperClass='mb-4' label='Item Description' onChange={e => setItemDescription(e.target.value)} id='formControlLg' type='textarea' size="md"/>
//             <MDBInput wrapperClass='mb-4' label='Item Image URL' onChange={e => setItemImg(e.target.value)} id='formControlLg' type='textarea' size="md"/>
//             <MDBInput wrapperClass='mb-4' label='Item Value' onChange={e => setItemValue(e.target.value)} id='formControlLg' type='text' size="md"/>
//             <MDBInput wrapperClass='mt-2 mb-4' label='Item Make' onChange={e => setItemMake(e.target.value)} id='formControlLg' type='text' size="md"/>
//             <MDBBtn className="mb-4 w-100" type="submit" onClick={handleSubmit}>Add Item Details</MDBBtn>    
//           </div>

//         </MDBCol>
//         <MDBCol col='10' md='6'>
//           <img src={Cart} class="img-fluid" alt="Sample image" width="80%"/>
//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default EditItem;