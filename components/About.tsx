import { highlights, stats } from "./content";

export function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-slate-950">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="section-kicker">من هو عادل قراش؟</span>
            <h2 className="section-title dark:text-white">مدرب ومربي يعمل من الميدان لخدمة المجتمع.</h2>
            <p className="section-copy dark:text-slate-300">
              ولد عادل قراش في 6 جويلية 1996 ببني مسوس، الجزائر العاصمة. هو مدرب رياضي
              وأستاذ تربية بدنية متخصص في تدريب كرة السلة وتطوير الفئات الشبانية، جمع بين
              التكوين الجامعي، الخبرة التربوية، والعمل الجمعوي لخدمة الشباب والرياضة المحلية.
            </p>
            <p className="section-copy dark:text-slate-300">
              تحصل على شهادة البكالوريا سنة 2017، ثم ليسانس في التدريب التنافسي سنة 2020،
              وماستر في التدريب الرياضي النخبوي سنة 2022 من جامعة الجزائر 3، معهد التربية
              البدنية والرياضية.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-900"
              >
                <div className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-campaign-mint text-campaign-green dark:bg-campaign-green dark:text-white">
                    <item.icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-campaign-ink dark:text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-campaign-mint bg-campaign-mint/60 p-6 dark:border-white/10 dark:bg-slate-900"
            >
              <stat.icon className="text-campaign-green" size={24} />
              <div className="mt-5 text-4xl font-black text-campaign-deep dark:text-white">{stat.value}</div>
              <div className="mt-1 font-bold text-slate-600 dark:text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
