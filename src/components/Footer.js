import "../css/footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
    return (
        <div className="footer-section">
            <div>
                <h3>Store</h3>
                <ul>
                    <li>Protective Gear</li>
                    <li>Performance Layers</li>
                    <li>Luggage</li>
                    <li>Accessories</li>
                    <li>Lifestyle Merch</li>
                </ul>
            </div>
            <div>
                <h3>Support</h3>
                <ul>
                    <li>Protective Gear</li>
                    <li>Performance Layers</li>
                    <li>Luggage</li>
                    <li>Accessories</li>
                    <li>Lifestyle Merch</li>
                </ul>
            </div>
            <div>
                <h3>Contact Us</h3>
                <div>
                    <p>Contact Number: 07795688316</p>
                    <p>Mon-Fri 11.00 AM to 4.30 PM</p>
                    <p>For any Queries please contact <Link>Customer Support</Link></p>
                </div>
            </div>
            <div>
                <h3>Location</h3>
                <div>
                    <p>Rynox Gear HQ,</p>
                    <p>1107, Kohinoor Square,</p>
                    <p>NC Kelkar Marg,</p>
                    <p>Opposite Shiv Sena Bhavan</p>
                    <p>Dadar(west),</p>
                    <p>Mumbai, Maharashtra 400028</p>
                    <p>+91 7795688316</p>
                </div>
            </div>
        </div>
    )
}