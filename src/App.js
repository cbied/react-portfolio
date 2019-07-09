import React from 'react';
import './App.css';
import github from './assets/GitHub.png'
import githubClear from './assets/github-clear.png'
import linkedIn from './assets/LinkedIn.png'
import bcrypt from './assets/skills/bcrypt-logo.jpg'
import bootstrap from './assets/skills/bootstrap.png'
import css from './assets/skills/css-3.png'
import html from './assets/skills/html-5.png'
import express from './assets/skills/express.png'
import javascript from './assets/skills/javascript.png'
import node from './assets/skills/nodejs.png'
import redux from './assets/skills/logo-redux.png'
import postgresql from './assets/skills/postgresql.png'
import react from './assets/skills/react.png'
import sass from './assets/skills/sass.png'
import jnjLogin from './assets/jnjLogin.png'
import { Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap'

function App() {
  return (
    <div>
      <section className='hero' id='section-0'>
        <figure></figure>
        <h2 className='hero__title'>About me</h2>
        <div className='about_section'>
        <p className='about_me'>Name: Chris</p>
        <p className='about_me2'>Profession: <span><b>Full Stack Developer</b></span></p>
        <p className='about_me3'>Hobbies: Coding, Traveling and Coding while Traveling</p>
        </div>
      </section>
      <section className='hero' id='section-1'>
        <figure></figure>
        <h2 className='hero__title_left' id='skills'>Skills</h2>
        <img className='skill-icons' id='html' src={html} alt=''/>
        <img className='skill-icons css' id='css' src={css} alt=''/>
        <img className='skill-icons sass' id='sass' src={sass} alt=''/>
        <img className='skill-icons bootstrap' id='bootstrap' src={bootstrap} alt=''/>
        <img className='skill-icons javascript' id='javascript' src={javascript} alt=''/>
        <img className='skill-icons react' id='react' src={react} alt=''/>
        <img className='skill-icons redux' id='redux' src={redux} alt=''/>
        <img className='skill-icons node' id='node' src={node} alt=''/>
        <img className='skill-icons express' id='express' src={express} alt=''/>
        <img className='skill-icons bcrypt' id='bcrypt' src={bcrypt} alt=''/>
        <img className='skill-icons postgresql' id='postgresql' src={postgresql} alt=''/>

      </section>
      <section className='hero' id='section-2'>
        <figure></figure>
        <h2 className='hero__title' id='portfolio'>Portfolio</h2>
        {/* add slider to picture of projects reference old portfolio */}
        <Card className='card'>
          <CardImg top width='100%' src={jnjLogin} alt='Card image cap' />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <a href='https://github.com/cbied' target='_blank'><img id="github" src={githubClear} alt='github'/></a>
            <a href='https://github.com/cbied' target='_blank'><img id="github2" src={githubClear} alt='github'/></a>
          </CardBody>
        </Card>
        <Card className='card2'>
          <CardImg top width='100%' src={jnjLogin} alt='Card image cap' />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text</CardText>
            <a href='https://github.com/cbied' target='_blank'><img id="github" src={githubClear} alt='github'/></a>
            <a href='https://github.com/cbied' target='_blank'><img id="github2" src={githubClear} alt='github'/></a>
          </CardBody>
        </Card>
      </section>
      <section className='hero' id='section-3'>
        <figure></figure>
        <h2 className='hero__title_left'>Contact Me</h2>
        <h6 className='email'><a href='mailto:cabiediger@gmail.com'>cabiediger@gmail.com</a></h6>
        <h6 className='phone'>410-508-4105</h6>
        <a href='https://github.com/cbied' target='_blank'><img className='github' src={github} alt='github'/></a>
        <a href='https://www.linkedin.com/in/biedswebdev/' target='_blank'><img className='linkedIn' src={linkedIn} alt='github'/></a>
      </section>
      {/* 
      <section className='content'>
        <article className='content__inner'>
          <h1 className='content__title'>Some Happy Little Text</h1>
          <h3 className='content__author'>By Bob Ross</h3>
          <p>A thin paint will stick to a thick paint. The shadows are just like the highlights, but we're going in the opposite direction. When you do it your way you can go anywhere you choose.</p>
          <p>You have to make almighty decisions when you're the creator. When you buy that first tube of paint it gives you an artist license. There we go. The little tiny Tim easels will let you down. Let's just drop a little Evergreen right here.</p>
          <p>Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. Just pretend you are a whisper floating across a mountain. This is your world, whatever makes you happy you can put in it. Go crazy.</p>
          <p>The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. We'll play with clouds today. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. Don't kill all your dark areas - you need them to show the light. We don't want to set these clouds on fire. Every day I learn.</p>
          <blockquote>When you do it your way you can go anywhere you choose.</blockquote>
          <p>Let's get wild today. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. This is probably the greatest thing to happen in my life - to be able to share this with you.</p>
          <p>I'm a water fanatic. I love water. This is gonna be a happy little seascape. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Let's put a touch more of the magic here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue.</p>
          <p>And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen. Let all these things just sort of happen. Don't fight it, use what happens. Let's put some happy little bushes on the other side now.</p>
          <blockquote>Don't fight it, use what happens.</blockquote>
          <p>If we're going to have animals around we all have to be concerned about them and take care of them. I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. Anytime you learn something your time and energy are not wasted. This is your world. We want to use a lot pressure while using no pressure at all. Just let go - and fall like a little waterfall.</p>
          <p>Let's build some happy little clouds up here. Everyone is going to see things differently - and that's the way it should be. Let's do that again. A tree needs to be your friend if you're going to paint him. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it.</p>
        </article>
      </section> */}
    </div>
  );
}

export default App;
