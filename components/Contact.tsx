import { Facebook, Mail, Phone } from "lucide-react";

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
                <a href="tel:0699078177" className="inline-flex items-center gap-3 hover:text-white">
                  <Phone size={18} />
                  0699078177
                </a>
                <a href="mailto:adel.guerrache96@gmail.com" className="inline-flex items-center gap-3 hover:text-white">
                  <Mail size={18} />
                  adel.guerrache96@gmail.com
                </a>
              </div>

              <div className="mt-7 flex gap-3">
                <a
                  href="https://www.facebook.com/adel62bz#"
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-11 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white hover:text-campaign-deep"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook size={19} />
                </a>
              </div>
            </div>

            <div className="grid gap-4 rounded-2xl bg-white p-5 text-campaign-ink shadow-soft sm:p-7 dark:bg-slate-950 dark:text-white">
              <a
                href="tel:0699078177"
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-campaign-green hover:shadow-soft dark:border-white/10 dark:bg-slate-900"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-campaign-mint text-campaign-green transition group-hover:bg-campaign-green group-hover:text-white">
                  <Phone size={22} />
                </span>
                <h3 className="mt-5 text-2xl font-black">اتصال مباشر</h3>
                <p className="mt-2 text-lg font-bold text-slate-700 dark:text-slate-200">0699078177</p>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  للتواصل السريع، الاستفسار، أو المشاركة في أنشطة الحملة.
                </p>
              </a>

              <a
                href="mailto:adel.guerrache96@gmail.com"
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-campaign-green hover:shadow-soft dark:border-white/10 dark:bg-slate-900"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-campaign-mint text-campaign-green transition group-hover:bg-campaign-green group-hover:text-white">
                  <Mail size={22} />
                </span>
                <h3 className="mt-5 text-2xl font-black">البريد الإلكتروني</h3>
                <p className="mt-2 break-all text-lg font-bold text-slate-700 dark:text-slate-200">
                  adel.guerrache96@gmail.com
                </p>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  أرسل اقتراحاتك أو طلبات التواصل مباشرة عبر البريد الإلكتروني.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
