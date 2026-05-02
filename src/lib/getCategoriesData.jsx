const getCategoriesData = async () => {
  const res = await fetch(
    `https://online-book-borrowing-platform.vercel.app/category.json`,
  );
  return res.json();
};

export default getCategoriesData;
