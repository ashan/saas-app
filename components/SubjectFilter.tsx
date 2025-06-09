'use client';
import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { subjects } from '@/constants';
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

const SubjectInput = () => {
  const [subject, setSubject] = useState('');
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (subject) {
      if (subject === 'all') {
        params.delete('subject');
      } else {
        params.set('subject', subject);
      }
    } else {
      params.delete('subject');
    }
    router.push(`${pathName}?${params.toString()}`, {
      scroll: false,
    });
  }, [subject, router, searchParams, pathName]);

  return (
    <div>
      <Select
        onValueChange={(value) => {
          setSubject(value);
        }}
        value={subject}
        defaultValue={subject}
      >
        <SelectTrigger className="input capitalize">
          <SelectValue placeholder="SelectSubject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Subjects</SelectItem>
          {subjects.map((subject) => (
            <SelectItem
              value={subject}
              key={subject}
              className="capitalize"
            >
              {subject}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SubjectInput;
