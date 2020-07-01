import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function BootstrapCard(props) {
    return(
    <div className="projects-cards">
        <Card style={{ width: '50rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.sub}</Card.Subtitle>
                <Card.Text>
                {props.content}
                </Card.Text>
                <Card.Link href={props.github}>GitHub Repo</Card.Link>
                <Card.Link href={props.preview}>Project Preview</Card.Link>
            </Card.Body>
            </Card>
    </div>

    );
}

export default BootstrapCard;