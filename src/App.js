import './App.scss';
import React, { useEffect, useState } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';


function App() {

  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=8').then(resp => resp.json()).then(data => setImages(data));
  }, []);

  return (
    <div className="App">
      <Container className="h-100">
        <Row className="h-100 justify-content-center align-items-center">
          <Col>
          <CardColumns id="cardsColumn">
            {images.map((image) => {
              return (
                <OverlayTrigger
                key={image.id}
                placement="bottom"
                overlay={<Tooltip key={image.url}>{image.author}</Tooltip>}
                >
                <Card key={image.id}>
                  <Card.Img src={image.download_url} />
                </Card>
                </OverlayTrigger>
              );
            })}
          </CardColumns>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
