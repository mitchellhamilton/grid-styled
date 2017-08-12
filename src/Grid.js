import styled from 'emotion/react'
import Box from './Box'

const align = props => ({ verticalAlign: props.align || 'top' })

const Grid = styled(Box)`
  display: inline-block;
  ${align};
`
Grid.displayName = 'Grid'

export default Grid
