import "./searchbox.styles.css";

const SearchBox = ({ className, placeholder, value, handleOnChange }) => {
  return (
    <div className="">
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
