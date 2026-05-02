const getCategoriesData = async () => {
  const res = await fetch(`http://localhost:3000/category.json`);
  return res.json();
};

export default getCategoriesData;
