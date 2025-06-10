![image](https://github.com/user-attachments/assets/2ef24078-0a01-4199-ab03-b9f9c5453a2f)

# Flixr - Movie Recommendation Tool

A simple and intuitive movie picker that helps users escape decision paralysis when choosing what to watch. Stop scrolling, start watching!

Link to the [Flixr](https://freed-man.github.io/mp2-flixr/)

## Table of Contents:
1. [**User Experience (UX)**](#ux)
   * [**Project purpose**](#project-purpose)
   * [**User goals**](#user-goals)
   * [**User stories**](#user-stories)
   * [**Design**](#design)

2. [**Features**](#features)
   * [**Current features**](#current-features)
   * [**Potential features**](#potential-features)

3. [**Technologies used**](#technologies-used)

4. [**Testing**](#testing)

5. [**Deployment**](#deployment)

## UX

### Project purpose
Flixr was created to solve the common problem of "choice paralysis" that occurs when browsing streaming platforms. Instead of spending 30+ minutes scrolling through endless options, users can quickly get personalized movie recommendations based on their current mood and available time.

### User goals
The website serves users who want to:
* Find movie recommendations quickly without endless browsing
* Discover films based on their current mood and time constraints
* Get surprised with random movie picks when feeling adventurous
* Avoid genres they're not in the mood for
* Have a simple, stress-free movie selection experience

### User stories

**As a tired user after work, I want:**
* To quickly find a relaxing movie that fits my 90-minute window before bed
* To avoid action or intense films when I just want to unwind
* To get recommendations without creating accounts or complex preferences

**As someone with friends over, I want:**
* To find a crowd-pleasing movie that everyone can enjoy
* To quickly see runtime so I know if we have enough time
* To get comedy or feel-good suggestions for group viewing

**As an indecisive viewer, I want:**
* A "surprise me" option when I can't decide what mood I'm in
* To avoid spending more time choosing than actually watching
* Simple yes/no choices rather than overwhelming filter options

**As a movie enthusiast, I want:**
* To discover films I might not have considered
* To filter out genres I'm currently not interested in
* To see movie details like rating and plot before committing

### Design

**Problem Solving Approach**
* The design prioritizes speed and simplicity over comprehensive features. Every interaction is designed to get users to a movie recommendation in under 30 seconds.

**Color Scheme**
* Clean, modern palette that works over background images
* Blue (#3498db) for interactive elements and consistency
* High contrast text with semi-transparent backgrounds for readability
* Minimal color palette to avoid decision fatigue

**Typography**
* Simple, readable fonts (Arial fallback for maximum compatibility)
* Bold text for better visibility over background images
* Consistent sizing hierarchy for easy scanning

**Layout Philosophy**
* Mobile-first responsive design
* Single-page application to minimize navigation
* Grid-based button layouts for easy touch interaction
* Prominent call-to-action buttons

**User Interface Decisions**
* Emoji icons for instant visual recognition (😂 Laugh, 🎲 Surprise Me)
* Large, touch-friendly buttons for mobile users
* Minimal form fields to reduce friction
* Progressive disclosure - only show what's needed when it's needed

**Wireframes**

These wireframes were developed using the software Balsamiq during the phase of the design and planning stages for this project.

<details>
  <summary>Main Page</summary>
  <img src="https://github.com/user-attachments/assets/9a11acb0-1d9e-4f79-aef3-4b983ed9643f" width="80%">
</details>

<details>
  <summary>Result</summary>
  <img src="https://github.com/user-attachments/assets/17f6ee19-4dea-4c0f-a41e-5333eeedb46e" width="80%">
</details>

## Features

### Current features:
<img src="https://github.com/user-attachments/assets/b7dab363-ca37-4422-95ac-cf1f96f1dc8c" width="80%">

<details>
  <summary>Mood-Based Filtering - choose from 5 distinct moods (Comedy, Mystery, Drama, Thriller, Feel Good)</summary>
  <img src="https://github.com/user-attachments/assets/92065ee6-b7de-4625-b3d9-a6e883f20cc6" width="80%">
</details>

<details>
  <summary>Time-Based Filtering - select available viewing time (90 min, 2 hrs, 2.5+ hrs)</summary>
  <img src="https://github.com/user-attachments/assets/9bee1a89-a727-440c-afce-8d2ec18f8ad3" width="80%">
</details>

<details>
  <summary>Genre Exclusion - optionally exclude genres you're not in the mood for</summary>
  <img src="https://github.com/user-attachments/assets/a06aa549-8af3-4e4d-b43b-3a1821875a5f" width="80%">
</details>

<details>
  <summary>Surprise Me Function - random movie picker for the truly indecisive</summary>
  <img src="https://github.com/user-attachments/assets/e2e6c44a-f770-4377-80b8-ed7d436294b7" width="80%">
</details>

<details>
  <summary>Movie Details Display - shows title, year, runtime, rating, genres, and plot</summary>
  <img src="https://github.com/user-attachments/assets/bc9a06bb-285e-4a92-a48b-10baed788057" width="80%">
</details>

<details>
  <summary>Responsive Design - works seamlessly on mobile, tablet, and desktop</summary>
  <img src="https://github.com/user-attachments/assets/06e6228e-ae07-4904-aedb-dfa1c6d3f74f" width="80%">
</details>

<details>
  <summary>Contact Form - simple feedback and feature request system</summary>
  <img src="https://github.com/user-attachments/assets/d657f1db-d219-4aad-8e2a-94ef3bc2833d" width="80%">
</details>

### Potential features:

  * Watch History - track previously watched movies
  * Watchlist Integration - save movies for later viewing
  * Session Memory - avoids showing the same movie twice in one session
  * Movie Trailer Links - direct links to trailers on YouTube or other video platform
  * Streaming Service Integration - show where movies are available to watch
  * User Ratings - allow users to rate recommended movies
  * Advanced Filters - director, actor, decade, or language preferences
  * Social Sharing - share movie recommendations with friends
  * Movie Database Expansion - integrate with external APIs for larger selection
  * Personalization - learn user preferences over time

## Technologies used

**HTML5:** Semantic structure and accessibility features

**CSS3:** Custom styling with flexbox and grid layouts

**JavaScript:** All functionality built without frameworks

## Testing

**Validations:**

<details>
  <summary>HTML</summary>
  <img src="https://github.com/user-attachments/assets/662533b8-5dbe-45cf-91b4-ac2146306360" width="80%">
</details>

<details>
  <summary>CSS</summary>
  <img src="https://github.com/user-attachments/assets/df92c226-e52c-4459-92a8-c8d1b1a6a273" width="80%">
</details>

<details>
  <summary>JavaScript</summary>
  <img src="https://github.com/user-attachments/assets/d4950f99-69bf-48d9-b201-7d830da828c4" width="80%">
  <img src="https://github.com/user-attachments/assets/2e63c700-8815-4041-8f7e-2bbd219187f4" width="80%">
</details>

**Lighthouse:**

<details>
  <summary>Desktop</summary>
  <img src="https://github.com/user-attachments/assets/72d6d6f3-d9de-43cd-bfef-bec3157a2d4e" width="80%">
  <img src="https://github.com/user-attachments/assets/b61b804f-edaf-4151-b57e-7ebc5278d7d2" width="80%">
</details>

<details>
  <summary>Mobile</summary>
  <img src="https://github.com/user-attachments/assets/236aa11a-76bf-4872-b7ed-d6a4b0354ea3" width="80%">
  <img src="https://github.com/user-attachments/assets/66c79cf8-0407-402b-bd46-dbfdd2ca4ab7" width="80%">
</details>

**Manual Testing Performed:**
* All button interactions and mood/time selections
* Genre exclusion toggle functionality
* Form validation for required fields
* Responsive behavior across different screen sizes
* Contact form submission and error handling
* "Try Another" functionality for both filtered and surprise modes
* Edge case testing (excluding all genres)

**Browser Compatibility:**
* Chrome, Firefox, Safari, Edge
* Mobile browsers on iOS and Android

**Accessibility Considerations:**
* Semantic HTML structure
* Keyboard navigation support
* High contrast text and backgrounds
* Touch-friendly button sizes

**Known Issues:**
* Limited movie database (50 curated films)
* Contact form submission is demonstration only

## Deployment
The Flixr website can be deployed locally to any static hosting service:

1. Clone or download the project files
2. Ensure file structure matches:
```
                                  flixr/
                                  ├── index.html
                                  ├── images/
                                  │   └── background.jpeg
                                  └── assets/
                                      ├── css/
                                      │   └── styles.css
                                      └── js/
                                          ├── script.js
                                          └── movieData.js
```
4. Open `index.html` in a web browser
