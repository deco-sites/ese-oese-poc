export interface Props {
  title?: string;
  description?: string;
  backgroundImage?: string;
  link1?: string;
  link2?: string;
}

export default function HeroFlats({
  title,
  description,
  backgroundImage,
  link1,
  link2,
}: Props) {
  return (
    <section
      class="w-screen h-screen flex items-center justify-center text-center bg-cover bg-center relative mb-12"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      
      <div class="text-white space-y-4 px-4">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight">{title}</h1>
        <p class="text-lg md:text-xl leading-relaxed">{description}</p>
      </div>

      
      {link1 && (
        <a
          href={link1}
          class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-3xl md:text-4xl font-bold hover:text-gray-300 hover:scale-110 transition-transform"
        >
          &lt;
        </a>
      )}
      {link2 && (
        <a
          href={link2}
          class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-3xl md:text-4xl font-bold hover:text-gray-300 hover:scale-110 transition-transform"
        >
          &gt;
        </a>
      )}
    </section>
  );
}
