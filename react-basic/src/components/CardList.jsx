
// 같은 폴더의 MemberCard 가져오기
import MemberCard from "./MemberCard";

function CardList() {

  return (
    <section className="section-box">

      <h2>2. 카드 리스트 컴포넌트</h2>

      <div className="card-list">

        {/* Props값 지정 */}
        <MemberCard name="김민수" age="16" favorite="산책" />
        <MemberCard name="이서연" age="23" favorite="맛집 탐방" />
        <MemberCard name="박지훈" age="28" favorite="게임" />
        <MemberCard name="이지은" age="28" favorite="음악감상" />

      </div>

    </section>
  );
}

export default CardList;