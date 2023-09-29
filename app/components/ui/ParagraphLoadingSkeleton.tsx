import Skeleton from "react-loading-skeleton";

const ParagraphLoadingSkeleton = () => {
  return (
    <div className="px-3">
      <Skeleton className="h-8 mb-2" />
      <Skeleton count={3} className="h-6 md:h-auto mb-1 md:mb-0" />
      <Skeleton count={3} className="h-6 md:hidden mb-1" />
    </div>
  );
};

export default ParagraphLoadingSkeleton;
