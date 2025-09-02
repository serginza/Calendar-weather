import { memo } from 'react';
import type { SkeletonProps } from '@mui/material';
import { Skeleton } from '@mui/material';

interface WithSkeletonProps extends SkeletonProps {
  isLoading?: boolean;
  children: React.ReactNode;
}

function WithSkeletonProto({
  isLoading,
  children,
  ...skeletonProps
}: WithSkeletonProps) {
  return isLoading ? (
    <Skeleton width="100%" {...skeletonProps} />
  ) : (
    <>{children}</>
  );
}

export const WithSkeleton = memo(WithSkeletonProto);
