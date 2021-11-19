import React from 'react';

function Receiver(){
    return(
        <div class="receiver">
            <table align="center">
                <tr>
                    <td><label>Bic : </label></td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td><label>Institution name : </label></td>
                    <td></td>
                </tr>
                <tr>
                    <td><label>Account Holder Benificiary name : </label></td>
                    <td><input type="text"/></td>
                </tr>
            </table>
        </div>
    );
}
export default Receiver;