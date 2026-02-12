import { PriorityBlock } from "@/components/ui/PriorityBlock";
import type { Priority } from "@/lib/types";

interface PrioritiesGridProps {
  items: Priority[];
}

export function PrioritiesGrid({ items }: PrioritiesGridProps) {
  return (
    <div>
      {items.map((priority) => (
        <PriorityBlock key={priority.id} priority={priority} />
      ))}
    </div>
  );
}

