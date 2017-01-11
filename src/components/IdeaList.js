import React from 'react'
import Idea from './../Idea'

const IdeaList = ({ideas, destroy, update}) => {
  return(
    <div className='IdeaList'>
      { ideas.map( idea => <Idea { ...idea } key={idea.id} destroy={destroy} update={update}/> ) }
    </div>
  );
}

export default IdeaList;
