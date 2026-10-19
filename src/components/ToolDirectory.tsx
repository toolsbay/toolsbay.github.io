import React, { useState, useEffect, useMemo, useRef } from 'react';
import { TOOLS_CATALOG, CATEGORIES, type ToolItem } from '../data/toolsCatalog';
import { translations, type TranslationDictionary } from '../i18n/translations';

interface ToolDirectoryProps {
  currentLang?: string;
}

export const ToolDirectory: React.FC<ToolDirectoryProps> = ({ currentLang = 'en' }) => {
  const t: TranslationDictionary = translations[currentLang] || translations.en;
  const searchInputRef = useRef<HTMLInputElement>(null);

  // States
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [pinnedToolIds, setPinnedToolIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load pinned tools from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('toolsbay_pinned_tools');
      if (saved) {
        setPinnedToolIds(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('LocalStorage unavailable for pinned tools');
    }
    setIsLoaded(true);
  }, []);

  // Save pinned tools to localStorage
  const togglePin = (toolId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setPinnedToolIds((prev) => {
      let next: string[];
      if (prev.includes(toolId)) {
        next = prev.filter((id) => id !== toolId);
      } else {
        next = [...prev, toolId];
      }
      try {
        localStorage.setItem('toolsbay_pinned_tools', JSON.stringify(next));
      } catch (err) {
        // Ignored
      }
      return next;
    });
  };

  // Keyboard shortcut: Cmd/Ctrl + K or / to focus search, Esc to clear
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K or forward slash
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      } else if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape' && document.activeElement === searchInputRef.current) {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter tools based on query & category
  const filteredTools = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return TOOLS_CATALOG.filter((tool) => {
      // Category filter
      if (activeCategory === 'pinned') {
        if (!pinnedToolIds.includes(tool.id)) return false;
      } else if (activeCategory !== 'all') {
        if (tool.category !== activeCategory) return false;
      }

      // Query filter
      if (!query) return true;

      const nameMatch = tool.name.toLowerCase().includes(query);
      const descMatch = tool.desc.toLowerCase().includes(query);
      const tagMatch = tool.tags.some((tag) => tag.toLowerCase().includes(query));
      const localizedDesc = tool.localizedDesc?.[currentLang as 'es']?.toLowerCase().includes(query);

      return nameMatch || descMatch || tagMatch || localizedDesc;
    });
  }, [searchQuery, activeCategory, pinnedToolIds, currentLang]);

  // Separate pinned tools for the top shelf when on 'all' tab and no active search query
  const pinnedShelfTools = useMemo(() => {
    if (!isLoaded || pinnedToolIds.length === 0 || activeCategory !== 'all' || searchQuery.trim() !== '') {
      return [];
    }
    return TOOLS_CATALOG.filter((tool) => pinnedToolIds.includes(tool.id));
  }, [isLoaded, pinnedToolIds, activeCategory, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: TOOLS_CATALOG.length,
      pinned: pinnedToolIds.length,
    };
    TOOLS_CATALOG.forEach((tool) => {
      counts[tool.category] = (counts[tool.category] || 0) + 1;
    });
    return counts;
  }, [pinnedToolIds]);

  const resetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    searchInputRef.current?.focus();
  };

  return (
    <div className="w-full">
      {/* Search Command Bar */}
      <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
        <div className="relative flex items-center">
          <div className="absolute left-4 pointer-events-none text-olive-600 dark:text-sand">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            ref={searchInputRef}
            id="main-tool-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchAriaLabel}
            className="w-full pl-12 pr-24 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-medium bg-white dark:bg-dark-surface text-neutral-900 dark:text-neutral-100 border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-moss/50 dark:focus:ring-sand/50 shadow-luxury-light dark:shadow-luxury-dark transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />

          <div className="absolute right-3.5 flex items-center gap-1.5">
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                title="Clear Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            ) : (
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm">
                <span className="text-xs">⌘</span>K
              </kbd>
            )}
          </div>
        </div>
      </div>

      {/* Horizontally Swipeable Category Pills Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3.5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-olive-700 dark:text-olive-300">
            {t.showingTools} {filteredTools.length}{' '}
            {filteredTools.length === 1 ? t.toolSingular : t.toolsPlural}
          </h2>
          {activeCategory !== 'all' && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-semibold text-moss dark:text-sand hover:underline"
            >
              {t.resetFilters}
            </button>
          )}
        </div>

        <div
          className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          role="tablist"
          aria-label="Tool Categories"
        >
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const isSelected = activeCategory === cat.id;
            const categoryLabel = t.categories[cat.key as keyof typeof t.categories] || cat.key;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer select-none shrink-0 ${
                  isSelected
                    ? 'bg-moss text-white border-moss shadow-sm dark:bg-sand dark:text-neutral-900 dark:border-sand'
                    : 'bg-white dark:bg-dark-surface text-neutral-700 dark:text-neutral-300 border-light-border dark:border-dark-border hover:border-moss/40 dark:hover:border-sand/40 hover:bg-sand-50/60 dark:hover:bg-dark-hover'
                }`}
              >
                <span className="text-sm">{cat.icon}</span>
                <span>{categoryLabel}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                    isSelected
                      ? 'bg-black/20 dark:bg-black/15 text-white dark:text-neutral-900'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Top Pinned Shelf (shown when pinned tools exist and user is on 'all' tab with no search) */}
      {pinnedShelfTools.length > 0 && (
        <section className="mb-12 p-4 sm:p-6 rounded-3xl bg-sand-50/80 dark:bg-dark-surface/60 border border-sand-300/60 dark:border-sand/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-50">
                {t.pinnedSectionTitle}
              </h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-sand-200/80 dark:bg-sand/20 text-olive-800 dark:text-sand font-mono font-bold">
                {pinnedShelfTools.length}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setActiveCategory('pinned')}
              className="text-xs font-semibold text-moss dark:text-sand hover:underline"
            >
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pinnedShelfTools.map((tool) => (
              <ToolCardItem
                key={`shelf-${tool.id}`}
                tool={tool}
                isPinned={true}
                onTogglePin={(e) => togglePin(tool.id, e)}
                currentLang={currentLang}
                t={t}
              />
            ))}
          </div>
        </section>
      )}

      {/* Main Bento Cards Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredTools.map((tool) => (
            <ToolCardItem
              key={tool.id}
              tool={tool}
              isPinned={pinnedToolIds.includes(tool.id)}
              onTogglePin={(e) => togglePin(tool.id, e)}
              currentLang={currentLang}
              t={t}
            />
          ))}
        </div>
      ) : (
        /* Empty Results State */
        <div className="text-center py-20 px-4 rounded-3xl bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sand-100 dark:bg-dark-card text-olive-700 dark:text-sand mb-4 shadow-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
            {t.noResultsTitle}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-6">
            {activeCategory === 'pinned' && pinnedToolIds.length === 0
              ? t.pinnedEmptyDesc
              : t.noResultsDesc}
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-moss dark:bg-sand text-white dark:text-neutral-900 text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            <span>{t.resetFilters}</span>
          </button>
        </div>
      )}
    </div>
  );
};

