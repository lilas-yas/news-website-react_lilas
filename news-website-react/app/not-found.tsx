import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto text-center">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The
          article may have been moved, deleted, or the URL might be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/search">
              <Search className="w-4 h-4 mr-2" />
              Search Articles
            </Link>
          </Button>
        </div>

        <div className="border-t pt-8">
          <h2 className="font-semibold mb-4">Popular Categories</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {["Politics", "Economy", "Technology", "Sports", "World"].map(
              (category) => (
                <Button key={category} variant="secondary" size="sm" asChild>
                  <Link href={`/category/${category.toLowerCase()}`}>
                    {category}
                  </Link>
                </Button>
              )
            )}
          </div>
        </div>

        <div className="mt-8">
          <Button variant="ghost" asChild>
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
