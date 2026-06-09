import { achievements } from "./content";

export function Achievements() {
  return (
    <section id="achievements" className="bg-white py-24 dark:bg-slate-950">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="section-kicker">الإنجازات</span>
            <h2 className="section-title dark:text-white">نتائج رياضية مبنية على التكوين والانضباط.</h2>
          </div>
          <p className="max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
            الإنجازات ليست أرقاما فقط، بل دليل على قدرة الفرق الشبانية على التطور عندما
            تجد التأطير والمتابعة والبيئة المناسبة.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <article
              key={`${achievement.title}-${achievement.text}`}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-campaign-green hover:shadow-soft dark:border-white/10 dark:bg-slate-900"
            >
              <span className="grid size-14 place-items-center rounded-xl bg-white text-campaign-green shadow-sm dark:bg-slate-950">
                <achievement.icon size={25} />
              </span>
              <h3 className="mt-6 text-2xl font-black text-campaign-ink dark:text-white">{achievement.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{achievement.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
