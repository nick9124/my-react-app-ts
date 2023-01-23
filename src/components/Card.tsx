interface IProps {
  cardTitle: string;
  cardImage: string;
}

const Card = ({ cardTitle, cardImage }: IProps) => {
  return (
    <div className="relative flex flex-col justify-center text-center text-lg text-blSky-100">
      <img className="w-full object-cover" alt="cardImage" src={cardImage} />
      <div className="flex h-16 w-full items-center justify-center font-medium">
        {cardTitle}
      </div>
    </div>
  );
};

export default Card;