// Tool Card Item Component with Crawlable <a> Anchor Link
interface ToolCardItemProps {
  tool: ToolItem;
  isPinned: boolean;
  onTogglePin: (e: React.MouseEvent) => void;
  currentLang: string;
  t: TranslationDictionary;
}

const ToolCardItem: React.FC<ToolCardItemProps> = ({
  tool,
  isPinned,
  onTogglePin,
  currentLang,
  t,
}) => {
  const description =
    tool.localizedDesc?.[currentLang as 'es'] || tool.desc;

  return (
    <article className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-sand-300 dark:hover:border-sand/40 hover:shadow-luxury-light dark:hover:shadow-glow-sand transition-all duration-300">
      <div>
        {/* Top Card Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* Icon Avatar */}
            <div className="w-10 h-10 rounded-xl bg-sand-100 dark:bg-dark-card border border-sand-300/40 dark:border-sand/20 flex items-center justify-center text-moss dark:text-sand group-hover:scale-105 transition-transform duration-200">
              <span className="text-lg">
                {tool.category === 'video_and_audio' && '🎬'}
                {tool.category === 'image_and_design' && '🎨'}
                {tool.category === 'pdf_and_documents' && '📄'}
                {tool.category === 'productivity_and_wellness' && '⚡'}
                {tool.category === 'dev_finance_and_utility' && '🛠️'}
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-moss dark:group-hover:text-sand transition-colors">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-describedby={`tool-desc-${tool.id}`}
                  className="focus:outline-none focus-visible:underline"
                >
                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                  {tool.name}
                </a>
              </h4>
              <span className="text-[11px] font-medium text-olive-600 dark:text-olive-300">
                {t.categories[tool.category]}
              </span>
            </div>
          </div>

          {/* Star/Pin Button */}
          <button
            type="button"
            onClick={onTogglePin}
            className={`relative z-20 p-2 rounded-xl transition-all duration-200 ${
              isPinned
                ? 'text-amber-500 bg-amber-50 dark:bg-amber-500/10'
                : 'text-neutral-400 hover:text-amber-500 hover:bg-neutral-100 dark:hover:bg-dark-card'
            }`}
            title={isPinned ? t.unpinTool : t.pinTool}
            aria-label={isPinned ? t.unpinTool : t.pinTool}
          >
            <svg
              className={`w-4 h-4 transition-transform ${isPinned ? 'scale-110 fill-current' : ''}`}
              fill={isPinned ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
        </div>

        {/* Description */}
        <p
          id={`tool-desc-${tool.id}`}
          className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4"
        >
          {description}
        </p>
      </div>

      {/* Card Footer: Badges & External Link Arrow */}
      <div className="flex items-center justify-between pt-3 border-t border-light-border/60 dark:border-dark-border/60 mt-auto">
        <div className="flex items-center gap-1.5 flex-wrap">
          {tool.badge && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-sage-100 dark:bg-sage/10 text-moss dark:text-sage border border-sage-300/40">
              {tool.badge}
            </span>
          )}
          <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
            zero-server
          </span>
        </div>

        <span className="relative z-20 flex items-center gap-1 text-xs font-semibold text-moss dark:text-sand group-hover:translate-x-0.5 transition-transform duration-200">
          <span>{t.launchTool}</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      </div>
    </article>
  );
};
