import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata = {
  title: 'ICHRA Solutions for Small Business | Family Benefits Center',
  description: 'Individual Coverage HRA solutions for small businesses. Flexible, cost-effective health benefits.',
};

export default function ICHRAPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-navy via-navy to-[#2a4d6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              ICHRA: Smart Health Benefits for Small Business
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Give employees freedom to choose their health insurance while you control costs.
            </p>
            <Link href="/contact" className="bg-green text-navy px-8 py-4 rounded-lg font-bold hover:bg-green-light transition-all shadow-lg inline-block">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8">Benefits of ICHRA</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Cost Control', desc: 'Set your budget and control healthcare costs' },
              { title: 'Employee Choice', desc: 'Employees pick plans that fit their needs' },
              { title: 'Tax Advantages', desc: 'Tax-free reimbursements for both parties' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
