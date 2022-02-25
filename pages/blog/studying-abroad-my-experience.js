import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Title, BlogImage, Meta } from '../../components/blog'

const Project = () => {
  return (
    <Layout title="Let's Play">
      <Container maxW="container.md">
        <BlogImage src="/images/studying-abroad.jpg" alt="Let's Play!" />
        <Title>
          Studying Abroad — My Experience <Badge>2022</Badge>
        </Title>
        <P>
          It was May 2021, I was just about to finish my sixth semester. I was
          in my third year, or a junior as they would say in the US, studying
          Informatics at a well-known private university in Bandung, Indonesia.
          Wrapping up my fourth online semester, I felt empty and in need of a
          change. After three years of studying, doing problem sets and building
          different technologies, I didn&apos;t really feel the spark that I
          once had in my freshman year when I first got admitted to college. My
          education experience hasn&apos;t been the smoothest. In fact, I
          wasn&apos;t the best student in high school and I planned to graduate
          college earlier as I was intrigued by computers and wanted to prove
          myself that I can succeed in this field. However, things changed and
          my graduation was postponed to follow the regular curriculum timeline.
          The expression of “being in the right place at the right time”
          resonated with my situation at the time. I saw an opportunity for a
          scholarship that opened applications for third and fourth year
          students to study abroad. Indonesian International Student Mobility
          Awards is the Government of Indonesia scholarship scheme to fund
          Indonesian students for mobility program at top universities overseas.
          Had I graduated earlier, I wouldn&apos;t even have the chance to
          apply. The short two-week selection process felt like the longest two
          weeks in my life. I found myself locked up in my room day in day out
          trying to come up with strategies to pass the selection processes.
        </P>
        <P>
          The jet-lag quickly went away with all the activities as it was
          halfway through New Student Orientation (NSO) when I arrived. First
          month in, everything still felt surreal to me. I still haven&apos;t
          gotten over how life could be so different miles away from home.
          Seemingly mundane activities like going to classes and grabbing dinner
          from the dining halls gets me excited and I look forward to living
          each and every day. I lived in Rodin College House, one of the three
          high rises. As someone who has never lived on-campus before, being
          able to see people my age everyday down the hallway or in the common
          areas was something new as I have spent the last 21 years of my life
          living at home.
        </P>
        <P>
          The classes I took were interactive, in a sense that we had someone to
          talk to for each meeting. I was surprised by how most of the classes
          follow a discussion format, something very different from what I was
          used to. However, I had trouble voicing my ideas and opinions early in
          the semester, especially in a classroom setting where everybody is
          listening and you have to make somewhat sound arguments. Hell, I
          couldn&apos;t even carry a basic conversation in my first month. I
          tried my best to keep up with native English speaker friends, and I
          think that was the most important thing, to try. Exposing yourself to
          as much learning opportunities and keep an open mind to criticism gets
          you a long way when studying abroad. I was very lucky to be surrounded
          by people who were very understanding and the support that they gave
          me were immensely helpful. My friends helped me proofread my
          assignments and I still save copies of them with the comments to
          improve my writing. I also had very supportive classmates when I gave
          presentations in front of the class. I am not the most outspoken
          person, but by being genuinely honest and interested in people, I was
          able to make friends that I still talk to today.
        </P>
        <P>
          Next two months, I started to settle in. I got more comfortable
          meeting new people and getting immersed, even though I still have to
          introduce myself dozens of time each day (don&apos;t get me wrong, I
          really liked doing this haha). I kind of got the gist of what being a
          Penn student was like, with late nights and early mornings walking
          down Locust Walk and ordering food from Wawa. It almost felt like I
          lived there. Writing essays and speaking up in class felt gradually
          easier as my English brain started to get primed. Travelling places
          that I had only seen in movies and pictures was one of the highlights
          of my experience. In total, I visited a total of 5 states outside
          Pennsylvania, spanned across four months: New York, Florida,
          California, Massachusetts and Washington DC, though I&apos;ve only
          learned that Washington DC is not a state. It&apos;s amazing to be
          physically present in places from movies and video games that I grew
          up with. Here are some highlights: - Coffee with a view of Brooklyn
          Bridge, New York City - Walt Disney World, Orlando - Surfing in
          Ventura, California - Building campfire in Amherst, Massachusetts - US
          Capitol, Washington DC The last month was the hardest. Realizing that
          I only had a few weeks before I go home, I began to walk slower to
          admire the sights. This experience was the most transformative
          education experience in my life. I saw a different part of the world
          and immersed myself in communities that I haven&apos;t even thought to
          be part of.
        </P>
        <span>Tags: </span>
        <Meta>Study abroad</Meta>
        <Meta>Self improvement</Meta>
      </Container>
    </Layout>
  )
}

export default Project
