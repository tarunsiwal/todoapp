const replaceTemp = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.name);
  output = output.replace(/{%IMAGE%}/g, product.photoUrl);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  return output;
};

export default replaceTemp;
