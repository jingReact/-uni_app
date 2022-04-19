import * as echarts from 'echarts'

/**
 * @description: echarts线性渐变色
 * @param {string} startColor 开始处颜色
 * @param {string} endColor 结束处颜色
 * @return: 
 */
export function linear(startColor, endColor) {
  // 4个方位参数依次为右、下、左、上，（0 0 0 1）代表从正上方开始
  // 数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
  return new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [{
        offset: 0,
        color: startColor
      },
      {
        offset: 1,
        color: endColor
      }
    ],
    false
  )
}

/**
 * @description: echarts径向渐变色
 * @param {string} startColor
 * @param {string} endColor
 * @return 渐变色
 */
export function radial(startColor, endColor) {
  // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
  // 数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
  return new echarts.graphic.RadialGradient(
    0.5,
    0.5,
    0.5,
    [{
        offset: 0,
        color: startColor // 0% 处的颜色
      },
      {
        offset: 1,
        color: endColor // 100% 处的颜色
      }
    ],
    false)
}

export const linearGradientColorList = [{
    startColor: '#71A8FE',
    endColor: '#2872FC'
  },
  {
    startColor: '#E1A4FF',
    endColor: '#C65FF9'
  },
  {
    startColor: '#FFAC97',
    endColor: '#FF704C'
  },
  {
    startColor: '#0396FF',
    endColor: '#ABDCFF'
  },
  {
    startColor: '#ffdde1',
    endColor: '#ee9ca7'
  },
  {
    startColor: '#FFF3B0',
    endColor: '#CA26FF'
  },
  {
    startColor: '#FBD786',
    endColor: '#C6FFDD'
  },

]
