import Image from "next/image";

export const SunIcon = () => {
  return <Image src="/sun.svg" width={20} height={20} alt="moon-icon" />;
};

export const MoonIcon = () => {
  return <Image src="/moon.svg" width={17} height={17} alt="moon-icon" />;
};

export const IndonesiaIcon = () => {
  return (
    <Image src="/indonesia.svg" width={30} height={20} alt="indonesia-icon" />
  );
};

export const ByeIcon = () => {
  return (
    <Image
      src="/bye.svg"
      className="text-yellow-400 "
      alt="icon"
      width={50}
      height={50}
    />
  );
};
