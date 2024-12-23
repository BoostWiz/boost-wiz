import GameInformationTitle from '../Game/GameInformationTitle';
import { flexRow } from '@/styles/flex';

// 박스스코어 - 주요기록이 들어가는 컴포넌트, DataLine 컴포넌트 부분은 나중에 분리 예정
const HighLights = () => {
  return (
    <div className="pt-6">
      <GameInformationTitle titleText="주요 기록" />
      <div className="my-4 h-[300px]">
        <Separator />
        <DataLine
          dataType="결승타"
          dataValue="오스틴(1회 1사 1루서 우중간 2루타)"
        />
        <Separator />
        <DataLine dataType="2루타" dataValue="오스틴(1회) 김현수(1회)" />
        <DataLine dataType="실책" dataValue="오스틴(1회) 김현수(1회)" />
        <DataLine dataType="도루" dataValue="오스틴(1회) 김현수(1회)" />
        <DataLine dataType="도루자" dataValue="오스틴(1회) 김현수(1회)" />
        <DataLine dataType="주루사" dataValue="오스틴(1회) 김현수(1회)" />
        <DataLine dataType="실책" dataValue="오스틴(1회) 김현수(1회)" />
        <Separator />
        <DataLine
          dataType="심판"
          dataValue="전일수 이기종 나광남 박종철 문동균 김정국"
        />
      </div>
    </div>
  );
};

export default HighLights;

const Separator = () => {
  return <div className="w-full h-[1px] bg-[#717781]" />;
};

interface dataLineType {
  dataType: string;
  dataValue: string;
}

const DataLine = ({ dataType, dataValue }: dataLineType) => {
  return (
    <div
      className={`${flexRow} w-full my-2 ${dataType === '결승타' ? '' : 'text-sm text-[#35383E]'}`}
    >
      <div className="w-[14%] text-center">{dataType}</div>
      <div className="w-[3%]"></div>
      <div>{dataValue}</div>
    </div>
  );
};
