import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/our-pot-icon.png" alt="our-pot logo" width={36} height={36} className="rounded-lg" />
            <span className="text-2xl font-bold">our-pot</span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <p className="text-muted-foreground mb-8">Last updated: January 2, 2026</p>

            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to our-pot. We are committed to protecting your personal information and your right to privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
              our mobile application and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Account information (name, email address, profile photo)</li>
              <li>Expense data (receipts, transaction details, group memberships)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication data when you contact our support team</li>
              <li>Device information and usage data to improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Provide, maintain, and improve our expense tracking services</li>
              <li>Process transactions and send related notifications</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Send you technical notices, updates, and security alerts</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and fraudulent activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share your information only in the following
              circumstances: with your consent, with group members you invite, with service providers who help us
              operate our services, to comply with legal obligations, or to protect rights and safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct or update inaccurate information</li>
              <li>Request deletion of your account and data</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability to another service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              Email: support@our-pot.com
              <br />
              Website: www.our-pot.com
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 our-pot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
