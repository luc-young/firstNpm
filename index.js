const ranNumGen = (min = 0, max = 100) => {
  return Math.round(Math.random() * (max - min) + min);
}

 export default ranNumGen;