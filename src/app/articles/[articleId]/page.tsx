'use client'
import Link from 'next/link'
import React from 'react'
import {use} from 'react'
const NewsArticles =  ({params,searchParams}:{
    params:Promise<{articleId:string}>,
    searchParams:Promise<{lang?:'en'|'bn'|'sp'}>
}) => {
    const {articleId} = use(params) ;
    const {lang} = use(searchParams);

  return (
    <div>
        <h1>New Articles Id {articleId}</h1>
        <p>Reading in language lang {lang}</p>
        <div>
            <Link href={`/articles/${articleId}?lang=en`}>english</Link>
            <Link href={`/articles/${articleId}?lang=bn`}>bangla</Link>
            <Link href={`/articles/${articleId}?lang=sp`}>spnish</Link>
        </div>
    </div>
  )
}

export default NewsArticles