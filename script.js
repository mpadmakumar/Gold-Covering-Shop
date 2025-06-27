var sidenav = document.getElementById('sidenav');
var login = document.querySelectorAll('login-body');

function opennav()
{
    sidenav.style.left = "0px";
}

function closenav()
{
    sidenav.style.left= "-400px";
}


const products = [
    {
      name: "Dalar Chain",
      price: 200,
      oldPrice: 400,
      guarantee: "6 months",
      image: "dc.jpeg",
      description: "Traditional gold covering chain, perfect for casual and festive wear."
    },
    {
      name: "Kammal",
      price: 150,
      oldPrice: 300,
      guarantee: "6 months",
      image: "k.jpeg",
      description: "Stylish and lightweight gold covering earrings. Comfortable for daily wear."
    },
    {
      name: "Thali Kodi",
      price: 230,
      oldPrice: 450,
      guarantee: "6 months",
      image: "tc.jpeg",
      description: "Strong and shiny thali chain with traditional pattern, ideal for marriage use."
    },
    {
      name: "Valayal",
      price: 180,
      oldPrice: 350,
      guarantee: "6 months",
      image: "v.jpeg",
      description: "Beautiful pair of bangles with a gold finish. Light-weight and elegant."
    },
    {
      name: "Haram",
      price: 300,
      oldPrice: 600,
      guarantee: "6 months",
      image: "haram.jpeg",
      description: "Long gold covering haram with temple-style design. Grand for functions."
    },
    {
      name: "Necklace",
      price: 250,
      oldPrice: 500,
      guarantee: "6 months",
      image: "n.jpeg",
      description: "Elegant short necklace with stone and gold polish. Best for festivals."
    },
    {
        name: "Long Chain",
        price: 250,
        oldPrice: 400,
        guarantee: "6 months",
        image: "lc.jpeg",
        description: "Elegant long gold covering chain. Traditional model with a 6-month color guarantee. Ideal for weddings and festivals."
      },
      {
        name: "Jimiki Kammal",
        price: 250,
        oldPrice: 300,
        guarantee: "6 months",
        image: "jk.jpeg",
        description: "Classic Jimiki-style gold covering earrings. Light weight and long-lasting polish. Suitable for all age groups."
      },
      {
        name: "Stone Valayal",
        price: 250,
        oldPrice: 450,
        guarantee: "6 months",
        image: "tc.jpeg",
        description: "Beautifully designed stone bangles (valayal) with sparkling stones. Comes in multiple sizes and has a glossy finish."
      },
      {
        name: "Stone Jimiki Kammal",
        price: 250,
        oldPrice: 350,
        guarantee: "6 months",
        image: "sj.jpeg",
        description: "New model Jimiki with stone work. Traditional look with added modern sparkle. Perfect for festive occasions."
      },
      {
        name: "Stone Kammal",
        price: 150,
        oldPrice: 300,
        guarantee: "6 months",
        image: "sk.jpeg",
        description: "Small, stylish gold covering earrings with floral stone designs. Lightweight and suitable for daily wear."
      },
      {
        name: "Valayal",
        price: 250,
        oldPrice: 500,
        guarantee: "6 months",
        image: "vs.jpeg",
        description: "Thick and sturdy gold covering bangles. Smooth finish and best choice for regular use with 6-month guarantee."
      }
    
  ];
  

  function openProductModal(index) {
    const p = products[index];
    document.getElementById("modalImg").src = p.image;
    document.getElementById("modalTitle").textContent = p.name;
    document.getElementById("modalDesc").textContent = p.description;
    document.getElementById("oldPrice").textContent = `${p.oldPrice}`;
    document.getElementById("modalPrice").textContent = ` ${p.price} `;
    document.getElementById("modalGuarantee").textContent = p.guarantee;

    document.getElementById("productModal").style.display = "block";
  }

  // document.querySelector(".close-btn").onclick = function () {
  //   document.getElementById("productModal").style.display = "none";
  // };
  function closeBtn(){
      document.getElementById("productModal").style.display = "none";
  }

  window.onclick = function (event) {
    const modal = document.getElementById("productModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };



  function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    chatBox.style.display = (chatBox.style.display === "none" || chatBox.style.display === "") ? "block" : "none";
  }
  
  function chat() {
    const input = document.getElementById("userInput");
    const userText = input.value.trim();
    if (userText === "") return;
  
    const response = getBotReply(userText);
    const log = document.getElementById("chatLog");
    log.innerHTML += `<div><b>You:</b> ${userText}</div><br><div><b>Bot:</b> ${response}</div>`;
    input.value = "";
    log.scrollTop = log.scrollHeight;
  }
  function getBotReply(msg) {
    msg = msg.toLowerCase();
  
    // Tamil letter detection regex (அ to ள் range)
    const isTamil = /[அ-ஹஂ௦-௯]/.test(msg);
  
    if (isTamil) {
      // 💬 Tamil Replies
      if (msg.includes("விலை")) return "எல்லா பொருட்களும் ₹150 முதல் தொடங்குகிறது.";
      else if (msg.includes("உறுதி")) return "எல்லா பொருட்களுக்கும் 6 மாதம் வரை உறுதி உண்டு.";
      else if (msg.includes("அட்ரஸ்")) return "எங்கள் கடை சிவகாசியில் உள்ளது. அழைக்க: 6374306230";
      else if (msg.includes("நேரம்")) return "கடை நேரம்: காலை 9am - மாலை 8pm";
      else if (msg.includes("வாட்ஸ்அப்")) return `<a href='https://wa.me/916374306230' target='_blank'>WhatsApp-இல் தொடர்பு கொள்ளுங்கள்</a>`;
      else return "மன்னிக்கவும், உங்கள் கேள்வியை புரிந்துக்கொள்ளவில்லை. தயவுசெய்து வேறு வார்த்தைகளில் கேளுங்கள்.";
    } else {
      // 💬 English Replies
      if (msg.includes("hi")) return "hi";
      else if (msg.includes("price")) return "All products start from ₹150 and above.";
      else if (msg.includes("guarantee")) return "All items come with a 6-month guarantee.";
      else if (msg.includes("address") || msg.includes("location") || msg.includes("shop")) return "Our shop is located in Sivakasi. Call: 6374306230.";
      else if (msg.includes("time")) return "Shop hours: 9 AM to 8 PM daily.";
      else if (msg.includes("whatsapp")) return `<a href='https://wa.me/916374306230' target='_blank'>Contact us on WhatsApp</a>`;
      else return "Sorry, I didn’t understand your question. Please try using different words.";
    }
  }

   function closeBtn1(){
      document.getElementById("login-content").style.display = "none";
  }

  setTimeout(function(){
          document.getElementById("login-content").style.display = "none";
  }, 10000);

   setTimeout(() => {
      document.body.classList.add('intro-ended');
      const intro = document.getElementById('intro');
      intro.style.display = 'none';
      document.body.style.overflow = 'auto'; // enable scrolling
    }, 4000);