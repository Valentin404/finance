import { useMemo, useState } from "react";
import { sortForDateAndCateqory } from "../Table/helpsTable";
import Chart from "./Chart";
import './Chat.scss'

const buttons = ['Все', 'Доход', 'Расход']

const AllChat = ({ data, valuts, transactions }) => {
  const [btnI, setBtnI] = useState(0)

  const chartMemo = useMemo(() => {
    const newData = sortForDateAndCateqory(data, transactions)
    const dateValut = {}
    newData.forEach(tranzaction => {
      dateValut[tranzaction.valut] == undefined && (dateValut[tranzaction.valut] = []);
      dateValut[tranzaction.valut].push(tranzaction)
    })
    const arrChart = []
    valuts.forEach(valut => {
      if (dateValut[valut] === undefined) return;
      const chart = {
        title: valut,
      }

      const category = [];
      const listDate = {}

      dateValut[valut].forEach(tranzaction => {
        const cateqory = tranzaction.cateqory;
        const sum = tranzaction.sum;
        category.includes(cateqory) == false && category.push(cateqory)
        const lastSum = listDate[cateqory] ? listDate[cateqory] : 0;

        switch (buttons[btnI]) {
          case 'Доход': return sum > 0 && (listDate[cateqory] = lastSum + sum)
          case 'Расход': return (sum < 0) && (listDate[cateqory] = lastSum + sum)
          default: return listDate[cateqory] = lastSum + sum
        }

      })

      const listDateForChartArr = category.map(valut => listDate[valut])

      if (listDateForChartArr.includes(undefined) && listDateForChartArr.length == 1) return //проверка на тто рисовать ли график

      let totalSum = 0;
      chart.data = listDateForChartArr
        .filter(elem => elem)
        .map((sum, i) => {
          totalSum += sum
          return { y: sum, name: category[i] }
        })
      chart.total = totalSum;
      arrChart.push(<Chart key={chart.title} total={chart.total} valut={chart.title} data={chart.data} />)
    })
    return arrChart
  }, [data, btnI,transactions])

  const click = (i) => {
    setBtnI(i)
  }

  const btnMemo = useMemo(() => buttons.map((name, i) => <button
    slot={name} className={btnI == i ? 'choice' : ''} onClick={() => click(i)} key={i}>{name}</button>), [btnI])

  return <div className="maxW center">
    <div className="C_buttons maxW">
      {btnMemo}
    </div>
    <div className="C_myChart">
      {chartMemo}

    </div>
  </div>
}

export default AllChat;