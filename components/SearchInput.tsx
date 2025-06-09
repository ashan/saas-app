'use client';
import Image from 'next/image';
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useEffect, useState } from 'react';


const SearchInput = () => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const handler = setTimeout(() => {
      if (searchQuery) {
        params.set('topic', searchQuery);
      } else {
        params.delete('topic');
      }
      router.push(`${pathName}?${params.toString()}`, {
        scroll: false,
      });
    }, 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image
        src="/icons/search.svg"
        alt="search"
        width={15}
        height={15}
      />
      <input
        placeholder="Search Companions..."
        className="outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
