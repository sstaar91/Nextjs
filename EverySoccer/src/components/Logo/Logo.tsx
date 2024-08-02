import Image from "next/image";
import logo from "@_assets/img/logo.png";

interface Props {
  size: number;
}

const Logo = ({ size }: Props) => {
  return (
    <div className={`rounded-xl bg-white`}>
      <Image src={logo} alt="logo" width={size} height={size} />
    </div>
  );
};

export default Logo;
