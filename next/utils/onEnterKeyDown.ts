export const onEnterOrSpaceKeyDown = (callback: () => void) => {
  return (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      callback()
    }
  }
}
