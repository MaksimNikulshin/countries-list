import { motion } from "framer-motion";
import "../styles/countries.css";

export default function CountryItem({ country, onRemove }) {
  const handleRemove = () => {
    onRemove(country.iso_code3);
  };

  return (
    <motion.li
      className="country-item"
      initial={{ opacity: 1, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className="country-info">
        <img src={country.flag_url} alt={country.name_ru} className="country-flag" />
        <span>{country.name_ru}</span>
      </div>
      <button className="remove-button" onClick={handleRemove}>
        Удалить
      </button>
    </motion.li>
  );
}
