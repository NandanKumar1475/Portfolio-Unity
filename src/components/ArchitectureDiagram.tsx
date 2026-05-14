import { ArrowDown } from "lucide-react";

const layers = ["Input Layer", "Interaction Manager", "Simulation Engine", "Feedback Layer", "UI Layer"];

export function ArchitectureDiagram() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="mx-auto max-w-xl">
        {layers.map((layer, index) => (
          <div key={layer}>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-4 text-center font-semibold text-cyan-50">
              {layer}
            </div>
            {index < layers.length - 1 ? (
              <div className="flex justify-center py-3 text-cyan-200">
                <ArrowDown className="h-5 w-5" aria-hidden="true" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
