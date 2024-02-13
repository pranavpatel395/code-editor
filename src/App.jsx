import { useEffect, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [count, setCount] = useState (0)
  const [html, setHtml] = useLocalStorage ('html','')
  const [css, setCss] = useLocalStorage ('css','')
  const [js, setJs] = useLocalStorage ('js','')
  const [srcDoc, setsrcDoc] = useState('')
 


  useEffect(() => {
    const timeout = setTimeout(()=>{
       setsrcDoc(
      `<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`
      )

    },400)

  
    return () => clearTimeout(timeout)
  }, [html, css, js])
  
  return (
    <>
    <div className='pane top-pane'>
      <Editor language='xml'
      value={html}
      onChange={setHtml}
      displayname="HTML"/>

      <Editor language='css'
      value={css}
      onChange={setCss}
      displayname="Css"/>
      
     <Editor language='javascript'
      value={js}
      onChange={setJs}
      displayname="Js"/>
    </div>
    <div className='pane bottom-pane'>
    <iframe
      srcDoc={srcDoc}
      title='Embedded Content'
      sandbox="allow-scripts"
      frameBorder='0'
      width='100%'
      height='100%'
    />
    </div>
    
    </>
   
  )
}

export default App
