import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft pt-16 pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center mb-3">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <p className="font-semibold text-charcoal text-lg">TechyFusion</p>
            <p className="text-text-muted text-sm mt-1">
              We build software we&apos;re proud of.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-charcoal text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-text-muted text-sm">
              <li>
                <Link
                  href="/services#web"
                  className="hover:text-charcoal transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#mobile"
                  className="hover:text-charcoal transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai"
                  className="hover:text-charcoal transition-colors"
                >
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cloud"
                  className="hover:text-charcoal transition-colors"
                >
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-charcoal text-sm mb-4">Links</h4>
            <ul className="space-y-2.5 text-text-muted text-sm">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-charcoal transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-charcoal transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-charcoal transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-charcoal transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-charcoal text-sm mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-text-muted text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-charcoal transition-colors"
                >
                  Social Media
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@techyfusion.com"
                  className="hover:text-charcoal transition-colors"
                >
                  info@techyfusion.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border-soft text-text-light text-xs gap-4">
          <p>© 2023–{new Date().getFullYear()} TechyFusion</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-charcoal transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-charcoal transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
