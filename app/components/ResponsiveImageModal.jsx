import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ResponsiveImageModal = () => {
  const router = useRouter();
  const image = router.query?.image;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Tailwind's `md`
    };

    handleResize(); // Set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClose = () => {
    const { image, ...rest } = router.query;
    router.push({ pathname: router.pathname, query: rest }, undefined, { shallow: true });
  };

  if (!image || !isMobile) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <button onClick={handleClose} className="absolute top-4 right-4 text-white text-xl">×</button>
      <div className="max-w-full max-h-full p-4">
        <Image
          src={image}
          alt="Enlarged"
          width={600}
          height={400}
          className="w-auto h-auto max-w-full max-h-[80vh] rounded-xl"
        />
      </div>
    </div>
  );
};

export default ResponsiveImageModal;