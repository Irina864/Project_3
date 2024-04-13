'use strict';
class Job {
    constructor(name, SI, personalSPK, personalAtt, workers, tehkarta) {
        this.name = name;
        this.SI = SI;
        this.personalSPK = personalSPK;
        this.personalAtt = personalAtt;
        this.workers = workers;
        this.tehkarta = tehkarta;
    }
}
class SI {
    constructor(name, price, rent) {
        this.name = name;
        this.price = price;
        this.rent = rent;
    }
}

const systemAccess = 195;
document.getElementById('ipsprice').innerText = systemAccess;
const personalSearching = 360;
document.getElementById('calcPersonalServ').innerText =
    '~ ' + personalSearching;
const mediumSalary = 800;
const costOneJobTehCompetence = 30;
const costTehCompetence = 455;
const costOneJobSertification = 120;
const costSertification = 500;
const costAttestation = 555;
document.getElementById(
    'attPhrase'
).innerText = `Аттестация ЮЛ (${costAttestation},00 р/1 аттестат)`;
const costConsultationTehCompetence = 550;
const costConsultationSertification = 450;
const costConsultationAttestation = 550;
const saleConsultation = 100;
const tehkartaAntikorr = 400;
const tehkartaIsol = 100;
const tehkartaNarViK = 170;
const tehkartaOknaDveri = 160;
const tehkartaDorojki = 170;
const tehkartaMedium = 200;

