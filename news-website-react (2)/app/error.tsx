"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service (mock)
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </div>
        <div className="text-6xl font-bold text-muted-foreground mb-2">500</div>
        <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-8">
          We apologize for the inconvenience. An unexpected error occurred while
          processing your request. Our team has been notified.
        </p>

        {error.digest && (
          <p className="text-sm text-muted-foreground mb-6 font-mono">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Link>
          </Button>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg text-left">
          <h2 className="font-semibold mb-2">Need Help?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            If this problem persists, please contact our support team with the
            error ID above.
          </p>
          <Button asChild variant="link" className="p-0 h-auto">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
