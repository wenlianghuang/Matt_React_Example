import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
//import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

class Example extends React.Component {
	constructor(props) {
		super(props);

		this.state = { show: true };
	}

	render() {
		const handleHide = () => this.setState({ show: false });
		const handleShow = () => this.setState({ show: true });
		return (
			<>
				<Alert show={this.state.show} variant="success" style={{ maxWidth: 500 }}>
					<Alert.Heading>How's it going?!</Alert.Heading>
					<p>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
						eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
						amet fermentum.
                    </p>
					<hr />
					<div className="d-flex justify-content-end">
						<Button onClick={handleHide} variant="outline-success">
							Close me ya'll!
                        </Button>
					</div>
				</Alert>

                {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}
                
                <Form className="firstFormCSS">
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email address</Form.Label>
                        <div className="w-50">
                        <Form.Control type="email" placeholder="Enter email" className="ControlWidth" />
                        </div>
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <div class="w-50">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className="ControlWidth" />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formBasciCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <Button variant="flat" size="xxl" type="submit">Submit</Button>
                </Form>
			</>
		);
	}
}
export default Example;
//export default () => (<div><ReactBootstrapStyle /><Example /></div>)