interface SparkleOptions {
  container?: HTMLElement;
  colors?: string[];
  minDistance?: number;
  minSize?: number;
  maxSize?: number;
  enabled?: boolean;
}

class SparkleEffect {
  private container: HTMLElement;
  private colors: string[];
  private minDistance: number;
  private minSize: number;
  private maxSize: number;
  private enabled: boolean;
  private lastX = 0;
  private lastY = 0;

  private boundMouseMove = this.handleMouseMove.bind(this);
  private boundClick = this.handleClick.bind(this);
  private boundVisibility = this.handleVisibility.bind(this);

  constructor(options: SparkleOptions = {}) {
    this.container = options.container || document.body;
    this.colors = options.colors || [
      'var(--accent-primary)',
      'var(--accent-secondary)',
      '#ff4d00',
      '#7c3aed',
      '#facc15'
    ];
    this.minDistance = options.minDistance || 18;
    this.minSize = options.minSize || 8;
    this.maxSize = options.maxSize || 16;
    this.enabled = options.enabled !== false;

    if (this.shouldRun()) {
      this.enabled = true;
      this.init();
    } else {
      this.enabled = false;
    }
  }

  private shouldRun(): boolean {
    if (typeof window === 'undefined') return false;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return finePointer && !reducedMotion;
  }

  private init() {
    window.addEventListener('mousemove', this.boundMouseMove);
    window.addEventListener('click', this.boundClick);
    window.addEventListener('visibilitychange', this.boundVisibility);
  }

  private handleClick(e: MouseEvent) {
    if (!this.shouldRun()) return;
    const numParticles = 8;
    const colors = this.colors;
    for (let i = 0; i < numParticles; i++) {
      const p = document.createElement('div');
      p.className = 'pixel-click-spark';
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 6;
      const angle = (Math.PI * 2 * i) / numParticles + (Math.random() - 0.5) * 0.4;
      const velocity = 26 + Math.random() * 26;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;

      p.style.cssText = `
        position: absolute;
        left: ${e.pageX}px;
        top: ${e.pageY}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        pointer-events: none;
        z-index: 99999;
        transform: translate(-50%, -50%);
        box-shadow: 2px 2px 0 #0b0d10;
        image-rendering: pixelated;
        transition: transform 0.4s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.4s ease-out;
      `;

      this.container.appendChild(p);

      requestAnimationFrame(() => {
        p.style.transform = `translate(calc(-50% + ${vx}px), calc(-50% + ${vy}px)) scale(0.2)`;
        p.style.opacity = '0';
      });

      setTimeout(() => p.remove(), 420);
    }
  }

  private createSparkle(x: number, y: number) {
    if (!this.shouldRun()) return;
    const sparkle = document.createElement('div');
    sparkle.className = 'pixel-sparkle';
    
    const size = Math.floor(Math.random() * (this.maxSize - this.minSize + 1)) + this.minSize;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    const offsetX = (Math.random() - 0.5) * 24;
    const offsetY = (Math.random() - 0.5) * 24;
    sparkle.style.left = `${x + offsetX}px`;
    sparkle.style.top = `${y + offsetY}px`;

    sparkle.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];

    if (Math.random() > 0.7) {
      sparkle.style.borderRadius = '50%';
    }

    this.container.appendChild(sparkle);
    
    sparkle.addEventListener('animationend', () => sparkle.remove());
  }

  private handleMouseMove(e: MouseEvent) {
    if (!this.shouldRun()) return;
    const dist = Math.hypot(e.clientX - this.lastX, e.clientY - this.lastY);
    if (dist > this.minDistance) {
      this.createSparkle(e.pageX, e.pageY);
      this.lastX = e.clientX;
      this.lastY = e.clientY;
    }
  }

  private handleVisibility() {
    if (!this.enabled) return;
    if (document.hidden) {
      this.cleanup();
    } else if (this.shouldRun()) {
      this.init();
    }
  }

  private cleanup() {
    window.removeEventListener('mousemove', this.boundMouseMove);
    window.removeEventListener('click', this.boundClick);
    window.removeEventListener('visibilitychange', this.boundVisibility);
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
    if (enabled && this.shouldRun()) {
      this.init();
    } else {
      this.cleanup();
    }
  }
}

let globalSparkleEffect: SparkleEffect | null = null;

export function initSparkleEffect(options: SparkleOptions = {}) {
  if (globalSparkleEffect) {
    globalSparkleEffect.setEnabled(false);
  }
  globalSparkleEffect = new SparkleEffect(options);
  return () => {
    if (globalSparkleEffect) {
      globalSparkleEffect.setEnabled(false);
      globalSparkleEffect = null;
    }
  };
}

export function setSparkleEffectEnabled(enabled: boolean) {
  if (globalSparkleEffect) {
    globalSparkleEffect.setEnabled(enabled);
  }
}

export default initSparkleEffect;