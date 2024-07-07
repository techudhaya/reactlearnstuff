import './BoxAnimation.css';

// Define the custom component
class CustomCard extends HTMLElement {
  constructor() {
    super(); // Always call super first in the constructor.
    
    // Attach a shadow DOM to the element
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Create elements inside shadow DOM
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'card');
    
    const heading = document.createElement('h2');
    heading.textContent = "This is a Custom Card Component";

    const content = document.createElement('p');
    content.textContent = "This is a custom card component created using Web Components.";
    
    // Add some style
    const style = document.createElement('style');
    style.textContent = `
      .card {
        padding: 20px;
        margin: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        font-family: Arial, sans-serif;
      }
    `;
    
    // Attach elements to shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(heading);
    wrapper.appendChild(content);
  }
}

// Register the custom element
customElements.define('custom-card', CustomCard);

function Message() {
  return (
    <div className="parent">
      <custom-card></custom-card>
    </div>
  )
}

export default Message;