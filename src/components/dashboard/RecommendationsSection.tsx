import { useState } from 'react';
import { Utensils, Car, Camera, ShoppingBag } from 'lucide-react';
import { CategoryCard, CategoryColorScheme } from './CategoryCard';
import { useToast } from '@/hooks/use-toast';

interface CategoryItem {
  id: string;
  title: string;
  icon: typeof Utensils;
  colorScheme: CategoryColorScheme;
}

const categories: CategoryItem[] = [
  { id: 'dining', title: 'Local Dining', icon: Utensils, colorScheme: 'peach' },
  { id: 'transport', title: 'Transport', icon: Car, colorScheme: 'mint' },
  { id: 'sights', title: 'Sights', icon: Camera, colorScheme: 'blue' },
  { id: 'shopping', title: 'Shopping', icon: ShoppingBag, colorScheme: 'pink' },
];

/**
 * My Recommendations section with toggleable category cards
 */
export function RecommendationsSection() {
  const { toast } = useToast();
  const [activeCategories, setActiveCategories] = useState<Record<string, boolean>>({
    dining: true,
    transport: true,
    sights: true,
    shopping: false,
  });

  const handleToggle = (id: string, active: boolean) => {
    setActiveCategories((prev) => ({ ...prev, [id]: active }));
    
    const category = categories.find((c) => c.id === id);
    toast({
      title: active ? 'Category Enabled' : 'Category Disabled',
      description: `${category?.title} is now ${active ? 'visible' : 'hidden'} for guests.`,
    });
  };

  return (
    <section className="px-4 py-2 max-w-2xl mx-auto">
      <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
        My Recommendations
      </h2>
      
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            title={category.title}
            icon={category.icon}
            colorScheme={category.colorScheme}
            isActive={activeCategories[category.id]}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
}
