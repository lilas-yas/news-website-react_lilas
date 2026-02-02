import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us - NewsDaily",
  description: "Learn about NewsDaily, our mission, and our commitment to quality journalism.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About NewsDaily</h1>
        <p className="text-xl text-muted-foreground">
          Committed to delivering accurate, unbiased news coverage since 2010.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-muted-foreground mb-4">
          At NewsDaily, we believe that access to accurate, timely information is
          essential to a functioning democracy. Our mission is to provide
          comprehensive news coverage that empowers our readers to make informed
          decisions about the issues that matter most.
        </p>
        <p className="text-muted-foreground">
          We are committed to journalistic integrity, holding ourselves to the
          highest standards of accuracy, fairness, and transparency. Our team of
          experienced journalists works tirelessly to bring you the stories that
          shape our world.
        </p>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Accuracy",
              description:
                "We verify facts meticulously before publication and promptly correct any errors.",
            },
            {
              title: "Independence",
              description:
                "We maintain editorial independence, free from political or commercial influence.",
            },
            {
              title: "Fairness",
              description:
                "We present multiple perspectives and give voice to all sides of a story.",
            },
            {
              title: "Transparency",
              description:
                "We are open about our methods, sources, and any potential conflicts of interest.",
            },
          ].map((value, index) => (
            <div key={index} className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Margaret Sullivan",
              role: "Editor-in-Chief",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
            },
            {
              name: "Robert Chen",
              role: "Managing Editor",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
            },
            {
              name: "Elena Rodriguez",
              role: "Chief Correspondent",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
            },
          ].map((person, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                <Image
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">{person.name}</h3>
              <p className="text-muted-foreground text-sm">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/50 rounded-2xl p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "15+", label: "Years of Excellence" },
            { value: "50M+", label: "Monthly Readers" },
            { value: "200+", label: "Journalists" },
            { value: "25", label: "Countries" },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="text-muted-foreground mb-6">
          Stay informed with quality journalism. Subscribe to NewsDaily today.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/subscribe">
            <Button size="lg">Subscribe Now</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
