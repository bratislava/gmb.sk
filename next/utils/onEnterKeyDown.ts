export const onEnterOrSpaceKeyDown = (callback: (event: React.KeyboardEvent) => void) => {
  return (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      callback(event)
    }
  }
}
