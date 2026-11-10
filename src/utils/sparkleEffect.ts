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

    if (this.enabled) {
      this.init();
    }
  }

  private init() {
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  private createSparkle(x: number, y: number) {
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
    const dist = Math.hypot(e.clientX - this.lastX, e.clientY - this.lastY);
    if (dist > this.minDistance) {
      this.createSparkle(e.pageX, e.pageY);
      this.lastX = e.clientX;
      this.lastY = e.clientY;
    }
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
    if (enabled) {
      this.init();
    }
  }
}

let globalSparkleEffect: SparkleEffect | null = null;

export function initSparkleEffect(options: SparkleOptions = {}) {
  globalSparkleEffect = new SparkleEffect(options);
  return globalSparkleEffect;
}

export function setSparkleEffectEnabled(enabled: boolean) {
  if (globalSparkleEffect) {
    globalSparkleEffect.setEnabled(enabled);
  }
}

export default initSparkleEffect;