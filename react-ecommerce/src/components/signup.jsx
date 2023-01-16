import React from "react"
export default function Signup(){
    return(
        <div>
            <h1>Sign up</h1>
            <form action="">
                <label htmlFor="name" className="text-start" >Name*</label>
                <br />
                <input type="text" name="Enteryourname" placeholder="Enter Your Name" />
                <label htmlFor="email" className="text-start" >Name*</label>
                <br />
                <input type="email" name="Enteryourname" placeholder="Enter Your Name" />
                <label htmlFor="name" className="text-start" >Name*</label>
                <br />
                <input type="text" name="Enteryourname" placeholder="Enter Your Name" />
            </form>
        </div>
    )
}