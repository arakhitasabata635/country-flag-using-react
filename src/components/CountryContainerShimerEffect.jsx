import "./CountryContainerShimerEffect.css";
const CountryContainerShimerEffect = () => {
  const shimmerArray = new Array(20).fill(undefined);
  return (
    <div className="country">
      <div className="container">
        {shimmerArray.map((el,i) => (
          <div key={i} className="country-div shimmer-effect"></div>
        ))}
      </div>
    </div>
  );
};

export default CountryContainerShimerEffect;
