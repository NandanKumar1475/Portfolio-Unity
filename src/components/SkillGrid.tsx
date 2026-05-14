import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export function SkillGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {skillCategories.map((category) => (
        <Card key={category.title}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{category.description}</p>
            </div>
            <Badge tone="cyan">{category.skills.length} skills</Badge>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {category.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{skill.name}</p>
                      <p className="text-xs text-slate-500">{skill.level}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      ))}
    </div>
  );
}
