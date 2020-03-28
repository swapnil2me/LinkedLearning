import React, { Component } from 'react'
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput,
Button, Document} from './styled'
import hljs from 'highlight.js'
import {rando, getRandomPoem} from './utils'

class App extends Component {

  state = {
    editor:"",
    name0:"",
    begin0:"",
    end0:"",
    style0:"",
    rules:1
  }

  handleChange = (event)=>{
    let {name,value} = event.target
    this.setState({
      [name]:value
    })
  }

  get rules(){
    let {rules}=this.state // Object Destructuring
    let array = []
    let fields=['name','begin','end']
    for (let i=0;i<rules;i++){
      array.push(
        <Row key={i}>
          <Column>
            {fields.map((field,index)=>{
              return (
                <Column key={index}>
                  <RuleLabel>
                    {field}
                  </RuleLabel>
                  <RuleInput
                    value={this.state[`${field}${i}`]}
                    onChange={this.handleChange}
                    name={`${field}${i}`}
                  />
                </Column>
              )
            })}
          </Column>
          <StyleInput
            value={this.state[`style${i}`]}
            onChange={this.handleChange}
            name={`style${i}`}
          />
        </Row>
      )
    }
    return array
  }

  newFields=()=>{
    this.setState((prevState)=>{
      let {rules}=prevState
      let fields=['name','begin','end','style']
      let inputValues={}
      fields.forEach((field) => {
        inputValues={
          ...inputValues,
          [`${field}${rules}`]:''
        }
      })
      rules++
      return{
        rules,
        ...inputValues // Spread Function
      }
    })
  }

  convertToMarkup = (text="")=>{ // default function arguments
    return{
      __html:hljs.highlightAuto (text).value
    }
  }

  language=(newRules)=>{
    return ()=>({
      contains: [...newRules]
    })
  }

  registerLauguage=(state)=>{
    let {rules}=state
    let ruleObjects=[]
    for (let i=0;i<rules;i++){
      let newRule={
        className:state[`name${i}`],
        begin:state[`begin${i}`],
        end:state[`end${i}`]
      }
      let {className,begin,end}=newRule
      if (
        className.length>1 &&
        begin.length>1 &&
        end.length>1
      ) {
        begin=new RegExp(begin)
        end=new RegExp(end)
        ruleObjects.push(newRule)
      }
      //console.log(newRule);
      // console.log(ruleObjects);
    }
    hljs.registerLanguage('language',this.language(ruleObjects))
    hljs.configure({languages:['language']})

  }

  componentWillUpdate(nextProps,nextState){
    this.registerLauguage(nextState)
  }

  prepareStyles=()=>{
    let {rules}=this.state
    let styles=[]
    for(let i=0;i<rules;i++){
      styles.push(`
          .hljs-${this.state['name'+i]} {
            ${this.state['style'+i]}
          }
        `)
    }
    let newStyles="".concat(styles).replace(",","")
    //console.log(newStyles);

    while (newStyles.includes('random')) {
      newStyles = newStyles.replace('random', rando.color())
    }

    return newStyles
  }

  getRandomText = async()=>{
    try {
      let poem = await getRandomPoem()
      this.handleChange({
        target:{
          name:'editor',
          value: poem
        }
      })
    } catch (error) {
      console.log("error in getting poem: ", error)
    } finally {
      console.log("Swapnil !!!!!")
      this.handleChange({
        target:{
          name:'editor',
          value: "Why is my verse so barren of new pride,\nSo far from variation or quick change?\nWhy with the time do I not glance aside\nTo new-found methods, and to compounds strange?\nWhy write I still all one, ever the same,\nAnd keep invention in a noted weed,\nThat every word doth almost tell my name,\nShowing their birth, and where they did proceed?\nO! know sweet love I always write of you,\nAnd you and love are still my argument;\nSo all my best is dressing old words new,\nSpending again what is already spent:\n  For as the sun is daily new and old,\n  So is my love still telling what is told.\n"
        }
      })
    }
  }

  render() {
    let {editor} = this.state
    let {handleChange, newFields, rules, convertToMarkup, prepareStyles,getRandomText} = this // Object Destructuring
    return (
      <Container>
        <Column>
          {rules}
          <Button
            onClick={newFields}
          >
            New Rule
          </Button>
        </Column>
        <Column>
          <Button
            onClick={getRandomText}
          >
            Random Text
          </Button>
          <Document>
            <Editor
              name={"editor"}
              value = {editor}
              onChange={handleChange}
            />
            <Markup
              customStyles={prepareStyles()}
              dangerouslySetInnerHTML={convertToMarkup(editor)}
            />
          </Document>
        </Column>
      </Container>
    )
  }
}

export default App;
