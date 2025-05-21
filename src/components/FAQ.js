import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Do you accept insurance?</Accordion.Header>
          <Accordion.Body>
            Yes, we accept most dental insurance plans. Contact us to confirm.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What should I do in a dental emergency?</Accordion.Header>
          <Accordion.Body>
            Call us immediately. We offer same-day emergency appointments.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How often should I visit the dentist?</Accordion.Header>
          <Accordion.Body>
            We recommend visiting every 6 months for routine check-ups.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;