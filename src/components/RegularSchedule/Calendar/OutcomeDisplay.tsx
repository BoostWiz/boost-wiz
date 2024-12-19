import { flexColumnCenter } from '@/styles/flex';

interface OutcomeDisplayProps {
  text: '승' | '패' | '무';
}

const OutcomeDisplay = ({ text }: OutcomeDisplayProps) => {
  let bgColor = '';
  if (text === '승') bgColor = 'bg-primary';
  if (text === '패') bgColor = 'bg-nearBlack';
  if (text === '무') bgColor = 'bg-slateGray';
  return (
    <div
      className={`${flexColumnCenter} w-[24px] h-[24px] ${bgColor} text-xs text-white rounded-md`}
    >
      {text}
    </div>
  );
};

export default OutcomeDisplay;
