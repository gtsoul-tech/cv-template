import PropTypes from 'prop-types';
import '../styles/EditSide.css'
import PersonalForm from './PersonalForm'
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import { useState } from 'react';
function EditSide(props) {
  const [show,setShow]= useState(true)
  const mystyle = {
    backgroundColor: props.fontColorLayout.color,
    fontFamily: props.fontColorLayout.font
  };
  return (
    <>
      
      
      <div className='editSide'>
        <div className='buttonInit'>
          <button onClick={() => setShow(!show)}>Resume/Customize</button>
          
        </div>
        {show ? <>
          <div className='buttonInit'>
            <button onClick={() => props.handleLoadExample()}>Load Example</button>
            <button className='buttonInitClear' onClick={() => props.handleClear()}>Clear Example</button>
          </div>
          <PersonalForm {...props}></PersonalForm>
          <EducationForm {...props}></EducationForm>
          <ExperienceForm {...props}></ExperienceForm>
        </>: 
        <>
          <div className='card'>
            <div className='cardTitle'>Layout</div>
            <div className='cardComponents'>
              <button className='layoutButtonTop'
              onClick={()=> {props.handleSetFontColorLayout(props.fontColorLayout.font,props.fontColorLayout.color,'top')}}
              >
                <div style={mystyle}></div>
                <div></div>
              </button>
              <button className='layoutButtonLeft'
              onClick={()=> {props.handleSetFontColorLayout(props.fontColorLayout.font,props.fontColorLayout.color,'left')}}
              >
                <div style={mystyle}></div>
                <div></div>
              </button>
              <button className='layoutButtonRight'
              onClick={()=> {props.handleSetFontColorLayout(props.fontColorLayout.font,props.fontColorLayout.color,'right')}}
              >
                <div></div>
                <div style={mystyle}></div>
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='cardTitle'>Color</div>
            <div className='cardComponents'>
              <div>Change Color</div>
              <input type="color" id="colorpicker" value={props.fontColorLayout.color} onChange={(e)=> {props.handleSetFontColorLayout(props.fontColorLayout.font,e.target.value,props.fontColorLayout.layout)}}></input>
            </div>
          </div>
          <div className='card'>
            <div className='cardTitle'>Font</div>
            <div className='cardComponents'>
              <button
              onClick={()=> {props.handleSetFontColorLayout('mono',props.fontColorLayout.color,props.fontColorLayout.layout)}}
              >
                <div>Aa</div>
                <div>Mono</div>
              </button>
              <button
              onClick={()=> {props.handleSetFontColorLayout('PTSerif',props.fontColorLayout.color,props.fontColorLayout.layout)}}
              >
                <div>Aa</div>
                <div>PTSerif</div>
              </button>
              <button
              onClick={()=> {props.handleSetFontColorLayout('sans-serif',props.fontColorLayout.color,props.fontColorLayout.layout)}}
              >
                <div>Aa</div>
                <div>Sans</div>
              </button>
            </div>
          </div>
        </>}
      </div>
      
    </>
  )
}
EditSide.propTypes = {
  handleLoadExample:PropTypes.func,
  handleClear:PropTypes.func,
  fontColorLayout:PropTypes.object,
  handleSetFontColorLayout:PropTypes.func,
}
export default EditSide
