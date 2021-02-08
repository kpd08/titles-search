export const SearchBox = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  return (
    <input
      data-testid="search-box"
      {...props}
      className="border-2 border-gray-200 rounded-lg p-4 my-4 focus:border-gray-700 transition-colors duration-500"
    />
  );
};
