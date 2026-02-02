"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import Loading from "./loading";

function ErrorTestContent() {
  const searchParams = useSearchParams();
  const triggerError = searchParams.get("trigger") === "true";

  useEffect(() => {
    if (triggerError) {
      throw new Error("Simulated 500 error for testing purposes");
    }
  }, [triggerError]);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold mb-4">Error Test Page</h1>
      <p className="text-muted-foreground mb-6">
        Add <code className="bg-muted px-2 py-1 rounded">?trigger=true</code> to
        the URL to simulate a 500 error.
      </p>
      <a
        href="/error-test?trigger=true"
        className="text-primary underline hover:no-underline"
      >
        Trigger Error
      </a>
    </div>
  );
}

export default function ErrorTestPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorTestContent />
    </Suspense>
  );
}
