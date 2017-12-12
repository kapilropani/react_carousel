
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel2';


import '../bootstrap/css/bootstrap.css'
import '../bootstrap/css/owl.carousel.min.css';
import '../bootstrap/css/owl.theme.default.min.css';
import '../bootstrap/css/style.css';

export default class Carousel2 extends Component {
	
	constructor(props, context) {
		super(props, context);
		
		this.state = {
			items: [
				// <div key={1} className="item"><img src="https://goo.gl/vkVMvy" alt="The Last of us" /></div>,
				// <div key={2} className="item"><img src="https://goo.gl/4XRLxU" alt="GTA V" /></div>,
				// <div key={3} className="item"><img src="https://goo.gl/TcVXjx" alt="Mirror Edge" /></div>,
				// <div key={4} className="item"><img src="https://goo.gl/rd3YCH" alt="Mirror Edge" /></div>
				
        <div key={1} className="item">
          <div className="carousel-card">
            <div className="carousel-card-overlay"></div>
            <img src="https://goo.gl/CyeZi2"/>
            <div className="carousel-card-details fadeIn-bottom">
              <i className="fa fa-music" aria-hidden="true"></i>
              <p className="carousel-card-text">This is a short description</p>
            </div>
          </div>
              <h6 className="album-title pt-3"><a href="">Tiger Zinda Hai – 2017</a></h6>
        </div>,

        <div key={2} className="item">
        <div className="carousel-card">
          <div className="carousel-card-overlay"></div>
          <img src="https://goo.gl/11GCFp"/>
          <div className="carousel-card-details fadeIn-bottom">
            <i className="fa fa-music" aria-hidden="true"></i>
            <p className="carousel-card-text">This is a short description</p>
          </div>
        </div>
            <h6 className="album-title pt-3"><a href="">Tiger Zinda Hai – 2017</a></h6>
        </div>,

      <div key={3} className="item">
      <div className="carousel-card">
        <div className="carousel-card-overlay"></div>
        <img src="https://goo.gl/okB1ML"/>
        <div className="carousel-card-details fadeIn-bottom">
          <i className="fa fa-music" aria-hidden="true"></i>
          <p className="carousel-card-text">This is a short description</p>
        </div>
      </div>
          <h6 className="album-title pt-3"><a href="">Tiger Zinda Hai – 2017</a></h6>
      </div>,

      <div key={4} className="item">
      <div className="carousel-card">
      <div className="carousel-card-overlay"></div>
      <img src="https://goo.gl/maLjVe"/>
      <div className="carousel-card-details fadeIn-bottom">
        <i className="fa fa-music" aria-hidden="true"></i>
        <p className="carousel-card-text">This is a short description</p>
      </div>
      </div>
        <h6 className="album-title pt-3"><a href="">Tiger Zinda Hai – 2017</a></h6>
      </div>,

      <div key={5} className="item">
      <div className="carousel-card">
      <div className="carousel-card-overlay"></div>
      <img src="https://goo.gl/11GCFp"/>
      <div className="carousel-card-details fadeIn-bottom">
        <i className="fa fa-music" aria-hidden="true"></i>
        <p className="carousel-card-text">This is a short description</p>
      </div>
      </div>
        <h6 className="album-title pt-3"><a href="">Tiger Zinda Hai – 2017</a></h6>
      </div>,

      <div key={6} className="item">
      <div className="carousel-card">
      <div className="carousel-card-overlay"></div>
      <img src="https://goo.gl/okB1ML"/>
      <div className="carousel-card-details fadeIn-bottom">
      <i className="fa fa-music" aria-hidden="true"></i>
      <p className="carousel-card-text">This is a short description</p>
      </div>
      </div>
      <h6 className="album-title pt-3"><a href="">Tiger Zinda Hai – 2017</a></h6>
      </div>,

      <div key={7} className="item">
      <div className="carousel-card">
      <div className="carousel-card-overlay"></div>
      <img src="https://goo.gl/maLjVe"/>
      <div className="carousel-card-details fadeIn-bottom">
      <i className="fa fa-music" aria-hidden="true"></i>
      <p className="carousel-card-text">This is a short description</p>
      </div>
      </div>
      <h6 className="album-title pt-3"><a href="">Tiger Zinda Hai – 2017</a></h6>
      </div>,

      <div key={8} className="item">
      <div className="carousel-card">
        <div className="carousel-card-overlay"></div>
        <img src="https://goo.gl/CyeZi2"/>
        <div className="carousel-card-details fadeIn-bottom">
          <i className="fa fa-music" aria-hidden="true"></i>
          <p className="carousel-card-text">This is a short description</p>
        </div>
      </div>
          <h6 className="album-title pt-3"><a href="">Tiger Zinda Hai – 2017</a></h6>
      </div>
									
      ],

      itemNo: 5,
      loop: true,
      margin: 10,
      navigation : false,
      resp: {

        0: {
          items: 2,
          margin: 10,
          nav: true

        },

        450: {
          items: 3,
          margin: 10,
          nav: true
        },

        650: {
          items: 4,
          margin: 10,
          nav: true
        },

        800: {
          items: 4,
          margin: 10,
          nav: true
        },

        1000: {
          items: 5,
          margin: 10,
          nav: true
        },

        1400: {
          items: 5,
          margin: 20,
          nav: true
        }
      }

		};
	}

	render() {
		
		const options = {
			items: this.state.itemNo,
			loop: this.state.loop,
			nav: this.state.navigation,
			rewind: this.state.rewind,
      autoplay: this.state.autoplay,
      responsive: this.state.resp
    };
    
		return (
			<div className="container mt-5">
			<div className="row m-0">
				<div className="col-md-8 sec-bg">
					<div className="row">
						<div className="col-md-12 pt-3">
							<h5 className="tt">Bollywood New Releases</h5>
							<span className="liner"></span>
							<div className="owl-carousel owl-theme mt-3">
								<OwlCarousel ref="car" options={options} className="carousle-card">
									{this.state.items}
								</OwlCarousel>
			 				</div>
                <div className="btn btn-sm pri-btn ter-bg mt-2 mb-3 float-right" >
                  <a href="https://bestsongs.pk/songs/category/bollywood-new-releases">View All ❯❯</a>
                </div>
			 				</div>
			 			</div>
			 		</div>
			 	</div>
			 </div>

		);
	}
}

// ReactDOM.render(<App />, document.getElementById('root'));
