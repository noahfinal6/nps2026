import TicketWizard from '../../components/tickets/TicketWizard'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PageBanner } from '@/components/ui/page-banner'

export const metadata = {
  title: 'Tickets - NPS2026',
}

export default function TicketsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-12 lg:pt-[88px] bg-white">
        <PageBanner title="Get Tickets" subtitle="Secure your spot at NPS 2026 — book below" />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <TicketWizard />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
