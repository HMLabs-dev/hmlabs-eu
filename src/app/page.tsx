import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/section-heading";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-0 md:px-8 md:pb-0">
      <section id="about">
        <SectionHeading index="02" title="HMLabs" />
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
