import Image from 'next/image';

const ProfileImage = ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => {
  return <Image src={src} alt={alt} width={width} height={height} className="object-cover" priority />;
};

export default ProfileImage;