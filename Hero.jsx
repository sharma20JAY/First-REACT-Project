const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Nike Air is our iconic innovation that uses pressurized air in a
          durable, flexible membrane to provide lightweight cushioning. The air
          compresses on impact and then immediately returns to its original
          shape and volume,ready for the next impact.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Available On</p>
        <div className="brand-icons">
            <img src="amazon.png" alt="amazon-logo " />
            <img src="flipkart.png" alt="flipkart-logo " />
        </div>
        </div>
      </div>
      <div className="hero-image">
      <img src="shoe_image.png" alt="hero-logo" />
      </div>
    </main>
  );
};

export default HeroSection;
