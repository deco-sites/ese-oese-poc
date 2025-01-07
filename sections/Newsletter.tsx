export interface Props {
    title: string;
    subtitle: string;
    buttonLabel: string;
    footerTitle: string;
    footerText: string;
  }
  
  export default function Newsletter({
    title,
    subtitle,
    buttonLabel,
    footerTitle,
    footerText,
  }: Props) {
    return (
      <section class="flex flex-col items-center px-4 py-8 space-y-6 bg-gray-50 mb-16">
        <h2 class="text-2xl font-black text-center">{title}</h2>
  
        <p class="text-lg text-center text-gray-600">{subtitle}</p>
  
        <div class="flex items-center w-full max-w-md mt-4">
          <input
            type="email"
            placeholder="Email"
            class="flex-grow h-12 border-b-2 border-gray-400 focus:outline-none focus:border-black transition-colors"
          />
          <button class="ml-4 px-6 h-12 bg-white border border-black text-black hover:bg-black hover:text-white transition">
            {buttonLabel}
          </button>
        </div>
  
        <div class="mt-8 w-full max-w-5xl text-center">
          <h3 class="text-xl font-semibold mb-4">{footerTitle}</h3>
          <p class="text-sm text-gray-600 mx-auto" style={{ width: '90%' }}>
            {footerText}
          </p>
        </div>
      </section>
    );
  }