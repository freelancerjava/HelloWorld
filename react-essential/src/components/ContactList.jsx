import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            displayedContacts: this.CONTACTS
        }
    }



    CONTACTS = [
        {
            id: 1,
            name: "Spider-man",
            phoneNumber: "+21455678",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6N9HavWS46eI1fJ6gm_a4TrJGWknsYcIKdr0R5ouCbyUZPPn',
        },
        {
            id: 2,
            name: "Iron-man",
            phoneNumber: "+35455699",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcqlzD34w4c7qkkhgTnEJSkbMwOINoJ8HaE5mY8BOf5s_G-bz',
        },
        {
            id: 3,
            name: "Thor",
            phoneNumber: "+12457889",
            image: 'data:image/jpeg;base64,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',
        },
        {
            id: 4,
            name: "Captain America",
            phoneNumber: "+78451245",
            image: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/05/Chris-Evans-as-Captain-America-in-the-Quantum-Realm.jpg',
        }
    ]



    handleSearch = function (event) {
        //console.log(event.target.value);
        let searchTerm = event.target.value.toLowerCase();
        this.displayedContacts = this.CONTACTS.filter((el) => {
            return el.name.toLowerCase().indexOf(searchTerm) !== -1;
        });

        // console.log(this.displayedContacts);

        this.setState({
            displayedContacts: this.displayedContacts
        });
    }



    render() {



        return (
            <div className="contact-list">
                <div className="search">
                    <input type="text"
                        className="form-control"
                        onChange={this.handleSearch} />
                </div>
                <ul>
                    {
                        this.state.displayedContacts.map((el) => {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phone={el.phoneNumber}
                                image={el.image}
                            />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ContactList