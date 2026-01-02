import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, Receipt, PieChart, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/our-pot-icon.png" alt="our-pot logo" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold">our-pot</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now available on iOS & Android
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Split expenses,
                <br />
                <span className="text-primary">not friendships</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto">
                Track shared expenses with your roommates, travel groups, and friends. Our-pot makes splitting bills
                simple and stress-free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Download Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Everything you need</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Powerful features designed for modern expense sharing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Group Management</h3>
                <p className="text-muted-foreground">
                  Create unlimited groups for roommates, trips, or any shared expenses
                </p>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Receipt className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Receipt Scanning</h3>
                <p className="text-muted-foreground">Snap a photo and let AI automatically extract items and amounts</p>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fair Split Calculations</h3>
                <p className="text-muted-foreground">
                  Automatically calculate who owes what with transparent breakdowns
                </p>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Sync</h3>
                <p className="text-muted-foreground">
                  Everyone in your group sees updates instantly across all devices
                </p>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Receipt className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Payment Tracking</h3>
                <p className="text-muted-foreground">Mark payments complete and keep a history of all transactions</p>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Splits</h3>
                <p className="text-muted-foreground">
                  Split equally, by percentage, or by custom amounts for each person
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">How it works</h2>
              <p className="text-xl text-muted-foreground text-pretty">Get started in three simple steps</p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Create a Group</h3>
                <p className="text-muted-foreground">
                  Invite friends, roommates, or travel companions to your expense group
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Add Expenses</h3>
                <p className="text-muted-foreground">Scan receipts or manually enter shared costs as they happen</p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Settle Up</h3>
                <p className="text-muted-foreground">See exactly who owes what and mark payments when completed</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-12 text-center bg-primary text-primary-foreground border-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Ready to simplify your shared expenses?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
                Join thousands of groups already using our-pot to manage their money together
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/our-pot-icon.png" alt="our-pot logo" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold">our-pot</span>
              </div>
              <p className="text-sm text-muted-foreground">The modern way to track shared expenses</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>Support: support@our-pot.com</p>
            <p className="mt-2">© 2026 our-pot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
