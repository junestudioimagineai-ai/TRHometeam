export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 w-full prose prose-invert prose-amber max-w-none">
      <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
      <p className="text-sm text-neutral-400 mb-8">Last Updated: August 1, 2026</p>
      
      <div className="space-y-8 text-neutral-300">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
          <p>
            Welcome to the Thomas Rhett Superfan Hub ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">2. The Data We Collect</h2>
          <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, and title.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Financial Data</strong> includes payment card details (processed securely via our partners, we do not store full card numbers).</li>
            <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
            <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, and feedback.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., fulfilling an order).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact our data privacy manager via the <a href="/support" className="text-amber-500 hover:text-amber-400">Support</a> page.
          </p>
        </section>
      </div>
    </div>
  );
}
