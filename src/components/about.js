// AboutUsPage.js

import React from "react";
import TeamMember from "./TeamMembers"; // Assuming you have a component for displaying team members
import User from "./User";
import UserClass from "./UserClass";

function AboutUsPage() {
  return (
    <div className="about-us-page">
      {/* <User name={"JERIN OUSEPH"} place={"THRISSUR"} /> */}
      <UserClass name={"JERIN OUSEPH"} place={"THRISSUR"} />
      <h1>About Us</h1>
      <p>
        Welcome to our food delivery app! We're dedicated to providing you with
        delicious meals delivered right to your doorstep.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make ordering food as convenient and enjoyable as
        possible for our customers. We strive to deliver high-quality meals from
        the best restaurants in town.
      </p>

      <h2>Meet Our Team</h2>
      <div className="team-members">
        <TeamMember
          name="John Doe"
          position="CEO"
          bio="John is passionate about revolutionizing the food delivery industry and ensuring customer satisfaction."
          imageUrl={
            "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=826&t=st=1706678796~exp=1706679396~hmac=0cb5d825e7247258215872b254c97c1d04a70f74ddfa3671a0daa4ce9b2b0ead"
          }
        />
        <TeamMember
          name="Jane Smith"
          position="CTO"
          bio="Jane oversees the technical aspects of our app, ensuring smooth functionality and user experience."
          imageUrl={
            "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=826&t=st=1706678851~exp=1706679451~hmac=a615dec6679a1fef327919c85a12e7e047fec283a10c91abde7ed15ae8aa7a03"
          }
        />
        <TeamMember
          name="Mark Johnson"
          position="Head of Marketing"
          bio="Mark leads our marketing efforts, spreading the word about our app and reaching new customers."
          imageUrl={
            "https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?w=360&t=st=1706679331~exp=1706679931~hmac=556ea0e823b0812455c5cc1f283cd18a655c2e96c0ae7cc55cdf6462b6523052"
          }
        />
        <TeamMember
          name="Emily Brown"
          position="Customer Support Manager"
          bio="Emily is dedicated to providing exceptional customer support and ensuring that every user has a positive experience."
          imageUrl={
            "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=826&t=st=1706679360~exp=1706679960~hmac=21c5332d5bfa7edc4ad13586644038cbad320245e45bcfc9b30a14c389864fed"
          }
        />
      </div>

      <h2>Customer Testimonials</h2>
      <div className="testimonials">
        <blockquote>
          "I love using this app! The food arrives quickly and is always
          delicious."
          <cite>- Sarah, New York</cite>
        </blockquote>
        <blockquote>
          "Great service! I order from here all the time and have never been
          disappointed."
          <cite>- Michael, Los Angeles</cite>
        </blockquote>
        {/* Add more testimonials as needed */}
      </div>
    </div>
  );
}

export default AboutUsPage;
