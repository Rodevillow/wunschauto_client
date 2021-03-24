const arraySeperator = (array, size) => {

  let sub_arrays = [];
  
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    sub_arrays[i] = array.slice(i * size, i * size + size);
  }

  return sub_arrays;
};

export default arraySeperator;
