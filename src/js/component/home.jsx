import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "../component/Jumbotron";
import Card from "../component/Card";
import Footer from "../component/Footer"

const Home = () => {
	return (
	  <div>
		<Navbar/> 
		<div className="container-lg">
		<Jumbotron />
</div>
		<div className="container-lg flex">
                <div className="row p-2"> 
                    <div className="col-md-3">
                        <Card />
                    </div>
                    <div className="col-md-3">
                        <Card />
                    </div>
                    <div className="col-md-3">
                        <Card />
                    </div>
                    <div className="col-md-3">
                        <Card />
                    </div>
                </div>
            </div>
            <div style={{marginTop:"150px"}}>
			<Footer/>
            </div>
	  </div>
	  
	);
  }; 
  
  export default Home;



