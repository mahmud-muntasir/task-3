'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

const fetchUsers = async ({ pageParam = 0 }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/GetUsersList?take=10&skip=${pageParam}`
  );
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};

export const useUsers = () =>
  useInfiniteQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      const nextSkip = allPages.length * 10;
      return nextSkip >= lastPage.total ? undefined : nextSkip;
    },
  });
