import "./style.css";

interface Props {
  title: string;
  color: string;
  name: string;
  onClickCard: (type: string) => void;
}

const CategoryCard = ({ title, color, name, onClickCard }: Props) => {
  return (
    <div className="relative rounded-xl overflow-hidden w-[300px] h-[400px] cursor-pointer" onClick={() => onClickCard(name)}>
      <div
        className={`flexCenter w-[300px] h-[400px] ${color} transition-all hover:grayscale hover:transition-all text-[white] text-3xl font-semibold`}
      >
        {title}
      </div>
    </div>
  );
};

export default CategoryCard;
