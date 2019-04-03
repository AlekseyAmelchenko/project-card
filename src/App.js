import React, { Component } from 'react'

// так теперь тоже работает, потому что мы импортируем конкретную константу
// с именем ProjectCard
import { ProjectCard } from './ProjectCard'

class App extends Component {
  render() {
    return <ProjectCard />
  }
}

export default App
