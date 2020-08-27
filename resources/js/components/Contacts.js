import React from 'react';
import axios from "axios";
import Contact from './Contact';

class Contacts extends React.Component{

    state={
        contacts : [],
        loading: true,
    }
    fetchContact = async () => {
        const res  = await axios.get("/contact");
        if(res.data.status === 200){
            this.setState({contacts:res.data.contacts});
            this.setState({loading: false});
        }

    }

    deleteContact =  async(id) => {

        const res = await axios.delete(`/contact/${id}`);
        if(res.data.status === 200 ){
           this.fetchContact();
        }
        
    }

   

    componentDidMount() {
        this.fetchContact();
    }
    render(){
        if(this.state.loading){
            return <h1>Loading ...</h1>
        }
        return (
            <div>
            {this.state.contacts.map(contact => (
                <Contact contact={contact} key={contact.id}  deleteContact = {this.deleteContact}/>

            ))}

            </div>
           
        )
    }

}
export default Contacts
