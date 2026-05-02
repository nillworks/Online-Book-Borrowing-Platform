import getCategoriesData from '@/lib/getCategoriesData';
import { Button } from '@heroui/react';
import Link from 'next/link';

const FilterBooks = async () => {
  const categoryData = await getCategoriesData();
  return (
    <div
      className="space-y-2 flex flex-col sm:flex-row gap-4
    "
    >
      <div>
        <h2 className="text-2xl font-medium ">Filter Category</h2>
      </div>

      <div className="flex gap-2">
        {categoryData?.categories?.map(category => (
          <Link
            href={
              category.slug === 'all-books'
                ? `?category=all-books`
                : `?category=${category.slug}`
            }
            key={category.id}
          >
            <Button variant="secondary">{category.name}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterBooks;
