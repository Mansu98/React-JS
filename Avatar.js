import React, { Component } from 'react';

import Avatarlist from "./Avatarlist";
import 'tachyons';

class Avatar extends Component{
    constructor(){
        super();
        this.state ={name:"Welcome to Avatar World!"}
    }

    nameChange(){
        this.setState({name:"Welcome! You just clicked Avatar"})
    }

    render(){
        const avatarlistarray =[
            {
                id:1,
                name:"Ram Sharma",
                work:"MongoDB"

            },
            {
                id:2,
                name:"Shyam Thapa",
                work:"Express JS"  
            },
            {
                id:3,
                name:"Hari Poudel",
                work:"React JS"
            },
            {
                id:4,
                name:"Pooja Gaire",
                work:"Node JS"
            }
    ]
    const avatarcardarray = avatarlistarray.map((avatarlist, i)=>{
        return <Avatarlist key={i}
        id={avatarlistarray[i].id}
        name={avatarlistarray[i].name}
        work={avatarlistarray[i].work}
        />
    })
    return(
        <div>
            <h1 className="centertext tc">
                {this.state.name}
            </h1>
            {avatarcardarray}
            <h3 className="ok tc"><button className="okk f6 link dim br1 ph3 pv2 mb2 dib  bg-pink"  onClick={()=>this.nameChange()}>Avatar World</button></h3>
        </div>
    )
    }
}
export default Avatar;