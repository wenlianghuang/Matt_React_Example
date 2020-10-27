import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function AlertwithHook(props){
    const [trueorfalse, setTrueorFalse] = useState(true);

    const handleHide = () => setTrueorFalse(false);
    const handelShow = () => setTrueorFalse(true);
    console.log(trueorfalse);
    return(
        <>
            
            <Alert show={trueorfalse} variant="success" style={{ maxWidth: 500 }}>
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
            
            {!trueorfalse && <Button onClick={handelShow}>Show Alert</Button>}
            
        </>
    )
}

export default AlertwithHook;