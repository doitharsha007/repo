import React from 'react';
 function Sender(props){
     return(
         <div class="sender">
             <table align="center">
                 <tr>
                     <td>
                     <label>Customer Id : </label>
                     </td>
                     <td>
                     <input type="numer" onChange={props.changed}/>
                     </td>
                 </tr>
                 <tr class="name">
                     <td>Account Holder Name : </td>
                     <td>{props.accountHolderName}</td>
                 </tr>
                 <tr class="balance">
                     <td>Clear Balance : </td>
                     <td>{props.clearBalance}</td>
                 </tr>
             </table>
             
         </div>
     );
 }
 export default Sender;