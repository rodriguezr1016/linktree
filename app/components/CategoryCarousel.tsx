import type { UIEvent } from "react";
import type { Category, LinkCategory } from "../data/links";

type CategoryCarouselProps = {
  categories: Category[];
  selectedCategory: string;
  scrollProgress: number;
  onCategoryToggle: (category: LinkCategory) => void;
  onScroll: (event: UIEvent<HTMLDivElement>) => void;
};

export function CategoryCarousel({
  categories,
  selectedCategory,
  scrollProgress,
  onCategoryToggle,
  onScroll,
}: CategoryCarouselProps) {
  return (
    <div className="w-full overflow-hidden px-6 pt-6">
      <div
        className="scrollbar-hide -mb-4 flex gap-2 overflow-x-auto pb-4"
        onScroll={onScroll}
      >
        {categories.map((category) => (
          <button
            key={category.label}
            type="button"
            onClick={() => onCategoryToggle(category.label)}
            className={`flex min-w-[calc((100%-1rem)/3)] cursor-pointer items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition ${
              selectedCategory === category.label
                ? "border-[#A64E3F] bg-[#A64E3F] text-[#FDFBF7]"
                : "border-[#CDBFB4] bg-[#F5EFE8] text-[#4A443F] hover:border-[#A64E3F] hover:text-[#A64E3F]"
            }`}
          >
            <span className="text-xs font-semibold">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>
      <div className="mt-3 h-1 w-full rounded-full bg-[#E8E2D9]">
        <div
          className="h-full rounded-full bg-[#A64E3F] transition-[left]"
          style={{
            left: `${scrollProgress * 40}%`,
            position: "relative",
            width: "60%",
          }}
        />
      </div>
    </div>
  );
}
