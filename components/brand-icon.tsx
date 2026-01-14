type BrandIconProps = {
  icon: {
    path: string
    title: string
  }
  className?: string
}

export default function BrandIcon({ icon, className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-label={icon.title}
      role="img"
      className={className}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  )
}
