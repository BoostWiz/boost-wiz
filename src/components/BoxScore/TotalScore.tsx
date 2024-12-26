import { flexColumnCenter, flexRow, flexRowCenter } from '@/styles/flex';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';

// 박스스코어 제일 위에 위치한 경기 정보 요약이 들어가는 컴포넌트
const TotalScore = () => {
  return (
    <div className={`${flexRow} h-[250px] bg-[#ECEEF2]/50`}>
      <div className={`${flexColumnCenter} h-full sm:w-[5%] w-[10%]`}>
        <ChevronLeft size={50} />
      </div>
      <div className={`${flexColumnCenter} h-full sm:w-[90%] w-[80%]`}>
        {/* 첫번째팀 정보 */}
        <div className={`${flexRowCenter} h-[45%] w-full`}>
          <div className={`${flexRowCenter} w-[30%] h-full`}>
            <div className={`${flexColumnCenter} w-[30%] h-full`}>
              <p className="text-2xl font-bold">KT</p>
              <p className="text-sm">승 - 김민</p>
            </div>
            <div className="w-[30%] text-center">로고</div>
            <div className="w-[30%] text-center font-bold text-5xl">3</div>
          </div>
          {/* 경기장, 경기일자 */}
          <div
            className={`${flexColumnCenter} w-[20%] h-full text-center text-sm`}
          >
            <p>2024.07.02</p>
            <p>수원</p>
          </div>
          {/* 두번째 팀 정보 */}
          <div className={`${flexRowCenter} w-[30%] h-full`}>
            <div className="w-[30%] text-center font-bold text-5xl">2</div>
            <div className="w-[30%] text-center">로고</div>
            <div className={`${flexColumnCenter} w-[30%] h-full`}>
              <p className="text-2xl font-bold">LG</p>
              <p className="text-sm">패 - 최원태</p>
            </div>
          </div>
        </div>
        <div className="h-[50%] w-[65%] overflow-x-auto mt-2">
          <Table className="w-full text-sm border-collapse text-center [&_tr]:!h-8 [&_th]:!h-8 [&_td]:!h-8">
            <TableHeader>
              <TableRow>
                <TableHead className="p-1 bg-[#D60C0C] text-white text-center w-20">
                  팀
                </TableHead>
                {Array.from({ length: 9 }, (_, i) => (
                  <TableHead
                    key={i}
                    className="p-1 bg-[#D60C0C] text-white text-center w-10"
                  >
                    {i + 1}
                  </TableHead>
                ))}
                {/* 구분용 빈 컬럼 */}
                <TableHead className="p-1 bg-[#D60C0C] w-3"></TableHead>
                {['R', 'H', 'E', 'B'].map((header) => (
                  <TableHead
                    key={header}
                    className="p-1 bg-[#D60C0C] text-white text-center w-10"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {['KT', 'LG'].map((team) => (
                <TableRow key={team}>
                  <TableCell className="p-1 whitespace-nowrap w-20">
                    {team}
                  </TableCell>
                  {Array.from({ length: 9 }, (_, i) => (
                    <TableCell key={i} className="p-1 w-10">
                      0
                    </TableCell>
                  ))}
                  {/* 구분용 빈 컬럼 */}
                  <TableCell className="p-1 w-3"></TableCell>
                  {Array.from({ length: 4 }, (_, i) => (
                    <TableCell key={i} className="p-1 w-10">
                      0
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className={`${flexColumnCenter} h-full sm:w-[5%] w-[10%]`}>
        <ChevronRight size={50} />
      </div>
    </div>
  );
};

export default TotalScore;
