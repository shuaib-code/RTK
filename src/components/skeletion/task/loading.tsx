import { Skeleton } from "@/components/ui/skeleton";

export function TaskListLoading() {
  return (
    <div className="rounded-xl border shadow-sm p-6">
      <div className="flex gap-4">
        <div className="grow flex items-start gap-4">
          <div className="space-y-2 w-full">
            <div className="flex items-center">
              <Skeleton className="h-3 w-3 rounded-full mr-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <Skeleton className="h-4 w-full" />
            <div className="flex items-center">
              <Skeleton className="h-4 w-4 mr-2" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:flex-row">
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}

export function TaskCardSkeleton() {
  return (
    <div className="px-2 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] items-center gap-4 md:gap-6 mb-6">
        <Skeleton className="h-8 w-32" />
        <div className="w-[400px] justify-self-center">
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-10 w-32 justify-self-end hidden md:block" />
      </div>

      <div className="grid gap-2">
        {[...Array(5)].map((_, idx) => (
          <TaskListLoading key={idx} />
        ))}
      </div>
    </div>
  );
}
