import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountryItem from "./CountryItem";
import "../styles/countries.css";

export default function CountriesList({ countries }) {
  const [visibleCountries, setVisibleCountries] = useState(countries);

  const handleRemove = (code) => {
    setVisibleCountries((prev) => prev.filter((country) => country.iso_code3 !== code));
  };

  return (
    <motion.ul className="countries-list" layout transition={{ duration: 0.5 }}>
      <h1>Список стран</h1>
      <AnimatePresence>
        {visibleCountries.map((country) => (
          <CountryItem key={country.iso_code3} country={country} onRemove={handleRemove} />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
