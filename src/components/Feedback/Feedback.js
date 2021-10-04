import Button from 'bootstrap';
import React from 'react';

const Feedback = () => {
    return (
        <div>
            <h2>this is feedback</h2>
            <input type="text" />
            <Button variant="dark"><i class="fas fa-paper-plane"></i> Send</Button>
        </div>
    );
};

export default Feedback;