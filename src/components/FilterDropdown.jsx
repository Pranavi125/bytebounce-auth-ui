import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const FilterDropdown = ({
  label,
  options,
  selectedValues,
  onSelectionChange,
  multiSelect = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    if (multiSelect) {
      if (selectedValues.includes(value)) {
        onSelectionChange(selectedValues.filter((v) => v !== value));
      } else {
        onSelectionChange([...selectedValues, value]);
      }
    } else {
      onSelectionChange([value]);
      setIsOpen(false);
    }
  };

  const displayText =
    selectedValues.length > 0
      ? selectedValues.length === 1
        ? options.find((o) => o.value === selectedValues[0])?.label || label
        : `${selectedValues.length} selected`
      : label;

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`
          flex items-center gap-2 px-4 py-2.5 rounded-lg
          border border-emerald-600/60
          text-sm font-medium
          transition-all duration-200
          bg-white
          ${
            isOpen || selectedValues.length > 0
              ? "text-emerald-700 bg-emerald-50"
              : "text-gray-700 hover:bg-emerald-50"
          }
        `}
      >
        <span>{displayText}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute top-full left-0 mt-2 z-20 min-w-[220px] bg-white rounded-lg border border-emerald-600/40 shadow-lg overflow-hidden">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 transition-colors"
              >
                <span>{option.label}</span>
                {selectedValues.includes(option.value) && (
                  <Check className="h-4 w-4 text-emerald-600" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FilterDropdown;
