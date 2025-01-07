import { useEffect, useState } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx"; 

export interface imageUnit {
  image: ImageWidget;
}

export interface Props {
  images?: imageUnit[];
  title?: string;
  description?: string;
}

export default function SectionImageGrid({ images, title, description }: Props) {
  const [currentImages, setCurrentImages] = useState<imageUnit[]>(images || []);

  useEffect(() => {
    if (!images) return;
    
    const changeImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      const newImages = [...currentImages];
      newImages[randomIndex] = { image: images[Math.floor(Math.random() * images.length)].image };
      setCurrentImages(newImages);
    };

    const intervalId = setInterval(changeImage, 1000);
    return () => clearInterval(intervalId);
  }, [currentImages, images]);

  return (
    
    <section class="w-full h-screen relative">
      
      <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center z-10 text-white">
        <div>
          <h1 class="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p class="text-lg md:text-xl">{description}</p>
        </div>
      </div>

      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-0 w-full h-full">
        {currentImages.map((unit, index) => (
          <div key={index} class="relative w-full h-full">
            <Image
              width={640}
              class="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, 25vw"
              src={unit.image}
              alt={unit.image}
              decoding="async"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
    
  );
} 