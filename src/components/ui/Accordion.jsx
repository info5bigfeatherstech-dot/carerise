import Icon from "./Icon";

/** Keyboard-friendly disclosure list controlled by the parent state. */
export default function Accordion({ items, openId, onToggle, className = "" }) {
  return (
    <div
      className={`divide-y divide-brand/15 border-y border-brand/15 ${className}`}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => onToggle(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-5 py-5 text-left font-display text-lg font-medium text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-xl"
              >
                {item.question}
                <Icon
                  name="chevron-down"
                  className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            {isOpen ? (
              <div
                id={panelId}
                className="pb-5 pr-8 text-sm leading-7 text-brand/75"
              >
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
