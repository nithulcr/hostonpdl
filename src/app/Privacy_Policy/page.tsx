

import Header from "../components/Header";

import Footer from "../components/Footer";




export const metadata = {
  title: 'Privacy Policy | HOST ON PDL',

};

export default function privacy_Policy() {

  return (
    <>
      <Header />

      <section className="py-14 lg:py-24 bg-[var(--background2)] relative  overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-3 lg:px-6 ">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: 29 March 2026
          </p>

          <section className="space-y-4">
            <p>
              At HOST ON PDL, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your information. This Privacy Policy explains how we handle your data when you use our website and services.
            </p>
            <p className="mb-6">
              At <strong>HOST ON PDL</strong>, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your information.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>

            <h3 className="font-semibold mt-4 mb-2">a. Personal Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Details submitted through forms</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">b. Non-Personal Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Browser type</li>
              <li>IP address</li>
              <li>Device information</li>
              <li>Pages visited</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Respond to inquiries and support requests</li>
              <li>Provide real estate opportunities</li>
              <li>Deliver digital services (web development, lead generation)</li>
              <li>Improve website performance and experience</li>
              <li>Send updates or marketing communications (if opted-in)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">3. Sharing of Information</h2>
            <p className="mb-4">
              We do not sell or rent your personal information. We may share data with trusted partners or legal authorities if required.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate measures to protect your data, but no online platform is completely secure.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">5. Cookies</h2>
            <p className="mb-4">
              Our website may use cookies to improve user experience and analyze traffic. You can disable cookies in your browser settings.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">6. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">7. Your Rights</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Opt out of marketing</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">8. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this policy from time to time. Changes will be posted on this page.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact:</p>
            <p className="mt-2">
              <strong>HOST ON PDL</strong>
              <br />
              Kannur, Kerala, India
              <br />
              Email: rajup@hostonpdl.com
              <br />
              Phone: +91 9846 272 623
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
