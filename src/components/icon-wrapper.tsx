import { memo } from 'react';
import Image from 'next/image'


export const Icon = memo(function _({ path }:{path: string}){
    return (
        <Image src={path} alt='icons' width={23} height={23}/>
    )
})