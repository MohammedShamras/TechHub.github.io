import { Link } from "react-router-dom";
import './Navigation.css'





function Navigation(){
    return(

      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar fixed-top">
          <div class="container-fluid">
            <Link class="navbar-brand" to={"/Home"}>Tech Hub </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div class="navbar-nav ">
                <Link className="nav-link active" to={"/Home"}><p className="Nav-option"> Home</p></Link>

                <Link className="nav-link" to={"/Register"}><p className="Nav-option"> Register</p></Link>
              </div>
            </div>
          </div>
        </nav>



      </div>
       
    );
}
export default Navigation;