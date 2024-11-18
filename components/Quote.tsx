import React from "react";

const QuoteComponent = ({ text, author }: { text: string; author: string }) => {
  return (
    <div className="relative max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <svg
        className="absolute top-0 left-0 w-16 h-16 text-gray-200 transform -translate-x-4 -translate-y-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M10.802 9.695c0-1.306-.936-2.571-2.573-2.571C6.473 7.124 5 8.333 5 10.028c0 1.695 1.054 2.438 2.124 2.438 1.251 0 2.155-1.148 2.155-2.438l.523-2.938-.523 2.605zm4.779 0c0-1.306-.936-2.571-2.572-2.571-1.757 0-3.23 1.209-3.23 2.904 0 1.695 1.054 2.438 2.124 2.438 1.251 0 2.155-1.148 2.155-2.438l.523-2.938-.523 2.605z" />
      </svg>

      <blockquote className="relative z-10 text-lg italic text-gray-800 font-semibold leading-relaxed">
        &quot;{text}&quot;
      </blockquote>

      <div className="mt-4 text-right">
        <span className="text-md text-gray-600 font-medium">— {author}</span>
      </div>

      <svg
        className="absolute bottom-0 right-0 w-16 h-16 text-gray-200 transform translate-x-4 translate-y-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13.198 14.305c0 1.306.936 2.571 2.573 2.571 1.756 0 3.229-1.209 3.229-2.904 0-1.695-1.054-2.438-2.124-2.438-1.251 0-2.155 1.148-2.155 2.438l-.523 2.938.523-2.605zm-4.779 0c0 1.306.936 2.571 2.572 2.571 1.757 0 3.23-1.209 3.23-2.904 0-1.695-1.054-2.438-2.124-2.438-1.251 0-2.155 1.148-2.155 2.438l-.523 2.938.523-2.605z" />
      </svg>
    </div>
  );
};

export default QuoteComponent;
