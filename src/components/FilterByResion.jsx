const FilterByResion = ({ setQuerry }) => {
  return (
    <select name="country" onChange={(e) => setQuerry(e.target.value)}>
      <option hidden>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default FilterByResion;
