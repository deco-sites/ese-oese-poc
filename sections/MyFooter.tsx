import Icon from "site/components/ui/Icon.tsx";

export interface Link {
  title: string;
  link?: string;
}

export interface Category {
  title: string;
  links: Link[];
}

export interface Props {
  categories: Category[];
  bottomLinks: Link[];
}

const MyFooter = ({ categories, bottomLinks } : Props) => {
  return (
    <footer class="bg-gray-100 text-gray-700">
      
      <div class="w-full h-[1px] bg-black mb-4"></div>

      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.title} class="space-y-4">
              <h2 class="font-bold text-lg">{category.title}</h2>
              <ul class="space-y-2">
                {category.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.link}
                      class="hover:underline text-sm text-gray-600"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div class="flex justify-center items-center mt-28 space-x-4">
          <a href="#" class="hover:opacity-75">
            <Icon size={28} id="spotify" />
          </a>
          <a href="#" class="hover:opacity-75">
            <Icon size={28} id="tiktok" />
          </a>
          <a href="#" class="hover:opacity-75">
            <Icon size={28} id="whatsapp" />
          </a>
          <a href="#" class="hover:opacity-75">
            <Icon size={28} id="facebook" />
          </a>
          <a href="#" class="hover:opacity-75">
            <Icon size={28} id="instagram" />
          </a>
          <a href="#" class="hover:opacity-75">
            <Icon size={28} id="pinterest" />
          </a>
          <a href="#" class="hover:opacity-75">
            <Icon size={28} id="youtube" />
          </a>
          <a href="#" class="hover:opacity-75">
            <Icon size={28} id="linkedin" />
          </a>
        </div>

        <p class="text-center text-sm text-gray-500 mt-4  mb-16">
          ©2025 MODA ESEOESE, SL.U. | ALL RIGHTS RESERVED
        </p>
      </div>

      <div class="bg-gray-200 py-4">
        <div class="container mx-auto flex flex-wrap justify-center space-x-4">
          {bottomLinks.map((link) => (
            <a
              key={link.title}
              class="text-sm text-gray-600 hover:underline"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
