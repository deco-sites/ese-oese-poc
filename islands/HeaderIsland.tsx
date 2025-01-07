import { useEffect, useState } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface Category {
  label: string;
}

export interface Props {
  categories: Category[];
}

export default function Header({ categories }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(globalThis.scrollY > 0);
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md py-2" : "bg-transparent text-white py-4 : hover:bg-white hover:text-black hover:shadow-md"
      }`}
    >
      
      <div class="flex justify-between items-center px-4 header-content">
        
        <div class="text-sm space-x-4">
          <a href="#" class="hover:underline">es</a>
          <a href="#" class="hover:underline">en</a>
          <a href="#" class="hover:underline">fr</a>
        </div>

        
        <div class="flex items-center space-x-4 text-sm">
          <Icon size={28} id="icon-search"/>
          <Icon size={32} id="icon-profile"/>
          <Icon size={28} id="icon-shop"/>
          <Icon size={28} id="icon-phone"/>
        </div>
      </div>

      
      {!isScrolled && (
        <div class="text-center py-10">
          <h1 class="text-5xl md:text-7xl font-bold tracking-wide">
            ese O ese
          </h1>
        </div>
      )}

      
      <nav>
        <ul class="flex justify-center space-x-8 py-2 px-4 text-sm">
          {categories.map((category) => (
            <li class="group relative">
              <a
                href="#"
                class="hover:underline whitespace-nowrap font-medium"
              >
                {category.label}
              </a>
              
              <div class="hidden absolute top-full left-0 right-0 bg-white p-6 shadow-lg z-40">
                <div class="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* {category.subcategories.map((subcategory) => (
                    <a
                      href={subcategory.url}
                      class="flex items-center space-x-4 hover:bg-gray-100 p-2 rounded"
                    >
                      {subcategory.image && (
                        <img
                          src={subcategory.image}
                          alt={subcategory.label}
                          class="w-12 h-12 object-cover"
                        />
                      )}
                      <span>{subcategory.label}</span>
                    </a>
                  ))} */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

