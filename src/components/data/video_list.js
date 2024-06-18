// Animax VOD 전체 데이터

/****************************
    {
        rank: "",
        tit: ``,
        director: "",
        genre: "",
        company: "",
        epiNum: "",
        age: "",
        date: "",
        videoSrc: {
            openSrc:"",
            endSrc:"",
            promSrc:"",
        },
        gallerySrc:{
            stlSrc:[require("images/content/still/01.jpg",]),
            castSrc:[require("images/content/cast/.jpg",]),
        },
        desc: ``,
        thumSrc: require("images/content/thum/thum_.jpg"),
        logoSrc: require("images/content/logo/logo_.png",) 
        epiTit: "",
        hashtag: ['#아이돌','#이세계','#러브코미디','#액션/배틀','#스릴러','#순정/로맨스','#요괴/오컬트','#극장판',],
        newEpi: "2023-",
        live:"",
    },
    1) 랭크 : rank
    2) 제목 : tit
    3) 감독 : director
    4) 장르 : genre
    5) 제작사 : company
    6) 회차수 : epiNum
    7) 이용연령 : age
    8) 방송일자 : date
    9) 영상 : videoSrc
        9-1) 오프닝영상 : openSrc
        9-2) 엔딩영상 : endSrc
        9-3) 프로모션영상 : promSrc
    10) 줄거리 : desc
    11) 이미지경로 : thumSrc(view단 이미지 & list단 썸네일)
    12) 제목이미지경로 : logoSrc
    13) 에피소드제목: epiTit
    14) 해시태그 : hashtag
    15) 최신에피소드 방영날짜 : newEpi(ex 2023-12-01)
        (매일 날짜 기준으로 방영날짜와 비교 후 1달 미만일 경우, 
        오늘의 업데이트 list 에 뿌릴 예정)
    16) 본방 날짜 : live
****************************/

