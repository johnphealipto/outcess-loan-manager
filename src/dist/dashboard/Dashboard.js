import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import './Dashboard.css';

const DashboardPage = () => {
  return (
		<div className="dashboard-wrapper">
			<Container className="dashboard-container">
				<h1>Welcome to the OLM dashboard</h1>
				<h3>Please, exercise patience as this page is still under construction</h3>
				<p>Thank you!</p>
			</Container>
			<Spinner variant="primary" animation="border" />
		</div>
  );
}

export default DashboardPage;