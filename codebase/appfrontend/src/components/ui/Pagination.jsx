import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = '',
  style = {},
}) => {
  if (totalPages <= 1) return null;

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '2rem',
        ...style,
      }}
      aria-label="Pagination Navigation"
    >
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="pressable"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.45rem 0.85rem',
          fontSize: '0.85rem',
          fontWeight: 500,
          background: 'var(--bg-elevated)',
          color: currentPage <= 1 ? 'var(--text-muted)' : 'var(--text-primary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-sm)',
          cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage <= 1 ? 0.5 : 1,
        }}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
        <span>Prev</span>
      </button>

      <span
        style={{
          padding: '0.45rem 0.85rem',
          fontSize: '0.88rem',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-display)',
        }}
      >
        Page {currentPage} of {totalPages}
      </span>

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="pressable"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.45rem 0.85rem',
          fontSize: '0.85rem',
          fontWeight: 500,
          background: 'var(--bg-elevated)',
          color: currentPage >= totalPages ? 'var(--text-muted)' : 'var(--text-primary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-sm)',
          cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage >= totalPages ? 0.5 : 1,
        }}
        aria-label="Next page"
      >
        <span>Next</span>
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
