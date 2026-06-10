import { futureGoals } from "./content";

export function FutureGoals() {
  return (
    <section id="future" className="bg-white py-20 dark:bg-slate-950">
      <div className="section-shell">
        <div className="rounded-[1.75rem] border border-campaign-mint bg-campaign-mint/60 p-6 shadow-sm sm:p-8 lg:p-10 dark:border-white/10 dark:bg-slate-900">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-campaign-green text-white">
              <futureGoals.icon size={28} />
            </span>
            <div>
              <span className="section-kicker mb-3 bg-white dark:bg-slate-950">
                رؤية شخصية ومهنية
              </span>
              <h2 className="section-title dark:text-white">{futureGoals.title}</h2>
              <p className="mt-4 max-w-4xl text-lg leading-9 text-slate-700 dark:text-slate-300">
                {futureGoals.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
