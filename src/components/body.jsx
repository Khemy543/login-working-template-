import React,{Component} from 'react';
import '../styles/landingpage.css';
import Slideview from './carousel';
import ProductCategories from '../components/landingCategories';
import 'font-awesome/css/font-awesome.min.css';


class Body extends Component {
    render(){
        return(
           <main>
               <div className="app">
                   <Slideview id="view"/>
                </div>
               <section>
            <h2>About Us</h2>
            <div>
             <p>In the study of engineering, quantities are either described as vectors or scalars. Vectors
represent quantities that have both magnitude and direction, while scalars represent
quantities that have only magnitude and no direction. Vectors are commonly used in
electromagnetic fields and quantities such as the electric field intensity, the electric flux
density, the magnetic field intensity and other such quantities are vectors.
Since these quantities may have an arbitrary orientation in space at any given time, we
need to define a set of three reference directions at every point by which we can describe
vectors drawn to represent these quantities. This unit thus introduces you to the

</p>

            </div>
           
        </section>

        <div>
    <ProductCategories />
    </div>

    <section>
            <h2>Our Mission</h2>
            <div>
              <p>Since these quantities may have an arbitrary orientation in space at any given time, we
need to define a set of three reference directions at every point by which we can describe
vectors drawn to represent these quantities.Since these quantities may have an arbitrary orientation in space at any given time, we
need to define a set of three reference directions at every point by which we can describe
vectors drawn to represent these quantities.</p>
              
              </div>
        </section>

      {/*   <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><i className ="fa fa-calendar fa-2x" aria-hidden="true" ></i></p>
                <p className="service-title">Planning</p>
                <p>Since these quantities may have an arbitrary orientation in space at any given time, we
need to define a set of three reference directions at .</p>
                </div>
                <div className="service-two">
                <p className="service-icon"><i className="fa fa-pencil fa-2x" aria-hidden="true"></i></p>
                <p className="service-title">Design</p>
                <p>Since these quantities may have an arbitrary orientation in space at any given time, we
need to define a set of three reference directions at every point by which we can describe.</p>
            
                </div>
                <div className="service-three">
                <p className="service-icon"><i className="fa fa-industry fa-2x" aria-hidden="true"></i></p>
                <p className="service-title">Development</p>
                <p>Since these quantities may have an arbitrary orientation in space at any given time, we
need to define a set of three reference directions at every </p>
              
          </div>
        </div>

            </div> */}

<div className="section">
        <div className="container">
             <div className="row">
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon">
                            <i className="fa fa-pencil"></i>
                        </div>
                        <h3>Sales</h3>
                        <p className="description">We make our design perfect for you. Our adjustment turn our clothes into your clothes.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon">
                            <i className="fa fa-book"></i>
                        </div>
                        <h3>Content</h3>
                        <p className="description">We create a persona regarding the multiple wardrobe accessories that we provide..</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon">
                            <i className="fa fa-music"></i>
                        </div>
                        <h3>Music</h3>
                        <p className="description">We like to present the world with our work, so we make sure we spread the word regarding our clothes.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

         </main>     
        );
    }
}
export default Body;