/* eslint-disable */
import { useCssHandles } from 'vtex.css-handles'

export const styles = () => {
  const CSS_HANDLES = ['container', 'wrapper-title', 'wrapper-value'] as const

  const { handles } = useCssHandles(CSS_HANDLES)

  return {
    handles,
  }
}
