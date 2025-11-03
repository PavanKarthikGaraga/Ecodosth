import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Wooden Cutlery", href: "/products?category=cutlery" },
        { name: "Plates & Bowls", href: "/products?category=plates" },
        { name: "Eco Packaging", href: "/products?category=packaging" },
        { name: "Bulk Orders", href: "/contact?type=bulk" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Manufacturing", href: "/manufacturing" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  ];

  return (
    <footer className="bg-headings text-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-white" />
              <span className="text-2xl font-heading font-semibold text-white">
                EcoDosth
              </span>
            </Link>
            <p className="text-white mb-6 max-w-md">
              Crafting sustainable tableware from nature&apos;s finest materials.
              Premium wooden, bamboo, and areca products for conscious living.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-primary-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading font-semibold text-headings mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-primary-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-white" />
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <p className="text-sm text-white">hello@ecodosth.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-white" />
              <div>
                <p className="text-sm font-medium text-white">Phone</p>
                <p className="text-sm text-white">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-5 w-5 text-white" />
              <div>
                <p className="text-sm font-medium text-white">Address</p>
                <p className="text-sm text-white">
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} EcoDosth. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-white hover:text-primary-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white hover:text-primary-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
