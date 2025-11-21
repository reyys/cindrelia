import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#F5F5F0] pt-32 pb-10 px-6 md:px-12 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-6">
          <h2 className="text-6xl md:text-8xl font-serif mb-8">
            Stay in <br />
            <span className="italic text-[#Cfb53b]">Vogue.</span>
          </h2>
          <div className="flex border-b border-white/30 pb-4 max-w-md group focus-within:border-[#Cfb53b] transition-colors">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent w-full outline-none placeholder:text-gray-600 text-lg"
            />
            <button className="uppercase text-xs tracking-widest hover:text-[#Cfb53b] interactive">
              Subscribe
            </button>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-8">
          <h4 className="uppercase tracking-widest mb-6 text-xs text-gray-500">
            Sitemap
          </h4>
          <ul className="space-y-3 font-light text-gray-300">
            {[
              "Shop All",
              "New Arrivals",
              "Accessories",
              "Editorial",
              "About Us",
            ].map((link) => (
              <li
                key={link}
                className="hover:translate-x-2 transition-transform duration-300 cursor-pointer hover:text-[#Cfb53b] interactive"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="uppercase tracking-widest mb-6 text-xs text-gray-500">
            Socials
          </h4>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 hover:text-[#Cfb53b] interactive cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-[#Cfb53b] interactive cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-[#Cfb53b] interactive cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end text-xs text-gray-600 uppercase tracking-wider pt-10 border-t border-white/5">
        <p>© 2025 Cindrelia.id - All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>

      <div className="text-[15vw] text-white/5 font-serif text-center leading-none pointer-events-none select-none mt-20">
        CINDRELIA
      </div>
    </footer>
  );
};

export default Footer;
