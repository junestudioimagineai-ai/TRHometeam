export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 w-full prose prose-invert prose-amber max-w-none">
      <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
      <p className="text-sm text-neutral-400 mb-8">Last Updated: August 1, 2026</p>
      
      <div className="space-y-8 text-neutral-300">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Thomas Rhett Superfan Hub (the "Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">2. Membership and Accounts</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You must provide accurate and complete information when creating an account.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>Memberships are non-transferable. You may not share your account or member exclusive content with non-members.</li>
            <li>We reserve the right to suspend or terminate accounts that violate our community guidelines or these terms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">3. Payments and Subscriptions</h2>
          <p className="mb-4">
            By selecting a premium membership tier, you agree to pay the listed fees.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Official Channels:</strong> All payments must be processed directly through the Platform checkout. We do not accept unofficial third-party transfers.</li>
            <li><strong>Temporary Payment Methods:</strong> During system maintenance, we may authorize the submission of secure Steam Wall or Amazon Gift card codes. These must be submitted via the official checkout page for verification.</li>
            <li><strong>Refunds:</strong> Memberships are generally non-refundable unless required by law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">4. Content Ownership</h2>
          <p>
            All content provided on this Platform, including but not limited to music, videos, images, and text, is the property of Thomas Rhett and his licensors. You may not reproduce, distribute, modify, or publicly display this content without explicit permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">5. Community Guidelines</h2>
          <p className="mb-4">To ensure a safe and welcoming environment for all fans, you agree to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Be respectful to other fans, moderators, and artists.</li>
            <li>Not post abusive, harassing, threatening, or discriminatory content.</li>
            <li>Not spam the community boards or post unauthorized promotional material.</li>
            <li>Not solicit money or attempt to scam other users.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
