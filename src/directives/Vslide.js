export default {
    name: "slide",
    mounted: (el, {value}) => {
        let xStart = 0
        let xEnd = 0
        let yStart = 0
        let yEnd = 0
        el.start = e => {
          xStart = e.touches[0].clientX
          yStart = e.touches[0].clientY
          xEnd = 0
          yEnd = 0 
        }
        el.move = e => {
          xEnd = e.touches[0].clientX
          yEnd = e.touches[0].clientY
        }
        el.end = e => {
          const direction = {x: 0, y: 0}
          let xPath = xStart - xEnd
          let yPath = yStart - yEnd
          if ((Math.abs(xPath) || Math.abs(yPath)) > 100) {
            const chosen = Math.abs(xPath) > Math.abs(yPath) ? {value: xPath , axis: "x"} : {value: yPath , axis: "y"}
            direction[chosen.axis] = Math.sign(chosen.value)
            value(direction)
          }
        }
        el.addEventListener("touchstart", el.start)
        el.addEventListener("touchmove", el.move)
        el.addEventListener("touchend", el.end)
        
      },
      unmounted: (el, {value}) => {
        el.removeEventListener("touchstart", el.start)
        el.removeEventListener("touchmove", el.move)
        el.removeEventListener("touchend", el.end)
      },
}
