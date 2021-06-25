export default function InlineElement({
  Component,
  minWidth,
  maxWidth,
  ...props
}) {
  return (
    <div style={{ display: 'inline-block', minWidth, maxWidth }}>
      <Component {...props} />
    </div>
  )
}
