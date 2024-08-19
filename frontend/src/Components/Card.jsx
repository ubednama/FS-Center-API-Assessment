const Card = ({item}) => {
  return (
    <div className="bg-white border-2 rounded-lg  text-left hover:shadow-lg transition-shadow duration-300 min-w-96">
      <h2 className="text-xl font-semibold mb-2 border-b-2 px-5 py-2 ">
        {item.title}
      </h2>
      <p className="text-gray-600 px-5  h-20">{item.description}</p>
    </div>
  );
}

export default Card
