import { Loader2 } from 'lucide-react'

interface ButtonProps {
  text?: string
  loading?: boolean
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  className?: string
  onClick?: () => void
}
function Button({
  text = 'Submit',
  loading = false,
  disabled = false,
  type = 'button',
  className = '',
  onClick = () => {}
}: ButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      type={type}
      className={`px-6 py-4 text-lg leading-7 font-semibold rounded-lg cursor-pointer hover:opacity-90 bg-[#2B3A67] text-white disabled:opacity-90 disabled:cursor-auto  ${className}`}
      onClick={onClick}
    >
      {loading ? <Loader2 strokeWidth={3} size={28} className=' animate-spin m-auto' /> : text}
    </button>
  )
}

export default Button
