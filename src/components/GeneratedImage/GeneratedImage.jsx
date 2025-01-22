import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './GeneratedImage.css';



const GeneratedImage = ({ activepage }) => {
  return (
    <div className="generated-image">
      <h2 >Generated Image</h2> 
      <h6>(within 15 days)</h6>

      <div class="generated-image-container">
        <table class="generated-image-table">
          <thead>
            <tr>
              <th>Original Image </th>
              <th>Generated Image</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kb1</td>
              <td>bk1</td>
              <td>01-01-2025</td>
            </tr>
            <tr>
              <td>kb2</td>
              <td>bk2</td>
              <td>10-01-2025</td>
            </tr>
            <tr>
              <td>kb3</td>
              <td>bk3</td>
              <td>11-01-2025</td>
            </tr>
            <tr>
              <td>kb4</td>
              <td>bk4</td>
              <td>12-01-2025</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    
  )
}

export default GeneratedImage