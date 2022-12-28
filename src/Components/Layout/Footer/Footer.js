import './Footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      <footer class="navbar navbar-expand-lg navbar-light bg-dark">
        <div>
          <p>Copyright © Your Website 2022</p>
        </div>
        <div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <a class="navbar-brand text-secondary" href="#">Navbar</a>
            <span class="navbar-toggler-icon text-white"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link text-white" href="#">Privacy</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Terms</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white " href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}