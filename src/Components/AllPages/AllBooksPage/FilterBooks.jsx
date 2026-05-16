import getCategoriesData from '@/lib/getCategoriesData';
import { Button } from '@heroui/react';
import Link from 'next/link';

const FilterBooks = async () => {
  const categoryData = await getCategoriesData();
  return (
    <div
      className="space-y-2 flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
    >
      <div>
        <h2 className="text-lg font-bold text-gray-800 tracking-tight">Categories:</h2>
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
            <Button className="bg-white border border-slate-200 shadow-sm text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300 rounded-xl font-medium">
              {category.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterBooks;
