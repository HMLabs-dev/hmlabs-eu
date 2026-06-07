import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/section-heading";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 pb-0 md:px-8 md:pb-0">
      <section className="mb-8 rounded-base border border-border/30 bg-main p-6 text-main-foreground shadow-sm md:p-8">
        <h1 className="mb-3 text-3xl font-heading leading-tight sm:text-5xl">
          HMLabs
        </h1>
      </section>

      <section
        id="about"
        className="mb-8 rounded-base border border-border/30 bg-secondary-background p-6 shadow-sm"
      >
        <SectionHeading index="02" title="About" />
        <div className="mt-6 space-y-8 text-foreground">
          <div>
            <p className="text-sm leading-relaxed md:text-base">
              HMLabs is the umbrella organization and tech-lab for all digital
              projects, open-source tools, and community networks created by
              Henry Meyer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
