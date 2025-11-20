const SectionPress = () => (
  <div className="py-24 bg-[#050505] border-t border-white/10 text-center">
    <span className="uppercase text-xs tracking-[0.3em] text-gray-500">
      As seen in
    </span>
    <div className="flex flex-wrap justify-center gap-12 md:gap-24 mt-12 px-6 opacity-50 grayscale">
      {["VOGUE", "HARPER'S BAZAAR", "ELLE", "L'OFFICIEL", "VANITY FAIR"].map(
        (brand) => (
          <h3
            key={brand}
            className="text-3xl md:text-5xl font-serif italic text-[#F5F5F0] hover:text-[#Cfb53b] transition-colors cursor-default"
          >
            {brand}
          </h3>
        )
      )}
    </div>
  </div>
);

export default SectionPress;
