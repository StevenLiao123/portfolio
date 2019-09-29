import React, { Component } from 'react';
import Prism from 'prismjs';
import showdown from 'showdown';
import './Resume.css';

const styleText = [
    `/*
  * Inspired by http://strml.net
  * Hello, I am Steven Liao
  * Welcome to my resume
  * Let's get started!
  */
  /* Firstly, let's add the transition value to all properties */
  * {
    transition: all 1s;
  }
  /* add some colors~ */
  body {
    color: rgb(196, 196, 182); 
    background: rgb(64,48,69);
  }
  /* adjust the distance between each text */
  .styleEditor {
    padding: .5em;
      border: 1px solid;
      margin: .5em;
      overflow: auto;
      background: rgb(81, 81, 84);
  }
  @media (min-width:500px){
    .styleEditor {
      width: 45vw; 
      height: 90vh;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    .styleEditor{
      width: 100vw;
      height: 45vh;
    }
  }
  /* for more colors~ */
  .token.selector{ color: rgb(133,153,0); }
  .token.property{ color: rgb(187,137,0); }
  .token.punctuation{ color: yellow; }
  .token.function{ color: rgb(42,161,152); }
  /* for 3D-positioned effect */
  html{
    perspective: 1000px;
  }
  .styleEditor {
    position: fixed; left: 0; top: 0;
    -webkit-transition: none;
    transition: none;
    -webkit-transform: rotateY(10deg) translateZ(-100px) ;
            transform: rotateY(10deg) translateZ(-100px) ;
    
  }
  /* ~~~
  * emmmmmm.
  * How about now?
  */
  .styleEditor {
    box-shadow: 0px 0px 10px rgba(255,255,255,0.4);
  }
  /* Let's make a editor for resume ~ */
   .resumeEditor{
      white-space: normal;
      padding: .5em;  
      margin: .5em;
      border: 1px solid;
      border-color: coral;
      background: white; color: #2c2e32;
      overflow: auto;
   }
  @media(min-width: 500px) {
    .resumeEditor{
      position: fixed; right: 0; top: 0;
      width: 48vw; 
      height: 90vh;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    .resumeEditor{
      position: fixed; left: 0; top: 50vh;
      padding: .5em;  margin: .5em;
      width: 90vw; 
      height: 45vh;
    }
  }
  /* Ok~ Time fot the resume now~~ */
  `,
    `
  `,
    `
  /* Lets make the resume more readable */
  .resumeEditor{
    padding: 2em;
  }
  .resumeEditor h2{
    display: inline-block;
    border-bottom: 1px solid;
    margin: 1em 0 .5em;
  }
  .resumeEditor ul,.resumeEditor ol{
    list-style: none;
  }
  .resumeEditor ul> li::before{
    content: '•';
    margin-right: .5em;
  }
  .resumeEditor ol {
    counter-reset: section;
  }
  .resumeEditor ol li::before {
    counter-increment: section;
    content: counters(section, ".") " ";
    margin-right: .5em;
  }
  .resumeEditor blockquote {
    margin: 1em;
    padding: .5em;
    background: #ddd;
  }
  `
]
const resume = `Personal Information
  ----
  Name：Steven Liao<br>
  Degree: University of Technology, Sydney<br>
  Major: Enterprise Software Development<br>
  Email: stevenliao19900326@gmail.com<br><br>
  Technical Skills
  ----
  HTML、CSS、JavaScript、React、NodeJS、MySQL、Webpack、Git etc<br><br>
  Career Summary
  ----
  * GIQCI - Front-End Developer<br>2017/9 - Current<br>Responsible for front-end work of building and maintaining website using HTML, CSS, JS, Bootstrap, React<br><br>
  #Projects Summary
  ----
  1.Currency-Converter<br>
  Designed and implemented React-based application for showing currency information using React + Bootstrap design.<br>
  2.Personal-Portfolio<br>
  A personal portfolio which is used to describe what kind of a person I am, using React + Bootstrap design + Google map API + emailjs + ...<br>
 [Preview](https://stevenliao123.github.io/portfolio)<br>
  ----
  I am looking for a position of Front-End developer in Sydney
  Thanks
  ----
  Thank you for taking the time to read my resume and look forward to having the opportunity to work with you. 
  * [GitHub](https://github.com/StevenLiao123)
  * [Go back to the main page](https://stevenliao123.github.io/portfolio)
  `
var currentStyle = ''
var currentMarkdown = ''
let speed = 40
let nowLength = 0
let allLength = 0
class Resume extends Component {
    constructor(...prop) {
        super(...prop)
        this.state = {
            styleTextDom: '',
            resumeMarkdownDom: ''
        }
    }
    componentDidMount() {
        (async (that) => {
            await this.ShowStyle(0)
            await this.ShowResume()
            await this.ShowStyle(1)
            await this.ShowStyle(2)
        })(this)
    }
    ShowStyle(n) {
        return new Promise((resolve, reject) => {
            let interval = speed
            for (let i = 0; i <= n; i++) {
                allLength += styleText[i].length
            }
            let showStyle = (async function () {
                let style = styleText[n]
                if (!style) { return }
                nowLength = allLength - style.length
                if (currentStyle.length < allLength) {
                    let i = currentStyle.length - nowLength
                    let char = style.substring(i, i + 1) || ' '
                    currentStyle += char
                    this.setState({ styleTextDom: Prism.highlight(currentStyle, Prism.languages.css) })
                    this.refs.styleEditor.scrollTop = this.refs.styleEditor.scrollHeight
                    setTimeout(showStyle, interval)
                } else {
                    allLength = 0
                    resolve()
                }
            }).bind(this)
            showStyle()
        })
    }
    ShowResume() {
        return new Promise((resolve, reject) => {
            let length = resume.length
            let interval = speed
            let showResumeMd = () => {
                if (currentMarkdown.length < length) {
                    let i = currentMarkdown.length
                    let char = resume.substring(i, i + 1) || ' '
                    currentMarkdown += char
                    const converter = new showdown.Converter()
                    const markdownResume = converter.makeHtml(currentMarkdown)
                    this.setState({ resumeMarkdownDom: markdownResume })
                    this.refs.resumeEditor.scrollTop = this.refs.resumeEditor.scrollHeight
                    setTimeout(showResumeMd, interval)
                } else {
                    resolve()
                }
            }
            showResumeMd()
        })
    }
    render() {
        return (
            <div className="Resume" >
                <div ref='styleEditor' className='styleEditor'>
                    <div dangerouslySetInnerHTML={{ __html: this.state.styleTextDom }}></div>
                    <style dangerouslySetInnerHTML={{ __html: currentStyle }}></style>
                </div>
                <div ref='resumeEditor' className='resumeEditor'>
                    <div dangerouslySetInnerHTML={{ __html: this.state.resumeMarkdownDom }}></div>
                </div>
            </div >
        );
    }
}

export default Resume;