import Card from "./Card";

const CardComponent = ({cardData, error, isLoading}) => {
  return (
    <main className="flex-grow flex flex-col items-center text-center ">
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2  gap-6 max-w-5xl py-20">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {cardData.length > 0 &&
          cardData.map((item, index) => (
            <Card key={index} item={item}/>
          ))}
      </div>
    </main>
  );
}

export default CardComponent
