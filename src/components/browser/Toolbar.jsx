import { useEffect, useRef, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LockIcon,
  ReloadIcon,
} from "../ui/icons";

const ToolButton = ({ label, onClick, disabled, className = "", children }) => (
  <button
    type="button"
    aria-label={label}
    title={label}
    onClick={onClick}
    disabled={disabled}
    className={`inline-flex size-8 items-center justify-center rounded-full text-mac-1 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-mac-1 ${className}`}
  >
    {children}
  </button>
);

// Clicking the address copies the current URL, like a share shortcut.
const AddressBar = ({ address }) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      return; // clipboard unavailable (e.g. insecure context): do nothing
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy page link"
      className="flex h-8 min-w-0 flex-1 items-center gap-x-2 rounded-full bg-dark-2/80 px-3 text-left text-sm text-light-2 transition-colors hover:bg-dark-2"
    >
      <LockIcon size={12} className="shrink-0 text-mac-1" />
      <span className="truncate">{address}</span>
      <span
        aria-live="polite"
        className={`ml-auto shrink-0 text-xs text-main-1 transition-opacity duration-200 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        {copied ? "Link copied" : ""}
      </span>
    </button>
  );
};

// Back / forward / reload and the address bar. On phones back and forward
// live in the bottom toolbar instead.
const Toolbar = ({ nav }) => (
  <div className="flex h-12 items-center gap-x-1 px-3 md:h-10">
    <div className="hidden items-center md:flex">
      <ToolButton label="Back" onClick={nav.back} disabled={!nav.canGoBack}>
        <ArrowLeftIcon size={20} />
      </ToolButton>
      <ToolButton label="Forward" onClick={nav.forward} disabled={!nav.canGoForward}>
        <ArrowRightIcon size={20} />
      </ToolButton>
    </div>

    <ToolButton label="Reload" onClick={nav.reload} className="order-last md:order-none">
      <ReloadIcon size={18} />
    </ToolButton>

    <AddressBar address={nav.address} />
  </div>
);

export default Toolbar;
