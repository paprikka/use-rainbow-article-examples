import { render } from 'preact'
import './index.css'
import { Preview } from './preview'

const AllPreviews = () => {
    return (
        <>
            {['/example-scroll/', '/example-rgb-hsl/'].map((_, ind) => (
                <Preview src={_} />
            ))}
        </>
    )
}

render(<AllPreviews />, document.getElementById('app')!)
