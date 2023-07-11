import { Link } from 'react-router-dom';
import './styles/Footer.css';
import iconeBebida from '../images/iconeBebida.png';
import iconePrato from '../images/iconePrato.png';

function Footer() {
  return (
    <div className="footer-container" data-testid="footer">
      <Link to="/drinks">
        <img data-testid="drinks-bottom-btn" src={ iconeBebida } alt="" />
      </Link>

      <Link to="/meals">
        <img data-testid="meals-bottom-btn" src={ iconePrato } alt="" />
      </Link>
    </div>
  );
}

export default Footer;
