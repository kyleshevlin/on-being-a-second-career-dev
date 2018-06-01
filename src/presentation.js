import React from 'react'
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
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
    quarternary: '#eee'
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
  manyUniverses: require('./images/manyUniverses.jpg'),
  sCD: require('./images/sCD.png'),
  tweet: require('./images/tweet.png')
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
                <Appear>
                  <Text
                    style={{ fontSize: '.85em', marginTop: '0.5em' }}
                    textColor="quarternary"
                    textFont="secondary"
                  >
                    <S type="italic">We're Hiring</S>
                  </Text>
                </Appear>
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

        <Slide>
          <Image width={700} src={formatSrc(images.tweet)} />
        </Slide>

        <Slide>
          <Heading size={3}>
            <S type="italic" textColor="tertiary" textFont="secondary">
              Now the real anecdote...
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
          <Heading size={3} textColor="tertiary">
            <S type="italic" textFont="secondary">
              The Podcast
            </S>
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Image width={700} src={formatSrc(images.sCD)} />
          <br />
          <Link
            textFont="secondary"
            textColor="primary"
            href="https://secondcareerdevs.com"
          >
            Second Career Devs Website
          </Link>
          <br />
          <Link
            textFont="secondary"
            textColor="primary"
            href="https://twitter.com/2ndCareerDevs"
          >
            @2ndCareerDevs
          </Link>
        </Slide>

        <Slide>
          <Heading textColor="secondary" size={3}>
            <S textFont="secondary" type="italic">
              You Have a Place Here
            </S>
          </Heading>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading textColor="quarternary" size={3}>
            <S textFont="secondary" type="italic">
              Find What Makes{' '}
              <S type="underline" textFont="secondary">
                <S type="italic">You</S>
              </S>{' '}
              Valuable
            </S>
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="tertiary" size={3}>
            Challenges Ahead
          </Heading>
          <List>
            <Appear>
              <ListItem>Identity</ListItem>
            </Appear>
            <Appear>
              <ListItem>Doubt</ListItem>
            </Appear>
            <Appear>
              <ListItem>Something</ListItem>
            </Appear>
            <Appear>
              <ListItem>Something</ListItem>
            </Appear>
            <Appear>
              <ListItem>Something</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="quarternary">
            It's Always Something
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={3} textColor="quarternary">
            <S type="italic" textFont="secondary">
              Rewards Ahead
            </S>
          </Heading>
          <List textColor="quarternary">
            <Appear>
              <ListItem>Dolla Dolla Bills, Y'all!</ListItem>
            </Appear>
            <Appear>
              <ListItem>In Demand Market</ListItem>
            </Appear>
            <Appear>
              <ListItem>Something</ListItem>
            </Appear>
            <Appear>
              <ListItem>Something</ListItem>
            </Appear>
            <Appear>
              <ListItem>Something</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="quarternary">
            It's Always Something
          </Heading>
        </Slide>

        <Slide />

        <Slide>
          <BlockQuote textColor="secondary" style={{ fontSize: '1.5em' }}>
            My sincere hope is that this{' '}
            <S type="italic" textFont="secondary" textColor="tertiary">
              career change
            </S>{' '}
            you are undergoing leads to your{' '}
            <S type="italic" textFont="secondary" textColor="tertiary">
              best of all possible worlds
            </S>
            <Cite style={{ fontSize: '1.5em', textAlign: 'right' }}>Me</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
