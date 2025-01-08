export const navData = {
  ktwiz: {
    text: 'kt wiz',
    router: '/',
    items: [
      { id: 'ktwiz?', text: 'kt wiz는?', router: '/' },
      // { id: 'bi', text: '구단BI', router: '/' },
      // { id: 'policy', text: '회원정책', router: '/user/policy' },
      // { id: 'sponsor', text: '스폰서', router: '/sponsor' },
      // { id: 'wallpaper', text: '월페이퍼', router: '/wallpaper' },
    ],
  },
  wizpark: {
    text: 'wiz park',
    router: '/wizpark',
    items: [
      { id: 'intro', text: '수원 kt 위즈파크', router: '/wizpark/intro' },
      // { id: 'parking', text: '주차 예약', router: '/wizpark/parking' },
      { id: 'location', text: '찾아오기', router: '/wizpark/location' },
      // { id: 'iksan', text: '익산야구장', router: '/wizpark/iksanpark' },
    ],
  },
  game: {
    text: 'Game',
    router: '/game',
    items: [
      { id: 'regular', text: '정규 리그', router: '/game/schedule' },
      { id: 'boxscore', text: '박스 스코어', router: '/game/boxscore' },
      { id: 'ranking', text: '순위 기록', router: '/game/ranking' },
      { id: 'point', text: '관전포인트', router: '/game/point' },
    ],
  },
  player: {
    text: 'Player',
    router: '/player',
    items: [
      { id: 'coachlist', text: '코칭스텝', router: '/player/coachlist' },
      { id: 'pitcherlist', text: '투수', router: '/player/pitcher' },
      { id: 'catcherlist', text: '포수', router: '/player/batter' },
      { id: 'infielderlist', text: '내야수', router: '/player/infielderlist' },
      { id: 'cheerleader', text: '응원단', router: '/player/cheerleader' },
    ],
  },
  media: {
    text: 'Media',
    router: '/media',
    items: [
      { id: 'wiz_news', text: 'wiz 뉴스', router: '/media/wiznews' },
      { id: 'wiz_story', text: 'wiz 티비', router: '/media/wiztv' },
      // { id: 'thrower_info', text: '시구자 정보', router: '/media/info' },
      // { id: 'wiz_photo', text: 'wiz 포토', router: '/media/photo' },
    ],
    items_news: [
      { id: 'wiz_news', text: 'wiz 뉴스', router: '/media/wiznews' },
      { id: 'wiz_press', text: 'wiz 보도자료', router: '/media/wizpress' },
    ],
  },
};

export const homeCss = {
  header: 'bg-transparent hover:text-black',
  logo: '/common/white_logo.svg',
  nav: 'text-white',
  button: 'bg-white',
  text: 'text-black',
  liItem: '',
};

export const hoverCss = {
  header: 'hover:bg-white',
  logo: '/common/black_logo.svg',
  nav: 'text-black',
  button: 'group-hover:bg-black',
  text: 'group-hover:text-white',
  liItem: 'hover:font-bold',
};

// TODO: Scroll은 Ref로 특정 페이지에 달아줘서 제어해줘야 한다.
export const bgBlackCss = {
  header: 'bg-black hover:text-white',
  logo: '/common/white_logo.svg',
  nav: 'text-white',
  button: 'group-hover:bg-white',
  text: 'group-hover:text-black',
  liItem: 'hover:font-bold',
};
