import React from 'react';
import {link} from 'react-router-dom';
import Card from 'react-bootstrap/card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class Dastebandi extends React.Component{
    render(){
        return(
            <div style={{padding:'20px'}}>
                <CardDeck>
                    <Card bg="blue" style={{margin:'20px'}}>   
                        <Card.body>
                            <Link className="card-link" to ="/"><Card.Title>card title</Card.Title></Link>
                        </Card.body>
                      </Card>              
                </CardDeck>
                <CardDeck>
                    <Card bg="blue" style={{margin:'20px'}}>   
                        <Card.body>
                            <Link className="card-link" to ="/"><Card.Title>card title</Card.Title></Link>
                        </Card.body>
                      </Card>              
                </CardDeck>
                <CardDeck>
                    <Card bg="blue" style={{margin:'20px'}}>   
                        <Card.body>
                            <Link className="card-link" to ="/"><Card.Title>card title</Card.Title></Link>
                        </Card.body>
                      </Card>              
                </CardDeck>
                <CardDeck>
                    <Card bg="blue" style={{margin:'20px'}}>   
                        <Card.body>
                            <Link className="card-link" to ="/"><Card.Title>card title</Card.Title></Link>
                        </Card.body>
                      </Card>              
                </CardDeck>
                <CardDeck>
                    <Card bg="blue" style={{margin:'20px'}}>   
                        <Card.body>
                            <Link className="card-link" to ="/"><Card.Title>card title</Card.Title></Link>
                        </Card.body>
                      </Card>              
                </CardDeck>
                <CardDeck>
                    <Card bg="blue" style={{margin:'20px'}}>   
                        <Card.body>
                            <Link className="card-link" to ="/"><Card.Title>card title</Card.Title></Link>
                        </Card.body>
                      </Card>              
                </CardDeck>
                
               
            </div>
        )
    }
}