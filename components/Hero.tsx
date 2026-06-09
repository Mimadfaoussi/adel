import Image from "next/image";
import { ArrowLeft, MessageCircle, Trophy, Users } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] bg-campaign-deep pt-28 text-white dark:bg-slate-950"
    >
      <div className="absolute inset-0 bg-hero-court bg-cover bg-center opacity-45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(22,163,74,0.28),transparent_32%),linear-gradient(90deg,rgba(13,63,42,0.94),rgba(13,63,42,0.72),rgba(15,23,42,0.52))]" />

      <div className="section-shell relative grid min-h-[calc(92vh-7rem)] items-center gap-10 pb-14 lg:grid-cols-[1fr_0.92fr]">
        <div className="max-w-4xl animate-fade-up">
          <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
            مرشح لتطوير الرياضة في البلدية
          </p>
          <h1 className="text-5xl font-black leading-[1.12] sm:text-7xl lg:text-8xl">
            عادل قراش
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-bold leading-9 text-emerald-50 sm:text-2xl">
            برنامج محلي يجعل الرياضة مساحة للشباب، التربية، الصحة، والانتماء المجتمعي.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-black text-campaign-deep shadow-soft transition hover:-translate-y-0.5 hover:bg-campaign-mint"
            >
              اكتشف البرنامج
              <ArrowLeft size={19} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-4 text-base font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              تواصل معنا
              <MessageCircle size={19} />
            </a>
          </div>
        </div>

        <div className="grid gap-5 animate-slide-in">
          <div className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[1.75rem] border border-white/25 bg-white/10 p-3 shadow-soft backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-campaign-deep">
              <Image
                src="/adel.jpg"
                alt="صورة المرشح عادل قراش"
                fill
                priority
                sizes="(min-width: 1024px) 430px, 90vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-campaign-deep/92 to-transparent p-5">
                <p className="text-sm font-bold text-emerald-100">مدرب رياضي وأستاذ تربية بدنية</p>
                <p className="mt-1 text-2xl font-black text-white">عادل قراش</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl border border-white/25 p-5 text-campaign-ink shadow-soft">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-campaign-green text-white">
                <Trophy size={22} />
              </span>
              <div>
                <h2 className="text-xl font-black">رياضة منظمة وقريبة</h2>
                <p className="mt-2 leading-7 text-slate-600">
                  خطة بلدية للتنسيق بين النوادي، تنظيم المنافسات، وتوسيع الوصول إلى الرياضة داخل الأحياء.
                </p>
              </div>
            </div>
          </div>
          <div className="glass-panel rounded-2xl border border-white/25 p-5 text-campaign-ink shadow-soft">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-campaign-green text-white">
                <Users size={22} />
              </span>
              <div>
                <h2 className="text-xl font-black">الشباب في قلب البرنامج</h2>
                <p className="mt-2 leading-7 text-slate-600">
                  تكوين، مشاركة، اكتشاف مواهب، وفضاءات رياضية عادلة لكل الفئات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
