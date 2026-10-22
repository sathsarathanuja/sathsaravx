import { useEffect, useRef } from 'react'

const createParticle = (x, y) => ({
  x,
  y,
  radius: 20 + Math.random() * 24,
  alpha: 0.18 + Math.random() * 0.16,
  driftX: (Math.random() - 0.5) * 0.4,
  driftY: (Math.random() - 0.5) * 0.4,
  speedX: (Math.random() - 0.5) * 0.35,
  speedY: (Math.random() - 0.5) * 0.35,
  life: 0,
  fade: 0.008 + Math.random() * 0.012,
  wobble: Math.random() * Math.PI * 2,
})

export default function CustomCursor() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const pointerRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const frameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    const resizeCanvas = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const spawnParticle = (x, y) => {
      const particle = createParticle(x, y)
      particlesRef.current.push(particle)
      if (particlesRef.current.length > 40) particlesRef.current.shift()
    }

    const handlePointerMove = (event) => {
      const x = event.clientX
      const y = event.clientY
      pointerRef.current = { x, y }
      spawnParticle(x, y)
    }

    const handleTouchMove = (event) => {
      if (!event.touches.length) return
      const { clientX: x, clientY: y } = event.touches[0]
      pointerRef.current = { x, y }
      spawnParticle(x, y)
    }

    const drawParticle = (particle) => {
      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.radius,
      )

      gradient.addColorStop(0, `rgba(255,255,255,${particle.alpha * 0.9})`)
      gradient.addColorStop(0.35, `rgba(255,255,255,${particle.alpha * 0.2})`)
      gradient.addColorStop(1, 'rgba(255,255,255,0)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fill()
    }

    const animate = () => {
      const { x: width, y: height } = { x: window.innerWidth, y: window.innerHeight }
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'
      ctx.filter = 'blur(1.2px)'

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life += 1
        particle.alpha -= particle.fade
        particle.x += particle.speedX + Math.cos(particle.wobble) * 0.12
        particle.y += particle.speedY + Math.sin(particle.wobble) * 0.12
        particle.radius += 0.035
        particle.wobble += 0.03

        if (particle.alpha <= 0) return false
        drawParticle(particle)
        return true
      })

      const next = requestAnimationFrame(animate)
      frameRef.current = next
    }

    resizeCanvas()
    frameRef.current = requestAnimationFrame(animate)

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('resize', resizeCanvas)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9999]" />
}
