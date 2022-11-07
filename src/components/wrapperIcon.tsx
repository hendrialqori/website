import { memo } from 'react';
import Image from 'next/image'


export const WrapperComponent = memo(function _({ path }:{path: string}){
    return (
        <Image src={path} alt='icons' width={26} height={26}/>
    )
})