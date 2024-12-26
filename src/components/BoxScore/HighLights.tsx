import GameInformationTitle from '../Game/GameInformationTitle';
import { flexRow } from '@/styles/flex';

interface propsType {
  highLightInfo: any;
}

// 박스스코어 - 주요기록이 들어가는 컴포넌트
// todo: DataLine 컴포넌트 부분 분리, 타입 지정
const HighLights = ({ highLightInfo }: propsType) => {
  return (
    <div className="pt-6">
      <GameInformationTitle titleText="주요 기록" />
      <div className="my-4 h-[300px]">
        <Separator />
        {/* 타입 지정 수정 필요 */}
        {highLightInfo.map((info: any) => {
          if (info.how === '결승타') {
            return (
              <div>
                <DataLine
                  key={info.how}
                  dataType={info.how}
                  dataValue={info.result}
                />
                <Separator />
              </div>
            );
          }

          if (info.how === '심판') {
            return (
              <div>
                <Separator />
                <DataLine
                  key={info.how}
                  dataType={info.how}
                  dataValue={info.result}
                />
              </div>
            );
          }
          return (
            <DataLine
              key={info.how}
              dataType={info.how}
              dataValue={info.result}
            />
          );
        })}
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
      <div className="w-[75%]">{dataValue}</div>
    </div>
  );
};
