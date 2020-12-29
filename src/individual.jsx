import react from "react";

const individual = individuals.map((individual, index) => {
return ( <individual
    key={index}
    actuelState={individual.actualState}
    fragilityState={individual.fragilityState}
    top={individual.top}
    left={individual.left}
  />)
});
