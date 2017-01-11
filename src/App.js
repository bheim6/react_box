import React from 'react';
import './App.css';
import CreateIdeaForm from './components/CreateIdeaForm'
import IdeaList from './components/IdeaList'

class App extends React.Component {
  constructor() {
    super()
    this.state = { ideas: [] }
  }

  componentDidMount() {
    const ideas = JSON.parse(localStorage.getItem('ideas'))

    this.setState({ ideas: ideas ? ideas : [] })
  }

  storeIdea(idea) {
    this.state.ideas.push(idea)

    let ideas = this.state.ideas

    this.setState({ ideas: ideas }, () => this.lstore(ideas))
  }

  lstore(ideas) {
    localStorage.setItem('ideas', JSON.stringify(ideas))
  }

  destroyIdea(id) {
    let ideas = this.state.ideas.filter( idea => idea.id !== id)
    this.setState({ideas: ideas}, () => this.lstore(ideas))
  }

  updateIdea(id) {
    console.log("updating idea yo " + id)
  }

  render() {
    return (
      <div>
        <CreateIdeaForm saveIdea={ this.storeIdea.bind(this) } />

        <IdeaList ideas={ this.state.ideas } destroy={ this.destroyIdea.bind(this)} update={ this.updateIdea.bind(this)} />
      </div>
    );
  }
}

export default App;
