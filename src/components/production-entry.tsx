type Props = {
  production: Production;
};

export const ProductionEntry = ({ production }: Props) => {
  return (
    <div
      className="flex flex-col items-center md:flex-row md:items-start my-2 p-4 border-b-2 border-gray-400 border-opacity-50"
      data-testid="production-details"
    >
      <img
        src={production.Poster}
        className="object-cover rounded-full justify-self-center w-40 h-40 md:h-56 md:rounded-md shadow-lg md:mx-4"
        alt={production.Title}
      />
      <div className="flex flex-col items-center md:items-start my-4 md:my-0">
        <h1 className="text-lg md:text-3xl text-center">{production.Title}</h1>
        <span className="text-gray-600">{production.Year}</span>
      </div>
    </div>
  );
};
