//стоимость услуг консультации
let uslSPK = priceUslSPK;
let uslSert = 0;
let uslAtt = 0;
checkedJobs.forEach((elem) => {
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
        uslAtt = priceUslAtt;
    }
    if (
        elem === isolJob ||
        elem === antikorrJob ||
        elem === dorojkiJob ||
        elem === oknaDveriJob ||
        elem === narujVodKanJob
    ) {
        uslSert = priceUslSert;
    }
});
let calcUsl = uslSPK + uslSert + uslAtt;
if (uslAtt > 0 || uslSert > 0) {
    calcUsl = calcUsl - skidkaUsl;
}

document.getElementById('uslCalc').innerText = calcUsl;
// стоимость СПК
let calcSPK = priceJobSPK + priceJobOneSPK * checkedJobs.length;
// console.log(calcSPK)
document.getElementById('spkCalc').innerText = calcSPK;
// стоимость сертификация
let checkedSertJobs = [];
checkedJobs.forEach((elem) => {
    if (
        elem === isolJob ||
        elem === antikorrJob ||
        elem === dorojkiJob ||
        elem === oknaDveriJob ||
        elem === narujVodKanJob
    ) {
        checkedSertJobs.push(elem);
    }
});
// console.log(checkedSertJobs.length);
let calcSERT;
if (checkedSertJobs.length > 0) {
    calcSERT = priceJobSert + priceJobOneSert * (checkedSertJobs.length - 1);
} else {
    calcSERT = 0;
}

// console.log(calcSERT)
document.getElementById('sertCalc').innerText = calcSERT;
// стоимость аттестация
let attCalc = 0;
checkedJobs.forEach((elem) => {
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
        attCalc = priceJobAtt * 2;
    }
});
document.getElementById('attCalc').innerText =
    attCalc + '  (генподряд, строительство)';
// стоимость техкарт
let calcTK = 0;
checkedJobs.forEach((elem) => {
    if (elem === isolJob) {
        calcTK = calcTK + tehkartaIsol;
    }
    if (elem === antikorrJob) {
        calcTK = calcTK + tehkartaAntikorr;
    }
    if (elem === dorojkiJob) {
        calcTK = calcTK + tehkartaDorojki;
    }
    if (elem === oknaDveriJob) {
        calcTK = calcTK + tehkartaOknaDveri;
    }
    if (elem === narujVodKanJob) {
        calcTK = calcTK + tehkartaNarViK;
    }
});
if (calcTK === 0) {
    calcTK = tehkartaMedium;
}
// console.log(calcTK)
document.getElementById('tehkartaCalc').innerText = calcTK;
// стоимость средств измерений
let sumSI = [];
resultMeasurments.forEach((elem) => {
    allJobsSI.forEach((device) => {
        if (elem === device.name) {
            sumSI.push(device);
        }
    });
});
console.log(sumSI);
let arendaSIAll = [];
sumSI.forEach((el) => {
    if (el.arenda != 0) {
        arendaSIAll.push(el);
    }
});
arendaSIAll.sort(function (a, b) {
    return b.price - a.price;
});
console.log(arendaSIAll);
let arendaSredstv = [
    arendaSIAll[0],
    arendaSIAll[1],
    arendaSIAll[2],
    arendaSIAll[3],
];
arendaSredstv.forEach((el) => {
    if (el === undefined) {
        arendaSredstv.splice(arendaSredstv.indexOf(el), 1, new SI('', 0, 0));
    }
});
console.log(arendaSredstv);
let pokupkaSI = [];
sumSI.forEach((el) => {
    if (
        el.name != arendaSredstv[0].name &&
        el.name != arendaSredstv[1].name &&
        el.name != arendaSredstv[2].name &&
        el.name != arendaSredstv[3].name
    ) {
        pokupkaSI.push(el);
    }
});
console.log(pokupkaSI);
//общие суммы
let calcPokupkaSI = 0;
pokupkaSI.forEach((el) => (calcPokupkaSI = calcPokupkaSI + el.price));
let calcArendaSI = 0;
let nameSI = [];
arendaSredstv.forEach((el) => {
    calcArendaSI = calcArendaSI + el.arenda;
    nameSI.push(el.name);
});
let calcPokupkaArendaSI = calcArendaSI + calcPokupkaSI;
document.getElementById(
    'sredstva'
).innerHTML = `<div>${calcPokupkaArendaSI}</div>
    <div>(В аренду: ${nameSI})</div>`;

//персонал
let ZPmax = (resultSpecATT.length + 1) * (poiskPersonal + sredZP);
let ZPmin = resultSpecSPK.length * (poiskPersonal + sredZP);
document.getElementById('calcPersonal').innerHTML = `От ${ZPmin} до ${ZPmax}`;

//итого
let itogo =
    calcUsl + calcTK + attCalc + calcSERT + calcSPK + calcPokupkaArendaSI + IPS;
document.getElementById('itogo').innerText = itogo;
let itogoSPK = uslSPK + calcTK + calcSPK + calcPokupkaArendaSI + IPS;
document.getElementById('itogoSPK').innerText = itogoSPK;
let itogoSert = uslSert + calcTK + calcSERT + calcPokupkaArendaSI + IPS;
document.getElementById('itogoSert').innerText = itogoSert;
let itogoAtt = uslAtt + attCalc;
document.getElementById('itogoAtt').innerText = itogoAtt;
console.log(uslAtt, uslSert);
if (uslSert === 0) {
    document.getElementById('itogoSert').innerText = 0;
    itogoSert = 0;
}
if (uslAtt === 0) {
    document.getElementById('itogoAtt').innerText = 0;
    itogoAtt = 0;
}
document.getElementById('itogoPers').innerHTML = `От ${ZPmin + itogo} до ${
    ZPmax + itogo
}`;
document.getElementById('calcPersonalSPk').innerHTML = `От ${
    ZPmin + itogoSPK
} до ${ZPmax + itogoSPK}`;
document.getElementById('calcPersonalSert').innerHTML = `От ${
    ZPmin + itogoSert
} до ${ZPmax + itogoSert}`;
document.getElementById('calcPersonalAtt').innerHTML = `От ${
    ZPmin + itogoAtt
} до ${ZPmax + itogoAtt}`;
if (uslSert === 0) {
    document.getElementById('itogoSert').innerText = 0;
    document.getElementById('calcPersonalSert').innerText = 0;
    itogoSert = 0;
}
if (uslAtt === 0) {
    document.getElementById('itogoAtt').innerText = 0;
    document.getElementById('calcPersonalAtt').innerText = 0;
    itogoAtt = 0;
}
