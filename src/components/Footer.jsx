import Facebook from "./icons/social/Facebook";
import Instagram from "./icons/social/Instagram";
import Tiktok from "./icons/social/Tiktok";
const Footer = () => {
  return (
    <div className="bg-brand items-centera flex justify-between p-4 text-white">
      <div className="flex gap-3">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <Facebook className="w-8" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <Instagram className="w-8" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
          <Tiktok className="w-8" />
        </a>
      </div>
      <div>
        <p>copyRights 2026</p>
      </div>
    </div>
  );
};

export default Footer;
