import './modal.css'

interface modalProps {
  children: React.ReactNode
  onClose: () => void
}

export function Modal ({ children, onClose }: modalProps) {
  return (
    <>
      <div className='modal-bg' onClick={onClose}/>
      <section className='modal-container'>
        { children }
      </section>
    </>
  )
}
