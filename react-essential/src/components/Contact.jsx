import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-item">
                <li>
                    <div className="contact">
                        <div className="contact-image">
                            <img src={this.props.image} alt="image1" />
                        </div>                        
                        <div className="contact-info">
                            <div className="conatact-name" >{this.props.name}</div>
                            <div className="conatact-phonenum" >{this.props.phone}</div>
                        </div>

                    </div>
                </li>
            </div>
        );
    }
}

export default Contact