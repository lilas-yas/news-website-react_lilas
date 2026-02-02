import { Suspense } from "react";
import { SearchPageWrapper } from "./SearchPageWrapper";

export const metadata = {
  title: "Search - NewsDaily",
  description: "Search for articles on NewsDaily",
};

function SearchLoadingFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-10 bg-muted rounded w-full max-w-md mb-8" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-muted rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoadingFallback />}>
      <SearchPageWrapper />
    </Suspense>
  );
}
