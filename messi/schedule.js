import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const Schedule = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h3>Mentoring Schedule</h3>
          <Table striped bordered hover className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Time</th>
                <th>Mentor</th>
                <th>Mentee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2024-11-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
                <td>Jane Smith</td>
              </tr>
              <!-- Add more rows as needed -->
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Schedule;
