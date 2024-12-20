import { flexRow } from '@/styles/flex';

interface GameInformationTitleProps {
  titleText: string;
}

// 박스스코어, 순위기록, 관전 포인트에 들어가는 소제목
const GameInformationTitle = ({ titleText }: GameInformationTitleProps) => {
  return (
    <div className={`${flexRow} items-center`}>
      <div className="bg-[#D60C0C] w-2 h-8 mr-2"></div>
      <p className="text-lg">{titleText}</p>
    </div>
  );
};

export default GameInformationTitle;