export const VideoListData = [
  {
    idx: "1",
    rank: "1",
    tit: `우리들의 비 내리는 프로토콜`,
    director: "카토 다이시",
    genre: "드라마",
    company: "Quad",
    epiNum: "미공개",
    age: "15",
    date: "2023.10",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/bokuame/bokuame_op.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/bokuame/bokuame_ed.mp4",
      promSrc: "https://jjmp4.ofscdn.com/PV/filler_bokuame_e.mp4",
    },
    desc: `엄마와 여동생 셋이서 살고 있는 고등학교 2학년 토키노야 슌.^사고로 인한 아빠의 죽음과 여동생의 부상을 계기로, 한때 열중했던 게임을 그만두고^현재는 E스포츠 카페 'FOX ONE'에서 일하고 있었다.^^소꿉친구이기도 한 게임 친구들과 교류하면서 슌은 알바와 공부에 열중했지만,^별안간 'FOX ONE'에 막대한 액수의 빚이 있다는 것이 발각되었다.^^`,
    thumSrc: require("images/content/thum/thum_01.jpg"),
    logoSrc: require("images/content/logo/logo_01.png"),
    epiTit: "제9화 무너지는 징조 Latch Up",
    hashtag: ["#러브코미디", "#순정/로맨스"],
    newEpi: "2023-12-04",
    live: "매주(월) 01:00",
  },
  {
    idx: "2",
    rank: "4",
    tit: `아이돌 마스터`,
    director: "니시고리 아츠시",
    genre: "드라마",
    company: "A-1 Pictures",
    epiNum: 6,
    age: "7",
    date: "2011.07",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/idolmaster/idol_opening.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/idolmaster/idol_ending.mp4",
      promSrc: "",
    },
    desc: `아이돌그것은 영원한 소녀들의 동경.하지만 그 정점에 서는 것은 극히 일부에 불과하다.이것은 그러한 서바이벌의 세계에 도전해나가는13명 소녀들의 이야기...`,
    thumSrc: require("images/content/thum/thum_02.jpg"),
    logoSrc: require("images/content/logo/logo_02.png"),
    epiTit: "26화 특별편 765프로덕션 이야기",
    hashtag: ["#아이돌", "#이세계"],
    newEpi: "2023-10-05",
    live: "",
  },
  {
    idx: "3",
    rank: "3",
    tit: `진격의 거인`,
    director: "아라키 테츠로",
    genre: "판타지",
    company: "WIT STUDIO",
    epiNum: 5,
    age: "19",
    date: "2013.07",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/shingeki/shingeki_op.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/shingeki/shingeki_ed.mp4",
      promSrc: "",
    },
    thumSrc: require("images/content/thum/thum_03.jpg"),
    logoSrc: require("images/content/logo/logo_03.png"),
    epiTit: "25화 벽 - 스토헤스 구 급습 3",
    desc: `100여년 전, 갑자기 나타난 거인들에 의해 멸종 위기에 처한 인류는 살아남기 위해 50m의 거대한 벽을 쌓고 그 안에서 숨죽이며 살아가고 있었다.^ 그러던 어느 날, 초대형 거인의 등장으로 벽은 무너지고, 거인들이 벽 안으로 들어와 사람들을 잡아먹기 시작하는데...^ 절규와 죽음으로 가득한 절망적인 상황에서 거인에게 소중한 사람들을 빼앗긴 엘런은 복수를 맹세한다`,
    hashtag: ["#스릴러", "#요괴/오컬트"],
    newEpi: "2013-09-29",
    live: "",
  },
  {
    idx: "4",
    rank: "2",
    tit: `오늘부터 신령님`,
    director: "다이치 아키타로",
    genre: "드라마",
    company: "TMS Entertainment",
    epiNum: 3,
    age: "all",
    date: "2012.10",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TVeeMovie/aniplus/kamisamakiss/kamisamakiss_op.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TVeeMovie/aniplus/kamisamakiss/kamisamakiss_ed.mp4",
      promSrc: "",
    },
    thumSrc: require("images/content/thum/thum_04.jpg"),
    logoSrc: require("images/content/logo/logo_04.png"),
    epiTit: "13화 오늘부터 신령님",
    desc: `빚 때문에 아버지는 가출하고 집은 압류당해^ 젊은 나이에 홈리스 신세가 된 여고생 모모조노 나나미.^^ 곤란해 하고 있는 나나미 앞에 집을 넘겨주겠다고 말하는 수상한 남자가 나타난다.^ 그 남자의 정체는 토지신 미카게.^^ 결국 나나미는 집(=버려진 신사)과 토지신의 역할까지^ 떠맡게 되어 버리는데?!`,
    hashtag: ["#이세계", "#요괴/오컬트"],
    newEpi: "2012-12-29",
    live: "",
  },
  {
    idx: "5",
    rank: "5",
    tit: `코드 기아스 반역의 를르슈`,
    director: "타니구치 고로",
    genre: "판타지",
    company: "선라이즈",
    epiNum: "미공개",
    age: "all",
    date: "2023.10",
    videoSrc: {
      openSrc: "https://jjmp4.ofscdn.com/TveeMovie/aniplus/geass/geass_op.mp4",
      endSrc: "https://jjmp4.ofscdn.com/TveeMovie/aniplus/geass/geass_ed.mp4",
      promSrc: "",
    },
    thumSrc: require("images/content/thum/thum_05.jpg"),
    logoSrc: require("images/content/logo/logo_05.png"),
    epiTit: "STAGE 14 기아스 대 기아스",
    desc: `'너를 지키기 위해, 세계를 파괴한다──.^ 초대국 브리타니아 제국에 점령당한 일본=에어리어11.^ 그곳에서 살고 있는 소년 를르슈와 스자쿠.^^ '기아스'의 힘을 손에 넣어 세계를 파괴하려 하는 를르슈.^ 나이트메어 프레임 '랜슬롯'을 조종해 세계에서 이상과 진실을 얻고자 하는 스자쿠.^^ 두 소년의 대조적인 삶은 이윽고 제국을 크게 뒤흔든다.^ 21세기의 새로운 전설이 지금, 시작된다.`,
    hashtag: ["#액션/배틀", "#스릴러"],
    newEpi: "2023-12-04",
    live: "매주(월) 02:30",
  },
  {
    idx: "6",
    rank: "6",
    tit: `마이 홈 히어로`,
    director: "카메이 타카시",
    genre: "드라마",
    company: "데즈카 프로덕션",
    epiNum: 2,
    age: "19",
    date: "2023.04",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/myhomehero/myhomehero_op.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/myhomehero/myhomehero_ed.mp4",
      promSrc: "https://jjmp4.ofscdn.com/PV/filler_myhomehero_e.mp4",
    },
    thumSrc: require("images/content/thum/thum_06.jpg"),
    logoSrc: require("images/content/logo/logo_06.png"),
    epiTit: "제12화 지금의 행복",
    desc: `[47년간 한 번도 법을 어기지 않고 살아왔다.^ 하지만, 오늘부터는 살인귀다. 아아......]^^ 사람이 사람을 죽였을 때, 대체 어떤 기분일까를 ^ 보잘것없는 회사원, 47세의 '토스 테츠오'는^ 울컥울컥 피를 쏟아내는 사체를 앞에 두고 생각하고 있었다.^^ 시간을 거슬러 올라 겨우 몇 시간 전.^^ 테츠오는 반항기의 딸 '레이카'에게 경원시 되었지만^ 사랑하는 아내 카센과 함께 그녀의 성장을 누구보다도 바라며 일상을 보내고 있었다.^^ 어느 날, 테츠오가 독립해 자취를 시작한 레이카를 찾아갔을 때^ 딸의 얼굴에는 맞아서 생긴 듯한 멍이 있었다.^^ 추궁했지만 레이카는 제대로 대답하지 않았다.^^ 굳게 결심한 테츠오는 레이카의 집에 몰래 들어가 옷장에 몸을 숨긴다.^ 그리고 보게 된 것이 레이카에게 손을 올린 '조직원'인 남자친구 '마토리 노부토'.^^ 게다가 노부토는 전 여자친구를 때려 죽인 과거가 있었고 조직원들과 함께^ 레이카를 노리는 '어떤 계획'을 진행하고 있는 초 위험인물이었다!^^ [레이카만큼은 지켜야 해.^ 설령 우리 부부에게 최악의 결말이 찾아오더라도......]^^ 사랑하는 가족을 위해 '평범하고 약한 아저씨'는^ 뒷세계의 실력자들을 상대로 목숨과 지혜를 건 싸움을 시작한다!`,
    hashtag: ["#스릴러", "#요괴/오컬트"],
    newEpi: "2023-12-04",
    live: "매주(월) 03:30",
  },
  {
    idx: "7",
    rank: "8",
    tit: `【최애의 아이】`,
    director: "히라마키 다이스케",
    genre: "드라마",
    company: "동화공방",
    epiNum: 1,
    age: "7",
    date: "2023.04",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/osiniko/osiniko_op.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/osiniko/osiniko_ed.mp4",
      promSrc: "",
    },
    thumSrc: require("images/content/thum/thum_07.jpg"),
    logoSrc: require("images/content/logo/logo_07.png"),
    epiTit: "제11화 아이돌",
    desc: `"이 연예계에서 거짓말은 무기다"^^ 지방 도시에서 일하는 산부인과 의사 고로.^ 어느 날, '최애' 아이돌 'B코마치'의 멤버 아이가 그의 앞에 나타난다.^^ 그녀는 어떤 금단의 비밀을 품고 있었는데...^ 그런 두 사람의 '최악'의 만남에서부터 운명이 움직이기 시작한다.`,
    hashtag: ["#아이돌", "#이세계", "#러브코미디", "#순정/로맨스", "#극장판"],
    newEpi: "2023-12-04",
    live: "매주(월) 04:30",
  },
  {
    idx: "8",
    rank: "7",
    tit: `장송의 프리렌`,
    director: "사이토 케이이치로",
    genre: "판타지",
    company: "매드하우스",
    epiNum: "미공개",
    age: "15",
    date: "2023.10",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/frieren/frieren_op.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/frieren/frieren_ed.mp4",
      promSrc: "https://jjmp4.ofscdn.com/PV/filler_frieren_e.mp4",
    },
    thumSrc: require("images/content/thum/thum_08.jpg"),
    logoSrc: require("images/content/logo/logo_08.png"),
    epiTit: "제13화 동족 혐오",
    desc: `용사 힘멜 일행과 함께 10년에 걸친 모험 끝에 마왕을 물리치고^ 세계에 평화를 가져온 마법사 프리렌.^^ 천 년을 넘게 사는 엘프인 그녀는 힘멜 일행과 재회를 약속하고 혼자 여행을 떠난다.^ 그로부터 50년 후 프리렌은 힘멜을 찾아갔지만^ 50년 전과 달라진 게 없는 그녀에 비해 힘멜은 늙었고 수명이 얼마 남아있지 않았다.^ 그 후 죽음을 맞이한 힘멜을 보고 지금까지 '인간을 아는' 일을 하지 않았던 것을 후회하고^ 자신을 반성한 프리렌은 '인간을 알기 위한' 여행을 떠난다.^^ 그 여로에는 다양한 사람들과의 만남, 다양한 사건들이 기다리고 있었는데.^
        
        ⓒKanehito Yamada, Tsukasa Abe/Shogakukan/ “Frieren”Project`,
    hashtag: ["#이세계", "#액션/배틀", "#극장판"],
    newEpi: "2023-12-02",
    live: "매주(토) 00:00",
  },
  {
    idx: "9",
    rank: "11",
    tit: `5등분의 신부`,
    director: "미야모토 유키히로",
    genre: "드라마",
    company: "Safft",
    epiNum: 2,
    age: "15",
    date: "",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/5hanayome_ova/5hanayome_ova_op.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/5hanayome_ova/5hanayome_ova_ed.mp4",
      promSrc: "",
    },
    thumSrc: require("images/content/thum/thum_09.jpg"),
    logoSrc: require("images/content/logo/logo_09.png"),
    epiTit: "제2화 우연이 없는 여름 방학 (후편)",
    desc: `애니메이션 시리즈에서는 그려지지 않았던 원작 에피소드^ 알려지지 않은 자매들 각자의 마음은.^^ 낙제 직전에다 공부를 싫어하는 미소녀 다섯 쌍둥이를^ 아르바이트 가정교사로서 졸업 전까지 가르치게 된 후타로.^^ 고교 생활도 앞으로 반년밖에 남지 않았고 마지막 여름 방학이 시작되려 하고 있었다.^^ 수험 공부에 집중하기 위해 여름 방학 기간에는 가정교사 아르바이트를 쉬겠다고 말하는 후타로.^ 후타로와 만날 수 없게 되는 것을 슬퍼하는 다섯 쌍둥이였지만, 갑자기 후타로에게서 전화가 걸려 왔는데...?!^^ 귀여운 500%의 다섯 쌍둥이 러브 코미디 여름방학편──!!`,
    hashtag: ["#이세계", "#러브코미디"],
    newEpi: "2023-09-01",
    live: "",
  },
  {
    idx: "10",
    rank: "9",
    tit: `SPY×FAMILY Season 2`,
    director: "후루하시 카즈히로, 하라타 타카히로",
    genre: "드라마",
    company: "WIT STUDIO, CloverWorks",
    epiNum: "미공개",
    age: "15",
    date: "2023.10",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/spyfamily2/spyfamily2_op.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/spyfamily2/spyfamily2_ed.mp4",
      promSrc: "https://jjmp4.ofscdn.com/PV/filler_spyfamily2_e.mp4",
    },
    thumSrc: require("images/content/thum/thum_10.jpg"),
    logoSrc: require("images/content/logo/logo_10.png"),
    epiTit: "MISSION:34 미래를 잇는 손",
    desc: `사람은 누구나 아무에게도 보여줄 수 없는 자신을 갖고 있다.^^세계 각국이 물밑에서 치열하게 정보전을 펼치는 시대.^오스타니아와 웨스탈리스는 십수 년간에 걸쳐 냉전 상태에 있었다.^^ 웨스탈리스의 정보국 대동과 <WISE> 소속의 수완가 스파이인 <황혼> 은 동서 평화를 위협하는 위험인물,^ 오스타니아의 국가통일당 총재 도노반 데스몬드의 동향을 살피기 위해^ 어떤 극비 임무를 수행하게 된다.^^ 그 이름은 오퍼레이션 <올빼미>.^^ 임무 내용은 "일주일 이내에 가족을 만들어,^ 데스몬드의 아들이 다니는 명문 학교의 친목회에 잠입하라".^^ <황혼> 은 정신과 의사 로이드 포저로 위장하고 가족을 만들게 된다.^ 하지만, 그가 만난 딸 아냐는 마음을 읽을 수 있는 초능력자, 아내 요르는 암살자였다!^ 3명의 이해가 일치하여 서로 정체를 숨기면서 함께 생활하게 되는데.^^ 해프닝 연속인 임시 가족에게, 세계의 평화는 맡겨졌다.^`,
    hashtag: ["#러브코미디", "#액션/배틀", "#순정/로맨스"],
    newEpi: "2023-11-26",
    live: "매주(일) 00:00",
  },
  {
    idx: "11",
    rank: "10",
    tit: `새로운 상사는 귀여운 허당`,
    director: "아베 노리유키",
    genre: "코미디",
    company: "A-1 Pictures",
    epiNum: "미공개",
    age: "15",
    date: "2023.10",
    videoSrc: {
      openSrc: "",
      endSrc: "",
      promSrc: "https://jjmp4.ofscdn.com/PV/filler_kawaitennen_e.mp4",
    },
    desc: `상사의 갑질 때문에 멘탈과 위장에 탈이 나서^ 광고 회사의 영업직으로 이직한 모모세.^^ 하지만 과거의 트라우마 때문에^ '새로운 상사도 또 갑질을 하면 어떡하지...'라는 생각을 하다^^ 출근 첫날부터 위통으로 움직일 수 없게 돼버렸다.^ 그때, 함께 인사를 돌던 새로운 상사 시로사키가 취한 행동은......?!^^ 예상치 못한 상사의 '허당끼'에 분명 당신도 치유받을 것이다!!`,
    thumSrc: require("images/content/thum/thum_11.jpg"),
    logoSrc: require("images/content/logo/logo_11.png"),
    epiTit: "9화째 그게 궁금하세요~!?",
    hashtag: ["#러브코미디", "#순정/로맨스"],
    newEpi: "2023-12-06",
    live: "매주(수) 01:00",
  },
  {
    idx: "12",
    rank: "12",
    tit: `아가씨와 충견군`,
    director: "타카모토 노부히로",
    genre: "드라마",
    company: "project No.9",
    epiNum: "미공개",
    age: "15",
    date: "2023.10",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/ojoutobankenkun/ojoutobankenkun_op.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/ojoutobankenkun/ojoutobankenkun_ed.mp4",
      promSrc: "https://jjmp4.ofscdn.com/PV/filler_ojoutobankenkun_e.mp4",
    },
    desc: `부모님을 어렸을 때 교통사고로 여읜 세나가키 이사쿠는,^ 야쿠자 조직의 두목인 할아버지의 집에 거두어져 지내게 되었다.^^ 어린 이사쿠의 보호자로서 그녀를 돌보게 된 사람은,^ 할아버지네 야쿠자 조직의 부두목이기도 한 우토 케이야였다.^^ 그는 어린 이사쿠의 부모이자 오빠로서 그녀를 성심성의껏 돌봤고...^^그렇게 시간이 흘러, 이사쿠는 고등학교에 입학하게 되었다.^ 야쿠자 집안의 손녀라는 배경에서 벗어나고자 일부러 먼 곳에 있는 학교를 골랐지만,^ 어찌 된 일인지 우토 케이야 또한 이사쿠가 다니게 된 고등학교에 부정 입학하게 되었는데.`,
    thumSrc: require("images/content/thum/thum_12.jpg"),
    logoSrc: require("images/content/logo/logo_12.png"),
    epiTit: "제10화 잔향과 속삭임",
    hashtag: ["#러브코미디", "#순정/로맨스"],
    newEpi: "2023-12-06",
    live: "매주(수) 02:00",
  },
  {
    idx: "13",
    rank: "14",
    tit: `울퉁불퉁 마녀 모녀의 사정`,
    director: "타카다 마사히로",
    genre: "판타지",
    company: "A-Real",
    epiNum: "미공개",
    age: "15",
    date: "2023.10",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/dekobokomajo/dekobokomajo_op.mp4",
      endSrc: "",
      promSrc: "https://jjmp4.ofscdn.com/PV/filler_dekobokomajo_e.mp4",
    },
    desc: `혼자서 숲에서 지내는 마녀 아리사는 어느 날 인간 아기를 줍게 되었다.^ 당혹스러워하면서도 그 아이에게 비올라라고 이름을 붙인 아리사는^ 그렇게 그 아이를 돌보게 되었는데.^^ 그렇게 16년 후,^ 비올라는 아리사의 상상을 아득히 뛰어넘는 성장을 보여..^^ 아니, 너무 성장했잖아!!^^ 외모가 역전되어 버린 모녀의 울퉁불퉁 좌충우돌 코미디,^ 지금 여기서 개막!!`,
    thumSrc: require("images/content/thum/thum_13.jpg"),
    logoSrc: require("images/content/logo/logo_13.png"),
    epiTit: "제10화 틀어박힌 아들의 고민 사정 / 속내와 겉치레의 공원 사정",
    hashtag: ["#이세계", "#러브코미디", "#요괴/오컬트"],
    newEpi: "2023-",
    live: "매주(화) 23:00",
  },
  {
    idx: "14",
    rank: "13",
    tit: `지박소년 하나코 군`,
    director: "안도 마사오미",
    genre: "판타지",
    company: "Lerche",
    epiNum: 2,
    age: "15",
    date: "2020.01",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/hanakokun/hanakokun_op.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/hanakokun/hanakokun_ed.mp4",
      promSrc: "https://jjmp4.ofscdn.com/PV/filler_hanakokun_re.mp4",
    },
    desc: `'저기, 알고 있니? 이 학교의 7대 불가사의 이야기……^ 카모메 학원에 전해오는 가장 유명한 7대 불가사의에 대한 소문.^^ 구 교사 3층 여자 화장실 세 번째 칸에는 하나코 씨가 있는데^ 불러낸 사람의 소원을 무엇이든 이뤄준대.^ 부르는 방법은 간단해  노크를 3번.^ 그리고───^^ '하나코 씨, 하나코 씨, 계신가요?'^ '네-에-……'^^ 자신의 소원을 이루기 위해^ 하나코 씨를 부른 오컬트 소녀 야시로 네네.^ 하지만, 그녀의 앞에 나타난 것은 남자아이의 유령^ '하나코 군'이었다.^^ 요괴이지만 가학적이고 조금은 엉큼한 하나코 군에게 휘둘리며^ 다양한 괴담에 휘말리는 네네.^ 과연 네네는 무사히 학원 생활을 보낼 수 있을 것인가^ 누구도 본 적 없는 하트풀 화장실 코미디가 지금 시작된다.^`,
    thumSrc: require("images/content/thum/thum_14.jpg"),
    logoSrc: require("images/content/logo/logo_14.png"),
    epiTit: "제12괴이 인어공주",
    hashtag: ["#이세계", "#스릴러", "#요괴/오컬트"],
    newEpi: "2020-03-29",
    live: "",
  },
  {
    idx: "15",
    rank: "15",
    tit: `어떤 아재의 VRMMO 활동기`,
    director: "나카자와 유이치",
    genre: "판타지",
    company: "MAHO FILM",
    epiNum: "미공개",
    age: "15",
    date: "2023.10",
    videoSrc: {
      openSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/toaruossan/toaruossan_op.mp4",
      endSrc:
        "https://jjmp4.ofscdn.com/TveeMovie/aniplus/toaruossan/toaruossan_ed.mp4",
      promSrc: "https://jjmp4.ofscdn.com/PV/filler_toaruossan_e.mp4",
    },
    desc: `원 모어 프리 라이프 온라인.^ 그것은, '또 하나의 인생'이라는 말이 있을 정도로 리얼한 경험이 가능한 VRMMO.^^ 아저씨 회사원인 타나카 다이치는 어스라는 이름으로 이 게임을 플레이하고 있었다.^^ 전투 같은 데에서 활약해 눈에 띄지 않도록,^ 일부러 쓸모없다고 여겨지는 스킬들을 중심적으로 취득하는 어스.^^ 맛있는 요리를 만들거나 자신 전용인 무기 제작,^ 혼자서 고난이도 던전에 도전하는 등 독자적인 플레이 스타일로 '또 하나의 인생'을 즐기고 있었다.^^ 하지만 그런 어스의 플레이 방식이 역으로 그를 주목받게 만들었는데?!^^ 시원찮은 아저씨, VRMMO 판타지에서 오늘도 자신의 길을 걷는다!`,
    thumSrc: require("images/content/thum/thum_15.jpg"),
    logoSrc: require("images/content/logo/logo_15.png"),
    epiTit: "제10화 어스, 파트너가 생기다",
    hashtag: ["#이세계", "#액션/배틀"],
    newEpi: "2023-12-05",
    live: "매주(화) 22:00",
  },
];
