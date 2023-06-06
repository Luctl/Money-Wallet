import React from 'react';
import "../App.css";
import "./transactions.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/Navbar';
import Slider from "react-slick";

const Transactionpage = () => {
  // Sample data for five people
  const people = [
    {
      name: "Kutz Ruzzel Sumaya",
      description: "FullStack Developer",
      image: "kutz.jpg" 
    },
    {
      name: "Alfonso Tianzon",
      description: "Web Design",
      image: "fonso.jpg" // Replace with the actual image URL or path
    },
    {
      name: "Andre Quimio",
      description: "Project Manager",
      image: "andre.jpg" // Replace with the actual image URL or path
    },
    {
      name: "Aeroll Garcia",
      description: "SRS Manager",
      image: "erol.jpg" // Replace with the actual image URL or path
    },
    
    {
      name: "Jude Russel Roxas",
      description: "Software Tester",
      image: "asel.jpg" // Replace with the actual image URL or path
    },
    
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1 className='test'>About Us</h1>
        <Slider {...sliderSettings}>
          {people.map((person, index) => (
            <div key={index}>
              <h2>{person.name}</h2>
              <div key={index} className="slider-image">
              <img src={person.image} alt={person.name} />
              <p>{person.description}</p>
            </div>
            </div>
          ))}
        </Slider>
      </div>
      <main>
    <section class="about-us">
      <p>
        Welcome to our financial record web app! We are dedicated to providing you with a user-friendly platform for managing and organizing your financial records.
        Our goal is to simplify your financial management process by offering a secure and efficient way to track your income, expenses, investments, and more. Whether you are an individual, a small business owner, or a finance professional, our web app is designed to meet your specific needs.
      </p>
      <h2>Key Features</h2>
      <ul>
        <p>Record and categorize transactions</p>
        <p>Budgeting tools</p>
        <p>Investment tracking</p>
        <p>Reports and analytics</p>
        <p>Secure data storage</p>
        <p>User-friendly interface</p>
      </ul>
      <p>
        We are committed to continuous improvement and value your feedback. If you have any suggestions or encounter any issues while using our web app, please don't hesitate to reach out to our support team.
        Thank you for choosing our financial record web app. We look forward to helping you achieve financial success and peace of mind.
      </p>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 Financial Record Web App. All rights reserved.</p>
  </footer>
    </div>

  );
}

export default Transactionpage;