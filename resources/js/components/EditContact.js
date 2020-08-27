import React from 'react';
import axios from 'axios';


class EditContact extends React.Component{

    state = {
              fullName:'',
              email:'',
              phone:''}
    handleInput = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    updateContact = async (e) =>{
        
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/contact/${id}`,this.state);
        if(res.data.status === 200){
            this.props.history.push("/");
        }
    }

    fetchContact = async (e) =>{
        const id = this.props.match.params.id;
        const res = await axios.get(`/contact/${id}/edit`);
        this.setState({fullName : res.data.contact.fullName});
        this.setState({email : res.data.contact.email});
        this.setState({phone : res.data.contact.phone});
    }

    componentDidMount() {
        this.fetchContact();
    }
    render(){
        return (
            <div>
                <h1>Edit Contact</h1>
                <form onSubmit={this.updateContact}>
                    <div className="form-group">
                    <input type="text" name="fullName" className="form-control"
                     value={this.state.fullName} onChange={this.handleInput} 
                     placeholder="Enter Full Name" required/>    
                    </div>    
                    <div className="form-group">
                    <input type="email" name="email" className="form-control"
                     value={this.state.email} onChange={this.handleInput} 
                     placeholder="Enter Email" required/>    
                    </div> 
                    <div className="form-group">
                    <input type="text" name="phone" className="form-control"
                     value={this.state.phone} onChange={this.handleInput} 
                     placeholder="Enter Phone Number" required/>    
                    </div>  
                    <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Edit Contact"/>
                    </div>    
                </form>        

            </div>
        )
    }

}
export default EditContact
