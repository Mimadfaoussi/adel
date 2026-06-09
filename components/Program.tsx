import { CheckCircle2 } from "lucide-react";
import { programBlocks } from "./content";

export function Program() {
  return (
    <section id="program" className="bg-[#f7faf8] py-24 dark:bg-slate-900">
      <div className="section-shell">
        <div className="max-w-4xl">
          <span className="section-kicker">البرنامج والرؤية</span>
          <h2 className="section-title dark:text-white">رياضة عادلة، منظمة، وقريبة من كل مواطن.</h2>
          <p className="section-copy dark:text-slate-300">
            يرتكز البرنامج على جعل الرياضة أداة للتربية، الصحة، الإدماج، واكتشاف المواهب،
            مع حوكمة محلية شفافة تستمع للنوادي والجمعيات والمواطنين.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {programBlocks.map((block) => (
            <article
              key={block.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-950"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-xl bg-campaign-green text-white">
                    <block.icon size={22} />
                  </span>
                  <h3 className="text-2xl font-black text-campaign-ink dark:text-white">{block.title}</h3>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-campaign-mint text-sm font-black text-campaign-deep">
                  {block.letter}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {block.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-7 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 shrink-0 text-campaign-green" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
