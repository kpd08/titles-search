type Props = {
  children: React.ReactNode;
};

export const ErrorBox = ({ children }: Props) => {
  return (
    <span
      className="p-4 my-2 border-2 rounded-lg border-red-500 text-red-500"
      data-testid="error-box"
    >
      {children}
    </span>
  );
};
