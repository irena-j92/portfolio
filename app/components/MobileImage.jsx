import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const MobileImage = ({ src, alt, ...props }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      router.push(
        { pathname: router.pathname, query: { ...router.query, image: src } },
        undefined,
        { shallow: true }
      );
    }
  };

  return <Image src={src} alt={alt} onClick={handleClick} {...props} />;
};

export default MobileImage;
