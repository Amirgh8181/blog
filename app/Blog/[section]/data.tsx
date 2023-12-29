  
  import { AiFillHtml5 } from 'react-icons/ai'
  import { BiLogoCss3 } from 'react-icons/bi'
  import { BiLogoTailwindCss } from 'react-icons/bi'
  import { BiLogoJavascript } from 'react-icons/bi'
  import { BiLogoTypescript } from 'react-icons/bi'
  import { BiLogoReact } from 'react-icons/bi'
  import { DiNodejs } from 'react-icons/di'
  import { SiExpress, SiMysql } from 'react-icons/si'
  import { TbBrandNextjs } from 'react-icons/tb'


  
  export const Frontcard: blogCard[] =
  [
    { label: 'HTML', icon: <AiFillHtml5 />, bgGradiant: 'bg-gradient-to-b from-orange-300 to-orange-700' },
    { label: 'CSS', icon: <BiLogoCss3 />, bgGradiant:'bg-gradient-to-b from-blue-300 to-blue-700' },
    { label: 'JS', icon: <BiLogoJavascript />, bgGradiant:'bg-gradient-to-b from-yellow-300 to-yellow-700' },
    { label: 'TAILWIND', icon: <BiLogoTailwindCss />, bgGradiant:'bg-gradient-to-b from-violet-300 to-violet-700' },
    { label: 'TS', icon: <BiLogoTypescript />, bgGradiant:'bg-gradient-to-b from-blue-300 to-blue-700' },
    { label: 'REACT', icon: <BiLogoReact />, bgGradiant:'bg-gradient-to-b from-darkBlue to-darkestBlue' },
    { label: 'NEXTJS', icon: <TbBrandNextjs />, bgGradiant:'bg-gradient-to-b from-slate-600 to-slate-900' },
  ]

  export const Backcard: blogCard[] =
  [
    { label: 'JS', icon: <BiLogoJavascript />, bgGradiant:'bg-gradient-to-b from-yellow-300 to-yellow-700' },
    { label: 'MYSQL', icon: <SiMysql />, bgGradiant:'bg-gradient-to-b from-sky-300 to-sky-700' },
    { label: 'NODEJS', icon: <DiNodejs />, bgGradiant:'bg-gradient-to-b from-green-300 to-green-700' },
    { label: 'EXPRESS-JS', icon: <SiExpress />, bgGradiant:'bg-gradient-to-b from-blue-300 to-blue-700' },

  ]