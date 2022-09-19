import { creatNumForDate } from "../../helps/helpsFun";

export const creatDataForGrafic = (valuts,sortData,data) => { //Функция для подсчета доходов и убытков по разным валютам


    const dataGrafic = {}
    valuts.forEach((valut) => (dataGrafic[valut + '-i'] = 0, dataGrafic[valut + '-c'] = 0))
    let newList = sortForDateAndCateqory(sortData,data);

    newList.forEach(elem => {
        if (elem.sum > 0) dataGrafic[elem.valut + '-i'] += elem.sum
        else dataGrafic[elem.valut + '-c'] += elem.sum
    })

    return creatAlldataValut(dataGrafic,valuts)
}

export const sortForDateAndCateqory = (sortData,data) => { //сортирует схему по дате и категориям
    let newList = data;
    const ot = sortData.date.ot ? sortData.date.ot : 0;
    const from = sortData.date.from ? sortData.date.from : Infinity;

    if (sortData.cateqory !== '0') newList = newList.filter(elem => sortData.cateqory == elem.cateqory);
    if (sortData.date.from || sortData.date.ot) newList = newList.filter(elem => {
        const date = creatNumForDate(elem.date)
        return (date >= ot && date <= from)
    })

    return newList
}

export const creatAlldataValut = (dataGrafic,valuts) => {  // создает удобный обьект гдк есть доходы и убытки любой валюты
    const newData = {
        all: {},
        income: {},
        consumption: {}
    }
    valuts.forEach(valut => {
        const income = dataGrafic[valut + '-i']
        const consumption = dataGrafic[valut + '-c']

        newData.all[valut] = income + consumption
        newData.income[valut] = income
        newData.consumption[valut] = consumption
    })

    return newData
}



