'use client'


import { FC, useState } from 'react'
import Button from './Button'
import { signIn, signOut } from 'next-auth/react'
import { toast } from '@/ui/Toast'

interface SignOutButtonProps {
  
}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signUserOut = async () => {
        setIsLoading(true)

        try{
            await signOut()
        }
        catch (error){
            toast({
                title: 'Error Signing Out',
                message: 'Please Try Again Later',
                type: 'error',
            })
        }
    }

  return (
  <Button onClick={signUserOut} isLoading = {isLoading}>
    Sign Out
  </Button>


  )
}

export default SignOutButton