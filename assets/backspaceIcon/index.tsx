import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number,
    height?: number,
    color?: string
}

export const BackspaceIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || 26} height={height || 22} fill="none" viewBox="0 0 122 84"  >
        <Path
            stroke={color || "#000"}
            fill={color || "#000"}
            d="M41 0h70.56c3.12 0 5.95 1.27 8 3.32s3.32 4.88 3.32 8v61.63c0 3.12-1.27 5.95-3.32 8a11.285 11.285 0 0 1-8 3.32H40.67l-.18-.01c-10.44-.6-19.13-13.09-27.57-25.21-3.71-5.33-7.37-10.59-10.89-14.43L0 42.41l2.01-2.23c4.39-4.89 8.55-10.75 12.56-16.39C23.35 11.41 31.45 0 41 0zm42.95 24.11a5.659 5.659 0 0 1 8.07-.02c2.23 2.24 2.24 5.9.02 8.15l-9.75 9.89 9.76 9.9c2.21 2.24 2.17 5.87-.07 8.1a5.662 5.662 0 0 1-8.05-.01l-9.7-9.83-9.72 9.85a5.659 5.659 0 0 1-8.07.02c-2.23-2.24-2.24-5.89-.02-8.15l9.75-9.89-9.76-9.9c-2.2-2.24-2.17-5.87.07-8.1a5.662 5.662 0 0 1 8.05.01l9.7 9.83 9.72-9.85zm27.61-17.49H41c-6.15 0-13.3 10.07-21.06 20.98-3.55 5-7.22 10.17-11.1 14.77 3.19 3.81 6.33 8.33 9.51 12.89C25.83 66 33.53 77.06 40.69 77.64h70.87c1.29 0 2.46-.53 3.31-1.38a4.69 4.69 0 0 0 1.38-3.31V11.32c0-1.29-.53-2.46-1.38-3.32a4.672 4.672 0 0 0-3.31-1.38z" />
    </Svg>
)