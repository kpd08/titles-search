export const Loader = () => {
  return (
    <div className="w-12 h-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="animate-spin"
      >
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};

export const LoaderOverlay = () => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-gray-200 bg-opacity-50"
      data-testid="loader-overlay"
    >
      <Loader />
    </div>
  );
};
