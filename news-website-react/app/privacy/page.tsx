export const metadata = {
  title: "Privacy Policy - NewsDaily",
  description: "Read NewsDaily's privacy policy to understand how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">
        Last updated: January 15, 2025
      </p>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-muted-foreground mb-4">
            NewsDaily ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website and use our
            services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <h3 className="text-lg font-medium mb-2">Personal Information</h3>
          <p className="text-muted-foreground mb-4">
            We may collect personal information that you voluntarily provide when
            you:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Register for an account</li>
            <li>Subscribe to our services</li>
            <li>Sign up for newsletters</li>
            <li>Contact us through our website</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            This information may include your name, email address, postal address,
            phone number, and payment information.
          </p>

          <h3 className="text-lg font-medium mb-2">Automatically Collected Information</h3>
          <p className="text-muted-foreground mb-4">
            When you visit our website, we may automatically collect certain
            information about your device, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages viewed and links clicked</li>
            <li>Time and date of your visit</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Provide and maintain our services</li>
            <li>Process your transactions</li>
            <li>Send you newsletters and marketing communications</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="text-muted-foreground mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Service providers who assist in our operations</li>
            <li>Business partners for joint promotions</li>
            <li>Law enforcement when required by law</li>
            <li>Other parties with your consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies and similar tracking technologies to enhance your
            experience on our website. You can control cookie preferences through
            your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground mb-4">
            Our services are not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="text-muted-foreground mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page and updating
            the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-none text-muted-foreground mt-2">
            <li>Email: privacy@newsdaily.com</li>
            <li>Address: 123 News Street, New York, NY 10001</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
