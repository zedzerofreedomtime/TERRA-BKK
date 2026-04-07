import type { LucideIcon } from "lucide-react";

type ActionCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ActionCard({
  title,
  description,
  icon: Icon,
}: ActionCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-card-top">
        <Icon className="h-10 w-10" strokeWidth={2.2} />
      </div>

      <div className="feature-card-body">
        <h3 className="feature-card-title">{title}</h3>
        <p className="feature-card-desc">{description}</p>
      </div>
    </article>
  );
}