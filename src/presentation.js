import React from 'react'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: '#1B2B34',
    secondary: '#5FB3B3',
    tertiary: '#EC5f67',
    quartenary: '#C594C5'
  },
  {
    primary: 'Hack',
    secondary: 'Dank Mono'
  }
)

const images = {
  album: require('./images/album.jpg'),
  annaAndMe: require('./images/anna-and-me.jpg'),
  bible: require('./images/bible.jpg'),
  golf: require('./images/golf.jpg'),
  manyUniverses: require('./images/manyUniverses.jpg')
}

const formatSrc = str => str.replace('/', '')

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Text style={{ textAlign: 'left', marginBottom: '1em' }}>
            <S type="italic" textColor="tertiary" fontFamily="secondary">
              On Being a
            </S>{' '}
          </Text>
          <Heading size={2}>secondCareerDev</Heading>
        </Slide>

        <Slide bgColor="primary">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Image width={600} src={formatSrc(images.annaAndMe)} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.5em'
              }}
            >
              <div style={{ fontSize: '1.5em', marginBottom: '.75em' }}>
                Kyle Shevlin
              </div>
              <div style={{ marginBottom: '1.5em' }}>
                Senior Software Engineer at{' '}
                <Link
                  href="https://formidable.com"
                  textColor="tertiary"
                  textFont="secondary"
                >
                  <S type="italic">Formidable</S>
                </Link>
              </div>
              <div style={{ marginBottom: '1.5em' }}>
                Host of the{' '}
                <Link
                  href="https://twitter.com/kyleshevlin"
                  textColor="tertiary"
                  textFont="secondary"
                >
                  <S type="italic">Second Career Devs</S>
                </Link>{' '}
                podcast
              </div>
              <div>
                <Link
                  href="https://twitter.com/kyleshevlin"
                  textColor="tertiary"
                  textFont="secondary"
                >
                  <S type="italic">@kyleshevlin</S>
                </Link>
              </div>
            </div>
          </div>
        </Slide>

        <Slide>
          <Heading size={3}>
            <S type="italic" textColor="tertiary" textFont="secondary">
              An anecdote...
            </S>
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="primary"
            fontFamily="secondary"
            style={{ marginBottom: '.5em' }}
          >
            <S type="italic">Many-Worlds Interpretation</S>
          </Heading>
          <Image src={formatSrc(images.manyUniverses)} />
        </Slide>

        <Slide>
          <Image width={350} src={formatSrc(images.golf)} />
        </Slide>

        <Slide bgColor="secondary">
          <Image src={formatSrc(images.bible)} />
        </Slide>

        <Slide>
          <Image src={formatSrc(images.album)} />
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={3}>
            <S type="italic">...the best of all possible worlds...</S>
          </Heading>
        </Slide>

        <Slide>
          <Text textColor="secondary">
            My sincere hope is that this{' '}
            <S type="italic" textFont="secondary" textColor="tertiary">
              career change
            </S>{' '}
            you are undergoing leads to your{' '}
            <S type="italic" textFont="secondary" textColor="tertiary">
              best of all possible worlds
            </S>
          </Text>
        </Slide>
      </Deck>
    )
  }
}
