export default function Placeholder({ photo }) {
  const source = photo
    ? photo
    : 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
  return (
    <div
      style={{
        background: `url(${source}) center`,
        height: '220px',
        width: '260px',
      }}
      alt="placeholder"
    />
  )
}
