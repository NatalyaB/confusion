import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    
    function RenderDish({dish}) {

        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
        


    function RenderComments({dish}) {

        const comments = dish.comments.map((commentItem) => {
            return (
                <ul className="list-group" key={commentItem.id}>
                    <li className="list-group-item border-0">
                        {commentItem.comment}
                    </li>
                    <li className="list-group-item border-0">
                        -- {commentItem.author}, {new Intl.DateTimeFormat('en-Us', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentItem.date)))}
                    </li>
                </ul>
            );
        });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <div>
                        {comments}
                    </div>
                </div>
            );

        } 
    

const Dishdetail = (props) => {
    if (props.dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments dish={props.dish} />
                </div>
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}


export default Dishdetail;