import React from 'react';

function Transaction(){
    return(
        <div class="transaction">
            <div>
                <label>Transaction Type :</label>
                <select>
                    <option>Customer Transfer</option>
                    <option>Bank Transfer</option>
                </select>
            </div>
            <div>
                <label>Message Code :</label>
                <select>
                    <option>CHQB</option>
                    <option>CORT</option>
                    <option>HOLD</option>
                    <option>INTC</option>
                    <option>PHOB</option>
                    <option>PHOI</option>
                    <option>PHON</option>
                    <option>REPA</option>
                    <option>SDVA</option>
                </select>
            </div>
            <div>
                <label>Amount :</label>
                <input type="number"/>
            </div>
            <div>
                <label>Total Transfer Amount(+ transfer fee 0.25%) :</label>
                <p/>
            </div>
            <div>
                <label>Clear Balance :</label>
                <p/>
            </div>
        </div>
    );
}
export default Transaction;