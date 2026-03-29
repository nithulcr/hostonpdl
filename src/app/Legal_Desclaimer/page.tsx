

import Header from "../components/Header";

import Footer from "../components/Footer";


export const metadata = {
  title: 'Legal Desclaimer | HOST ON PDL',

};


export default function Terms() {

  return (
    <>

      <Header />
      <section className="py-14 lg:py-24 bg-[var(--background2)]  relative  overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-3 lg:px-6 ">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-6"> Legal Desclaimer </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: 29 March 2026
          </p>


          <section className="space-y-4">
            <p className="mb-6">
              The information provided by <strong>HOST ON PDL</strong> (“Company”, “we”, “our”, or “us”) on this website is for general informational and business purposes only.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">1. No Professional Advice</h2>
            <p className="mb-4">
              All content on this website, including real estate information and digital service details, is provided in good faith. However, it should not be considered as financial, legal, or investment advice. Users are advised to consult with qualified professionals before making any decisions.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">2. Real Estate Disclaimer</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>We do not guarantee the accuracy or completeness of property details</li>
              <li>Project timelines, pricing, and availability may change without notice</li>
              <li>All investment decisions are made at the user’s own risk</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">3. No Guarantees</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>No guarantees on return on investment</li>
              <li>No guarantees on project completion timelines</li>
              <li>No guarantees on third-party performance</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">4. Third-Party Services</h2>
            <p className="mb-4">
              Our website may include links or references to third-party services or developers. We are not responsible for their content, privacy practices, or operations.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">5. Digital Services Disclaimer</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Results may vary depending on market conditions and client input</li>
              <li>No guarantees on leads, conversions, or rankings</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">6. Limitation of Liability</h2>
            <p className="mb-4">
              HOST ON PDL shall not be held liable for any direct or indirect damages arising from the use of this website, reliance on its content, or engagement with third-party services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">7. Changes to This Disclaimer</h2>
            <p className="mb-4">
              We reserve the right to update this Legal Disclaimer at any time. Updates will be posted on this page.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-3">8. Contact Us</h2>
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
