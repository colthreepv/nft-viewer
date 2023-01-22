import { render } from '@testing-library/react'
import Navbar from './Navbar.component'

describe('Navbar', () => {
  it('Matches snapshot', () => {
    expect(render(<Navbar />)).toMatchSnapshot()
  })
})
