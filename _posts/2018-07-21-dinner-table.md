---
layout: post
title: "Dinner Table"
date: 2018-07-21 10:30:00
author: Rhys Gregory
categories: portfolio
tags: [ux design, ui design]
imageThumb: dinner-table__thumb.jpg
imageHero: dinner-table__hero.jpg
excerpt: "Dinner Table makes it easy to catch up family or friends that are restricted by time zone and geographical boundaries."
---

<style>
	blockquote {
		font-size: 24px;
		padding-left: 16px;
		font-style: italic;
	}
</style>

<div class="o-wrapper  o-wrapper--narrow  u-pt  u-pb+" markdown="1">

Dinner Table is a communication App that makes it easier to catch up with family or friends that are restricted by time zone and geographical boundaries.

<small>Note: This is a unsolicited project demonstrating the UX Design Procress. The App has not gone into development.</small>

## What are we trying to solve?

Families and friends are increasingly spreading all over a single country or even all over the world.
While staying connected has grown leaps and bounds with technology, people still face problems across difficult time zones when they want a face to face personal conversation.



---

## Discovery & Research

#### User Research

To give us a deep understanding into the user’s needs and ensure that we’re solving a problem that actually exists, we conducted User Interviews with 10 participants.

> When dealing with the complex motivations behind personal experiences and social behaviours, I felt the primary research should be **User Interviews**.

That’s not to say that surveys couldn't supplement the research as they can be helpful for collecting data about your users, but the data and numbers retrieved for this subject matter could be misleading.

A Competitive Analysis was completed using a Feature Inventory to compare the market.

---

## Synthesise Research & Design Strategy

#### Synthesizing Research

<div class="o-layout  o-layout--center">
	<div class="o-layout__item  u-1/1  u-1/2-lap-and-up">
		<p>Through User Interviews, I found that one of the biggest problems people face are time zones that don’t match up. This makes it hard to organise and participate in video calls. Either someone has to wake up really early or someone has to stay up late, either way, catch ups can become more a task than something you should enjoy. Users want a better way to deal with this challenge.</p>
		<p>Instant messaging can be a great convenience tool while ‘on the go’, but the downside is it can become impersonal. Users want more personal catch ups.</p>
		<blockquote>When want to continue the convenience of instant messaging, but keep the catch ups personal.</blockquote>
	</div>
	<div class="o-layout__item  u-1/1  u-1/2-lap-and-up">
		<img src="/img/portfolio/dinner-table/affinity-map.jpg" class="u-mb+">
	</div>
</div>

The highlight of peoples catch up experiences are often when you and the people your connecting with are simulating real life activities. This can be activities like going to a walk together, or having a few drinks after work.

Users want to catch up like the way you used to before the geographical boundaries.

#### Personas

<div class="o-layout  o-layout--center">
	<div class="o-layout__item  u-1/1  u-1/2-lap-and-up">
	<div style="padding: 24px; background-color: #e0e0e0;" class="u-mb+">
		<img src="/img/portfolio/dinner-table/primary-persona.jpg">
	</div>
	</div>
	<div class="o-layout__item  u-1/1  u-1/2-lap-and-up">
		<blockquote>Meet Charlene. She wants to have a convenient way to communicate during the week, but spend more time on the weekends having personal, fun catch ups that work with her families time zone differences.</blockquote>
	</div>
</div>

#### Define the problem

> People need a way to have better catch ups that work for time zone differences, are more personal than text messages, and simulate real life activities because time zones don’t always sync, instant messaging can become impersonal, and simulating real life activities are the best catch ups.

#### Feature Prioritization (MVP)

In its simplest form, the features we need are to allow users to connect, start group conversations, record questions from notes, record answers, and stitch them together into one amazing video. This can all be done with time zone and geographical boundaries. While enhancing the conversation with funny overlay effects or look up interesting icebreakers or pop culture topics, these are not essential to the primary need of the user.

* Connect with users
* Create group conversations
* Write notes for questions
* Record video
* Merge videos into movie

#### Project Proposal

>In an ever expansive world, families want a better way to catch up when restricted by time zone and geographical boundaries. Their next best catch up is just one Dinner Table catch up away!

WRITE THIS BETTER: Imagine an amazing video with questions going back and forth, everyone getting involced, 

Dinner Table makes it easy to catch up family or friends that are restricted by time zone and geographical boundaries. In its simplest form, the features allow users to connect, start group conversations, note down questions on the run, record questions and answers, and stitch them all together into one amazing dinner table video catch up. This can all be done in the convenience of your own time to tackle time zone and geographical boundaries.

