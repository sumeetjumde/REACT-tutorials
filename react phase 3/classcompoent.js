import React  from "react"
import { render } from "react-dom"

class Apps extends React.Component{
    render(){
        return(
            
            <div>
                <h1>THIS IS CLASS BASED COMPONENT</h1>
                <Header username="Sumeet"/>
                <h1>THIS IS STATE</h1>
                <State />
                <br />
                <School />
                <br />
                <Loginlogout/>
                <Image />
                <Count/>
                <Conditional/>
                <Cond/>
                <Cond1/>
                <Mount/>
                <Form/>
            </div>
        )
    }
}


class Header extends React.Component{

    render(){
        
        return(
            <header>
                <p>Welcome,{this.props.username}</p>
            </header>
        )

        
    }
}

class State extends React.Component{
    constructor(){
        super()
        this.state={
            answer:"yes"
        }
    }

    render(){

        return(
            <div>
                <h1>This is State {this.state.answer}</h1>
            </div>
        )
    }
}

class School extends React.Component{
    constructor(){
        super()
        this.state={
            name:"killua",
            age:17
        }
    }

    render(){

        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} Years old</h3>
            </div>
        )
    }
}
class Loginlogout extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedIn:true
        }
    }

    render(){
        let wordDisplay
    if(this.state.isLoggedIn===true){
        wordDisplay="in"
    }
    else wordDisplay="out"
        return(
            <div>
                <h1>you are currently Logged {wordDisplay}</h1>
                
            </div>
        )
    }
}

function handleClicked(){
    console.log("clicked")
}
function Image(){
    return(
        <div>
            <img onMouseOver={()=>console.log("hovered")} src="https://i.ytimg.com/vi/4iR-ryO1GgI/maxresdefault.jpg"/>
            <button onClick={handleClicked}>Click Me</button>
        </div>
    )
}

class Count extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.handleClicked=this.handleClicked.bind(this)
    }

    handleClicked(){
        this.setState(prevState=>{
            return{
                count:prevState.count+1
            }
        })
    }

    render(){

        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClicked}>click to increment</button>
                
            </div>
        )
    }
}

class Conditional extends React.Component{
    constructor(){
        super()
        this.state={
            isLoading:true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
        this.setState({
            isLoading:false
        })
    },1500)
    }

    render(){
        
        return(
            <div>
                <Conditionalcom isLoading={this.state.isLoading}/>
                
            </div>
        )
    }
}

function Conditionalcom(props){
    if(props.isLoading===true){
        return(
            <h1>Loading...</h1>
        )
    }
    else{
        return(
            <h1>some content is loaded </h1>
        )
    }
    
}

class Cond extends React.Component{
    constructor(){
        super()
        this.state={
            unreadmessage:["a","b"]
        }
    }
    render(){
        return(
            <div>
                {   this.state.unreadmessage.length>0 &&
                    <h2>you have {this.state.unreadmessage.length} unread Messages</h2>
                }
            </div>
        )
    }
}
class Cond1 extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedin:false
        }
        this.handleClicked=this.handleClicked.bind(this)
    }
    handleClicked(){
        
        this.setState(prevState=>{
            return{
                isLoggedin:!prevState.isLoggedin
            }
        })
    }
    
    render(){
        let buttonText=this.state.isLoggedin?"Log Out":"Log in"
        let displaytext=this.state.isLoggedin?"loggedin":"loggedout"
        return(
            <div>
                <button onClick={this.handleClicked}>{buttonText}</button>
                <h1>{displaytext}</h1>
            </div>
        )
    }
}

class Mount extends React.Component{
    constructor(){
        super()
        this.state={
            loading:false,
            character:{}
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch("https://swapi.dev/api/people/1/").then(response=>response.json())
        .then(data=>{
            this.setState({
                loading:false,
                character:data})
        })
    }

    render(){
        const text=this.state.loading?"Loading..":this.state.character.name
        return(
            <div>
            <h1>{text}</h1>  
            </div>
        )
    }
}

class Form extends React.Component{
    constructor(){
        super()
        this.state={
            firstname:"",
            lastname:""
            
        }
        this.handlechange=this.handlechange.bind(this)
    }

   
    handlechange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        
        return(
            
            <form>
                <input type="text" name="firstname" placeholder="Frist Name" onChange={this.handlechange}/>
                
                <input type="text" name="lastname" placeholder="Last Name" onChange={this.handlechange}/>
                <h1>{this.state.firstname} {this.state.lastname}</h1>
            </form>
            
        )
    }
}

export default Apps