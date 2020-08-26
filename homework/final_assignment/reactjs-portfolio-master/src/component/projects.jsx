import React from "react";
import corona from "../img/corona.png";
import finance from "../img/finance2.png";
import img from "../img/img.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div className="container-fluid bg-light">
					<div className=" project-container container bg-light ">
						<div id="my-projects" className="row  justify-content-center mx-auto">
						<h1  id ="projects" className={"text-center" + this.props.fadeInRight}>
							Projects
							<br/><br/><br/>
						</h1>
						</div>
						<div className="row text-center align-items-center">
							<div className="col-lg-4 col-md-4 col-sm-12">
							<div className={"card"+this.props.fadeInRight} >
								{console.log(this.props)}
								<img className="card-img-top" src={img} alt="Card image cap"/>
								<div className="card-body">
									<h5 className="card-title">Image Compressor</h5>
									<p className="card-text">A quick tool to compress images on the go and is live.</p>
									<a href="https://imgcompressor.netlify.app/" className="btn btn-primary">
										LIVE DEMO
									</a>
								</div>
							</div>
							<br/><br/>
							</div>
							<div className="col-lg-4 col-md-4  col-sm-12">
							<div className="card">
								<img className="card-img-top" src={corona} alt="Card image cap"/>
								<div className="card-body">
								<h5 className="card-title">Covid 19 Tracker</h5>
									<p className="card-text">A Website to track corona patients in District wise result in a second.</p>
									<a href="http://indiacorona.live/" className="btn btn-primary">
										LIVE DEMO
									</a>
							</div>
							</div>
							
							<br/><br/>
							</div>
							<div className="col-lg-4 col-md-4  col-sm-12">
							<div className="card" >
								<img className="card-img-top" src={finance} alt="Card image cap"/>
								<div className="card-body">
									<h5 className="card-title">TO-Do App</h5>
									<p className="card-text">This is an app whic uses react to maintain a todo list</p>
									<a href="https://github.com/aalaprawat/cipherschooolassignment" className="btn btn-primary">GITHUB</a>
								</div>
							</div>
							
							<br/><br/>
							</div>
							
						</div>
						
						<br/><br/><br/><br/><br/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
