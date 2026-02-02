export const metadata = {
  title: "Terms of Service - NewsDaily",
  description: "Read NewsDaily's terms of service governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-muted-foreground mb-8">
        Last updated: January 15, 2025
      </p>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing or using NewsDaily's website and services, you agree to
            be bound by these Terms of Service and all applicable laws and
            regulations. If you do not agree with any of these terms, you are
            prohibited from using or accessing this site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="text-muted-foreground mb-4">
            Permission is granted to temporarily view the materials on NewsDaily's
            website for personal, non-commercial use only. This is the grant of a
            license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for commercial purposes</li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>Remove any copyright or proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
          <p className="text-muted-foreground mb-4">
            To access certain features, you may need to create an account. You
            agree to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your password</li>
            <li>Notify us immediately of any unauthorized use</li>
            <li>Be responsible for all activities under your account</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Subscription Services</h2>
          <p className="text-muted-foreground mb-4">
            If you subscribe to our premium services:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>You agree to pay all applicable fees</li>
            <li>Subscriptions renew automatically unless cancelled</li>
            <li>You may cancel at any time through your account settings</li>
            <li>Refunds are provided according to our refund policy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
          <p className="text-muted-foreground mb-4">
            When you submit content (such as comments) to our website:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>You retain ownership of your content</li>
            <li>You grant us a license to use, display, and distribute it</li>
            <li>You are responsible for its accuracy and legality</li>
            <li>We may remove content that violates our policies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Prohibited Conduct</h2>
          <p className="text-muted-foreground mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Violate any laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Transmit harmful or malicious content</li>
            <li>Interfere with the website's operation</li>
            <li>Harvest user data without permission</li>
            <li>Impersonate others or provide false information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            All content on this website, including text, graphics, logos, images,
            and software, is the property of NewsDaily or its content suppliers
            and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Disclaimer</h2>
          <p className="text-muted-foreground mb-4">
            The materials on NewsDaily's website are provided on an 'as is' basis.
            NewsDaily makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual
            property.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Limitations</h2>
          <p className="text-muted-foreground mb-4">
            In no event shall NewsDaily or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit, or
            due to business interruption) arising out of the use or inability to
            use the materials on NewsDaily's website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
          <p className="text-muted-foreground mb-4">
            We may terminate or suspend your account and access to our services at
            any time, without prior notice, for conduct that we believe violates
            these Terms of Service or is harmful to other users, us, or third
            parties, or for any other reason.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
          <p className="text-muted-foreground mb-4">
            These terms shall be governed by and construed in accordance with the
            laws of the State of New York, without regard to its conflict of law
            provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
          <p className="text-muted-foreground">
            Questions about the Terms of Service should be sent to us at:
          </p>
          <ul className="list-none text-muted-foreground mt-2">
            <li>Email: legal@newsdaily.com</li>
            <li>Address: 123 News Street, New York, NY 10001</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
