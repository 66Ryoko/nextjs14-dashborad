'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const QUERY = 'query';
  const PAGE = 'page';
  const DEBOUNCE_SEARCH_TIME = 300;
  const handleSearch = useDebouncedCallback((keyword: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(PAGE, '1');
    if (keyword) {
      params.set(QUERY, keyword);
    } else {
      params.delete(QUERY);
    }
    replace(`${pathname}?${params.toString()}`);
  }, DEBOUNCE_SEARCH_TIME);
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get(QUERY)?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