---

## Placement & Layout Design

#### Sketching and Testing

<div class="o-layout  o-layout--center">
	<div class="o-layout__item  u-1/3">
		<img src="/img/portfolio/dinner-table/sketch-flow-1.gif" class="u-mb+">
	</div>
	<div class="o-layout__item  u-1/3">
		<img src="/img/portfolio/dinner-table/sketch-flow-2.gif" class="u-mb+">
	</div>
	<div class="o-layout__item  u-1/3">
		<img src="/img/portfolio/dinner-table/sketch-flow-3.gif" class="u-mb+">
	</div>
</div>

<div class="o-layout  o-layout--center">
	<div class="o-layout__item  u-1/1  u-1/2-lap-and-up">
		<h6>Paper Prototype Usability Test</h6>
		<div style="background: #e0e0e0; padding: 24px;" class="u-mb+">
			<video width="349" height="600" controls loop muted style="display: block; margin: auto;">
				<source src="/img/portfolio/dinner-table/paper-prototype-test.mp4" type="video/mp4">
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
	<div class="o-layout__item  u-1/1  u-1/2-lap-and-up">
		<h6>The Task</h6>
		<blockquote>Go into the conversation with Mary. Record a Question for Mary. Finish the video and return to the Conversation.</blockquote>
		<h6>The Results</h6>
		<p>The screen flow tested well. The task was completed with ease.</p>
		<blockquote>I saw the participant look at the icons first and then read the labels to make sure the correct path was chosen.</blockquote>
		<p>I should make is slightly clearer where the record button is. Possibly use a label like "Begin here to record a question".</p>
	</div>
</div>

#### Information Architecture

###### Navigation

<p>As the Happy Path of the Application is looking to be quite specific, I will mainly be using local navigation. The main path will most likely be from the Catch Up list to the selected Catch Up where I’ll have local navigation. I haven’t identified many pages that need to be accessed globally and quickly so there is no need for some type of global bottom nav bar.</p>

<div class="o-layout  o-layout--center">
	<div class="o-layout__item  u-1/1  u-1/2-lap-and-up">
		<h6>Card Sorting</h6>
		<img src="/img/portfolio/dinner-table/card-sorting.jpg" class="u-mb+">
	</div>
	<div class="o-layout__item  u-1/1  u-1/2-lap-and-up">
		<h6>Site Map</h6>
		<img src="/img/portfolio/dinner-table/site-map.jpg" class="u-mb+">
	</div>
</div>

---

## Execution

#### Platform

The main feature of Dinner Table requires the advantage of hardware capabilities like video and device storage. With that consideration in mind, I chose to make **Native Apps** for this Product rather than a website.

#### Wireframes

###### Lo Fi

<div class="o-layout  o-layout--center">
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/lo-fi-wireframe-1.gif" class="u-mb+">
	</div>
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/lo-fi-wireframe-2.gif" class="u-mb+">
	</div>
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/lo-fi-wireframe-3.gif" class="u-mb+">
	</div>
<!-- 	<div class="o-layout__item  u-1/3  u-1/6-lap-and-up">
		<img src="/img/portfolio/dinner-table/lo-fi-wireframe-4.gif" class="u-mb+">
	</div> -->
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/lo-fi-wireframe-5.gif" class="u-mb+">
	</div>
<!-- 	<div class="o-layout__item  u-1/3  u-1/6-lap-and-up">
		<img src="/img/portfolio/dinner-table/lo-fi-wireframe-6.gif" class="u-mb+">
	</div> -->
</div>

###### Med Fi

<div class="o-layout  o-layout--center">
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/med-fi-wireframe-1.png" class="u-mb+">
	</div>
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/med-fi-wireframe-2.png" class="u-mb+">
	</div>
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/med-fi-wireframe-3.png" class="u-mb+">
	</div>
<!-- 	<div class="o-layout__item  u-1/3  u-1/6-lap-and-up">
		<img src="/img/portfolio/dinner-table/med-fi-wireframe-4.png" class="u-mb+">
	</div> -->
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/med-fi-wireframe-5.png" class="u-mb+">
	</div>
<!-- 	<div class="o-layout__item  u-1/3  u-1/6-lap-and-up">
		<img src="/img/portfolio/dinner-table/med-fi-wireframe-6.png" class="u-mb+">
	</div> -->
</div>

###### Hi Fi

<div class="o-layout  o-layout--center">
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/hi-fi-wireframe-1.png" class="u-mb+">
	</div>
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/hi-fi-wireframe-2.png" class="u-mb+">
	</div>
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/hi-fi-wireframe-3.png" class="u-mb+">
	</div>
