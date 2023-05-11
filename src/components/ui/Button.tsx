import { FC } from 'react'
import {cva} from 'class-variance-authority'



interface ButtonProps {
  
}

const buttonVariants = cva('active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900',{
    variants: {
        variant:{
            default: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
            outline: 'bg-slate-900 text-white hover:bg-slate-900 dark:bg-slate-900 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 hover:bg-slate-100 dark:border-slate-700',
            ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
            
        }
    }
})

const Button: FC<ButtonProps> = ({}) => {
  return <div>Button</div>
}

export default Button