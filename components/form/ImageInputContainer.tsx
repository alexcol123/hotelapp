'use client'
import { useState } from 'react'
import Image from 'next/image'

import FormContainer from './FormContainer'
import ImageInput from './ImageInput'
import { SubmitButton } from './Buttons'
import { type actionFunction } from '@/utils/types'
import { LuUser2 } from 'react-icons/lu'
import { Button } from '../ui/button'

type ImageInputContainerProps = {
  image: string
  name: string
  action: actionFunction
  text: string
  children?: React.ReactNode
}


const ImageInputContainer = (props: ImageInputContainerProps) => {

  const { image, name, action, text, } = props
  const [isUpdateFormVisible, setisUpdateFormVisible] = useState(false)

  const userIcon = <LuUser2 className='h-24 w-24 bg-primary rounded text-white ' />

  return (
    <div>
      {Image ? <Image src={image} alt={name} width={100} height={100} className='rounded object-cover mb-4 w-24 h-24' /> : userIcon}

      <Button variant={'outline'} size={'sm'} onClick={() => setisUpdateFormVisible((prev) => !prev)}>
        {text}
      </Button>

      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size={'sm'} />
          </FormContainer>

        </div>
      )}

    </div>
  )
}
export default ImageInputContainer