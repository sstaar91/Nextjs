import Image from "next/image";
import logo from "@_assets/img/logo.png";

const Logo = () => {
  return (
    <div className="w-12 h-12 rounded-xl bg-white">
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
