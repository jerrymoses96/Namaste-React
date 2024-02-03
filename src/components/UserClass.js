import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            
        }
        
    }
    render(){
        const {name,place} = this.props;
        const {count} = this.state;


        return (
            <div className="user-list">

                    <h1>Name : {name}</h1>
                    <h2>count = {count}</h2>
                    <button onClick={()=>{
                        this.setState({
                            count:this.state.count+1,
                        })
                    }}>click</button>
                    <h2>Place : {place}</h2>
                    <h3>Job : Software Developer</h3>
        
            </div>
            )
    }
};

export default UserClass;