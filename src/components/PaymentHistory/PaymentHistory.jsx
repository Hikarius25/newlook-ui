import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './PaymentHistory.css';



const PaymentHistory = ({ activepage }) => {
  return (
    <div className="account-settings">
      <h2 >Payment History</h2>

      <div class="payment-history-container">
        <table class="payment-history-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kb1</td>
              <td>01-01-2025</td>
              <td>$50.00</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>kb2</td>
              <td>10-01-2025</td>
              <td>$75.00</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>kb3</td>
              <td>11-01-2025</td>
              <td>$25.00</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>kb4</td>
              <td>12-01-2025</td>
              <td>$100.00</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    
  )
}

export default PaymentHistory