const fundJob = new Job(
    'Устройство фундаментов',
    [
        'линейка',
        'рулетка',
        'плотномер динамический',
        'теодолит',
        'нивелир',
        'рейка нивелирная',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const monoJBJob = new Job(
    'Возведение монолитных бетонных и железнобетонных конструкций',
    [
        'линейка',
        'рулетка',
        'теодолит',
        'нивелир',
        'рейка нивелирная',
        'уровень',
        'рейка контрольная 2м',
        'штангенциркуль',
        'термометр -35С до +50С',
        'гигрометр психрометрический',
        'набор щупов',
        'отвес строительный',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const sborJBJob = new Job(
    'Монтаж сборных бетонных и железобетонных конструкций',
    [
        'линейка',
        'рулетка',
        'теодолит',
        'нивелир',
        'рейка нивелирная',
        'уровень',
        'рейка контрольная 2м',
        'штангенциркуль',
        'термометр -35С до +50С',
        'гигрометр психрометрический',
        'набор щупов',
        'отвес строительный',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const stalKonstrJob = new Job(
    'Монтаж стальных конструкций',
    [
        'линейка',
        'рулетка',
        'теодолит',
        'нивелир',
        'рейка нивелирная',
        'штангенциркуль',
        'набор щупов',
        'отвес строительный',
        'ключ динамометрический',
        'термометр -35С до +50С',
        'гигрометр психрометрический',
        'уровень',
        'рейка контрольная 2м',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const kamenJob = new Job(
    'Возведение каменных и армокаменных конструкций',
    [
        'линейка',
        'рулетка',
        'теодолит',
        'нивелир',
        'рейка нивелирная',
        'отвес строительный',
        'рейка контрольная 2м',
        'термометр -35С до +50С',
        'гигрометр психрометрический',
        'уровень',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const derevoJob = new Job(
    'Монтаж деревянных конструкций',
    [
        'линейка',
        'рулетка',
        'теодолит',
        'нивелир',
        'рейка нивелирная',
        'уровень',
        'рейка контрольная 2м',
        'штангенциркуль',
        'набор щупов',
        'отвес строительный',
        'термометр -35С до +50С',
        'гигрометр психрометрический',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const legkieJob = new Job(
    'Монтаж легких ограждающих конструкций',
    [
        'линейка',
        'рулетка',
        'уровень',
        'рейка контрольная 2м',
        'штангенциркуль',
        'термометр -35С до +50С',
        'гигрометр психрометрический',
        'набор щупов',
        'отвес строительный',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const krovliJob = new Job(
    'Устройство кровель',
    [
        'линейка',
        'рулетка',
        'уровень',
        'рейка контрольная 2м',
        'штангенциркуль',
        'термометр 0С до +200С',
        'термометр -35С до +50С',
        'влагомер',
        'гигрометр психрометрический',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const isolJob = new Job(
    'Устройство изоляционных покрытий',
    [
        'линейка',
        'рулетка',
        'уровень',
        'рейка контрольная 2м',
        'термометр 0С до +200С',
        'термометр -35С до +50С',
        'влагомер',
        'штангенциркуль',
        'гигрометр психрометрический',
        'адгезиметр-решетка',
        'клин для контроля зазоров',
        'лупа измерительная марки ЛИ-3-10х',
        'нивелир',
        'рейка нивелирная',
        'теодолит',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    'изолировщик (по гидроизоляции)',
    'Технологическая карта на гидроизоляцию'
);
const antikorrJob = new Job(
    'Устройство антикоррозионных покрытий',
    [
        'линейка',
        'гигрометр психрометрический',
        'адгезиметр-решетка',
        'лупа измерительная марки ЛИ-3-10х',
        'термометр -35С до +50С',
        'толщиномер (гребенка) Г3',
        'толщиномер ЛКП',
        'дефектоскоп',
        'рейка контрольная 2м',
        'термометр 0С до +200С',
        'штангенциркуль',
        'влагомер',
        'набор щупов',
        'микрометр',
        'вискозиметр',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    'изолировщик на антикоррозионной изоляции/маляр(штукатур)',
    'Технологическая карта на устройство антикоррозионных покрытий'
);
const teploIsoZdaniyalJob = new Job(
    'Устройство тепловой изоляции зданий и сооружений',
    [
        'линейка',
        'рулетка',
        'рейка контрольная 2м',
        'штангенциркуль',
        'влагомер',
        'термометр -35С до +50С',
        'уровень',
        'гигрометр психрометрический',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (устройство фасадных систем теплоизоляции и облицовка фасадов зданий)',
    ' ',
    ' '
);

const teploIsoTrubylJob = new Job(
    'Устройство тепловой изоляции оборудования и трубопроводов',
    [
        'линейка',
        'рулетка',
        'штангенциркуль',
        'термометр -35С до +50С',
        'гигрометр психрометрический',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (устройство фасадных систем теплоизоляции и облицовка фасадов зданий)',
    ' ',
    ' '
);

const polyJob = new Job(
    'Устройство полов',
    [
        'влагомер',
        'набор щупов',
        'плотномер динамический',
        'линейка',
        'рулетка',
        'нивелир',
        'рейка нивелирная',
        'рейка контрольная 2м',
        'штангенциркуль',
        'термометр 0С до +200С',
        'термометр -35С до +50С',
        'гигрометр психрометрический',
        'уровень',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const oknaDveriJob = new Job(
    'Заполнение оконных и  дверных проемов',
    [
        'штангенциркуль',
        'линейка',
        'рулетка',
        'рейка контрольная 2м',
        'гигрометр психрометрический',
        'термометр -35С до +50С',
        'уровень',
        'угольник поверочный',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    'Монтажник строительных конструкций',
    'Технологическая карта на заполнение оконных и дверных проемов'
);
const dorojkiJob = new Job(
    'Устройство дорожных одежд с покрытием из плит тротуарных',
    [
        'термометр -35С до +50С',
        'линейка',
        'рулетка',
        'рейка контрольная 3м',
        'теодолит',
        'штангенциркуль',
        'нивелир',
        'рейка нивелирная',
        'плотномер динамический',
        'уровень',
        'набор щупов',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    'Дорожный рабочий',
    'Технологическая карта на устройство дорожных одежд с покрытием из плит тротуарных'
);
const ozelenenieJob = new Job(
    'Благоустройство территорий. Озеленение',
    [
        'термометр -35С до +50С',
        'линейка',
        'рулетка',
        'рейка контрольная 3м',
        'нивелир',
        'рейка нивелирная',
        'уровень',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const asfaltJob = new Job(
    'Благоустройство территорий. Устройство асфальтобетонных покрытий',
    [
        'термометр -35С до +50С',
        'линейка',
        'рулетка',
        'рейка контрольная 3м',
        'теодолит',
        'штангенциркуль',
        'нивелир',
        'рейка нивелирная',
        'плотномер динамический',
        'уровень',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const ogradyJob = new Job(
    'Устройство дорожных одежд с покрытием из плит тротуарных',
    [
        'термометр -35С до +50С',
        'линейка',
        'рулетка',
        'рейка контрольная 3м',
        'штангенциркуль',
        'нивелир',
        'рейка нивелирная',
        'уровень',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const vnutrVodKanJob = new Job(
    'Монтаж внутренних инженерных систем: водоснабжение и канализация',
    [
        'линейка',
        'рулетка',
        'рейка контрольная 2м',
        'штангенциркуль',
        'манометр 2шт.',
        'термометр -35С до +50С',
        'отвес строительный',
        'уровень',
        'угольник поверочный',
        'секундомер',
    ],
    'главный инженер/прораб/мастер (устройство внутренних систем водопровода и канализации, внутренних сетей теплоснабжения)',
    'прораб/мастер (устройство внутренних систем водопровода и канализации, внутренних сетей теплоснабжения)',
    ' ',
    ' '
);
const vnutrBentJob = new Job(
    'Монтаж внутренних инженерных систем: вентиляция',
    [
        'уровень',
        'линейка',
        'рулетка',
        'рейка контрольная 2м',
        'штангенциркуль',
        'отвес строительный',
        'анемометр',
        'манометр 2шт.',
        'гигрометр психрометрический',
        'угольник поверочный',
        'термометр -35С до +50С',
        'секундомер',
    ],
    'главный инженер/прораб/мастер (монтаж систем вентиляции и кондиционирования воздуха)',
    'прораб/мастер (монтаж систем вентиляции и кондиционирования воздуха)',
    ' ',
    ' '
);
const vnutrElectJob = new Job(
    'Монтаж внутреннего электроснабжения',
    [
        'уровень',
        'линейка',
        'рулетка',
        'штангенциркуль',
        'термометр -35С до +50С',
    ],
    'главный инженер/прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    'прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    ' ',
    ' '
);
const avtomatJob = new Job(
    'Монтаж систем автоматизаци',
    [
        'уровень',
        'линейка',
        'рулетка',
        'штангенциркуль',
        'термометр -35С до +50С',
        'мультиметр',
        'гигрометр психрометрический',
    ],
    'главный инженер/прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)/(монтаж систем автоматизации)',
    'прораб/мастер (монтаж систем автоматизации)',
    ' ',
    ' '
);
const svyaziElectJob = new Job(
    'Устройство сетей связи и диспетчеризации',
    [
        'уровень',
        'линейка',
        'рулетка',
        'штангенциркуль',
        'термометр -35С до +50С',
        'мультиметр',
        'гигрометр психрометрический',
    ],
    'главный инженер/прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)/(устройство слаботочных сетей и систем)',
    'прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    ' ',
    ' '
);
const linKabElectJob = new Job(
    'Монтаж линейно-кабельные сооружения электросвязи',
    [
        'нивелир',
        'рейка нивелирная',
        'уровень',
        'линейка',
        'рулетка',
        'штангенциркуль',
    ],
    'главный инженер/прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    'прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    ' ',
    ' '
);
const passiveElectJob = new Job(
    'Монтаж пассивных оптических сетей',
    ['линейка', 'рулетка', 'мультиметр'],
    'главный инженер/прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)/(устройство слаботочных сетей и систем)',
    'прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    ' ',
    ' '
);
const narujElectKabJob = new Job(
    'Монтаж наружных сетей электроснабжения - кабельные линии электропередачи',
    [
        'нивелир',
        'рейка нивелирная',
        'уровень',
        'линейка',
        'рулетка',
        'штангенциркуль',
    ],
    'главный инженер/прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    'прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    ' ',
    ' '
);
const narujElectVozdJob = new Job(
    'Монтаж наружных сетей электроснабжения -  воздушные линии электропередач',
    [
        'теодолит',
        'нивелир',
        'рейка нивелирная',
        'уровень',
        'линейка',
        'рулетка',
        'штангенциркуль',
    ],
    'главный инженер/прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    'прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    ' ',
    ' '
);
const narujElectRaspredPodstanJob = new Job(
    'Монтаж наружных сетей электроснабжения -  распределительные устройства и подстанции',
    ['уровень', 'линейка', 'рулетка', 'штангенциркуль'],
    'главный инженер/прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    'прораб/мастер (устройство наружных сетей и линий электроснабжения, трансформаторных подстанций и распределительных устройств;  устройство внутренних систем электроснабжения)',
    ' ',
    ' '
);
const gasVnutrJob = new Job(
    'Монтаж внутреннего газоснабжения',
    [
        'линейка',
        'рулетка',
        'рейка контрольная 2м',
        'штангенциркуль',
        'манометр 2шт.',
        'термометр -35С до +50С',
        'отвес строительный',
        'уровень',
        'угольник поверочный',
        'секундомер',
    ],
    'главный инженер/прораб/мастер (газоснабжение)',
    'прораб/мастер (внутренних систем газоснабжения)',
    ' ',
    ' '
);
const gasNarujJob = new Job(
    'Монтаж наружного газоснабжения',
    [
        'нивелир',
        'рейка нивелирная',
        'линейка',
        'рулетка',
        'штангенциркуль',
        'манометр 2шт.',
        'термометр -35С до +50С',
        'отвес строительный',
        'уровень',
        'угольник поверочный',
        'секундомер',
        'плотномер динамический',
    ],
    'главный инженер/прораб/мастер (газоснабжение)',
    ' ',
    ' ',
    ' '
);
const narujVodKanJob = new Job(
    'Монтаж наружных инженерных сетей и сооружений: водоснабжение и канализация',
    [
        'отвес строительный',
        'линейка',
        'уровень',
        'рулетка',
        'штангенциркуль',
        'манометр 2шт.',
        'термометр -35С до +50С',
        'нивелир',
        'рейка нивелирная',
        'угольник поверочный',
        'секундомер',
        'плотномер динамический',
        'набор щупов',
    ],
    'главный инженер/прораб/мастер (устройство наружных сетей водоснабжения и канализации)',
    'прораб/мастер (устройство наружных сетей водоснабжения и канализации)',
    'монтажник наружных трубопроводов; сварщик с удостоверением',
    'Технологическая карта на монтаж наружных трубопроводов водоснабжение и канализации'
);
const narujTeploJob = new Job(
    'Монтаж наружных инженерных сетей и сооружений: монтаж тепловых сетей',
    [
        'отвес строительный',
        'линейка',
        'уровень',
        'рулетка',
        'штангенциркуль',
        'манометр 2шт.',
        'термометр -35С до +50С',
        'нивелир',
        'рейка нивелирная',
        'угольник поверочный',
        'секундомер',
        'плотномер динамический',
    ],
    'главный инженер/прораб/мастер (устройство наружных сетей теплоснабжения)',
    'прораб/мастер (устройство наружных сетей теплоснабжения)',
    ' ',
    ' '
);
const gidroMelioJob = new Job(
    'Устройство мелиоративных систем и сооружений',
    ['рулетка', 'нивелир', 'рейка нивелирная', 'плотномер динамический'],
    'главный инженер/прораб/мастер (гидротехническое и мелиоративное строительство)',
    'прораб/мастер (гидротехническое и мелиоративное строительство)',
    ' ',
    ' '
);
const dorogiAvtoAiroMostJob = new Job(
    'Автодороги  и аэродромы, населенные пункты',
    [
        'теодолит',
        'линейка',
        'уровень',
        'рулетка',
        'штангенциркуль',
        'термометр -35С до +50С',
        'нивелир',
        'рейка нивелирная',
        'плотномер динамический',
        'рейка контрольная 3м',
        'гигрометр психрометрический',
        'клин для контроля зазоров',
    ],
    'главный инженер/прораб/мастер (строительство автомобильных дорог и аэродромов,строительство мостов, транспортных эстакад и путепроводов)',
    'прораб/мастер (строительство автомобильных дорог и аэродромов,строительство мостов, транспортных эстакад и путепроводов)',
    ' ',
    ' '
);
const dorogiElemJob = new Job(
    'Установка элементов обустройства дороги',
    [
        'теодолит',
        'линейка',
        'уровень',
        'рулетка',
        'штангенциркуль',
        'нивелир',
        'рейка нивелирная',
        'гигрометр психрометрический',
    ],
    'главный инженер/прораб/мастер (строительство автомобильных дорог и аэродромов,строительство мостов, транспортных эстакад и путепроводов)',
    'прораб/мастер (строительство автомобильных дорог и аэродромов,строительство мостов, транспортных эстакад и путепроводов)',
    ' ',
    ' '
);
const razmetkaJob = new Job(
    'Нанесение дорожной разметки',
    [
        'линейка',
        'рулетка',
        'термометр -35С до +50С',
        'гигрометр психрометрический',
    ],
    'главный инженер/прораб/мастер (строительство автомобильных дорог и аэродромов,строительство мостов, транспортных эстакад и путепроводов)',
    'прораб/мастер (строительство автомобильных дорог и аэродромов,строительство мостов, транспортных эстакад и путепроводов)',
    ' ',
    ' '
);
const geodesiaJob = new Job(
    'Геодезические работы',
    ['рулетка', 'нивелир', 'рейка нивелирная', 'теодолит'],
    'геодезист/ведущий геодезист',
    'геодезист/ведущий геодезист',
    ' ',
    ' '
);
const technolTrubyJob = new Job(
    'Монтаж технологического оборудования и трубопроводов',
    [
        'теодолит',
        'линейка',
        'уровень',
        'рулетка',
        'штангенциркуль',
        'термометр -35С до +50С',
        'нивелир',
        'рейка нивелирная',
        'рейка контрольная 2м',
        'гигрометр психрометрический',
    ],
    'главный инженер/прораб/мастер (монтаж технологических трубопроводов)',
    'прораб/мастер (монтаж технологических трубопроводов)',
    ' ',
    ' '
);
const svarkaJob = new Job(
    'Сварочные работы',
    [
        'УШС',
        'линейка',
        'рулетка',
        'штангенциркуль',
        'термометр -35С до +50С',
        'гигрометр психрометрический',
    ],
    ' ',
    ' ',
    'сварщик с удостоверением',
    ' '
);
const holodJob = new Job(
    'Монтаж систем холодоснабжения',
    [
        'рулетка',
        'штангенциркуль',
        'набор щупов',
        'манометр 2шт.',
        'термометр 0С до +200С',
        'нивелир',
        'рейка нивелирная',
        'угольник поверочный',
        'секундомер',
        'плотномер динамический',
        'теодолит',
    ],
    'главный инженер/прораб/мастер (монтаж систем холодоснабжения)',
    'прораб/мастер (монтаж систем холодоснабжения)',
    ' ',
    ' '
);
const jdJob = new Job(
    'Устройство железных дорог колеи 1520 мм',
    [
        'теодолит',
        'линейка',
        'уровень',
        'рулетка',
        'штангенциркуль',
        'нивелир',
        'рейка нивелирная',
        'путевой шаблон',
        'рейка контрольная 2м',
    ],
    'главный инженер/прораб/мастер (строительство железных дорог и мостовых сооружений на железных дорогах)',
    'прораб/мастер (строительство железных дорог и мостовых сооружений на железных дорогах)',
    ' ',
    ' '
);
const otdelkaJob = new Job(
    'Декоративные/Штукатурные/Облицовочные/Малярные/Обойные работы',
    [
        'линейка',
        'уровень',
        'рейка контрольная 2м',
        'термометр -35С до +50С',
        'набор щупов',
        'отвес строительный',
        'влагомер',
        'гигрометр психрометрический',
    ],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const stekloJob = new Job(
    'Стекольные работы',
    ['линейка', 'уровень', 'рейка контрольная 2м', 'термометр -35С до +50С'],
    'главный инженер/прораб/мастер (общестроительные работы)',
    'прораб/мастер (общестроительные работы)*',
    ' ',
    ' '
);
const proizBlokiOknaDveriJob = new Job(
    'Блоки оконные и дверные',
    [
        'рулетка',
        'линейка',
        'штангенциркуль',
        'рейка контрольная 2м',
        'термометр -35С до +50С',
        'набор щупов',
        'гигрометр психрометрический',
        'призмы опорные',
    ],
    'Инженер-конструктор (образование приближенное к профилю деятельности)',
    ' ',
    ' ',
    ' '
);
const proizKonstrStalJob = new Job(
    'Конструкции стальные строительные, лестничные марши, площадки и ограждения стальные, изделия арматурные сварные для железобетонных конструкций',
    [' '],
    ' ',
    ' ',
    'сварщик с удостоверением',
    ' '
);

const allJobs = [
    fundJob,
    monoJBJob,
    sborJBJob,
    stalKonstrJob,
    kamenJob,
    derevoJob,
    legkieJob,
    krovliJob,
    isolJob,
    antikorrJob,
    teploIsoZdaniyalJob,
    teploIsoTrubylJob,
    polyJob,
    oknaDveriJob,
    dorojkiJob,
    ozelenenieJob,
    asfaltJob,
    ogradyJob,
    vnutrVodKanJob,
    vnutrBentJob,
    vnutrElectJob,
    avtomatJob,
    svyaziElectJob,
    linKabElectJob,
    passiveElectJob,
    narujElectKabJob,
    narujElectVozdJob,
    narujElectRaspredPodstanJob,
    gasVnutrJob,
    gasNarujJob,
    narujVodKanJob,
    narujTeploJob,
    gidroMelioJob,
    dorogiAvtoAiroMostJob,
    dorogiElemJob,
    razmetkaJob,
    geodesiaJob,
    technolTrubyJob,
    svarkaJob,
    holodJob,
    jdJob,
    otdelkaJob,
    stekloJob,
    proizBlokiOknaDveriJob,
    proizKonstrStalJob,
];

const lineika = new SI('линейка', 28, 0);
const ruletka = new SI('рулетка', 18, 0);
const plotnomer = new SI('плотномер динамический', 218, 60);
const teodolit = new SI('теодолит', 1400, 95);
const nivelir = new SI('нивелир', 400, 75);
const reikaNivelir = new SI('рейка нивелирная', 140, 65);
const uroven = new SI('уровень', 120, 65);
const reikaTwo = new SI('рейка контрольная 2м', 92, 0);
const shtangen = new SI('штангенциркуль', 58, 0);
const termMin = new SI('термометр -35С до +50С', 35, 0);
const gigrometr = new SI('гигрометр психрометрический', 120, 0);
const shyp = new SI('набор щупов', 47, 0);
const otves = new SI('отвес строительный', 0, 0);
const kluch = new SI('ключ динамометрический', 110, 0);
const termMax = new SI('термометр 0С до +200С', 35, 0);
const vlagomer = new SI('влагомер', 850, 85);
const adgezimetr = new SI('адгезиметр-решетка', 125, 0);
const klin = new SI('клин для контроля зазоров', 150, 0);
const lupa = new SI('лупа измерительная марки ЛИ-3-10х', 116, 0);
const tolschinomerG = new SI('толщиномер (гребенка) Г3', 125, 75);
const tolschinomerLKP = new SI('толщиномер ЛКП', 0, 0);
const defektoskop = new SI('дефектоскоп', 6000, 105);
const micrometr = new SI('микрометр', 0, 0);
const viskozimetr = new SI('вискозиметр', 0, 0);
const ugolnik = new SI('угольник поверочный', 110, 0);
const reikaThree = new SI('рейка контрольная 3м', 120, 0);
const manometr = new SI('манометр 2шт.', 50, 0);
const secundomer = new SI('секундомер', 160, 0);
const anemometr = new SI('анемометр', 850, 80);
const multimetr = new SI('мультиметр', 225, 0);
const ushs = new SI('УШС', 116, 0);
const puyevoi = new SI('призмы опорные', 170, 0);
const pusto = new SI(' ', 0, 0);

const allJobsInstruments = [
    lineika,
    ruletka,
    plotnomer,
    teodolit,
    nivelir,
    reikaNivelir,
    uroven,
    reikaTwo,
    shtangen,
    termMin,
    gigrometr,
    shyp,
    otves,
    kluch,
    termMax,
    vlagomer,
    adgezimetr,
    klin,
    lupa,
    tolschinomerG,
    tolschinomerLKP,
    defektoskop,
    micrometr,
    viskozimetr,
    ugolnik,
    reikaThree,
    manometr,
    secundomer,
    anemometr,
    multimetr,
    ushs,
    puyevoi,
    pusto,
];

const form = document.forms.jobsForm;
const zemlRaboty = form.elements.zemlRaboty;
const fund = form.elements.fund;
const fundEstest = form.elements.fundEstest;
const fundIskust = form.elements.fundIskust;
const fundSvai = form.elements.fundSvai;
const fundSpec = form.elements.fundSpec;
const monoJB = form.elements.monoJB;
const sborJB = form.elements.sborJB;
const stalKonstr = form.elements.stalKonstr;
const kamen = form.elements.kamen;
const derevo = form.elements.derevo;
const legkieOgraj = form.elements.legkieOgraj;
const krovli = form.elements.krovli;
const isol = form.elements.isol;
const antikorr = form.elements.antikorr;
const teploisolZdaniya = form.elements.teploisolZdaniya;
const teploisolTrub = form.elements.teploisolTrub;
const poly = form.elements.poly;
const okna = form.elements.okna;
const dveri = form.elements.dveri;
const dorojki = form.elements.dorojki;
const asfalt = form.elements.asfalt;
const ozelenenie = form.elements.ozelenenie;
const ogrady = form.elements.ogrady;
const vnutrVodosn = form.elements.vnutrVodosn;
const vnutrKan = form.elements.vnutrKan;
const vnutrVent = form.elements.vnutrVent;
const vnutrOtopl = form.elements.vnutrOtopl;
const vnutrTeplPunkt = form.elements.vnutrTeplPunkt;
const priboryUcheta = form.elements.priboryUcheta;
const vnutrGas = form.elements.vnutrGas;
const vnutrElect = form.elements.vnutrElect;
const vnutrAvtomat = form.elements.vnutrAvtomat;
const vnutrSvyazi = form.elements.vnutrSvyazi;
const ingLKSoor = form.elements.ingLKSoor;
const passivOpt = form.elements.passivOpt;
const narujKLElec = form.elements.narujKLElec;
const narujVLElec = form.elements.narujVLElec;
const paspredUstr = form.elements.paspredUstr;
const narujBodKan = form.elements.narujBodKan;
const narujTeplo = form.elements.narujTeplo;
const narujGas = form.elements.narujGas;
const melioratsia = form.elements.melioratsia;
const elemDorogi = form.elements.elemDorogi;
const dorojRazmetka = form.elements.dorojRazmetka;
const geodezia = form.elements.geodezia;
const techTruby = form.elements.techTruby;
const holodsnab = form.elements.holodsnab;
const svarka = form.elements.svarka;
const jd = form.elements.jd;
const stukatur = form.elements.stukatur;
const oblicovka = form.elements.oblicovka;
const otdelka = form.elements.otdelka;
const malyar = form.elements.malyar;
const oboi = form.elements.oboi;
const steklo = form.elements.steklo;
const avtodorogiAir = form.elements.avtodorogiAir;
const most = form.elements.most;
const proizBlokiOknaDveri = form.elements.proizBlokiOknaDveri;
const proizKonstrStal = form.elements.proizKonstrStal;

const inputs = [
    zemlRaboty,
    fund,
    fundEstest,
    fundIskust,
    fundSvai,
    fundSpec,
    monoJB,
    sborJB,
    stalKonstr,
    kamen,
    derevo,
    legkieOgraj,
    krovli,
    isol,
    antikorr,
    teploisolZdaniya,
    teploisolTrub,
    poly,
    okna,
    dveri,
    dorojki,
    asfalt,
    ozelenenie,
    ogrady,
    vnutrVodosn,
    vnutrKan,
    vnutrVent,
    vnutrOtopl,
    vnutrTeplPunkt,
    priboryUcheta,
    vnutrGas,
    vnutrElect,
    vnutrAvtomat,
    vnutrSvyazi,
    ingLKSoor,
    passivOpt,
    narujKLElec,
    narujVLElec,
    paspredUstr,
    narujBodKan,
    narujTeplo,
    narujGas,
    melioratsia,
    elemDorogi,
    dorojRazmetka,
    geodezia,
    techTruby,
    holodsnab,
    svarka,
    jd,
    stukatur,
    oblicovka,
    otdelka,
    malyar,
    oboi,
    steklo,
    avtodorogiAir,
    most,
    proizBlokiOknaDveri,
    proizKonstrStal,
];

form.addEventListener('submit', getInformation);

function getInformation(e) {
    e.preventDefault();
    document.querySelector('.personal__itr-att').textContent = '';
    document.querySelector('.personal__itr-spk-sert').textContent = '';
    document.querySelector('.personal__workers').textContent = '';
    document.querySelector('.measurments').textContent = '';
    document.querySelector('.tehkartaby-main').textContent = '';
    document.querySelector('.jobs__selected').textContent = '';
    const checkedInputs = [];
    inputs.forEach((item) => {
        if (item.checked === true) {
            checkedInputs.push(item);
            createNewElement(item.value, 'li', '.jobs__selected');
        }
    });
    const checkedJobs = [];
    if (
        zemlRaboty.checked ||
        fund.checked ||
        fundEstest.checked ||
        fundIskust.checked ||
        fundSvai.checked ||
        fundSpec.checked
    ) {
        checkedJobs.push(fundJob);
    }
    if (monoJB.checked) {
        checkedJobs.push(monoJBJob);
    }
    if (sborJB.checked) {
        checkedJobs.push(sborJBJob);
    }
    if (stalKonstr.checked) {
        checkedJobs.push(stalKonstrJob);
    }
    if (kamen.checked) {
        checkedJobs.push(kamenJob);
    }
    if (derevo.checked) {
        checkedJobs.push(derevoJob);
    }
    if (legkieOgraj.checked) {
        checkedJobs.push(legkieJob);
    }
    if (krovli.checked) {
        checkedJobs.push(krovliJob);
    }
    if (isol.checked) {
        checkedJobs.push(isolJob);
    }
    if (antikorr.checked) {
        checkedJobs.push(antikorrJob);
    }
    if (teploisolZdaniya.checked) {
        checkedJobs.push(teploIsoZdaniyalJob);
    }
    if (teploisolTrub.checked) {
        checkedJobs.push(teploIsoTrubylJob);
    }
    if (poly.checked) {
        checkedJobs.push(polyJob);
    }
    if (okna.checked || dveri.checked) {
        checkedJobs.push(oknaDveriJob);
    }
    if (
        stukatur.checked ||
        oblicovka.checked ||
        otdelka.checked ||
        malyar.checked ||
        oboi.checked
    ) {
        checkedJobs.push(otdelkaJob);
    }
    if (steklo.checked) {
        checkedJobs.push(stekloJob);
    }
    if (dorojki.checked) {
        checkedJobs.push(dorojkiJob);
    }
    if (asfalt.checked) {
        checkedJobs.push(asfaltJob);
    }
    if (ozelenenie.checked) {
        checkedJobs.push(ozelenenieJob);
    }
    if (ogrady.checked) {
        checkedJobs.push(ogradyJob);
    }
    if (
        vnutrVodosn.checked ||
        vnutrKan.checked ||
        vnutrOtopl.checked ||
        vnutrTeplPunkt.checked ||
        priboryUcheta.checked
    ) {
        checkedJobs.push(vnutrVodKanJob);
    }
    if (vnutrVent.checked) {
        checkedJobs.push(vnutrBentJob);
    }
    if (vnutrGas.checked) {
        checkedJobs.push(gasVnutrJob);
    }
    if (vnutrElect.checked) {
        checkedJobs.push(vnutrElectJob);
    }
    if (vnutrAvtomat.checked) {
        checkedJobs.push(avtomatJob);
    }
    if (vnutrSvyazi.checked) {
        checkedJobs.push(svyaziElectJob);
    }
    if (ingLKSoor.checked) {
        checkedJobs.push(linKabElectJob);
    }
    if (passivOpt.checked) {
        checkedJobs.push(passiveElectJob);
    }
    if (narujKLElec.checked) {
        checkedJobs.push(narujElectKabJob);
    }
    if (narujVLElec.checked) {
        checkedJobs.push(narujElectVozdJob);
    }
    if (paspredUstr.checked) {
        checkedJobs.push(narujElectRaspredPodstanJob);
    }
    if (narujBodKan.checked) {
        checkedJobs.push(narujVodKanJob);
    }
    if (narujTeplo.checked) {
        checkedJobs.push(narujTeploJob);
    }
    if (narujGas.checked) {
        checkedJobs.push(gasNarujJob);
    }
    if (melioratsia.checked) {
        checkedJobs.push(gidroMelioJob);
    }
    if (avtodorogiAir.checked || most.checked) {
        checkedJobs.push(dorogiAvtoAiroMostJob);
    }
    if (elemDorogi.checked) {
        checkedJobs.push(dorogiElemJob);
    }
    if (dorojRazmetka.checked) {
        checkedJobs.push(razmetkaJob);
    }
    if (geodezia.checked) {
        checkedJobs.push(geodesiaJob);
    }
    if (techTruby.checked) {
        checkedJobs.push(technolTrubyJob);
    }
    if (holodsnab.checked) {
        checkedJobs.push(holodJob);
    }
    if (svarka.checked) {
        checkedJobs.push(svarkaJob);
    }
    if (jd.checked) {
        checkedJobs.push(jdJob);
    }
    if (proizBlokiOknaDveri.checked) {
        checkedJobs.push(proizBlokiOknaDveriJob);
    }
    if (proizKonstrStal.checked) {
        checkedJobs.push(proizKonstrStalJob);
    }
    const attestationSpecialists = [];
    checkedJobs.forEach((job) => {
        attestationSpecialists.push(job.personalAtt);
    });
    const resultAttestationSpecialists = [...new Set(attestationSpecialists)];
    resultAttestationSpecialists.forEach((specialist) => {
        createNewElement(specialist, 'div', '.personal__itr-att');
    });
    const competenceSpecialists = [];
    checkedJobs.forEach((job) => {
        competenceSpecialists.push(job.personalSPK);
    });
    const resultCompetenceSpecialists = [...new Set(competenceSpecialists)];
    resultCompetenceSpecialists.forEach((specialist) => {
        createNewElement(specialist, 'div', '.personal__itr-spk-sert');
    });
    const workers = [];
    checkedJobs.forEach((job) => {
        workers.push(job.workers);
    });
    const resultWorkers = [...new Set(workers)];
    resultWorkers.forEach((specialist) => {
        createNewElement(specialist, 'div', '.personal__workers');
    });
    const tehkarts = [];
    checkedJobs.forEach((job) => {
        tehkarts.push(job.tehkarta);
    });
    const resultTehkarts = [...new Set(tehkarts)];
    resultTehkarts.forEach((tehkarta) => {
        createNewElement(tehkarta, 'div', '.tehkartaby-main');
    });
    const measuringInstruments = [];
    checkedJobs.forEach((job) => {
        measuringInstruments.push(job.SI);
    });
    const mainMeasuringInstruments = measuringInstruments.flat(1);
    const resultMeasuringInstruments = [...new Set(mainMeasuringInstruments)];
    resultMeasuringInstruments.forEach((instrument) => {
        createNewElement(instrument, 'li', '.measurments');
    });
    calculateCosts(
        checkedJobs,
        resultMeasuringInstruments,
        resultCompetenceSpecialists,
        resultAttestationSpecialists
    );
}

function calculateCosts(jobs, instruments, personalMin, personalMax) {
    let priceConsultationCompetence = costConsultationTehCompetence;
    let priceConsultationSertification = 0;
    let priceConsultationAttestation = 0;
    jobs.forEach((elem) => {
        if (
            elem === fundJob ||
            elem === sborJBJob ||
            elem === stalKonstrJob ||
            elem === derevoJob ||
            elem === kamenJob ||
            elem === krovliJob ||
            elem === teploIsoZdaniyalJob ||
            elem === narujVodKanJob ||
            elem === vnutrVodKanJob ||
            elem === narujTeploJob ||
            elem === narujElectVozdJob ||
            elem === narujElectKabJob ||
            elem === narujElectRaspredPodstanJob ||
            elem === gasVnutrJob ||
            elem === vnutrBentJob ||
            elem === gidroMelioJob ||
            elem === dorogiAvtoAiroMostJob ||
            elem === dorogiElemJob ||
            elem === jdJob ||
            elem === holodJob ||
            elem === avtomatJob ||
            elem === dorogiElemJob ||
            elem === technolTrubyJob
        ) {
            priceConsultationAttestation = costConsultationAttestation;
        }
        if (
            elem === isolJob ||
            elem === antikorrJob ||
            elem === dorojkiJob ||
            elem === oknaDveriJob ||
            elem === narujVodKanJob
        ) {
            priceConsultationSertification = costConsultationSertification;
        }
    });
    let costConsultations =
        priceConsultationCompetence +
        priceConsultationSertification +
        priceConsultationAttestation;
    if (
        priceConsultationAttestation > 0 ||
        priceConsultationSertification > 0
    ) {
        costConsultations = costConsultations - saleConsultation;
    }
    document.getElementById('consultationCost').innerText = costConsultations;
    const allCostTehCompetence =
        costTehCompetence + costOneJobTehCompetence * jobs.length;
    document.getElementById('spkCalc').innerText = allCostTehCompetence;
    let allCostSertification = 0;
    const checkedSertificationJobs = [];
    jobs.forEach((elem) => {
        if (
            elem === isolJob ||
            elem === antikorrJob ||
            elem === dorojkiJob ||
            elem === oknaDveriJob ||
            elem === narujVodKanJob
        ) {
            checkedSertificationJobs.push(elem);
        }
    });
    if (checkedSertificationJobs.length > 0) {
        allCostSertification =
            costSertification + costOneJobSertification * (jobs.length - 1);
    }
    document.getElementById('sertCalc').innerText = allCostSertification;
    let allCostAttestation = 0;
    jobs.forEach((elem) => {
        if (
            elem === fundJob ||
            elem === sborJBJob ||
            elem === stalKonstrJob ||
            elem === derevoJob ||
            elem === kamenJob ||
            elem === krovliJob ||
            elem === teploIsoZdaniyalJob ||
            elem === narujVodKanJob ||
            elem === vnutrVodKanJob ||
            elem === narujTeploJob ||
            elem === narujElectVozdJob ||
            elem === narujElectKabJob ||
            elem === narujElectRaspredPodstanJob ||
            elem === gasVnutrJob ||
            elem === vnutrBentJob ||
            elem === gidroMelioJob ||
            elem === dorogiAvtoAiroMostJob ||
            elem === dorogiElemJob ||
            elem === jdJob ||
            elem === holodJob ||
            elem === avtomatJob ||
            elem === dorogiElemJob ||
            elem === technolTrubyJob
        ) {
            allCostAttestation = costAttestation * 2;
        }
    });
    document.getElementById('attCalc').innerText =
        allCostAttestation + '  (генподряд, строительство)';
    let allTehKartsCost = tehkartaMedium;
    jobs.forEach((elem) => {
        allTehKartsCost = 0;
        if (elem === isolJob) {
            allTehKartsCost = allTehKartsCost + tehkartaIsol;
        }
        if (elem === antikorrJob) {
            allTehKartsCost = allTehKartsCost + tehkartaAntikorr;
        }
        if (elem === dorojkiJob) {
            allTehKartsCost = allTehKartsCost + tehkartaDorojki;
        }
        if (elem === oknaDveriJob) {
            allTehKartsCost = allTehKartsCost + tehkartaOknaDveri;
        }
        if (elem === narujVodKanJob) {
            allTehKartsCost = allTehKartsCost + tehkartaNarViK;
        }
    });
    document.getElementById('tehkartaCalc').innerText = allTehKartsCost;
    const checkedIstruments = [];
    instruments.forEach((elem) => {
        allJobsInstruments.forEach((device) => {
            if (elem === device.name) {
                checkedIstruments.push(device);
            }
        });
    });
    const allRentalInstruments = [];
    checkedIstruments.forEach((el) => {
        if (el.rent != 0) {
            allRentalInstruments.push(el);
        }
    });
    allRentalInstruments.sort(function (a, b) {
        return b.price - a.price;
    });
    const rentalInstruments = [
        allRentalInstruments[0],
        allRentalInstruments[1],
        allRentalInstruments[2],
        allRentalInstruments[3],
    ];
    rentalInstruments.forEach((el) => {
        if (el === undefined) {
            rentalInstruments.splice(
                rentalInstruments.indexOf(el),
                1,
                new SI('', 0, 0)
            );
        }
    });
    const buingIstruments = [];
    checkedIstruments.forEach((el) => {
        if (
            el.name != rentalInstruments[0].name &&
            el.name != rentalInstruments[1].name &&
            el.name != rentalInstruments[2].name &&
            el.name != rentalInstruments[3].name
        ) {
            buingIstruments.push(el);
        }
    });
    let costBuingImstruments = 0;
    buingIstruments.forEach((el) => {
        costBuingImstruments = costBuingImstruments + el.price;
    });
    let costRentalInstruments = 0;
    const rentalInstrumentNames = [];
    rentalInstruments.forEach((el) => {
        costRentalInstruments = costRentalInstruments + el.price;
        rentalInstrumentNames.push(el.name);
    });
    const allCostInstruments = costBuingImstruments + costRentalInstruments;
    document.getElementById(
        'instruments'
    ).innerHTML = `<div>${allCostInstruments}</div>
    <div>(В аренду: ${rentalInstrumentNames})</div>`;
    const personalSalaryMax =
        (personalMax.length + 1) * (personalSearching + mediumSalary);
    const personalSalaryMin =
        personalMin.length * (personalSearching + mediumSalary);
    document.getElementById(
        'calcPersonal'
    ).innerHTML = `От ${personalSalaryMin} до ${personalSalaryMax}`;
    const total =
        costConsultations +
        allCostTehCompetence +
        allCostSertification +
        allCostAttestation +
        allTehKartsCost +
        allCostInstruments +
        systemAccess;
    document.getElementById('total').innerText = total;
    const totalCompetence =
        priceConsultationCompetence +
        allCostTehCompetence +
        allTehKartsCost +
        allCostInstruments +
        systemAccess;
    document.getElementById('totalCompetence').innerText = totalCompetence;
    const totalSertification =
        priceConsultationSertification +
        allCostSertification +
        allTehKartsCost +
        allCostInstruments +
        systemAccess;
    document.getElementById('totalSertification').innerText =
        totalSertification;
    const totalAttestation = priceConsultationAttestation + allCostAttestation;
    document.getElementById('totalAttestation').innerText = totalAttestation;
    document.getElementById('totalPers').innerHTML = `От ${
        personalSalaryMin + total
    } до ${personalSalaryMax + total}`;
    document.getElementById('calcPersonalSpk').innerHTML = `От ${
        personalSalaryMin + totalCompetence
    } до ${personalSalaryMax + totalCompetence}`;
    document.getElementById('calcPersonalSert').innerHTML = `От ${
        personalSalaryMin + totalSertification
    } до ${personalSalaryMax + totalSertification}`;
    document.getElementById('calcPersonalAtt').innerHTML = `От ${
        personalSalaryMin + totalAttestation
    } до ${personalSalaryMax + totalAttestation}`;
    if (priceConsultationSertification === 0) {
        document.getElementById('totalSertification').innerText = 0;
        document.getElementById('calcPersonalSert').innerText = 0;
        totalSertification = 0;
    }
    if (priceConsultationAttestation === 0) {
        document.getElementById('totalAttestation').innerText = 0;
        document.getElementById('calcPersonalAtt').innerText = 0;
        totalAttestation = 0;
    }
}

function createNewElement(content, tagElem, classElem) {
    const item = document.createElement(tagElem);
    item.classList.add('result');
    item.textContent = content;
    document.querySelector(classElem).append(item);
}
