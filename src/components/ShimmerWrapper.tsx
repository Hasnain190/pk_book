import {Shimmer} from 'react-shimmer-loader'

type Props = {
    width: number
    height: number
    children: React.ReactNode
}
const ShimmerWrapper = ({width, height, children}: Props) => {
    return (
        <Shimmer
            width={width}
            height={height}
        >
            {children}
        </Shimmer>
    )
}

export default ShimmerWrapper