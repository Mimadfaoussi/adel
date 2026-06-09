import { timelineGroups } from "./content";

export function Timeline() {
  return (
    <section id="timeline" className="bg-[#f7faf8] py-24 dark:bg-slate-900">
      <div className="section-shell">
        <span className="section-kicker">المسار والخبرة</span>
        <h2 className="section-title dark:text-white">تجربة تجمع التدريب، التعليم، والعمل التطوعي.</h2>
        <p className="section-copy dark:text-slate-300">
          مسار عملي متدرج بدأ من تكوين الشباب في الملاعب والجمعيات، وامتد إلى التعليم
          والتسيير الرياضي وخدمة المجتمع.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {timelineGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950"
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-campaign-green text-white">
                  <group.icon size={22} />
                </span>
                <h3 className="text-2xl font-black text-campaign-ink dark:text-white">{group.title}</h3>
              </div>

              <div className="relative space-y-7 before:absolute before:bottom-2 before:right-[15px] before:top-2 before:w-px before:bg-campaign-mint dark:before:bg-slate-700">
                {group.items.map((item) => (
                  <div key={`${item.year}-${item.title}`} className="relative pr-10">
                    <span className="absolute right-0 top-1 grid size-8 place-items-center rounded-full border-4 border-white bg-campaign-green dark:border-slate-950" />
                    <time className="text-sm font-black text-campaign-green">{item.year}</time>
                    <h4 className="mt-1 text-lg font-black text-campaign-ink dark:text-white">{item.title}</h4>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
