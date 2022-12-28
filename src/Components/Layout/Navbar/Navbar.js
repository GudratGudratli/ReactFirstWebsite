import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Home">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div>
          <p>Start Bootstrap</p>
        </div>
        <div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <a class="navbar-brand text-secondary" href="#">Navbar</a>
            <span class="navbar-toggler-icon text-white"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link text-secondary" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-secondary" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown link
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item text-secondary" href="#">Action</a>
                  <a class="dropdown-item text-secondary" href="#">Another action</a>
                  <a class="dropdown-item text-secondary" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}