import {useState} from 'react'

import {
  AppContainer,
  Heading,
  ImageElement,
  Description,
  ButtonElement,
  Paragraph,
  ContentContainer,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readMore, setReadMore] = useState(false)
  const ButtonText = readMore ? 'Read Less' : 'Read More'
  const slicedText = reactHooksDescription.slice(0, 170)

  const descriptionText = readMore ? reactHooksDescription : slicedText

  const onClickButton = () => {
    setReadMore(prevState => !prevState)
  }

  return (
    <AppContainer>
      <ContentContainer>
        <Heading>React Hooks</Heading>
        <Paragraph>Hooks are a new addition to React</Paragraph>
        <ImageElement
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{descriptionText}</Description>
        <ButtonElement onClick={onClickButton}>{ButtonText}</ButtonElement>
      </ContentContainer>
    </AppContainer>
  )
}

export default ReadMore
