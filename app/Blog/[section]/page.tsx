import BlogSections from '@/components/blogSection'
import React from 'react'
import { Backcard, Frontcard } from './data';


const BlogSec = ({params}:{params:{section:string}}) => {

  return (
    <div>
            <BlogSections card={params.section==='frontEnd'?Frontcard:Backcard} />
    </div>
  )
}

export default BlogSec;