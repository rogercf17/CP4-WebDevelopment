import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

function Contato() {
    return (
        <div className="container">
            {/* ...resto do código */}
            <div className="social-icons">
                <FaTwitter className="icon" />
                <FaInstagram className="icon" />
                <FaDiscord className="icon" />
            </div>
            {/* ...resto do código */}
        </div>
    );
}