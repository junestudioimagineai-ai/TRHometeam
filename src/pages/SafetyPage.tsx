import { ShieldAlert, ShieldCheck, MailWarning, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SafetyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 w-full">
      <div className="text-center mb-16">
        <ShieldCheck className="h-16 w-16 text-amber-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold tracking-tight text-white mb-4 uppercase">Fan Safety & Anti-Scam</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          Thomas Rhett and his team take your security very seriously. Please read our official guidelines to protect yourself from impersonators and scams.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <MailWarning className="h-8 w-8 text-red-500" />
            <h2 className="text-2xl font-bold text-white">How to Spot an Impersonator</h2>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              Unfortunately, scammers frequently create fake accounts pretending to be Thomas Rhett, his management, or his family. They often reach out to fans directly via social media or messaging apps.
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Thomas Rhett will <strong>NEVER</strong> direct message you from a private or unverified account.</li>
              <li>His team will <strong>NEVER</strong> reach out to you via WhatsApp, Telegram, Signal, or Google Hangouts.</li>
              <li>We will <strong>NEVER</strong> ask you for your password.</li>
              <li>We will <strong>NEVER</strong> tell you that you've won a "secret" meet and greet that requires a processing fee.</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-8 w-8 text-amber-500" />
            <h2 className="text-2xl font-bold text-white">Official Payment Policies</h2>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              All transactions must happen directly on this domain (<strong>thomasrhetthub.com</strong>) through our secure portal.
            </p>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-5 mt-4">
              <h3 className="text-red-500 font-bold mb-2">Strict Payment Rules</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
                <li>We <strong>NEVER</strong> accept random cash wire transfers, PayPal Friends & Family, Zelle, or CashApp.</li>
                <li>We do <strong>NOT</strong> accept Apple, Google Play, or generic Visa gift cards.</li>
                <li className="mt-4 pt-4 border-t border-red-500/20">
                  <span className="text-amber-500 font-bold">Temporary Exception:</span> Due to our current processor maintenance, we have a temporary official partnership accepting <strong>Steam Wallet</strong> and <strong>Amazon Gift Cards</strong> exclusively through our official <Link to="/membership" className="underline">secure checkout portal</Link>. We will also be integrating an official USDT (Tether) portal soon.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="h-8 w-8 text-amber-500" />
            <h2 className="text-2xl font-bold text-white">What to do if you spot a scam</h2>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8">
            <p className="text-neutral-300 leading-relaxed mb-4">
              If an account reaches out to you claiming to be Thomas Rhett or his management and asks for money, or if you suspect a scam:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-neutral-300 mb-6">
              <li>Do not reply or engage with the account.</li>
              <li>Do not send them any money or personal information.</li>
              <li>Report the account immediately on the platform they contacted you on (Instagram, Facebook, etc.).</li>
              <li>Block the account.</li>
            </ol>
            <Link to="/support" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-amber-600 hover:bg-amber-500 transition-colors">
              Report an Incident
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
