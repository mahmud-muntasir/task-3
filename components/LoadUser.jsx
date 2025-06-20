'use client';

import { useEffect, useRef } from 'react';
import { useUsers } from '@/hooks/useUsers';
import UserCard from '@/components/UserCard';
import UserCardSkeleton from '@/components/UserCardSkeleton';
import { useVirtualizer } from '@tanstack/react-virtual';

export function LoadUser() {
  const parentRef = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useUsers();

  const allUsers = data?.pages.flatMap((page) => page.users) || [];
  const cardHeight = 162;
  const spacing = 10;

  // Virtualizer setup using a real scrollable element
  const rowVirtualizer = useVirtualizer({
    count: allUsers.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => cardHeight + spacing,
    overscan: 5,
  });

  // Fetch next page when scrolled to bottom
  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].slice(-1);

    if (
      lastItem &&
      lastItem.index >= allUsers.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [rowVirtualizer.getVirtualItems(), hasNextPage, isFetchingNextPage]);

  // Initial skeletons on first load
  if (isLoading) {
    return (
      <div className="mx-auto px-4 py-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="pb-[10px]">
            <UserCardSkeleton />
          </div>
        ))}
      </div>
    );
  }

  // Error fallback
  if (isError) {
    return (
      <p className="text-center mt-10 text-red-500">Failed to load users.</p>
    );
  }

  return (
    <div className=" px-4 py-6 h-screen overflow-y-auto" ref={parentRef}>
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const user = allUsers[virtualRow.index];
          return (
            <div
              key={user?.id ?? virtualRow.index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualRow.start}px)`,
                paddingBottom: `${spacing}px`,
              }}
            >
              <UserCard user={user} />
            </div>
          );
        })}
      </div>

      {/* During fetchNextPage */}
      {isFetchingNextPage && (
        <div className="mt-[10px]">
          {[...Array(5)].map((_, i) => (
            <div key={`skeleton-fetch-${i}`} className="pb-[10px]">
              <UserCardSkeleton />
            </div>
          ))}
        </div>
      )}
      {!hasNextPage && (
        <p className="text-center text-gray-400 text-sm mt-4">No more users.</p>
      )}
    </div>
  );
}
