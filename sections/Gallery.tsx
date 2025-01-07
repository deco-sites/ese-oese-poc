import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface GalleryImage {
  image: ImageWidget;
  title: string;
  url: string;
}

export interface Props {
  images: GalleryImage[];
}

export default function SectionGallery({ images }: Props) {
  return (
    <section class="w-full bg-black relative mb-12">
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-0">
        {images.map((image, index) => (
          <div key={index} class="relative w-full h-64 sm:h-96">
            <Image
              width={640}
              class="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
              src={image.image} 
              alt={image.title}     
              decoding="async"
              loading="lazy"
            />
            
            <div class="absolute bottom-4 left-4 text-white p-2 rounded">
              <a
                href={image.url} 
                class="text-white text-lg font-semibold underline hover:text-black"
              >
                {image.title}
              </a> 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