<!-- 	<div class="o-layout__item  u-1/3  u-1/6-lap-and-up">
		<img src="/img/portfolio/dinner-table/hi-fi-wireframe-4.png" class="u-mb+">
	</div> -->
	<div class="o-layout__item  u-1/2  u-1/4-lap-and-up">
		<img src="/img/portfolio/dinner-table/hi-fi-wireframe-5.png" class="u-mb+">
	</div>
<!-- 	<div class="o-layout__item  u-1/3  u-1/6-lap-and-up">
		<img src="/img/portfolio/dinner-table/hi-fi-wireframe-6.png" class="u-mb+">
	</div> -->
</div>

#### Color

Dinner Table uses a color theme inspired by the deep browns and rich greens from the real life dinner table.

* Dinner Table’s primary color is Table Brown
* Dinner Table’s secondary color is Thyme Green

<img style="display: block; margin: auto; max-width: 900px;" src="/img/portfolio/dinner-table/colour-theme.png" class="u-mb+">

#### Task Scenarios

In order to understand what works and doesn’t work for my user, I have to watch them interact with your prototype. To do this effectively, I gave testers a realistic activity that fairly simulates how a real user would interact with your app.

<div style="padding-left: 24px;">
	<b>User Goal: Create a New Catch Up Event</b>
	<p>Task Scenario: You have no upcoming catch ups organised with your family. Create a new Catch Up event and save it.</p>
	<b>User Goal: Write down a Note</b>
	<p>Task Scenario: You have an upcoming catch up with your family and have just thought of a question to ask Mary. Find the upcoming catch up and note down your question and save it.</p>
	<b>User Goal: Record a Question</b>
	<p>Task Scenario: It’s time to record a question for your upcoming family Catch Up. Remind yourself of your question notes, and then record that question for Mary.</p>
</div>

#### First Prototype

<div style="padding: 24px; background-color: #e0e0e0;" class="u-mb+">
	<video width="360" height="715" loop autoplay muted style="display: block; margin: auto;">
		<source src="/img/portfolio/dinner-table/prototype-demo.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
</div>

---

## Usability Testing

#### Conduct Usability Test

<div class="o-layout  o-layout--center  u-mt+  u-mb+">

	<div class="o-layout__item  u-1/2-lap-and-up">
		<div class="video-iframe  u-mb">
			<iframe class="video-iframe__iframe" src="https://www.youtube.com/embed/C87fZ-UxJ18" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</div>
	</div>
	<div class="o-layout__item  u-1/2-lap-and-up">
		<p>A Usabilty Study was conducted with 12 test participants using the Task Scenarios from the execution phase. The goal was to discover key metrics about how the prototype performed.</p>
		<blockquote>What are you considering?</blockquote>
		<blockquote>What do you think you’d do now?</blockquote>
		<blockquote>Now, show me how you would…</blockquote>
	</div>

</div>

#### Synthesise findings

###### Plus / Delta Columns

<div class="o-layout  o-layout--center">
	<div class="o-layout__item  u-1/1  u-1/2-lap-and-up">
		<img src="/img/portfolio/dinner-table/plus-delta-plus.jpg" class="u-mb+">
	</div>
	<div class="o-layout__item  u-1/1  u-1/2-lap-and-up">
		<img src="/img/portfolio/dinner-table/plus-delta-delta.jpg" class="u-mb+">
	</div>
</div>

**User pain points and highlights found throughout the testing session**

Need more user feedback once an event/note/question was created or saved. "Name" placeholder for Creating a Catch Up was confused with it being for your own name. I don't believe the purpose of Notes was understood.

**UX Improvements I feel would have the most positive impact on the user’s experience**

Adding a Toast message with feedback once something is created, saved or edited. "Name" placeholder for Creating a Catch Up event could be replaced with "Name of Catch Up" to help with confusing with your own name. Add some Feature explainations in each section to help explain its purpose. For example, I don't believe the purpose of Notes was understood.

**Changes made to the prototype**

* Adding a Toast message with feedback
* Change "Name" placeholder to "Name of Catch Up"
* Onboarding Features explainations/tips to each page

---

## Final Prototype

<iframe style="margin: auto;" class="resp-iframe" width="428" height="866" src="//invis.io/WHN05BRMFS9" frameborder="0" allowfullscreen></iframe>
<p class="u-text-center"><a href="https://invis.io/FZN3HJ8DV5H" target="_blank">Mobile view</a></p>

</div>