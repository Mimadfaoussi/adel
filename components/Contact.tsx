import { Facebook, Instagram, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24 dark:bg-slate-950">
      <div className="section-shell">
        <div className="rounded-[2rem] bg-campaign-deep p-6 text-white shadow-soft sm:p-10 lg:p-14 dark:bg-slate-900">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-emerald-50">
                انضم للحملة
              </span>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">
                دعمك يصنع برنامجا أقرب للناس والأحياء.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-9 text-emerald-50">
                شاركنا اقتراحك أو رغبتك في التطوع. الحملة مفتوحة لكل من يؤمن بأن الرياضة
                يمكن أن تكون رافعة حقيقية للشباب والمجتمع.
              </p>

              <div className="mt-8 grid gap-3 text-sm font-bold text-emerald-50">
                <a href="tel:+213000000000" className="inline-flex items-center gap-3 hover:text-white">
                  <Phone size={18} />
                  +213 000 000 000
                </a>
                <a href="mailto:contact@adel-campaign.dz" className="inline-flex items-center gap-3 hover:text-white">
                  <Mail size={18} />
                  contact@adel-campaign.dz
                </a>
              </div>

              <div className="mt-7 flex gap-3">
                <a
                  href="#contact"
                  className="grid size-11 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white hover:text-campaign-deep"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook size={19} />
                </a>
                <a
                  href="#contact"
                  className="grid size-11 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white hover:text-campaign-deep"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram size={19} />
                </a>
              </div>
            </div>

            <form className="rounded-2xl bg-white p-5 text-campaign-ink shadow-soft sm:p-7 dark:bg-slate-950 dark:text-white">
              <div className="grid gap-5">
                <label className="grid gap-2 text-sm font-black">
                  الاسم
                  <input
                    type="text"
                    name="name"
                    placeholder="اكتب اسمك"
                    className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition placeholder:text-slate-400 focus:border-campaign-green focus:bg-white dark:border-white/10 dark:bg-slate-900 dark:focus:bg-slate-900"
                  />
                </label>
                <label className="grid gap-2 text-sm font-black">
                  الهاتف
                  <input
                    type="tel"
                    name="phone"
                    placeholder="رقم الهاتف"
                    className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition placeholder:text-slate-400 focus:border-campaign-green focus:bg-white dark:border-white/10 dark:bg-slate-900 dark:focus:bg-slate-900"
                  />
                </label>
                <label className="grid gap-2 text-sm font-black">
                  الرسالة
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="اكتب رسالتك أو اقتراحك"
                    className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition placeholder:text-slate-400 focus:border-campaign-green focus:bg-white dark:border-white/10 dark:bg-slate-900 dark:focus:bg-slate-900"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-campaign-green px-6 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-campaign-deep"
                >
                  انضم للحملة
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
