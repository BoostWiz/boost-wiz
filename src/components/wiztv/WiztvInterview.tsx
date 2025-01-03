import { flexColumnCenter, flexRowSpaceBetween } from '@/styles/flex';
import { Button } from '@/shared/components';
import Input from '@/shared/components/Input';

export default function WiztvInterview() {
  return (
    <section>
      {/* 검색창 */}
      <div className="w-full my-4 h-16 bg-[#ECEEF2]/50 border-y border-y-[#ECEEF2]">
        <div className={`container-default !py-0 ${flexRowSpaceBetween}`}>
          <p className={`${flexColumnCenter} ml-3`}>
            선수들이 콕!콕! 찝어주는 경기 인터뷰를 확인해보세요
          </p>

          <div className={`w-[350px] flex  items-center text-sm mr-6`}>
            <p className="whitespace-nowrap mr-2 ">검색</p>
            <Input
              className="bg-white mr-1"
              placeholder="원하는 키워드로 검색하세요."
            />
            <Button>검색</Button>
          </div>
        </div>
      </div>
      <div>WiztvHighlight</div>
      <div>WiztvHighlight</div>
      <div>WiztvHighlight</div>
    </section>
  );
}
