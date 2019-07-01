import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    };

    renderDish() {
        const {dish} = this.props;

        if (dish != null) {
            return (
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments() {
        const {dish} = this.props; 

        if (dish != null) {

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
                <div className="container">
                    <h4>Comments</h4>
                    <div>
                        {comments}
                    </div>
                </div>
            );

        } else {
            return(
                <div></div>
            );
        }
        
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;