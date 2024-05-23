import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Twitter } from "@mui/icons-material";
import "../styles/footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <InstagramIcon style={{ fontSize: 50, color: "#e1306c" }} />
        <FacebookIcon style={{ fontSize: 50, color: "#3b5998" }} />
        <Twitter style={{ fontSize: 50, color: "#1da1f2" }} />
        <LinkedInIcon style={{ fontSize: 50, color: "#0077b5" }} />
      </div>
      <p>&copy; 2024 YourTastyPizza.com</p>
    </div>
  );
}
