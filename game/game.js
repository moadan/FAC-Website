const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.beginPath();
ctx.moveTo(100, 100)

ctx.lineTo(100, 500)
ctx.lineTo(500, 500)
ctx.lineTo(500, 100)
ctx.lineTo(300, 100)

ctx.stroke()
