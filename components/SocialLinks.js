import Link from "next/link";

const SocialLinks = () => (
  <div className="social-links">
    <Link href="https://www.facebook.com/">
      <a target="_blank" className="pl-0">
        <i className="ti-facebook"></i>
      </a>
    </Link>
    <Link href="https://www.twitter.com/">
      <a target="_blank">
        <i className="ti-twitter"></i>
      </a>
    </Link>
    <Link href="https://www.instagram.com/">
      <a target="_blank">
        <i className="ti-instagram"></i>
      </a>
    </Link>
    <Link href="https://www.linkedincom/">
      <a target="_blank">
        <i className="ti-linkedin"></i>
      </a>
    </Link>
  </div>
);

export default SocialLinks;
